namespace fgui {

    export class ScrollPane extends PIXI.utils.EventEmitter {
        private static _easeTypeFunc:Function = (t:number, d:number):number => { return (t = t / d - 1) * t * t + 1; }; //cubic out

        private _owner: GComponent;
        private _maskContainer: UIContainer;
        private _container: PIXI.Container;

        private _alignContainer: PIXI.Container;

        private _scrollType: number;
        private _scrollStep: number;
        private _mouseWheelSpeed: number;
        private _decelerationRate: number;
        private _scrollBarMargin: utils.Margin;
        private _bouncebackEffect: boolean;
        private _touchEffect: boolean;
        private _scrollBarDisplayAuto: boolean;
        private _vScrollNone: boolean;
        private _hScrollNone: boolean;
        private _needRefresh: boolean;
        private _refreshBarAxis: string;

        private _displayOnLeft: boolean;
        private _snapToItem: boolean;
        public _displayInDemand: boolean;
        private _mouseWheelEnabled: boolean;
        private _pageMode: boolean;
        private _inertiaDisabled: boolean;

        private _xPos: number;
        private _yPos: number;

        private _viewSize: PIXI.Point;
        private _contentSize: PIXI.Point;
        private _overlapSize: PIXI.Point;
        private _pageSize: PIXI.Point;
        private _containerPos: PIXI.Point;
        private _beginTouchPos: PIXI.Point;
        private _lastTouchPos: PIXI.Point;
        private _lastTouchGlobalPos: PIXI.Point;
        private _velocity: PIXI.Point;
        private _velocityScale: number;
        private _lastMoveTime: number;
        private _isHoldAreaDone: boolean;
        private _aniFlag: number;
        private _scrollBarVisible: boolean;
        private _headerLockedSize: number;
        private _footerLockedSize: number;
        private _refreshEventDispatching: boolean;

        private _tweening: number;
        private _tweenTime: PIXI.Point;
        private _tweenDuration: PIXI.Point;
        private _tweenStart: PIXI.Point;
        private _tweenChange: PIXI.Point;

        private _pageController: Controller;

        private _hzScrollBar: GScrollBar;
        private _vtScrollBar: GScrollBar;
        private _header: GComponent;
        private _footer: GComponent;

        private _isDragging: boolean = false;
        public static draggingPane: ScrollPane;
        private static _gestureFlag: number = 0;

        private static sHelperPoint: PIXI.Point = new PIXI.Point();
        private static sHelperRect: PIXI.Rectangle = new PIXI.Rectangle();
        private static sEndPos: PIXI.Point = new PIXI.Point();
        private static sOldChange: PIXI.Point = new PIXI.Point();

        // @FIXME
        public static SCROLL: string = "__scroll";
        public static SCROLL_END: string = "__scrollEnd";
        public static PULL_DOWN_RELEASE: string = "pullDownRelease";
        public static PULL_UP_RELEASE: string = "pullUpRelease";

        public static TWEEN_DEFAULT_DURATION: number = .4;
        public static TWEEN_MANUALLY_SET_DURATION: number = 0.5; //tween duration used when call setPos(useAni=true)
        public static PULL_DIST_RATIO: number = 0.5;             //pulldown / pullup distance ratio of the whole viewport

        /**@internal */
        _loop: number;

        public _floating : boolean;

        public constructor(owner: GComponent){

            super();

            this._owner = owner;

            this._maskContainer = new UIContainer(null);
            this._owner._rootContainer.addChild(this._maskContainer);

            this._container = this._owner._container;
            this._container.x = 0;
            this._container.y = 0;
            this._maskContainer.addChild(this._container);

            this._scrollBarMargin = new utils.Margin();
            this._scrollType = 0;
            this._scrollStep = UIConfig.defaultScrollStep;
            this._mouseWheelSpeed = this._scrollStep * 2;
            this._decelerationRate = UIConfig.defaultScrollDecelerationRate;
            this._touchEffect = UIConfig.defaultScrollTouchEffect;
            this._bouncebackEffect = false;
            this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
            this._maskContainer.scrollRect = new PIXI.Rectangle();

            this._scrollBarVisible = true;
            this._mouseWheelEnabled = true;
            this._xPos = 0;
            this._yPos = 0;
            this._aniFlag = 0;
            this._footerLockedSize = 0;
            this._headerLockedSize = 0;

   

            this._viewSize = new PIXI.Point();
            this._contentSize = new PIXI.Point();
            this._pageSize = new PIXI.Point(1, 1);
            this._overlapSize = new PIXI.Point();
            this._tweening = 0;
            this._tweenTime = new PIXI.Point();
            this._tweenStart = new PIXI.Point();
            this._tweenDuration = new PIXI.Point();
            this._tweenChange = new PIXI.Point();
            this._velocity = new PIXI.Point();
            this._containerPos = new PIXI.Point();
            this._beginTouchPos = new PIXI.Point();
            this._lastTouchPos = new PIXI.Point();
            this._lastTouchGlobalPos = new PIXI.Point();

            let res: string;
            this._mouseWheelEnabled = false;

            if (this._header != null || this._footer != null)
                this._refreshBarAxis = (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) ? "y" : "x";

            this.setSize(owner.width, owner.height);

            this._owner.on(InteractiveEvents.Over, this._rollOver, this);
            this._owner.on(InteractiveEvents.Out, this._rollOut, this);
            this._owner.on(InteractiveEvents.Down, this._mouseDown, this);
            this._owner.on(DisplayObjectEvent.MOUSE_WHEEL, this._mouseWheel, this);
        }
        
        public setup(buffer: ByteBuffer): void {
            this._scrollType = buffer.readByte();
            var scrollBarDisplay: ScrollBarDisplayType = buffer.readByte();
            var flags: number = buffer.readInt();

            if (buffer.readBool()) {
                this._scrollBarMargin.top = buffer.readInt();
                this._scrollBarMargin.bottom = buffer.readInt();
                this._scrollBarMargin.left = buffer.readInt();
                this._scrollBarMargin.right = buffer.readInt();
            }

            var vtScrollBarRes: string = buffer.readS();
            var hzScrollBarRes: string = buffer.readS();
            var headerRes: string = buffer.readS();
            var footerRes: string = buffer.readS();

            this._displayOnLeft = (flags & 1) != 0;
            this._snapToItem = (flags & 2) != 0;
            this._displayInDemand = (flags & 4) != 0;
            this._pageMode = (flags & 8) != 0;
            if (flags & 16)
                this._touchEffect = true;
            else if (flags & 32)
                this._touchEffect = false;
            else
                this._touchEffect = UIConfig.defaultScrollTouchEffect;
            if (flags & 64)
                this._bouncebackEffect = true;
            else if (flags & 128)
                this._bouncebackEffect = false;
            else
                this._bouncebackEffect = UIConfig.defaultScrollBounceEffect;
            this._inertiaDisabled = (flags & 256) != 0;
            if ((flags & 512) == 0)
                this._maskContainer.scrollRect = new PIXI.Rectangle();
            this._floating = (flags & 1024) != 0;

            if (scrollBarDisplay == ScrollBarDisplayType.Default)
                scrollBarDisplay = UIConfig.defaultScrollBarDisplay;

            if (scrollBarDisplay != ScrollBarDisplayType.Hidden) {
                if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) {
                    var res: string = vtScrollBarRes ? vtScrollBarRes : UIConfig.verticalScrollBar;
                    if (res) {
                        this._vtScrollBar = <GScrollBar><any>(UIPackage.createObjectFromURL(res));
                        if (!this._vtScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._vtScrollBar.setScrollPane(this, true);
                        this._owner._rootContainer.addChild(this._vtScrollBar.displayObject);
                    }
                }
                if (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Horizontal) {
                    var res: string = hzScrollBarRes ? hzScrollBarRes : UIConfig.horizontalScrollBar;
                    if (res) {
                        this._hzScrollBar = <GScrollBar><any>(UIPackage.createObjectFromURL(res));
                        if (!this._hzScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._hzScrollBar.setScrollPane(this, false);
                        this._owner._rootContainer.addChild(this._hzScrollBar.displayObject);
                    }
                }

                this._scrollBarDisplayAuto = scrollBarDisplay == ScrollBarDisplayType.Auto;
                if (this._scrollBarDisplayAuto) {
                    if (this._vtScrollBar)
                        this._vtScrollBar.displayObject.visible = false;
                    if (this._hzScrollBar)
                        this._hzScrollBar.displayObject.visible = false;
                }
            }

            if (headerRes) {
                this._header = <GComponent><any>(UIPackage.createObjectFromURL(headerRes));
                if (this._header == null)
                    throw "cannot create scrollPane header from " + headerRes;
            }

            if (footerRes) {
                this._footer = <GComponent><any>(UIPackage.createObjectFromURL(footerRes));
                if (this._footer == null)
                    throw "cannot create scrollPane footer from " + footerRes;
            }

            if (this._header != null || this._footer != null)
                this._refreshBarAxis = (this._scrollType == ScrollType.Both || this._scrollType == ScrollType.Vertical) ? "y" : "x";

            this.setSize(this._owner.width, this._owner.height);
        }

        public dispose(): void {
            if (this._tweening != 0)
                GTimer.inst.remove(this.tweenUpdate, this);

            this._pageController = null;

            if (this._hzScrollBar != null)
                this._hzScrollBar.dispose();
            if (this._vtScrollBar != null)
                this._vtScrollBar.dispose();
            if (this._header != null)
                this._header.dispose();
            if (this._footer != null)
                this._footer.dispose();
                
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._mouseMove, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._mouseUp, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Click, this._click, this);

            this._owner.off(InteractiveEvents.Over, this._rollOver, this);
            this._owner.off(InteractiveEvents.Out, this._rollOut, this);
            this._owner.off(InteractiveEvents.Down, this._mouseDown, this);
            this._owner.off(DisplayObjectEvent.MOUSE_WHEEL, this._mouseWheel, this);
        }

