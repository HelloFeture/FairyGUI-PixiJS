declare namespace fgui {
    class Debug {
        static enableDebug: boolean;
        static log(...args: any[]): void;
    }
}
declare namespace fgui {
    type IndexedObject = {
        [key: string]: any;
    };
    class InteractiveEvents {
        static Down: string;
        static Cancel: string;
        static Up: string;
        static Click: string;
        static UpOutside: string;
        static Move: string;
        static Over: string;
        static Out: string;
        static RightDown: string;
        static RightUp: string;
        static RightClick: string;
        static RightUpOutside: string;
        static TouchBegin: string;
        static TouchEnd: string;
    }
    const enum GearType {
        Display = 0,
        XY = 1,
        Size = 2,
        Look = 3,
        Color = 4,
        Animation = 5,
        Text = 6,
        Icon = 7,
        Count = 8
    }
    type GearNameMap = {
        [key: string]: number;
    };
    let GearXMLNodeNameMap: GearNameMap;
    let BlendModeMap: string[];
    const enum ScrollPaneFlags {
        DisplayOnLeft = 1,
        SnapToItem = 2,
        DisplayOnDemand = 4,
        PageMode = 8,
        TouchEffect = 16,
        DisableTouchEffect = 32,
        BounceEffect = 64,
        DisableBounceEffect = 128,
        DisableInertia = 256,
        DisableScissorRect = 512
    }
    const enum Keys {
        Up = 38,
        Down = 40,
        Left = 37,
        Right = 39,
        Shift = 16,
        Alt = 18,
        Ctrl = 17
    }
    const enum TextureFillMode {
        NONE = 0,
        HORZ = 1,
        VERT = 2,
        DEG90 = 3,
        DEG180 = 4,
        DEG360 = 5
    }
    const enum TextureFillBegin {
        L = 0,
        R = 1,
        T = 2,
        B = 3,
        LT = 4,
        RT = 5,
        LB = 6,
        RB = 7
    }
    const enum TextureFillDirection {
        CW = 0,
        CCW = 1
    }
}
declare namespace fgui {
    /**
     * @description
     * -en
     * decompressor for uipackage.fgui, for example use zlib to compress :
     * let compressor = new Zlib.
     * -zh
     * 解压函数，如果在发布fairygui项目的时候选择了二进制压缩，则需要提供解压函数，
     * 使用 ZLib 解压示例如下：
     *
     */
    type Decompressor = (rawData: ArrayBuffer) => Uint8Array;
    interface IDecompressObject {
        decompress(rawData: ArrayBuffer): Uint8Array;
    }
    interface IDecompressHandler {
        (rawData: ArrayBuffer): Uint8Array;
    }
    type DecompressAdapter = IDecompressObject | IDecompressHandler;
    /**
     * AssetLoader
     */
    interface IAssetLoader {
    }
    interface IAssetManagerObject {
        getAsset<T>(key: string): T;
    }
    interface IAssetManagerHandler {
        <T>(key: string): T;
    }
    type AssetManagerAdapter = IAssetManagerObject | IAssetManagerHandler;
}
declare module fgui {
    class DragDropManager {
        private _agent;
        private _sourceData;
        private _source;
        private static _inst;
        static get inst(): DragDropManager;
        constructor();
        get dragAgent(): GObject;
        get dragging(): boolean;
        startDrag(source: GObject, icon: string, sourceData: any, touchPointID?: number): void;
        cancel(): void;
        private __dragEnd;
    }
}
import fairygui = fgui;
declare module fgui {
    enum ButtonMode {
        Common = 0,
        Check = 1,
        Radio = 2
    }
    enum AutoSizeType {
        None = 0,
        Both = 1,
        Height = 2,
        Shrink = 3
    }
    enum AlignType {
        Left = "left",
        Center = "center",
        Right = "right"
    }
    const AlignMap: AlignType[];
    enum VertAlignType {
        Top = 0,
        Middle = 1,
        Bottom = 2
    }
    enum LoaderFillType {
        None = 0,
        Scale = 1,
        ScaleMatchHeight = 2,
        ScaleMatchWidth = 3,
        ScaleFree = 4,
        ScaleNoBorder = 5
    }
    enum ListLayoutType {
        SingleColumn = 0,
        SingleRow = 1,
        FlowHorizontal = 2,
        FlowVertical = 3,
        Pagination = 4
    }
    enum ListSelectionMode {
        Single = 0,
        Multiple = 1,
        Multiple_SingleClick = 2,
        None = 3
    }
    enum OverflowType {
        Visible = 0,
        Hidden = 1,
        Scroll = 2,
        Scale = 3,
        ScaleFree = 4
    }
    enum PackageItemType {
        Image = 0,
        MovieClip = 1,
        Sound = 2,
        Component = 3,
        Atlas = 4,
        Font = 5,
        Swf = 6,
        Misc = 7,
        Unknown = 8
    }
    enum ObjectType {
        Image = 0,
        MovieClip = 1,
        Swf = 2,
        Graph = 3,
        Loader = 4,
        Group = 5,
        Text = 6,
        RichText = 7,
        InputText = 8,
        Component = 9,
        List = 10,
        Label = 11,
        Button = 12,
        ComboBox = 13,
        ProgressBar = 14,
        Slider = 15,
        ScrollBar = 16,
        Tree = 17
    }
    enum ProgressTitleType {
        Percent = 0,
        ValueAndMax = 1,
        Value = 2,
        Max = 3
    }
    enum ScrollBarDisplayType {
        Default = 0,
        Visible = 1,
        Auto = 2,
        Hidden = 3
    }
    enum ScrollType {
        Horizontal = 0,
        Vertical = 1,
        Both = 2
    }
    enum FlipType {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
        Both = 3
    }
    enum ChildrenRenderOrder {
        Ascent = 0,
        Descent = 1,
        Arch = 2
    }
    enum GroupLayoutType {
        None = 0,
        Horizontal = 1,
        Vertical = 2
    }
    enum PopupDirection {
        Auto = 0,
        Up = 1,
        Down = 2
    }
    enum RelationType {
        Left_Left = 0,
        Left_Center = 1,
        Left_Right = 2,
        Center_Center = 3,
        Right_Left = 4,
        Right_Center = 5,
        Right_Right = 6,
        Top_Top = 7,
        Top_Middle = 8,
        Top_Bottom = 9,
        Middle_Middle = 10,
        Bottom_Top = 11,
        Bottom_Middle = 12,
        Bottom_Bottom = 13,
        Width = 14,
        Height = 15,
        LeftExt_Left = 16,
        LeftExt_Right = 17,
        RightExt_Left = 18,
        RightExt_Right = 19,
        TopExt_Top = 20,
        TopExt_Bottom = 21,
        BottomExt_Top = 22,
        BottomExt_Bottom = 23,
        Size = 24
    }
    enum FillMethod {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
        Radial90 = 3,
        Radial180 = 4,
        Radial360 = 5
    }
    enum FillOrigin {
        Top = 0,
        Bottom = 1,
        Left = 2,
        Right = 3,
        TopLeft = 0,
        TopRight = 1,
        BottomLeft = 2,
        BottomRight = 3
    }
    enum FillOrigin90 {
        TopLeft = 0,
        TopRight = 1,
        BottomLeft = 2,
        BottomRight = 3
    }
    enum ObjectPropID {
        Text = 0,
        Icon = 1,
        Color = 2,
        OutlineColor = 3,
        Playing = 4,
        Frame = 5,
        DeltaTime = 6,
        TimeScale = 7,
        FontSize = 8,
        Selected = 9
    }
}
declare namespace fgui {
    const enum DisplayObjectEvent {
        XY_CHANGED = "__xyChanged",
        SIZE_CHANGED = "__sizeChanged",
        VISIBLE_CHANGED = "__visibleChanged",
        SIZE_DELAY_CHANGE = "__sizeDelayChange",
        MOUSE_WHEEL = "__mouseWheel",
        GEAR_STOP = "gearStop"
    }
}
declare namespace fgui {
    interface IGObjectInteractionEvent extends PIXI.interaction.InteractionEvent {
        gObject: GObject;
        source?: GObject;
        sourceData?: any;
    }
    /**
     * UI 事件代理
     */
    class UIEventProxy extends PIXI.utils.EventEmitter {
        protected _displayObject: PIXI.DisplayObject;
        private _proxys;
        constructor();
        on(type: string, listener: Function, thisArg: any): this;
        once(type: string, listener: Function, thisArg: any): this;
        off(type: string, listener: Function, thisArg: any): this;
        addListener(type: string, listener: Function, thisArg: any): this;
        removeListener(type: string, listener: Function, thisArg: any): this;
        removeAllListeners(type?: string): this;
    }
}
declare namespace fgui {
    class GObject extends UIEventProxy {
        data: any;
        packageItem: PackageItem;
        static draggingObject: GObject;
        protected _x: number;
        protected _y: number;
        protected _alpha: number;
        protected _rotation: number;
        protected _visible: boolean;
        protected _touchable: boolean;
        protected _grayed: boolean;
        protected _draggable: boolean;
        protected _scaleX: number;
        protected _scaleY: number;
        protected _skewX: number;
        protected _skewY: number;
        protected _pivot: PIXI.Point;
        protected _pivotAsAnchor: boolean;
        protected _pivotOffset: PIXI.Point;
        protected _sortingOrder: number;
        protected _internalVisible: boolean;
        protected _handlingController: boolean;
        protected _focusable: boolean;
        protected _tooltips: string;
        protected _pixelSnapping: boolean;
        protected _disposed: boolean;
        protected _relations: Relations;
        protected _group: GGroup;
        protected _gears: GearBase<GObject>[];
        protected _dragBounds: PIXI.Rectangle;
        private _colorFilter;
        sourceWidth: number;
        sourceHeight: number;
        initWidth: number;
        initHeight: number;
        minWidth: number;
        minHeight: number;
        maxWidth: number;
        maxHeight: number;
        _parent: GComponent;
        _width: number;
        _height: number;
        _rawWidth: number;
        _rawHeight: number;
        _id: string;
        _name: string;
        _underConstruct: boolean;
        _gearLocked: boolean;
        _sizePercentInGroup: number;
        _treeNode: GTreeNode;
        static _gInstanceCounter: number;
        static XY_CHANGED: string;
        static SIZE_CHANGED: string;
        static SIZE_DELAY_CHANGE: string;
        static GEAR_STOP: string;
        private static _colorHelper;
        protected _lastColorComponents: number[];
        /**@internal */
        constructor();
        get id(): string;
        get name(): string;
        set name(value: string);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        get xMin(): number;
        set xMin(value: number);
        get yMin(): number;
        set yMin(value: number);
        setXY(xv: number, yv: number): void;
        get pixelSnapping(): boolean;
        set pixelSnapping(value: boolean);
        center(restraint?: boolean): void;
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        setSize(wv: number, hv: number, ignorePivot?: boolean): void;
        makeFullScreen(): void;
        ensureSizeCorrect(): void;
        get actualWidth(): number;
        get actualHeight(): number;
        get scaleX(): number;
        set scaleX(value: number);
        get scaleY(): number;
        set scaleY(value: number);
        setScale(sx: number, sy: number): void;
        get skewX(): number;
        set skewX(value: number);
        get skewY(): number;
        set skewY(value: number);
        setSkew(xv: number, yv: number): void;
        protected mapPivotWidth(scale: number): number;
        protected mapPivotHeight(scale: number): number;
        get pivotX(): number;
        get pivotY(): number;
        set pivotX(value: number);
        set pivotY(value: number);
        setPivot(xv: number, yv: number, asAnchor?: boolean): void;
        get pivotAsAnchor(): boolean;
        protected internalSetPivot(xv: number, yv: number, asAnchor: boolean): void;
        private updatePivotOffset;
        private applyPivot;
        get touchable(): boolean;
        set touchable(value: boolean);
        onClick(listener: (evt: IGObjectInteractionEvent) => void, thisArg?: any): void;
        offClick(listener: Function, thisArg?: any): void;
        get grayed(): boolean;
        set grayed(value: boolean);
        get enabled(): boolean;
        set enabled(value: boolean);
        get rotation(): number;
        set rotation(value: number);
        get normalizeRotation(): number;
        get alpha(): number;
        set alpha(value: number);
        protected updateAlpha(): void;
        get visible(): boolean;
        set visible(value: boolean);
        /**@internal */
        set internalVisible(value: boolean);
        /**@internal */
        get internalVisible(): boolean;
        get internalVisible2(): boolean;
        get internalVisible3(): boolean;
        get finalVisible(): boolean;
        get sortingOrder(): number;
        set sortingOrder(value: number);
        get focusable(): boolean;
        set focusable(value: boolean);
        get focused(): boolean;
        requestFocus(): void;
        get tooltips(): string;
        set tooltips(value: string);
        get blendMode(): string;
        set blendMode(value: string);
        get filters(): PIXI.Filter[];
        set filters(value: PIXI.Filter[]);
        get inContainer(): boolean;
        static isDisplayObjectOnStage(display: PIXI.DisplayObject): boolean;
        get onStage(): boolean;
        get resourceURL(): string;
        set group(value: GGroup);
        get group(): GGroup;
        getGear(index: number | GearType): GearBase<GObject>;
        protected updateGear(index: GearType): void;
        checkGearController(index: number, c: Controller): boolean;
        updateGearFromRelations(index: GearType, dx: number, dy: number): void;
        addDisplayLock(): number;
        releaseDisplayLock(token: number): void;
        hasGearController(index: number, c: Controller): boolean;
        /**@internal */
        /**@internal */
        private checkGearDisplay;
        private checkGearVisible;
        get gearXY(): GearXY;
        get gearSize(): GearSize;
        get gearLook(): GearLook;
        get relations(): Relations;
        addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
        removeRelation(target: GObject, relationType?: number): void;
        /**
         * PIXI 显示对象，通过改实例可获取显示对象
         */
        get displayObject(): PIXI.DisplayObject;
        protected createDisplayObject(): void;
        protected setDisplayObject(value: PIXI.DisplayObject): void;
        get parent(): GComponent;
        set parent(val: GComponent);
        removeFromParent(): void;
        get root(): GRoot;
        get asCom(): GComponent;
        get asButton(): GButton;
        get asLabel(): GLabel;
        get asProgress(): GProgressBar;
        get asTextField(): GTextField;
        get asRichTextField(): GRichTextField;
        get asTextInput(): GTextInput;
        get asLoader(): GLoader;
        get asList(): GList;
        get asTree(): GTree;
        get asGraph(): GGraph;
        get asGroup(): GGroup;
        get asSlider(): GSlider;
        get asComboBox(): GComboBox;
        get asImage(): GImage;
        get asMovieClip(): GMovieClip;
        static cast(obj: PIXI.DisplayObject): GObject;
        /** @virtual */
        get text(): string;
        /** @virtual */
        set text(value: string);
        /** @virtual */
        get icon(): string;
        /** @virtual */
        set icon(value: string);
        get isDisposed(): boolean;
        get treeNode(): GTreeNode;
        dispose(): void;
        get draggable(): boolean;
        set draggable(value: boolean);
        get dragBounds(): PIXI.Rectangle;
        set dragBounds(value: PIXI.Rectangle);
        startDrag(touchPointID?: number): void;
        stopDrag(): void;
        get dragging(): boolean;
        localToGlobal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        globalToLocal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        localToRoot(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        rootToLocal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        localToGlobalRect(ax?: number, ay?: number, aWidth?: number, aHeight?: number, resultRect?: PIXI.Rectangle): PIXI.Rectangle;
        globalToLocalRect(ax?: number, ay?: number, aWidth?: number, aHeight?: number, resultRect?: PIXI.Rectangle): PIXI.Rectangle;
        handleControllerChanged(c: Controller): void;
        protected switchDisplayObject(newObj: PIXI.DisplayObject): void;
        protected handleXYChanged(): void;
        protected handleSizeChanged(): void;
        protected handleScaleChanged(): void;
        protected get colorFilter(): PIXI.filters.ColorMatrixFilter;
        /**
         * update color appearance
         * @param brightness value of the brigthness (-1 - 1, where -1 is black)
         * @param contrast value of the contrast (-1 - 1)
         * @param saturate The saturation amount (-1 - 1)
         * @param hue The hue property of the color in degress (-1 - 1, where 1 is 360deg)
         */
        updateColorComponents(brightness: number, contrast: number, saturate: number, hue: number): void;
        protected handleGrayedChanged(): void;
        protected handleAlphaChanged(): void;
        handleVisibleChanged(): void;
        getProp(index: number): any;
        setProp(index: number, value: any): void;
        /**@internal */
        constructFromResource(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
        protected static sGlobalDragStart: PIXI.Point;
        protected static sGlobalRect: PIXI.Rectangle;
        protected static sHelperPoint: PIXI.Point;
        protected static sDragHelperRect: PIXI.Rectangle;
        protected static sUpdatingWhileDragging: boolean;
        private static _dragBeginCancelled;
        protected _touchDownPoint: PIXI.Point;
        private initDrag;
        private dragBegin;
        private dragEnd;
        private reset;
        private _touchBegin;
        private __end;
        private __moving;
        private __moving2;
        private __end2;
    }
}
declare namespace fgui {
    /**
     * 控制器
     */
    class Controller extends PIXI.utils.EventEmitter {
        private _selectedIndex;
        private _previousIndex;
        private _pageIds;
        private _pageNames;
        private _actions;
        /** 控制器名称 */
        name: string;
        /** 所属组件  */
        parent: GComponent;
        autoRadioGroupDepth: boolean;
        changing: boolean;
        private static _nextPageId;
        constructor();
        get selectedIndex(): number;
        set selectedIndex(value: number);
        setSelectedIndex(value?: number): void;
        get previsousIndex(): number;
        get selectedPage(): string;
        set selectedPage(val: string);
        setSelectedPage(value: string): void;
        /** @readonly 上次页面名称 */
        get previousPage(): string;
        /** @readonly page数量 */
        get pageCount(): number;
        /**
         * 获取指定下标的夜名称
         * @param index 下标
         */
        getPageName(index?: number): string;
        /**
         * 增加页面到尾部
         * @param name 页面名称
         */
        addPage(name?: string): void;
        /**
         * 增加页面到指定下标
         * @param name 页面名称
         * @param index 下标，默认为0
         */
        addPageAt(name: string, index?: number): void;
        /**
         * 删除一个页面
         * @param name 页面名称
         */
        removePage(name: string): void;
        /**
         * 删除一个页面
         * @param index 页下标
         */
        removePageAt(index?: number): void;
        /**
         * 删除所有页面
         */
        clearPages(): void;
        /**
         * 是否包含某个页面
         * @param aName 页面名称
         */
        hasPage(aName: string): boolean;
        /**
         * @hide
         * 根据页ID获取下标
         * @param aId
         */
        getPageIndexById(aId: string): number;
        /**
         * @hide
         * 根据页名称获取页ID
         * @param aName
         */
        getPageIdByName(aName: string): string;
        /**
         * @hide
         * 根据页ID获取页名称
         * @param aId
         */
        getPageNameById(aId: string): string;
        /**
         * @hide
         * 获取指定页的下标
         * @param index 下表
         */
        getPageId(index?: number): string;
        /**
         * 获取选择的页ID
         */
        get selectedPageId(): string;
        /**
         * 设置选择的页ID
         */
        set selectedPageId(val: string);
        set oppositePageId(val: string);
        get previousPageId(): string;
        executeActions(): void;
        /**
         * @param buffer
         */
        setup(buffer: ByteBuffer): void;
    }
}
declare namespace fgui {
    class GComponent extends GObject {
        protected _sortingChildCount: number;
        protected _applyingController: Controller;
        protected _opaque: boolean;
        protected _margin: utils.Margin;
        protected _trackBounds: boolean;
        protected _boundsChanged: boolean;
        protected _childrenRenderOrder: ChildrenRenderOrder;
        protected _children: GObject[];
        protected _apexIndex: number;
        /**@internal */
        _buildingDisplayList: boolean;
        /**@internal */
        _controllers: Controller[];
        /**@internal */
        _transitions: Transition[];
        /**@internal */
        _rootContainer: UIContainer;
        /**@internal */
        _container: PIXI.Container;
        /**@internal */
        _scrollPane: ScrollPane;
        /**@internal */
        _alignOffset: PIXI.Point;
        constructor();
        protected createDisplayObject(): void;
        dispose(): void;
        get displayListContainer(): PIXI.Container;
        addChild(child: GObject): GObject;
        addChildAt(child: GObject, index?: number): GObject;
        private getInsertPosForSortingChild;
        removeChild(child: GObject, dispose?: boolean): GObject;
        removeChildAt(index: number, dispose?: boolean): GObject;
        removeChildren(beginIndex?: number, endIndex?: number, dispose?: boolean): void;
        getChildAt(index?: number): GObject;
        getChild(name: string): GObject;
        getChildByPath(path: String): GObject;
        getVisibleChild(name: string): GObject;
        getChildInGroup(name: string, group: GGroup): GObject;
        getChildById(id: string): GObject;
        getChildIndex(child: GObject): number;
        setChildIndex(child: GObject, index?: number): void;
        setChildIndexBefore(child: GObject, index: number): number;
        protected _setChildIndex(child: GObject, oldIndex: number, index?: number): number;
        swapChildren(child1: GObject, child2: GObject): void;
        swapChildrenAt(index1: number, index2?: number): void;
        get numChildren(): number;
        isAncestorOf(child: GObject): boolean;
        addController(controller: Controller): void;
        getControllerAt(index: number): Controller;
        getController(name: string): Controller;
        removeController(c: Controller): void;
        get controllers(): Controller[];
        childStateChanged(child: GObject): void;
        applyController(c: Controller): void;
        applyAllControllers(): void;
        adjustRadioGroupDepth(obj: GObject, c: Controller): void;
        getTransitionAt(index: number): Transition;
        getTransition(transName: string): Transition;
        isChildInView(child: GObject): boolean;
        getFirstChildInView(): number;
        get scrollPane(): ScrollPane;
        get opaque(): boolean;
        set opaque(value: boolean);
        get margin(): utils.Margin;
        set margin(value: utils.Margin);
        get apexIndex(): number;
        set apexIndex(value: number);
        get mask(): PIXI.Container | PIXI.MaskData;
        set mask(obj: PIXI.Container | PIXI.MaskData);
        protected updateOpaque(): void;
        protected updateScrollRect(): void;
        protected setupScroll(buffer: ByteBuffer): void;
        protected setupOverflow(overflow: OverflowType): void;
        protected handleSizeChanged(): void;
        protected handleGrayedChanged(): void;
        setBoundsChangedFlag(): void;
        private _validate;
        ensureBoundsCorrect(): void;
        protected updateBounds(): void;
        setBounds(ax: number, ay: number, aw: number, ah?: number): void;
        get viewWidth(): number;
        set viewWidth(value: number);
        get viewHeight(): number;
        set viewHeight(value: number);
        getSnappingPosition(xValue: number, yValue: number, resultPoint?: PIXI.Point): PIXI.Point;
        childSortingOrderChanged(child: GObject, oldValue: number, newValue?: number): void;
        /**@internal */
        constructFromResource(): void;
        constructFromResource2(objectPool: Array<GObject>, poolIndex: number): void;
        protected constructExtension(buffer: ByteBuffer): void;
        private buildNativeDisplayList;
        protected appendChildrenList(): void;
        private ___added;
        private ___removed;
    }
}
declare namespace fgui {
    class GButton extends GComponent implements IColorableTitle {
        protected _titleObject: GObject;
        protected _iconObject: GObject;
        protected _relatedController: Controller;
        private _relatedPageId;
        private _mode;
        private _selected;
        private _title;
        private _selectedTitle;
        private _icon;
        private _selectedIcon;
        private _sound;
        private _soundVolumeScale;
        private _buttonController;
        private _changeStateOnClick;
        private _linkedPopup;
        private _downEffect;
        private _downEffectValue;
        private _down;
        private _over;
        static UP: string;
        static DOWN: string;
        static OVER: string;
        static SELECTED_OVER: string;
        static DISABLED: string;
        static SELECTED_DISABLED: string;
        constructor();
        protected setDisplayObject(value: PIXI.DisplayObject): void;
        get icon(): string;
        set icon(value: string);
        get selectedIcon(): string;
        set selectedIcon(value: string);
        get title(): string;
        set title(value: string);
        get text(): string;
        set text(value: string);
        get selectedTitle(): string;
        set selectedTitle(value: string);
        get titleColor(): TextColor;
        set titleColor(value: TextColor);
        get titleFontSize(): number;
        set titleFontSize(value: number);
        get sound(): string;
        set sound(val: string);
        get soundVolumeScale(): number;
        set soundVolumeScale(value: number);
        get fontSize(): number;
        set fontSize(value: number);
        set selected(val: boolean);
        get selected(): boolean;
        get mode(): ButtonMode;
        set mode(value: ButtonMode);
        get relatedController(): Controller;
        set relatedController(val: Controller);
        get relatedPageId(): string;
        set relatedPageId(val: string);
        get changeStateOnClick(): boolean;
        set changeStateOnClick(value: boolean);
        get linkedPopup(): GObject;
        set linkedPopup(value: GObject);
        getTextField(): GTextField;
        addStateListener(listener: Function, thisObj?: any): void;
        removeStateListener(listener: Function, thisObj?: any): void;
        fireClick(downEffect?: boolean): void;
        protected setState(val: string): void;
        handleControllerChanged(c: Controller): void;
        protected handleGrayedChanged(): void;
        protected constructExtension(buffer: ByteBuffer): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
        private _rollover;
        private _rollout;
        private _mousedown;
        private _mouseup;
        private _click;
        dispose(): void;
    }
}
declare namespace fgui {
    /**
     * 文本颜色，见
     * https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/fillStyle
     */
    type TextColor = string | string[] | number | number[] | CanvasGradient | CanvasPattern;
    interface IColorableTitle {
        titleColor: TextColor;
        fontSize: number;
    }
    let isColorableTitle: (obj: any) => obj is IColorableTitle;
}
declare namespace fgui {
    class GComboBox extends GComponent {
        dropdown: GComponent;
        protected _titleObject: GObject;
        protected _iconObject: GObject;
        protected _list: GList;
        private _items;
        private _values;
        private _icons;
        private _visibleItemCount;
        private _itemsUpdated;
        private _selectedIndex;
        private _buttonController;
        private _popupDirection;
        private _selectionController;
        private _over;
        private _down;
        constructor();
        get text(): string;
        set text(value: string);
        get icon(): string;
        set icon(value: string);
        get titleColor(): TextColor;
        set titleColor(value: TextColor);
        get visibleItemCount(): number;
        set visibleItemCount(value: number);
        get popupDirection(): PopupDirection;
        set popupDirection(value: PopupDirection);
        get items(): Array<string>;
        set items(value: string[]);
        get icons(): string[];
        set icons(value: string[]);
        get values(): string[];
        set values(value: string[]);
        get selectedIndex(): number;
        set selectedIndex(val: number);
        get value(): string;
        set value(val: string);
        get selectionController(): Controller;
        set selectionController(value: Controller);
        getTextField(): GTextField;
        protected setState(val: string): void;
        getProp(index: number): any;
        setProp(index: number, value: any): void;
        protected constructExtension(buffer: ByteBuffer): void;
        handleControllerChanged(c: Controller): void;
        private updateSelectionController;
        dispose(): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
        protected showDropdown(): void;
        private __popupWinClosed;
        private __clickItem;
        private __clickItem2;
        private delayedClickItem;
        private __rollover;
        private __rollout;
        private __mousedown;
        private _mouseup;
    }
}
declare namespace fgui {
    enum eGraphType {
        Empty = 0,
        Rect = 1,
        Ellipse = 2,
        Path = 3,
        Polygon = 4
    }
    class GGraph extends GObject implements IColorGear {
        /** @hide  绘制对象 */
        /** @hide 类型 */
        private _type;
        /** @hide 线条大小 */
        private _lineSize;
        /** @hide 线条颜色 */
        private _lineColor;
        /** @hide 线条透明度  */
        private _lineAlpha;
        /** @hide 填充颜色 */
        private _fillColor;
        /** @hide 填充透明度 */
        private _fillAlpha;
        private _cornerRadius;
        private _sides;
        private _startAngle;
        /** 多边形点 */
        private _polygonPoints;
        private _distances;
        private _corner;
        constructor();
        /**
         * 获取原始 PIXI.Graphics 对象，通过这个对象可以调用 PIXI 的绘制接口
         */
        get graphics(): PIXI.Graphics;
        /**
         * 绘制矩形
         * @param lineSize 线条宽度
         * @param lineColor 线条颜色
         * @param lineAlpha 线条透明度
         * @param fillColor 填充颜色
         * @param fillAlpha 填充透明度
         * @param corner
         * @return this
         */
        drawRect(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, corner?: number[]): this;
        drawEllipse(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number): this;
        get color(): number;
        set color(value: number);
        /** @hide update  */
        private updateGraph;
        replaceMe(target: GObject): void;
        addBeforeMe(target: GObject): void;
        addAfterMe(target: GObject): void;
        setNativeObject(obj: PIXI.DisplayObject): void;
        /** @hide */
        protected createDisplayObject(): void;
        /** 获取属性 */
        getProp(index: number): any;
        /** 设置属性 */
        setProp(index: number, value: any): void;
        /** 处理尺寸改变 */
        protected handleSizeChanged(): void;
        /**
         * 根据配置流设置属性
         * @hide
         * @param buffer 对象属性流
         * @param beginPos 其实位置
         */
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class GGroup extends GObject {
        private _layout;
        private _lineGap;
        private _columnGap;
        private _excludeInvisibles;
        private _autoSizeDisabled;
        private _mainGridIndex;
        private _mainGridMinSize;
        private _boundsChanged;
        private _percentReady;
        private _mainChildIndex;
        private _totalSize;
        private _numChildren;
        /**@internal */
        _updating: number;
        constructor();
        dispose(): void;
        /**
         * @see GroupLayout
         */
        get layout(): number;
        /**
         * @see GroupLayout
         */
        set layout(value: number);
        get lineGap(): number;
        set lineGap(value: number);
        get columnGap(): number;
        set columnGap(value: number);
        get excludeInvisibles(): boolean;
        set excludeInvisibles(value: boolean);
        get autoSizeDisabled(): boolean;
        set autoSizeDisabled(value: boolean);
        get mainGridMinSize(): number;
        set mainGridMinSize(value: number);
        get mainGridIndex(): number;
        set mainGridIndex(value: number);
        setBoundsChangedFlag(positionChangedOnly?: boolean): void;
        ensureSizeCorrect(): void;
        ensureBoundsCorrect(): void;
        private updateBounds;
        private handleLayout;
        moveChildren(dx: number, dy: number): void;
        resizeChildren(dw: number, dh: number): void;
        handleAlphaChanged(): void;
        handleVisibleChanged(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
        protected _empty: boolean;
        protected createDisplayObject(): void;
        setXY(xv: number, yv: number): void;
        protected updateAlpha(): void;
    }
}
declare namespace fgui {
    class GImage extends GObject implements IColorGear {
        private _content;
        private _flip;
        constructor();
        get touchable(): boolean;
        set touchable(value: boolean);
        get color(): number;
        set color(value: number);
        get flip(): FlipType;
        set flip(value: FlipType);
        get fillMethod(): number;
        set fillMethod(value: number);
        get fillAmount(): number;
        set fillAmount(value: number);
        get texture(): PIXI.Texture;
        set texture(value: PIXI.Texture);
        protected createDisplayObject(): void;
        dispose(): void;
        constructFromResource(): void;
        protected handleXYChanged(): void;
        protected handleSizeChanged(): void;
        getProp(index: number): any;
        setProp(index: number, value: any): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class GLabel extends GComponent implements IColorableTitle {
        protected _titleObject: GObject;
        protected _iconObject: GObject;
        constructor();
        get icon(): string;
        set icon(value: string);
        get title(): string;
        set title(value: string);
        get text(): string;
        set text(value: string);
        get titleColor(): TextColor;
        set titleColor(value: TextColor);
        get fontSize(): number;
        set fontSize(value: number);
        set titleFontSize(value: number);
        set editable(val: boolean);
        get editable(): boolean;
        getTextField(): GTextField;
        getProp(index: number): any;
        setProp(index: number, value: any): void;
        protected constructExtension(buffer: ByteBuffer): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare module fgui {
    class GList extends GComponent {
        /**
        * itemRenderer(number number, GObject item);
        */
        itemRenderer: Function;
        /**
         * itemProvider(index:number):string;
        */
        itemProvider: Function;
        callbackThisObj: any;
        scrollItemToViewOnClick: boolean;
        foldInvisibleItems: boolean;
        private _layout;
        private _lineCount;
        private _columnCount;
        private _lineGap;
        private _columnGap;
        private _defaultItem;
        private _autoResizeItem;
        private _selectionMode;
        private _align;
        private _verticalAlign;
        private _selectionController;
        private _lastSelectedIndex;
        private _pool;
        private _virtual;
        private _loop;
        private _numItems;
        private _realNumItems;
        private _firstIndex;
        private _curLineItemCount;
        private _curLineItemCount2;
        private _itemSize;
        private _virtualListChanged;
        private _virtualItems;
        private _eventLocked;
        private itemInfoVer;
        constructor();
        dispose(): void;
        get layout(): ListLayoutType;
        set layout(value: ListLayoutType);
        get lineCount(): number;
        set lineCount(value: number);
        get columnCount(): number;
        set columnCount(value: number);
        get lineGap(): number;
        set lineGap(value: number);
        get columnGap(): number;
        set columnGap(value: number);
        get align(): AlignType;
        set align(value: AlignType);
        get verticalAlign(): VertAlignType;
        set verticalAlign(value: VertAlignType);
        get virtualItemSize(): PIXI.Point;
        set virtualItemSize(value: PIXI.Point);
        get defaultItem(): string;
        set defaultItem(val: string);
        get autoResizeItem(): boolean;
        set autoResizeItem(value: boolean);
        get selectionMode(): ListSelectionMode;
        set selectionMode(value: ListSelectionMode);
        get selectionController(): Controller;
        set selectionController(value: Controller);
        get itemPool(): GObjectPool;
        getFromPool(url?: string): GObject;
        returnToPool(obj: GObject): void;
        addChildAt(child: GObject, index?: number): GObject;
        addItem(url?: string): GObject;
        addItemFromPool(url?: string): GObject;
        removeChildAt(index: number, dispose?: boolean): GObject;
        removeChildToPoolAt(index?: number): void;
        removeChildToPool(child: GObject): void;
        removeChildrenToPool(beginIndex?: number, endIndex?: number): void;
        get selectedIndex(): number;
        set selectedIndex(value: number);
        getSelection(result?: number[]): number[];
        addSelection(index: number, scrollItToView?: boolean): void;
        removeSelection(index: number): void;
        clearSelection(): void;
        private clearSelectionExcept;
        selectAll(): void;
        selectNone(): void;
        selectReverse(): void;
        handleArrowKey(dir?: number): void;
        private __clickItem;
        private setSelectionOnEvent;
        resizeToFit(itemCount?: number, minSize?: number): void;
        getMaxItemWidth(): number;
        protected handleSizeChanged(): void;
        handleControllerChanged(c: Controller): void;
        private updateSelectionController;
        getSnappingPosition(xValue: number, yValue: number, resultPoint?: PIXI.Point): PIXI.Point;
        scrollToView(index: number, ani?: boolean, setFirst?: boolean): void;
        getFirstChildInView(): number;
        childIndexToItemIndex(index: number): number;
        itemIndexToChildIndex(index: number): number;
        setVirtual(): void;
        setVirtualAndLoop(): void;
        private _setVirtual;
        get numItems(): number;
        set numItems(value: number);
        refreshVirtualList(): void;
        private checkVirtualList;
        private setVirtualListChangedFlag;
        private _refreshVirtualList;
        private __scrolled;
        private getIndexOnPos1;
        private getIndexOnPos2;
        private getIndexOnPos3;
        private handleScroll;
        private static pos_param;
        private handleScroll1;
        private handleScroll2;
        private handleScroll3;
        private handleArchOrder1;
        private handleArchOrder2;
        private handleAlign;
        protected updateBounds(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        protected readItems(buffer: ByteBuffer): void;
        protected setupItem(buffer: ByteBuffer, obj: GObject): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare module fgui {
    class GObjectPool {
        private _pool;
        private _count;
        constructor();
        clear(): void;
        get count(): number;
        getObject(url: string): GObject;
        returnObject(obj: GObject): void;
    }
}
declare namespace fgui {
    class GLoader extends GObject implements IAnimationGear, IColorGear {
        protected _url: string;
        protected _align: AlignType;
        protected _verticalAlign: VertAlignType;
        protected _autoSize: boolean;
        protected _fill: LoaderFillType;
        private _shrinkOnly;
        protected _showErrorSign: boolean;
        protected _playing: boolean;
        protected _frame: number;
        protected _color: number;
        private _contentItem;
        private _contentSourceWidth;
        private _contentSourceHeight;
        private _contentWidth;
        private _contentHeight;
        protected _container: UIContainer;
        protected _content: UIImage | MovieClip;
        protected _errorSign: GObject;
        private _updatingLayout;
        private static _errorSignPool;
        constructor();
        protected createDisplayObject(): void;
        dispose(): void;
        get url(): string;
        set url(value: string);
        get icon(): string;
        set icon(value: string);
        get align(): AlignType;
        set align(value: AlignType);
        get verticalAlign(): VertAlignType;
        set verticalAlign(value: VertAlignType);
        get fill(): LoaderFillType;
        set fill(value: LoaderFillType);
        get autoSize(): boolean;
        set autoSize(value: boolean);
        get playing(): boolean;
        set playing(value: boolean);
        get frame(): number;
        set frame(value: number);
        get color(): number;
        set color(value: number);
        private applyColor;
        get showErrorSign(): boolean;
        set showErrorSign(value: boolean);
        get content(): UIImage | MovieClip;
        get texture(): PIXI.Texture;
        set texture(value: PIXI.Texture);
        protected loadContent(): void;
        protected loadFromPackage(itemURL: string): void;
        private switchToMovieMode;
        private _loadingTexture;
        /**overwrite this method if you need to load resources by your own way*/
        protected loadExternal(): void;
        /**free the resource you loaded */
        protected freeExternal(texture: PIXI.Texture): void;
        private _loadResCompleted;
        /**content loaded */
        protected onExternalLoadSuccess(texture: PIXI.Texture): void;
        protected onExternalLoadFailed(): void;
        private setErrorState;
        private clearErrorState;
        private updateLayout;
        private clearContent;
        protected handleSizeChanged(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class GMovieClip extends GObject implements IAnimationGear, IColorGear {
        private _movieClip;
        constructor();
        protected mapPivotWidth(scale: number): number;
        protected mapPivotHeight(scale: number): number;
        protected handleSizeChanged(): void;
        handleScaleChanged(): void;
        get touchable(): boolean;
        set touchable(value: boolean);
        get color(): number;
        set color(value: number);
        protected createDisplayObject(): void;
        get playing(): boolean;
        set playing(value: boolean);
        get frame(): number;
        set frame(value: number);
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
        setPlaySettings(...args: any[]): void;
        constructFromResource(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class GProgressBar extends GComponent {
        private _min;
        private _max;
        private _value;
        private _titleType;
        private _reverse;
        private _titleObject;
        private _aniObject;
        private _barObjectH;
        private _barObjectV;
        private _barMaxWidth;
        private _barMaxHeight;
        private _barMaxWidthDelta;
        private _barMaxHeightDelta;
        private _barStartX;
        private _barStartY;
        constructor();
        get titleType(): ProgressTitleType;
        set titleType(value: ProgressTitleType);
        get min(): number;
        set min(value: number);
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        tweenValue(value: number, duration: number): GTweener;
        update(newValue: number): void;
        protected constructExtension(buffer: ByteBuffer): void;
        protected handleSizeChanged(): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class LineInfo {
        width: number;
        height: number;
        textHeight: number;
        text: string;
        y: number;
        private static pool;
        static get(): LineInfo;
        static recycle(value: LineInfo): void;
        static recycleMany(value: LineInfo[]): void;
    }
    /**
     * 普通文本
     */
    class GTextField extends GObject implements IColorGear, IColorableTitle {
        protected _textField: UITextField;
        protected _btContainer: UIContainer;
        protected _bitmapFont: BitmapFont;
        protected _lines: LineInfo[];
        protected _bitmapPool: PIXI.Sprite[];
        protected _font: string;
        protected _style: PIXI.TextStyle;
        protected _verticalAlign: VertAlignType;
        protected _offset: PIXI.Point;
        protected _color: TextColor;
        protected _singleLine: boolean;
        protected _text: string;
        protected _fontProperties: PIXI.IFontMetrics;
        protected _autoSize: AutoSizeType;
        protected _widthAutoSize: boolean;
        protected _heightAutoSize: boolean;
        protected _requireRender: boolean;
        protected _updatingSize: boolean;
        protected _sizeDirty: boolean;
        protected _textWidth: number;
        protected _textHeight: number;
        static GUTTER_X: number;
        static GUTTER_Y: number;
        multiline: boolean;
        ubbEnabled: boolean;
        protected _templateVars: any;
        constructor();
        protected createDisplayObject(): void;
        private switchBitmapMode;
        dispose(): void;
        set text(value: string);
        protected setText(value: string): void;
        get text(): string;
        protected getText(): string;
        get color(): number;
        getColor(): TextColor;
        setColor(value: TextColor): void;
        set color(value: number);
        get titleColor(): TextColor;
        set titleColor(value: TextColor);
        get lineHeight(): number;
        set lineHeight(lh: number);
        get font(): string;
        set font(value: string);
        get fontSize(): number;
        set fontSize(value: number);
        get align(): AlignType;
        set align(value: AlignType);
        get verticalAlign(): VertAlignType;
        set verticalAlign(value: VertAlignType);
        get leading(): number;
        set leading(value: number);
        get letterSpacing(): number;
        set letterSpacing(value: number);
        get underline(): boolean;
        set underline(value: boolean);
        get bold(): boolean;
        set bold(value: boolean);
        get weight(): string;
        set weight(v: string);
        get variant(): string;
        set variant(v: string);
        get italic(): boolean;
        set italic(value: boolean);
        get multipleLine(): boolean;
        set multipleLine(value: boolean);
        get stroke(): number;
        set stroke(value: number);
        get strokeColor(): number | string;
        set strokeColor(value: number | string);
        set autoSize(value: AutoSizeType);
        get autoSize(): AutoSizeType;
        get textWidth(): number;
        get textHeight(): number;
        ensureSizeCorrect(): void;
        protected render(): void;
        private applyStyle;
        private __render;
        protected renderNow(updateBounds?: boolean): void;
        private renderWithBitmapFont;
        localToGlobal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        globalToLocal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        protected handleSizeChanged(): void;
        protected shrinkTextField(): void;
        protected layoutAlign(): void;
        private updatePosition;
        protected handleXYChanged(): void;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
    }
}
declare namespace fgui {
    class TextBlock {
        text: string;
        style: PIXI.TextStyle;
    }
    /**
     * 富文本
     */
    class GRichTextField extends GTextField {
        protected _ubbEnabled: boolean;
        protected _textFlow: TextBlock[];
        set ubbEnabled(value: boolean);
        get ubbEnabled(): boolean;
        constructor();
        set textFlow(flow: TextBlock[]);
        set text(value: string);
        private _clickLink;
        dispose(): void;
        protected updateTextFieldText(): void;
    }
}
declare namespace fgui {
    class GRoot extends GComponent {
        static contentScaleLevel: number;
        private static uniqueID;
        private _uiStage;
        private _modalLayer;
        private _popupStack;
        private _justClosedPopups;
        private _modalWaitPane;
        private _focusedObject;
        private _tooltipWin;
        private _defaultTooltipWin;
        private _volumeScale;
        private _checkingPopups;
        private _uid;
        private static _inst;
        static touchScreen: boolean;
        static contentScaleFactor: number;
        static touchDown: boolean;
        static ctrlKeyDown: boolean;
        static shiftKeyDown: boolean;
        static mouseX: number;
        static mouseY: number;
        /**
         * the singleton instance of the GRoot object
         */
        static get inst(): GRoot;
        /**
         * the current mouse/pointer data
         */
        /**
         * the main entry to lauch the UI root, e.g.: GRoot.inst.attachTo(app, options)
         * @param app your PIXI.Application instance to be used in this GRoot instance
         * @param stageOptions stage rotation / resize options
         */
        attachTo(app: PIXI.Application, stageOptions?: UIStageOptions): void;
        constructor();
        get uniqueID(): number;
        get stageWidth(): number;
        get stageHeight(): number;
        get contentScaleFactor(): number;
        get applicationContext(): PIXI.Application;
        get nativeStage(): PIXI.Container;
        get orientation(): StageOrientation;
        get stageWrapper(): UIStage;
        protected dispatchMouseWheel(evt: any): void;
        /**
         * get the objects which are placed underneath the given stage coordinate
         * @param globalX the stage X
         * @param globalY the stage Y
         */
        getObjectUnderPoint(globalX: number, globalY: number): GObject;
        showWindow(win: Window): void;
        hideWindow(win: Window): void;
        hideWindowImmediately(win: Window): void;
        bringToFront(win: Window): void;
        showModalWait(msg?: string): void;
        closeModalWait(): void;
        closeAllExceptModals(): void;
        closeAllWindows(): void;
        getTopWindow(): Window;
        get hasModalWindow(): boolean;
        get modalWaiting(): boolean;
        showPopup(popup: GObject, target?: GObject, dir?: PopupDirection): void;
        togglePopup(popup: GObject, target?: GObject, dir?: PopupDirection): void;
        hidePopup(popup?: GObject): void;
        get hasAnyPopup(): boolean;
        private closePopup;
        showTooltips(msg: string): void;
        playOneShotSound(sound: any, volumeScale?: number): void;
        showTooltipsWin(tooltipWin: GObject, position?: PIXI.Point): void;
        hideTooltips(): void;
        get focus(): GObject;
        set focus(value: GObject);
        private setFocus;
        private adjustModalLayer;
        private __stageDown;
        checkPopups(target: PIXI.DisplayObject): void;
        private __stageMove;
        private __stageUp;
        private __winResize;
    }
}
declare namespace fgui {
    class GScrollBar extends GComponent {
        private _grip;
        private _arrowButton1;
        private _arrowButton2;
        private _bar;
        private _target;
        private _vertical;
        private _scrollPerc;
        private _fixedGripSize;
        private _dragOffset;
        constructor();
        setScrollPane(target: ScrollPane, vertical: boolean): void;
        set displayPerc(val: number);
        get scrollPerc(): number;
        set scrollPerc(val: number);
        get minSize(): number;
        private _gripMouseDown;
        private static sScrollbarHelperPoint;
        private _gripDragging;
        private _gripDraggingEnd;
        private _arrowButton1Click;
        private _arrowButton2Click;
        private _barMouseDown;
        dispose(): void;
    }
}
declare namespace fgui {
    class GSlider extends GComponent {
        private _min;
        protected _max: number;
        protected _value: number;
        protected _titleType: ProgressTitleType;
        protected _titleObject: GTextField;
        protected _aniObject: GObject;
        protected _barObjectH: GObject;
        protected _barObjectV: GObject;
        protected _barMaxWidth: number;
        protected _barMaxHeight: number;
        protected _barMaxWidthDelta: number;
        protected _barMaxHeightDelta: number;
        protected _gripObject: GObject;
        private _clickPos;
        private _clickPercent;
        constructor();
        get titleType(): ProgressTitleType;
        set titleType(value: ProgressTitleType);
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        update(): void;
        private updateWidthPercent;
        protected handleSizeChanged(): void;
        setup_afterAdd(buffer: ByteBuffer, beginPos: number): void;
        private _gripMouseDown;
        private static sSilderHelperPoint;
        private _gripMouseMove;
        private _gripMouseUp;
        dispose(): void;
    }
}
declare namespace fgui {
    /**
     * 输入类型
     */
    const enum InputType {
        /** 文本 */
        TEXT = "text",
        /** 密码 */
        PASSWORD = "password",
        /** 数字 */
        NUMBER = "number",
        /** email */
        EMAIL = "email",
        /** 电话 */
        TEL = "tel",
        /** URL */
        URL = "url"
    }
    class GTextInput extends GTextField {
        protected _editable: boolean;
        protected _util: utils.InputDelegate;
        /**@internal */
        _isTyping: boolean;
        constructor();
        protected createDisplayObject(): void;
        protected handleSizeChanged(): void;
        private removed;
        private added;
        requestFocus(): void;
        get editable(): boolean;
        set editable(v: boolean);
        private changeToPassText;
        protected getText(): string;
        protected setText(value: string): void;
        setColor(value: number): void;
        get promptText(): string;
        set promptText(v: string);
        get maxLength(): number;
        set maxLength(v: number);
        get restrict(): string;
        set restrict(v: string);
        get password(): boolean;
        set password(v: boolean);
        get type(): InputType;
        set type(t: InputType);
        dispose(): void;
        protected renderNow(updateBounds?: boolean): void;
        private decorateInputbox;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        private updateVertAlign;
    }
}
declare namespace fgui {
    class GTimer {
        private _items;
        private _itemPool;
        private _enumIdx;
        private get _enumI();
        private set _enumI(value);
        private _enumCount;
        private _curTime;
        private _lastTime;
        private _ticker;
        private static FPS24;
        static deltaTime: number;
        static time: number;
        static inst: GTimer;
        constructor();
        private getItem;
        private findItem;
        add(delayInMs: number, repeat: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        addLoop(delayInMs: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        callLater(callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        callDelay(delayInMs: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        callBy24Fps(callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        exists(callback: (...args: any[]) => void, thisObj: any): boolean;
        remove(callback: (...args: any[]) => void, thisObj: any): void;
        private __timer;
        get ticker(): PIXI.Ticker;
        get curTime(): number;
        advance(): void;
        setTicker(ticker: PIXI.Ticker): void;
    }
}
declare namespace fgui {
    class GTree extends GList {
        treeNodeRender: (node: GTreeNode, obj: GComponent) => void;
        treeNodeWillExpand: (node: GTreeNode, expanded: boolean) => void;
        private _indent;
        private _clickToExpand;
        private _rootNode;
        private _expandedStatusInEvt;
        private static helperIntList;
        constructor();
        get rootNode(): GTreeNode;
        get indent(): number;
        set indent(value: number);
        get clickToExpand(): number;
        set clickToExpand(value: number);
        getSelectedNode(): GTreeNode;
        getSelectedNodes(result?: Array<GTreeNode>): Array<GTreeNode>;
        selectNode(node: GTreeNode, scrollItToView?: boolean): void;
        unselectNode(node: GTreeNode): void;
        expandAll(folderNode?: GTreeNode): void;
        collapseAll(folderNode?: GTreeNode): void;
        private createCell;
        _afterInserted(node: GTreeNode): void;
        private getInsertIndexForNode;
        _afterRemoved(node: GTreeNode): void;
        _afterExpanded(node: GTreeNode): void;
        _afterCollapsed(node: GTreeNode): void;
        _afterMoved(node: GTreeNode): void;
        private getFolderEndIndex;
        private checkChildren;
        private hideFolderNode;
        private removeNode;
        private __cellMouseDown;
        private __expandedStateChanged;
        setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void;
        protected readItems(buffer: ByteBuffer): void;
    }
}
declare namespace fgui {
    class GTreeNode {
        data: any;
        private _parent;
        private _children;
        private _expanded;
        private _level;
        private _tree;
        _cell: GComponent;
        _resURL: string;
        constructor(hasChild: boolean, resURL?: string);
        set expanded(value: boolean);
        get expanded(): boolean;
        get isFolder(): boolean;
        get parent(): GTreeNode;
        get text(): string;
        set text(value: string);
        get icon(): string;
        set icon(value: string);
        get cell(): GComponent;
        get level(): number;
        _setLevel(value: number): void;
        addChild(child: GTreeNode): GTreeNode;
        addChildAt(child: GTreeNode, index: number): GTreeNode;
        removeChild(child: GTreeNode): GTreeNode;
        removeChildAt(index: number): GTreeNode;
        removeChildren(beginIndex?: number, endIndex?: number): void;
        getChildAt(index: number): GTreeNode;
        getChildIndex(child: GTreeNode): number;
        getPrevSibling(): GTreeNode;
        getNextSibling(): GTreeNode;
        setChildIndex(child: GTreeNode, index: number): void;
        swapChildren(child1: GTreeNode, child2: GTreeNode): void;
        swapChildrenAt(index1: number, index2: number): void;
        get numChildren(): number;
        expandToRoot(): void;
        get tree(): GTree;
        _setTree(value: GTree): void;
    }
}
declare namespace fgui {
    class PopupMenu {
        protected _contentPane: GComponent;
        protected _list: GList;
        constructor(resourceURL?: string);
        dispose(): void;
        addItem(caption: string, handler?: Function): GButton;
        addItemAt(caption: string, index: number, handler?: Function): GButton;
        addSeperator(): void;
        getItemName(index: number): string;
        setItemText(name: string, caption: string): void;
        setItemVisible(name: string, visible: boolean): void;
        setItemGrayed(name: string, grayed: boolean): void;
        setItemCheckable(name: string, checkable: boolean): void;
        setItemChecked(name: string, checked: boolean): void;
        isItemChecked(name: string): boolean;
        removeItem(name: string): boolean;
        clearItems(): void;
        get itemCount(): Number;
        get contentPane(): GComponent;
        get list(): GList;
        show(target?: GObject, dir?: PopupDirection): void;
        private _clickItem;
        private _delayClickItem;
        private _addedToStage;
    }
}
declare module fgui {
    class RelationItem {
        private _owner;
        private _target;
        private _defs;
        private _targetX;
        private _targetY;
        private _targetWidth;
        private _targetHeight;
        constructor(owner: GObject);
        get owner(): GObject;
        set target(value: GObject);
        get target(): GObject;
        add(relationType: number, usePercent: boolean): void;
        internalAdd(relationType: number, usePercent: boolean): void;
        remove(relationType?: number): void;
        copyFrom(source: RelationItem): void;
        dispose(): void;
        get isEmpty(): boolean;
        applyOnSelfResized(dWidth: number, dHeight: number, applyPivot: boolean): void;
        private applyOnXYChanged;
        private applyOnSizeChanged;
        private addRefTarget;
        private releaseRefTarget;
        private __targetXYChanged;
        private __targetSizeChanged;
        private __targetSizeWillChange;
    }
    class RelationDef {
        percent: boolean;
        type: number;
        axis: number;
        constructor();
        copyFrom(source: RelationDef): void;
    }
}
declare module fgui {
    class Relations {
        private _owner;
        private _items;
        handling: GObject;
        sizeDirty: boolean;
        constructor(owner: GObject);
        add(target: GObject, relationType: number, usePercent?: boolean): void;
        remove(target: GObject, relationType?: number): void;
        contains(target: GObject): boolean;
        clearFor(target: GObject): void;
        clearAll(): void;
        copyFrom(source: Relations): void;
        dispose(): void;
        onOwnerSizeChanged(dWidth: number, dHeight: number, applyPivot: boolean): void;
        ensureRelationsSizeCorrect(): void;
        get empty(): boolean;
        setup(buffer: ByteBuffer, parentToChild: boolean): void;
    }
}
declare namespace fgui {
    class ScrollPane extends PIXI.utils.EventEmitter {
        private static _easeTypeFunc;
        private _owner;
        private _maskContainer;
        private _container;
        private _alignContainer;
        private _scrollType;
        private _scrollStep;
        private _mouseWheelSpeed;
        private _decelerationRate;
        private _scrollBarMargin;
        private _bouncebackEffect;
        private _touchEffect;
        private _scrollBarDisplayAuto;
        private _vScrollNone;
        private _hScrollNone;
        private _needRefresh;
        private _refreshBarAxis;
        private _displayOnLeft;
        private _snapToItem;
        _displayInDemand: boolean;
        private _mouseWheelEnabled;
        private _pageMode;
        private _inertiaDisabled;
        private _xPos;
        private _yPos;
        private _viewSize;
        private _contentSize;
        private _overlapSize;
        private _pageSize;
        private _containerPos;
        private _beginTouchPos;
        private _lastTouchPos;
        private _lastTouchGlobalPos;
        private _velocity;
        private _velocityScale;
        private _lastMoveTime;
        private _isHoldAreaDone;
        private _aniFlag;
        private _scrollBarVisible;
        private _headerLockedSize;
        private _footerLockedSize;
        private _refreshEventDispatching;
        private _tweening;
        private _tweenTime;
        private _tweenDuration;
        private _tweenStart;
        private _tweenChange;
        private _pageController;
        private _hzScrollBar;
        private _vtScrollBar;
        private _header;
        private _footer;
        private _isDragging;
        static draggingPane: ScrollPane;
        private static _gestureFlag;
        private static sHelperPoint;
        private static sHelperRect;
        private static sEndPos;
        private static sOldChange;
        static SCROLL: string;
        static SCROLL_END: string;
        static PULL_DOWN_RELEASE: string;
        static PULL_UP_RELEASE: string;
        static TWEEN_DEFAULT_DURATION: number;
        static TWEEN_MANUALLY_SET_DURATION: number;
        static PULL_DIST_RATIO: number;
        /**@internal */
        _loop: number;
        _floating: boolean;
        constructor(owner: GComponent);
        setup(buffer: ByteBuffer): void;
        dispose(): void;
        get owner(): GComponent;
        get horzScrollBar(): GScrollBar;
        get hzScrollBar(): GScrollBar;
        get vertScrollBar(): GScrollBar;
        get vtScrollBar(): GScrollBar;
        get header(): GComponent;
        get footer(): GComponent;
        get bouncebackEffect(): boolean;
        set bouncebackEffect(sc: boolean);
        get touchEffect(): boolean;
        set touchEffect(sc: boolean);
        set scrollSpeed(val: number);
        get scrollSpeed(): number;
        get snapToItem(): boolean;
        set snapToItem(value: boolean);
        get mouseWheelEnabled(): boolean;
        set mouseWheelEnabled(value: boolean);
        get decelerationRate(): number;
        set decelerationRate(value: number);
        get percX(): number;
        set percX(value: number);
        setPercX(value: number, ani?: boolean): void;
        get percY(): number;
        set percY(value: number);
        setPercY(value: number, ani?: boolean): void;
        get posX(): number;
        set posX(value: number);
        setPosX(value: number, ani?: boolean): void;
        get posY(): number;
        set posY(value: number);
        setPosY(value: number, ani?: boolean): void;
        get contentWidth(): number;
        get contentHeight(): number;
        get viewWidth(): number;
        set viewWidth(value: number);
        get viewHeight(): number;
        set viewHeight(value: number);
        get currentPageX(): number;
        set currentPageX(value: number);
        get currentPageY(): number;
        set currentPageY(value: number);
        get isBottomMost(): boolean;
        get isRightMost(): boolean;
        get pageController(): Controller;
        set pageController(value: Controller);
        get scrollingPosX(): number;
        get scrollingPosY(): number;
        scrollTop(ani?: boolean): void;
        scrollBottom(ani?: boolean): void;
        scrollUp(ratio?: number, ani?: boolean): void;
        scrollDown(ratio?: number, ani?: boolean): void;
        scrollLeft(ratio?: number, ani?: boolean): void;
        scrollRight(ratio?: number, ani?: boolean): void;
        get scrollStep(): number;
        set scrollStep(v: number);
        scrollToView(target: Object, ani?: boolean, snapToFirst?: boolean): void;
        isChildInView(obj: GObject): boolean;
        cancelDragging(): void;
        get isDragging(): boolean;
        lockHeader(size: number): void;
        lockFooter(size: number): void;
        /**
         * @internal
         */
        onOwnerSizeChanged(): void;
        /**
         * @internal
         */
        handleControllerChanged(c: Controller): void;
        private updatePageController;
        /**
         * @internal
         */
        adjustMaskContainer(): void;
        setSize(width: number, height: number): void;
        setContentSize(w: number, h: number): void;
        /**
         * @internal
         */
        changeContentSizeOnScrolling(deltaWidth: number, deltaHeight: number, deltaPosX: number, deltaPosY: number): void;
        private handleSizeChanged;
        private posChanged;
        private refresh;
        private refresh2;
        private syncScrollBar;
        private _mouseDown;
        private _mouseMove;
        private _mouseUp;
        private _click;
        private _mouseWheel;
        private _rollOver;
        private _rollOut;
        private showScrollBar;
        private setScrollBarVisible;
        private getLoopPartSize;
        private loopCheckingCurrent;
        private loopCheckingTarget;
        private loopCheckingTarget2;
        private loopCheckingNewPos;
        private alignPosition;
        private alignByPage;
        private updateTargetAndDuration;
        private updateTargetAndDuration2;
        private fixDuration;
        private killTween;
        private checkRefreshBar;
        private tweenUpdate;
        private runTween;
    }
}
declare module fgui {
    class Transition {
        name: string;
        private _owner;
        private _ownerBaseX;
        private _ownerBaseY;
        private _items;
        private _totalTimes;
        private _totalTasks;
        private _playing;
        private _paused;
        private _onComplete;
        private _onCompleteCaller;
        private _onCompleteParam;
        private _options;
        private _reversed;
        private _totalDuration;
        private _autoPlay;
        private _autoPlayTimes;
        private _autoPlayDelay;
        private _timeScale;
        private _startTime;
        private _endTime;
        static OPTION_IGNORE_DISPLAY_CONTROLLER: number;
        static OPTION_AUTO_STOP_DISABLED: number;
        static OPTION_AUTO_STOP_AT_END: number;
        constructor(owner: GComponent);
        play(onComplete?: Function, onCompleteObj?: any, onCompleteParam?: any, times?: number, delay?: number, startTime?: number, endTime?: number): void;
        playReverse(onComplete?: Function, onCompleteObj?: any, onCompleteParam?: any, times?: number, delay?: number): void;
        changePlayTimes(value: number): void;
        setAutoPlay(value: boolean, times?: number, delay?: number): void;
        private _play;
        stop(setToComplete?: boolean, processCallback?: boolean): void;
        private stopItem;
        setPaused(paused: boolean): void;
        dispose(): void;
        get playing(): boolean;
        setValue(label: string, ...args: any[]): void;
        setHook(label: string, callback: Function, caller: any): void;
        clearHooks(): void;
        setTarget(label: string, newTarget: GObject): void;
        setDuration(label: string, value: number): void;
        getLabelTime(label: string): number;
        get timeScale(): number;
        set timeScale(value: number);
        updateFromRelations(targetId: string, dx: number, dy: number): void;
        onOwnerAddedToStage(): void;
        onOwnerRemovedFromStage(): void;
        private onDelayedPlay;
        private internalPlay;
        private playItem;
        private skipAnimations;
        private onDelayedPlayItem;
        private onTweenStart;
        private onTweenUpdate;
        private onTweenComplete;
        private onPlayTransCompleted;
        private callHook;
        private checkAllComplete;
        private applyValue;
        setup(buffer: ByteBuffer): void;
        private decodeValue;
    }
}
declare module fgui {
    class TranslationHelper {
        static strings: Object;
        static loadFromXML(source: string): void;
        static translateComponent(item: PackageItem): void;
    }
}
declare namespace fgui {
    const version = "1.0.0";
}
declare namespace fgui {
    class Window extends GComponent {
        private _contentPane;
        private _modalWaitPane;
        private _closeButton;
        private _dragArea;
        private _contentArea;
        private _frame;
        private _modal;
        private _uiSources;
        private _inited;
        private _loading;
        protected _requestingCmd: number;
        bringToFrontOnClick: boolean;
        constructor();
        addUISource(source: IUISource): void;
        set contentPane(val: GComponent);
        get contentPane(): GComponent;
        get frame(): GComponent;
        get closeButton(): GObject;
        set closeButton(value: GObject);
        get dragArea(): GObject;
        set dragArea(value: GObject);
        get contentArea(): GObject;
        set contentArea(value: GObject);
        show(): void;
        showOn(root: GRoot): void;
        hide(): void;
        hideImmediately(): void;
        centerOn(r: GRoot, autoUpdate?: boolean): void;
        toggleVisible(): void;
        get isShowing(): boolean;
        get isTop(): boolean;
        get modal(): boolean;
        set modal(val: boolean);
        bringToFront(): void;
        showModalWait(msg?: string, cmd?: number): void;
        protected layoutModalWaitPane(msg?: string): void;
        closeModalWait(cmd?: number): boolean;
        get modalWaiting(): boolean;
        init(): void;
        protected onInit(): void;
        protected onShown(): void;
        protected onHide(): void;
        protected doShowAnimation(): void;
        protected doHideAnimation(): void;
        private _uiLoadComplete;
        private _init;
        dispose(): void;
        protected closeEventHandler(evt: PIXI.interaction.InteractionEvent): void;
        private _onShown;
        private _onHidden;
        private _mouseDown;
        private _dragStart;
    }
}
declare namespace fgui.pixi_extend {
    class InteractionManager extends PIXI.interaction.InteractionManager {
        stageRotation: number;
        stageScaleX: number;
        stageScaleY: number;
        constructor(renderer: PIXI.Renderer, options?: {
            autoPreventDefault?: boolean;
            interactionFrequency?: number;
            useSystemTicker?: number;
        });
        mapPositionToPoint(point: PIXI.Point, x: number, y: number): void;
    }
}
declare namespace fgui.pixi_extend {
    class NineSlicePlane extends PIXI.NineSlicePlane {
        protected $flipX: boolean;
        protected $flipY: boolean;
        updateHorizontalVertices(): void;
        updateVerticalVertices(): void;
        _refresh(): void;
        get flipX(): boolean;
        get flipY(): boolean;
        set flipX(v: boolean);
        set flipY(v: boolean);
    }
}
declare namespace fgui.pixi_extend {
    class Sprite extends PIXI.Sprite {
        protected _flipX: boolean;
        protected _flipY: boolean;
        protected _frameId: string;
        protected static _cachedTexturePool: {
            [key: string]: {
                refCount: number;
                texture: PIXI.Texture;
            };
        };
        constructor(frameId?: string, tex?: PIXI.Texture);
        get flipX(): boolean;
        get flipY(): boolean;
        set flipX(v: boolean);
        set flipY(v: boolean);
        private combineCacheId;
        private getTextureFromCache;
        private tryRemoveTextureCache;
        private createFlippedTexture;
        private updateUvs;
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
    }
}
declare namespace fgui {
    /**global ui configuration */
    class UIConfig {
        /**default font name of your project.
         * 默认字体
         */
        static defaultFont: string;
        /** resource used by Window.showModalWait to lock the certain window with modal mode.*/
        static windowModalWaiting: string;
        /** resource used by GRoot.showModalWait to lock the global screen with modal mode. */
        static globalModalWaiting: string;
        /** modal layer background configuration. */
        static modalLayerColor: number;
        static modalLayerAlpha: number;
        static buttonSound: string;
        static buttonSoundVolumeScale: number;
        /** global scrollbar name */
        static horizontalScrollBar: string;
        static verticalScrollBar: string;
        static defaultScrollStep: number;
        /** Deceleration ratio of scrollpane when its in touch dragging.*/
        static defaultScrollDecelerationRate: number;
        /** default scrollbar display mode. It's recommended to set ScrollBarDisplayType.Visible for Desktop environment and ScrollBarDisplayType.Auto for mobile environment.*/
        static defaultScrollBarDisplay: number;
        /** allow user to drag the content of a container. Set to true for mobile is recommended.*/
        static defaultScrollTouchEffect: boolean;
        /** enable bounce effect when the scrolling reaches to the edge of a container. Set to true for mobile is recommended.*/
        static defaultScrollBounceEffect: boolean;
        /** global PopupMenu name.*/
        static popupMenu: string;
        /** seperator resource name to be created to seperate each items on the global PopupMenu.*/
        static popupMenuSeperator: string;
        /** the error symbol for the error status of the GLoader object.*/
        static loaderErrorSign: string;
        /** the widget name to create global popup tip-box to contain some messages.*/
        static tooltipsWin: string;
        /** maximum count of items to be displayed in the visible viewport of the GCombobox.*/
        static defaultComboBoxVisibleItemCount: number;
        /** the finger moving threshold in pixel to trigger the scrolling action.*/
        static touchScrollSensitivity: number;
        /** the finger moving threshold in pixel to trigger the dragging event.*/
        static touchDragSensitivity: number;
        /** auto bring the window you clicked to the topmost level of the GRoot children list.*/
        static bringWindowToFrontOnClick: boolean;
        static frameTimeForAsyncUIConstruction: number;
    }
}
declare namespace fgui {
    /** Action 类型定义 */
    enum eActionType {
        /** 播放动效 */
        PlayTransitionAction = 0,
        /** 改变页面 */
        ChangePageAction = 1
    }
    class Action {
        fromPage: string[];
        toPage: string[];
        static createAction(type: number): Action;
        static create(type: string): Action;
        execute(controller: Controller, prevPage: string, curPage: string): void;
        protected enter(controller: Controller): void;
        protected leave(controller: Controller): void;
        /**
         * @hide
         * @param buffer package 包中对应的Action对象属性字节流
         */
        setup(buffer: ByteBuffer): void;
        /**
         * v1 版本
         * @hide
         * @param xml 属性
         */
        setupv1(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    /**
     * 改变页面 Action
     */
    class ChangePageAction extends Action {
        objectId: string;
        controllerName: string;
        targetPage: string;
        /**
         * @override Action.enter
         * @param controller
         */
        protected enter(controller: Controller): void;
        /**
         * @hide
         * @override Action.setup
         * @param buffer 参数流
         */
        setup(buffer: ByteBuffer): void;
    }
}
declare namespace fgui {
    class PageOption {
        private _controller;
        private _id;
        set controller(val: Controller);
        set name(pageName: string);
        get name(): string;
        set index(pageIndex: number);
        get index(): number;
        clear(): void;
        set id(id: string);
        get id(): string;
    }
}
declare namespace fgui {
    class PlayTransitionAction extends Action {
        transitionName: string;
        playTimes: number;
        delay: number;
        stopOnExit: boolean;
        private _currentTransition;
        protected enter(controller: Controller): void;
        protected leave(controller: Controller): void;
        setup(buffer: ByteBuffer): void;
    }
}
declare namespace fgui {
    class BMGlyph {
        x: number;
        y: number;
        offsetX: number;
        offsetY: number;
        width: number;
        height: number;
        advance: number;
        lineHeight: number;
        channel: number;
        texture: PIXI.Texture;
    }
}
declare namespace fgui {
    type GlyphDictionary = {
        [key: string]: BMGlyph;
    };
    class BitmapFont {
        id: string;
        size: number;
        ttf: boolean;
        glyphs: GlyphDictionary;
        resizable: boolean;
        colorable: boolean;
        tint: boolean;
        constructor();
    }
}
declare namespace fgui {
    /**for webgl only */
    class FillSprite extends PIXI.Sprite {
        protected _fillMode: TextureFillMode;
        protected _fillBegin: TextureFillBegin;
        protected _fillDir: TextureFillDirection;
        protected _fillAmount: number;
        protected _flip: FlipType;
        protected _percent: number;
        constructor(texture?: PIXI.Texture);
        get flip(): FlipType;
        set flip(v: FlipType);
        get fillAmount(): number;
        set fillAmount(n: number);
        get fillBegin(): TextureFillBegin;
        set fillBegin(n: TextureFillBegin);
        get fillMode(): TextureFillMode;
        set fillMode(n: TextureFillMode);
        get fillDirection(): TextureFillDirection;
        set fillDirection(n: TextureFillDirection);
        private checkAndFixFillBegin;
        set amount(v: number);
        get amount(): number;
    }
}
declare namespace fgui {
    /**
     * 动画帧
     */
    class Frame {
        /** 延时 */
        addDelay: number;
        /** 纹理 */
        texture: PIXI.Texture;
    }
}
declare namespace fgui {
    class HTMLInput {
        private _input;
        private _singleLine;
        private _multiLine;
        private _curEle;
        /**@internal */
        _wrapper: HTMLDivElement;
        private _delegateDiv;
        private _canvas;
        /**@internal */
        _requestToShow: boolean;
        /**@internal */
        _scaleX: number;
        /**@internal */
        _scaleY: number;
        static isTyping: boolean;
        private constructor();
        private static _instance;
        static get inst(): HTMLInput;
        initialize(container: HTMLElement, view: HTMLCanvasElement): void;
        isInputOn(): boolean;
        private canvasClickHandler;
        isInputShown(): boolean;
        isCurrentInput(input: InputElement): boolean;
        private initDomPos;
        private setTransform;
        /**@internal */
        updateSize(sx: number, sy: number): void;
        private initInputElement;
        show(): void;
        disconnect(ele: InputElement): void;
        clearAttributes(obj: any): void;
        clearInputElement(): void;
        requestInput(ele: InputElement): HTMLInputElement | HTMLTextAreaElement;
    }
}
declare namespace fgui {
    interface IUIObject {
        UIOwner: GObject;
    }
    let isUIObject: (obj: any) => obj is IUIObject;
}
declare namespace fgui {
    interface IUISource {
        fileName: string;
        loaded: boolean;
        load(callback: () => void, thisObj: any): void;
    }
}
declare namespace fgui {
    class InputElement extends PIXI.utils.EventEmitter {
        private htmlInput;
        private _requestToShow;
        private inputElement;
        private inputDiv;
        private _scaleX;
        private _scaleY;
        private textValue;
        private colorValue;
        protected _textfield: GTextInput;
        constructor(tf: GTextInput);
        /**@internal */
        _addToStage(): void;
        private initElement;
        get textField(): GTextField;
        /**@internal */
        _show(): void;
        onBlurHandler(): void;
        /**@internal */
        _hide(): void;
        get text(): string;
        set text(value: string);
        setColor(value: number): void;
        /**@internal */
        _onBlur(): void;
        onInputHandler(): void;
        private setAreaHeight;
        private getVAlignFactor;
        onClickHandler(e: Event): void;
        onDisconnect(): void;
        private setElementStyle;
        private _attrsCache;
        setAttribute(name: string, value: string): void;
        getAttribute(name: string): string;
        /**@internal */
        _removeFromStage(): void;
        resetInput(): void;
    }
}
declare namespace fgui {
    class MovieClip extends PIXI.Sprite implements IUIObject {
        /** @hide 间隔 */
        interval: number;
        swing: boolean;
        repeatDelay: number;
        /** @hide 是否在播放 */
        private _playing;
        /** @hide 帧数量 */
        private _frameCount;
        /** @hide 帧数据 */
        private _frames;
        /** @hide 当前帧 */
        private _currentFrame;
        /** @hide 状态 */
        private _status;
        /** @hide 动画设置 */
        private _settings;
        /** @hide 帧数据 */
        private data;
        /** @hide 所属的UI对象 */
        UIOwner: GObject;
        fillMethod: number;
        fillOrigin: number;
        fillClockwise: boolean;
        fillAmount: number;
        private _frameElapsed;
        constructor(owner: GObject);
        /** 获取帧信息 */
        get frames(): Frame[];
        /** 设置帧信息 */
        set frames(value: Frame[]);
        get frameCount(): number;
        /** 获取当前帧 */
        get currentFrame(): number;
        /** 设置当前的帧 */
        set currentFrame(value: number);
        /** 是否正在播放 */
        get playing(): boolean;
        /** 是否正在播放 */
        set playing(value: boolean);
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
        setPlaySettings(...args: any[]): void;
        private update;
        private __playEnd;
        private setFrame;
        private added;
        private removed;
        destroy(): void;
    }
}
declare namespace fgui {
    class MovieClipData {
        reachesEnd: boolean;
        reversed: boolean;
        repeatedCount: number;
        private _curFrame;
        private _lastTime;
        private _curFrameDelay;
        constructor();
        update(mc: MovieClip): void;
        get currentFrame(): number;
        set currentFrame(value: number);
        rewind(): void;
        reset(): void;
        copy(src: MovieClipData): void;
    }
}
declare namespace fgui {
    interface MovieClipSettings {
        startFrame?: number;
        endFrame?: number;
        repeatCount?: number;
        loopEndAt?: number;
        endCallback?: (target?: MovieClip) => void;
        endCallbackContext?: any;
        [key: string]: any;
    }
    class DefaultMovieClipSettings implements MovieClipSettings {
        /**the first frame number to start to play */
        startFrame: number;
        /**the end frame the playing will end at, -1 means to the tail */
        endFrame: number;
        /**play count, 0 means endeless */
        repeatCount: number;
        /**once the repeated playing completes, the playing will end at, -1 means to the tail */
        loopEndAt: number;
        /**complete callback handler */
        endCallback: (target?: MovieClip) => void;
        /**context object for the callback function */
        endCallbackContext: any;
        /**modify the current settings without whole parameters provided */
        mix(other: MovieClipSettings): MovieClipSettings;
    }
}
declare namespace fgui {
    class UIContainer extends PIXI.Container implements IUIObject {
        protected _scrollRect: PIXI.Rectangle;
        protected _rectMask: PIXI.Graphics;
        UIOwner: GObject;
        constructor(owner?: GObject);
        get scrollRect(): PIXI.Rectangle;
        set scrollRect(rect: PIXI.Rectangle);
    }
}
declare namespace fgui {
    class UIImage extends PIXI.Container implements IUIObject {
        UIOwner: GObject;
        protected _disp: PIXI.TilingSprite | pixi_extend.NineSlicePlane | pixi_extend.Sprite;
        playing: boolean;
        frame: number;
        protected _fillMethod: FillMethod;
        protected _fillOrigin: number;
        protected _fillClockwise: number;
        protected _fillAmount: number;
        fillMethod: number;
        fillOrigin: number;
        fillClockwise: boolean;
        fillAmount: number;
        smoothing: boolean;
        constructor(owner?: GObject);
        /**@internal */
        initDisp(item?: PackageItem): void;
        get tint(): number;
        set tint(v: number);
        get height(): number;
        set height(v: number);
        get width(): number;
        set width(v: number);
        get texture(): PIXI.Texture;
        set texture(v: PIXI.Texture);
        /**
         * rect = x,y,w,h = l,t,r,b
         */
        get scale9Grid(): PIXI.Rectangle;
        /**
         * rect = x,y,w,h = l,t,r,b
         */
        set scale9Grid(rect: PIXI.Rectangle);
        get tiledSlices(): number;
        set tiledSlices(flags: number);
        get flipX(): boolean;
        get flipY(): boolean;
        set flipX(v: boolean);
        set flipY(v: boolean);
        destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void;
    }
}
declare namespace fgui {
    class UISprite extends PIXI.Graphics implements IUIObject {
        UIOwner: GObject;
        constructor(owner?: GObject);
    }
}
declare namespace fgui.utils {
    class DOMEventManager extends PIXI.utils.EventEmitter {
        static inst: DOMEventManager;
        constructor();
        private notifyResizeEvents;
        private onMouseWheel;
        private retEvent;
        private lowestDelta;
        private nullLowestDeltaTimeout;
        private nullLowestDelta;
        /*******************keys*******************/
        private $pressedKeys;
        private $releasedKeys;
        private $downKeys;
        isKeyDown(key: number): boolean;
        isKeyPressed(key: number): boolean;
        isKeyReleased(key: number): boolean;
        private onWindowKeyDown;
        private onWindowKeyUp;
    }
}
declare namespace fgui {
    /**
     * 舞台方向
     */
    const enum StageOrientation {
        /** 自动 */
        AUTO = "auto",
        /** 竖屏 */
        PORTRAIT = "portrait",
        /** 横屏 */
        LANDSCAPE = "landscape"
    }
    /** 舞台缩放模式 */
    const enum StageScaleMode {
        /** 无缩放 */
        NO_SCALE = "noScale",
        /** 显示所有内容 */
        SHOW_ALL = "showAll",
        /** 无边框 */
        NO_BORDER = "noBorder",
        /** 强制缩放 */
        EXACT_FIT = "exactFit",
        /** 固定宽度 */
        FIXED_WIDTH = "fixedWidth",
        /** 固定高度 */
        FIXED_HEIGHT = "fixedHeight",
        /** 自动 */
        FIXED_AUTO = "fixedAuto"
    }
    /**
     * 舞台对齐
     */
    const enum StageAlign {
        LEFT = 0,
        CENTER = 1,
        RIGHT = 2,
        TOP = 3,
        MIDDLE = 4,
        BOTTOM = 5
    }
    interface UIStageOptions {
        scaleMode?: StageScaleMode;
        orientation?: StageOrientation;
        resolution?: number;
        designWidth: number;
        designHeight: number;
        alignV?: StageAlign;
        alignH?: StageAlign;
        fallbackWidth?: number;
        fallbackHeight?: number;
        [key: string]: string | number;
    }
    class DefaultUIStageOptions implements UIStageOptions {
        scaleMode?: StageScaleMode;
        orientation?: StageOrientation;
        resolution?: number;
        designWidth: number;
        designHeight: number;
        alignV: StageAlign;
        alignH: StageAlign;
        fallbackWidth: number;
        fallbackHeight: number;
        [key: string]: string | number;
    }
    class UIStage extends PIXI.utils.EventEmitter {
        protected _appContext: PIXI.Application;
        protected _appStage: PIXI.Container;
        protected _options: UIStageOptions;
        protected _width: number;
        protected _height: number;
        protected _scaleX: number;
        protected _scaleY: number;
        protected _canvasMatrix: PIXI.Matrix;
        offsetX: number;
        offsetY: number;
        private _sizeCalcer;
        constructor(app: PIXI.Application, stageOptions?: UIStageOptions);
        get orientation(): StageOrientation;
        get stageWidth(): number;
        get stageHeight(): number;
        get applicationContext(): PIXI.Application;
        get nativeStage(): PIXI.Container;
        get resolution(): number;
        set resolution(v: number);
        get scaleX(): number;
        get scaleY(): number;
        get designWidth(): number;
        get designHeight(): number;
        setDesignSize(width: number, height: number): void;
        protected calculateStageSize(scaleMode: string, screenWidth: number, screenHeight: number, contentWidth: number, contentHeight: number): {
            stageWidth: number;
            stageHeight: number;
            displayWidth: number;
            displayHeight: number;
        };
        /**@internal */
        updateScreenSize(): void;
        private formatData;
        dispose(): void;
    }
}
declare namespace fgui {
    class UITextField extends PIXI.Text implements IUIObject {
        UIOwner: GObject;
        protected _minHeight: number;
        protected _minHeightID: number;
        constructor(owner?: GObject);
        init(): void;
        get minHeight(): number;
        /**@internal */
        updateMinHeight(): void;
        protected updateFrame(): void;
        private internalUpdateFrame;
        get textHeight(): number;
        set textHeight(v: number);
        get textWidth(): number;
        set textWidth(v: number);
    }
}
declare namespace fgui {
    const enum DragEvent {
        START = "__dragStart",
        END = "__dragEnd",
        MOVING = "__dragMoving",
        DROP = "__dragDrop"
    }
}
declare namespace fgui {
    const enum FocusEvent {
        CHANGED = "__focusChanged"
    }
}
declare namespace fgui {
    const enum GearEvent {
        GEAR_STOP = "__gearStop"
    }
}
declare namespace fgui {
    const enum ListEvent {
        ItemClick = "__itemClick"
    }
}
declare namespace fgui {
    const enum ScrollEvent {
        SCROLL = "__scroll",
        SCROLL_END = "__scrollEnd",
        PULL_DOWN_RELEASE = "__pullDownRelease",
        PULL_UP_RELEASE = "__pullUpRelease"
    }
}
declare namespace fgui {
    const enum StateChangeEvent {
        CHANGED = "__stateChanged"
    }
}
declare namespace fgui {
    const enum TextEvent {
        LinkClick = "__linkClick",
        Change = "__textChange",
        FocusIn = "__textFocusIn",
        FocusOut = "__textFocusOut"
    }
}
declare namespace fgui.provider {
    interface IRawInflate {
    }
}
declare namespace fgui.provider {
    interface ISoundPlayer {
    }
}
declare namespace fgui {
    class GearBase<T = GObject> {
        static disableAllTweenEffect: boolean;
        protected _owner: GObject & T;
        protected _controller: Controller;
        protected _tweenConfig: GearTweenConfig;
        private static Classes;
        static create(owner: GObject, index: number): GearBase;
        constructor(owner: GObject & T);
        dispose(): void;
        get controller(): Controller;
        set controller(val: Controller);
        get tweenConfig(): GearTweenConfig;
        setup(buffer: ByteBuffer): void;
        updateFromRelations(dx: number, dy: number): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        protected init(): void;
        apply(): void;
        updateState(): void;
    }
    class GearTweenConfig {
        tween: boolean;
        easeType: number;
        duration: number;
        delay: number;
        _displayLockToken: number;
        _tweener: GTweener;
        constructor();
    }
}
declare namespace fgui {
    class GearAnimation extends GearBase<IAnimationGear> {
        private _storage;
        private _default;
        constructor(owner: GObject & IAnimationGear);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearColor extends GearBase<IColorGear> {
        private _storage;
        private _default;
        constructor(owner: GObject & IColorGear);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearDisplay extends GearBase<GObject> {
        private _visible;
        private _displayLockToken;
        pages: string[];
        constructor(owner: GObject);
        protected init(): void;
        apply(): void;
        addLock(): number;
        releaseLock(token: number): void;
        get connected(): boolean;
    }
}
declare namespace fgui {
    class GearDisplay2 extends GearBase<GObject> {
        pages: string[];
        condition: number;
        private _visible;
        constructor(owner: GObject);
        protected init(): void;
        apply(): void;
        evaluate(connected: boolean): boolean;
    }
}
declare namespace fgui {
    class GearFontSize extends GearBase {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearIcon extends GearBase<GObject> {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearLook extends GearBase<GObject> {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        private __tweenUpdate;
        private __tweenComplete;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearSize extends GearBase<GObject> {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        private __tweenUpdate;
        private __tweenComplete;
        updateState(): void;
        updateFromRelations(dx: number, dy: number): void;
    }
}
declare namespace fgui {
    class GearText extends GearBase<GObject> {
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearXY extends GearBase<GObject> {
        positionsInPercent: boolean;
        private _storage;
        private _default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, buffer: ByteBuffer): void;
        addExtStatus(pageId: string, buffer: ByteBuffer): void;
        apply(): void;
        private __tweenUpdate;
        private __tweenComplete;
        updateState(): void;
        updateFromRelations(dx: number, dy: number): void;
    }
}
declare namespace fgui {
    interface IAnimationGear {
        playing: boolean;
        frame: number;
    }
    let isAnimationGear: (obj: any) => obj is IAnimationGear;
}
declare namespace fgui {
    interface IColorGear {
        color: number;
    }
    let isColorGear: (obj: any) => obj is IColorGear;
}
declare namespace fgui.provider {
    /**
     * 资源提供者
     */
    interface IResourceProvider {
        getResource<T>(key: string): T;
    }
}
declare namespace fgui {
    class DisplayListItem {
        packageItem: PackageItem;
        type: string;
        desc: utils.XmlNode;
        listItemCount: number;
        constructor(packageItem: PackageItem, type: string);
    }
}
declare namespace fgui {
    class PackageItem {
        owner: UIPackage;
        type: PackageItemType;
        objectType: ObjectType;
        id: string;
        name: string;
        width: number;
        height: number;
        file: string;
        decoded: boolean;
        rawData: ByteBuffer;
        highResolution: Array<string>;
        branches: Array<string>;
        scale9Grid: PIXI.Rectangle;
        scaleByTile: boolean;
        tileGridIndice: number;
        tiledSlices: number;
        smoothing: boolean;
        texture: PIXI.Texture;
        pixelHitTestData: PixelHitTestData;
        interval: number;
        repeatDelay: number;
        swing: boolean;
        frames: Frame[];
        componentData: utils.XmlNode;
        displayList: DisplayListItem[];
        extensionType: {
            new (): GComponent;
        };
        bitmapFont: BitmapFont;
        load(): AssetTypes;
        getBranch(): PackageItem;
        getHighResolution(): PackageItem;
        toString(): string;
    }
}
declare namespace fgui {
    type ExtensionClassDictionary = {
        [key: string]: new () => GComponent;
    };
    export class UIObjectFactory {
        private static packageItemExtensions;
        static extensions: ExtensionClassDictionary;
        private static loaderType;
        private static loaderExtension;
        static setExtension(url: string, type: {
            new (): GComponent;
        }): void;
        static setPackageItemExtension(url: string, type: {
            new (): GComponent;
        }): void;
        static setLoaderExtension(type: {
            new (): GLoader;
        }): void;
        static resolvePackageItemExtension(pi: PackageItem): void;
        static newObject(pi: PackageItem, userClass?: {
            new (): GObject;
        }): GObject;
        static newObject2(type: ObjectType): GObject;
        /**@internal */
        static newObjectDirectly(type: string): GObject;
        static newObjectv1(pi: PackageItem): GObject;
    }
    export {};
}
declare namespace fgui {
    type AssetTypes = PIXI.Texture | BitmapFont | Frame[] | utils.XmlNode | PIXI.LoaderResource;
    class UIPackage {
        private _id;
        private _name;
        private _items;
        private _itemsById;
        private _itemsByName;
        private _resKey;
        private _customId;
        private _atlasConfigs;
        /** @hide 资源组名称 */
        private _assetGroupName;
        private _dependencies;
        private _branches;
        _branchIndex: number;
        /**@internal */
        static _constructing: number;
        private static _bitmapFonts;
        private static _stringsSource;
        private static _instById;
        private static _instByName;
        private static _branch;
        private static _vars;
        constructor();
        get id(): string;
        get name(): string;
        get customId(): string;
        set customId(value: string);
        static getById(id: string): UIPackage;
        static getByName(name: string): UIPackage;
        static get branch(): string;
        static set branch(value: string);
        static getVar(key: string): any;
        static setVar(key: string, value: any): void;
        /**
         * 添加资源包，添加之前，资源包必须已经下载完成，目标不支持内部加载。
         * @param resKey 包名称
         * @param assetGroupName 所在资源组，默认为 utils.AssetManager.DEFAULT_GROUP
         * @param decompressor 解压函数，如果使用压缩功能，需要提供
         */
        static addPackage(resKey: string, assetGroupName?: string, decompressor?: Decompressor): UIPackage;
        private loadPackage;
        static removePackage(packageIdOrName: string): void;
        static createObject(pkgName: string, resName: string, userClass?: {
            new (): GObject;
        }): GObject;
        static createObjectFromURL(url: string, userClass?: {
            new (): GObject;
        }): GObject;
        static getItemURL(pkgName: string, resName: string): string;
        static getItemByURL(url: string): PackageItem;
        static getBitmapFontByURL(url: string): BitmapFont;
        static setStringsSource(source: string): void;
        /**
         * format the URL from old version to new version
         * @param url url with old version format
         */
        static normalizeURL(url: string): string;
        dispose(): void;
        createObject(resName: string, userClass?: {
            new (): GObject;
        }): GObject;
        internalCreateObject(item: PackageItem, userClass?: {
            new (): GObject;
        }): GObject;
        getItemById(itemId: string): PackageItem;
        getItemByName(resName: string): PackageItem;
        getItemAssetByName(resName: string): AssetTypes;
        getItemAsset(item: PackageItem): any;
        private createSpriteTexture;
        private loadComponentChildren;
        private loadComponentTranslation;
        private loadMovieClip;
        private loadFont;
    }
}
declare namespace fgui.the3rd.ieee754 {
    function read(buffer: Uint8Array | ArrayBuffer, offset: number, isLE: boolean, mLen: number, nBytes: number): number;
    function write(buffer: Uint8Array | ArrayBuffer, value: number, offset: number, isLE: boolean, mLen: number, nBytes: number): void;
}
declare module fgui {
    class EaseManager {
        private static _PiOver2;
        private static _TwoPi;
        static evaluate(easeType: number, time: number, duration: number, overshootOrAmplitude: number, period: number): number;
    }
}
declare module fgui {
    class EaseType {
        static Linear: number;
        static SineIn: number;
        static SineOut: number;
        static SineInOut: number;
        static QuadIn: number;
        static QuadOut: number;
        static QuadInOut: number;
        static CubicIn: number;
        static CubicOut: number;
        static CubicInOut: number;
        static QuartIn: number;
        static QuartOut: number;
        static QuartInOut: number;
        static QuintIn: number;
        static QuintOut: number;
        static QuintInOut: number;
        static ExpoIn: number;
        static ExpoOut: number;
        static ExpoInOut: number;
        static CircIn: number;
        static CircOut: number;
        static CircInOut: number;
        static ElasticIn: number;
        static ElasticOut: number;
        static ElasticInOut: number;
        static BackIn: number;
        static BackOut: number;
        static BackInOut: number;
        static BounceIn: number;
        static BounceOut: number;
        static BounceInOut: number;
        static Custom: number;
    }
}
declare namespace fgui {
    class GPath {
        private _segments;
        private _points;
        private _fullLength;
        private static helperPoints;
        constructor();
        get length(): number;
        create2(pt1: GPathPoint, pt2: GPathPoint, pt3?: GPathPoint, pt4?: GPathPoint): void;
        create(points: Array<GPathPoint>): void;
        private createSplineSegment;
        clear(): void;
        getPointAt(t: number, result?: PIXI.Point): PIXI.Point;
        get segmentCount(): number;
        getAnchorsInSegment(segmentIndex: number, points?: Array<PIXI.Point>): Array<PIXI.Point>;
        getPointsInSegment(segmentIndex: number, t0: number, t1: number, points?: Array<PIXI.Point>, ts?: Array<number>, pointDensity?: number): Array<PIXI.Point>;
        getAllPoints(points?: Array<PIXI.Point>, ts?: Array<number>, pointDensity?: number): Array<PIXI.Point>;
        private onCRSplineCurve;
        private onBezierCurve;
    }
}
declare namespace fgui {
    enum CurveType {
        CRSpline = 0,
        Bezier = 1,
        CubicBezier = 2,
        Straight = 3
    }
    class GPathPoint {
        x: number;
        y: number;
        control1_x: number;
        control1_y: number;
        control2_x: number;
        control2_y: number;
        curveType: number;
        constructor();
        static newPoint(x?: number, y?: number, curveType?: number): GPathPoint;
        static newBezierPoint(x?: number, y?: number, control1_x?: number, control1_y?: number): GPathPoint;
        static newCubicBezierPoint(x?: number, y?: number, control1_x?: number, control1_y?: number, control2_x?: number, control2_y?: number): GPathPoint;
        clone(): GPathPoint;
    }
}
declare namespace fgui {
    class GTween {
        static catchCallbackExceptions: boolean;
        static to(start: number, end: number, duration: number): GTweener;
        static to2(start: number, start2: number, end: number, end2: number, duration: number): GTweener;
        static to3(start: number, start2: number, start3: number, end: number, end2: number, end3: number, duration: number): GTweener;
        static to4(start: number, start2: number, start3: number, start4: number, end: number, end2: number, end3: number, end4: number, duration: number): GTweener;
        static toColor(start: number, end: number, duration: number): GTweener;
        static delayedCall(delay: number): GTweener;
        static shake(startX: number, startY: number, amplitude: number, duration: number): GTweener;
        static isTweening(target: Object, propType?: any): Boolean;
        static kill(target: Object, complete?: boolean, propType?: any): void;
        static getTween(target: Object, propType?: any): GTweener;
    }
}
declare module fgui {
    class GTweener {
        _target: any;
        _propType: any;
        _killed: boolean;
        _paused: boolean;
        private _delay;
        private _duration;
        private _breakpoint;
        private _easeType;
        private _easeOvershootOrAmplitude;
        private _easePeriod;
        private _repeat;
        private _yoyo;
        private _timeScale;
        private _snapping;
        private _userData;
        private _path;
        private _onUpdate;
        private _onStart;
        private _onComplete;
        private _onUpdateCaller;
        private _onStartCaller;
        private _onCompleteCaller;
        private _startValue;
        private _endValue;
        private _value;
        private _deltaValue;
        private _valueSize;
        private _started;
        private _ended;
        private _elapsedTime;
        private _normalizedTime;
        private static helperPoint;
        constructor();
        setDelay(value: number): GTweener;
        get delay(): number;
        setDuration(value: number): GTweener;
        get duration(): number;
        setBreakpoint(value: number): GTweener;
        setEase(value: number): GTweener;
        setEasePeriod(value: number): GTweener;
        setEaseOvershootOrAmplitude(value: number): GTweener;
        setRepeat(repeat: number, yoyo?: boolean): GTweener;
        get repeat(): number;
        setTimeScale(value: number): GTweener;
        setSnapping(value: boolean): GTweener;
        setTarget(value: Object, propType?: Object): GTweener;
        get target(): Object;
        setUserData(value: any): GTweener;
        get userData(): any;
        setPath(value: GPath): GTweener;
        onUpdate(callback: Function, caller: any): GTweener;
        onStart(callback: Function, caller: any): GTweener;
        onComplete(callback: Function, caller: any): GTweener;
        get startValue(): TweenValue;
        get endValue(): TweenValue;
        get value(): TweenValue;
        get deltaValue(): TweenValue;
        get normalizedTime(): number;
        get completed(): boolean;
        get allCompleted(): boolean;
        setPaused(paused: boolean): GTweener;
        /**
         * seek position of the tween, in seconds.
         */
        seek(time: number): void;
        kill(complete?: boolean): void;
        _to(start: number, end: number, duration: number): GTweener;
        _to2(start: number, start2: number, end: number, end2: number, duration: number): GTweener;
        _to3(start: number, start2: number, start3: number, end: number, end2: number, end3: number, duration: number): GTweener;
        _to4(start: number, start2: number, start3: number, start4: number, end: number, end2: number, end3: number, end4: number, duration: number): GTweener;
        _toColor(start: number, end: number, duration: number): GTweener;
        _shake(startX: number, startY: number, amplitude: number, duration: number): GTweener;
        _init(): void;
        _reset(): void;
        _update(dt: number): void;
        private update;
        private callStartCallback;
        private callUpdateCallback;
        private callCompleteCallback;
    }
}
declare module fgui {
    class TweenManager {
        private static _activeTweens;
        private static _tweenerPool;
        private static _totalActiveTweens;
        private static _lastTime;
        private static _inited;
        static _ticker: PIXI.Ticker;
        static createTween(): GTweener;
        static isTweening(target: any, propType: any): boolean;
        static killTweens(target: any, completed: boolean, propType: any): boolean;
        static getTween(target: any, propType: any): GTweener;
        private static update;
    }
}
declare module fgui {
    class TweenValue {
        x: number;
        y: number;
        z: number;
        w: number;
        constructor();
        get color(): number;
        set color(value: number);
        getField(index: number): number;
        setField(index: number, value: number): void;
        setZero(): void;
    }
}
declare namespace fgui.utils {
    /**
     * https://github.com/englercj/resource-loader
     * PIXI 目前的部分接口没有提示功能，封装
     */
    type OnProgressSignal = (loader: AssetLoader, resource: PIXI.LoaderResource) => void;
    type OnErrorSignal = (errMessage: string, loader: AssetLoader, resource: PIXI.LoaderResource) => void;
    type OnLoadSignal = (loader: AssetLoader, resource: PIXI.LoaderResource) => void;
    type OnStartSignal = (loader: AssetLoader) => void;
    type OnCompleteSignal = (loader: AssetLoader, resources: PIXI.IResourceDictionary) => void;
    type MiddlewareFn = (resource: PIXI.LoaderResource, next: () => void) => void;
    type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
    type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;
    type SignalFilterFn<T> = ReplaceReturnType<T, boolean>;
    type SignalCallbackFn<T> = ReplaceReturnType<T, void>;
    interface SignalBinding<T extends Function> {
        readonly fn: SignalCallbackFn<T>;
        readonly once: boolean;
        readonly thisArg: any;
        next: SignalBinding<T> | null;
        prev: SignalBinding<T> | null;
        owner: Signal<any> | null;
        constructor(fn: SignalCallbackFn<T>, once: boolean | undefined, thisArg: any): any;
        detach(): boolean;
        dispose(): void;
    }
    interface Signal<T extends Function> {
        handlers(): SignalBinding<T>[];
        hasAny(): boolean;
        has(node: SignalBinding<T>): boolean;
        dispatch(...args: ArgumentTypes<T>): boolean;
        add(fn: SignalCallbackFn<T>, thisArg?: any): SignalBinding<T>;
        once(fn: SignalCallbackFn<T>, thisArg?: any): SignalBinding<T>;
        detach(node: SignalBinding<T>): this;
        detachAll(): this;
        filter(filter: SignalFilterFn<T>): void;
        proxy(...signals: Signal<T>[]): this;
    }
    /** 资源组 */
    type AssetGroup = {
        [key: string]: PIXI.IResourceDictionary;
    };
    /** 一个资源条目 */
    interface IAssetInfoItem {
        /**
         * 名称，如 Bag.fui 对应的资源名应该为 Bag
         */
        name: string;
        /**
         * 资源路径，如 assets/UI/Bag.fui
         */
        path: string;
    }
    /** 资源组 */
    interface IAssetItemInfoGroup {
        /**
         * 资源组名称，如 Group1
         */
        name: string;
        /**
         * 资源条目信息
         */
        items: Array<IAssetInfoItem>;
    }
    /**
     * 资源管理。
     * 目前的资源条目命名规则：文件名无后缀
     *
     */
    class AssetManager {
        /** @hide 默认资源组名称 */
        static readonly DEFAULT_GROUP: string;
        private static _inst;
        /**
         * 单例
         */
        static get inst(): AssetManager;
        /** @hide 资源组 */
        private _assetGroup;
        /** 获取资源管理 */
        get assetGroup(): AssetGroup;
        /**
         * 获取资源组
         * @param groupName 组名称，默认为 "default"
         * @return 返回组对应的资源
         */
        get(groupName?: string): PIXI.IResourceDictionary;
        /**
         * 设置资源组
         * @param groupName 资源组名称
         * @param assetDic 资源组
         * @return this
         */
        set(groupName: string, assetDic: PIXI.IResourceDictionary): this;
        /**
         * 添加资源
         * @param groupName 组名，如果已经存在组名，已经存在的将会被覆盖
         * @param assets 资源组
         * @return this
         */
        add(groupName: string, assetDic: PIXI.IResourceDictionary): this;
        /**
         * 将资源组从资源管理对象中移除，改操作不释放资源
         * @param groupName 资源组名，默认为 "default"
         * @return this
         */
        remove(groupName?: string): this;
        /**
         * 销毁资源组中的资源
         * @param groupName 资源组，默认为 "default"
         * @return this
         */
        destroyAsset(groupName?: string): this;
        /**
         * 销毁一个资源
         * @param assetDic 资源所在资源组
         * @param key 资源名称
         */
        destroyResource(assetDic: PIXI.IResourceDictionary, key?: string): void;
    }
    /**
     * PIXI 资源加载封装
     * 5.x PIXI版本使用加载器 ：https://github.com/englercj/resource-loader
     */
    class AssetLoader extends PIXI.Loader {
        /** @hide 资源组名 */
        protected _groupName: string;
        /** 获取资源组名称 */
        get groupName(): string;
        /** 设置资源组名称，如果设置为null,将会重新设置为 AssetManager.DEFAULT_GROUP */
        set groupName(val: string);
        protected _autoAddToAssetManager: boolean;
        get autoAddToAssetManager(): boolean;
        set autoAddToAssetManager(val: boolean);
        /**
         * 构造函数
         * @param gourpName 资源组名，默认为 utils.AssetManager.DEFAULT_GROUP
         * @param addToAssetManager 是否自动加载到 AssetManager 资源管理器中, 默认为 true
         * @param baseUrl baseUrl
         * @param concurrency 并行数量
         */
        constructor(gourpName?: string, addToAssetManager?: boolean, baseUrl?: string, concurrency?: number);
        private __listenOnceLoadComplete;
        /** this.onComplete 封装 */
        get completeSignal(): Signal<OnCompleteSignal>;
        /** this.onError 封装 */
        get errorSignal(): Signal<OnErrorSignal>;
        /** this.onLoad 封装 */
        get loadSignal(): Signal<OnLoadSignal>;
        /** this.onStart 封装 */
        get startSignal(): Signal<OnStartSignal>;
        /** this.onProgress 封装 */
        get progressSignal(): Signal<OnProgressSignal>;
        /** 在开发环境中(非 CommonJs/ES6 )，发现 add 接口 typescript 无提示功能*/
        easyAdd(url: string): this;
        easyAdd(name: string, url: string): this;
        easyAdd(name: string, url: string, options?: PIXI.ILoaderOptions, cb?: Function): this;
        easyAdd(obj: string | any | any[], options?: PIXI.ILoaderOptions, cb?: Function): this;
        /**
         * 批量添加，等同于 this.add(name: string, url: string)
         * @param list 资源信息条目列表
         * @return this
         */
        addGroup(list: Array<IAssetInfoItem>): this;
        /**
         * 异步加载
         * @return {PIXI.IResourceDictionary} 成功
         * @return {Error} 失败
         */
        loadAsync(): Promise<PIXI.IResourceDictionary | Error>;
    }
}
declare module fgui {
    class AsyncOperation {
        /**
         * callback(obj:GObject)
         */
        callback: Function;
        callbackObj: any;
        private _itemList;
        private _objectPool;
        private _index;
        constructor();
        createObject(pkgName: string, resName: string): void;
        createObjectFromURL(url: string): void;
        cancel(): void;
        private internalCreateObject;
        private collectComponentChildren;
        private collectListChildren;
        private run;
    }
}
declare namespace fgui.utils {
    class Binder {
        static create<T extends Function>(func: Function, context: any, ...args: any[]): T;
    }
}
declare module fgui {
    /**
     * ByteBuffer,目前只实现了读的部分
     * @todo
     * 写部分
     */
    class ByteBuffer {
        static BIG_ENDIAN: string;
        static LITTLE_ENDIAN: string;
        endian: string;
        stringTable: Array<string>;
        version: number;
        private _buffer;
        get buffer(): ArrayBuffer;
        private _uint8Array;
        private _position;
        get position(): number;
        set position(pos: number);
        get length(): number;
        constructor(buffer?: ArrayBuffer | Uint8Array);
        private __checkEOF;
        skip(count: number): void;
        readUInt8(): number;
        readUInt16LE(): number;
        readUInt16BE(): number;
        readUInt32LE(): number;
        readUInt32BE(): number;
        readInt8(): number;
        readInt16LE(): number;
        readInt16BE(): number;
        readInt32LE(): number;
        readInt32BE(): number;
        readFloatLE(): number;
        readFloatBE(): number;
        readDoubleLE(): number;
        readDoubleBE(): number;
        readBool(): boolean;
        readUnsignedShort(): number;
        readByte(): number;
        readUnsignedByte(): number;
        readUnsignedInt(): number;
        readInt(): number;
        readShort(): number;
        readFloat(): number;
        protected static MAX_ARGUMENTS_LENGTH: number;
        protected decodeCodePointsArray(codePoints: number[]): any;
        /**
         * 读取 UTF8 字符串. 假定字符串的前缀是无符号的短整型(Uint16)（以字节表示长度）
         * @note 非通用接口， 字符串格式必须在 255 个字符之内，并且以0结尾.
         */
        readUTF(): any;
        readS(): string;
        readSArray(cnt: number): Array<string>;
        writeS(value: string): void;
        readColor(hasAlpha?: boolean): number;
        readChar(): string;
        readBuffer(): ByteBuffer;
        seek(indexTablePos: number, blockIndex: number): boolean;
    }
}
declare namespace fgui.utils {
    class ColorMatrix {
        /** @internal */
        protected _raw: number[];
        protected h: number;
        protected s: number;
        protected c: number;
        protected b: number;
        /**
         * Provides helper functions for assembling a matrix for use with the {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}.
         * Most methods return the instance to facilitate chained calls.
         *
         * <h4>Example</h4>
         *
         *      myColorMatrix.adjustHue(20).adjustBrightness(50);
         *
         * See {{#crossLink "Filter"}}{{/crossLink}} for an example of how to apply filters, or {{#crossLink "ColorMatrixFilter"}}{{/crossLink}}
         * for an example of how to use ColorMatrix to change a DisplayObject's color.
         * @class ColorMatrix
         * @param {Number} brightness
         * @param {Number} contrast
         * @param {Number} saturation
         * @param {Number} hue
         * @constructor
         **/
        constructor(brightness?: number, contrast?: number, saturation?: number, hue?: number);
        /**
         * Array of delta values for contrast calculations.
         * @property DELTA_INDEX
         * @type Array
         * @protected
         * @static
         **/
        static DELTA_INDEX: number[];
        /**
         * Identity matrix values.
         * @property IDENTITY_MATRIX
         * @type Array
         * @protected
         * @static
         **/
        static IDENTITY_MATRIX: number[];
        /**
         * The constant length of a color matrix.
         * @property LENGTH
         * @type Number
         * @protected
         * @static
         **/
        static LENGTH: number;
        get hue(): number;
        get brightness(): number;
        get contrast(): number;
        get saturation(): number;
        private static helper;
        static getMatrix(p_brightness: number, p_contrast: number, p_saturation: number, p_hue: number, result?: number[]): number[];
        /**
         * Resets the instance with the specified values.
         * @method setColor
         * @param {Number} brightness
         * @param {Number} contrast
         * @param {Number} saturation
         * @param {Number} hue
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         */
        setColor(brightness: number, contrast: number, saturation: number, hue: number): ColorMatrix;
        /**
         * Resets the matrix to identity values.
         * @method reset
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         */
        reset(): ColorMatrix;
        /**
         * Shortcut method to adjust brightness, contrast, saturation and hue.
         * Equivalent to calling adjustHue(hue), adjustContrast(contrast),
         * adjustBrightness(brightness), adjustSaturation(saturation), in that order.
         * @method adjustColor
         * @param {Number} brightness
         * @param {Number} contrast
         * @param {Number} saturation
         * @param {Number} hue
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        adjustColor(brightness: number, contrast: number, saturation: number, hue: number): ColorMatrix;
        /**
         * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
         * Positive values will make the image brighter, negative values will make it darker.
         * @method adjustBrightness
         * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        adjustBrightness(value: number): ColorMatrix;
        /**
         * Adjusts the contrast of pixel color.
         * Positive values will increase contrast, negative values will decrease contrast.
         * @method adjustContrast
         * @param {Number} value A value between -100 & 100.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        adjustContrast(value: number): ColorMatrix;
        /**
         * Adjusts the color saturation of the pixel.
         * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
         * @method adjustSaturation
         * @param {Number} value A value between -100 & 100.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        adjustSaturation(value: number): ColorMatrix;
        /**
         * Adjusts the hue of the pixel color.
         * @method adjustHue
         * @param {Number} value A value between -180 & 180.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        adjustHue(value: number): ColorMatrix;
        /**
         * Concatenates (multiplies) the specified matrix with this one.
         * @method concat
         * @param {Array} matrix An array or ColorMatrix instance.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        concat(matrix: number[]): ColorMatrix;
        /**
         * Returns a clone of this ColorMatrix.
         * @method clone
         * @return {ColorMatrix} A clone of this ColorMatrix.
         **/
        clone(): ColorMatrix;
        /**
         * Return a length 25 (5x5) array instance containing this matrix's values.
         * @method toArray
         * @return {Array} An array holding this matrix's values.
         **/
        toArray(): number[];
        /**
         * Copy the specified matrix's values to this matrix.
         * @method copy
         * @param {Array} matrix An array or ColorMatrix instance.
         * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
         * @chainable
         **/
        copy(matrix: number[]): ColorMatrix;
        /**
         * @method _multiplyMatrix
         * @param {Array} matrix
         * @protected
         **/
        protected _multiplyMatrix(matrix: number[]): void;
        /**
         * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
         * @method _cleanValue
         * @param {Number} value The raw number
         * @param {Number} limit The maximum that the number can be. The minimum is the limit * -1.
         * @protected
         **/
        private _cleanValue;
        /**
         * Makes sure matrixes are 5x5 (25 long).
         * @method _fixMatrix
         * @param {Array} matrix
         * @protected
         **/
        private _fixMatrix;
    }
}
declare namespace fgui.utils {
    class DragIndicator {
        protected $agent: GLoader;
        protected $sourceData: any;
        protected $sourceObject: GObject;
        constructor();
        get dragAgent(): GObject;
        get isDragging(): boolean;
        get sourceObject(): GObject;
        startDrag(source: GObject, icon: string, sourceData: any, touchPointID?: number): void;
        cancel(): void;
        private $dragEnd;
    }
}
declare namespace fgui.utils {
    class InputDelegate {
        protected _inited: boolean;
        protected _textField: GTextInput;
        protected _input: InputElement;
        protected _restrictString: string;
        protected _restrictRegex: RegExp;
        protected _type: InputType;
        private _focused;
        constructor(tf: GTextInput);
        initialize(): void;
        private textFieldDownHandler;
        destroy(): void;
        get text(): string;
        set text(v: string);
        setColor(v: number): void;
        private updateText;
        private onStageDown;
        private focusHandler;
        get isFocused(): boolean;
        /**@internal */
        _getProperty(name: string): string;
        /**@internal */
        _setProperty(name: string, value: string): void;
        get _restrict(): string;
        set _restrict(v: string);
        get type(): InputType;
        set type(v: InputType);
        private tryHideInput;
        /**@internal */
        _updateProperties(): void;
        /**@internal */
        _onFocus(): void;
    }
}
declare namespace fgui.utils {
    class Margin {
        left: number;
        right: number;
        top: number;
        bottom: number;
        parse(str: string): void;
        copy(source: Margin): void;
    }
}
declare namespace fgui.utils {
    class NumberUtil {
        static RADIAN: number;
        static clamp(value: number, min: number, max: number): number;
        static clamp01(value: number): number;
        static isNumber(n: any): n is number;
        static sign(x: number): number;
        static angleToRadian(n: number): number;
        static lerp(s: number, e: number, p: number): number;
    }
}
declare namespace fgui {
    class PixelHitTest {
        private _data;
        offsetX: number;
        offsetY: number;
        scaleX: number;
        scaleY: number;
        constructor(data: PixelHitTestData, offsetX?: number, offsetY?: number);
        contains(x: number, y: number): boolean;
    }
    class PixelHitTestData {
        pixelWidth: number;
        scale: number;
        pixels: number[];
        constructor();
        load(ba: ByteBuffer): void;
    }
}
declare namespace fgui.utils {
    class StringUtil {
        static encodeHTML(str: string): string;
        static getFileName(source: string): string;
        static startsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static endsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static trim(targetString: string): string;
        static trimLeft(targetString: string): string;
        static trimRight(targetString: string): string;
        static convertToHtmlColor(argb: number, hasAlpha?: boolean): string;
        static convertFromHtmlColor(str: string, hasAlpha?: boolean): number;
    }
}
declare module fgui {
    class UBBParser {
        private _text;
        private _readPos;
        protected _handlers: any;
        smallFontSize: number;
        normalFontSize: number;
        largeFontSize: number;
        defaultImgWidth: number;
        defaultImgHeight: number;
        static inst: UBBParser;
        constructor();
        protected onTag_URL(tagName: string, end: boolean, attr: string): string;
        protected onTag_IMG(tagName: string, end: boolean, attr: string): string;
        protected onTag_Simple(tagName: string, end: boolean, attr: string): string;
        protected onTag_COLOR(tagName: string, end: boolean, attr: string): string;
        protected onTag_FONT(tagName: string, end: boolean, attr: string): string;
        protected onTag_SIZE(tagName: string, end: boolean, attr: string): string;
        protected getTagText(remove?: boolean): string;
        parse(text: string, remove?: boolean): string;
    }
}
declare module fgui {
    class ToolSet {
        constructor();
        /**
         * 获取内部使用的文件名，不包含文件后缀
         * @hide
         * @param source 源文件名
         * @return 内部使用的文件名
         */
        static getFileName(source: string): string;
        static startsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static endsWith(source: string, str: string, ignoreCase?: boolean): boolean;
        static trim(targetString: string): string;
        static trimLeft(targetString: string): string;
        static trimRight(targetString: string): string;
        static convertToHtmlColor(argb: number, hasAlpha?: boolean): string;
        static convertFromHtmlColor(str: string, hasAlpha?: boolean): number;
        static displayObjectToGObject(obj: PIXI.DisplayObject): GObject;
        static encodeHTML(str: string): string;
        static defaultUBBParser: UBBParser;
        static parseUBB(text: string): string;
        static clamp(value: number, min: number, max: number): number;
        static clamp01(value: number): number;
        static lerp(start: number, end: number, percent: number): number;
        static repeat(t: number, length: number): number;
        static distance(x1: number, y1: number, x2: number, y2: number): number;
        static fillPath(ctx: PIXI.Graphics, points: number[], px: number, py: number): void;
        private static grayScaleMatrix;
        static setColorFilter(obj: PIXI.DisplayObject, color?: number | number[] | boolean): void;
    }
}
declare namespace fgui.utils {
    type AttributeDictionary = {
        [key: string]: string;
    };
    class XmlNode {
        context: Node;
        nodeName: string;
        type: number;
        text: string;
        private $children;
        private $attributes;
        constructor(ele: Node);
        get children(): XmlNode[];
        get attributes(): AttributeDictionary;
    }
    class XmlParser {
        private static $parser;
        static tryParse(xmlstring: string, mimeType?: SupportedType): XmlNode;
        static getXmlRoot(xml: XmlNode): XmlNode;
        static getChildNodes(xml: XmlNode, matchName?: string): XmlNode[];
        static getNodeAttributes(xml: XmlNode): AttributeDictionary;
    }
}
