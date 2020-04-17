/// <reference path="./IColorableTitle.ts" />
namespace fgui {

    

    export class LineInfo {
        public width: number = 0;
        public height: number = 0;
        public textHeight: number = 0;
        public text: string;
        public y: number = 0;

        private static pool: LineInfo[] = [];

        public static get(): LineInfo {
            if (LineInfo.pool.length) {
                let ret: LineInfo = LineInfo.pool.pop();
                ret.width = 0;
                ret.height = 0;
                ret.textHeight = 0;
                ret.text = null;
                ret.y = 0;
                return ret;
            }
            else
                return new LineInfo();
        }

        public static recycle(value: LineInfo): void {
            LineInfo.pool.push(value);
        }

        public static recycleMany(value: LineInfo[]): void {
            if(value && value.length)
            {
                value.forEach(v => {
                    LineInfo.pool.push(v);
                }, this);
            }
            value.length = 0;
        }
    }

    /**
     * 普通文本
     */
    export class GTextField extends GObject implements IColorGear, IColorableTitle {

        protected _textField: UITextField;
        protected _btContainer: UIContainer;
        protected _bitmapFont: BitmapFont;
        protected _lines: LineInfo[];
        protected _bitmapPool: PIXI.Sprite[];
        protected _font: string;   //could be either fontFamily or an URI pointed to a bitmap font resource
        
        protected _style: PIXI.TextStyle;
        protected _verticalAlign: VertAlignType = VertAlignType.Top;
        protected _offset: PIXI.Point = new PIXI.Point();
        protected _color: TextColor;
        protected _singleLine:boolean = true;

        protected _text: string = "";
        protected _fontProperties: PIXI.IFontMetrics; //PIXI.FontMetrics;

        protected _autoSize: AutoSizeType;
        protected _widthAutoSize: boolean;
        protected _heightAutoSize: boolean;

        protected _requireRender: boolean;
        protected _updatingSize: boolean;
        protected _sizeDirty: boolean;

        protected _textWidth: number = 0;
        protected _textHeight: number = 0;
        
        public static GUTTER_X: number = 2;
        public static GUTTER_Y: number = 2;

        public multiline : boolean;
        public ubbEnabled : boolean;
        protected _templateVars: any;
        
        public constructor() {
            super();

            this._style = new PIXI.TextStyle({
                fontSize: 12,
                fontFamily: UIConfig.defaultFont,
                align: AlignType.Left,
                leading: 3,
                fill: 0
            });
            this._verticalAlign = VertAlignType.Top;
            this._text = "";
            this._autoSize = AutoSizeType.Both;
            this._widthAutoSize = true;
            this._heightAutoSize = true;

            this._bitmapPool = [];

            this.touchable = false;  //base GTextField has no interaction
        }

        protected createDisplayObject(): void {
            this._textField = new UITextField(this);
            this.setDisplayObject(this._textField);
        }

        private switchBitmapMode(val: boolean): void {
            if (val && this.displayObject == this._textField) {
                if (this._btContainer == null)
                    this._btContainer = new UIContainer(this);
                this.switchDisplayObject(this._btContainer);
            }
            else if (!val && this.displayObject == this._btContainer)
                this.switchDisplayObject(this._textField);
        }

        public dispose(): void {
            GTimer.inst.remove(this.__render, this);
            this._bitmapFont = null;
            this._bitmapPool.length = 0;
            this._bitmapPool = null;
            this._style = null;
            super.dispose();
        }

        public set text(value:string) {
            if(value == null) value = "";
            if (this._text == value) return;
            this._text = value;
            this.updateGear(GearType.Text);
            if (this.parent && this.parent._underConstruct)
                this.renderNow();
            else
                this.render();

        }

        public get text(): string {
            return this._text;
        }

     

        public get color(): number {
            return this.getColor() as number;
        }

        public getColor(): TextColor {
            return this._color;
        }

