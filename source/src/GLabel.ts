/// <reference path="./IColorableTitle.ts" />

namespace fgui {

    export class GLabel extends GComponent implements IColorableTitle {
        protected _titleObject: GObject;
        protected _iconObject: GObject;

        public constructor() {
            super();
        }

        public get icon(): string {
            if (this._iconObject != null)
                return this._iconObject.icon;
            return null;
        }

        public set icon(value: string) {
            if (this._iconObject != null)
                this._iconObject.icon = value;
            this.updateGear(GearType.Icon);
        }

        public get title(): string {
            if (this._titleObject)
                return this._titleObject.text;
            else
                return null;
        }

        public set title(value: string) {
            if (this._titleObject)
                this._titleObject.text = value;
            this.updateGear(GearType.Text);
        }

        public get text(): string {
            return this.title;
        }

        public set text(value: string) {
            this.title = value;
        }

        public get titleColor(): TextColor {
            if(fgui.isColorableTitle(this._titleObject))
                return this._titleObject.titleColor;
            return 0;
        }

        public set titleColor(value: TextColor) {
            if(fgui.isColorableTitle(this._titleObject))
                this._titleObject.titleColor = value;
        }

        public get fontSize(): number {
            if(fgui.isColorableTitle(this._titleObject))
                return this._titleObject.fontSize;
            return 0;
        }

        public set fontSize(value: number) {
            if(fgui.isColorableTitle(this._titleObject))
                this._titleObject.fontSize = value;
        }

        public set titleFontSize(value: number) {
            var tf: GTextField = this.getTextField();
            if (tf != null)
                tf.fontSize = value;
        }
        
        public set editable(val: boolean) {
            if (this._titleObject){
                (this._titleObject as GTextInput).editable = val;
            }
        }

        public get editable(): boolean {
            if (this._titleObject && (this._titleObject instanceof GTextInput))
                return (this._titleObject as GTextInput).editable;
            else
                return false;
        }

        public getTextField(): GTextField {
            if (this._titleObject instanceof GTextField)
                return (<GTextField>this._titleObject);
            else if (this._titleObject instanceof GLabel)
                return (<GLabel>this._titleObject).getTextField();
            else if (this._titleObject instanceof GButton)
                return (<GButton>this._titleObject).getTextField();
            else
                return null;
        }

        public getProp(index: number): any {
            switch (index) {
                case ObjectPropID.Color:
                    return this.titleColor;
                case ObjectPropID.OutlineColor:
                    {
                        var tf: GTextField = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case ObjectPropID.FontSize:
                    return this.titleFontSize;
                default:
                    return super.getProp(index);
            }
        }

        public setProp(index: number, value: any): void {
            switch (index) {
                case ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case ObjectPropID.OutlineColor:
                    {
                        var tf: GTextField = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                default:
                    super.setProp(index, value);
                    break;
            }
        }

        

        protected constructExtension(buffer: ByteBuffer): void {
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
        }



        public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_afterAdd(buffer, beginPos);

            if (!buffer.seek(beginPos, 6))
                return;

            if (buffer.readByte() != this.packageItem.objectType)
                return;

            var str: string;
            str = buffer.readS();
            if (str != null)
                this.title = str;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            var iv: number = buffer.readInt();
            if (iv != 0)
                this.titleFontSize = iv;

            if (buffer.readBool()) {
                var input: GTextInput = this.getTextField() as GTextInput;
                if (input != null) {
                    str = buffer.readS();
                    if (str != null)
                        input.promptText = str;

                    str = buffer.readS();
                    if (str != null)
                        input.restrict = str;

                    iv = buffer.readInt();
                    if (iv != 0)
                        input.maxLength = iv;
                    iv = buffer.readInt();
                    if (iv != 0) {
                        //keyboardType
                    }
                    if (buffer.readBool())
                        input.password = true;
                }
                else
                    buffer.skip(13);
            }
        }

        // public setupAfterAdd(xml: utils.XmlNode): void {
        //     super.setupAfterAdd(xml);

        //     let cs = utils.XmlParser.getChildNodes(xml, "Label");
        //     if (cs && cs.length > 0) {
        //         xml = cs[0];

        //         let str: string;
        //         str = xml.attributes.title;
        //         if (str)
        //             this.text = str;
        //         str = xml.attributes.icon;
        //         if (str)
        //             this.icon = str;

        //         str = xml.attributes.titleColor;
        //         if (str)
        //             this.titleColor = utils.StringUtil.convertFromHtmlColor(str);

        //         if (this._titleObject instanceof GTextInput) {
        //             str = xml.attributes.prompt;
        //             let ti = this._titleObject as GTextInput;
        //             if (str)
        //                 ti.promptText = str;
        //             str = xml.attributes.maxLength;
        //             if (str)
        //                 ti.maxLength = parseInt(str);
        //             str = xml.attributes.restrict;
        //             if (str)
        //                 ti.restrict = str;
        //             str = xml.attributes.password;
        //             if (str)
        //                 ti.password = str == "true";
        //         }
        //     }
        // }
    }
}