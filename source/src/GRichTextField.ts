/// <reference path="./GTextField.ts" />

namespace fgui {

    export class TextBlock {
        public text:string;
        public style:PIXI.TextStyle;
    }

    //TOOD: impl
    /**
     * 富文本
     */
    export class GRichTextField extends GTextField {
        
        protected _ubbEnabled: boolean;
        protected _textFlow: TextBlock[];
        
        public set ubbEnabled(value: boolean) {
            if (this._ubbEnabled != value) {
                this._ubbEnabled = value;
                this.render();
            }
        }

        public get ubbEnabled(): boolean {
            return this._ubbEnabled;
        }

        // public setupBeforeAdd(xml:utils.XmlNode):void
        // {
        //     super.setupBeforeAdd(xml);
        //     this._ubbEnabled = xml.attributes.ubb == "true";
        // }

        public constructor() {
            super();
            
            this._textField.interactive = true;
            this._textField.interactiveChildren = false;
            this.on(TextEvent.LinkClick, this._clickLink, this);
        }

        public set textFlow(flow:TextBlock[])
        {
            this._textFlow = flow;
            this.render();
        }
        
        public set text(value: string) {
            this._text = value;
            if(this._text == null)
                this._text = "";
            this._textField.width = this.width;
            //if(this._ubbEnabled)
                //this.textFlow = utils.StringUtil.parseUBB(this._text);   //TODO: parser impl
            this.updateGear(GearType.Text);
            this.render();
        }
        
        private _clickLink(block: TextBlock) {
            this.emit(TextEvent.LinkClick, block.text, this);
        }

        public dispose():void {
            this.off(TextEvent.LinkClick, this._clickLink, this);
            super.dispose();
        }

        // @FIXIME
        protected updateTextFieldText(): void {
            // var text2: string = this._text;
            // if (this._templateVars != null)
            //     text2 = this.parseTemplate(text2);
            // let arr;
            // if (this._ubbEnabled)
            //     arr = GTextField._htmlParser.parser(ToolSet.parseUBB(text2));
            // else
            //     arr = GTextField._htmlParser.parser(text2);
            // if (this._underline) {
            //     for (var i = 0; i < arr.length; i++) {
            //         let element = arr[i];
            //         if (element.style)
            //             element.style.underline = true;
            //         else
            //             element.style = <egret.ITextStyle>{ underline: true };
            //     }
            // }
            // this._textField.textFlow = arr;
        }
    }
}