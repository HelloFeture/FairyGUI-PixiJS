/// <reference path="./GObject.ts" />
/// <reference path="./GObjectPool.ts" />

namespace fgui {

    export class GLoader extends GObject implements IAnimationGear, IColorGear {

        protected _url: string;
        protected _align: AlignType;
        protected _verticalAlign: VertAlignType;
        protected _autoSize: boolean;
        protected _fill: LoaderFillType;
        private _shrinkOnly: boolean;
        protected _showErrorSign: boolean;
        protected _playing: boolean;
        protected _frame: number = 0;
        protected _color: number = 0;

        private _contentItem: PackageItem;
        private _contentSourceWidth: number = 0;
        private _contentSourceHeight: number = 0;
        private _contentWidth: number = 0;
        private _contentHeight: number = 0;

        protected _container: UIContainer;
        protected _content: UIImage | MovieClip;
        protected _errorSign: GObject;

        private _updatingLayout: boolean;

        private static _errorSignPool: GObjectPool = new GObjectPool();
        
        public constructor() {
            super();
            this._playing = true;
            this._url = "";
            this._fill = LoaderFillType.None;
            this._align = AlignType.Left;
            this._verticalAlign = VertAlignType.Top;
            this._showErrorSign = true;
            this._color = 0xFFFFFF;
        }

        protected createDisplayObject(): void {
            this._container = new UIContainer(this);
            this._container.hitArea = new PIXI.Rectangle();
            this.setDisplayObject(this._container);
            this._container.interactiveChildren = false;

            this._content = new MovieClip(this);
            this._container.addChild(this._content);
        }

        public dispose(): void {
            this.clearContent();
            super.dispose();
        }

        public get url(): string {
            return this._url;
        }

        public set url(value: string) {
            if (this._url == value)
                return;

            this._url = value;
            this.loadContent();
            this.updateGear(GearType.Icon);
        }

        public get icon(): string {
            return this._url;
        }

        public set icon(value: string) {
            this.url = value;
        }

        public get align(): AlignType {
            return this._align;
        }

        public set align(value: AlignType) {
            if (this._align != value) {
                this._align = value;
                this.updateLayout();
            }
        }

        public get verticalAlign(): VertAlignType {
            return this._verticalAlign;
        }

        public set verticalAlign(value: VertAlignType) {
            if (this._verticalAlign != value) {
                this._verticalAlign = value;
                this.updateLayout();
            }
        }

        public get fill(): LoaderFillType {
            return this._fill;
        }

        public set fill(value: LoaderFillType) {
            if (this._fill != value) {
                this._fill = value;
                this.updateLayout();
            }
        }

        public get autoSize(): boolean {
            return this._autoSize;
        }

        public set autoSize(value: boolean) {
            if (this._autoSize != value) {
                this._autoSize = value;
                this.updateLayout();
            }
        }

        public get playing(): boolean {
            return this._playing;
        }

        public set playing(value: boolean) {
            if (this._playing != value) {
                this._playing = value;
                if (this._content instanceof MovieClip)
                    this._content.playing = value;
                this.updateGear(GearType.Animation);
            }
        }

        public get frame(): number {
            return this._frame;
        }

        public set frame(value: number) {
            if (this._frame != value) {
                this._frame = value;
                if (this._content instanceof MovieClip) {
                    this._content.currentFrame = value;
                }
                this.updateGear(GearType.Animation);
            }
        }

        public get color(): number {
            return this._color;
        }

        public set color(value: number) {
            if (this._color != value) {
                this._color = value;
                this.updateGear(GearType.Color);
                this.applyColor();
            }
        }

        private applyColor(): void {
            if (this._content){
                this._content.tint = this._color;
            }
        }

        public get showErrorSign(): boolean {
            return this._showErrorSign;
        }

        public set showErrorSign(value: boolean) {
            this._showErrorSign = value;
        }

        public get content(): UIImage | MovieClip {
            return this._content;
        }

        public get texture(): PIXI.Texture {
            if (this._content instanceof UIImage)
                return this._content.texture;
            else
                return null;
        }

        public set texture(value: PIXI.Texture) {
            this.url = null;
            this.switchToMovieMode(false);

            if(this._content instanceof UIImage)
                this._content.texture = value;

            if (value) {
                this._contentSourceWidth = value.orig.width;
                this._contentSourceHeight = value.orig.height;
            }
            else
                this._contentSourceWidth = this._contentHeight = 0;

            this.updateLayout();
        }

