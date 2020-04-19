namespace fgui {

    type PoxyLisnter = (...args: any[]) => void;
    function createHandler(type: string, obj: UIEventProxy): PoxyLisnter {
        let handle = function (...args: any[]): void {
            if (args.length > 0 && args[0]  instanceof PIXI.interaction.InteractionEvent) {
                args[0]["gObject"] = obj;
            }
            obj.emit(type,  ...args);
        }

        return handle;
    }

    type ProxyDictionary = {
        [key: string]: PoxyLisnter;
    }

    export  interface IGObjectInteractionEvent extends  PIXI.interaction.InteractionEvent {
        gObject : GObject;
        source ?: GObject;
        sourceData ?: any;
    }

    /**
     * UI 事件代理
     */
    export class UIEventProxy extends PIXI.utils.EventEmitter {
        protected _displayObject: PIXI.DisplayObject;
        private _proxys: ProxyDictionary;
        constructor() {
            super();
            this._proxys = {};
        }

        public on(type: string, listener: Function, thisArg: any): this {
            super.on(type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.on(type, this._proxys[type], this);
                }
            }

            return this;
        }

        public once(type: string, listener: Function, thisArg: any): this {
            super.once(type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.on(type, this._proxys[type], this);
                }
            }
            return this;
        }

        public off(type: string, listener: Function, thisArg: any): this {
            super.off(type, listener, thisArg);
            if (this._displayObject != null && this.listenerCount(type) <= 0) {
                if (this._proxys[type]) {
                    this._displayObject.off(type, this._proxys[type], thisArg);
                }
            }
            return this;
        }

        public addListener(type: string, listener: Function, thisArg: any): this {
            super.addListener(type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.addListener(type, this._proxys[type], this);
                }
            }
            return this;
        }

        public removeListener(type: string, listener: Function, thisArg: any): this {
            super.removeListener(type, listener, thisArg);
            if (this._displayObject != null && this.listenerCount(type) <= 0) {
                if (this._proxys[type]) {
                    this._displayObject.off(type, this._proxys[type], thisArg);
                }
            }
            return this;
        }

        public removeAllListeners(type?: string): this {
            super.removeAllListeners(type);
            if (this._displayObject != null) {
                this._displayObject.removeListener(type);
            }
            return this;
        }
    }

}