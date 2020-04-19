/// <reference path="./events/DisplayObjectEvent.ts" />
/// <reference path="./UIEventProxy.ts" />

namespace fgui {

    export class GObject extends UIEventProxy {

        public data: any;
        public packageItem: PackageItem;
        public static draggingObject: GObject;

        protected _x: number = 0;
        protected _y: number = 0;
        protected _alpha: number = 1;
        protected _rotation: number = 0;
        protected _visible: boolean = true;
        protected _touchable: boolean = true;
        protected _grayed: boolean = false;
        protected _draggable: boolean = false;
        protected _scaleX: number = 1;
        protected _scaleY: number = 1;
        protected _skewX: number = 0;
        protected _skewY: number = 0;
        protected _pivot: PIXI.Point = new PIXI.Point();
        protected _pivotAsAnchor: boolean = false;
        protected _pivotOffset: PIXI.Point = new PIXI.Point();
        protected _sortingOrder: number = 0;
        protected _internalVisible: boolean = true;
        protected _handlingController: boolean = false;
        protected _focusable: boolean = false;
        protected _tooltips: string;
        protected _pixelSnapping: boolean = false;
        protected _disposed: boolean = false;

        protected _relations: Relations;
        protected _group: GGroup;
        protected _gears: GearBase<GObject>[];
        protected _dragBounds: PIXI.Rectangle;
        private _colorFilter: PIXI.filters.ColorMatrixFilter;

        public sourceWidth: number = 0;
        public sourceHeight: number = 0;
        public initWidth: number = 0;
        public initHeight: number = 0;
        public minWidth: number = 0;
        public minHeight: number = 0;
        public maxWidth: number = 0;
        public maxHeight: number = 0;
        
        public _parent: GComponent;
        public _width: number = 0;
        public _height: number = 0;
        public _rawWidth: number = 0;
        public _rawHeight: number = 0;
        public _id: string;
        public _name: string;
        public _underConstruct: boolean;
        public _gearLocked: boolean;
        public _sizePercentInGroup: number = 0;
        public _treeNode: GTreeNode;

        public static _gInstanceCounter: number = 0;
        
        public static XY_CHANGED: string = DisplayObjectEvent.XY_CHANGED;
        public static SIZE_CHANGED: string = DisplayObjectEvent.SIZE_CHANGED;
        public static SIZE_DELAY_CHANGE: string = DisplayObjectEvent.SIZE_DELAY_CHANGE;
        public static GEAR_STOP: string = DisplayObjectEvent.GEAR_STOP;
        
        private static _colorHelper: utils.ColorMatrix;
        protected _lastColorComponents: number[] = null;


        /**@internal */
        //_inProgressBuilding: boolean;   //parsing xml & building

        
        public constructor() {
            super();
            this._id = `${GObject._gInstanceCounter++}`;
            this._name = "";

            this.createDisplayObject();

            this._relations = new Relations(this);
            this._gears = [];
        }

        public get id(): string {
            return this._id;
        }

        public get name(): string {
            return this._name;
        }

        public set name(value: string) {
            this._name = value;
        }

        public get x(): number {
            return this._x;
        }

        public set x(value: number) {
            this.setXY(value, this._y);
        }

        public get y(): number {
            return this._y;
        }

        public set y(value: number) {
            this.setXY(this._x, value);
        }

        public get xMin(): number {
            return this._pivotAsAnchor ? (this._x - this._width * this._pivot.x) : this._x;
        }

        public set xMin(value: number) {
            if (this._pivotAsAnchor)
                this.setXY(value + this._width * this._pivot.x, this._y);
            else
                this.setXY(value, this._y);
        }

        public get yMin(): number {
            return this._pivotAsAnchor ? (this._y - this._height * this._pivot.y) : this._y;
        }

        public set yMin(value: number) {
            if (this._pivotAsAnchor)
                this.setXY(this._x, value + this._height * this._pivot.y);
            else
                this.setXY(this._x, value);
        }

        public setXY(xv: number, yv: number): void {
            if (this._x != xv || this._y != yv) {

                this._x = xv;
                this._y = yv;

                this.handleXYChanged();
                this.updateGear(GearType.XY);

                if (this._parent) {
                    this._parent.setBoundsChangedFlag();
                    this._displayObject.emit(DisplayObjectEvent.XY_CHANGED, this);
                }

                if (GObject.draggingObject == this && !GObject.sUpdatingWhileDragging) {
                    this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
                }
            }
        }

        public get pixelSnapping(): boolean {
            return this._pixelSnapping;
        }

        public set pixelSnapping(value: boolean) {
            if (this._pixelSnapping != value) {
                this._pixelSnapping = value;
                this.handleXYChanged();
            }
        }

