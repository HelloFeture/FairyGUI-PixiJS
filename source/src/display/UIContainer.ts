namespace fgui {

    export class UIContainer extends PIXI.Container implements IUIObject {

        protected _scrollRect: PIXI.Rectangle;
        protected _rectMask: PIXI.Graphics;

        public UIOwner:GObject;

        public constructor(owner?:GObject) {
            super();
            this.UIOwner = owner;
            this.interactive = true;
            this.interactiveChildren = true;
        }

        public get scrollRect(): PIXI.Rectangle {
            return this._scrollRect;
        }

        public set scrollRect(rect: PIXI.Rectangle) {
            this._scrollRect = rect;
            if (rect != null) {
                if (!this._rectMask) {
                    this._rectMask = new PIXI.Graphics();
                    this._rectMask.isMask = true;
                    this.addChild(this._rectMask);
                    this.mask = this._rectMask;
                }
                this._rectMask.clear();
                if(rect.width > 0 && rect.height > 0) {
                    this._rectMask.beginFill(0x0, 1);
                    this._rectMask.drawRect(this._scrollRect.x, this._scrollRect.y, this._scrollRect.width, this._scrollRect.height);
                    this._rectMask.endFill();
                }
            }
            else
                this.mask = null;
        }
    }
}