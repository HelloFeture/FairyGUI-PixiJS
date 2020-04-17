namespace fgui {

    const enum MovieClipStatus {
        NORMAL,
        LOOPING,
        STOPPING,
        ENDED
    };

    export class MovieClip extends PIXI.Sprite implements IUIObject {
        /** @hide 间隔 */
        public interval: number = 0;
        public swing: boolean;
        public repeatDelay: number = 0;
        /** @hide 是否在播放 */
        private _playing: boolean;
        /** @hide 帧数量 */
        private _frameCount: number = 0;
        /** @hide 帧数据 */
        private _frames: Frame[];
        /** @hide 当前帧 */
        private _currentFrame: number = 0;
        /** @hide 状态 */
        private _status: number = MovieClipStatus.NORMAL;
        /** @hide 动画设置 */
        private _settings: DefaultMovieClipSettings;
        /** @hide 帧数据 */
        private data: MovieClipData;
        /** @hide 所属的UI对象 */
        public UIOwner:GObject;

        // TODO
        public fillMethod : number;
        public fillOrigin : number;
        public fillClockwise : boolean;
        public fillAmount : number;
        private _frameElapsed: number = 0; //当前帧延迟

        public constructor(owner:GObject) {
            super();
            this.UIOwner = owner;
            this.data = new MovieClipData();
            this._playing = true;
            this.interactive = this.interactiveChildren = false;
            this._settings = new DefaultMovieClipSettings();

            // 监听增加到舞台事件
            this.on("added", this.added, this);
            this.on("removed", this.removed, this);
        }

        /** 获取帧信息 */
        public get frames(): Frame[] {
            return this._frames;
        }

        /** 设置帧信息 */
        public set frames(value: Frame[]) {
            this._frames = value;
            if (this._frames != null)
                this._frameCount = this._frames.length;
            else
                this._frameCount = 0;

            if (this._settings.endFrame == -1 || this._settings.endFrame > this._frameCount - 1)
                this._settings.endFrame = this._frameCount - 1;
            if (this._settings.loopEndAt == -1 || this._settings.loopEndAt > this._frameCount - 1)
                this._settings.loopEndAt = this._frameCount - 1;

            if (this._currentFrame < 0 || this._currentFrame > this._frameCount - 1)
                this._currentFrame = this._frameCount - 1;

            if (this._frameCount > 0)
                this.setFrame(this._frames[this._currentFrame]);
            else
                this.setFrame(null);
            this.data.rewind();
        }

        public get frameCount(): number {
            return this._frameCount;
        }

      

        // public set frame(value: number) {
        //     if (this._frame != value) {
        //         if (this._frames != null && value >= this._frameCount)
        //             value = this._frameCount - 1;

        //         this._frame = value;
        //         this._frameElapsed = 0;
        //         this.drawFrame();
        //     }
        // }

        /** 获取当前帧 */
        public get currentFrame(): number {
            return this._currentFrame;
        }

        /** 设置当前的帧 */
        public set currentFrame(value: number) {
            if (this._currentFrame != value) {
                this._currentFrame = value;
                this.data.currentFrame = value;
                this.setFrame(this._currentFrame < this._frameCount ? this._frames[this._currentFrame] : null);
            }
        }

        /** 是否正在播放 */
        public get playing(): boolean {
            return this._playing;
        }

        /** 是否正在播放 */
        public set playing(value: boolean) {
            this._playing = value;

            if (value && GObject.isDisplayObjectOnStage(this))
                GTimer.inst.add(0, 0, this.update, this);
            else
                GTimer.inst.remove(this.update, this);
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
        public setPlaySettings(...args:any[]): void {
            if (args.length == 1 && typeof args[0] == "object")
                this._settings.mix(args[0]);
            else {
                let s: any = args[0],
                    e: any = args[1],
                    r: any = args[2],
                    l: any = args[3],
                    ec: () => void = args[4],
                    ecc: any = args[5];

                let o: MovieClipSettings  = {};
                if (utils.NumberUtil.isNumber(s))
                    o.startFrame = s;
                if (utils.NumberUtil.isNumber(e))
                    o.endFrame = e;
                if (utils.NumberUtil.isNumber(r))
                    o.repeatCount = r;
                if (utils.NumberUtil.isNumber(l))
                    o.loopEndAt = l;
                if (ec && typeof (ec) == "function")
                    o.endCallback = ec;
                if (ecc)
                    o.endCallbackContext = ecc;

                this._settings.mix(o);
            }

            if (this._settings.endFrame == -1 || this._settings.endFrame > this._frameCount - 1)
                this._settings.endFrame = this._frameCount - 1;
            if (this._settings.loopEndAt == -1)
                this._settings.loopEndAt = this._settings.endFrame;

            this._status = MovieClipStatus.NORMAL;

            this.currentFrame = this._settings.startFrame;
        }

        private update(): void {
            //if(this.UIOwner._inProgressBuilding) return;
            if (this._playing && this._frameCount != 0 && this._status != MovieClipStatus.ENDED) {
                this.data.update(this);
                if (this._currentFrame != this.data.currentFrame) {
                    if (this._status == MovieClipStatus.LOOPING) {
                        this._currentFrame = this._settings.startFrame;
                        this.data.currentFrame = this._currentFrame;
                        this._status = MovieClipStatus.NORMAL;
                    }
                    else if (this._status == MovieClipStatus.STOPPING) {
                        this._currentFrame = this._settings.loopEndAt;
                        this.data.currentFrame = this._currentFrame;
                        this._status = MovieClipStatus.ENDED;

                        //play end
                        if (this._settings.endCallback != null)
                            GTimer.inst.callLater(this.__playEnd, this);
                    }
                    else {
                        this._currentFrame = this.data.currentFrame;
                        if (this._currentFrame == this._settings.endFrame) {
                            if (this._settings.repeatCount > 0) {
                                this._settings.repeatCount--;
                                if (this._settings.repeatCount == 0)
                                    this._status = MovieClipStatus.STOPPING;
                                else
                                    this._status = MovieClipStatus.LOOPING;
                            }
                        }
                    }

                    this.setFrame(this._frames[this._currentFrame]);
                }
            }
        }

        // private drawFrame(): void {
        //     if (this._frameCount > 0 && this._frame < this._frames.length) {
        //         var frame: Frame = this._frames[this._frame];
        //         this.texture = frame.texture;
        //     }
        //     else
        //         this.texture = null;
        // }

        private __playEnd(): void {
            if (this._settings.endCallback != null) {
                let f: (mc:MovieClip) => void = this._settings.endCallback;
                let fObj: any = this._settings.endCallbackContext;

                this._settings.endCallback = this._settings.endCallbackContext = null;
                this._settings.endCallbackContext = null;

                if(f){
                    f.call(fObj, this);
                }
            }
        }

        private setFrame(frame: Frame): void {
            this.texture = frame == null ? null : frame.texture;
            // @FIXME 
            //this_textureID = -1;
        }

        private added(disp: PIXI.DisplayObject): void {
            if (this._playing)
                GTimer.inst.add(0, 0, this.update, this);
        }

        private removed(disp: PIXI.DisplayObject): void {
            if (this._playing) {
                GTimer.inst.remove(this.update, this);
            }
        }

        public destroy(): void {
            GTimer.inst.remove(this.update, this);
            this.off("added", this.added, this);
            this.off("removed", this.removed, this);
            super.destroy();
        }
    }
}