        public setColor(value:TextColor):void {
            if (this._color != value) {
                this._color = value;
                this.updateGear(GearType.Color);
                this._style.fill = this._color;
                this.render();
            }
        }

        public set color(value: number) {
            this.setColor(value);
        }

        public get titleColor(): TextColor {
            return this.getColor();
        }

        public set titleColor(value: TextColor) {
            this.setColor(value);
        }
        
        public get lineHeight():number {
            if(this._style.lineHeight > 0)
                return this._style.lineHeight;
            
            if(!this._fontProperties) return (+this._style.fontSize) + this._style.strokeThickness;  //rough value

            return this._fontProperties.fontSize + this._style.strokeThickness + this._style.leading;
        }

        public set lineHeight(lh:number) {
            this._style.lineHeight = lh;
        }

        public get font(): string {
            return this._font || UIConfig.defaultFont;
        }

        public set font(value: string) {
            if (this._font != value) {
                this._font = value;
                if (this._font && utils.StringUtil.startsWith(this._font, "ui://"))
                    this._bitmapFont = UIPackage.getBitmapFontByURL(this._font);
                else
                    this._style.fontFamily = this._font || UIConfig.defaultFont;
                this.render();
            }
        }

        public get fontSize(): number {
            return +this._style.fontSize;
        }

        public set fontSize(value: number) {
            if (value <= 0)
                return;
            if (this._style.fontSize != value) {
                this._style.fontSize = value;
                this.render();
            }
        }

        public get align(): AlignType {
            return this._style.align as AlignType;
        }

        public set align(value: AlignType) {
            if (this._style.align != value) {
                this._style.align = value;
                this.render();
            }
        }

        public get verticalAlign(): VertAlignType {
            return this._verticalAlign;
        }

        public set verticalAlign(value: VertAlignType) {
            if (this._verticalAlign != value) {
                this._verticalAlign = value;
                if(!this._underConstruct)
                    this.layoutAlign();
            }
        }

        public get leading(): number {
            return this._style.leading;
        }

        public set leading(value: number) {
            if (this._style.leading != value) {
                this._style.leading = value;
                this.render();
            }
        }

        public get letterSpacing(): number {
            return this._style.letterSpacing;
        }

        public set letterSpacing(value: number) {
            if (this._style.letterSpacing != value) {
                this._style.letterSpacing = value;
                this.render();
            }
        }

        public get underline(): boolean {
            return false;   //TODO: not supported yet
        }

        public set underline(value: boolean) {
            //TODO: not supported yet
        }

        public get bold(): boolean {
            return this._style.fontWeight == "bold";
        }

        public set bold(value: boolean) {
            let v: string = value === true ? "bold" : "normal";
            if (this._style.fontWeight != v) {
                this._style.fontWeight = v;
                this.render();
            }
        }
        
        public get weight(): string {
            return this._style.fontWeight;
        }

        public set weight(v: string) {
            if (this._style.fontWeight != v) {
                this._style.fontWeight = v;
                this.render();
            }
        }

        public get variant(): string {
            return this._style.fontVariant;
        }

        public set variant(v: string) {
            if (this._style.fontVariant != v) {
                this._style.fontVariant = v;
                this.render();
            }
        }

        public get italic(): boolean {
            return this._style.fontStyle == "italic";
        }

        public set italic(value: boolean) {
            let v: string = value === true ? "italic" : "normal";
            if (this._style.fontStyle != v) {
                this._style.fontStyle = v;
                this.render();
            }
        }

        public get multipleLine(): boolean {
            return !this._singleLine;
        }

        public set multipleLine(value: boolean) {
            value = !value;
            if(this._singleLine != value) {
                this._singleLine = value;
                this.render();
            }
        }

        public get stroke(): number {
            return +this._style.strokeThickness;
        }

        public set stroke(value: number) {
            if (this._style.strokeThickness != value)
                this._style.strokeThickness = value;
        }

        public get strokeColor(): number | string {
            return this._style.stroke;
        }