        protected loadContent(): void {
            this.clearContent();

            if (!this._url)
                return;

            if (utils.StringUtil.startsWith(this._url, "ui://"))
                this.loadFromPackage(this._url);
            else
                this.loadExternal();
        }
        
        protected loadFromPackage(itemURL: string): void {
            this._contentItem = UIPackage.getItemByURL(itemURL);
            if (this._contentItem) {
                this._contentItem.load();

                if (this._contentItem.type == PackageItemType.Image) {
                    if (this._contentItem.texture == null) {
                        this.setErrorState();
                    }
                    else {
                        this.switchToMovieMode(false);
                        (this._content as UIImage).initDisp(this._contentItem);
                        this._contentSourceWidth = this._contentItem.width;
                        this._contentSourceHeight = this._contentItem.height;
                        this.updateLayout();
                    }
                }
                else if (this._contentItem.type == PackageItemType.MovieClip) {
                    this.switchToMovieMode(true);
                    this._contentSourceWidth = this._contentItem.width;
                    this._contentSourceHeight = this._contentItem.height;
                    let mc: MovieClip = this._content as MovieClip;
                    mc.interval = this._contentItem.interval;
                    mc.swing = this._contentItem.swing;
                    mc.repeatDelay = this._contentItem.repeatDelay;
                    mc.frames = this._contentItem.frames;
                    // TODO
                    //mc.boundsRect = new PIXI.Rectangle(0, 0, this._contentSourceWidth, this._contentSourceHeight);
                    mc.width = this._contentSourceWidth;
                    mc.height = this._contentSourceHeight;
                    this.updateLayout();
                } else {
                    this.setErrorState();
                }
            } else {
                this.setErrorState();
            }
        }

        private switchToMovieMode(value: boolean): void {
            this._container.removeChildren();
            if (value) {
                if (!(this._content instanceof MovieClip))
                    this._content = new MovieClip(this);
            }
            else {
                if (!(this._content instanceof UIImage))
                    this._content = new UIImage(null);
            }
            this._container.addChild(this._content);
        }

        private _loadingTexture:PIXI.Texture = null;

        /**overwrite this method if you need to load resources by your own way*/
        protected loadExternal(): void {
            
            let texture = PIXI.Texture.from(this._url, true);
            this._loadingTexture = texture;
            //TODO: Texture does not have error event... monitor error event on baseTexture will casue cross-error-event problem.
            texture.once("update", () => {
                if (!texture.width || !texture.height)
                    this._loadResCompleted(null);
                else
                    this._loadResCompleted(texture);
            });
        }

        /**free the resource you loaded */
        protected freeExternal(texture: PIXI.Texture): void {
            PIXI.Texture.removeFromCache(texture);
            texture.destroy(texture.baseTexture != null);
        }

        private _loadResCompleted(res: PIXI.Texture): void {
            if (res)
                this.onExternalLoadSuccess(res);
            else {
                this.onExternalLoadFailed();
                this._loadingTexture.removeAllListeners();
                this.freeExternal(this._loadingTexture);
                this._loadingTexture = null;
            }
            this._loadingTexture = null;
        }
        
        /**content loaded */
        protected onExternalLoadSuccess(texture: PIXI.Texture): void {
            this._container.removeChildren();
            if (!this._content || !(this._content instanceof UIImage)) {
                this._content = new UIImage(null);
                this._content.initDisp();
                this._container.addChild(this._content);
            } else {
                this._container.addChild(this._content);
            }
            //baseTexture loaded, so update frame info
            texture.frame = new PIXI.Rectangle(0, 0, texture.baseTexture.width, texture.baseTexture.height);
            this._content.texture = texture;
            this._contentSourceWidth = texture.width;
            this._contentSourceHeight = texture.height;
            this.updateLayout();
        }

        protected onExternalLoadFailed(): void {
            this.setErrorState();
        }

        private setErrorState(): void {
            if (!this._showErrorSign)
                return;

            if (this._errorSign == null) {
                if (UIConfig.loaderErrorSign) {
                    this._errorSign = GLoader._errorSignPool.getObject(UIConfig.loaderErrorSign);
                }
            }

            if (this._errorSign) {
                this._errorSign.width = this.width;
                this._errorSign.height = this.height;
                this._container.addChild(this._errorSign.displayObject);
            }
        }

