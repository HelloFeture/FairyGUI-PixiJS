namespace fgui {

    export class InputElement extends PIXI.utils.EventEmitter {

        private htmlInput:HTMLInput;

        private _requestToShow:boolean = false;
        //private _requestToHide:boolean = false;

        private inputElement:HTMLInputElement | HTMLTextAreaElement = null;
        private inputDiv:HTMLDivElement = null;

        private _scaleX:number = 0;
        private _scaleY:number = 0;

        private textValue:string = "";
        private colorValue:number = 0xffffff;

        protected _textfield:GTextInput;

        public constructor(tf:GTextInput) {
            super();
            this._textfield = tf;
        }
        
        /**@internal */
        _addToStage():void {
            this.htmlInput = HTMLInput.inst;   //take multiple canvas on webpage into account?
        }

        private initElement():void {
            let point = this._textfield.localToGlobal(0, 0);
            let x = point.x;
            let y = point.y;
            let scaleX = this.htmlInput._scaleX;
            let scaleY = this.htmlInput._scaleY;

            if(!this._textfield.multipleLine)
                this.inputElement.style.top = (-this._textfield.leading * scaleY) + "px";
                
            this.inputDiv.style.top = (y + 1) * scaleY + "px";
            this.inputDiv.style.left = x * scaleX + "px";
            
            let node:GObject = this._textfield;
            let cX = 1;
            let cY = 1;
            let rotation = 0;
            while (node.parent) {
                cX *= node.scaleX;
                cY *= node.scaleY;
                rotation += node.rotation;
                node = node.parent;
            }

            let style:any = this.inputDiv.style;
            style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = "rotate(" + rotation + "deg)";
            
            this._scaleX = scaleX * cX;
            this._scaleY = scaleY * cY;
        }

        public get textField():GTextField {
            return this._textfield;
        }

        /**@internal */
        _show():void {
            if (!this.htmlInput.isCurrentInput(this)) {
                this.inputElement = this.htmlInput.requestInput(this);
                if(!this._textfield.multipleLine)
                    (this.inputElement as HTMLInputElement).type = this._textfield.type;
                for(let key in this._attrsCache)
                    this.inputElement.setAttribute(key, this._attrsCache[key]);
                this.inputDiv = this.htmlInput._wrapper;
            }
            else
                this.inputElement.onblur = null;

            this.htmlInput._requestToShow = true;
            this._requestToShow = true;

            this.initElement();
        }
        
        public onBlurHandler():void {
            this.htmlInput.clearInputElement();
            this.htmlInput.clearAttributes(this._attrsCache);
            window.scrollTo(0, 0);
        }
        
        /**@internal */
        _hide():void {
            /*this._requestToHide = true;
            if (this.htmlInput && PIXI.utils.isMobile && iOS) {  //if os is ios need to clearInput once
                this.htmlInput.disconnect(this);
            }*/
        }

        public get text():string {
            if (!this.textValue)
                this.textValue = "";
            return this.textValue;
        }

        public set text(value:string) {
            this.textValue = value;
            if(this.inputElement)
                this.inputElement.value = this.textValue;
        }
        
        public setColor(value:number):void {
            this.colorValue = value;
            if (this.inputElement)
                this.setElementStyle("color", utils.StringUtil.convertToHtmlColor(this.colorValue));
        }
        
        /**@internal */
        _onBlur():void {
            //this.emit("updateText");
        }

        public onInputHandler():void {
            window.setTimeout(() => {
                this.textValue = this.inputElement.value;
                Debug.log(this.textValue);
                this.emit("updateText");
                // if (this.inputElement && this.inputElement.selectionStart == this.inputElement.selectionEnd) {
                //     this.textValue = this.inputElement.value;
                //     Debug.log("onInputHandler", this.textValue, this.inputElement.value);
                //     this.emit("updateText");
                // }
            }, 0);
        }

        private setAreaHeight():void {
            let tf = this._textfield;
            if (tf.multipleLine) {
                let textheight = tf.textHeight;
                if (tf.height <= tf.fontSize) {
                    this.setElementStyle("height", tf.fontSize * this._scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
                else if(tf.height < textheight) {
                    this.setElementStyle("height", (tf.height) * this._scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
                else {
                    this.setElementStyle("height", (textheight + tf.leading) * this._scaleY + "px");

                    let rap = (tf.height - textheight) * this._scaleY;
                    let valign:number = this.getVAlignFactor(tf);
                    let top = rap * valign;
                    let bottom = rap - top;
                    this.setElementStyle("padding", top + "px 0px " + bottom + "px 0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
            }
        }

        private getVAlignFactor(textfield:GTextField):number {
            let vao = 0;
            switch(textfield.verticalAlign) {
                case VertAlignType.Top:
                    break;
                case VertAlignType.Middle:
                    vao = .5;
                    break;
                case VertAlignType.Bottom:
                    vao = 1;
                    break;
            }
            return vao;
        }
        
        public onClickHandler(e:Event):void {
            Debug.log("onClickHandler", e);
            if (this._requestToShow) {
                //e.stopImmediatePropagation();
                this._requestToShow = false;
                
                this.inputElement.value = this.text;
                if (this.inputElement.onblur == null)
                    this.inputElement.onblur = utils.Binder.create(this.onBlurHandler, this);

                this.resetInput();
                if (this._textfield.maxLength > 0)
                    this.inputElement.setAttribute("maxlength", String(this._textfield.maxLength));
                else
                    this.inputElement.removeAttribute("maxlength");
    
                this.inputElement.selectionStart = this.inputElement.value.length;
                this.inputElement.selectionEnd = this.inputElement.value.length;
                this.inputElement.focus();

                this.emit(FocusEvent.CHANGED, "focus", this.inputElement);
            }
        }
        
        public onDisconnect():void {
            this.inputElement = null;
            this.emit(FocusEvent.CHANGED, "blur", this.inputElement);
        }
        
        private setElementStyle(style:string, value:any):void {
            if(value == null) return;
            if (this.inputElement) {
                let ss:any = this.inputElement.style;
                ss[style] = value;
            }
        }

        private _attrsCache:{ [name:string] : string } = {};

        public setAttribute(name:string, value:string):void {
            if(name == null || value == null) return;
            this._attrsCache[name] = value;
        }

        public getAttribute(name:string):string {
            return this._attrsCache[name];
        }
        
        /**@internal */
        _removeFromStage():void {
            if (this.inputElement)
                this.htmlInput.disconnect(this);
        }
        
        public resetInput():void {
            if (this.inputElement) {
                let textfield:GTextInput = this._textfield;
                this.setElementStyle("fontFamily", textfield.font);
                this.setElementStyle("fontStyle", textfield.italic ? "italic" : "normal");
                this.setElementStyle("fontWeight", textfield.bold ? "bold" : "normal");
                this.setElementStyle("textAlign", textfield.align);
                this.setElementStyle("fontSize", textfield.fontSize * this._scaleY + "px");
                this.setElementStyle("color", utils.StringUtil.convertToHtmlColor(textfield.color));
                this.setElementStyle("width", textfield.width * this._scaleX + "px");  //take 'maxWidth' into account
                let va = "middle", vao = 0;
                switch(textfield.verticalAlign) {
                    case VertAlignType.Top:
                        va = "top";
                        break;
                    case VertAlignType.Middle:
                        va = "middle";
                        vao = .5;
                        break;
                    case VertAlignType.Bottom:
                        va = "bottom";
                        vao = 1;
                        break;
                }
                this.setElementStyle("verticalAlign", va);
                if (textfield.multipleLine)
                    this.setAreaHeight();
                else {
                    this.setElementStyle("lineHeight", textfield.lineHeight * this._scaleY + "px");
                    if (textfield.height < textfield.fontSize) {
                        this.setElementStyle("height", textfield.fontSize * this._scaleY + "px");
                        this.setElementStyle("padding", "0px 0px " + (textfield.fontSize * .5 * this._scaleX) + "px 0px");
                    }
                    else {
                        this.setElementStyle("height", textfield.fontSize * this._scaleY + "px");
                        let rap = (textfield.height - textfield.fontSize) * this._scaleY;
                        let top = rap * vao;
                        let bottom = rap - top, fsy = textfield.fontSize * .5 * this._scaleY;
                        if (bottom < fsy)
                            bottom = fsy;
                        this.setElementStyle("padding", top + "px 0px " + bottom + "px 0px");
                    }
                }

                this.inputDiv.style.clip = "rect(0px "+ (textfield.width * this._scaleX)+"px " +(textfield.height * this._scaleY)+"px 0px)";
                this.inputDiv.style.height = textfield.height * this._scaleY + "px";
                this.inputDiv.style.width = textfield.width * this._scaleX + "px";  //take 'maxWidth' into account
            }
        }
    }
}