        public set strokeColor(value: number | string) {
            if (this._style.stroke != value)
                this._style.stroke = value;
        }

        public set autoSize(value: AutoSizeType) {
            if (this._autoSize != value) {
                this._autoSize = value;
                this._widthAutoSize = (value == AutoSizeType.Both || value == AutoSizeType.Shrink);
                this._heightAutoSize = (value == AutoSizeType.Both || value == AutoSizeType.Height);
                this.render();
            }
        }

        public get autoSize(): AutoSizeType {
            return this._autoSize;
        }

        public get textWidth(): number {
            // if (this._requireRender){
            //     this.renderNow();
            // }
            return this._textWidth;
        }

        public get textHeight(): number {
            // if (this._requireRender){
            //     this.renderNow();
            // }
            return this._textHeight;
        }

        public ensureSizeCorrect(): void {
            // if (!this._parent || this._parent._underConstruct) {
            //     return ;
            // }

            if (this._sizeDirty && this._requireRender)
                this.renderNow();
        }

        protected render(): void {
            if (!this._requireRender) {
                this._requireRender = true;
                GTimer.inst.callLater(this.__render, this);
            }

            if (!this._sizeDirty && (this._widthAutoSize || this._heightAutoSize)) {
                this._sizeDirty = true;
                this.emit(DisplayObjectEvent.SIZE_DELAY_CHANGE, this);
            }
        }

        private applyStyle():void {
            // this._textField.style.stroke = this._style.stroke;
            // this._textField.style.strokeThickness = this._style.strokeThickness;
            // this._textField.style.fontStyle = this._style.fontStyle;
            // this._textField.style.fontVariant = this._style.fontVariant;
            // this._textField.style.fontWeight = this._style.fontWeight;
            // this._textField.style.letterSpacing = this._style.letterSpacing;
            // this._textField.style.align = this._style.align;
            // this._textField.style.fontSize = this._style.fontSize;
            // this._textField.style.fontFamily = this._style.fontFamily;
            // this._textField.style.fill = this._style.fill;
            // this._textField.style.leading = this._style.leading;
            for (let n in this._style) {
                this._textField.style[n] = this._style[n];
            }
        }

        private __render(): void {
            if (this._requireRender) {
                this.renderNow();
            }
        }

        protected renderNow(updateBounds: boolean = true): void {
            this._requireRender = false;
            this._sizeDirty = false;

            if (this._bitmapFont != null) {
                this.renderWithBitmapFont(updateBounds);
                return;
            }

            this.switchBitmapMode(false);
            
            this.applyStyle();
            this._textField.updateMinHeight();
            let wordWrap = !this._widthAutoSize && this.multipleLine;
            this._textField.width = this._textField.style.wordWrapWidth = (wordWrap || this.autoSize == AutoSizeType.None) ? Math.ceil(this.width) : 10000;
            this._textField.style.wordWrap = wordWrap;
            this._textField.style.breakWords = wordWrap;
            this._textField.text = this._text;         //trigger t.dirty = true
            this._fontProperties = PIXI.TextMetrics.measureFont(this._style.toFontString());
           
            this._textWidth = Math.ceil(this._textField.textWidth);
            if (this._textWidth > 0)
                this._textWidth += GTextField.GUTTER_X * 2;   //margin gap
            this._textHeight = Math.ceil(this._textField.textHeight);
            if (this._textHeight > 0)
                this._textHeight += GTextField.GUTTER_Y * 2;  //margin gap

            let w = this.width, h = this.height;
            if(this.autoSize == AutoSizeType.Shrink) {
                this.shrinkTextField();
            } else {
                this._textField.scale.set(1, 1);
                if (this._widthAutoSize) {
                    w = this._textWidth;
                    this._textField.width = w;
                }                
                    
                if (this._heightAutoSize) {
                    h = this._textHeight;
                    if (this._textField.height != this._textHeight)
                        this._textField.height = this._textHeight;
                }
                else {
                    h = this.height;
                    if (this._textHeight > h)
                        this._textHeight = h;
                }
                
            }

            if (updateBounds) {
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }

            this.layoutAlign();
        }

