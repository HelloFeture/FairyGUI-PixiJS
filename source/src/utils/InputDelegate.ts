namespace fgui.utils {

    export class InputDelegate {

        protected _inited:boolean = false;
        protected _textField:GTextInput;
        protected _input:InputElement;
        protected _restrictString:string = null;
        protected _restrictRegex:RegExp = null;
        protected _type:InputType;

        private _focused:boolean = false;

        public constructor(tf:GTextInput) {
            this._textField = tf;
            this._input = new InputElement(tf);
        }

        public initialize():void {
            if(this._inited) return;
            
            this._input._addToStage();

            this._input.on("updateText", this.updateText, this);
            this._input.on(FocusEvent.CHANGED, this.focusHandler, this);

            this._textField.on(InteractiveEvents.Down, this.textFieldDownHandler, this);
            
            this._inited = true;
        }

        private textFieldDownHandler():void {
            this._onFocus();
        }

        public destroy():void {
            if(!this._inited) return;
            
            this._input._removeFromStage();

            this._textField.off(InteractiveEvents.Down, this.textFieldDownHandler, this);
            GRoot.inst.off(InteractiveEvents.Down, this.onStageDown, this);
            
            this._input.off("updateText", this.updateText, this);
            this._input.off(FocusEvent.CHANGED, this.focusHandler, this);

            this._inited = false;
        }

        public get text():string {
            return this._input.text;
        }

        public set text(v:string) {
            this._input.text = v;
        }

        public setColor(v:number) {
            return this._input.setColor(v);
        }

        private updateText():void {
            let textValue = this._input.text;
            let isChanged:boolean = false;
            if(this._restrictRegex != null) {
                let result: string[] = textValue.match(this._restrictRegex);
                if (result)
                    textValue = result.join("");
                else
                    textValue = "";
                isChanged = true;
            }
            
            if (isChanged && this._input.text != textValue)
                this._input.text = textValue;

            this._textField.text = this._input.text;

            this._textField.emit(TextEvent.Change, this._textField);
        }

        private onStageDown(e:PIXI.interaction.InteractionEvent):void {
            let target = GObject.cast(e.currentTarget);
            if(target != this._textField)
                this._input._hide();
        }

        private focusHandler(type: string): void {
            if (type == "focus") {
                if (!this._focused) {
                    this._focused = true;
                    this._textField._isTyping = true;
                    this._textField.alpha = 0;
                    this._textField.emit(FocusEvent.CHANGED, "focus", this._textField);
                    this._textField.emit(TextEvent.FocusIn, this._textField);
                }
            }
            else if (type == "blur") {
                if (this._focused) {
                    this._focused = false;
                    GRoot.inst.off(InteractiveEvents.Down, this.onStageDown, this);
                    this._textField._isTyping = false;
                    this._textField.alpha = 1;
                    this._input._onBlur();
                    this._textField.emit(FocusEvent.CHANGED, "blur", this._textField);
                    this._textField.emit(TextEvent.FocusOut, this._textField);
                }
            }
        }

        public get isFocused():boolean {
            return this._focused;
        }

        /**@internal */
        _getProperty(name:string):string {
            return this._inited && this._input.getAttribute(name) || null;
        }

        /**@internal */
        _setProperty(name:string, value:string):void {
            if(!this._inited) return;
            this._input.setAttribute(name, value);
        }

        get _restrict():string {
            return this._restrictString;
        }

        set _restrict(v:string) {
            this._restrictString = v;
            if(this._restrictString != null && this._restrictString.length > 0)
                this._restrictRegex = new RegExp(this._restrictString);
            else
                this._restrictRegex = null;
        }

        public get type():InputType {
            return this._type;
        }

        public set type(v:InputType) {
            if(v != this._type)
                this._type = v;
        }

        private tryHideInput():void {
            if (!this._textField.visible && this._input)
                this._input._removeFromStage();
        }

        /**@internal */
        _updateProperties():void {
            if (this.isFocused) {
                this._input.resetInput();
                this.tryHideInput();
                return;
            }

            this._input.text = this._textField.text;
            this._input.resetInput();
            this.tryHideInput();
        }
        

        /**@internal */
        _onFocus():void {
            if (!this._textField.visible || this._focused)
                return;
            
            GRoot.inst.off(InteractiveEvents.Down, this.onStageDown, this);
            GTimer.inst.callLater(() => {
                GRoot.inst.on(InteractiveEvents.Down, this.onStageDown, this);
            }, this);

            this._input._show();
        }
    }
}