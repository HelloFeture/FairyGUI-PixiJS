/// <reference path="./IColorableTitle.ts" />

namespace fgui {

    /**
     * 输入类型
     */
    export const enum InputType {
        /** 文本 */
        TEXT = "text",
        /** 密码 */
        PASSWORD = "password",
        /** 数字 */
        NUMBER = "number",
        /** email */
        EMAIL = "email",
        /** 电话 */
        TEL = "tel",
        /** URL */
        URL = "url"
    };

    export class GTextInput extends GTextField {
        
        protected _editable:boolean;
        protected _util:utils.InputDelegate = null;

        /**@internal */
        _isTyping:boolean = false;

        public constructor() {
            super();
            this.focusable = true;
            this.editable = true;  //init
            
            this.type = InputType.TEXT;

            this.on("removed", this.removed, this);
            this.on("added", this.added, this);
            this._util.initialize();
        }

    

        protected createDisplayObject(): void {
            super.createDisplayObject();
            this._displayObject.hitArea = new PIXI.Rectangle();
        }

        protected handleSizeChanged(): void {
            super.handleSizeChanged();
            let rect:PIXI.Rectangle = this._displayObject.hitArea as PIXI.Rectangle;
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        }

        private removed(disp: PIXI.DisplayObject):void {
            if(this._util)
                this._util.destroy();
        }

        private added(disp: PIXI.DisplayObject): void {
            if (this._util)
                this._util.initialize();
        }

        public requestFocus(): void {   //tab or call actively
            this.root.focus = this;
            this._util._onFocus();
        }

        public get editable(): boolean {
            return this._editable;
        }

        public set editable(v: boolean) {
            if(v != this._editable)
            {
                this._editable = v;
                
                if(this._editable) {
                    if(!this._util)
                        this._util = new utils.InputDelegate(this);
                    this._util.initialize();
                }
                else
                {
                    if(this._util)
                        this._util.destroy();
                }

                this.touchable = this._editable;
            }
        }

        private changeToPassText(text:string):string {
            let passText: string = "";
            for (let i: number = 0, num = text.length; i < num; i++) {
                switch (text.charAt(i)) {
                    case '\n':
                        passText += "\n";
                        break;
                    case '\r':
                        break;
                    default:
                        passText += '*';
                }
            }
            return passText;
        }

        protected getText():string {
            return this._util.text;
        }

        protected setText(value:string):void {
            if(value == null) value = "";
            if (this._text == value) return;
            this._util.text = value;
            super.setText(value);
        }

        public setColor(value:number):void {
            super.setColor(value);
            this._util.setColor(value);
        }

        public get promptText(): string {
            return this._util._getProperty("placeholder");
        }

        public set promptText(v: string) {
            if(v == null) v = "";
            this._util._setProperty("placeholder", v);
        }
        

        public get maxLength(): number {
            return parseInt(this._util._getProperty("maxlength")) || 0;
        }

        public set maxLength(v: number) {
            this._util._setProperty("maxlength", String(v));
        }

        public get restrict(): string {
            return this._util._restrict;
        }

        public set restrict(v: string) {
            this._util._restrict = v;
        }

        public get password(): boolean {
            return this.type == InputType.PASSWORD;
        }

        public set password(v: boolean) {
            this.type = InputType.PASSWORD;
        }

        public get type():InputType {
            return this._util.type;
        }

        public set type(t:InputType) {
            this._util.type = t;
        }

        public dispose():void {
            super.dispose();
            this.off("removed", this.removed, this);
            this.off("added", this.added, this);
            this._util.destroy();
            this._util = null;
        }

        protected renderNow(updateBounds: boolean = true): void {
            this._requireRender = false;
            this._sizeDirty = false;
            this._util._updateProperties();
            if(this._isTyping)
                this.decorateInputbox();
            let origText = this._text;
            if(this.type == InputType.PASSWORD)
                this._text = this.changeToPassText(this._text);
            super.renderNow(updateBounds);
            this._text = origText;
        }

        private decorateInputbox():void {
            //draw underlines?
        }

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 4);

            var str: string = buffer.readS();
            if (str != null){
                this.promptText = str;
            }

            str = buffer.readS();
            if (str != null){
                this.restrict = str;
            }

            var iv: number = buffer.readInt();
            if (iv != 0){
                this.maxLength = iv;
            }
            iv = buffer.readInt();
            if (iv != 0) {
                //keyboardType
                // if(iv == 4)
                //     this.type = InputType.NUMBER;
                // else if(iv == 3)
                //     this.type = InputType.URL;
                // else if(iv == 5)
                //     this.type = InputType.TEL;
                // else if(iv == 6)
                //     this.type = InputType.EMAIL;
       
            }
            if (buffer.readBool()) {
                this.password = true;
            }
            Debug.log(this.password, this.promptText);
            this.updateVertAlign();
        }

        private updateVertAlign(): void {
            // @FIXME
            // switch (this._verticalAlign) {
            //     case VertAlignType.Top:
            //         this._textField.verticalAlign = egret.VerticalAlign.TOP;
            //         break;
            //     case VertAlignType.Middle:
            //         this._textField.verticalAlign = egret.VerticalAlign.MIDDLE;
            //         break;

            //     case VertAlignType.Bottom:
            //         this._textField.verticalAlign = egret.VerticalAlign.BOTTOM;
            //         break;
            // }
        }

        public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_afterAdd(buffer, beginPos);
            this._textField.text = "dddddddddddddddddd";
            if ((!this._text || this._text.length <= 0)&& this.promptText) {
                this._textField.text = this.promptText;
                this.password = false;
                //this._textField.textFlow = (new egret.HtmlTextParser).parser(ToolSet.parseUBB(ToolSet.encodeHTML(this._promptText)));
            } 
        }       
    }
}