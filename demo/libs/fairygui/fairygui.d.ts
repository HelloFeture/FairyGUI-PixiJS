/// <reference types="pixi.js" />
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
    const enum PopupDirection {
        Auto = 0,
        Down = 1,
        Up = 2
    }
    const enum ScrollBarDisplayType {
        Default = 0,
        Visible = 1,
        Auto = 2,
        Hidden = 3
    }
    const enum OverflowType {
        Visible = 0,
        Hidden = 1,
        Scroll = 2,
        Scale = 3,
        ScaleFree = 4
    }
    const enum ScrollType {
        Horizontal = 0,
        Vertical = 1,
        Both = 2
    }
    const enum ButtonMode {
        Common = 0,
        Check = 1,
        Radio = 2
    }
    const enum AutoSizeType {
        None = 0,
        Both = 1,
        Height = 2,
        Shrink = 3
    }
    const enum AlignType {
        Left = "left",
        Center = "center",
        Right = "right"
    }
    const enum VertAlignType {
        Top = 0,
        Middle = 1,
        Bottom = 2
    }
    const enum LoaderFillType {
        None = 0,
        Scale = 1,
        ScaleMatchHeight = 2,
        ScaleMatchWidth = 3,
        ScaleFree = 4,
        ScaleNoBorder = 5
    }
    const enum ListLayoutType {
        SingleColumn = 0,
        SingleRow = 1,
        FlowHorizontal = 2,
        FlowVertical = 3,
        Pagination = 4
    }
    const enum ListSelectionMode {
        Single = 0,
        Multiple = 1,
        Multiple_SingleClick = 2,
        None = 3
    }
    const enum PackageItemType {
        Image = 0,
        Swf = 1,
        MovieClip = 2,
        Sound = 3,
        Component = 4,
        Misc = 5,
        Font = 6,
        Atlas = 7
    }
    const enum ProgressTitleType {
        Percent = 0,
        ValueAndMax = 1,
        Value = 2,
        Max = 3
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
    const enum FlipType {
        None = 0,
        Horizontal = 1,
        Vertical = 2,
        Both = 3
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
    const enum RelationType {
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
    const enum ListChildrenRenderOrder {
        Ascent = 0,
        Descent = 1,
        Arch = 2
    }
    function ParseOverflowType(value: string): OverflowType;
    function ParseScrollType(value: string): ScrollType;
    function ParseLoaderFillType(value: string): LoaderFillType;
    function ParseListLayoutType(value: string): ListLayoutType;
    function ParseListSelectionMode(value: string): ListSelectionMode;
    function ParsePackageItemType(value: string): PackageItemType;
    function ParseProgressTitleType(value: string): ProgressTitleType;
    function ParseScrollBarDisplayType(value: string): ScrollBarDisplayType;
    function ParseFlipType(value: string): FlipType;
    function ParseButtonMode(value: string): ButtonMode;
    function ParseAutoSizeType(value: string): AutoSizeType;
    function ParseAlignType(value: string): AlignType;
    function ParseVertAlignType(value: string): VertAlignType;
    function ParseListChildrenRenderOrder(value: string): ListChildrenRenderOrder;
    function ParseEaseType(name: string): (t: number) => number;
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
}
import fairygui = fgui;
declare namespace fgui {
    class GObject {
        data: any;
        protected $x: number;
        protected $y: number;
        protected $width: number;
        protected $height: number;
        protected $alpha: number;
        protected $rotation: number;
        protected $visible: boolean;
        protected $touchable: boolean;
        protected $grayed: boolean;
        protected $draggable: boolean;
        protected $scaleX: number;
        protected $scaleY: number;
        protected $skewX: number;
        protected $skewY: number;
        protected $pivot: PIXI.Point;
        protected $pivotAsAnchor: boolean;
        protected $pivotOffset: PIXI.Point;
        protected $sortingOrder: number;
        protected $internalVisible: boolean;
        protected $focusable: boolean;
        protected $tooltips: string;
        protected $pixelSnapping: boolean;
        protected $relations: Relations;
        protected $group: GGroup;
        protected $gears: GearBase<GObject>[];
        protected $displayObject: PIXI.DisplayObject;
        protected $dragBounds: PIXI.Rectangle;
        protected $handlingController: boolean;
        private static $colorHelper;
        protected $colorFilter: PIXI.filters.ColorMatrixFilter;
        protected $lastColorComponents: number[];
        protected $parent: GComponent;
        /**@internal */
        $inProgressBuilding: boolean;
        /**@internal */
        $rawWidth: number;
        /**@internal */
        $rawHeight: number;
        /**@internal */
        $gearLocked: boolean;
        /**@internal */
        $initWidth: number;
        /**@internal */
        $initHeight: number;
        protected $sourceWidth: number;
        protected $sourceHeight: number;
        protected $id: string;
        protected $name: string;
        packageItem: PackageItem;
        private static gInstanceCounter;
        constructor();
        get id(): string;
        get name(): string;
        set name(value: string);
        get x(): number;
        set x(value: number);
        get y(): number;
        set y(value: number);
        setXY(xv: number, yv: number): void;
        get pixelSnapping(): boolean;
        set pixelSnapping(value: boolean);
        center(restraint?: boolean): void;
        get width(): number;
        set width(value: number);
        get height(): number;
        set height(value: number);
        setSize(wv: number, hv: number, ignorePivot?: boolean): void;
        ensureSizeCorrect(): void;
        get sourceHeight(): number;
        get sourceWidth(): number;
        get initHeight(): number;
        get initWidth(): number;
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
        protected internalSetPivot(xv: number, yv: number, asAnchor: boolean): void;
        private updatePivotOffset;
        private applyPivot;
        get touchable(): boolean;
        set touchable(value: boolean);
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
        updateGearFromRelations(index: GearType, dx: number, dy: number): void;
        hasGearController(index: number, c: controller.Controller): boolean;
        /**@internal */
        lockGearDisplay(): number;
        /**@internal */
        releaseGearDisplay(token: number): void;
        private checkGearVisible;
        get gearXY(): GearXY;
        get gearSize(): GearSize;
        get gearLook(): GearLook;
        get relations(): Relations;
        addRelation(target: GObject, relationType: number, usePercent?: boolean): void;
        removeRelation(target: GObject, relationType?: number): void;
        get displayObject(): PIXI.DisplayObject;
        protected createDisplayObject(): void;
        protected setDisplayObject(value: PIXI.DisplayObject): void;
        get parent(): GComponent;
        set parent(val: GComponent);
        removeFromParent(): void;
        get root(): GRoot;
        /** @virtual */
        get text(): string;
        /** @virtual */
        set text(value: string);
        /** @virtual */
        get icon(): string;
        /** @virtual */
        set icon(value: string);
        dispose(): void;
        click(listener: Function, thisObj?: any): this;
        removeClick(listener: Function, thisObj?: any): this;
        hasClick(fn?: Function): boolean;
        on(type: string, listener: Function, thisObject?: any): this;
        off(type: string, listener: Function, thisObject?: any): this;
        once(type: string, listener: Function, thisObject?: any): this;
        hasListener(event: string, handler?: Function): boolean;
        emit(event: string, ...args: any[]): boolean;
        removeAllListeners(type?: string): void;
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
        handleControllerChanged(c: controller.Controller): void;
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
        /**@internal */
        constructFromResource(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
        setupAfterAdd(xml: utils.XmlNode): void;
        static castFromNativeObject(disp: PIXI.DisplayObject): GObject;
        protected static sGlobalDragStart: PIXI.Point;
        protected static sGlobalRect: PIXI.Rectangle;
        protected static sHelperPoint: PIXI.Point;
        protected static sDragHelperRect: PIXI.Rectangle;
        protected static sUpdatingWhileDragging: boolean;
        private static $dragBeginCancelled;
        protected $touchDownPoint: PIXI.Point;
        static draggingObject: GObject;
        private initDrag;
        private dragBegin;
        private dragEnd;
        private reset;
        private $touchBegin;
        private $end;
        private $moving;
        private $moving2;
        private $end2;
    }
}
declare namespace fgui {
    class GComponent extends GObject {
        protected $sortingChildCount: number;
        protected $opaque: boolean;
        protected $margin: utils.Margin;
        protected $trackBounds: boolean;
        protected $boundsChanged: boolean;
        protected $children: GObject[];
        protected $applyingController: controller.Controller;
        /**@internal */
        $buildingDisplayList: boolean;
        /**@internal */
        $controllers: controller.Controller[];
        /**@internal */
        $transitions: Transition[];
        /**@internal */
        $rootContainer: UIContainer;
        /**@internal */
        $container: PIXI.Container;
        /**@internal */
        $scrollPane: ScrollPane;
        /**@internal */
        $alignOffset: PIXI.Point;
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
        getChildInGroup(name: string, group: GGroup): GObject;
        getChildById(id: string): GObject;
        getChildIndex(child: GObject): number;
        setChildIndex(child: GObject, index?: number): void;
        setChildIndexBefore(child: GObject, index: number): number;
        protected $setChildIndex(child: GObject, oldIndex: number, index?: number): number;
        swapChildren(child1: GObject, child2: GObject): void;
        swapChildrenAt(index1: number, index2?: number): void;
        get numChildren(): number;
        isAncestorOf(child: GObject): boolean;
        addController(controller: controller.Controller): void;
        getControllerAt(index: number): controller.Controller;
        getController(name: string): controller.Controller;
        removeController(c: controller.Controller): void;
        get controllers(): controller.Controller[];
        childStateChanged(child: GObject): void;
        applyController(c: controller.Controller): void;
        applyAllControllers(): void;
        adjustRadioGroupDepth(obj: GObject, c: controller.Controller): void;
        getTransitionAt(index: number): Transition;
        getTransition(transName: string): Transition;
        isChildInView(child: GObject): boolean;
        getFirstChildInView(): number;
        get scrollPane(): ScrollPane;
        get opaque(): boolean;
        set opaque(value: boolean);
        get margin(): utils.Margin;
        set margin(value: utils.Margin);
        get mask(): PIXI.Container | PIXI.MaskData;
        set mask(obj: PIXI.Container | PIXI.MaskData);
        protected updateOpaque(): void;
        protected updateScrollRect(): void;
        protected setupScroll(scrollBarMargin: utils.Margin, scroll: ScrollType, scrollBarDisplay: ScrollBarDisplayType, flags: number, vtScrollBarRes: string, hzScrollBarRes: string, headerRes: string, footerRes: string): void;
        protected setupOverflow(overflow: OverflowType): void;
        protected handleSizeChanged(): void;
        protected handleGrayedChanged(): void;
        setBoundsChangedFlag(): void;
        private $validate;
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
        private constructInternal;
        protected appendChildrenList(): void;
        protected constructFromXML(xml: utils.XmlNode): void;
        private $added;
        private $removed;
    }
}
declare namespace fgui {
    class GButton extends GComponent implements IColorableTitle {
        protected $titleObject: GObject;
        protected $iconObject: GObject;
        protected $relatedController: controller.Controller;
        private $mode;
        private $selected;
        private $title;
        private $selectedTitle;
        private $icon;
        private $selectedIcon;
        private $pageOption;
        private $buttonController;
        private $changeStateOnClick;
        private $linkedPopup;
        private $downEffect;
        private $downEffectValue;
        private $down;
        private $over;
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
        get titleColor(): number;
        set titleColor(value: number);
        get fontSize(): number;
        set fontSize(value: number);
        set selected(val: boolean);
        get selected(): boolean;
        get mode(): ButtonMode;
        set mode(value: ButtonMode);
        get relatedController(): controller.Controller;
        set relatedController(val: controller.Controller);
        get pageOption(): controller.PageOption;
        get changeStateOnClick(): boolean;
        set changeStateOnClick(value: boolean);
        get linkedPopup(): GObject;
        set linkedPopup(value: GObject);
        addStateListener(listener: Function, thisObj?: any): void;
        removeStateListener(listener: Function, thisObj?: any): void;
        fireClick(downEffect?: boolean): void;
        protected setState(val: string): void;
        handleControllerChanged(c: controller.Controller): void;
        protected handleGrayedChanged(): void;
        protected constructFromXML(xml: utils.XmlNode): void;
        setupAfterAdd(xml: utils.XmlNode): void;
        private $rollover;
        private $rollout;
        private $mousedown;
        private $mouseup;
        private $click;
        dispose(): void;
    }
}
declare namespace fgui {
    class GComboBox extends GComponent {
        protected $dropdown: GComponent;
        protected $titleObject: GObject;
        protected $iconObject: GObject;
        protected $list: GList;
        private $items;
        private $values;
        private $icons;
        private $visibleItemCount;
        private $itemsUpdated;
        private $selectedIndex;
        private $buttonController;
        private $popupDir;
        private $over;
        private $down;
        constructor();
        get text(): string;
        set text(value: string);
        get icon(): string;
        set icon(value: string);
        get titleColor(): number;
        set titleColor(value: number);
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
        protected setState(val: string): void;
        protected constructFromXML(xml: utils.XmlNode): void;
        dispose(): void;
        setupAfterAdd(xml: utils.XmlNode): void;
        protected showDropdown(): void;
        private $popupWinClosed;
        private $clickItem;
        private delayedClickItem;
        private $rollover;
        private $rollout;
        private $mousedown;
        private $mouseup;
    }
}
declare namespace fgui {
    class GGraph extends GObject implements IColorGear {
        private $type;
        private $lineSize;
        private $lineColor;
        private $lineAlpha;
        private $fillColor;
        private $fillAlpha;
        private $corner;
        constructor();
        drawRect(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number, corner?: number[]): void;
        drawEllipse(lineSize: number, lineColor: number, lineAlpha: number, fillColor: number, fillAlpha: number): void;
        get color(): number;
        set color(value: number);
        private drawGraph;
        replaceMe(target: GObject): void;
        addBeforeMe(target: GObject): void;
        addAfterMe(target: GObject): void;
        setNativeObject(obj: PIXI.DisplayObject): void;
        protected createDisplayObject(): void;
        protected handleSizeChanged(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class GGroup extends GObject {
        protected $empty: boolean;
        /**@internal */
        $updating: boolean;
        protected createDisplayObject(): void;
        updateBounds(): void;
        setXY(xv: number, yv: number): void;
        moveChildren(dx: number, dy: number): void;
        protected updateAlpha(): void;
    }
}
declare namespace fgui {
    class GImage extends GObject implements IColorGear {
        private $content;
        private $flip;
        constructor();
        get touchable(): boolean;
        set touchable(value: boolean);
        get color(): number;
        set color(value: number);
        get flip(): FlipType;
        set flip(value: FlipType);
        get texture(): PIXI.Texture;
        set texture(value: PIXI.Texture);
        protected createDisplayObject(): void;
        dispose(): void;
        constructFromResource(): void;
        protected handleXYChanged(): void;
        protected handleSizeChanged(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class GLabel extends GComponent implements IColorableTitle {
        protected $titleObject: GObject;
        protected $iconObject: GObject;
        constructor();
        get icon(): string;
        set icon(value: string);
        get title(): string;
        set title(value: string);
        get text(): string;
        set text(value: string);
        get titleColor(): number;
        set titleColor(value: number);
        get fontSize(): number;
        set fontSize(value: number);
        set editable(val: boolean);
        get editable(): boolean;
        protected constructFromXML(xml: utils.XmlNode): void;
        setupAfterAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    type GListRenderer = (index: number, item: GObject) => void;
    type GListItemProvider = (index: number) => string;
    class GList extends GComponent {
        itemRenderer: GListRenderer;
        itemProvider: GListItemProvider;
        scrollItemToViewOnClick: boolean;
        foldInvisibleItems: boolean;
        private $layout;
        private $lineCount;
        private $columnCount;
        private $lineGap;
        private $columnGap;
        private $defaultItem;
        private $autoResizeItem;
        private $selectionMode;
        private $align;
        private $verticalAlign;
        private $selectionController;
        private $lastSelectedIndex;
        private $pool;
        private $virtual;
        private $loop;
        private $numItems;
        private $realNumItems;
        private $firstIndex;
        private $curLineItemCount;
        private $curLineItemCount2;
        private $itemSize;
        private $virtualListChanged;
        private $virtualItems;
        private $eventLocked;
        protected $apexIndex: number;
        private $childrenRenderOrder;
        private $itemInfoVer;
        private $enterCounter;
        private static $lastPosHelper;
        constructor();
        get childrenRenderOrder(): ListChildrenRenderOrder;
        set childrenRenderOrder(value: ListChildrenRenderOrder);
        get apexIndex(): number;
        set apexIndex(value: number);
        /**@override */
        protected appendChildrenList(): void;
        /**@override */
        setXY(xv: number, yv: number): void;
        /**@override */
        protected $setChildIndex(child: GObject, oldIndex: number, index?: number): number;
        /**@override */
        childStateChanged(child: GObject): void;
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
        get selectionController(): controller.Controller;
        set selectionController(value: controller.Controller);
        get itemPool(): utils.GObjectRecycler;
        getFromPool(url?: string): GObject;
        returnToPool(obj: GObject): void;
        addChildAt(child: GObject, index?: number): GObject;
        addItem(url?: string): GObject;
        addItemFromPool(url?: string): GObject;
        removeChildAt(index: number, dispose?: boolean): GObject;
        removeChildToPoolAt(index: number): void;
        removeChildToPool(child: GObject): void;
        removeChildrenToPool(beginIndex?: number, endIndex?: number): void;
        get selectedIndex(): number;
        set selectedIndex(value: number);
        getSelection(): number[];
        addSelection(index: number, scrollIntoView?: boolean): void;
        removeSelection(index: number): void;
        clearSelection(): void;
        private clearSelectionExcept;
        selectAll(): void;
        selectNone(): void;
        selectReverse(): void;
        handleArrowKey(key: Keys): void;
        private $clickItem;
        private setSelectionOnEvent;
        resizeToFit(itemCount?: number, minSize?: number): void;
        getMaxItemWidth(): number;
        protected handleSizeChanged(): void;
        handleControllerChanged(c: controller.Controller): void;
        private updateSelectionController;
        getSnappingPosition(xValue: number, yValue: number, resultPoint?: PIXI.Point): PIXI.Point;
        scrollToView(index: number, ani?: boolean, snapToFirst?: boolean): void;
        getFirstChildInView(): number;
        childIndexToItemIndex(index: number): number;
        itemIndexToChildIndex(index: number): number;
        setVirtual(): void;
        setVirtualAndLoop(): void;
        private $setVirtual;
        get numItems(): number;
        set numItems(value: number);
        refreshVirtualList(): void;
        private checkVirtualList;
        private setVirtualListChangedFlag;
        private $refreshVirtualList;
        private $scrolled;
        private getIndexOnPos1;
        private getIndexOnPos2;
        private getIndexOnPos3;
        private handleScroll;
        private handleScroll1;
        private handleScroll2;
        private handleScroll3;
        private handleArchOrder1;
        private handleArchOrder2;
        private handleAlign;
        /**@override */
        protected updateBounds(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
        setupAfterAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui.utils {
    abstract class Recycler<T> {
        protected $pool: {
            [name: string]: T[];
        };
        protected $count: number;
        constructor();
        get count(): number;
        clear(): void;
        get(id: string): T;
        protected abstract createObject(id: string): T;
        recycle(id: string, obj: T): void;
    }
}
declare namespace fgui.utils {
    class GObjectRecycler extends Recycler<GObject> {
        constructor();
        clear(): void;
        protected createObject(id: string): GObject;
    }
}
declare namespace fgui {
    class GLoader extends GObject implements IAnimationGear, IColorGear {
        protected $url: string;
        protected $align: AlignType;
        protected $verticalAlign: VertAlignType;
        protected $autoSize: boolean;
        protected $fill: LoaderFillType;
        protected $showErrorSign: boolean;
        protected $playing: boolean;
        protected $frame: number;
        protected $color: number;
        private $contentItem;
        private $contentSourceWidth;
        private $contentSourceHeight;
        private $contentWidth;
        private $contentHeight;
        protected $container: UIContainer;
        protected $content: UIImage | MovieClip;
        protected $errorSign: GObject;
        private $updatingLayout;
        private static $errorSignPool;
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
        private $loadingTexture;
        /**overwrite this method if you need to load resources by your own way*/
        protected loadExternal(): void;
        /**free the resource you loaded */
        protected freeExternal(texture: PIXI.Texture): void;
        private $loadResCompleted;
        /**content loaded */
        protected onExternalLoadSuccess(texture: PIXI.Texture): void;
        protected onExternalLoadFailed(): void;
        private setErrorState;
        private clearErrorState;
        private updateLayout;
        private clearContent;
        protected handleSizeChanged(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class GMovieClip extends GObject implements IAnimationGear, IColorGear {
        private $movieClip;
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
        setupBeforeAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class GProgressBar extends GComponent {
        private $max;
        private $value;
        private $titleType;
        private $reverse;
        private $titleObject;
        private $aniObject;
        private $barObjectH;
        private $barObjectV;
        private $barMaxWidth;
        private $barMaxHeight;
        private $barMaxWidthDelta;
        private $barMaxHeightDelta;
        private $barStartX;
        private $barStartY;
        private $tweener;
        private $tweenValue;
        private static easeLinear;
        constructor();
        get titleType(): ProgressTitleType;
        set titleType(value: ProgressTitleType);
        get max(): number;
        set max(value: number);
        get value(): number;
        set value(value: number);
        tweenValue(value: number, duration: number): GTweener;
        private onUpdateTween;
        update(val: number): void;
        protected constructFromXML(xml: utils.XmlNode): void;
        protected handleSizeChanged(): void;
        setupAfterAdd(xml: utils.XmlNode): void;
        dispose(): void;
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
    class GTextField extends GObject implements IColorGear, IColorableTitle {
        protected $textField: UITextField;
        protected $btContainer: UIContainer;
        protected $bitmapFont: BitmapFont;
        protected $lines: LineInfo[];
        protected $bitmapPool: PIXI.Sprite[];
        protected $font: string;
        protected $style: PIXI.TextStyle;
        protected $verticalAlign: VertAlignType;
        protected $offset: PIXI.Point;
        protected $color: number;
        protected $singleLine: boolean;
        protected $text: string;
        protected $fontProperties: PIXI.IFontMetrics;
        protected $autoSize: AutoSizeType;
        protected $widthAutoSize: boolean;
        protected $heightAutoSize: boolean;
        protected $requireRender: boolean;
        protected $updatingSize: boolean;
        protected $sizeDirty: boolean;
        protected $textWidth: number;
        protected $textHeight: number;
        static GUTTER_X: number;
        static GUTTER_Y: number;
        constructor();
        protected createDisplayObject(): void;
        private switchBitmapMode;
        dispose(): void;
        set text(value: string);
        protected setText(value: string): void;
        get text(): string;
        protected getText(): string;
        get color(): number;
        protected getColor(): number;
        protected setColor(value: number): void;
        set color(value: number);
        get titleColor(): number;
        set titleColor(value: number);
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
        private $render;
        protected renderNow(updateBounds?: boolean): void;
        private renderWithBitmapFont;
        localToGlobal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        globalToLocal(ax?: number, ay?: number, resultPoint?: PIXI.Point): PIXI.Point;
        protected handleSizeChanged(): void;
        protected shrinkTextField(): void;
        protected layoutAlign(): void;
        private updatePosition;
        protected handleXYChanged(): void;
        setupBeforeAdd(xml: utils.XmlNode): void;
        setupAfterAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class TextBlock {
        text: string;
        style: PIXI.TextStyle;
    }
    class GRichTextField extends GTextField {
        protected $ubbEnabled: boolean;
        protected $textFlow: TextBlock[];
        set ubbEnabled(value: boolean);
        get ubbEnabled(): boolean;
        setupBeforeAdd(xml: utils.XmlNode): void;
        constructor();
        set textFlow(flow: TextBlock[]);
        set text(value: string);
        private $clickLink;
        dispose(): void;
    }
}
declare namespace fgui {
    class GRootMouseStatus {
        touchDown: boolean;
        mouseX: number;
        mouseY: number;
    }
    class GRoot extends GComponent {
        private static uniqueID;
        private $uiStage;
        private $modalLayer;
        private $popupStack;
        private $justClosedPopups;
        private $modalWaitPane;
        private $focusedObject;
        private $tooltipWin;
        private $defaultTooltipWin;
        private $checkingPopups;
        private $uid;
        private static $inst;
        private static $gmStatus;
        /**
         * the singleton instance of the GRoot object
         */
        static get inst(): GRoot;
        /**
         * the current mouse/pointer data
         */
        static get globalMouseStatus(): GRootMouseStatus;
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
        showTooltipsWin(tooltipWin: GObject, position?: PIXI.Point): void;
        hideTooltips(): void;
        get focus(): GObject;
        set focus(value: GObject);
        private setFocus;
        private adjustModalLayer;
        private $stageDown;
        checkPopups(target: PIXI.DisplayObject): void;
        private $stageMove;
        private $stageUp;
        private $winResize;
    }
}
declare namespace fgui {
    class GScrollBar extends GComponent {
        private $grip;
        private $arrowButton1;
        private $arrowButton2;
        private $bar;
        private $target;
        private $vertical;
        private $scrollPerc;
        private $fixedGripSize;
        private $dragOffset;
        constructor();
        setScrollPane(target: ScrollPane, vertical: boolean): void;
        set displayPerc(val: number);
        get scrollPerc(): number;
        set scrollPerc(val: number);
        get minSize(): number;
        protected constructFromXML(xml: utils.XmlNode): void;
        private $gripMouseDown;
        private static sScrollbarHelperPoint;
        private $gripDragging;
        private $gripDraggingEnd;
        private $arrowButton1Click;
        private $arrowButton2Click;
        private $barMouseDown;
        dispose(): void;
    }
}
declare namespace fgui {
    class GSlider extends GComponent {
        protected $max: number;
        protected $value: number;
        protected $titleType: ProgressTitleType;
        protected $titleObject: GTextField;
        protected $aniObject: GObject;
        protected $barObjectH: GObject;
        protected $barObjectV: GObject;
        protected $barMaxWidth: number;
        protected $barMaxHeight: number;
        protected $barMaxWidthDelta: number;
        protected $barMaxHeightDelta: number;
        protected $gripObject: GObject;
        private $clickPos;
        private $clickPercent;
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
        setupAfterAdd(xml: utils.XmlNode): void;
        protected constructFromXML(xml: utils.XmlNode): void;
        private $gripMouseDown;
        private static sSilderHelperPoint;
        private $gripMouseMove;
        private $gripMouseUp;
        dispose(): void;
    }
}
declare namespace fgui {
    const enum InputType {
        TEXT = "text",
        PASSWORD = "password",
        NUMBER = "number",
        EMAIL = "email",
        TEL = "tel",
        URL = "url"
    }
    class GTextInput extends GTextField {
        protected $editable: boolean;
        protected $util: utils.InputDelegate;
        /**@internal */
        $isTyping: boolean;
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
        protected setColor(value: number): void;
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
        setupBeforeAdd(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class GTimer {
        private $items;
        private $itemPool;
        private $enumIdx;
        private $enumCount;
        private $curTime;
        private $ticker;
        static inst: GTimer;
        constructor();
        private getItem;
        private findItem;
        add(delayInMs: number, repeat: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        addLoop(delayInMs: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        callLater(callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        callDelay(delayInMs: number, callback: (...args: any[]) => void, thisObj: any, callbackParam?: any): void;
        exists(callback: (...args: any[]) => void, thisObj: any): boolean;
        remove(callback: (...args: any[]) => void, thisObj: any): void;
        get ticker(): PIXI.Ticker;
        get curTime(): number;
        advance(): void;
        tickTween(): void;
        setTicker(ticker: PIXI.Ticker): void;
    }
}
declare namespace fgui {
    class GearBase<T> {
        static disableAllTweenEffect: boolean;
        protected $tween: boolean;
        protected $easeType: (t: number) => number;
        protected $tweenTime: number;
        protected $tweenDelay: number;
        protected $lockToken: number;
        protected $owner: GObject & T;
        protected $controller: controller.Controller;
        constructor(owner: GObject & T);
        get controller(): controller.Controller;
        set controller(val: controller.Controller);
        get tween(): boolean;
        set tween(val: boolean);
        get tweenDelay(): number;
        set tweenDelay(val: number);
        get tweenTime(): number;
        set tweenTime(value: number);
        get easeType(): (t: number) => number;
        set easeType(value: (t: number) => number);
        setup(xml: utils.XmlNode): void;
        updateFromRelations(dx: number, dy: number): void;
        protected addStatus(pageId: string, value: string): void;
        protected init(): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearAnimation extends GearBase<IAnimationGear> {
        private $storage;
        private $default;
        constructor(owner: GObject & IAnimationGear);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearColor extends GearBase<IColorGear> {
        private $storage;
        private $default;
        constructor(owner: GObject & IColorGear);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearDisplay extends GearBase<GObject> {
        private $vid;
        pages: string[];
        constructor(owner: GObject);
        protected init(): void;
        lock(): number;
        release(token: number): void;
        get connected(): boolean;
        apply(): void;
    }
}
declare namespace fgui {
    class GearIcon extends GearBase<GObject> {
        private $storage;
        private $default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearLook extends GearBase<GObject> {
        private $tweener;
        private $storage;
        private $default;
        private $tweenValue;
        private $tweenTarget;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        private tweenComplete;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearSize extends GearBase<GObject> {
        private $tweener;
        private $storage;
        private $default;
        private $tweenValue;
        private $tweenTarget;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        private tweenComplete;
        updateState(): void;
        updateFromRelations(dx: number, dy: number): void;
    }
}
declare namespace fgui {
    class GearText extends GearBase<GObject> {
        private $storage;
        private $default;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        updateState(): void;
    }
}
declare namespace fgui {
    class GearXY extends GearBase<GObject> {
        private $tweener;
        private $storage;
        private $default;
        private $tweenValue;
        private $tweenTarget;
        constructor(owner: GObject);
        protected init(): void;
        protected addStatus(pageId: string, value: string): void;
        apply(): void;
        private tweenComplete;
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
declare namespace fgui {
    interface IColorableTitle {
        titleColor: number;
        fontSize: number;
    }
    let isColorableTitle: (obj: any) => obj is IColorableTitle;
}
declare namespace fgui {
    class PopupMenu {
        protected $contentPane: GComponent;
        protected $list: GList;
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
        private $clickItem;
        private $delayClickItem;
        private $addedToStage;
    }
}
declare namespace fgui {
    class RelationItem {
        protected $owner: GObject;
        protected $target: GObject;
        protected $targetX: number;
        protected $targetY: number;
        protected $targetWidth: number;
        protected $targetHeight: number;
        protected $defs: RelationDef[];
        constructor(owner: GObject);
        get owner(): GObject;
        set target(value: GObject);
        get target(): GObject;
        add(relationType: number, usePercent: boolean): void;
        private internalAdd;
        remove(relationType?: number): void;
        copyFrom(source: RelationItem): void;
        dispose(): void;
        get isEmpty(): boolean;
        applyOnSelfResized(dWidth: number, dHeight: number): void;
        private applyOnXYChanged;
        private applyOnSizeChanged;
        private addRefTarget;
        private releaseRefTarget;
        private $targetXYChanged;
        private $targetSizeChanged;
        private $targetSizeWillChange;
    }
    class RelationDef {
        percent: boolean;
        type: number;
        copyFrom(source: RelationDef): void;
    }
}
declare namespace fgui {
    class Relations {
        protected $owner: GObject;
        protected $items: RelationItem[];
        sizeDirty: boolean;
        /**@internal */
        $dealing: GObject;
        private static RELATION_NAMES;
        constructor(owner: GObject);
        add(target: GObject, relationType: number, usePercent?: boolean): void;
        addItems(target: GObject, sidePairs: string): void;
        remove(target: GObject, relationType?: number): void;
        contains(target: GObject): boolean;
        clearFor(target: GObject): void;
        clearAll(): void;
        copyFrom(source: Relations): void;
        dispose(): void;
        onOwnerSizeChanged(dWidth: number, dHeight: number): void;
        ensureRelationsSizeCorrect(): void;
        get empty(): boolean;
        setup(xml: utils.XmlNode): void;
    }
}
declare namespace fgui {
    class ScrollPane extends PIXI.utils.EventEmitter {
        private static $easeTypeFunc;
        private $owner;
        private $maskContainer;
        private $container;
        private $alignContainer;
        private $scrollType;
        private $scrollSpeed;
        private $mouseWheelSpeed;
        private $decelerationRate;
        private $scrollBarMargin;
        private $bouncebackEffect;
        private $touchEffect;
        private $scrollBarDisplayAuto;
        private $vScrollNone;
        private $hScrollNone;
        private $needRefresh;
        private $refreshBarAxis;
        private $displayOnLeft;
        private $snapToItem;
        private $displayOnDemand;
        private $mouseWheelEnabled;
        private $pageMode;
        private $inertiaDisabled;
        private $xPos;
        private $yPos;
        private $viewSize;
        private $contentSize;
        private $overlapSize;
        private $pageSize;
        private $containerPos;
        private $beginTouchPos;
        private $lastTouchPos;
        private $lastTouchGlobalPos;
        private $velocity;
        private $velocityScale;
        private $lastMoveTime;
        private $isHoldAreaDone;
        private $aniFlag;
        private $scrollBarVisible;
        private $headerLockedSize;
        private $footerLockedSize;
        private $refreshEventDispatching;
        private $tweening;
        private $tweenTime;
        private $tweenDuration;
        private $tweenStart;
        private $tweenChange;
        private $pageController;
        private $hzScrollBar;
        private $vtScrollBar;
        private $header;
        private $footer;
        private $isDragging;
        static draggingPane: ScrollPane;
        private static $gestureFlag;
        private static sHelperPoint;
        private static sHelperRect;
        private static sEndPos;
        private static sOldChange;
        static TWEEN_DEFAULT_DURATION: number;
        static TWEEN_MANUALLY_SET_DURATION: number;
        static PULL_DIST_RATIO: number;
        /**@internal */
        $loop: number;
        constructor(owner: GComponent, scrollType: number, scrollBarMargin: utils.Margin, scrollBarDisplay: number, flags: number, vtScrollBarRes: string, hzScrollBarRes: string, headerRes: string, footerRes: string);
        dispose(): void;
        get owner(): GComponent;
        get horzScrollBar(): GScrollBar;
        get vertScrollBar(): GScrollBar;
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
        get pageController(): controller.Controller;
        set pageController(value: controller.Controller);
        get scrollingPosX(): number;
        get scrollingPosY(): number;
        scrollTop(ani?: boolean): void;
        scrollBottom(ani?: boolean): void;
        scrollUp(ratio?: number, ani?: boolean): void;
        scrollDown(ratio?: number, ani?: boolean): void;
        scrollLeft(ratio?: number, ani?: boolean): void;
        scrollRight(ratio?: number, ani?: boolean): void;
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
        handleControllerChanged(c: controller.Controller): void;
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
        private $mouseDown;
        private $mouseMove;
        private $mouseUp;
        private $click;
        private $mouseWheel;
        private $rollOver;
        private $rollOut;
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
declare namespace fgui {
    export const enum TransitionActionType {
        XY = 0,
        Size = 1,
        Scale = 2,
        Pivot = 3,
        Alpha = 4,
        Rotation = 5,
        Color = 6,
        Animation = 7,
        Visible = 8,
        Sound = 9,
        Transition = 10,
        Shake = 11,
        ColorFilter = 12,
        Skew = 13,
        Unknown = 14
    }
    export interface TransitionPlaySetting {
        onComplete?: (...args: any[]) => void;
        onCompleteObj?: any;
        onCompleteParam?: any;
        times: number;
        delay: number;
    }
    export class Transition {
        name: string;
        autoPlayRepeat: number;
        autoPlayDelay: number;
        private $owner;
        private $ownerBaseX;
        private $ownerBaseY;
        private $items;
        private $totalTimes;
        private $totalTasks;
        private $playing;
        private $onComplete;
        private $onCompleteObj;
        private $onCompleteParam;
        private $options;
        private $reversed;
        private $maxTime;
        private $autoPlay;
        static OPTION_IGNORE_DISPLAY_CONTROLLER: number;
        static OPTION_AUTO_STOP_DISABLED: number;
        static OPTION_AUTO_STOP_AT_END: number;
        private static FRAME_RATE;
        constructor(owner: GComponent);
        private $ownerVisibleChanged;
        get autoPlay(): boolean;
        set autoPlay(value: boolean);
        changeRepeat(value: number): void;
        /**
         * Play transition by specified settings:
         * 1) pass whole parameters:
                onComplete?: (...args:any[]) => void,
                onCompleteObj?: any,
                onCompleteParam?: any,
                times: number,
                delay: number
         * 2) just pass 1 object which implements TransitionPlaySetting (recommended)
         */
        play(...args: any[]): void;
        /**
         * Play transition by specified settings:
         * 1) pass whole parameters:
                onComplete?: (...args:any[]) => void,
                onCompleteObj?: any,
                onCompleteParam?: any,
                times: number,
                delay: number
         * 2) just pass 1 object which implements TransitionPlaySetting (recommended)
         */
        playReverse(...args: any[]): void;
        private $play;
        stop(setToComplete?: boolean, processCallback?: boolean): void;
        private stopItem;
        dispose(): void;
        get playing(): boolean;
        setValue(label: string, ...args: any[]): void;
        setHook(label: string, callback: () => void, thisObj?: any): void;
        clearHooks(): void;
        setTarget(label: string, newTarget: GObject): void;
        setDuration(label: string, value: number): void;
        updateFromRelations(targetId: string, dx: number, dy: number): void;
        private internalPlay;
        private prepareValue;
        private startTween;
        private $delayCall;
        private $delayCall2;
        private $tweenUpdate;
        private $tweenComplete;
        private $tweenRepeatComplete;
        private disposeTween;
        private $playTransComplete;
        private checkAllComplete;
        private applyValue;
        /**@internal */
        $shakeItem(item: TransitionItem, elapsedMS: number): void;
        setup(xml: utils.XmlNode): void;
        private decodeValue;
    }
    class TransitionItem {
        time: number;
        targetId: string;
        type: number;
        duration: number;
        value: TransitionValue;
        startValue: TransitionValue;
        endValue: TransitionValue;
        easeType: (t: number) => number;
        repeat: number;
        yoyo: boolean;
        tween: boolean;
        label: string;
        label2: string;
        hook: () => void;
        hookObj: any;
        hook2: () => void;
        hook2Obj: any;
        tweenTimes: number;
        tweener: GTweener;
        completed: boolean;
        target: GObject;
        filterCreated: boolean;
        lockToken: number;
        constructor();
        /**@internal */
        $shake(trans: Transition, elapsedMS: number): void;
    }
    class TransitionValue {
        f1: number;
        f2: number;
        f3: number;
        f4: number;
        i: number;
        c: number;
        b: boolean;
        s: string;
        b1: boolean;
        b2: boolean;
    }
    export {};
}
declare namespace fgui {
    class Window extends GComponent {
        private $contentPane;
        private $modalWaitPane;
        private $closeButton;
        private $dragArea;
        private $contentArea;
        private $frame;
        private $modal;
        private $uiSources;
        private $inited;
        private $loading;
        protected $requestingCmd: number;
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
        private $uiLoadComplete;
        private $init;
        dispose(): void;
        protected closeEventHandler(evt: PIXI.interaction.InteractionEvent): void;
        private $onShown;
        private $onHidden;
        private $mouseDown;
        private $dragStart;
    }
}
declare namespace PIXIExtend {
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
declare namespace PIXIExtend {
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
declare namespace PIXIExtend {
    class Sprite extends PIXI.Sprite {
        protected $flipX: boolean;
        protected $flipY: boolean;
        protected $frameId: string;
        protected static $cachedTexturePool: {
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
        /**default font name of your project. */
        static defaultFont: string;
        /** resource used by Window.showModalWait to lock the certain window with modal mode.*/
        static windowModalWaiting: string;
        /** resource used by GRoot.showModalWait to lock the global screen with modal mode. */
        static globalModalWaiting: string;
        /** modal layer background configuration. */
        static modalLayerColor: number;
        static modalLayerAlpha: number;
        /** global scrollbar name */
        static horizontalScrollBar: string;
        static verticalScrollBar: string;
        /** scrolling distance per action in pixel*/
        static defaultScrollSpeed: number;
        /** default scrollbar display mode. It's recommended to set ScrollBarDisplayType.Visible for Desktop environment and ScrollBarDisplayType.Auto for mobile environment.*/
        static defaultScrollBarDisplay: number;
        /** allow user to drag the content of a container. Set to true for mobile is recommended.*/
        static defaultScrollTouchEffect: boolean;
        /** enable bounce effect when the scrolling reaches to the edge of a container. Set to true for mobile is recommended.*/
        static defaultScrollBounceEffect: boolean;
        /** Deceleration ratio of scrollpane when its in touch dragging.*/
        static defaultScrollDecelerationRate: number;
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
    }
}
declare namespace fgui.controller {
    class Action {
        fromPage: string[];
        toPage: string[];
        static create(type: string): Action;
        execute(controller: Controller, prevPage: string, curPage: string): void;
        protected enter(controller: Controller): void;
        protected leave(controller: Controller): void;
        setup(xml: utils.XmlNode): void;
    }
}
declare namespace fgui.controller {
    class ChangePageAction extends Action {
        objectId: string;
        controllerName: string;
        targetPage: string;
        protected enter(controller: Controller): void;
        setup(xml: utils.XmlNode): void;
    }
}
declare namespace fgui.controller {
    class Controller extends PIXI.utils.EventEmitter {
        private $name;
        private $selectedIndex;
        private $previousIndex;
        private $pageIds;
        private $pageNames;
        private $actions;
        /**@internal */
        $parent: GComponent;
        /**@internal */
        $autoRadioGroupDepth: boolean;
        /**@internal */
        $updating: boolean;
        private static $nextPageId;
        constructor();
        get name(): string;
        set name(value: string);
        get parent(): GComponent;
        get selectedIndex(): number;
        set selectedIndex(value: number);
        setSelectedIndex(value?: number): void;
        get previsousIndex(): number;
        get selectedPage(): string;
        set selectedPage(val: string);
        setSelectedPage(value: string): void;
        get previousPage(): string;
        get pageCount(): number;
        getPageName(index?: number): string;
        addPage(name?: string): void;
        addPageAt(name: string, index?: number): void;
        removePage(name: string): void;
        removePageAt(index?: number): void;
        clearPages(): void;
        hasPage(aName: string): boolean;
        getPageIndexById(aId: string): number;
        getPageIdByName(aName: string): string;
        getPageNameById(aId: string): string;
        getPageId(index?: number): string;
        get selectedPageId(): string;
        set selectedPageId(val: string);
        set oppositePageId(val: string);
        get previousPageId(): string;
        executeActions(): void;
        setup(xml: utils.XmlNode): void;
    }
}
declare namespace fgui.controller {
    class PageOption {
        private $controller;
        private $id;
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
declare namespace fgui.controller {
    class PlayTransitionAction extends Action {
        transitionName: string;
        repeat: number;
        delay: number;
        stopOnExit: boolean;
        private $currentTransition;
        protected enter(controller: Controller): void;
        protected leave(controller: Controller): void;
        /**@internal */
        setup(xml: utils.XmlNode): void;
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
    class Frame {
        addDelay: number;
        texture: PIXI.Texture;
    }
}
declare namespace fgui {
    class HTMLInput {
        private $input;
        private $singleLine;
        private $multiLine;
        private $curEle;
        /**@internal */
        $wrapper: HTMLDivElement;
        private $delegateDiv;
        private $canvas;
        /**@internal */
        $requestToShow: boolean;
        /**@internal */
        $scaleX: number;
        /**@internal */
        $scaleY: number;
        static isTyping: boolean;
        private constructor();
        private static $instance;
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
        private $requestToShow;
        private inputElement;
        private inputDiv;
        private $scaleX;
        private $scaleY;
        private textValue;
        private colorValue;
        protected $textfield: GTextInput;
        constructor(tf: GTextInput);
        /**@internal */
        $addToStage(): void;
        private initElement;
        get textField(): GTextField;
        /**@internal */
        $show(): void;
        onBlurHandler(): void;
        /**@internal */
        $hide(): void;
        get text(): string;
        set text(value: string);
        setColor(value: number): void;
        /**@internal */
        $onBlur(): void;
        onInputHandler(): void;
        private setAreaHeight;
        private getVAlignFactor;
        onClickHandler(e: Event): void;
        onDisconnect(): void;
        private setElementStyle;
        private $attrsCache;
        setAttribute(name: string, value: string): void;
        getAttribute(name: string): string;
        /**@internal */
        $removeFromStage(): void;
        resetInput(): void;
    }
}
declare namespace fgui {
    class MovieClip extends PIXI.Sprite implements IUIObject {
        interval: number;
        swing: boolean;
        repeatDelay: number;
        private $playing;
        private $frameCount;
        private $frames;
        private $currentFrame;
        private $status;
        private $settings;
        private data;
        private $boundsRect;
        UIOwner: GObject;
        constructor(owner: GObject);
        get frames(): Frame[];
        set frames(value: Frame[]);
        get frameCount(): number;
        get boundsRect(): PIXI.Rectangle;
        set boundsRect(value: PIXI.Rectangle);
        get currentFrame(): number;
        set currentFrame(value: number);
        get playing(): boolean;
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
        private $playEnd;
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
        private $curFrame;
        private $lastTime;
        private $curFrameDelay;
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
        protected $scrollRect: PIXI.Rectangle;
        protected $rectMask: PIXI.Graphics;
        UIOwner: GObject;
        constructor(owner?: GObject);
        get scrollRect(): PIXI.Rectangle;
        set scrollRect(rect: PIXI.Rectangle);
    }
}
declare namespace fgui {
    class UIImage extends PIXI.Container implements IUIObject {
        UIOwner: GObject;
        protected $disp: PIXIExtend.NineSlicePlane | PIXIExtend.Sprite;
        constructor(owner?: GObject);
        /**@internal */
        $initDisp(item?: PackageItem): void;
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
    const enum StageOrientation {
        AUTO = "auto",
        PORTRAIT = "portrait",
        LANDSCAPE = "landscape"
    }
    const enum StageScaleMode {
        NO_SCALE = "noScale",
        SHOW_ALL = "showAll",
        NO_BORDER = "noBorder",
        EXACT_FIT = "exactFit",
        FIXED_WIDTH = "fixedWidth",
        FIXED_HEIGHT = "fixedHeight",
        FIXED_AUTO = "fixedAuto"
    }
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
        protected $appContext: PIXI.Application;
        protected $appStage: PIXI.Container;
        protected $options: UIStageOptions;
        protected $width: number;
        protected $height: number;
        protected $scaleX: number;
        protected $scaleY: number;
        protected $canvasMatrix: PIXI.Matrix;
        offsetX: number;
        offsetY: number;
        private $sizeCalcer;
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
        protected $minHeight: number;
        protected $minHeightID: number;
        constructor(owner?: GObject);
        get minHeight(): number;
        /**@internal */
        $updateMinHeight(): void;
        protected updateFrame(): void;
        private internalUpdateFrame;
        protected _onTextureUpdate(): void;
        get width(): number;
        set width(v: number);
        get height(): number;
        set height(v: number);
        get textHeight(): number;
        set textHeight(v: number);
        get textWidth(): number;
        set textWidth(v: number);
    }
}
declare namespace fgui {
    const enum DisplayObjectEvent {
        XY_CHANGED = "__xyChanged",
        SIZE_CHANGED = "__sizeChanged",
        VISIBLE_CHANGED = "__visibleChanged",
        SIZE_DELAY_CHANGE = "__sizeDelayChange",
        MOUSE_WHEEL = "__mouseWheel"
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
        id: string;
        name: string;
        width: number;
        height: number;
        file: string;
        decoded: boolean;
        scale9Grid: PIXI.Rectangle;
        scaleByTile: boolean;
        tiledSlices: number;
        texture: PIXI.Texture;
        interval: number;
        repeatDelay: number;
        swing: boolean;
        frames: Frame[];
        componentData: utils.XmlNode;
        displayList: DisplayListItem[];
        bitmapFont: BitmapFont;
        load(): AssetTypes;
        toString(): string;
    }
}
declare namespace fgui {
    class UIObjectFactory {
        private static packageItemExtensions;
        private static loaderExtension;
        static setPackageItemExtension(url: string, type: {
            new (): GComponent;
        }): void;
        static setLoaderExtension(type: {
            new (): GLoader;
        }): void;
        static newObject(pi: PackageItem): GObject;
        /**@internal */
        static newObjectDirectly(type: string): GObject;
    }
}
declare namespace fgui {
    type AssetTypes = PIXI.Texture | BitmapFont | Frame[] | utils.XmlNode | PIXI.LoaderResource;
    class UIPackage {
        private $id;
        private $name;
        private $resKey;
        private $items;
        private $itemsById;
        private $itemsByName;
        private $resData;
        private $customId;
        private $atlasConfigs;
        /**@internal */
        static $constructingObjects: number;
        private static $packageInstById;
        private static $packageInstByName;
        private static $bitmapFonts;
        private static $stringsSource;
        private static sep0;
        private static sep1;
        private static sep2;
        private static sep3;
        constructor();
        static getById(id: string): UIPackage;
        static getByName(name: string): UIPackage;
        static addPackage(resKey: string, decompressor?: Decompressor): UIPackage;
        static removePackage(packageId: string): void;
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
        private create;
        private decompressPackage;
        dispose(): void;
        get id(): string;
        get name(): string;
        get customId(): string;
        set customId(value: string);
        createObject(resName: string, userClass?: {
            new (): GObject;
        }): GObject;
        internalCreateObject(item: PackageItem, userClass?: {
            new (): GObject;
        }): GObject;
        getItemById(itemId: string): PackageItem;
        getItemByName(resName: string): PackageItem;
        getItemAssetByName(resName: string): AssetTypes;
        private createSpriteTexture;
        getItemAsset(item: PackageItem): AssetTypes;
        private loadComponentChildren;
        private getResDescriptor;
        private loadComponentTranslation;
        private loadMovieClip;
        private loadFont;
    }
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
    class AssetLoader extends PIXI.Loader {
        protected static $resources: PIXI.IResourceDictionary;
        constructor(baseUrl?: string, concurrency?: number);
        protected _onComplete(): void;
        static get resourcesPool(): PIXI.IResourceDictionary;
        static destroyResource(key: string): void;
        static addResources(res: PIXI.IResourceDictionary): void;
    }
}
declare namespace fgui.utils {
    class Binder {
        static create<T extends Function>(func: Function, context: any, ...args: any[]): T;
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
        protected $inited: boolean;
        protected $textField: GTextInput;
        protected $input: InputElement;
        protected $restrictString: string;
        protected $restrictRegex: RegExp;
        protected $type: InputType;
        private $focused;
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
        $getProperty(name: string): string;
        /**@internal */
        $setProperty(name: string, value: string): void;
        get $restrict(): string;
        set $restrict(v: string);
        get type(): InputType;
        set type(v: InputType);
        private tryHideInput;
        /**@internal */
        $updateProperties(): void;
        /**@internal */
        $onFocus(): void;
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
declare namespace fgui.utils {
    class RawByte {
        private static inRange;
        static decodeUTF8(data: Uint8Array): string;
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
