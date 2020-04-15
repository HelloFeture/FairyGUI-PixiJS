namespace fgui {

    export class GScrollBar extends GComponent {
        private _grip: GObject;
        private _arrowButton1: GObject;
        private _arrowButton2: GObject;
        private _bar: GObject;
        private _target: ScrollPane;

        private _vertical: boolean;
        private _scrollPerc: number;
        private _fixedGripSize: boolean;

        private _dragOffset: PIXI.Point;

        public constructor() {
            super();
            this._dragOffset = new PIXI.Point();
            this._scrollPerc = 0;
        }

        public setScrollPane(target: ScrollPane, vertical: boolean): void {
            this._target = target;
            this._vertical = vertical;
        }

        public set displayPerc(val: number) {
            if (!this._grip) {
                return ;
            }
            if (this._vertical) {
                if (!this._fixedGripSize)
                    this._grip.height = val * this._bar.height;
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
            }
            else {
                if (!this._fixedGripSize)
                    this._grip.width = val * this._bar.width;
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            }
        }

        public get scrollPerc():number {
            return this._scrollPerc;
        }

        public set scrollPerc(val: number) {
            if (!this._grip) {
                return ;
            }
            this._scrollPerc = val;
            if (this._vertical)
                this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
            else
                this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
        }

        public get minSize(): number {
            if (this._vertical)
                return (this._arrowButton1 != null ? this._arrowButton1.height : 0) + (this._arrowButton2 != null ? this._arrowButton2.height : 0);
            else
                return (this._arrowButton1 != null ? this._arrowButton1.width : 0) + (this._arrowButton2 != null ? this._arrowButton2.width : 0);
        }

       

        private _gripMouseDown(evt: PIXI.interaction.InteractionEvent): void {
            if (!this._bar)
                return;
            
            evt.stopPropagation();
            
            this._dragOffset = evt.data.getLocalPosition(this.displayObject, this._dragOffset);
            this._dragOffset.x -= this._grip.x;
            this._dragOffset.y -= this._grip.y;

            let g = GRoot.inst.nativeStage;
            g.on(InteractiveEvents.Move, this._gripDragging, this);
            g.on(InteractiveEvents.Up, this._gripDraggingEnd, this);
        }

        private static sScrollbarHelperPoint: PIXI.Point = new PIXI.Point();
        private _gripDragging(evt: PIXI.interaction.InteractionEvent): void {
            let pt: PIXI.Point = evt.data.getLocalPosition(this.displayObject, GScrollBar.sScrollbarHelperPoint);
            if (this._vertical) {
                let curY: number = pt.y - this._dragOffset.y;
                this._target.setPercY((curY - this._bar.y) / (this._bar.height - this._grip.height), false);
            }
            else {
                let curX: number = pt.x - this._dragOffset.x;
                this._target.setPercX((curX - this._bar.x) / (this._bar.width - this._grip.width), false);
            }
        }

        private _gripDraggingEnd(evt: PIXI.interaction.InteractionEvent): void {
            let g = GRoot.inst.nativeStage;
            g.off(InteractiveEvents.Move, this._gripDragging, this);
            g.off(InteractiveEvents.Up, this._gripDraggingEnd, this);
        }

        private _arrowButton1Click(evt: PIXI.interaction.InteractionEvent): void {
            evt.stopPropagation();

            if (this._vertical)
                this._target.scrollUp();
            else
                this._target.scrollLeft();
        }

        private _arrowButton2Click(evt: PIXI.interaction.InteractionEvent): void {
            evt.stopPropagation();
            
            if (this._vertical)
                this._target.scrollDown();
            else
                this._target.scrollRight();
        }

        private _barMouseDown(evt: PIXI.interaction.InteractionEvent): void {
            let pt: PIXI.Point = evt.data.getLocalPosition(this._grip.displayObject, GScrollBar.sScrollbarHelperPoint);
            if (this._vertical) {
                if (pt.y < 0)
                    this._target.scrollUp(4);
                else
                    this._target.scrollDown(4);
            }
            else {
                if (pt.x < 0)
                    this._target.scrollLeft(4);
                else
                    this._target.scrollRight(4);
            }
        }

        

        public dispose():void {

            this.off(InteractiveEvents.Down, this._barMouseDown, this);

            if (this._arrowButton1)
                this._arrowButton1.off(InteractiveEvents.Down, this._arrowButton1Click, this);
            if (this._arrowButton2)
                this._arrowButton2.off(InteractiveEvents.Down, this._arrowButton2Click, this);

            this._grip.off(InteractiveEvents.Down, this._gripMouseDown, this);
            this._gripDraggingEnd(null);
            
            super.dispose();
        }
    }
}