        private clearErrorState(): void {
            if (this._errorSign) {
                this._container.removeChild(this._errorSign.displayObject);
                GLoader._errorSignPool.returnObject(this._errorSign);
                this._errorSign = null;
            }
        }

        private updateLayout(): void {
            if (this._content == null) {
                if (this._autoSize) {
                    this._updatingLayout = true;
                    this.setSize(50, 30);
                    this._updatingLayout = false;
                }
                return;
            }

            this._content.position.set(0, 0);
            this._content.scale.set(1, 1);
            this._contentWidth = this._contentSourceWidth;
            this._contentHeight = this._contentSourceHeight;

            if (this._autoSize) {
                this._updatingLayout = true;
                if (this._contentWidth == 0)
                    this._contentWidth = 50;
                if (this._contentHeight == 0)
                    this._contentHeight = 30;
                this.setSize(this._contentWidth, this._contentHeight);
                this._updatingLayout = false;
            }
            else {
                let sx: number = 1, sy: number = 1;
                if (this._fill != LoaderFillType.None) {
                    sx = this.width / this._contentSourceWidth;
                    sy = this.height / this._contentSourceHeight;

                    if (sx != 1 || sy != 1) {
                        if (this._fill == LoaderFillType.ScaleMatchHeight)
                            sx = sy;
                        else if (this._fill == LoaderFillType.ScaleMatchWidth)
                            sy = sx;
                        else if (this._fill == LoaderFillType.Scale) {
                            if (sx > sy)
                                sx = sy;
                            else
                                sy = sx;
                        }
                        else if (this._fill == LoaderFillType.ScaleNoBorder) {
                            if (sx > sy)
                                sy = sx;
                            else
                                sx = sy;
                        }
                        this._contentWidth = this._contentSourceWidth * sx;
                        this._contentHeight = this._contentSourceHeight * sy;
                    }
                }

                if (this._content instanceof UIImage) {
                    this._content.width = this._contentWidth;
                    this._content.height = this._contentHeight;
                }
                else
                    this._content.scale.set(sx, sy);

                if (this._align == AlignType.Center)
                    this._content.x = Math.floor((this.width - this._contentWidth) / 2);
                else if (this._align == AlignType.Right)
                    this._content.x = this.width - this._contentWidth;
                if (this._verticalAlign == VertAlignType.Middle)
                    this._content.y = Math.floor((this.height - this._contentHeight) / 2);
                else if (this._verticalAlign == VertAlignType.Bottom)
                    this._content.y = this.height - this._contentHeight;
            }
        }

        private clearContent(): void {
            this.clearErrorState();

            if (this._content && this._content.parent)
                this._container.removeChild(this._content);

            if(this._loadingTexture) {
                this._loadingTexture.removeAllListeners();
                this.freeExternal(this._loadingTexture);
                this._loadingTexture = null;
            }

            if (this._contentItem == null && this._content instanceof UIImage)
               this.freeExternal(this._content.texture);
            
            this._content && this._content.destroy();
            this._content = null;
            
            this._contentItem = null;
        }

        protected handleSizeChanged(): void {
            if (!this._updatingLayout){
                this.updateLayout();
            }

            let rect: PIXI.Rectangle = this._container.hitArea as PIXI.Rectangle;  //TODO: hitArea can be Rectangle | Circle | Ellipse | Polygon | RoundedRectangle
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        }

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            this._url = buffer.readS();
            let align = buffer.readByte();
            this._align = AlignMap[align] || AlignType.Center;
            this._verticalAlign = buffer.readByte();
            this._fill = buffer.readByte();
            this._shrinkOnly = buffer.readBool();
            this._autoSize = buffer.readBool();
            this._showErrorSign = buffer.readBool();
            this._content.playing = buffer.readBool();
            let frame = buffer.readInt();
            if (this._content instanceof GMovieClip) {
                this._content.frame = frame;
            }
            

            if (buffer.readBool()){
                this.color = buffer.readColor();
            }
            // @TODO
            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != 0) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }

            if (this._url){
                this.loadContent();
            }
        }
    }
}