        public center(restraint: boolean = false): void {
            let r: GComponent;
            if (this._parent != null)
                r = this.parent;
            else
                r = this.root;

            this.setXY((r.width - this.width) / 2, (r.height - this.height) / 2);
            if (restraint) {
                this.addRelation(r, RelationType.Center_Center);
                this.addRelation(r, RelationType.Middle_Middle);
            }
        }

        public get width(): number {
            this.ensureSizeCorrect();
            if (this._relations.sizeDirty){
                this._relations.ensureRelationsSizeCorrect();
            }
            return this._width;
        }

        public set width(value: number) {
            this.setSize(value, this._rawHeight);
        }

        public get height(): number {
            this.ensureSizeCorrect();
            if (this._relations.sizeDirty){
                this._relations.ensureRelationsSizeCorrect();
            }
            return this._height;
        }

        public set height(value: number) {
            this.setSize(this._rawWidth, value);
        }

        public setSize(wv: number, hv: number, ignorePivot: boolean = false): void {
            if (this._rawWidth != wv || this._rawHeight != hv) {
                this._rawWidth = wv;
                this._rawHeight = hv;
                wv = Math.max(0, wv);
                hv = Math.max(0, hv);
                let diffw: number = wv - this.mapPivotWidth(1);
                let diffh: number = hv - this.mapPivotHeight(1);
                this._width = wv;
                this._height = hv;
               
                this.handleSizeChanged();
                
                if (this._pivot.x != 0 || this._pivot.y != 0) {
                    if (!this._pivotAsAnchor) {
                        if (!ignorePivot){
                            this.setXY(this.x - this._pivot.x * diffw, this.y - this._pivot.y * diffh);
                        }
                        this.updatePivotOffset();
                    } else {
                        this.applyPivot();
                    }
                }
               
                this.updateGear(GearType.Size);
                
                if (this._parent) {
                    this._relations.onOwnerSizeChanged(diffw, diffh, this._pivotAsAnchor || !ignorePivot);
                    this._parent.setBoundsChangedFlag();
                }

                this._displayObject.emit(DisplayObjectEvent.SIZE_CHANGED, this);
            }
        }

        public makeFullScreen(): void {
            this.setSize(GRoot.inst.width, GRoot.inst.height);
        }

        public ensureSizeCorrect(): void {
        }

        public get actualWidth(): number {
            return this.width * Math.abs(this._scaleX);
        }

        public get actualHeight(): number {
            return this.height * Math.abs(this._scaleY);
        }

        public get scaleX(): number {
            return this._scaleX;
        }

        public set scaleX(value: number) {
            this.setScale(value, this._scaleY);
        }

        public get scaleY(): number {
            return this._scaleY;
        }

        public set scaleY(value: number) {
            this.setScale(this._scaleX, value);
        }

        public setScale(sx: number, sy: number) {
            if (this._scaleX != sx || this._scaleY != sy) {
                this._scaleX = sx;
                this._scaleY = sy;
                this.handleScaleChanged();
                this.applyPivot();
                this.updateGear(GearType.Size);
            }
        }

        public get skewX(): number {
            return this._skewX;
        }

        public set skewX(value: number) {
            this.setSkew(value, this._skewY);
        }

        public get skewY(): number {
            return this._skewY;
        }

        public set skewY(value: number) {
            this.setSkew(this._skewX, value);
        }

        public setSkew(xv: number, yv: number) {
            if (this._skewX != xv || this._skewY != yv) {
                this._skewX = xv;
                this._skewY = yv;
                this._displayObject.skew.set(xv * -utils.NumberUtil.RADIAN, yv * utils.NumberUtil.RADIAN);
                this.applyPivot();
            }
        }

        protected mapPivotWidth(scale: number): number {
            return scale * this._width;
        }

        protected mapPivotHeight(scale: number): number {
            return scale * this._height;
        }

        public get pivotX(): number {
            return this._pivot.x;
        }

        public get pivotY(): number {
            return this._pivot.y;
        }

        public set pivotX(value: number) {
            this.setPivot(value, this.pivotY);
        }

        public set pivotY(value: number) {
            this.setPivot(this.pivotX, value);
        }

