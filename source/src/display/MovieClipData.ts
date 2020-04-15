namespace fgui {

    export class MovieClipData {
        public reachesEnd: boolean;
        public reversed: boolean;
        public repeatedCount: number = 0;

        private _curFrame: number = 0;
        private _lastTime: number = 0;
        private _curFrameDelay: number = 0;

        public constructor() {
            this._lastTime = Date.now();
        }

        public update(mc: MovieClip): void {
            let t: number = Date.now();
            let elapsed: number = t - this._lastTime;
            this._lastTime = t;

            let cur: number = this._curFrame;
            if (cur >= mc.frameCount)
                cur = mc.frameCount - 1;

            this.reachesEnd = false;
            this._curFrameDelay += elapsed;
            let interval: number = mc.interval + mc.frames[cur].addDelay
                + ((cur == 0 && this.repeatedCount > 0) ? mc.repeatDelay : 0);
            if (this._curFrameDelay < interval)
                return;

            this._curFrameDelay -= interval;
            if (this._curFrameDelay > mc.interval)
                this._curFrameDelay = mc.interval;

            if (mc.swing) {
                if (this.reversed) {
                    this._curFrame--;
                    if (this._curFrame < 0) {
                        this._curFrame = Math.min(1, mc.frameCount - 1);
                        this.repeatedCount++;
                        this.reversed = !this.reversed;
                    }
                }
                else {
                    this._curFrame++;
                    if (this._curFrame > mc.frameCount - 1) {
                        this._curFrame = Math.max(0, mc.frameCount - 2);
                        this.repeatedCount++;
                        this.reachesEnd = true;
                        this.reversed = !this.reversed;
                    }
                }
            }
            else {
                this._curFrame++;
                if (this._curFrame > mc.frameCount - 1) {
                    this._curFrame = 0;
                    this.repeatedCount++;
                    this.reachesEnd = true;
                }
            }
        }

        public get currentFrame(): number {
            return this._curFrame;
        }

        public set currentFrame(value: number) {
            this._curFrame = value;
            this._curFrameDelay = 0;
        }

        public rewind(): void {
            this._curFrame = 0;
            this._curFrameDelay = 0;
            this.reversed = false;
            this.reachesEnd = false;
        }

        public reset(): void {
            this._curFrame = 0;
            this._curFrameDelay = 0;
            this.repeatedCount = 0;
            this.reachesEnd = false;
            this.reversed = false;
        }

        public copy(src: MovieClipData): void {
            this._curFrame = src._curFrame;
            this._curFrameDelay = src._curFrameDelay;
            this.repeatedCount = src.repeatedCount;
            this.reachesEnd = src.reachesEnd;
            this.reversed = src.reversed;
        }
    }
}