/// <reference path="./GObject.ts" />

namespace fgui {

    export class GMovieClip extends GObject implements IAnimationGear, IColorGear {

        private _movieClip: MovieClip;

        public constructor() {
            super();
        }

        protected mapPivotWidth(scale: number): number {
            return scale * this.sourceWidth;
        }

        protected mapPivotHeight(scale: number): number {
            return scale * this.sourceHeight;
        }

        protected handleSizeChanged(): void {
            if (this._displayObject != null && this.sourceWidth != 0 && this.sourceHeight != 0)
                this._displayObject.scale.set(this._width / this.sourceWidth * this._scaleX, this._height / this.sourceHeight * this._scaleY);
        }

        public handleScaleChanged(): void {
            if (this._displayObject != null) {
                this._displayObject.scale.set(
                    this._width / this.sourceWidth * this._scaleX,
                    this._height / this.sourceHeight * this._scaleY
                );
            }
        }

        public get touchable(): boolean {
            return false;
        }

        public set touchable(value: boolean) {
            this._touchable = false;  //GMovieClip has no interaction
        }

        public get color(): number {
            return this._movieClip.tint;
        }

        public set color(value: number) {
            this._movieClip.tint = value;
        }

        protected createDisplayObject(): void {
            this._movieClip = new MovieClip(this);
            this.setDisplayObject(this._movieClip);
        }

        public get playing(): boolean {
            return this._movieClip.playing;
        }

        public set playing(value: boolean) {
            if (this._movieClip.playing != value) {
                this._movieClip.playing = value;
                this.updateGear(GearType.Animation);
            }
        }

        public get frame(): number {
            return this._movieClip.currentFrame;
        }

        public set frame(value: number) {
            if (this._movieClip.currentFrame != value) {
                this._movieClip.currentFrame = value;
                this.updateGear(GearType.Animation);
            }
        }

        /**
         * Modify the playing settings for the current MovieClip object, there are two ways to call this method:
         * 1) pass whole parameters:
                startFrame: number;
                endFrame: number;
                repeatCount: number;
                loopEndAt: number;
                endCallback: (target?: MovieClip) => void;
                endCallbackContext: any;
         * 2) just pass 1 object which implements MovieClipSettings (recommended)
         */
        public setPlaySettings(...args: any[]): void {
            this._movieClip.setPlaySettings.apply(this._movieClip, args);
        }

        public constructFromResource(): void {
            this.sourceWidth = this.packageItem.width;
            this.sourceHeight = this.packageItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;

            this.setSize(this.sourceWidth, this.sourceHeight);

            this.packageItem.load();

            this._movieClip.interval = this.packageItem.interval;
            this._movieClip.swing = this.packageItem.swing;
            this._movieClip.repeatDelay = this.packageItem.repeatDelay;
            this._movieClip.frames = this.packageItem.frames;
            //this._movieClip.boundsRect = new PIXI.Rectangle(0, 0, this.sourceWidth, this.sourceHeight);
            this._movieClip.x = 0;
            this._movieClip.y = 0;
            this._movieClip.width = this.sourceWidth;
            this._movieClip.height = this.sourceHeight;
        }

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            if (buffer.readBool()){
                this.color = buffer.readColor();
            }
            buffer.readByte(); //flip
            this._movieClip.currentFrame = buffer.readInt();
            this._movieClip.playing = buffer.readBool();
        }
    }
}