        public setPivot(xv: number, yv: number, asAnchor: boolean = false): void {
            if (this._pivot.x != xv || this._pivot.y != yv || this._pivotAsAnchor != asAnchor) {
                this._pivot.set(xv, yv);
                this._pivotAsAnchor = asAnchor;
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        }

        public get pivotAsAnchor(): boolean {
            return this._pivotAsAnchor;
        }

        protected internalSetPivot(xv: number, yv: number, asAnchor: boolean): void {
            this._pivot.set(xv, yv);
            this._pivotAsAnchor = asAnchor;
            if (asAnchor){
                this.handleXYChanged();
            }
        }

        private updatePivotOffset(): void {
            if (this._pivot.x != 0 || this._pivot.y != 0 && this._displayObject.transform) {
                let vx: number = this.mapPivotWidth(this._pivot.x), vy: number = this.mapPivotHeight(this._pivot.y);
                GObject.sHelperPoint.set(vx, vy);
                this._displayObject.transform.updateLocalTransform();     //TODO: sync with PIXI instead of update actively
                let trans = this._displayObject.localTransform;
                let p = trans.apply(GObject.sHelperPoint, GObject.sHelperPoint);
                p.x -= trans.tx, p.y -= trans.ty;
                this._pivotOffset.set(
                    this._pivot.x * this._width - p.x,
                    this._pivot.y * this._height - p.y
                );
            } else {
                this._pivotOffset.set(0, 0);
            }
        }

        private applyPivot(): void {
            if (this._pivot.x != 0 || this._pivot.y != 0) {
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        }

        public get touchable(): boolean {
            return this._touchable;
        }

        public set touchable(value: boolean) {
            if (this._touchable == value) {
                return ;
            }

            this._touchable = value;
            this._displayObject.interactive = this._touchable;
            this.updateGear(GearType.Look);
            if ((this instanceof GImage) || (this instanceof GMovieClip) 
                    || (this instanceof GTextField) && !(this instanceof GTextInput) && !(this instanceof GRichTextField))
                //Touch is not supported by GImage/GMovieClip/GTextField
                return;
            
            // change children interactive mode
            // 改变子对象 `是否可触摸` 状态
            if (this._displayObject instanceof PIXI.Container) {
                this._displayObject.interactiveChildren = value;
            }
        }

        
        public onClick(listener : (evt : IGObjectInteractionEvent )=> void, thisArg ?: any) : void {
            this.on(InteractiveEvents.Click, listener, thisArg);
        }
       
        public offClick(listener : Function, thisArg ?: any) : void {
            this.off(InteractiveEvents.Click, listener, thisArg);
        }
        

        /////////////////////////////////////////////////////////

        public get grayed(): boolean {
            return this._grayed;
        }

        public set grayed(value: boolean) {
            if (this._grayed != value) {
                this._grayed = value;
                this.handleGrayedChanged();
                this.updateGear(GearType.Look);
            }
        }

        public get enabled(): boolean {
            return !this._grayed && this._touchable;
        }

        public set enabled(value: boolean) {
            this.grayed = !value;
            this.touchable = value;
        }

        public get rotation(): number {
            return this._rotation;
        }

        public set rotation(value: number) {
            if (this._rotation != value) {
                this._rotation = value;
                if (this._displayObject){
                    this._displayObject.rotation = utils.NumberUtil.angleToRadian(this.normalizeRotation);
                }
                this.applyPivot();
                this.updateGear(GearType.Look);
            }
        }

        public get normalizeRotation(): number {
            let rot: number = this._rotation % 360;
            if (rot > 180) {
                rot -= 360;
            } else if (rot < -180) {
                rot += 360;
            }
            return rot;
        }

        public get alpha(): number {
            return this._alpha;
        }

        public set alpha(value: number) {
            if (this._alpha != value) {
                this._alpha = value;
                this.updateAlpha();
            }
        }

        protected updateAlpha(): void {
            if (this._displayObject) {
                this._displayObject.alpha = this._alpha;
            }

            this.updateGear(GearType.Look);
        }

        public get visible(): boolean {
            return this._visible;
        }

        public set visible(value: boolean) {
            if (this._visible != value) {
                this._visible = value;
                if (this._displayObject){
                    this._displayObject.visible = this._visible;
                }
                if (this._parent) {
                    this._parent.childStateChanged(this);
                    this._parent.setBoundsChangedFlag();
                }
                this.emit(DisplayObjectEvent.VISIBLE_CHANGED, this._visible, this);
            }
        }

        /**@internal */
        set internalVisible(value: boolean) {
            if (value != this._internalVisible) {
                this._internalVisible = value;
                if (this._parent) {
                    this._parent.childStateChanged(this);
                }
            }
        }

        /**@internal */
        get internalVisible(): boolean {
            return this._internalVisible;
        }

        public get internalVisible2(): boolean {
            return this._visible && (!this._group || this._group.internalVisible2);
        }

        public get internalVisible3(): boolean {
            return this._visible && this._internalVisible;
        }

        public get finalVisible(): boolean {
            return this._visible && this._internalVisible && (!this._group || this._group.finalVisible);
        }

        public get sortingOrder(): number {
            return this._sortingOrder;
        }

        public set sortingOrder(value: number) {
            if (value < 0)
                value = 0;
            if (this._sortingOrder != value) {
                let old: number = this._sortingOrder;
                this._sortingOrder = value;
                if (this._parent != null) {
                    this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
                }
            }
        }

        public get focusable(): boolean {
            return this._focusable;
        }

        public set focusable(value: boolean) {
            this._focusable = value;
        }

        public get focused(): boolean {
            return this.root.focus == this;
        }

        public requestFocus(): void {
            let p: GObject = this;
            while (p && !p._focusable)
                p = p.parent;
            if (p != null) {
                this.root.focus = p;
            }
        }

        public get tooltips(): string {
            return this._tooltips;
        }

        public set tooltips(value: string) {
            this._tooltips = value;
        }

        public get blendMode(): string {
            if (this._displayObject && this._displayObject instanceof PIXI.Sprite) {
                return BlendModeMap[this._displayObject.blendMode] || "None";
            }
            return BlendModeMap[0];  //Normal
        }

        public set blendMode(value: string) {
            if (!value || !value.length || !this._displayObject || !(this._displayObject instanceof PIXI.Sprite))
                return;
            for (let i: number = 0; i < BlendModeMap.length; i++) {
                if (BlendModeMap[i].toLowerCase() === value.toLowerCase()) {
                    this._displayObject.blendMode = i;
                    return;
                }
            }
        }

        public get filters(): PIXI.Filter[] {
            return this._displayObject.filters;
        }

        public set filters(value: PIXI.Filter[]) {
            this._displayObject.filters = value;
        }

        public get inContainer(): boolean {
            return this._displayObject != null && this._displayObject.parent != null;
        }

        public static isDisplayObjectOnStage(display: PIXI.DisplayObject): boolean {
            if (!display || !display.parent) {
                return false;
            }
            let p: PIXI.DisplayObject = display;
            while (p != null) {
                if (p == GRoot.inst.nativeStage) {
                    return true;
                }
                p = p.parent;
            }
            return false;
        }

        public get onStage(): boolean {
            return GObject.isDisplayObjectOnStage(this._displayObject);
        }

        public get resourceURL(): string {
            if (this.packageItem != null)
                return `ui://${this.packageItem.owner.id}${this.packageItem.id}`;
            else
                return null;
        }

        public set group(value: GGroup) {
            if (this._group != value) {
                if (this._group != null) {
                    this._group.setBoundsChangedFlag();
                }
                this._group = value;
                if (this._group != null) {
                    this._group.setBoundsChangedFlag();
                }
            }
        }

        public get group(): GGroup {
            return this._group;
        }

        public getGear(index: number | GearType): GearBase<GObject> {
            let gear: GearBase<GObject> = this._gears[index];
            if (gear == null) {
                gear = GearBase.create(this, index);
                this._gears[index] = gear;
            }
            return gear;
        }

        protected updateGear(index: GearType): void {
            if (this._underConstruct || this._gearLocked){
                return;
            }

            var gear: GearBase = this._gears[index];
            if (gear != null && gear.controller != null){
                gear.updateState();
            }
        }

        public checkGearController(index: number, c: Controller): boolean {
            return this._gears[index] != null && this._gears[index].controller == c;
        }

        public updateGearFromRelations(index: GearType, dx: number, dy: number): void {
            if (this._gears[index] != null) {
                this._gears[index].updateFromRelations(dx, dy);
            }
        }

        public addDisplayLock(): number {
            var gearDisplay: GearDisplay = <GearDisplay>this._gears[0];
            if (gearDisplay && gearDisplay.controller) {
                var ret: number = gearDisplay.addLock();
                this.checkGearDisplay();
                return ret;
            } else {
                return 0;
            }
        }

        public releaseDisplayLock(token: number): void {
            var gearDisplay: GearDisplay = <GearDisplay>this._gears[0];
            if (gearDisplay && gearDisplay.controller) {
                gearDisplay.releaseLock(token);
                this.checkGearDisplay();
            }
        }

        public hasGearController(index:number, c:Controller):boolean
		{
			return this._gears[index] && this._gears[index].controller == c;
		}

        /**@internal */
        // lockGearDisplay():number
		// {
		// 	let g = this._gears[0] as GearDisplay;
		// 	if(g && g.controller)
		// 	{
		// 		let ret = g.lock();
		// 		this.checkGearVisible();
		// 		return ret;
		// 	}
		// 	else
		// 		return 0;
        // }
        
		/**@internal */
		// releaseGearDisplay(token:number):void{
		// 	let g = this._gears[0] as GearDisplay;
		// 	if(g && g.controller)
		// 	{
		// 		g.release(token);
		// 		this.checkGearVisible();
		// 	}
        // }

        private checkGearDisplay(): void {
            if (this._handlingController)
                return;

            var connected: boolean = this._gears[0] == null || (<GearDisplay>this._gears[0]).connected;
            if (this._gears[8])
                connected = (<GearDisplay2>this._gears[8]).evaluate(connected);
            if (connected != this._internalVisible) {
                this._internalVisible = connected;
                if (this._parent)
                    this._parent.childStateChanged(this);
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        }
        
        private checkGearVisible():void
		{
			if(this._handlingController)
                return;
            
            let g = this._gears[0] as GearDisplay;
			let v = !g || g.connected;
			if(v != this._internalVisible)
			{
				this._internalVisible = v;
				if(this._parent)
                    this._parent.childStateChanged(this);
			}
		}

        public get gearXY(): GearXY {
            return this.getGear(GearType.XY) as GearXY;
        }

        public get gearSize(): GearSize {
            return this.getGear(GearType.Size) as GearSize;
        }

        public get gearLook(): GearLook {
            return this.getGear(GearType.Look) as GearLook;
        }
        
        public get relations(): Relations {
            return this._relations;
        }

        public addRelation(target: GObject, relationType: number, usePercent: boolean = false): void {
            this._relations.add(target, relationType, usePercent);
        }

        public removeRelation(target: GObject, relationType: number = 0): void {
            this._relations.remove(target, relationType);
        }

        /**
         * PIXI 显示对象，通过改实例可获取显示对象
         */
        public get displayObject(): PIXI.DisplayObject {
            return this._displayObject;
        }
        
        protected createDisplayObject(): void {
        }

        protected setDisplayObject(value: PIXI.DisplayObject): void {
            if (this._displayObject != value) {
                if (this._displayObject) {
                    delete this._displayObject["$owner"];
                }
                this._displayObject = value;
                this._displayObject["$owner"] = this;
            }
        }

        public get parent(): GComponent {
            return this._parent;
        }

        public set parent(val: GComponent) {
            this._parent = val;
        }

        public removeFromParent(): void {
            if (this._parent) {
                this._parent.removeChild(this);
            }
        }

        public get root(): GRoot {
            if (this instanceof GRoot) {
                return this as GRoot;
            }

            let p: GObject = this._parent;
            while (p) {
                if (p instanceof GRoot) {
                    return p as GRoot;
                }
                p = p.parent;
            }
            return GRoot.inst;
        }

        public get asCom(): GComponent {
            return <GComponent><any>this;
        }

        public get asButton(): GButton {
            return <GButton><any>this;
        }

        public get asLabel(): GLabel {
            return <GLabel><any>this;
        }

        public get asProgress(): GProgressBar {
            return <GProgressBar><any>this;
        }

        public get asTextField(): GTextField {
            return <GTextField><any>this;
        }

        public get asRichTextField(): GRichTextField {
            return <GRichTextField><any>this;
        }

        public get asTextInput(): GTextInput {
            return <GTextInput><any>this;
        }

        public get asLoader(): GLoader {
            return <GLoader><any>this;
        }

        public get asList(): GList {
            return <GList><any>this;
        }


        public get asTree(): GTree {
            return <GTree><any>this;
        }

        public get asGraph(): GGraph {
            return <GGraph><any>this;
        }

        public get asGroup(): GGroup {
            return <GGroup><any>this;
        }

        public get asSlider(): GSlider {
            return <GSlider><any>this;
        }

        public get asComboBox(): GComboBox {
            return <GComboBox><any>this;
        }

        public get asImage(): GImage {
            return <GImage><any>this;
        }

        public get asMovieClip(): GMovieClip {
            return <GMovieClip><any>this;
        }

        public static cast(obj: PIXI.DisplayObject): GObject {
            return <GObject><any>obj["$owner"];
        }

        /** @virtual */
        public get text(): string {
            return null;
        }

        /** @virtual */
        public set text(value: string) {
        }

        /** @virtual */
        public get icon(): string {
            return null;
        }

        /** @virtual */
        public set icon(value: string) {
        }

        public get isDisposed(): boolean {
            return this._disposed;
        }

        public get treeNode(): GTreeNode {
            return this._treeNode;
        }

        public dispose(): void {
            this.removeFromParent();
            this._relations.dispose();
            this.removeAllListeners()
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._moving, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._end, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._moving2, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._end2, this);
            this._displayObject.destroy();
        }

        public get draggable(): boolean {
            return this._draggable;
        }

        public set draggable(value: boolean) {
            if (this._draggable != value) {
                this._draggable = value;
                this.initDrag();
            }
        }

        public get dragBounds(): PIXI.Rectangle {
            return this._dragBounds;
        }

        public set dragBounds(value: PIXI.Rectangle) {
            this._dragBounds = value;
        }

        public startDrag(touchPointID: number = -1): void {
            if (!this.onStage)
                return;
            this.dragBegin();
        }

        public stopDrag(): void {
            this.dragEnd();
        }

        public get dragging(): boolean {
            return GObject.draggingObject == this;
        }

        public localToGlobal(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            if (this._pivotAsAnchor) {
                ax += this._pivot.x * this._width;
                ay += this._pivot.y * this._height;
            }
            if (!resultPoint){
                resultPoint = GObject.sHelperPoint;
            } 
            resultPoint.x = ax;
            resultPoint.y = ay;
            return this._displayObject.toGlobal(resultPoint, resultPoint) as PIXI.Point;
        }

        public globalToLocal(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            if (!resultPoint) {
                resultPoint = GObject.sHelperPoint;
            }
            resultPoint.set(ax, ay);
            resultPoint = this._displayObject.toLocal(resultPoint, GRoot.inst.nativeStage) as PIXI.Point;
            if (this._pivotAsAnchor) {
                resultPoint.x -= this._pivot.x * this._width;
                resultPoint.y -= this._pivot.y * this._height;
            }
            return resultPoint;
        }

        public localToRoot(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            let pt: PIXI.Point = this.localToGlobal(ax, ay, resultPoint);
            pt.x /= GRoot.inst.contentScaleFactor;
            pt.y /= GRoot.inst.contentScaleFactor;
            return pt;
        }

        public rootToLocal(ax: number = 0, ay: number = 0, resultPoint?: PIXI.Point): PIXI.Point {
            ax *= GRoot.inst.contentScaleFactor;
            ay *= GRoot.inst.contentScaleFactor;
            return this.globalToLocal(ax, ay, resultPoint);
        }

        public localToGlobalRect(ax: number = 0, ay: number = 0, aWidth: number = 0, aHeight: number = 0, resultRect?: PIXI.Rectangle): PIXI.Rectangle {
            if (resultRect == null) resultRect = GObject.sDragHelperRect;
            let pt: PIXI.Point = this.localToGlobal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        }

        public globalToLocalRect(ax: number = 0, ay: number = 0, aWidth: number = 0, aHeight: number = 0, resultRect?: PIXI.Rectangle): PIXI.Rectangle {
            if (resultRect == null) resultRect = GObject.sDragHelperRect;
            let pt: PIXI.Point = this.globalToLocal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        }

        public handleControllerChanged(c: Controller): void {
            
            this._handlingController = true;
            for (let i: number = 0; i < GearType.Count; i++) {
                let gear: GearBase<GObject> = this._gears[i];
                if (gear && gear.controller == c) {
                    gear.apply();
                }
            }
            this._handlingController = false;
            this.checkGearVisible();
        }

        protected switchDisplayObject(newObj: PIXI.DisplayObject): void {
            if (newObj == this._displayObject){
                return;
            }
            let old: PIXI.DisplayObject = this._displayObject;
            if (this.inContainer) {
                let i: number = this._displayObject.parent.getChildIndex(this._displayObject);
                this._displayObject.parent.addChildAt(newObj, i);
                this._displayObject.parent.removeChild(this._displayObject);
            }
      
            this._displayObject = newObj;
            this._displayObject.x = old.x;
            this._displayObject.y = old.y;
            this._displayObject.rotation = old.rotation;
            this._displayObject.alpha = old.alpha;
            this._displayObject.visible = old.visible;
            this._displayObject.scale.x = old.scale.x;
            this._displayObject.scale.y = old.scale.y;
            
            ToolSet.setColorFilter(this._displayObject, this._grayed);

            this._displayObject.interactive = old.interactive;
            if (this._displayObject instanceof PIXI.Container) {
                this._displayObject.interactiveChildren = old.interactive;
            }
        }

        protected handleXYChanged(): void {
            if (this._displayObject) {
                let xv: number = this._x;
                let yv: number = this._y;
                if (this._pivotAsAnchor) {
                    xv -= this._pivot.x * this._width;
                    yv -= this._pivot.y * this._height;
                }
                if (this._pixelSnapping) {
                    xv = Math.round(xv);
                    yv = Math.round(yv);
                }
                this._displayObject.position.set(xv + this._pivotOffset.x, yv + this._pivotOffset.y);
            }
        }

        protected handleSizeChanged(): void {
        }

        protected handleScaleChanged(): void {
        
            if (this._displayObject){
                this._displayObject.scale.set(this._scaleX, this._scaleY);
            }
        }

        protected get colorFilter(): PIXI.filters.ColorMatrixFilter {
            if (this._colorFilter)
                return this._colorFilter;
            this._colorFilter = new PIXI.filters.ColorMatrixFilter();
            if (this._displayObject) {
                let a = this._displayObject.filters || [];
                a.push(this._colorFilter);
                this._displayObject.filters = a;
            }
            return this._colorFilter;
        }

        /**
         * update color appearance
         * @param brightness value of the brigthness (-1 - 1, where -1 is black)
         * @param contrast value of the contrast (-1 - 1)
         * @param saturate The saturation amount (-1 - 1)
         * @param hue The hue property of the color in degress (-1 - 1, where 1 is 360deg)
         */
        public updateColorComponents(brightness: number, contrast: number, saturate: number, hue: number): void {
            if (!GObject._colorHelper) GObject._colorHelper = new utils.ColorMatrix();
            let helper = GObject._colorHelper;
            helper.setColor(brightness, contrast * 100, saturate * 100, hue * 180);
            let f = this.colorFilter;
            f.enabled = true;
            f.reset();
            f.matrix = helper.toArray();
            if (!this._lastColorComponents) this._lastColorComponents = [];
            this._lastColorComponents.length = 0;
            this._lastColorComponents.push(helper.brightness, helper.contrast, helper.saturation, helper.hue);
        }

        protected handleGrayedChanged(): void {
            if (this._displayObject) {
                let c: PIXI.filters.ColorMatrixFilter = this.colorFilter;
                c.enabled = true;
                if (this._grayed)
                    c.blackAndWhite(true);
                else {
                    if (this._lastColorComponents && this._lastColorComponents.length >= 4)
                        this.updateColorComponents(this._lastColorComponents[0], this._lastColorComponents[1], this._lastColorComponents[2], this._lastColorComponents[3]);
                    else
                        c.enabled = false;
                }
            }
        }

        protected handleAlphaChanged(): void {
            if (this._displayObject)
                this._displayObject.alpha = this._alpha;
        }

        public handleVisibleChanged(): void {
            if (this._displayObject)
                this._displayObject.visible = this.internalVisible2;
            if (this instanceof GGroup)
                (<GGroup>this).handleVisibleChanged();
        }

        public getProp(index: number): any {
            switch (index) {
                case ObjectPropID.Text:
                    return this.text;
                case ObjectPropID.Icon:
                    return this.icon;
                case ObjectPropID.Color:
                    return NaN;
                case ObjectPropID.OutlineColor:
                    return NaN;
                case ObjectPropID.Playing:
                    return false;
                case ObjectPropID.Frame:
                    return 0;
                case ObjectPropID.DeltaTime:
                    return 0;
                case ObjectPropID.TimeScale:
                    return 1;
                case ObjectPropID.FontSize:
                    return 0;
                case ObjectPropID.Selected:
                    return false;
                default:
                    return undefined;
            }
        }

        public setProp(index: number, value: any): void {
            switch (index) {
                case ObjectPropID.Text:
                    this.text = value;
                    break;

                case ObjectPropID.Icon:
                    this.icon = value;
                    break;
            }
        }

        /**@internal */
        constructFromResource(): void {
        }
        

        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            buffer.seek(beginPos, 0);
            buffer.skip(5);

            var f1: number;
            var f2: number;

            this._id = buffer.readS();
            this._name = buffer.readS();
            f1 = buffer.readInt();
            f2 = buffer.readInt();
            this.setXY(f1, f2);
            
            if (buffer.readBool()) {
                this.initWidth = buffer.readInt();
                this.initHeight = buffer.readInt();
                // @TODO ??
                //this.setSize(this.initWidth, this.initHeight, true);
                this._width = this.initWidth;
                this._height = this.initHeight;
            }
            
            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }
            
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setScale(f1, f2);
            }
            
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setSkew(f1, f2);
            }
            
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.setPivot(f1, f2, buffer.readBool());
            }
            
            f1 = buffer.readFloat();
            if (f1 != 1){
                this.alpha = f1;
            }
            
            f1 = buffer.readFloat();
            if (f1 != 0){
                this.rotation = f1;
            }
            
            if (!buffer.readBool()){
                this.visible = false;
            }
            if (!buffer.readBool()){
                this.touchable = false;
            }
            if (buffer.readBool()) {
                this.grayed = true;
            }
            var bm: number = buffer.readByte();
            this.blendMode = BlendModeMap[bm] || "Normal";
            
            var filter: number = buffer.readByte();
            if (filter == 1 && this._displayObject) {
                let c1 = buffer.readFloat();
                let c2 = buffer.readFloat();
                let c3 = buffer.readFloat();
                let c4 = buffer.readFloat();
                ToolSet.setColorFilter(this._displayObject,[c1, c2, c3, c4]);
            }
            var str: string = buffer.readS();
            if (str != null) {
                this.data = str;
            }
            
        }


        public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
            buffer.seek(beginPos, 1);
            
            var str: string = buffer.readS();
            if (str != null){
                this.tooltips = str;
            }

            var groupId: number = buffer.readShort();
            if (groupId >= 0){
                this.group = <GGroup>this.parent.getChildAt(groupId);
            }

            buffer.seek(beginPos, 2);

            var cnt: number = buffer.readShort();
            for (var i: number = 0; i < cnt; i++) {
                var nextPos: number = buffer.readShort();
                nextPos += buffer.position;
    
                var gear: GearBase<GObject> = this.getGear(buffer.readByte());
                gear.setup(buffer);

                buffer.position = nextPos;
            }
            
            this.setSize(this.initWidth, this.initHeight, true);
        }

        //dragging
        //-------------------------------------------------------------------
        protected static sGlobalDragStart: PIXI.Point = new PIXI.Point();
        protected static sGlobalRect: PIXI.Rectangle = new PIXI.Rectangle();
        protected static sHelperPoint: PIXI.Point = new PIXI.Point();
        protected static sDragHelperRect: PIXI.Rectangle = new PIXI.Rectangle();
        protected static sUpdatingWhileDragging: boolean;
        private static _dragBeginCancelled: boolean;

        protected _touchDownPoint: PIXI.Point;


        private initDrag(): void {
            if (this._draggable)
                this.on(InteractiveEvents.Down, this._touchBegin, this);
            else
                this.off(InteractiveEvents.Down, this._touchBegin, this);
        }

        private dragBegin(): void {
            if (GObject.draggingObject != null)
                GObject.draggingObject.stopDrag();

            GObject.sGlobalDragStart.x = GRoot.globalMouseStatus.mouseX;
            GObject.sGlobalDragStart.y = GRoot.globalMouseStatus.mouseY;

            this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
            GObject.draggingObject = this;

            GRoot.inst.nativeStage.on(InteractiveEvents.Move, this._moving2, this);
            GRoot.inst.nativeStage.on(InteractiveEvents.Up, this._end2, this);
        }

        private dragEnd(): void {
            if (GObject.draggingObject == this) {
                GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._moving2, this);
                GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._end2, this);
                GObject.draggingObject = null;
            }
            GObject._dragBeginCancelled = true;
        }

        private reset(): void {
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._moving, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._end, this);
        }

        private _touchBegin(evt: PIXI.interaction.InteractionEvent): void {
            if (this._touchDownPoint == null)
                this._touchDownPoint = new PIXI.Point();
            this._touchDownPoint.x = evt.data.global.x;
            this._touchDownPoint.y = evt.data.global.y;
            GRoot.inst.nativeStage.on(InteractiveEvents.Move, this._moving, this);
            GRoot.inst.nativeStage.on(InteractiveEvents.Up, this._end, this);
        }

        private _end(evt: PIXI.interaction.InteractionEvent): void {
            this.reset();
        }

        private _moving(evt: PIXI.interaction.InteractionEvent): void {
            let sensitivity: number = UIConfig.touchDragSensitivity;
            if (this._touchDownPoint != null
                && Math.abs(this._touchDownPoint.x - evt.data.global.x) < sensitivity
                && Math.abs(this._touchDownPoint.y - evt.data.global.y) < sensitivity)
                return;

            this.reset();

            GObject._dragBeginCancelled = false;

            evt.currentTarget = this._displayObject;
            this._displayObject.emit(DragEvent.START, evt, this);

            if (!GObject._dragBeginCancelled)  //user may call obj.stopDrag in the DragStart event handler
                this.dragBegin();
        }

        private _moving2(evt: PIXI.interaction.InteractionEvent): void {
            let xx: number = evt.data.global.x - GObject.sGlobalDragStart.x + GObject.sGlobalRect.x;
            let yy: number = evt.data.global.y - GObject.sGlobalDragStart.y + GObject.sGlobalRect.y;

            if (this._dragBounds != null) {
                let rect: PIXI.Rectangle = GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y,
                    this._dragBounds.width, this._dragBounds.height, GObject.sDragHelperRect);
                if (xx < rect.x)
                    xx = rect.x;
                else if (xx + GObject.sGlobalRect.width > rect.right) {
                    xx = rect.right - GObject.sGlobalRect.width;
                    if (xx < rect.x)
                        xx = rect.x;
                }

                if (yy < rect.y)
                    yy = rect.y;
                else if (yy + GObject.sGlobalRect.height > rect.bottom) {
                    yy = rect.bottom - GObject.sGlobalRect.height;
                    if (yy < rect.y)
                        yy = rect.y;
                }
            }

            GObject.sUpdatingWhileDragging = true;
            GObject.sHelperPoint.x = xx;
            GObject.sHelperPoint.y = yy;
            let pt: PIXI.Point = this.parent.globalToLocal(xx, yy, GObject.sHelperPoint);
            this.setXY(Math.round(pt.x), Math.round(pt.y));
            GObject.sUpdatingWhileDragging = false;

            evt.currentTarget = this._displayObject;
            this._displayObject.emit(DragEvent.MOVING, evt, this);
        }

        private _end2(evt: PIXI.interaction.InteractionEvent): void {
            if (GObject.draggingObject == this) {
                this.stopDrag();
                evt.currentTarget = this._displayObject;
                this._displayObject.emit(DragEvent.END, evt, this);
            }
        }
    }
}