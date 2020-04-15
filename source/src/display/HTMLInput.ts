namespace fgui {
    export class HTMLInput {

        private _input:InputElement;
        private _singleLine:HTMLInputElement;
        private _multiLine:HTMLTextAreaElement;
        private _curEle:HTMLInputElement | HTMLTextAreaElement;

        /**@internal */
        _wrapper:HTMLDivElement;
        private _delegateDiv:HTMLDivElement;
        private _canvas:HTMLCanvasElement;

        /**@internal */
        _requestToShow:boolean = false;
        /**@internal */
        _scaleX:number = 1;
        /**@internal */
        _scaleY:number = 1;

        public static isTyping:boolean = false;
        
        private constructor() {}

        private static _instance:HTMLInput;

        public static get inst():HTMLInput {
            if(!HTMLInput._instance)
                HTMLInput._instance = new HTMLInput();
            return HTMLInput._instance;
        }

        public initialize(container:HTMLElement, view:HTMLCanvasElement):void {
            this._canvas = view;
            let div;
            if (!this._delegateDiv) {
                div = document.createElement("div");
                this._delegateDiv = div;
                div.id = "__delegateDiv";
                container.appendChild(div);
                this.initDomPos(div);
                this._wrapper = document.createElement("div");
                this.initDomPos(this._wrapper);
                this._wrapper.style.width = "0px";
                this._wrapper.style.height = "0px";
                this._wrapper.style.left = "0px";
                this._wrapper.style.top = "-100px";

                this.setTransform(this._wrapper, "0% 0% 0px");
                div.appendChild(this._wrapper);

                GRoot.inst.on(InteractiveEvents.Click, this.canvasClickHandler, this);
                
                this.initInputElement(true);   //input
                this.initInputElement(false);  //textarea
            }
        }

        public isInputOn():boolean {
            return this._input != null;
        }

        private canvasClickHandler(e:Event):void {
           
            if (this._requestToShow) {
                this._requestToShow = false;
                this._input.onClickHandler(e);
                this.show();
            }
            else {
                if (this._curEle) {
                    this.clearInputElement();
                    this._curEle.blur();
                    this._curEle = null;
                }
            }
        }

        public isInputShown():boolean {
            return this._input != null;
        }
        
        public isCurrentInput(input:InputElement):boolean {
            return this._input == input;
        }
        
        private initDomPos(dom:HTMLElement):void {
            dom.style.position = "absolute";
            dom.style.left = "0px";
            dom.style.top = "0px";
            dom.style.border = "none";
            dom.style.padding = "0";
        }

        private setTransform(el:HTMLElement, origin:string, transform?:string):void {
            let style:any = el.style;
            style.transformOrigin = style.webkitTransformOrigin = style.msTransformOrigin = style.mozTransformOrigin = style.oTransformOrigin = origin;
            if(transform && transform.length > 0)
                style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = transform;
        }
        
        /**@internal */
        updateSize(sx:number, sy:number):void {
            if(!this._canvas)
                return;

            this._scaleX = sx;
            this._scaleY = sy;

            this._delegateDiv.style.left = this._canvas.style.left;
            this._delegateDiv.style.top = this._canvas.style.top;

            let cvsStyle:any = this._canvas.style;
            this.setTransform(this._delegateDiv, "0% 0% 0px", cvsStyle.transform || cvsStyle.webkitTransform || cvsStyle.msTransform || cvsStyle.mozTransform || cvsStyle.oTransform);
        }
        
        private initInputElement(multiline:boolean):void {
            let inputElement:HTMLInputElement | HTMLTextAreaElement;
            if (multiline) {
                inputElement = document.createElement("textarea");
                inputElement.style.resize = "none";
                this._multiLine = inputElement;
                inputElement.id = "stageTextAreaEle";
            }
            else {
                inputElement = document.createElement("input");
                this._singleLine = inputElement;
                inputElement.type = "text";
                inputElement.id = "stageInputEle";
            }
            
            this._wrapper.appendChild(inputElement);
            inputElement.setAttribute("tabindex", "-1");
            inputElement.style.width = "1px";
            inputElement.style.height = "12px";

            this.initDomPos(inputElement);
            let style:any = inputElement.style;
            style.outline = "thin";
            style.background = "none";
            style.overflow = "hidden";
            style.wordBreak = "break-all";
            style.opacity = 0;

            inputElement.oninput = (e) => {
                Debug.log("input", inputElement.value);
                if (this._input)
                    this._input.onInputHandler();
            };
        }

        public show():void {
            GTimer.inst.callLater(() => {
                this._curEle.style.opacity = "1";
                this._curEle.focus();
                Debug.log("show....callLater");
            }, this);
        }

        public disconnect(ele:InputElement):void {
            if (this._input == null || this._input == ele) {
                this.clearInputElement();

                if (this._curEle)
                    this._curEle.blur();
            }
        }

        public clearAttributes(obj:any):void {
            if(this._curEle) {
                for(let key in obj) {
                    this._curEle.removeAttribute(key);
                }
            }
        }
        
        public clearInputElement():void {
            if (this._curEle) {
                this._curEle.value = "";

                this._curEle.onblur = null;
                let style = this._curEle.style;
                style.width = "1px";
                style.height = "12px";
                style.left = "0px";
                style.top = "0px";
                style.opacity = "0";

                let el2;
                if (this._singleLine == this._curEle)
                    el2 = this._multiLine;
                else
                    el2 = this._singleLine;
                el2.style.display = "block";

                this._wrapper.style.left = "0px";
                this._wrapper.style.top = "-100px";
                this._wrapper.style.height = "0px";
                this._wrapper.style.width = "0px";
            }

            if (this._input) {
                this._input.onDisconnect();
                this._input = null;
                HTMLInput.isTyping = false;
            }
        }

        public requestInput(ele:InputElement):HTMLInputElement | HTMLTextAreaElement {
            this.clearInputElement();
            this._input = ele;
            HTMLInput.isTyping = true;
            
            let el2;
            if(this._input.textField.multipleLine) {
                this._curEle = this._multiLine;
                el2 = this._singleLine;
            }
            else {
                this._curEle = this._singleLine;
                el2 = this._multiLine;
            }
            el2.style.display = "none";

            return this._curEle;
        }
    }
}