        private renderWithBitmapFont(updateBounds: boolean): void {
            this.switchBitmapMode(true);
            this._btContainer.children.forEach((c, i) => {
                this._bitmapPool.push(this._btContainer.getChildAt(i) as PIXI.Sprite);
            }, this);
            this._btContainer.removeChildren();

            if (!this._lines)
                this._lines = [];
            else
                LineInfo.recycleMany(this._lines);

            let letterSpacing: number = this.letterSpacing;
            let lineSpacing: number = this.leading - 1;
            let rectWidth: number = this.width - GTextField.GUTTER_X * 2;
            let lineWidth: number = 0, lineHeight: number = 0, lineTextHeight: number = 0;
            let glyphWidth: number = 0, glyphHeight: number = 0;
            let wordChars: number = 0, wordStart: number = 0, wordEnd: number = 0;
            let lastLineHeight: number = 0;
            let lineBuffer: string = "";
            let lineY: number = GTextField.GUTTER_Y;
            let line: LineInfo;
            let wordWrap: boolean = !this._widthAutoSize && this.multipleLine;
            let fontScale: number = this._bitmapFont.resizable ? this.fontSize / this._bitmapFont.size : 1;
            let glyph: BMGlyph;

            this._textWidth = 0;
            this._textHeight = 0;

            let textLength: number = this.text.length;
            for (let offset: number = 0; offset < textLength; ++offset) {
                let ch: string = this._text.charAt(offset);
                let cc: number = ch.charCodeAt(offset);

                if (ch == "\n") {
                    lineBuffer += ch;
                    line = LineInfo.get();
                    line.width = lineWidth;
                    if (lineTextHeight == 0) {
                        if (lastLineHeight == 0)
                            lastLineHeight = Math.ceil(this.fontSize * fontScale);
                        if (lineHeight == 0)
                            lineHeight = lastLineHeight;
                        lineTextHeight = lineHeight;
                    }
                    line.height = lineHeight;
                    lastLineHeight = lineHeight;
                    line.textHeight = lineTextHeight;
                    line.text = lineBuffer;
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this._textWidth)
                        this._textWidth = line.width;
                    this._lines.push(line);

                    lineBuffer = "";
                    lineWidth = 0;
                    lineHeight = 0;
                    lineTextHeight = 0;
                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    continue;
                }

                if (cc > 256 || cc <= 32) {
                    if (wordChars > 0)
                        wordEnd = lineWidth;
                    wordChars = 0;
                }
                else {
                    if (wordChars == 0)
                        wordStart = lineWidth;
                    wordChars++;
                }

                if (ch == " ") {
                    glyphWidth = Math.ceil(this.fontSize / 2);
                    glyphHeight = Math.ceil(this.fontSize);
                }
                else {
                    glyph = this._bitmapFont.glyphs[ch];
                    if (glyph) {
                        glyphWidth = Math.ceil(glyph.advance * fontScale);
                        glyphHeight = Math.ceil(glyph.lineHeight * fontScale);
                    }
                    else if (ch == " ") {
                        glyphWidth = Math.ceil(this._bitmapFont.size * fontScale / 2);
                        glyphHeight = Math.ceil(this._bitmapFont.size * fontScale);
                    }
                    else {
                        glyphWidth = 0;
                        glyphHeight = 0;
                    }
                }
                if (glyphHeight > lineTextHeight)
                    lineTextHeight = glyphHeight;

                if (glyphHeight > lineHeight)
                    lineHeight = glyphHeight;

                if (lineWidth != 0)
                    lineWidth += letterSpacing;
                lineWidth += glyphWidth;

                if (!wordWrap || lineWidth <= rectWidth) {
                    lineBuffer += ch;
                }
                else {
                    line = LineInfo.get();
                    line.height = lineHeight;
                    line.textHeight = lineTextHeight;

                    if (lineBuffer.length == 0) {//the line cannt fit even a char
                        line.text = ch;
                    }
                    else if (wordChars > 0 && wordEnd > 0) {//if word had broken, move it to new line
                        lineBuffer += ch;
                        let len: number = lineBuffer.length - wordChars;
                        line.text = utils.StringUtil.trimRight(lineBuffer.substr(0, len));
                        line.width = wordEnd;
                        lineBuffer = lineBuffer.substr(len + 1);
                        lineWidth -= wordStart;
                    }
                    else {
                        line.text = lineBuffer;
                        line.width = lineWidth - (glyphWidth + letterSpacing);
                        lineBuffer = ch;
                        lineWidth = glyphWidth;
                        lineHeight = glyphHeight;
                        lineTextHeight = glyphHeight;
                    }
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this._textWidth)
                        this._textWidth = line.width;

                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    this._lines.push(line);
                }
            }

