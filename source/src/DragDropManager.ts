module fgui {
    export class DragDropManager {

        private _agent: GLoader;
        private _sourceData: any;
        private _source : GObject;
        private static _inst: DragDropManager;
        public static get inst(): DragDropManager {
            if (DragDropManager._inst == null)
                DragDropManager._inst = new DragDropManager();
            return DragDropManager._inst;
        }

        public constructor() {
            this._agent = new GLoader();
            this._agent.draggable = true;
            this._agent.touchable = false;//important
            this._agent.setSize(100, 100);
            this._agent.setPivot(0.5, 0.5, true);
            this._agent.align = AlignType.Center;
            this._agent.verticalAlign = VertAlignType.Middle;
            this._agent.sortingOrder = 1000000;
            this._agent.on(DragEvent.END, this.__dragEnd, this);
            this._agent.displayObject.hitArea = new PIXI.Rectangle(0,0,0,0);
        }

        public get dragAgent(): GObject {
            return this._agent;
        }

        public get dragging(): boolean {
            return this._agent.parent != null;
        }

        public startDrag(source: GObject, icon: string, sourceData: any, touchPointID: number = -1): void {
            if (this._agent.parent != null)
                return;

            this._sourceData = sourceData;
            this._source = source;
            this._agent.url = icon;
            GRoot.inst.addChild(this._agent);
        
            var pt: PIXI.Point = GRoot.inst.globalToLocal(GRoot.mouseX, GRoot.mouseY);
            source.stopDrag();
            this._agent.setXY(pt.x, pt.y);
            this._agent.startDrag(touchPointID);
        }

        public cancel(): void {
            if (this._agent.parent != null) {
                this._agent.stopDrag();
                GRoot.inst.removeChild(this._agent);
                this._sourceData = null;
            }
        }

        private __dragEnd(evt: IGObjectInteractionEvent): void {
            if (this._agent.parent == null) //cancelled
                return;

            GRoot.inst.removeChild(this._agent);

            var sourceData: any = this._sourceData;
            this._sourceData = null;
            var obj: GObject = GRoot.inst.getObjectUnderPoint(evt.data.global.x, evt.data.global.y);
            while (obj != null) {
                if (obj.listeners(DragEvent.DROP).length > 0) {
                    obj.requestFocus();
                    evt.source = this._source;
                    evt.sourceData = this._sourceData;
                    evt.gObject = obj;
                    obj.emit(DragEvent.DROP, evt);
                    return;
                }

                obj = obj.parent;
            }
        }
    }
}
