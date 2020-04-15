namespace fgui {

    export class GTimer {
        private _items: TimerItem[];
        private _itemPool: TimerItem[];

        private _enumIdx: number = 0;
        private get _enumI() : number{
            return this._enumIdx;
        }
        private set _enumI(v : number) {
            this._enumIdx = v;
        }
        private _enumCount: number = 0;
        private _curTime:number = Date.now();
        private _lastTime: number = 0;
    
        private _ticker:PIXI.Ticker;
        private static FPS24: number = 1000 / 24;

        public static deltaTime: number = 0;
        public static time: number = 0;

        public static inst: GTimer = new GTimer();

        public constructor() {
            this._items = [];
            this._itemPool = [];
        }

        private getItem(): TimerItem {
            if (this._itemPool.length)
                return this._itemPool.pop();
            else
                return new TimerItem();
        }

        private findItem(callback: (...args:any[]) => void, thisObj: any): TimerItem {
            let len: number = this._items.length;
            for (let i: number = 0; i < len; i++) {
                let item: TimerItem = this._items[i];
                if (item.callback == callback && item.thisObj == thisObj)
                    return item;
            }
            return null;
        }

        //repeat <= 0 means loop
        public add(delayInMs: number, repeat: number, callback: (...args:any[]) => void, thisObj: any, callbackParam?: any): void {
            let item: TimerItem = this.findItem(callback, thisObj);
            if (!item) {
                item = this.getItem();
                item.callback = callback;
                item.thisObj = thisObj;
                this._items.push(item);
            }
            item.delay = delayInMs;
            item.counter = 0;
            item.repeat = repeat;
            item.param = callbackParam;
            item.end = false;
        }

        public addLoop(delayInMs:number, callback: (...args:any[]) => void, thisObj: any, callbackParam?: any):void {
            this.add(delayInMs, 0, callback, thisObj, callbackParam);
        }

        public callLater(callback: (...args:any[]) => void, thisObj: any, callbackParam?: any): void {
            this.add(1, 1, callback, thisObj, callbackParam);
        }

        public callDelay(delayInMs: number, callback: (...args:any[]) => void, thisObj: any, callbackParam?: any): void {
            this.add(delayInMs, 1, callback, thisObj, callbackParam);
        }

        public callBy24Fps(callback: (...args:any[]) => void, thisObj: any, callbackParam: any = null): void {
            this.add(GTimer.FPS24, 0, callback, thisObj, callbackParam);
        }

        public exists(callback: (...args:any[]) => void, thisObj: any): boolean {
            let item: TimerItem = this.findItem(callback, thisObj);
            return item != null;
        }

        public remove(callback: (...args:any[]) => void, thisObj: any): void {
            let item: TimerItem = this.findItem(callback, thisObj);
            if (item) {
                let i: number = this._items.indexOf(item);
                this._items.splice(i, 1);
                if (i < this._enumIdx)
                    this._enumIdx--;
                this._enumCount--;

                item.callback = null;
                item.param = null;
                this._itemPool.push(item);
            }
        }

        private __timer(timeStamp: number): boolean {
            GTimer.time = timeStamp;
            GTimer.deltaTime = timeStamp - this._lastTime;
            this._lastTime = timeStamp;
            
            this._enumI = 0;
            this._enumCount = this._items.length;

            while (this._enumI < this._enumCount) {
                var item: TimerItem = this._items[this._enumI];
                this._enumI++;

                if (item.advance(GTimer.deltaTime)) {
                    if (item.end) {
                        this._enumI--;
                        this._enumCount--;
                        this._items.splice(this._enumI, 1);
                    }

                    if (item.hasParam)
                        item.callback.call(item.thisObj, item.param);
                    else
                        item.callback.call(item.thisObj);

                    if (item.end) {
                        item.reset();
                        this._itemPool.push(item);
                    }
                }
            }

            return false;
        }

        public get ticker():PIXI.Ticker {
            return this._ticker;
        }

        public get curTime():number {
            return this._curTime;
        }

        public advance(): void {
            this._enumIdx = 0;
            this._enumCount = this._items.length;

            while (this._enumIdx < this._enumCount) {
                let item: TimerItem = this._items[this._enumIdx];
                this._enumIdx++;

                let ms = this._ticker.deltaTime / PIXI.settings.TARGET_FPMS;
                this._curTime += ms;

                if (item.advance(ms)) {
                    if (item.end) {
                        this._enumIdx--;
                        this._enumCount--;
                        this._items.splice(this._enumIdx, 1);
                        this._itemPool.push(item);
                    }
                    
                    if(item.callback) {
                        let args = [ms];
                        if(item.param && item.param instanceof Array)
                            args = item.param.concat(args);
                        else if(item.param !== void 0)
                            args.unshift(item.param);
                        item.callback.apply(item.thisObj, args);
                    }

                    if(item.end)
                        item.callback = item.thisObj = item.param = null;
                }
            }
        }

       

        public setTicker(ticker:PIXI.Ticker):void {
            if(this._ticker && (this._ticker != ticker)) {
                // this._ticker.remove(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL);
                // this._ticker.remove(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH);
                this._ticker.remove(this.advance, this);
            }
            this._ticker = ticker;
            this._ticker.add(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL);
            //this._ticker.add(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH);
            
            if(!this._ticker.started){
                this._ticker.start();
            }
        }
    }

    class TimerItem {
        public delay: number = 0;
        public counter: number = 0;
        public repeat: number = 0;
        public callback: Function;
        public thisObj: any;
        public param: any;

        public hasParam: boolean;
        public end: boolean;

        public constructor() {
        }

        public advance(elapsed: number = 0): boolean {
            this.counter += elapsed;
            if (this.counter >= this.delay) {
                this.counter -= this.delay;
                if (this.counter > this.delay)
                    this.counter = this.delay;

                if (this.repeat > 0) {
                    this.repeat--;
                    if (this.repeat == 0)
                        this.end = true;
                }
                
                return true;
            } else {
                return false;
            }
        }

        public reset(): void {
            this.callback = null;
            this.thisObj = null;
            this.param = null;
        }
    }
}