            if (lineBuffer.length > 0
                || this._lines.length > 0 && utils.StringUtil.endsWith(this._lines[this._lines.length - 1].text, "\n")) {
                line = LineInfo.get();
                line.width = lineWidth;
                if (lineHeight == 0)
                    lineHeight = lastLineHeight;
                if (lineTextHeight == 0)
                    lineTextHeight = lineHeight;
                line.height = lineHeight;
                line.textHeight = lineTextHeight;
                line.text = lineBuffer;
                line.y = lineY;
                if (line.width > this._textWidth)
                    this._textWidth = line.width;
                this._lines.push(line);
            }

            if (this._textWidth > 0)
                this._textWidth += GTextField.GUTTER_X * 2;

            let count: number = this._lines.length;
            if (count == 0) {
                this._textHeight = 0;
            }
            else {
                line = this._lines[this._lines.length - 1];
                this._textHeight = line.y + line.height + GTextField.GUTTER_Y;
            }

            let w: number, h: number = 0;
            if (this._widthAutoSize) {
                if (this._textWidth == 0)
                    w = 0;
                else
                    w = this._textWidth;
            }
            else
                w = this.width;

            if (this._heightAutoSize) {
                if (this._textHeight == 0)
                    h = 0;
                else
                    h = this._textHeight;
            }
            else
                h = this.height;

            if (updateBounds) {
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }

            if (w == 0 || h == 0)
                return;