        public get owner(): GComponent {
            return this._owner;
        }

        public get horzScrollBar(): GScrollBar {
            return this._hzScrollBar;
        }

        public get hzScrollBar(): GScrollBar {
            return this._hzScrollBar;
        }

        public get vertScrollBar(): GScrollBar {
            return this._vtScrollBar;
        }

        public get vtScrollBar(): GScrollBar {
            return this._vtScrollBar;
        }

        public get header(): GComponent {
            return this._header;
        }

        public get footer(): GComponent {
            return this._footer;
        }

        public get bouncebackEffect(): boolean {
            return this._bouncebackEffect;
        }

        public set bouncebackEffect(sc: boolean) {
            this._bouncebackEffect = sc;
        }

        public get touchEffect(): boolean {
            return this._touchEffect;
        }

        public set touchEffect(sc: boolean) {
            this._touchEffect = sc;
        }

        public set scrollSpeed(val: number) {
            this._scrollStep = val;
            if (this._scrollStep == 0)
                this._scrollStep = UIConfig.defaultScrollStep;
            this._mouseWheelSpeed = this._scrollStep * 2;
        }

        public get scrollSpeed(): number {
            return this._scrollStep;
        }

        public get snapToItem(): boolean {
            return this._snapToItem;
        }

        public set snapToItem(value: boolean) {
            this._snapToItem = value;
        }

        public get mouseWheelEnabled(): boolean {
            return this._mouseWheelEnabled;
        }

        public set mouseWheelEnabled(value: boolean) {
            this._mouseWheelEnabled = value;
        }

        public get decelerationRate(): number {
            return this._decelerationRate;
        }

        public set decelerationRate(value: number) {
            this._decelerationRate = value;
        }

        public get percX(): number {
            return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
        }

        public set percX(value: number) {
            this.setPercX(value, false);
        }

        public setPercX(value: number, ani: boolean = false): void {
            this._owner.ensureBoundsCorrect();
            this.setPosX(this._overlapSize.x * utils.NumberUtil.clamp01(value), ani);
        }

        public get percY(): number {
            return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
        }

        public set percY(value: number) {
            this.setPercY(value, false);
        }

        public setPercY(value: number, ani: boolean = false): void {
            this._owner.ensureBoundsCorrect();
            this.setPosY(this._overlapSize.y * utils.NumberUtil.clamp01(value), ani);
        }

        public get posX(): number {
            return this._xPos;
        }

        public set posX(value: number) {
            this.setPosX(value, false);
        }

        public setPosX(value: number, ani: boolean = false): void {
            this._owner.ensureBoundsCorrect();

            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "x");

            value = utils.NumberUtil.clamp(value, 0, this._overlapSize.x);
            if (value != this._xPos) {
                this._xPos = value;
                this.posChanged(ani);
            }
        }

        public get posY(): number {
            return this._yPos;
        }

        public set posY(value: number) {
            this.setPosY(value, false);
        }

        public setPosY(value: number, ani: boolean = false): void {
            this._owner.ensureBoundsCorrect();

            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "y");

