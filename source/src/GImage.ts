namespace fgui {

    export class GImage extends GObject implements IColorGear {
        
        private _content: UIImage;
        private _flip: FlipType;
   
        public constructor() {
            super();
            this._flip = FlipType.None;
        }

        public get touchable(): boolean {
            return false;
        }

        public set touchable(value: boolean) {
            this._touchable = false;  //GImage has no interaction
        }

        public get color(): number {
            return this._content.tint;
        }

        public set color(value: number) {
            if (this.color != value) {
                this.updateGear(GearType.Color);
                this._content.tint = value;
            }
        }

        public get flip(): FlipType {
            return this._flip;
        }

        public set flip(value: FlipType) {
            if (this._flip != value) {
                this._flip = value;

            
                var sx: number = 1, sy: number = 1;
                if (this._flip == FlipType.Horizontal || this._flip == FlipType.Both) {
                    sx = -1;
                }
                if (this._flip == FlipType.Vertical || this._flip == FlipType.Both) {
                    sy = -1;
                }

                this._content.scale.x = sx;
                this._content.scale.y = sy;
                this.handleXYChanged();
            }
        }

        public get fillMethod(): number {
            return this._content.fillMethod;
        }

        public set fillMethod(value: number) {
            this._content.fillMethod = value;
        }

        public get fillAmount(): number {
            return this._content.fillAmount;
        }

        public set fillAmount(value: number) {
            this._content.fillAmount = value;
        }

        public get texture(): PIXI.Texture {
            return this._content.texture;
        }

        public set texture(value: PIXI.Texture) {
            if (value != null) {
                this.sourceWidth = value.orig.width;
                this.sourceHeight = value.orig.height;
            } else {
                this.sourceWidth = 0;
                this.sourceHeight = 0;
            }
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this._content.scale9Grid = null;
            // FIXME
            this._content.fillMethod = 0;//egret.BitmapFillMode.SCALE;
            this._content.texture = value;
        }

        protected createDisplayObject(): void {
            this._content = new UIImage(this);
            this.setDisplayObject(this._content);
        }

        public dispose(): void {
            this._content.destroy();
            super.dispose();
        }

        public constructFromResource(): void {
            var contentItem: PackageItem = this.packageItem.getBranch();
            this.sourceWidth = contentItem.width;
            this.sourceHeight = contentItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this._content.initDisp(contentItem);
            this.setSize(this.sourceWidth, this.sourceHeight);

            contentItem = contentItem.getHighResolution();
            contentItem.load();

            this._content.scale9Grid = contentItem.scale9Grid;
            this._content.smoothing = contentItem.smoothing;
            if (contentItem.scaleByTile) {
                // TODO
                this._content.fillMethod = 0;
            }

            this.setSize(this.sourceWidth, this.sourceHeight);
            this._content.texture = contentItem.texture;
        }

        protected handleXYChanged(): void {
            super.handleXYChanged();
            if (this._flip != FlipType.None) {
                if (this._content.scale.x == -1)
                    this._content.x += this.width;
                if (this._content.scale.y == -1)
                    this._content.y += this.height;
            }
        }
        
        protected handleSizeChanged(): void {
            this._content.width = this.width;
            this._content.height = this.height;
        }

        public getProp(index: number): any {
            if (index == ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }

        public setProp(index: number, value: any): void {
            if (index == ObjectPropID.Color)
                this.color = value;
            else
                super.setProp(index, value);
        }

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            if (buffer.readBool()) {
                this.color = buffer.readColor();
            }
            this.flip = buffer.readByte();
            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != FillMethod.None) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }
        }
    }
}