            rectWidth = this.width - GTextField.GUTTER_X * 2;
            this._lines.forEach(line => {

                let charX = GTextField.GUTTER_X;
                let lineIndent: number = 0;
                let charIndent: number = 0;

                if (this.align == AlignType.Center)
                    lineIndent = (rectWidth - line.width) / 2;
                else if (this.align == AlignType.Right)
                    lineIndent = rectWidth - line.width;
                else
                    lineIndent = 0;

                textLength = line.text.length;
                for (let j: number = 0; j < textLength; j++) {
                    let ch = line.text.charAt(j);

                    glyph = this._bitmapFont.glyphs[ch];
                    if (glyph != null) {
                        charIndent = (line.height + line.textHeight) / 2 - Math.ceil(glyph.lineHeight * fontScale);
                        let bm: PIXI.Sprite;
                        if (this._bitmapPool.length)
                            bm = this._bitmapPool.pop();
                        else
                            bm = new PIXI.Sprite();
                        bm.x = charX + lineIndent + Math.ceil(glyph.offsetX * fontScale);
                        bm.y = line.y + charIndent + Math.ceil(glyph.offsetY * fontScale);
                        bm.texture = glyph.texture;
                        bm.scale.set(fontScale, fontScale);
                        bm.tint =  0xFFFFFF;
                        if (this._bitmapFont.colorable === true && typeof(this._color) == "number") {
                            bm.tint = this._color;
                        }
                        
                        this._btContainer.addChild(bm);

                        charX += letterSpacing + Math.ceil(glyph.advance * fontScale);
                    }
                    else if (ch == " ") {
                        charX += letterSpacing + Math.ceil(this._bitmapFont.size * fontScale / 2);
                    }
                    else {
                        charX += letterSpacing;
                    }
                }
            });
        }

        public localToGlobal(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            ax -= this._offset.x;
            ay -= this._offset.y;
            return super.localToGlobal(ax, ay, resultPoint);
        }

        public globalToLocal(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            let r = super.globalToLocal(ax, ay, resultPoint);
            r.x -= this._offset.x;
            r.y -= this._offset.y;
            return r;
        }

        protected handleSizeChanged(): void {
            if (this._updatingSize)
                return;

            if (this._bitmapFont != null) {
                if (!this._widthAutoSize)
                    this.render();
            }
            else {
                if (this._underConstruct) {
                    this._textField.width = this.width;
                    this._textField.height = this.height;
                }
                else {
                    if(this._autoSize == AutoSizeType.Shrink)
                        this.shrinkTextField();
                    else {
                        if (!this._widthAutoSize) {
                            if (!this._heightAutoSize) {
                                this._textField.width = this.width;
                                this._textField.height = this.height;
                            }
                            else
                                this._textField.width = this.width;
                        }
                    }
                }
            }

            this.layoutAlign();
        }

        protected shrinkTextField():void {
            let fitScale = Math.min(1, this.width / this._textWidth);
            this._textField.scale.set(fitScale, fitScale);
        }

        protected layoutAlign(): void {
            let tw = this._textWidth, th = this._textHeight;
            if(this.autoSize == AutoSizeType.Shrink)
            {
                tw *= this.displayObject.scale.x;
                th *= this.displayObject.scale.y;
            }
            if (this._verticalAlign == VertAlignType.Top || th == 0)
                this._offset.y = GTextField.GUTTER_Y;
            else {
                let dh: number = Math.max(0, this.height - th);
                if (this._verticalAlign == VertAlignType.Middle)
                    this._offset.y = dh * .5;
                else if(this._verticalAlign == VertAlignType.Bottom)
                    this._offset.y = dh;
            }
            
            let xPos = 0;
            switch(this._style.align)
            {
                case "center":
                    xPos = (this.width - tw) * .5;
                    break;
                case "right":
                    xPos = this.width - tw;
                    break;
            }
            this._offset.x = xPos;

            this.updatePosition();
        }

        private updatePosition():void {
            this.displayObject.position.set(Math.floor(this.x + this._offset.x), Math.floor(this.y + this._offset.y));
        }

        protected handleXYChanged(): void {
            super.handleXYChanged();
            if (this._displayObject)
                this.updatePosition();
        }

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            this._font = buffer.readS();
            this._style.fontSize = buffer.readShort();
            this.color = buffer.readColor();
            this.align = AlignMap[buffer.readByte()];
            this.verticalAlign = buffer.readByte();
            this._style.leading = buffer.readShort();
            this._style.letterSpacing = buffer.readShort();
            this.ubbEnabled = buffer.readBool();
            this._autoSize = buffer.readByte();
            this._widthAutoSize = this._autoSize == AutoSizeType.Both;
            this._heightAutoSize = this._autoSize == AutoSizeType.Both || this._autoSize == AutoSizeType.Height;
            this.underline = buffer.readBool();
            this.italic = buffer.readBool();
            this.bold = buffer.readBool();
            this.multiline = !buffer.readBool();
            if (buffer.readBool()) {
                this.strokeColor = buffer.readColor();
                this.stroke = buffer.readFloat() + 1;
            }

            if (buffer.readBool()) //shadow
                buffer.skip(12);

            if (buffer.readBool()){
                this._templateVars = {};
            }
        }

        public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_afterAdd(buffer, beginPos);

            buffer.seek(beginPos, 6);

            var str: string = buffer.readS();
            if (str != null){
                this.text = str;
            }
            this._sizeDirty = false;
            this._textField.init();
        }
    }
}