            value = utils.NumberUtil.clamp(value, 0, this._overlapSize.y);
            if (value != this._yPos) {
                this._yPos = value;
                this.posChanged(ani);
            }
        }

        public get contentWidth(): number {
            return this._contentSize.x;
        }

        public get contentHeight(): number {
            return this._contentSize.y;
        }

        public get viewWidth(): number {
            return this._viewSize.x;
        }

        public set viewWidth(value: number) {
            value = value + this._owner.margin.left + this._owner.margin.right;
            if (this._vtScrollBar != null)
                value += this._vtScrollBar.width;
            this._owner.width = value;
        }

        public get viewHeight(): number {
            return this._viewSize.y;
        }

        public set viewHeight(value: number) {
            value = value + this._owner.margin.top + this._owner.margin.bottom;
            if (this._hzScrollBar != null)
                value += this._hzScrollBar.height;
            this._owner.height = value;
        }

        public get currentPageX(): number {
            if (!this._pageMode)
                return 0;

            var page: number = Math.floor(this._xPos / this._pageSize.x);
            if (this._xPos - page * this._pageSize.x > this._pageSize.x * 0.5)
                page++;

            return page;
        }

        public set currentPageX(value: number) {
            if (this._pageMode && this._overlapSize.x > 0)
                this.setPosX(value * this._pageSize.x, false);
        }

        public get currentPageY(): number {
            if (!this._pageMode)
                return 0;

            let page: number = Math.floor(this._yPos / this._pageSize.y);
            if (this._yPos - page * this._pageSize.y > this._pageSize.y * 0.5)
                page++;

            return page;
        }

        public set currentPageY(value: number) {
            if (this._pageMode && this._overlapSize.y > 0)
                this.setPosY(value * this._pageSize.y, false);
        }

        public get isBottomMost(): boolean {
            return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
        }

        public get isRightMost(): boolean {
            return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
        }

        public get pageController(): Controller {
            return this._pageController;
        }

        public set pageController(value: Controller) {
            this._pageController = value;
        }

        public get scrollingPosX(): number {
            return utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x);
        }

        public get scrollingPosY(): number {
            return utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y);
        }

        public scrollTop(ani: boolean = false): void {
            this.setPercY(0, ani);
        }

        public scrollBottom(ani: boolean = false): void {
            this.setPercY(1, ani);
        }

        public scrollUp(ratio: number = 1, ani: boolean = false): void {
            if (this._pageMode)
                this.setPosY(this._yPos - this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos - this._scrollStep * ratio, ani);;
        }

        public scrollDown(ratio: number = 1, ani: boolean = false): void {
            if (this._pageMode)
                this.setPosY(this._yPos + this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos + this._scrollStep * ratio, ani);
        }

        public scrollLeft(ratio: number = 1, ani: boolean = false): void {
            if (this._pageMode)
                this.setPosX(this._xPos - this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos - this._scrollStep * ratio, ani);
        }

        public scrollRight(ratio: number = 1, ani: boolean = false): void {
            if (this._pageMode)
                this.setPosX(this._xPos + this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos + this._scrollStep * ratio, ani);
        }

        public get scrollStep(): number {
            return this._scrollStep;
        }

        public set scrollStep(v : number) {
            this._scrollStep = v;
            if (this._scrollStep == 0) {
                this._scrollStep = UIConfig.defaultScrollStep;
            }
        }

        public scrollToView(target: Object, ani: boolean = false, snapToFirst: boolean = false): void {
            this._owner.ensureBoundsCorrect();
            if (this._needRefresh)
                this.refresh();

            let rect: PIXI.Rectangle;
            if (target instanceof GObject) {
                if (target.parent != this._owner) {
                    target.parent.localToGlobalRect(target.x, target.y,
                        target.width, target.height, ScrollPane.sHelperRect);
                    rect = this._owner.globalToLocalRect(ScrollPane.sHelperRect.x, ScrollPane.sHelperRect.y,
                        ScrollPane.sHelperRect.width, ScrollPane.sHelperRect.height, ScrollPane.sHelperRect);
                }
                else {
                    rect = ScrollPane.sHelperRect;
                    rect.x = target.x;
                    rect.y = target.y;
                    rect.width = target.width;
                    rect.height = target.height;
                }
            }
            else
                rect = target as PIXI.Rectangle;

            if (this._overlapSize.y > 0) {
                const bottom: number = this._yPos + this._viewSize.y;
                if (snapToFirst || rect.y <= this._yPos || rect.height >= this._viewSize.y) {
                    if (this._pageMode)
                        this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                    else
                        this.setPosY(rect.y, ani);
                }
                else if (rect.y + rect.height > bottom) {
                    if (this._pageMode)
                        this.setPosY(Math.floor(rect.y / this._pageSize.y) * this._pageSize.y, ani);
                    else if (rect.height <= this._viewSize.y / 2)
                        this.setPosY(rect.y + rect.height * 2 - this._viewSize.y, ani);
                    else
                        this.setPosY(rect.y + rect.height - this._viewSize.y, ani);
                }
            }
            if (this._overlapSize.x > 0) {
                let right: number = this._xPos + this._viewSize.x;
                if (snapToFirst || rect.x <= this._xPos || rect.width >= this._viewSize.x) {
                    if (this._pageMode)
                        this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                    else
                        this.setPosX(rect.x, ani);
                }
                else if (rect.x + rect.width > right) {
                    if (this._pageMode)
                        this.setPosX(Math.floor(rect.x / this._pageSize.x) * this._pageSize.x, ani);
                    else if (rect.width <= this._viewSize.x / 2)
                        this.setPosX(rect.x + rect.width * 2 - this._viewSize.x, ani);
                    else
                        this.setPosX(rect.x + rect.width - this._viewSize.x, ani);
                }
            }

            if (!ani && this._needRefresh)
                this.refresh();
        }

        public isChildInView(obj: GObject): boolean {
            if (this._overlapSize.y > 0) {
                var dist: number = obj.y + this._container.y;
                if (dist < -obj.height || dist > this._viewSize.y)
                    return false;
            }

            if (this._overlapSize.x > 0) {
                dist = obj.x + this._container.x;
                if (dist < -obj.width || dist > this._viewSize.x)
                    return false;
            }

            return true;
        }

        public cancelDragging(): void {
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._mouseMove, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._mouseUp, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Click, this._click, this);

            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;

            ScrollPane._gestureFlag = 0;
            this._isDragging = false;
            this._maskContainer.interactive = true;
        }

        public get isDragging():boolean {
            return this._isDragging;
        }

        public lockHeader(size: number): void {
            if (this._headerLockedSize == size)
                return;

            this._headerLockedSize = size;

            if (!this._refreshEventDispatching && (<IndexedObject>this._container)[this._refreshBarAxis] >= 0) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                (<IndexedObject>this._tweenChange)[this._refreshBarAxis] = this._headerLockedSize - (<IndexedObject>this._tweenStart)[this._refreshBarAxis];
                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this._tweenTime.set(0, 0);
                this._tweening = 2;
                GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        }

        public lockFooter(size: number): void {
            if (this._footerLockedSize == size)
                return;

            this._footerLockedSize = size;

            if (!this._refreshEventDispatching && (<IndexedObject>this._container)[this._refreshBarAxis] <= -(<IndexedObject>this._overlapSize)[this._refreshBarAxis]) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                let max: number = (<IndexedObject>this._overlapSize)[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max((<IndexedObject>this._contentSize)[this._refreshBarAxis] + this._footerLockedSize - (<IndexedObject>this._viewSize)[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                (<IndexedObject>this._tweenChange)[this._refreshBarAxis] = -max - (<IndexedObject>this._tweenStart)[this._refreshBarAxis];
                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this._tweenTime.set(0, 0);
                this._tweening = 2;
                GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        }

        /**
         * @internal
         */
        onOwnerSizeChanged(): void {
            this.setSize(this._owner.width, this._owner.height);
            this.posChanged(false);
        }

        /**
         * @internal
         */
        handleControllerChanged(c: Controller): void {
            if (this._pageController == c) {
                if (this._scrollType == ScrollType.Horizontal)
                    this.currentPageX = c.selectedIndex;
                else
                    this.currentPageY = c.selectedIndex;
            }
        }

        private updatePageController(): void {
            if (this._pageController != null && !this._pageController.changing) {
                let index: number;
                if (this._scrollType == ScrollType.Horizontal)
                    index = this.currentPageX;
                else
                    index = this.currentPageY;
                if (index < this._pageController.pageCount) {
                    const c: Controller = this._pageController;
                    this._pageController = null; //prevent from handleControllerChanged calling
                    c.selectedIndex = index;
                    this._pageController = c;
                }
            }
        }

        /**
         * @internal
         */
        adjustMaskContainer(): void {
            let mx: number, my: number;
            if (this._displayOnLeft && this._vtScrollBar != null)
                mx = Math.floor(this._owner.margin.left + this._vtScrollBar.width);
            else
                mx = Math.floor(this._owner.margin.left);
            my = Math.floor(this._owner.margin.top);

            this._maskContainer.position.set(mx, my);

            if (this._owner._alignOffset.x != 0 || this._owner._alignOffset.y != 0) {
                if (this._alignContainer == null) {
                    this._alignContainer = new PIXI.Container();
                    this._maskContainer.addChild(this._alignContainer);
                    this._alignContainer.addChild(this._container);
                }

                this._alignContainer.position.set(this._owner._alignOffset.x, this._owner._alignOffset.y);
            }
            else if (this._alignContainer)
                this._alignContainer.position.set(0, 0);
        }

        public setSize(width: number, height: number): void {
            this.adjustMaskContainer();

            if (this._hzScrollBar) {
                this._hzScrollBar.y = height - this._hzScrollBar.height;
                if (this._vtScrollBar && !this._vScrollNone) {
                    this._hzScrollBar.width = width - this._vtScrollBar.width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                    if (this._displayOnLeft)
                        this._hzScrollBar.x = this._scrollBarMargin.left + this._vtScrollBar.width;
                    else
                        this._hzScrollBar.x = this._scrollBarMargin.left;
                }
                else {
                    this._hzScrollBar.width = width - this._scrollBarMargin.left - this._scrollBarMargin.right;
                    this._hzScrollBar.x = this._scrollBarMargin.left;
                }
            }
            if (this._vtScrollBar) {
                if (!this._displayOnLeft)
                    this._vtScrollBar.x = width - this._vtScrollBar.width;
                if (this._hzScrollBar)
                    this._vtScrollBar.height = height - this._hzScrollBar.height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                else
                    this._vtScrollBar.height = height - this._scrollBarMargin.top - this._scrollBarMargin.bottom;
                this._vtScrollBar.y = this._scrollBarMargin.top;
            }

            this._viewSize.x = width;
            this._viewSize.y = height;
            if (this._hzScrollBar && !this._hScrollNone)
                this._viewSize.y -= this._hzScrollBar.height;
            if (this._vtScrollBar && !this._vScrollNone)
                this._viewSize.x -= this._vtScrollBar.width;
            this._viewSize.x -= (this._owner.margin.left + this._owner.margin.right);
            this._viewSize.y -= (this._owner.margin.top + this._owner.margin.bottom);

            this._viewSize.x = Math.max(1, this._viewSize.x);
            this._viewSize.y = Math.max(1, this._viewSize.y);
            this._pageSize.x = this._viewSize.x;
            this._pageSize.y = this._viewSize.y;

            this.handleSizeChanged();
        }

        public setContentSize(w: number, h: number): void {
            if (this._contentSize.x == w && this._contentSize.y == h)
                return;

            this._contentSize.x = w;
            this._contentSize.y = h;
            this.handleSizeChanged();
        }

        /**
         * @internal
         */
        changeContentSizeOnScrolling(deltaWidth: number, deltaHeight: number, deltaPosX: number, deltaPosY: number): void {
            const isRightmost: boolean = this._xPos == this._overlapSize.x;
            const isBottom: boolean = this._yPos == this._overlapSize.y;

            this._contentSize.x += deltaWidth;
            this._contentSize.y += deltaHeight;
            this.handleSizeChanged();

            if (this._tweening == 1) {
                //if the last scroll is CLINGING-SIDE, then just continue to cling
                if (deltaWidth != 0 && isRightmost && this._tweenChange.x < 0) {
                    this._xPos = this._overlapSize.x;
                    this._tweenChange.x = -this._xPos - this._tweenStart.x;
                }

                if (deltaHeight != 0 && isBottom && this._tweenChange.y < 0) {
                    this._yPos = this._overlapSize.y;
                    this._tweenChange.y = -this._yPos - this._tweenStart.y;
                }
            }
            else if (this._tweening == 2) {
                //re-pos to ensure the scrolling will go on smooth
                if (deltaPosX != 0) {
                    this._container.x -= deltaPosX;
                    this._tweenStart.x -= deltaPosX;
                    this._xPos = -this._container.x;
                }
                if (deltaPosY != 0) {
                    this._container.y -= deltaPosY;
                    this._tweenStart.y -= deltaPosY;
                    this._yPos = -this._container.y;
                }
            }
            else if (this._isDragging) {
                if (deltaPosX != 0) {
                    this._container.x -= deltaPosX;
                    this._containerPos.x -= deltaPosX;
                    this._xPos = -this._container.x;
                }
                if (deltaPosY != 0) {
                    this._container.y -= deltaPosY;
                    this._containerPos.y -= deltaPosY;
                    this._yPos = -this._container.y;
                }
            }
            else {
                //if the last scroll is CLINGING-SIDE, then just continue to cling
                if (deltaWidth != 0 && isRightmost) {
                    this._xPos = this._overlapSize.x;
                    this._container.x = -this._xPos;
                }

                if (deltaHeight != 0 && isBottom) {
                    this._yPos = this._overlapSize.y;
                    this._container.y = -this._yPos;
                }
            }

            if (this._pageMode)
                this.updatePageController();
        }

        private handleSizeChanged(onScrolling: boolean = false): void {
            if (this._displayInDemand) {
                if (this._vtScrollBar) {
                    if (this._contentSize.y <= this._viewSize.y) {
                        if (!this._vScrollNone) {
                            this._vScrollNone = true;
                            this._viewSize.x += this._vtScrollBar.width;
                        }
                    }
                    else {
                        if (this._vScrollNone) {
                            this._vScrollNone = false;
                            this._viewSize.x -= this._vtScrollBar.width;
                        }
                    }
                }
                if (this._hzScrollBar) {
                    if (this._contentSize.x <= this._viewSize.x) {
                        if (!this._hScrollNone) {
                            this._hScrollNone = true;
                            this._viewSize.y += this._hzScrollBar.height;
                        }
                    }
                    else {
                        if (this._hScrollNone) {
                            this._hScrollNone = false;
                            this._viewSize.y -= this._hzScrollBar.height;
                        }
                    }
                }
            }

            if (this._vtScrollBar) {
                if (this._viewSize.y < this._vtScrollBar.minSize)
                    //use this._vtScrollBar.displayObject.visible instead of this._vtScrollBar.visible... ScrollBar actually is not in its owner's display tree, so vtScrollBar.visible will not work
                    this._vtScrollBar.displayObject.visible = false;
                else {
                    this._vtScrollBar.displayObject.visible = this._scrollBarVisible && !this._vScrollNone;
                    if (this._contentSize.y == 0)
                        this._vtScrollBar.displayPerc = 0;
                    else
                        this._vtScrollBar.displayPerc = Math.min(1, this._viewSize.y / this._contentSize.y);
                }
            }
            if (this._hzScrollBar) {
                if (this._viewSize.x < this._hzScrollBar.minSize)
                    this._hzScrollBar.displayObject.visible = false;
                else {
                    this._hzScrollBar.displayObject.visible = this._scrollBarVisible && !this._hScrollNone;
                    if (this._contentSize.x == 0)
                        this._hzScrollBar.displayPerc = 0;
                    else
                        this._hzScrollBar.displayPerc = Math.min(1, this._viewSize.x / this._contentSize.x);
                }
            }

            const rect: PIXI.Rectangle = this._maskContainer.scrollRect;
            if (rect) {
                rect.width = this._viewSize.x;
                rect.height = this._viewSize.y;
                this._maskContainer.scrollRect = rect;
            }

            if (this._scrollType == ScrollType.Horizontal || this._scrollType == ScrollType.Both)
                this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
            else
                this._overlapSize.x = 0;
            if (this._scrollType == ScrollType.Vertical || this._scrollType == ScrollType.Both)
                this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
            else
                this._overlapSize.y = 0;

            //bounds checking
            this._xPos = utils.NumberUtil.clamp(this._xPos, 0, this._overlapSize.x);
            this._yPos = utils.NumberUtil.clamp(this._yPos, 0, this._overlapSize.y);
            if (this._refreshBarAxis != null) {
                var max: number = (<IndexedObject>this._overlapSize)[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max((<IndexedObject>this._contentSize)[this._refreshBarAxis] + this._footerLockedSize - (<IndexedObject>this._viewSize)[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;

                if (this._refreshBarAxis == "x") {
                    this._container.position.set(utils.NumberUtil.clamp(this._container.x, -max, this._headerLockedSize),
                        utils.NumberUtil.clamp(this._container.y, -this._overlapSize.y, 0));
                }
                else {
                    this._container.position.set(utils.NumberUtil.clamp(this._container.x, -this._overlapSize.x, 0),
                        utils.NumberUtil.clamp(this._container.y, -max, this._headerLockedSize));
                }

                if (this._header != null) {
                    if (this._refreshBarAxis == "x")
                        this._header.height = this._viewSize.y;
                    else
                        this._header.width = this._viewSize.x;
                }

                if (this._footer != null) {
                    if (this._refreshBarAxis == "y")
                        this._footer.height = this._viewSize.y;
                    else
                        this._footer.width = this._viewSize.x;
                }
            }
            else {
                this._container.position.set(utils.NumberUtil.clamp(this._container.x, -this._overlapSize.x, 0),
                    utils.NumberUtil.clamp(this._container.y, -this._overlapSize.y, 0));
            }

            this.syncScrollBar();
            this.checkRefreshBar();
            if (this._pageMode)
                this.updatePageController();
        }

        private posChanged(ani: boolean): void {
            if (this._aniFlag == 0)
                this._aniFlag = ani ? 1 : -1;
            else if (this._aniFlag == 1 && !ani)
                this._aniFlag = -1;

            this._needRefresh = true;
            GTimer.inst.callLater(this.refresh, this);
        }

        private refresh(): void {
            this._needRefresh = false;
            GTimer.inst.remove(this.refresh, this);

            if (this._pageMode || this._snapToItem) {
                ScrollPane.sEndPos.set(-this._xPos, -this._yPos);
                this.alignPosition(ScrollPane.sEndPos, false);
                this._xPos = -ScrollPane.sEndPos.x;
                this._yPos = -ScrollPane.sEndPos.y;
            }

            this.refresh2();

            //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            this.emit(ScrollEvent.SCROLL, this);

            if (this._needRefresh) { //developer might modify position in the callback, so here refresh again to avoid flickering
                this._needRefresh = false;
                GTimer.inst.remove(this.refresh, this);
                this.refresh2();
            }
            this.syncScrollBar();
            this._aniFlag = 0;
        }

        private refresh2(): void {
            if (this._aniFlag == 1 && !this._isDragging) {
                let posX: number;
                let posY: number;

                if (this._overlapSize.x > 0)
                    posX = -Math.floor(this._xPos);
                else {
                    if (this._container.x != 0)
                        this._container.x = 0;
                    posX = 0;
                }
                if (this._overlapSize.y > 0)
                    posY = -Math.floor(this._yPos);
                else {
                    if (this._container.y != 0)
                        this._container.y = 0;
                    posY = 0;
                }

                if (posX != this._container.x || posY != this._container.y) {
                    this._tweening = 1;
                    this._tweenTime.set(0, 0);
                    this._tweenDuration.set(ScrollPane.TWEEN_MANUALLY_SET_DURATION, ScrollPane.TWEEN_MANUALLY_SET_DURATION);
                    this._tweenStart.set(this._container.x, this._container.y);
                    this._tweenChange.set(posX - this._tweenStart.x, posY - this._tweenStart.y);
                    GTimer.inst.addLoop(1, this.tweenUpdate, this);
                }
                else if (this._tweening != 0)
                    this.killTween();
            }
            else {
                if (this._tweening != 0)
                    this.killTween();

                this._container.position.set(Math.floor(-this._xPos), Math.floor(-this._yPos));

                this.loopCheckingCurrent();
            }

            if (this._pageMode)
                this.updatePageController();
        }

        private syncScrollBar(end: boolean = false): void {
            if (this._vtScrollBar != null) {
                this._vtScrollBar.scrollPerc = this._overlapSize.y == 0 ? 0 : utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y;
                if (this._scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }
            if (this._hzScrollBar != null) {
                this._hzScrollBar.scrollPerc = this._overlapSize.x == 0 ? 0 : utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x;
                if (this._scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }

            if (end)
                this._maskContainer.interactive = true;
        }

        private _mouseDown(e:PIXI.interaction.InteractionEvent): void {
            if (!this._touchEffect)
                return;
                
            if (this._tweening != 0) {
                this.killTween();
                this._isDragging = true;
            }
            else
                this._isDragging = false;

            // const globalMouse: PIXI.Point = PIXI.utils.isMobile.any ? 
            //     this._owner.globalToLocal(e.data.global.x, e.data.global.y)
            //     : this._owner.globalToLocal(GRoot.globalMouseStatus.mouseX, GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            const globalMouse: PIXI.Point = PIXI.utils.isMobile.any ? 
                this._owner.globalToLocal(e.data.global.x, e.data.global.y)
                : this._owner.globalToLocal(GRoot.mouseX, GRoot.mouseY, ScrollPane.sHelperPoint);
            this._containerPos.set(this._container.x, this._container.y);
            this._beginTouchPos.copyFrom(globalMouse);
            this._lastTouchPos.copyFrom(globalMouse);
            this._lastTouchGlobalPos.copyFrom(globalMouse);
            this._isHoldAreaDone = false;
            this._velocity.set(0, 0);
            this._velocityScale = 1;
            this._lastMoveTime = GTimer.inst.curTime / 1000;

            GRoot.inst.nativeStage.on(InteractiveEvents.Move, this._mouseMove, this);
            GRoot.inst.nativeStage.on(InteractiveEvents.Up, this._mouseUp, this);
            GRoot.inst.nativeStage.on(InteractiveEvents.Click, this._click, this);
        }

        private _mouseMove(): void {
            if (!this._touchEffect)
                return;

            if (ScrollPane.draggingPane != null && ScrollPane.draggingPane != this || GObject.draggingObject != null)
                return;

            let sensitivity: number = UIConfig.touchScrollSensitivity;

            // const globalMouse: PIXI.Point = this._owner.globalToLocal(GRoot.globalMouseStatus.mouseX, GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            const globalMouse: PIXI.Point = this._owner.globalToLocal(GRoot.mouseX, GRoot.mouseY, ScrollPane.sHelperPoint);

            let diff: number, diff2: number;
            let sv: boolean, sh: boolean;

            if (this._scrollType == ScrollType.Vertical) {
                if (!this._isHoldAreaDone) {
                    //gesture on vertical dir is being observed
                    ScrollPane._gestureFlag |= 1;

                    diff = Math.abs(this._beginTouchPos.y - globalMouse.y);
                    if (diff < sensitivity)
                        return;

                    if ((ScrollPane._gestureFlag & 2) != 0) {
                        diff2 = Math.abs(this._beginTouchPos.x - globalMouse.x);
                        if (diff < diff2)
                            return;
                    }
                }

                sv = true;
            }
            else if (this._scrollType == ScrollType.Horizontal) {
                if (!this._isHoldAreaDone) {
                    ScrollPane._gestureFlag |= 2;  //gesture on horz dir is being observed

                    diff = Math.abs(this._beginTouchPos.x - globalMouse.x);
                    if (diff < sensitivity)
                        return;

                    if ((ScrollPane._gestureFlag & 1) != 0) {
                        diff2 = Math.abs(this._beginTouchPos.y - globalMouse.y);
                        if (diff < diff2)
                            return;
                    }
                }

                sh = true;
            }
            else {
                ScrollPane._gestureFlag = 3;  //both

                if (!this._isHoldAreaDone) {
                    diff = Math.abs(this._beginTouchPos.y - globalMouse.y);
                    if (diff < sensitivity) {
                        diff = Math.abs(this._beginTouchPos.x - globalMouse.x);
                        if (diff < sensitivity)
                            return;
                    }
                }

                sv = sh = true;
            }

            let newPosX: number = Math.floor(this._containerPos.x + globalMouse.x - this._beginTouchPos.x);
            let newPosY: number = Math.floor(this._containerPos.y + globalMouse.y - this._beginTouchPos.y);

            if (sv) {
                if (newPosY > 0) {
                    if (!this._bouncebackEffect)
                        this._container.y = 0;
                    else if (this._header != null && this._header.height != 0)    //TODO: height -> maxHeight
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.height));
                    else
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosY < -this._overlapSize.y) {
                    if (!this._bouncebackEffect)
                        this._container.y = -this._overlapSize.y;
                    else if (this._footer != null && this._footer.height > 0)    //TODO: height -> maxHeight
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._footer.height) - this._overlapSize.y);
                    else
                        this._container.y = Math.floor(Math.max((newPosY + this._overlapSize.y) * 0.5, -this._viewSize.y * ScrollPane.PULL_DIST_RATIO) - this._overlapSize.y);
                }
                else
                    this._container.y = newPosY;
            }

            if (sh) {
                if (newPosX > 0) {
                    if (!this._bouncebackEffect)
                        this._container.x = 0;
                    else if (this._header != null && this._header.width != 0)      //TODO: width -> maxWidth
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.width));
                    else
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosX < 0 - this._overlapSize.x) {
                    if (!this._bouncebackEffect)
                        this._container.x = -this._overlapSize.x;
                    else if (this._footer != null && this._footer.width > 0)  //TODO: width -> maxWidth
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.width) - this._overlapSize.x);
                    else
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * ScrollPane.PULL_DIST_RATIO) - this._overlapSize.x);
                }
                else
                    this._container.x = newPosX;
            }

            //update acceleration
            const frameRate: number = GRoot.inst.applicationContext.ticker.FPS;
            const now: number = GTimer.inst.curTime / 1000;
            const deltaTime: number = Math.max(now - this._lastMoveTime, 1 / frameRate);
            let deltaPositionX: number = globalMouse.x - this._lastTouchPos.x;
            let deltaPositionY: number = globalMouse.y - this._lastTouchPos.y;
            if (!sh)
                deltaPositionX = 0;
            if (!sv)
                deltaPositionY = 0;
            if (deltaTime != 0) {
                const elapsed: number = deltaTime * frameRate - 1;
                if (elapsed > 1) {
                    const factor: number = Math.pow(0.833, elapsed);
                    this._velocity.x = this._velocity.x * factor;
                    this._velocity.y = this._velocity.y * factor;
                }
                this._velocity.x = utils.NumberUtil.lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                this._velocity.y = utils.NumberUtil.lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
            }

            //in the inertia scrolling we need the offset value to screen space, so here we need to reocrd the offset ratio
            const deltaGlobalPositionX: number = this._lastTouchGlobalPos.x - globalMouse.x;
            const deltaGlobalPositionY: number = this._lastTouchGlobalPos.y - globalMouse.y;
            if (deltaPositionX != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
            else if (deltaPositionY != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);

            this._lastTouchPos.copyFrom(globalMouse);
            this._lastTouchGlobalPos.copyFrom(globalMouse);
            this._lastMoveTime = now;

            //update position
            if (this._overlapSize.x > 0)
                this._xPos = utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x);
            if (this._overlapSize.y > 0)
                this._yPos = utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y);

            if (this._loop != 0) {
                newPosX = this._container.x;
                newPosY = this._container.y;
                if (this.loopCheckingCurrent()) {
                    this._containerPos.x += this._container.x - newPosX;
                    this._containerPos.y += this._container.y - newPosY;
                }
            }

            ScrollPane.draggingPane = this;
            this._isHoldAreaDone = true;
            this._isDragging = true;
            this._maskContainer.interactive = false;

            this.syncScrollBar();
            this.checkRefreshBar();
            if (this._pageMode)
                this.updatePageController();

            this.emit(ScrollEvent.SCROLL, this);
            //Events.dispatch(Events.SCROLL, this._owner.displayObject);
        }

        private _mouseUp(): void {
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._mouseMove, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._mouseUp, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Click, this._click, this);

            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;

            ScrollPane._gestureFlag = 0;

            if (!this._isDragging || !this._touchEffect) {
                this._isDragging = false;
                this._maskContainer.interactive = true;
                return;
            }

            this._isDragging = false;
            this._maskContainer.interactive = true;

            this._tweenStart.set(this._container.x, this._container.y);

            ScrollPane.sEndPos.set(this._tweenStart.x, this._tweenStart.y);

            let flag: boolean = false;
            if (this._container.x > 0) {
                ScrollPane.sEndPos.x = 0;
                flag = true;
            }
            else if (this._container.x < -this._overlapSize.x) {
                ScrollPane.sEndPos.x = -this._overlapSize.x;
                flag = true;
            }
            if (this._container.y > 0) {
                ScrollPane.sEndPos.y = 0;
                flag = true;
            }
            else if (this._container.y < -this._overlapSize.y) {
                ScrollPane.sEndPos.y = -this._overlapSize.y;
                flag = true;
            }
            if (flag) {
                this._tweenChange.set(ScrollPane.sEndPos.x - this._tweenStart.x, ScrollPane.sEndPos.y - this._tweenStart.y);
                if (this._tweenChange.x < -UIConfig.touchDragSensitivity || this._tweenChange.y < -UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this.emit(ScrollEvent.PULL_DOWN_RELEASE);
                    //Events.dispatch(Events.PULLthis._DOWNthis._RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }
                else if (this._tweenChange.x > UIConfig.touchDragSensitivity || this._tweenChange.y > UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this.emit(ScrollEvent.PULL_UP_RELEASE);
                    //Events.dispatch(Events.PULLthis._UPthis._RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }

                if (this._headerLockedSize > 0 && (<IndexedObject>ScrollPane.sEndPos)[this._refreshBarAxis] == 0) {
                    (<IndexedObject>ScrollPane.sEndPos)[this._refreshBarAxis] = this._headerLockedSize;
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                }
                else if (this._footerLockedSize > 0 && (<IndexedObject>ScrollPane.sEndPos)[this._refreshBarAxis] == -(<IndexedObject>this._overlapSize)[this._refreshBarAxis]) {
                    var max: number = (<IndexedObject>this._overlapSize)[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max((<IndexedObject>this._contentSize)[this._refreshBarAxis] + this._footerLockedSize - (<IndexedObject>this._viewSize)[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    (<IndexedObject>ScrollPane.sEndPos)[this._refreshBarAxis] = -max;
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                }

                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
            }
            else {
                if (!this._inertiaDisabled) {
                    const frameRate: number = GRoot.inst.applicationContext.ticker.FPS;
                    const elapsed: number = (GTimer.inst.curTime / 1000 - this._lastMoveTime) * frameRate - 1;
                    if (elapsed > 1) {
                        const factor: number = Math.pow(0.833, elapsed);
                        this._velocity.x = this._velocity.x * factor;
                        this._velocity.y = this._velocity.y * factor;
                    }
                    //calc dist & duration by speed
                    this.updateTargetAndDuration(this._tweenStart, ScrollPane.sEndPos);
                }
                else
                    this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);

                ScrollPane.sOldChange.set(ScrollPane.sEndPos.x - this._tweenStart.x, ScrollPane.sEndPos.y - this._tweenStart.y);

                //adjust
                this.loopCheckingTarget(ScrollPane.sEndPos);
                if (this._pageMode || this._snapToItem)
                    this.alignPosition(ScrollPane.sEndPos, true);

                this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x;
                this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                    if (this._scrollBarDisplayAuto)
                        this.showScrollBar(false);
                    return;
                }

                if (this._pageMode || this._snapToItem) {
                    this.fixDuration("x", ScrollPane.sOldChange.x);
                    this.fixDuration("y", ScrollPane.sOldChange.y);
                }
            }

            this._tweening = 2;
            this._tweenTime.set(0, 0);
            GTimer.inst.addLoop(1, this.tweenUpdate, this);
        }

        private _click(): void {
            this._isDragging = false;
        }

        private _mouseWheel(evt: any): void {
            if (!this._mouseWheelEnabled)
                return;
            const delta = evt.delta > 0 ? -1 : (evt.delta < 0 ? 1 : 0);
            if (this._overlapSize.x > 0 && this._overlapSize.y == 0) {
                if (this._pageMode)
                    this.setPosX(this._xPos + this._pageSize.x * delta, false);
                else
                    this.setPosX(this._xPos + this._mouseWheelSpeed * delta, false);
            }
            else {
                if (this._pageMode)
                    this.setPosY(this._yPos + this._pageSize.y * delta, false);
                else
                    this.setPosY(this._yPos + this._mouseWheelSpeed * delta, false);
            }
        }

        private _rollOver(): void {
            this.showScrollBar(true);
        }

        private _rollOut(): void {
            this.showScrollBar(false);
        }

        private showScrollBar(visible: boolean): void {
            if (visible) {
                GTimer.inst.remove(this.setScrollBarVisible, this);
                this.setScrollBarVisible(true);
            }
            else
                GTimer.inst.add(500, 1, this.setScrollBarVisible, this, visible);
        }

        private setScrollBarVisible(visible: boolean): void {
            this._scrollBarVisible = visible && this._viewSize.x > 0 && this._viewSize.y > 0;
            if (this._vtScrollBar)
                this._vtScrollBar.displayObject.visible = this._scrollBarVisible && !this._vScrollNone;
            if (this._hzScrollBar)
                this._hzScrollBar.displayObject.visible = this._scrollBarVisible && !this._hScrollNone;
        }

        private getLoopPartSize(division: number, axis: string): number {
            let pad: number = 0;
            if (this._owner instanceof GList)
                pad = axis == "x" ? this._owner.columnGap : this._owner.lineGap;
            return ((<IndexedObject>this._contentSize)[axis] + pad) / division;
        }

        private loopCheckingCurrent(): boolean {
            let changed: boolean = false;
            if (this._loop == 1 && this._overlapSize.x > 0) {
                if (this._xPos < 0.001) {
                    this._xPos += this.getLoopPartSize(2, "x");
                    changed = true;
                }
                else if (this._xPos >= this._overlapSize.x) {
                    this._xPos -= this.getLoopPartSize(2, "x");
                    changed = true;
                }
            }
            else if (this._loop == 2 && this._overlapSize.y > 0) {
                if (this._yPos < 0.001) {
                    this._yPos += this.getLoopPartSize(2, "y");
                    changed = true;
                }
                else if (this._yPos >= this._overlapSize.y) {
                    this._yPos -= this.getLoopPartSize(2, "y");
                    changed = true;
                }
            }

            if (changed)
                this._container.position.set(Math.floor(-this._xPos), Math.floor(-this._yPos));

            return changed;
        }

        private loopCheckingTarget(endPos: PIXI.Point): void {
            if (this._loop == 1)
                this.loopCheckingTarget2(endPos, "x");

            if (this._loop == 2)
                this.loopCheckingTarget2(endPos, "y");
        }

        private loopCheckingTarget2(endPos: PIXI.Point, axis: string): void {
            let halfSize: number;
            let tmp: number;
            if ((<IndexedObject>endPos)[axis] > 0) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = (<IndexedObject>this._tweenStart)[axis] - halfSize;
                if (tmp <= 0 && tmp >= -(<IndexedObject>this._overlapSize)[axis]) {
                    (<IndexedObject>endPos)[axis] -= halfSize;
                    (<IndexedObject>this._tweenStart)[axis] = tmp;
                }
            }
            else if ((<IndexedObject>endPos)[axis] < -(<IndexedObject>this._overlapSize)[axis]) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = (<IndexedObject>this._tweenStart)[axis] + halfSize;
                if (tmp <= 0 && tmp >= -(<IndexedObject>this._overlapSize)[axis]) {
                    (<IndexedObject>endPos)[axis] += halfSize;
                    (<IndexedObject>this._tweenStart)[axis] = tmp;
                }
            }
        }

        private loopCheckingNewPos(value: number, axis: string): number {
            if ((<IndexedObject>this._overlapSize)[axis] == 0)
                return value;

            let pos: number = axis == "x" ? this._xPos : this._yPos;
            let changed: boolean = false;
            let v: number;
            if (value < 0.001) {
                value += this.getLoopPartSize(2, axis);
                if (value > pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((value - pos) / v) * v;
                    pos = utils.NumberUtil.clamp(pos + v, 0, (<IndexedObject>this._overlapSize)[axis]);
                    changed = true;
                }
            }
            else if (value >= (<IndexedObject>this._overlapSize)[axis]) {
                value -= this.getLoopPartSize(2, axis);
                if (value < pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((pos - value) / v) * v;
                    pos = utils.NumberUtil.clamp(pos - v, 0, (<IndexedObject>this._overlapSize)[axis]);
                    changed = true;
                }
            }

            if (changed) {
                if (axis == "x")
                    this._container.x = -Math.floor(pos);
                else
                    this._container.y = -Math.floor(pos);
            }

            return value;
        }

        private alignPosition(pos: PIXI.Point, inertialScrolling: boolean): void {
            if (this._pageMode) {
                pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
                pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
            }
            else if (this._snapToItem) {
                var pt: PIXI.Point = this._owner.getSnappingPosition(-pos.x, -pos.y, ScrollPane.sHelperPoint);
                if (pos.x < 0 && pos.x > -this._overlapSize.x)
                    pos.x = -pt.x;
                if (pos.y < 0 && pos.y > -this._overlapSize.y)
                    pos.y = -pt.y;
            }
        }

        private alignByPage(pos: number, axis: string, inertialScrolling: boolean): number {
            let page: number;

            if (pos > 0)
                page = 0;
            else if (pos < -(<IndexedObject>this._overlapSize)[axis])
                page = Math.ceil((<IndexedObject>this._contentSize)[axis] / (<IndexedObject>this._pageSize)[axis]) - 1;
            else {
                page = Math.floor(-pos / (<IndexedObject>this._pageSize)[axis]);
                var change: number = inertialScrolling ? (pos - (<IndexedObject>this._containerPos)[axis]) : (pos - (<IndexedObject>this._container)[axis]);
                var testPageSize: number = Math.min((<IndexedObject>this._pageSize)[axis], (<IndexedObject>this._contentSize)[axis] - (page + 1) * (<IndexedObject>this._pageSize)[axis]);
                var delta: number = -pos - page * (<IndexedObject>this._pageSize)[axis];

                //page mode magnetic
                if (Math.abs(change) > (<IndexedObject>this._pageSize)[axis]) {
                    if (delta > testPageSize * 0.5)
                        page++;
                }
                else {
                    if (delta > testPageSize * (change < 0 ? 0.3 : 0.7))
                        page++;
                }

                //re-calc dist
                const dst = (<IndexedObject>this._pageSize)[axis];
                pos = -page * dst;
                if (pos < -dst)
                    pos = -dst;
            }

            if (inertialScrolling) {
                var oldPos: number = (<IndexedObject>this._tweenStart)[axis];
                var oldPage: number;
                if (oldPos > 0)
                    oldPage = 0;
                else if (oldPos < -(<IndexedObject>this._overlapSize)[axis])
                    oldPage = Math.ceil((<IndexedObject>this._contentSize)[axis] / (<IndexedObject>this._pageSize)[axis]) - 1;
                else
                    oldPage = Math.floor(-oldPos / (<IndexedObject>this._pageSize)[axis]);
                var startPage: number = Math.floor(-(<IndexedObject>this._containerPos)[axis] / (<IndexedObject>this._pageSize)[axis]);
                if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                    if (page > startPage)
                        page = startPage + 1;
                    else
                        page = startPage - 1;
                    pos = -page * (<IndexedObject>this._pageSize)[axis];
                }
            }

            return pos;
        }

        private updateTargetAndDuration(orignPos: PIXI.Point, resultPos: PIXI.Point): void {
            resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
            resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
        }

        private updateTargetAndDuration2(pos: number, axis: string): number {
            let v: number = (<IndexedObject>this._velocity)[axis];
            var duration: number = 0;
            if (pos > 0)
                pos = 0;
            else if (pos < -(<IndexedObject>this._overlapSize)[axis])
                pos = -(<IndexedObject>this._overlapSize)[axis];
            else {
                let v2: number = Math.abs(v) * this._velocityScale;
                if (PIXI.utils.isMobile.any)
                    v2 *= Math.max(GRoot.inst.stageWrapper.designWidth, GRoot.inst.stageWrapper.designHeight) / Math.max(GRoot.inst.stageWidth, GRoot.inst.stageHeight);
                //threshold, if too slow, stop it
                let ratio: number = 0;
                if (this._pageMode || !PIXI.utils.isMobile.any) {
                    if (v2 > 500)
                        ratio = Math.pow((v2 - 500) / 500, 2);
                }
                else {
                    if (v2 > 1000)
                        ratio = Math.pow((v2 - 1000) / 1000, 2);
                }
                if (ratio != 0) {
                    if (ratio > 1)
                        ratio = 1;

                    v2 *= ratio;
                    v *= ratio;
                    (<IndexedObject>this._velocity)[axis] = v;

                    duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;

                    const change: number = (v / 60 - 1) / (1 - this._decelerationRate);
                    //const change: number = Math.floor(v * duration * 0.4);
                    pos += change;
                }
            }

            if (duration < ScrollPane.TWEEN_DEFAULT_DURATION)
                duration = ScrollPane.TWEEN_DEFAULT_DURATION;
            (<IndexedObject>this._tweenDuration)[axis] = duration;

            return pos;
        }

        private fixDuration(axis: string, oldChange: number): void {
            if ((<IndexedObject>this._tweenChange)[axis] == 0 || Math.abs((<IndexedObject>this._tweenChange)[axis]) >= Math.abs(oldChange))
                return;

            let newDuration: number = Math.abs((<IndexedObject>this._tweenChange)[axis] / oldChange) * (<IndexedObject>this._tweenDuration)[axis];
            if (newDuration < ScrollPane.TWEEN_DEFAULT_DURATION)
                newDuration = ScrollPane.TWEEN_DEFAULT_DURATION;

            (<IndexedObject>this._tweenDuration)[axis] = newDuration;
        }

        private killTween(): void {
            //tweening == 1: set to end immediately
            if (this._tweening == 1) {
                this._container.position.set(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
                this.emit(ScrollEvent.SCROLL, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }

            this._tweening = 0;
            GTimer.inst.remove(this.tweenUpdate, this);
            this.emit(ScrollEvent.SCROLL_END, this);
            //Events.dispatch(Events.SCROLLthis._END, this._owner.displayObject);
        }

        private checkRefreshBar(): void {
            if (this._header == null && this._footer == null)
                return;

            const pos: number = (<IndexedObject>this._container)[this._refreshBarAxis];
            if (this._header != null) {
                if (pos > 0) {
                    if (this._header.displayObject.parent == null)
                        this._maskContainer.addChildAt(this._header.displayObject, 0);
                    const pt: PIXI.Point = ScrollPane.sHelperPoint;
                    pt.set(this._header.width, this._header.height);
                    (<IndexedObject>pt)[this._refreshBarAxis] = pos;
                    this._header.setSize(pt.x, pt.y);
                }
                else {
                    if (this._header.displayObject.parent != null)
                        this._maskContainer.removeChild(this._header.displayObject);
                }
            }

            if (this._footer != null) {
                var max: number = (<IndexedObject>this._overlapSize)[this._refreshBarAxis];
                if (pos < -max || max == 0 && this._footerLockedSize > 0) {
                    if (this._footer.displayObject.parent == null)
                        this._maskContainer.addChildAt(this._footer.displayObject, 0);

                    const pt: PIXI.Point = ScrollPane.sHelperPoint;
                    pt.set(this._footer.x, this._footer.y);
                    if (max > 0)
                        (<IndexedObject>pt)[this._refreshBarAxis] = pos + (<IndexedObject>this._contentSize)[this._refreshBarAxis];
                    else
                        (<IndexedObject>pt)[this._refreshBarAxis] = Math.max(Math.min(pos + (<IndexedObject>this._viewSize)[this._refreshBarAxis], (<IndexedObject>this._viewSize)[this._refreshBarAxis] - this._footerLockedSize),
                            (<IndexedObject>this._viewSize)[this._refreshBarAxis] - (<IndexedObject>this._contentSize)[this._refreshBarAxis]);
                    this._footer.setXY(pt.x, pt.y);

                    pt.set(this._footer.width, this._footer.height);
                    if (max > 0)
                        (<IndexedObject>pt)[this._refreshBarAxis] = -max - pos;
                    else
                        (<IndexedObject>pt)[this._refreshBarAxis] = (<IndexedObject>this._viewSize)[this._refreshBarAxis] - (<IndexedObject>this._footer)[this._refreshBarAxis];
                    this._footer.setSize(pt.x, pt.y);
                }
                else {
                    if (this._footer.displayObject.parent != null)
                        this._maskContainer.removeChild(this._footer.displayObject);
                }
            }
        }

        private tweenUpdate(): void {
            var nx: number = this.runTween("x");
            var ny: number = this.runTween("y");

            this._container.position.set(nx, ny);

            if (this._tweening == 2) {
                if (this._overlapSize.x > 0)
                    this._xPos = utils.NumberUtil.clamp(-nx, 0, this._overlapSize.x);
                if (this._overlapSize.y > 0)
                    this._yPos = utils.NumberUtil.clamp(-ny, 0, this._overlapSize.y);

                if (this._pageMode)
                    this.updatePageController();
            }

            if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                this._tweening = 0;
                GTimer.inst.remove(this.tweenUpdate, this);

                this.loopCheckingCurrent();

                this.syncScrollBar(true);
                this.checkRefreshBar();

                this.emit(ScrollEvent.SCROLL, this);
                this.emit(ScrollEvent.SCROLL_END, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
                //Events.dispatch(Events.SCROLLthis._END, this._owner.displayObject);
            }
            else {
                this.syncScrollBar(false);
                this.checkRefreshBar();

                this.emit(ScrollEvent.SCROLL, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }
        }

        private runTween(axis: string): number {
            const delta:number = GTimer.inst.ticker.deltaTime;
            let newValue: number;
            if ((<IndexedObject>this._tweenChange)[axis] != 0) {
                (<IndexedObject>this._tweenTime)[axis] += delta * PIXI.settings.TARGET_FPMS;
                if ((<IndexedObject>this._tweenTime)[axis] >= (<IndexedObject>this._tweenDuration)[axis]) {
                    newValue = (<IndexedObject>this._tweenStart)[axis] + (<IndexedObject>this._tweenChange)[axis];
                    (<IndexedObject>this._tweenChange)[axis] = 0;
                }
                else {
                    const ratio: number = ScrollPane._easeTypeFunc((<IndexedObject>this._tweenTime)[axis], (<IndexedObject>this._tweenDuration)[axis]);
                    newValue = (<IndexedObject>this._tweenStart)[axis] + Math.floor((<IndexedObject>this._tweenChange)[axis] * ratio);
                }

                var threshold1: number = 0;
                var threshold2: number = -(<IndexedObject>this._overlapSize)[axis];
                if (this._headerLockedSize > 0 && this._refreshBarAxis == axis)
                    threshold1 = this._headerLockedSize;
                if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                    var max: number = (<IndexedObject>this._overlapSize)[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max((<IndexedObject>this._contentSize)[this._refreshBarAxis] + this._footerLockedSize - (<IndexedObject>this._viewSize)[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    threshold2 = -max;
                }

                if (this._tweening == 2 && this._bouncebackEffect) {
                    if (newValue > 20 + threshold1 && (<IndexedObject>this._tweenChange)[axis] > 0
                        || newValue > threshold1 && (<IndexedObject>this._tweenChange)[axis] == 0) //start to bounce
                    {
                        (<IndexedObject>this._tweenTime)[axis] = 0;
                        (<IndexedObject>this._tweenDuration)[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        (<IndexedObject>this._tweenChange)[axis] = -newValue + threshold1;
                        (<IndexedObject>this._tweenStart)[axis] = newValue;
                    }
                    else if (newValue < threshold2 - 20 && (<IndexedObject>this._tweenChange)[axis] < 0
                        || newValue < threshold2 && (<IndexedObject>this._tweenChange)[axis] == 0)
                    {
                        (<IndexedObject>this._tweenTime)[axis] = 0;
                        (<IndexedObject>this._tweenDuration)[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        (<IndexedObject>this._tweenChange)[axis] = threshold2 - newValue;
                        (<IndexedObject>this._tweenStart)[axis] = newValue;
                    }
                }
                else {
                    if (newValue > threshold1) {
                        newValue = threshold1;
                        (<IndexedObject>this._tweenChange)[axis] = 0;
                    }
                    else if (newValue < threshold2) {
                        newValue = threshold2;
                        (<IndexedObject>this._tweenChange)[axis] = 0;
                    }
                }
            }
            else
                newValue = (<IndexedObject>this._container)[axis];

            return newValue;
        }
    }
}
