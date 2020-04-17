window.fgui = {};
window.fairygui = window.fgui;
window.__extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

(function (fgui) {
    var Debug = /** @class */ (function () {
        function Debug() {
        }
        Debug.log = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!Debug.enableDebug) {
                return;
            }
            console.log.apply(console, args);
        };
        Debug.enableDebug = true;
        return Debug;
    }());
    fgui.Debug = Debug;
})(fgui || (fgui = {}));

(function (fgui) {
    var win = window;
    var hasPointer = !!(win.PointerEvent || win.MSPointerEvent);
    var hasTouch = 'ontouchstart' in window && PIXI.utils.isMobile.any;
    var InteractiveEvents = /** @class */ (function () {
        function InteractiveEvents() {
        }
        InteractiveEvents.Down = hasPointer ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
        InteractiveEvents.Cancel = hasPointer ? "pointercancel" : hasTouch ? "touchcancel" : "mousecancel";
        InteractiveEvents.Up = hasPointer ? "pointerup" : hasTouch ? "touchend" : "mouseup";
        InteractiveEvents.Click = hasPointer ? "pointertap" : hasTouch ? "tap" : "click";
        InteractiveEvents.UpOutside = hasPointer ? "pointerupoutside" : hasTouch ? "touchendoutside" : "mouseupoutside";
        InteractiveEvents.Move = hasPointer ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
        InteractiveEvents.Over = hasPointer ? "pointerover" : hasTouch ? null : "mouseover";
        InteractiveEvents.Out = hasPointer ? "pointerout" : hasTouch ? null : "mouseout";
        //mouse only
        InteractiveEvents.RightDown = "rightdown";
        InteractiveEvents.RightUp = "rightup";
        InteractiveEvents.RightClick = "rightclick";
        InteractiveEvents.RightUpOutside = "rightupoutside";
        // for adapte
        InteractiveEvents.TouchBegin = InteractiveEvents.Down;
        InteractiveEvents.TouchEnd = InteractiveEvents.Up;
        return InteractiveEvents;
    }());
    fgui.InteractiveEvents = InteractiveEvents;
    ;
    fgui.GearXMLNodeNameMap = {
        "gearDisplay": 0,
        "gearXY": 1,
        "gearSize": 2,
        "gearLook": 3,
        "gearColor": 4,
        "gearAni": 5,
        "gearText": 6,
        "gearIcon": 7
    };
    fgui.BlendModeMap = [
        "Normal",
        "Add",
        "Multiply",
        "Screen",
        "Overlay",
        "Darken",
        "Lighten",
        "ColorDodge",
        "ColorBurn",
        "HardLight",
        "SoftLight",
        "Difference",
        "Exclusion",
        "Hue",
        "Saturation",
        "Color",
        "Luminosity",
        "NormalNPM",
        "AddNPM",
        "ScreenNPM" //  SCREEN_NPM
    ];
    ;
    ;
})(fgui || (fgui = {}));
var fairygui = fgui;

(function (fgui) {
    var ButtonMode;
    (function (ButtonMode) {
        ButtonMode[ButtonMode["Common"] = 0] = "Common";
        ButtonMode[ButtonMode["Check"] = 1] = "Check";
        ButtonMode[ButtonMode["Radio"] = 2] = "Radio";
    })(ButtonMode = fgui.ButtonMode || (fgui.ButtonMode = {}));
    var AutoSizeType;
    (function (AutoSizeType) {
        AutoSizeType[AutoSizeType["None"] = 0] = "None";
        AutoSizeType[AutoSizeType["Both"] = 1] = "Both";
        AutoSizeType[AutoSizeType["Height"] = 2] = "Height";
        AutoSizeType[AutoSizeType["Shrink"] = 3] = "Shrink";
    })(AutoSizeType = fgui.AutoSizeType || (fgui.AutoSizeType = {}));
    var AlignType;
    (function (AlignType) {
        AlignType["Left"] = "left";
        AlignType["Center"] = "center";
        AlignType["Right"] = "right";
    })(AlignType = fgui.AlignType || (fgui.AlignType = {}));
    fgui.AlignMap = [AlignType.Left, AlignType.Center, AlignType.Right];
    //export const AlignEnumMap = {"left" : 0, "center" : 1, "right" : 2};
    var VertAlignType;
    (function (VertAlignType) {
        VertAlignType[VertAlignType["Top"] = 0] = "Top";
        VertAlignType[VertAlignType["Middle"] = 1] = "Middle";
        VertAlignType[VertAlignType["Bottom"] = 2] = "Bottom";
    })(VertAlignType = fgui.VertAlignType || (fgui.VertAlignType = {}));
    var LoaderFillType;
    (function (LoaderFillType) {
        LoaderFillType[LoaderFillType["None"] = 0] = "None";
        LoaderFillType[LoaderFillType["Scale"] = 1] = "Scale";
        LoaderFillType[LoaderFillType["ScaleMatchHeight"] = 2] = "ScaleMatchHeight";
        LoaderFillType[LoaderFillType["ScaleMatchWidth"] = 3] = "ScaleMatchWidth";
        LoaderFillType[LoaderFillType["ScaleFree"] = 4] = "ScaleFree";
        LoaderFillType[LoaderFillType["ScaleNoBorder"] = 5] = "ScaleNoBorder";
    })(LoaderFillType = fgui.LoaderFillType || (fgui.LoaderFillType = {}));
    var ListLayoutType;
    (function (ListLayoutType) {
        ListLayoutType[ListLayoutType["SingleColumn"] = 0] = "SingleColumn";
        ListLayoutType[ListLayoutType["SingleRow"] = 1] = "SingleRow";
        ListLayoutType[ListLayoutType["FlowHorizontal"] = 2] = "FlowHorizontal";
        ListLayoutType[ListLayoutType["FlowVertical"] = 3] = "FlowVertical";
        ListLayoutType[ListLayoutType["Pagination"] = 4] = "Pagination";
    })(ListLayoutType = fgui.ListLayoutType || (fgui.ListLayoutType = {}));
    var ListSelectionMode;
    (function (ListSelectionMode) {
        ListSelectionMode[ListSelectionMode["Single"] = 0] = "Single";
        ListSelectionMode[ListSelectionMode["Multiple"] = 1] = "Multiple";
        ListSelectionMode[ListSelectionMode["Multiple_SingleClick"] = 2] = "Multiple_SingleClick";
        ListSelectionMode[ListSelectionMode["None"] = 3] = "None";
    })(ListSelectionMode = fgui.ListSelectionMode || (fgui.ListSelectionMode = {}));
    var OverflowType;
    (function (OverflowType) {
        OverflowType[OverflowType["Visible"] = 0] = "Visible";
        OverflowType[OverflowType["Hidden"] = 1] = "Hidden";
        OverflowType[OverflowType["Scroll"] = 2] = "Scroll";
        OverflowType[OverflowType["Scale"] = 3] = "Scale";
        OverflowType[OverflowType["ScaleFree"] = 4] = "ScaleFree";
    })(OverflowType = fgui.OverflowType || (fgui.OverflowType = {}));
    var PackageItemType;
    (function (PackageItemType) {
        PackageItemType[PackageItemType["Image"] = 0] = "Image";
        PackageItemType[PackageItemType["MovieClip"] = 1] = "MovieClip";
        PackageItemType[PackageItemType["Sound"] = 2] = "Sound";
        PackageItemType[PackageItemType["Component"] = 3] = "Component";
        PackageItemType[PackageItemType["Atlas"] = 4] = "Atlas";
        PackageItemType[PackageItemType["Font"] = 5] = "Font";
        PackageItemType[PackageItemType["Swf"] = 6] = "Swf";
        PackageItemType[PackageItemType["Misc"] = 7] = "Misc";
        PackageItemType[PackageItemType["Unknown"] = 8] = "Unknown";
    })(PackageItemType = fgui.PackageItemType || (fgui.PackageItemType = {}));
    ;
    var ObjectType;
    (function (ObjectType) {
        ObjectType[ObjectType["Image"] = 0] = "Image";
        ObjectType[ObjectType["MovieClip"] = 1] = "MovieClip";
        ObjectType[ObjectType["Swf"] = 2] = "Swf";
        ObjectType[ObjectType["Graph"] = 3] = "Graph";
        ObjectType[ObjectType["Loader"] = 4] = "Loader";
        ObjectType[ObjectType["Group"] = 5] = "Group";
        ObjectType[ObjectType["Text"] = 6] = "Text";
        ObjectType[ObjectType["RichText"] = 7] = "RichText";
        ObjectType[ObjectType["InputText"] = 8] = "InputText";
        ObjectType[ObjectType["Component"] = 9] = "Component";
        ObjectType[ObjectType["List"] = 10] = "List";
        ObjectType[ObjectType["Label"] = 11] = "Label";
        ObjectType[ObjectType["Button"] = 12] = "Button";
        ObjectType[ObjectType["ComboBox"] = 13] = "ComboBox";
        ObjectType[ObjectType["ProgressBar"] = 14] = "ProgressBar";
        ObjectType[ObjectType["Slider"] = 15] = "Slider";
        ObjectType[ObjectType["ScrollBar"] = 16] = "ScrollBar";
        ObjectType[ObjectType["Tree"] = 17] = "Tree";
    })(ObjectType = fgui.ObjectType || (fgui.ObjectType = {}));
    var ProgressTitleType;
    (function (ProgressTitleType) {
        ProgressTitleType[ProgressTitleType["Percent"] = 0] = "Percent";
        ProgressTitleType[ProgressTitleType["ValueAndMax"] = 1] = "ValueAndMax";
        ProgressTitleType[ProgressTitleType["Value"] = 2] = "Value";
        ProgressTitleType[ProgressTitleType["Max"] = 3] = "Max";
    })(ProgressTitleType = fgui.ProgressTitleType || (fgui.ProgressTitleType = {}));
    var ScrollBarDisplayType;
    (function (ScrollBarDisplayType) {
        ScrollBarDisplayType[ScrollBarDisplayType["Default"] = 0] = "Default";
        ScrollBarDisplayType[ScrollBarDisplayType["Visible"] = 1] = "Visible";
        ScrollBarDisplayType[ScrollBarDisplayType["Auto"] = 2] = "Auto";
        ScrollBarDisplayType[ScrollBarDisplayType["Hidden"] = 3] = "Hidden";
    })(ScrollBarDisplayType = fgui.ScrollBarDisplayType || (fgui.ScrollBarDisplayType = {}));
    ;
    var ScrollType;
    (function (ScrollType) {
        ScrollType[ScrollType["Horizontal"] = 0] = "Horizontal";
        ScrollType[ScrollType["Vertical"] = 1] = "Vertical";
        ScrollType[ScrollType["Both"] = 2] = "Both";
    })(ScrollType = fgui.ScrollType || (fgui.ScrollType = {}));
    ;
    var FlipType;
    (function (FlipType) {
        FlipType[FlipType["None"] = 0] = "None";
        FlipType[FlipType["Horizontal"] = 1] = "Horizontal";
        FlipType[FlipType["Vertical"] = 2] = "Vertical";
        FlipType[FlipType["Both"] = 3] = "Both";
    })(FlipType = fgui.FlipType || (fgui.FlipType = {}));
    var ChildrenRenderOrder;
    (function (ChildrenRenderOrder) {
        ChildrenRenderOrder[ChildrenRenderOrder["Ascent"] = 0] = "Ascent";
        ChildrenRenderOrder[ChildrenRenderOrder["Descent"] = 1] = "Descent";
        ChildrenRenderOrder[ChildrenRenderOrder["Arch"] = 2] = "Arch";
    })(ChildrenRenderOrder = fgui.ChildrenRenderOrder || (fgui.ChildrenRenderOrder = {}));
    var GroupLayoutType;
    (function (GroupLayoutType) {
        GroupLayoutType[GroupLayoutType["None"] = 0] = "None";
        GroupLayoutType[GroupLayoutType["Horizontal"] = 1] = "Horizontal";
        GroupLayoutType[GroupLayoutType["Vertical"] = 2] = "Vertical";
    })(GroupLayoutType = fgui.GroupLayoutType || (fgui.GroupLayoutType = {}));
    var PopupDirection;
    (function (PopupDirection) {
        PopupDirection[PopupDirection["Auto"] = 0] = "Auto";
        PopupDirection[PopupDirection["Up"] = 1] = "Up";
        PopupDirection[PopupDirection["Down"] = 2] = "Down";
    })(PopupDirection = fgui.PopupDirection || (fgui.PopupDirection = {}));
    var RelationType;
    (function (RelationType) {
        RelationType[RelationType["Left_Left"] = 0] = "Left_Left";
        RelationType[RelationType["Left_Center"] = 1] = "Left_Center";
        RelationType[RelationType["Left_Right"] = 2] = "Left_Right";
        RelationType[RelationType["Center_Center"] = 3] = "Center_Center";
        RelationType[RelationType["Right_Left"] = 4] = "Right_Left";
        RelationType[RelationType["Right_Center"] = 5] = "Right_Center";
        RelationType[RelationType["Right_Right"] = 6] = "Right_Right";
        RelationType[RelationType["Top_Top"] = 7] = "Top_Top";
        RelationType[RelationType["Top_Middle"] = 8] = "Top_Middle";
        RelationType[RelationType["Top_Bottom"] = 9] = "Top_Bottom";
        RelationType[RelationType["Middle_Middle"] = 10] = "Middle_Middle";
        RelationType[RelationType["Bottom_Top"] = 11] = "Bottom_Top";
        RelationType[RelationType["Bottom_Middle"] = 12] = "Bottom_Middle";
        RelationType[RelationType["Bottom_Bottom"] = 13] = "Bottom_Bottom";
        RelationType[RelationType["Width"] = 14] = "Width";
        RelationType[RelationType["Height"] = 15] = "Height";
        RelationType[RelationType["LeftExt_Left"] = 16] = "LeftExt_Left";
        RelationType[RelationType["LeftExt_Right"] = 17] = "LeftExt_Right";
        RelationType[RelationType["RightExt_Left"] = 18] = "RightExt_Left";
        RelationType[RelationType["RightExt_Right"] = 19] = "RightExt_Right";
        RelationType[RelationType["TopExt_Top"] = 20] = "TopExt_Top";
        RelationType[RelationType["TopExt_Bottom"] = 21] = "TopExt_Bottom";
        RelationType[RelationType["BottomExt_Top"] = 22] = "BottomExt_Top";
        RelationType[RelationType["BottomExt_Bottom"] = 23] = "BottomExt_Bottom";
        RelationType[RelationType["Size"] = 24] = "Size";
    })(RelationType = fgui.RelationType || (fgui.RelationType = {}));
    var FillMethod;
    (function (FillMethod) {
        FillMethod[FillMethod["None"] = 0] = "None";
        FillMethod[FillMethod["Horizontal"] = 1] = "Horizontal";
        FillMethod[FillMethod["Vertical"] = 2] = "Vertical";
        FillMethod[FillMethod["Radial90"] = 3] = "Radial90";
        FillMethod[FillMethod["Radial180"] = 4] = "Radial180";
        FillMethod[FillMethod["Radial360"] = 5] = "Radial360";
    })(FillMethod = fgui.FillMethod || (fgui.FillMethod = {}));
    var FillOrigin;
    (function (FillOrigin) {
        FillOrigin[FillOrigin["Top"] = 0] = "Top";
        FillOrigin[FillOrigin["Bottom"] = 1] = "Bottom";
        FillOrigin[FillOrigin["Left"] = 2] = "Left";
        FillOrigin[FillOrigin["Right"] = 3] = "Right";
        FillOrigin[FillOrigin["TopLeft"] = 0] = "TopLeft";
        FillOrigin[FillOrigin["TopRight"] = 1] = "TopRight";
        FillOrigin[FillOrigin["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin[FillOrigin["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin = fgui.FillOrigin || (fgui.FillOrigin = {}));
    var FillOrigin90;
    (function (FillOrigin90) {
        FillOrigin90[FillOrigin90["TopLeft"] = 0] = "TopLeft";
        FillOrigin90[FillOrigin90["TopRight"] = 1] = "TopRight";
        FillOrigin90[FillOrigin90["BottomLeft"] = 2] = "BottomLeft";
        FillOrigin90[FillOrigin90["BottomRight"] = 3] = "BottomRight";
    })(FillOrigin90 = fgui.FillOrigin90 || (fgui.FillOrigin90 = {}));
    var ObjectPropID;
    (function (ObjectPropID) {
        ObjectPropID[ObjectPropID["Text"] = 0] = "Text";
        ObjectPropID[ObjectPropID["Icon"] = 1] = "Icon";
        ObjectPropID[ObjectPropID["Color"] = 2] = "Color";
        ObjectPropID[ObjectPropID["OutlineColor"] = 3] = "OutlineColor";
        ObjectPropID[ObjectPropID["Playing"] = 4] = "Playing";
        ObjectPropID[ObjectPropID["Frame"] = 5] = "Frame";
        ObjectPropID[ObjectPropID["DeltaTime"] = 6] = "DeltaTime";
        ObjectPropID[ObjectPropID["TimeScale"] = 7] = "TimeScale";
        ObjectPropID[ObjectPropID["FontSize"] = 8] = "FontSize";
        ObjectPropID[ObjectPropID["Selected"] = 9] = "Selected";
    })(ObjectPropID = fgui.ObjectPropID || (fgui.ObjectPropID = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    function createHandler(type, obj) {
        var handle = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length > 0 && args[0] instanceof PIXI.interaction.InteractionEvent) {
                args[0]["gObject"] = obj;
            }
            obj.emit.apply(obj, __spreadArrays([type], args));
        };
        return handle;
    }
    /**
     * UI 事件代理
     */
    var UIEventProxy = /** @class */ (function (_super) {
        __extends(UIEventProxy, _super);
        function UIEventProxy() {
            var _this = _super.call(this) || this;
            _this._proxys = {};
            return _this;
        }
        UIEventProxy.prototype.on = function (type, listener, thisArg) {
            _super.prototype.on.call(this, type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.on(type, this._proxys[type], this);
                }
            }
            return this;
        };
        UIEventProxy.prototype.once = function (type, listener, thisArg) {
            _super.prototype.once.call(this, type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.on(type, this._proxys[type], this);
                }
            }
            return this;
        };
        UIEventProxy.prototype.off = function (type, listener, thisArg) {
            _super.prototype.off.call(this, type, listener, thisArg);
            if (this._displayObject != null && this.listenerCount(type) <= 0) {
                if (this._proxys[type]) {
                    this._displayObject.off(type, this._proxys[type], thisArg);
                }
            }
            return this;
        };
        UIEventProxy.prototype.addListener = function (type, listener, thisArg) {
            _super.prototype.addListener.call(this, type, listener, thisArg);
            if (this._displayObject != null) {
                if (!this._proxys[type]) {
                    this._proxys[type] = createHandler(type, this);
                    this._displayObject.addListener(type, this._proxys[type], this);
                }
            }
            return this;
        };
        UIEventProxy.prototype.removeListener = function (type, listener, thisArg) {
            _super.prototype.removeListener.call(this, type, listener, thisArg);
            if (this._displayObject != null && this.listenerCount(type) <= 0) {
                if (this._proxys[type]) {
                    this._displayObject.off(type, this._proxys[type], thisArg);
                }
            }
            return this;
        };
        UIEventProxy.prototype.removeAllListeners = function (type) {
            _super.prototype.removeAllListeners.call(this, type);
            if (this._displayObject != null) {
                this._displayObject.removeListener(type);
            }
            return this;
        };
        return UIEventProxy;
    }(PIXI.utils.EventEmitter));
    fgui.UIEventProxy = UIEventProxy;
})(fgui || (fgui = {}));
/// <reference path="./events/DisplayObjectEvent.ts" />
/// <reference path="./UIEventProxy.ts" />

/// <reference path="./events/DisplayObjectEvent.ts" />
/// <reference path="./UIEventProxy.ts" />
(function (fgui) {
    var GObject = /** @class */ (function (_super) {
        __extends(GObject, _super);
        /**@internal */
        //_inProgressBuilding: boolean;   //parsing xml & building
        function GObject() {
            var _this = _super.call(this) || this;
            _this._x = 0;
            _this._y = 0;
            _this._alpha = 1;
            _this._rotation = 0;
            _this._visible = true;
            _this._touchable = true;
            _this._grayed = false;
            _this._draggable = false;
            _this._scaleX = 1;
            _this._scaleY = 1;
            _this._skewX = 0;
            _this._skewY = 0;
            _this._pivot = new PIXI.Point();
            _this._pivotAsAnchor = false;
            _this._pivotOffset = new PIXI.Point();
            _this._sortingOrder = 0;
            _this._internalVisible = true;
            _this._handlingController = false;
            _this._focusable = false;
            _this._pixelSnapping = false;
            _this._disposed = false;
            _this.sourceWidth = 0;
            _this.sourceHeight = 0;
            _this.initWidth = 0;
            _this.initHeight = 0;
            _this.minWidth = 0;
            _this.minHeight = 0;
            _this.maxWidth = 0;
            _this.maxHeight = 0;
            _this._width = 0;
            _this._height = 0;
            _this._rawWidth = 0;
            _this._rawHeight = 0;
            _this._sizePercentInGroup = 0;
            _this._lastColorComponents = null;
            _this._id = "" + GObject._gInstanceCounter++;
            _this._name = "";
            _this.createDisplayObject();
            _this._relations = new fgui.Relations(_this);
            _this._gears = [];
            return _this;
        }
        Object.defineProperty(GObject.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "name", {
            get: function () {
                return this._name;
            },
            set: function (value) {
                this._name = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "x", {
            get: function () {
                return this._x;
            },
            set: function (value) {
                this.setXY(value, this._y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "y", {
            get: function () {
                return this._y;
            },
            set: function (value) {
                this.setXY(this._x, value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "xMin", {
            get: function () {
                return this._pivotAsAnchor ? (this._x - this._width * this._pivot.x) : this._x;
            },
            set: function (value) {
                if (this._pivotAsAnchor)
                    this.setXY(value + this._width * this._pivot.x, this._y);
                else
                    this.setXY(value, this._y);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "yMin", {
            get: function () {
                return this._pivotAsAnchor ? (this._y - this._height * this._pivot.y) : this._y;
            },
            set: function (value) {
                if (this._pivotAsAnchor)
                    this.setXY(this._x, value + this._height * this._pivot.y);
                else
                    this.setXY(this._x, value);
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.setXY = function (xv, yv) {
            if (this._x != xv || this._y != yv) {
                this._x = xv;
                this._y = yv;
                this.handleXYChanged();
                this.updateGear(1 /* XY */);
                if (this._parent) {
                    this._parent.setBoundsChangedFlag();
                    this._displayObject.emit("__xyChanged" /* XY_CHANGED */, this);
                }
                if (GObject.draggingObject == this && !GObject.sUpdatingWhileDragging) {
                    this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
                }
            }
        };
        Object.defineProperty(GObject.prototype, "pixelSnapping", {
            get: function () {
                return this._pixelSnapping;
            },
            set: function (value) {
                if (this._pixelSnapping != value) {
                    this._pixelSnapping = value;
                    this.handleXYChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.center = function (restraint) {
            if (restraint === void 0) { restraint = false; }
            var r;
            if (this._parent != null)
                r = this.parent;
            else
                r = this.root;
            this.setXY((r.width - this.width) / 2, (r.height - this.height) / 2);
            if (restraint) {
                this.addRelation(r, fgui.RelationType.Center_Center);
                this.addRelation(r, fgui.RelationType.Middle_Middle);
            }
        };
        Object.defineProperty(GObject.prototype, "width", {
            get: function () {
                this.ensureSizeCorrect();
                if (this._relations.sizeDirty) {
                    this._relations.ensureRelationsSizeCorrect();
                }
                return this._width;
            },
            set: function (value) {
                this.setSize(value, this._rawHeight);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "height", {
            get: function () {
                this.ensureSizeCorrect();
                if (this._relations.sizeDirty) {
                    this._relations.ensureRelationsSizeCorrect();
                }
                return this._height;
            },
            set: function (value) {
                this.setSize(this._rawWidth, value);
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.setSize = function (wv, hv, ignorePivot) {
            if (ignorePivot === void 0) { ignorePivot = false; }
            if (this._rawWidth != wv || this._rawHeight != hv) {
                this._rawWidth = wv;
                this._rawHeight = hv;
                wv = Math.max(0, wv);
                hv = Math.max(0, hv);
                var diffw = wv - this.mapPivotWidth(1);
                var diffh = hv - this.mapPivotHeight(1);
                this._width = wv;
                this._height = hv;
                this.handleSizeChanged();
                if (this._pivot.x != 0 || this._pivot.y != 0) {
                    if (!this._pivotAsAnchor) {
                        if (!ignorePivot) {
                            this.setXY(this.x - this._pivot.x * diffw, this.y - this._pivot.y * diffh);
                        }
                        this.updatePivotOffset();
                    }
                    else {
                        this.applyPivot();
                    }
                }
                this.updateGear(2 /* Size */);
                if (this._parent) {
                    this._relations.onOwnerSizeChanged(diffw, diffh, this._pivotAsAnchor || !ignorePivot);
                    this._parent.setBoundsChangedFlag();
                }
                this._displayObject.emit("__sizeChanged" /* SIZE_CHANGED */, this);
            }
        };
        GObject.prototype.makeFullScreen = function () {
            this.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        };
        GObject.prototype.ensureSizeCorrect = function () {
        };
        Object.defineProperty(GObject.prototype, "actualWidth", {
            get: function () {
                return this.width * Math.abs(this._scaleX);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "actualHeight", {
            get: function () {
                return this.height * Math.abs(this._scaleY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "scaleX", {
            get: function () {
                return this._scaleX;
            },
            set: function (value) {
                this.setScale(value, this._scaleY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "scaleY", {
            get: function () {
                return this._scaleY;
            },
            set: function (value) {
                this.setScale(this._scaleX, value);
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.setScale = function (sx, sy) {
            if (this._scaleX != sx || this._scaleY != sy) {
                this._scaleX = sx;
                this._scaleY = sy;
                this.handleScaleChanged();
                this.applyPivot();
                this.updateGear(2 /* Size */);
            }
        };
        Object.defineProperty(GObject.prototype, "skewX", {
            get: function () {
                return this._skewX;
            },
            set: function (value) {
                this.setSkew(value, this._skewY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "skewY", {
            get: function () {
                return this._skewY;
            },
            set: function (value) {
                this.setSkew(this._skewX, value);
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.setSkew = function (xv, yv) {
            if (this._skewX != xv || this._skewY != yv) {
                this._skewX = xv;
                this._skewY = yv;
                this._displayObject.skew.set(xv * -fgui.utils.NumberUtil.RADIAN, yv * fgui.utils.NumberUtil.RADIAN);
                this.applyPivot();
            }
        };
        GObject.prototype.mapPivotWidth = function (scale) {
            return scale * this._width;
        };
        GObject.prototype.mapPivotHeight = function (scale) {
            return scale * this._height;
        };
        Object.defineProperty(GObject.prototype, "pivotX", {
            get: function () {
                return this._pivot.x;
            },
            set: function (value) {
                this.setPivot(value, this.pivotY);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "pivotY", {
            get: function () {
                return this._pivot.y;
            },
            set: function (value) {
                this.setPivot(this.pivotX, value);
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.setPivot = function (xv, yv, asAnchor) {
            if (asAnchor === void 0) { asAnchor = false; }
            if (this._pivot.x != xv || this._pivot.y != yv || this._pivotAsAnchor != asAnchor) {
                this._pivot.set(xv, yv);
                this._pivotAsAnchor = asAnchor;
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        };
        Object.defineProperty(GObject.prototype, "pivotAsAnchor", {
            get: function () {
                return this._pivotAsAnchor;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.internalSetPivot = function (xv, yv, asAnchor) {
            this._pivot.set(xv, yv);
            this._pivotAsAnchor = asAnchor;
            if (asAnchor) {
                this.handleXYChanged();
            }
        };
        GObject.prototype.updatePivotOffset = function () {
            if (this._pivot.x != 0 || this._pivot.y != 0 && this._displayObject.transform) {
                var vx = this.mapPivotWidth(this._pivot.x), vy = this.mapPivotHeight(this._pivot.y);
                GObject.sHelperPoint.set(vx, vy);
                this._displayObject.transform.updateLocalTransform(); //TODO: sync with PIXI instead of update actively
                var trans = this._displayObject.localTransform;
                var p = trans.apply(GObject.sHelperPoint, GObject.sHelperPoint);
                p.x -= trans.tx, p.y -= trans.ty;
                this._pivotOffset.set(this._pivot.x * this._width - p.x, this._pivot.y * this._height - p.y);
            }
            else {
                this._pivotOffset.set(0, 0);
            }
        };
        GObject.prototype.applyPivot = function () {
            if (this._pivot.x != 0 || this._pivot.y != 0) {
                this.updatePivotOffset();
                this.handleXYChanged();
            }
        };
        Object.defineProperty(GObject.prototype, "touchable", {
            get: function () {
                return this._touchable;
            },
            set: function (value) {
                if (this._touchable == value) {
                    return;
                }
                this._touchable = value;
                this._displayObject.interactive = this._touchable;
                this.updateGear(3 /* Look */);
                if ((this instanceof fgui.GImage) || (this instanceof fgui.GMovieClip)
                    || (this instanceof fgui.GTextField) && !(this instanceof fgui.GTextInput) && !(this instanceof fgui.GRichTextField))
                    //Touch is not supported by GImage/GMovieClip/GTextField
                    return;
                // change children interactive mode
                // 改变子对象 `是否可触摸` 状态
                if (this._displayObject instanceof PIXI.Container) {
                    this._displayObject.interactiveChildren = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.onClick = function (listener, thisArg) {
            this.on(fgui.InteractiveEvents.Click, listener, thisArg);
        };
        GObject.prototype.offClick = function (listener, thisArg) {
            this.off(fgui.InteractiveEvents.Click, listener, thisArg);
        };
        Object.defineProperty(GObject.prototype, "grayed", {
            /////////////////////////////////////////////////////////
            get: function () {
                return this._grayed;
            },
            set: function (value) {
                if (this._grayed != value) {
                    this._grayed = value;
                    this.handleGrayedChanged();
                    this.updateGear(3 /* Look */);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "enabled", {
            get: function () {
                return !this._grayed && this._touchable;
            },
            set: function (value) {
                this.grayed = !value;
                this.touchable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "rotation", {
            get: function () {
                return this._rotation;
            },
            set: function (value) {
                if (this._rotation != value) {
                    this._rotation = value;
                    if (this._displayObject) {
                        this._displayObject.rotation = fgui.utils.NumberUtil.angleToRadian(this.normalizeRotation);
                    }
                    this.applyPivot();
                    this.updateGear(3 /* Look */);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "normalizeRotation", {
            get: function () {
                var rot = this._rotation % 360;
                if (rot > 180) {
                    rot -= 360;
                }
                else if (rot < -180) {
                    rot += 360;
                }
                return rot;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "alpha", {
            get: function () {
                return this._alpha;
            },
            set: function (value) {
                if (this._alpha != value) {
                    this._alpha = value;
                    this.updateAlpha();
                }
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.updateAlpha = function () {
            if (this._displayObject) {
                this._displayObject.alpha = this._alpha;
            }
            this.updateGear(3 /* Look */);
        };
        Object.defineProperty(GObject.prototype, "visible", {
            get: function () {
                return this._visible;
            },
            set: function (value) {
                if (this._visible != value) {
                    this._visible = value;
                    if (this._displayObject) {
                        this._displayObject.visible = this._visible;
                    }
                    if (this._parent) {
                        this._parent.childStateChanged(this);
                        this._parent.setBoundsChangedFlag();
                    }
                    this.emit("__visibleChanged" /* VISIBLE_CHANGED */, this._visible, this);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "internalVisible", {
            /**@internal */
            get: function () {
                return this._internalVisible;
            },
            /**@internal */
            set: function (value) {
                if (value != this._internalVisible) {
                    this._internalVisible = value;
                    if (this._parent) {
                        this._parent.childStateChanged(this);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "internalVisible2", {
            get: function () {
                return this._visible && (!this._group || this._group.internalVisible2);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "internalVisible3", {
            get: function () {
                return this._visible && this._internalVisible;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "finalVisible", {
            get: function () {
                return this._visible && this._internalVisible && (!this._group || this._group.finalVisible);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "sortingOrder", {
            get: function () {
                return this._sortingOrder;
            },
            set: function (value) {
                if (value < 0)
                    value = 0;
                if (this._sortingOrder != value) {
                    var old = this._sortingOrder;
                    this._sortingOrder = value;
                    if (this._parent != null) {
                        this._parent.childSortingOrderChanged(this, old, this._sortingOrder);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "focusable", {
            get: function () {
                return this._focusable;
            },
            set: function (value) {
                this._focusable = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "focused", {
            get: function () {
                return this.root.focus == this;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.requestFocus = function () {
            var p = this;
            while (p && !p._focusable)
                p = p.parent;
            if (p != null) {
                this.root.focus = p;
            }
        };
        Object.defineProperty(GObject.prototype, "tooltips", {
            get: function () {
                return this._tooltips;
            },
            set: function (value) {
                this._tooltips = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "blendMode", {
            get: function () {
                if (this._displayObject && this._displayObject instanceof PIXI.Sprite) {
                    return fgui.BlendModeMap[this._displayObject.blendMode] || "None";
                }
                return fgui.BlendModeMap[0]; //Normal
            },
            set: function (value) {
                if (!value || !value.length || !this._displayObject || !(this._displayObject instanceof PIXI.Sprite))
                    return;
                for (var i = 0; i < fgui.BlendModeMap.length; i++) {
                    if (fgui.BlendModeMap[i].toLowerCase() === value.toLowerCase()) {
                        this._displayObject.blendMode = i;
                        return;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "filters", {
            get: function () {
                return this._displayObject.filters;
            },
            set: function (value) {
                this._displayObject.filters = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "inContainer", {
            get: function () {
                return this._displayObject != null && this._displayObject.parent != null;
            },
            enumerable: true,
            configurable: true
        });
        GObject.isDisplayObjectOnStage = function (display) {
            if (!display || !display.parent) {
                return false;
            }
            var p = display;
            while (p != null) {
                if (p == fgui.GRoot.inst.nativeStage) {
                    return true;
                }
                p = p.parent;
            }
            return false;
        };
        Object.defineProperty(GObject.prototype, "onStage", {
            get: function () {
                return GObject.isDisplayObjectOnStage(this._displayObject);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "resourceURL", {
            get: function () {
                if (this.packageItem != null)
                    return "ui://" + this.packageItem.owner.id + this.packageItem.id;
                else
                    return null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "group", {
            get: function () {
                return this._group;
            },
            set: function (value) {
                if (this._group != value) {
                    if (this._group != null) {
                        this._group.setBoundsChangedFlag();
                    }
                    this._group = value;
                    if (this._group != null) {
                        this._group.setBoundsChangedFlag();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.getGear = function (index) {
            var gear = this._gears[index];
            if (gear == null) {
                gear = fgui.GearBase.create(this, index);
                this._gears[index] = gear;
            }
            return gear;
        };
        GObject.prototype.updateGear = function (index) {
            if (this._underConstruct || this._gearLocked) {
                return;
            }
            var gear = this._gears[index];
            if (gear != null && gear.controller != null) {
                gear.updateState();
            }
        };
        GObject.prototype.checkGearController = function (index, c) {
            return this._gears[index] != null && this._gears[index].controller == c;
        };
        GObject.prototype.updateGearFromRelations = function (index, dx, dy) {
            if (this._gears[index] != null) {
                this._gears[index].updateFromRelations(dx, dy);
            }
        };
        GObject.prototype.addDisplayLock = function () {
            var gearDisplay = this._gears[0];
            if (gearDisplay && gearDisplay.controller) {
                var ret = gearDisplay.addLock();
                this.checkGearDisplay();
                return ret;
            }
            else {
                return 0;
            }
        };
        GObject.prototype.releaseDisplayLock = function (token) {
            var gearDisplay = this._gears[0];
            if (gearDisplay && gearDisplay.controller) {
                gearDisplay.releaseLock(token);
                this.checkGearDisplay();
            }
        };
        GObject.prototype.hasGearController = function (index, c) {
            return this._gears[index] && this._gears[index].controller == c;
        };
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
        GObject.prototype.checkGearDisplay = function () {
            if (this._handlingController)
                return;
            var connected = this._gears[0] == null || this._gears[0].connected;
            if (this._gears[8])
                connected = this._gears[8].evaluate(connected);
            if (connected != this._internalVisible) {
                this._internalVisible = connected;
                if (this._parent)
                    this._parent.childStateChanged(this);
                if (this._group && this._group.excludeInvisibles)
                    this._group.setBoundsChangedFlag();
            }
        };
        GObject.prototype.checkGearVisible = function () {
            if (this._handlingController)
                return;
            var g = this._gears[0];
            var v = !g || g.connected;
            if (v != this._internalVisible) {
                this._internalVisible = v;
                if (this._parent)
                    this._parent.childStateChanged(this);
            }
        };
        Object.defineProperty(GObject.prototype, "gearXY", {
            get: function () {
                return this.getGear(1 /* XY */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "gearSize", {
            get: function () {
                return this.getGear(2 /* Size */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "gearLook", {
            get: function () {
                return this.getGear(3 /* Look */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "relations", {
            get: function () {
                return this._relations;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.addRelation = function (target, relationType, usePercent) {
            if (usePercent === void 0) { usePercent = false; }
            this._relations.add(target, relationType, usePercent);
        };
        GObject.prototype.removeRelation = function (target, relationType) {
            if (relationType === void 0) { relationType = 0; }
            this._relations.remove(target, relationType);
        };
        Object.defineProperty(GObject.prototype, "displayObject", {
            /**
             * PIXI 显示对象，通过改实例可获取显示对象
             */
            get: function () {
                return this._displayObject;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.createDisplayObject = function () {
        };
        GObject.prototype.setDisplayObject = function (value) {
            if (this._displayObject != value) {
                if (this._displayObject) {
                    delete this._displayObject["$owner"];
                }
                this._displayObject = value;
                this._displayObject["$owner"] = this;
            }
        };
        Object.defineProperty(GObject.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            set: function (val) {
                this._parent = val;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.removeFromParent = function () {
            if (this._parent) {
                this._parent.removeChild(this);
            }
        };
        Object.defineProperty(GObject.prototype, "root", {
            get: function () {
                if (this instanceof fgui.GRoot) {
                    return this;
                }
                var p = this._parent;
                while (p) {
                    if (p instanceof fgui.GRoot) {
                        return p;
                    }
                    p = p.parent;
                }
                return fgui.GRoot.inst;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asCom", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asButton", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asLabel", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asProgress", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asTextField", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asRichTextField", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asTextInput", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asLoader", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asList", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asTree", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asGraph", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asGroup", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asSlider", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asComboBox", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asImage", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "asMovieClip", {
            get: function () {
                return this;
            },
            enumerable: true,
            configurable: true
        });
        GObject.cast = function (obj) {
            return obj["$owner"];
        };
        Object.defineProperty(GObject.prototype, "text", {
            /** @virtual */
            get: function () {
                return null;
            },
            /** @virtual */
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "icon", {
            /** @virtual */
            get: function () {
                return null;
            },
            /** @virtual */
            set: function (value) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "isDisposed", {
            get: function () {
                return this._disposed;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "treeNode", {
            get: function () {
                return this._treeNode;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.dispose = function () {
            this.removeFromParent();
            this._relations.dispose();
            this.removeAllListeners();
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._moving, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._end, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._moving2, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._end2, this);
            this._displayObject.destroy();
        };
        Object.defineProperty(GObject.prototype, "draggable", {
            get: function () {
                return this._draggable;
            },
            set: function (value) {
                if (this._draggable != value) {
                    this._draggable = value;
                    this.initDrag();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GObject.prototype, "dragBounds", {
            get: function () {
                return this._dragBounds;
            },
            set: function (value) {
                this._dragBounds = value;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.startDrag = function (touchPointID) {
            if (touchPointID === void 0) { touchPointID = -1; }
            if (!this.onStage)
                return;
            this.dragBegin();
        };
        GObject.prototype.stopDrag = function () {
            this.dragEnd();
        };
        Object.defineProperty(GObject.prototype, "dragging", {
            get: function () {
                return GObject.draggingObject == this;
            },
            enumerable: true,
            configurable: true
        });
        GObject.prototype.localToGlobal = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            if (this._pivotAsAnchor) {
                ax += this._pivot.x * this._width;
                ay += this._pivot.y * this._height;
            }
            if (!resultPoint) {
                resultPoint = GObject.sHelperPoint;
            }
            resultPoint.x = ax;
            resultPoint.y = ay;
            return this._displayObject.toGlobal(resultPoint, resultPoint);
        };
        GObject.prototype.globalToLocal = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            if (!resultPoint) {
                resultPoint = GObject.sHelperPoint;
            }
            resultPoint.set(ax, ay);
            resultPoint = this._displayObject.toLocal(resultPoint, fgui.GRoot.inst.nativeStage);
            if (this._pivotAsAnchor) {
                resultPoint.x -= this._pivot.x * this._width;
                resultPoint.y -= this._pivot.y * this._height;
            }
            return resultPoint;
        };
        GObject.prototype.localToRoot = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            var pt = this.localToGlobal(ax, ay, resultPoint);
            pt.x /= fgui.GRoot.inst.contentScaleFactor;
            pt.y /= fgui.GRoot.inst.contentScaleFactor;
            return pt;
        };
        GObject.prototype.rootToLocal = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            ax *= fgui.GRoot.inst.contentScaleFactor;
            ay *= fgui.GRoot.inst.contentScaleFactor;
            return this.globalToLocal(ax, ay, resultPoint);
        };
        GObject.prototype.localToGlobalRect = function (ax, ay, aWidth, aHeight, resultRect) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            if (aWidth === void 0) { aWidth = 0; }
            if (aHeight === void 0) { aHeight = 0; }
            if (resultRect == null)
                resultRect = GObject.sDragHelperRect;
            var pt = this.localToGlobal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        };
        GObject.prototype.globalToLocalRect = function (ax, ay, aWidth, aHeight, resultRect) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            if (aWidth === void 0) { aWidth = 0; }
            if (aHeight === void 0) { aHeight = 0; }
            if (resultRect == null)
                resultRect = GObject.sDragHelperRect;
            var pt = this.globalToLocal(ax, ay);
            resultRect.x = pt.x;
            resultRect.y = pt.y;
            resultRect.width = aWidth;
            resultRect.height = aHeight;
            return resultRect;
        };
        GObject.prototype.handleControllerChanged = function (c) {
            this._handlingController = true;
            for (var i = 0; i < 8 /* Count */; i++) {
                var gear = this._gears[i];
                if (gear && gear.controller == c) {
                    gear.apply();
                }
            }
            this._handlingController = false;
            this.checkGearVisible();
        };
        GObject.prototype.switchDisplayObject = function (newObj) {
            if (newObj == this._displayObject) {
                return;
            }
            var old = this._displayObject;
            if (this.inContainer) {
                var i = this._displayObject.parent.getChildIndex(this._displayObject);
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
            fgui.ToolSet.setColorFilter(this._displayObject, this._grayed);
            this._displayObject.interactive = old.interactive;
            if (this._displayObject instanceof PIXI.Container) {
                this._displayObject.interactiveChildren = old.interactive;
            }
        };
        GObject.prototype.handleXYChanged = function () {
            if (this._displayObject) {
                var xv = this._x;
                var yv = this._y;
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
        };
        GObject.prototype.handleSizeChanged = function () {
        };
        GObject.prototype.handleScaleChanged = function () {
            if (this._displayObject) {
                this._displayObject.scale.set(this._scaleX, this._scaleY);
            }
        };
        Object.defineProperty(GObject.prototype, "colorFilter", {
            get: function () {
                if (this._colorFilter)
                    return this._colorFilter;
                this._colorFilter = new PIXI.filters.ColorMatrixFilter();
                if (this._displayObject) {
                    var a = this._displayObject.filters || [];
                    a.push(this._colorFilter);
                    this._displayObject.filters = a;
                }
                return this._colorFilter;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * update color appearance
         * @param brightness value of the brigthness (-1 - 1, where -1 is black)
         * @param contrast value of the contrast (-1 - 1)
         * @param saturate The saturation amount (-1 - 1)
         * @param hue The hue property of the color in degress (-1 - 1, where 1 is 360deg)
         */
        GObject.prototype.updateColorComponents = function (brightness, contrast, saturate, hue) {
            if (!GObject._colorHelper)
                GObject._colorHelper = new fgui.utils.ColorMatrix();
            var helper = GObject._colorHelper;
            helper.setColor(brightness, contrast * 100, saturate * 100, hue * 180);
            var f = this.colorFilter;
            f.enabled = true;
            f.reset();
            f.matrix = helper.toArray();
            if (!this._lastColorComponents)
                this._lastColorComponents = [];
            this._lastColorComponents.length = 0;
            this._lastColorComponents.push(helper.brightness, helper.contrast, helper.saturation, helper.hue);
        };
        GObject.prototype.handleGrayedChanged = function () {
            if (this._displayObject) {
                var c = this.colorFilter;
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
        };
        GObject.prototype.handleAlphaChanged = function () {
            if (this._displayObject)
                this._displayObject.alpha = this._alpha;
        };
        GObject.prototype.handleVisibleChanged = function () {
            if (this._displayObject)
                this._displayObject.visible = this.internalVisible2;
            if (this instanceof fgui.GGroup)
                this.handleVisibleChanged();
        };
        GObject.prototype.getProp = function (index) {
            switch (index) {
                case fgui.ObjectPropID.Text:
                    return this.text;
                case fgui.ObjectPropID.Icon:
                    return this.icon;
                case fgui.ObjectPropID.Color:
                    return NaN;
                case fgui.ObjectPropID.OutlineColor:
                    return NaN;
                case fgui.ObjectPropID.Playing:
                    return false;
                case fgui.ObjectPropID.Frame:
                    return 0;
                case fgui.ObjectPropID.DeltaTime:
                    return 0;
                case fgui.ObjectPropID.TimeScale:
                    return 1;
                case fgui.ObjectPropID.FontSize:
                    return 0;
                case fgui.ObjectPropID.Selected:
                    return false;
                default:
                    return undefined;
            }
        };
        GObject.prototype.setProp = function (index, value) {
            switch (index) {
                case fgui.ObjectPropID.Text:
                    this.text = value;
                    break;
                case fgui.ObjectPropID.Icon:
                    this.icon = value;
                    break;
            }
        };
        /**@internal */
        GObject.prototype.constructFromResource = function () {
        };
        GObject.prototype.setup_beforeAdd = function (buffer, beginPos) {
            buffer.seek(beginPos, 0);
            buffer.skip(5);
            var f1;
            var f2;
            this._id = buffer.readS();
            this._name = buffer.readS();
            f1 = buffer.readInt();
            f2 = buffer.readInt();
            this.setXY(f1, f2);
            if (buffer.readBool()) {
                this.initWidth = buffer.readInt();
                this.initHeight = buffer.readInt();
                this.setSize(this.initWidth, this.initHeight, true);
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
            if (f1 != 1) {
                this.alpha = f1;
            }
            f1 = buffer.readFloat();
            if (f1 != 0) {
                this.rotation = f1;
            }
            if (!buffer.readBool()) {
                this.visible = false;
            }
            if (!buffer.readBool()) {
                this.touchable = false;
            }
            if (buffer.readBool()) {
                this.grayed = true;
            }
            var bm = buffer.readByte();
            this.blendMode = fgui.BlendModeMap[bm] || "Normal";
            var filter = buffer.readByte();
            if (filter == 1 && this._displayObject) {
                var c1 = buffer.readFloat();
                var c2 = buffer.readFloat();
                var c3 = buffer.readFloat();
                var c4 = buffer.readFloat();
                fgui.ToolSet.setColorFilter(this._displayObject, [c1, c2, c3, c4]);
            }
            var str = buffer.readS();
            if (str != null) {
                this.data = str;
            }
        };
        GObject.prototype.setup_afterAdd = function (buffer, beginPos) {
            buffer.seek(beginPos, 1);
            var str = buffer.readS();
            if (str != null) {
                this.tooltips = str;
            }
            var groupId = buffer.readShort();
            if (groupId >= 0) {
                this.group = this.parent.getChildAt(groupId);
            }
            buffer.seek(beginPos, 2);
            var cnt = buffer.readShort();
            for (var i = 0; i < cnt; i++) {
                var nextPos = buffer.readShort();
                nextPos += buffer.position;
                var gear = this.getGear(buffer.readByte());
                gear.setup(buffer);
                buffer.position = nextPos;
            }
        };
        GObject.prototype.initDrag = function () {
            if (this._draggable)
                this.on(fgui.InteractiveEvents.Down, this._touchBegin, this);
            else
                this.off(fgui.InteractiveEvents.Down, this._touchBegin, this);
        };
        GObject.prototype.dragBegin = function () {
            if (GObject.draggingObject != null)
                GObject.draggingObject.stopDrag();
            GObject.sGlobalDragStart.x = fgui.GRoot.globalMouseStatus.mouseX;
            GObject.sGlobalDragStart.y = fgui.GRoot.globalMouseStatus.mouseY;
            this.localToGlobalRect(0, 0, this.width, this.height, GObject.sGlobalRect);
            GObject.draggingObject = this;
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Move, this._moving2, this);
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Up, this._end2, this);
        };
        GObject.prototype.dragEnd = function () {
            if (GObject.draggingObject == this) {
                fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._moving2, this);
                fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._end2, this);
                GObject.draggingObject = null;
            }
            GObject._dragBeginCancelled = true;
        };
        GObject.prototype.reset = function () {
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._moving, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._end, this);
        };
        GObject.prototype._touchBegin = function (evt) {
            if (this._touchDownPoint == null)
                this._touchDownPoint = new PIXI.Point();
            this._touchDownPoint.x = evt.data.global.x;
            this._touchDownPoint.y = evt.data.global.y;
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Move, this._moving, this);
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Up, this._end, this);
        };
        GObject.prototype._end = function (evt) {
            this.reset();
        };
        GObject.prototype._moving = function (evt) {
            var sensitivity = fgui.UIConfig.touchDragSensitivity;
            if (this._touchDownPoint != null
                && Math.abs(this._touchDownPoint.x - evt.data.global.x) < sensitivity
                && Math.abs(this._touchDownPoint.y - evt.data.global.y) < sensitivity)
                return;
            this.reset();
            GObject._dragBeginCancelled = false;
            evt.currentTarget = this._displayObject;
            this._displayObject.emit("__dragStart" /* START */, evt, this);
            if (!GObject._dragBeginCancelled) //user may call obj.stopDrag in the DragStart event handler
                this.dragBegin();
        };
        GObject.prototype._moving2 = function (evt) {
            var xx = evt.data.global.x - GObject.sGlobalDragStart.x + GObject.sGlobalRect.x;
            var yy = evt.data.global.y - GObject.sGlobalDragStart.y + GObject.sGlobalRect.y;
            if (this._dragBounds != null) {
                var rect = fgui.GRoot.inst.localToGlobalRect(this._dragBounds.x, this._dragBounds.y, this._dragBounds.width, this._dragBounds.height, GObject.sDragHelperRect);
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
            var pt = this.parent.globalToLocal(xx, yy, GObject.sHelperPoint);
            this.setXY(Math.round(pt.x), Math.round(pt.y));
            GObject.sUpdatingWhileDragging = false;
            evt.currentTarget = this._displayObject;
            this._displayObject.emit("__dragMoving" /* MOVING */, evt, this);
        };
        GObject.prototype._end2 = function (evt) {
            if (GObject.draggingObject == this) {
                this.stopDrag();
                evt.currentTarget = this._displayObject;
                this._displayObject.emit("__dragEnd" /* END */, evt, this);
            }
        };
        GObject._gInstanceCounter = 0;
        GObject.XY_CHANGED = "__xyChanged" /* XY_CHANGED */;
        GObject.SIZE_CHANGED = "__sizeChanged" /* SIZE_CHANGED */;
        GObject.SIZE_DELAY_CHANGE = "__sizeDelayChange" /* SIZE_DELAY_CHANGE */;
        GObject.GEAR_STOP = "gearStop" /* GEAR_STOP */;
        //dragging
        //-------------------------------------------------------------------
        GObject.sGlobalDragStart = new PIXI.Point();
        GObject.sGlobalRect = new PIXI.Rectangle();
        GObject.sHelperPoint = new PIXI.Point();
        GObject.sDragHelperRect = new PIXI.Rectangle();
        return GObject;
    }(fgui.UIEventProxy));
    fgui.GObject = GObject;
})(fgui || (fgui = {}));

(function (fgui) {
    /**
     * 控制器
     */
    var Controller = /** @class */ (function (_super) {
        __extends(Controller, _super);
        function Controller() {
            var _this = _super.call(this) || this;
            _this._selectedIndex = 0;
            _this._previousIndex = 0;
            _this.changing = false;
            _this._pageIds = [];
            _this._pageNames = [];
            _this._selectedIndex = -1;
            _this._previousIndex = -1;
            return _this;
        }
        Object.defineProperty(Controller.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (value) {
                if (this._selectedIndex != value) {
                    if (value > this._pageIds.length - 1) {
                        throw "index out of bounds: " + value;
                    }
                    this.changing = true;
                    this._previousIndex = this._selectedIndex;
                    this._selectedIndex = value;
                    this.parent.applyController(this);
                    this.emit("__stateChanged" /* CHANGED */, this);
                    this.changing = false;
                }
            },
            enumerable: true,
            configurable: true
        });
        //same effect as selectedIndex but without event emitted
        Controller.prototype.setSelectedIndex = function (value) {
            if (value === void 0) { value = 0; }
            if (this._selectedIndex != value) {
                if (value > this._pageIds.length - 1) {
                    throw "index out of bounds: " + value;
                }
                this.changing = true;
                this._previousIndex = this._selectedIndex;
                this._selectedIndex = value;
                this.parent.applyController(this);
                this.changing = false;
            }
        };
        Object.defineProperty(Controller.prototype, "previsousIndex", {
            get: function () {
                return this._previousIndex;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Controller.prototype, "selectedPage", {
            get: function () {
                if (this._selectedIndex == -1)
                    return null;
                else
                    return this._pageNames[this._selectedIndex];
            },
            set: function (val) {
                this.selectedIndex = Math.max(0, this._pageNames.indexOf(val));
            },
            enumerable: true,
            configurable: true
        });
        Controller.prototype.setSelectedPage = function (value) {
            this.setSelectedIndex(Math.max(0, this._pageNames.indexOf(value)));
        };
        Object.defineProperty(Controller.prototype, "previousPage", {
            /** @readonly 上次页面名称 */
            get: function () {
                if (this._previousIndex == -1)
                    return null;
                else
                    return this._pageNames[this._previousIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Controller.prototype, "pageCount", {
            /** @readonly page数量 */
            get: function () {
                return this._pageIds.length;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 获取指定下标的夜名称
         * @param index 下标
         */
        Controller.prototype.getPageName = function (index) {
            if (index === void 0) { index = 0; }
            return this._pageNames[index];
        };
        /**
         * 增加页面到尾部
         * @param name 页面名称
         */
        Controller.prototype.addPage = function (name) {
            if (name === void 0) { name = ""; }
            this.addPageAt(name, this._pageIds.length);
        };
        /**
         * 增加页面到指定下标
         * @param name 页面名称
         * @param index 下标，默认为0
         */
        Controller.prototype.addPageAt = function (name, index) {
            if (index === void 0) { index = 0; }
            var nid = "" + Controller._nextPageId++;
            if (index == this._pageIds.length) {
                this._pageIds.push(nid);
                this._pageNames.push(name);
            }
            else {
                this._pageIds.splice(index, 0, nid);
                this._pageNames.splice(index, 0, name);
            }
        };
        /**
         * 删除一个页面
         * @param name 页面名称
         */
        Controller.prototype.removePage = function (name) {
            var i = this._pageNames.indexOf(name);
            if (i != -1) {
                this._pageIds.splice(i, 1);
                this._pageNames.splice(i, 1);
                if (this._selectedIndex >= this._pageIds.length)
                    this.selectedIndex = this._selectedIndex - 1;
                else
                    this.parent.applyController(this);
            }
        };
        /**
         * 删除一个页面
         * @param index 页下标
         */
        Controller.prototype.removePageAt = function (index) {
            if (index === void 0) { index = 0; }
            this._pageIds.splice(index, 1);
            this._pageNames.splice(index, 1);
            if (this._selectedIndex >= this._pageIds.length)
                this.selectedIndex = this._selectedIndex - 1;
            else
                this.parent.applyController(this);
        };
        /**
         * 删除所有页面
         */
        Controller.prototype.clearPages = function () {
            this._pageIds.length = 0;
            this._pageNames.length = 0;
            if (this._selectedIndex != -1)
                this.selectedIndex = -1;
            else
                this.parent.applyController(this);
        };
        /**
         * 是否包含某个页面
         * @param aName 页面名称
         */
        Controller.prototype.hasPage = function (aName) {
            return this._pageNames.indexOf(aName) >= 0;
        };
        /**
         * @hide
         * 根据页ID获取下标
         * @param aId
         */
        Controller.prototype.getPageIndexById = function (aId) {
            return this._pageIds.indexOf(aId);
        };
        /**
         * @hide
         * 根据页名称获取页ID
         * @param aName
         */
        Controller.prototype.getPageIdByName = function (aName) {
            var i = this._pageNames.indexOf(aName);
            if (i != -1)
                return this._pageIds[i];
            else
                return null;
        };
        /**
         * @hide
         * 根据页ID获取页名称
         * @param aId
         */
        Controller.prototype.getPageNameById = function (aId) {
            var i = this._pageIds.indexOf(aId);
            if (i != -1)
                return this._pageNames[i];
            else
                return null;
        };
        /**
         * @hide
         * 获取指定页的下标
         * @param index 下表
         */
        Controller.prototype.getPageId = function (index) {
            if (index === void 0) { index = 0; }
            return this._pageIds[index];
        };
        Object.defineProperty(Controller.prototype, "selectedPageId", {
            /**
             * 获取选择的页ID
             */
            get: function () {
                if (this._selectedIndex == -1)
                    return null;
                else
                    return this._pageIds[this._selectedIndex];
            },
            /**
             * 设置选择的页ID
             */
            set: function (val) {
                this.selectedIndex = this._pageIds.indexOf(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Controller.prototype, "oppositePageId", {
            set: function (val) {
                var i = this._pageIds.indexOf(val);
                if (i > 0)
                    this.selectedIndex = 0;
                else if (this._pageIds.length > 1)
                    this.selectedIndex = 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Controller.prototype, "previousPageId", {
            get: function () {
                if (this._previousIndex == -1)
                    return null;
                else
                    return this._pageIds[this._previousIndex];
            },
            enumerable: true,
            configurable: true
        });
        Controller.prototype.executeActions = function () {
            var _this = this;
            if (this._actions && this._actions.length > 0) {
                this._actions.forEach(function (a) {
                    a.execute(_this, _this.previousPageId, _this.selectedPageId);
                });
            }
        };
        /**
         * @param buffer
         */
        Controller.prototype.setup = function (buffer) {
            var beginPos = buffer.position;
            buffer.seek(beginPos, 0);
            // 名称 string
            this.name = buffer.readS();
            this.autoRadioGroupDepth = buffer.readBool();
            // ?
            buffer.seek(beginPos, 1);
            var i;
            var nextPos;
            var cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                this._pageIds.push(buffer.readS());
                this._pageNames.push(buffer.readS());
            }
            var homePageIndex = 0;
            if (buffer.version >= 2) {
                var homePageType = buffer.readByte();
                switch (homePageType) {
                    case 1:
                        homePageIndex = buffer.readShort();
                        break;
                    case 2:
                        homePageIndex = this._pageNames.indexOf(fgui.UIPackage.branch);
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;
                    case 3:
                        homePageIndex = this._pageNames.indexOf(fgui.UIPackage.getVar(buffer.readS()));
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;
                }
            }
            buffer.seek(beginPos, 2);
            cnt = buffer.readShort();
            if (cnt > 0) {
                this._actions = this._actions || [];
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.readShort();
                    nextPos += buffer.position;
                    var action = fgui.Action.createAction(buffer.readByte());
                    action.setup(buffer);
                    this._actions.push(action);
                    buffer.position = nextPos;
                }
            }
            if (this.parent != null && this._pageIds.length > 0)
                this._selectedIndex = homePageIndex;
            else
                this._selectedIndex = -1;
        };
        Controller._nextPageId = 0;
        return Controller;
    }(PIXI.utils.EventEmitter));
    fgui.Controller = Controller;
})(fgui || (fgui = {}));
/// <reference path="./GObject.ts" />
/// <reference path="./controller/Controller.ts" />

/// <reference path="./GObject.ts" />
/// <reference path="./controller/Controller.ts" />
(function (fgui) {
    var GComponent = /** @class */ (function (_super) {
        __extends(GComponent, _super);
        function GComponent() {
            var _this = _super.call(this) || this;
            _this._sortingChildCount = 0;
            _this._childrenRenderOrder = fgui.ChildrenRenderOrder.Ascent;
            _this._apexIndex = 0;
            _this._children = [];
            _this._controllers = [];
            _this._transitions = [];
            _this._margin = new fgui.utils.Margin();
            _this._alignOffset = new PIXI.Point();
            return _this;
        }
        GComponent.prototype.createDisplayObject = function () {
            this._rootContainer = new fgui.UIContainer(this);
            this.setDisplayObject(this._rootContainer);
            this._container = this._rootContainer;
        };
        GComponent.prototype.dispose = function () {
            fgui.GTimer.inst.remove(this._validate, this);
            this.off("added", this.___added, this);
            this.off("removed", this.___removed, this);
            this._transitions.forEach(function (trans) {
                trans.dispose();
            });
            var numChildren = this._children.length;
            for (var i = numChildren - 1; i >= 0; --i) {
                var obj = this._children[i];
                obj.parent = null; //avoid removeFromParent call
                obj.dispose();
            }
            this._boundsChanged = false;
            if (this._scrollPane)
                this._scrollPane.dispose();
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(GComponent.prototype, "displayListContainer", {
            get: function () {
                return this._container;
            },
            enumerable: true,
            configurable: true
        });
        GComponent.prototype.addChild = function (child) {
            this.addChildAt(child, this._children.length);
            return child;
        };
        GComponent.prototype.addChildAt = function (child, index) {
            if (index === void 0) { index = 0; }
            if (!child)
                throw new Error("Invalid child");
            var numChildren = this._children.length;
            if (index >= 0 && index <= numChildren) {
                if (child.parent == this)
                    this.setChildIndex(child, index);
                else {
                    child.removeFromParent();
                    child.parent = this;
                    var cnt = this._children.length;
                    if (child.sortingOrder != 0) {
                        this._sortingChildCount++;
                        index = this.getInsertPosForSortingChild(child);
                    }
                    else if (this._sortingChildCount > 0) {
                        if (index > (cnt - this._sortingChildCount))
                            index = cnt - this._sortingChildCount;
                    }
                    if (index == cnt)
                        this._children.push(child);
                    else
                        this._children.splice(index, 0, child);
                    this.childStateChanged(child);
                    this.setBoundsChangedFlag();
                }
                return child;
            }
            else
                throw new Error("Invalid child index");
        };
        GComponent.prototype.getInsertPosForSortingChild = function (target) {
            var cnt = this._children.length;
            var i = 0;
            for (i = 0; i < cnt; i++) {
                var child = this._children[i];
                if (child == target)
                    continue;
                if (target.sortingOrder < child.sortingOrder)
                    break;
            }
            return i;
        };
        GComponent.prototype.removeChild = function (child, dispose) {
            if (dispose === void 0) { dispose = false; }
            var childIndex = this._children.indexOf(child);
            if (childIndex != -1)
                this.removeChildAt(childIndex, dispose);
            return child;
        };
        GComponent.prototype.removeChildAt = function (index, dispose) {
            if (dispose === void 0) { dispose = false; }
            if (index >= 0 && index < this.numChildren) {
                var child = this._children[index];
                child.parent = null;
                if (child.sortingOrder != 0)
                    this._sortingChildCount--;
                this._children.splice(index, 1);
                if (child.inContainer)
                    this._container.removeChild(child.displayObject);
                if (dispose === true)
                    child.dispose();
                this.setBoundsChangedFlag();
                return child;
            }
            else {
                throw new Error("Invalid child index");
            }
        };
        GComponent.prototype.removeChildren = function (beginIndex, endIndex, dispose) {
            if (beginIndex === void 0) { beginIndex = 0; }
            if (endIndex === void 0) { endIndex = -1; }
            if (dispose === void 0) { dispose = false; }
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex, dispose);
        };
        GComponent.prototype.getChildAt = function (index) {
            if (index === void 0) { index = 0; }
            if (index >= 0 && index < this.numChildren)
                return this._children[index];
            else
                throw new Error("Invalid child index");
        };
        GComponent.prototype.getChild = function (name) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                if (this._children[i].name == name)
                    return this._children[i];
            }
            return null;
        };
        GComponent.prototype.getChildByPath = function (path) {
            var arr = path.split(".");
            var cnt = arr.length;
            var gcom = this;
            var obj;
            for (var i = 0; i < cnt; ++i) {
                obj = gcom.getChild(arr[i]);
                if (!obj)
                    break;
                if (i != cnt - 1) {
                    if (!(gcom instanceof GComponent)) {
                        obj = null;
                        break;
                    }
                    else
                        gcom = obj;
                }
            }
            return obj;
        };
        GComponent.prototype.getVisibleChild = function (name) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (child.internalVisible && child.internalVisible && child.name == name)
                    return child;
            }
            return null;
        };
        GComponent.prototype.getChildInGroup = function (name, group) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (child.group == group && child.name == name)
                    return child;
            }
            return null;
        };
        GComponent.prototype.getChildById = function (id) {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                if (this._children[i].id == id)
                    return this._children[i];
            }
            return null;
        };
        GComponent.prototype.getChildIndex = function (child) {
            return this._children.indexOf(child);
        };
        GComponent.prototype.setChildIndex = function (child, index) {
            if (index === void 0) { index = 0; }
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0) //no effect
                return;
            var cnt = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            this._setChildIndex(child, oldIndex, index);
        };
        GComponent.prototype.setChildIndexBefore = function (child, index) {
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0) //no effect
                return oldIndex;
            var cnt = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            if (oldIndex < index)
                return this._setChildIndex(child, oldIndex, index - 1);
            else
                return this._setChildIndex(child, oldIndex, index);
        };
        GComponent.prototype._setChildIndex = function (child, oldIndex, index) {
            if (index === void 0) { index = 0; }
            var cnt = this._children.length;
            if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return oldIndex;
            this._children.splice(oldIndex, 1);
            this._children.splice(index, 0, child);
            if (child.inContainer) {
                var displayIndex = 0;
                var childCount = this._container.children.length;
                for (var i = 0; i < index; i++) {
                    var g = this._children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex == childCount)
                    displayIndex--;
                this._container.setChildIndex(child.displayObject, displayIndex);
                this.setBoundsChangedFlag();
            }
            return index;
        };
        GComponent.prototype.swapChildren = function (child1, child2) {
            var index1 = this._children.indexOf(child1);
            var index2 = this._children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw new Error("no such child found");
            this.swapChildrenAt(index1, index2);
        };
        GComponent.prototype.swapChildrenAt = function (index1, index2) {
            if (index2 === void 0) { index2 = 0; }
            var child1 = this._children[index1];
            var child2 = this._children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        };
        Object.defineProperty(GComponent.prototype, "numChildren", {
            get: function () {
                return this._children.length;
            },
            enumerable: true,
            configurable: true
        });
        GComponent.prototype.isAncestorOf = function (child) {
            if (child == null)
                return false;
            var p = child.parent;
            while (p) {
                if (p == this)
                    return true;
                p = p.parent;
            }
            return false;
        };
        GComponent.prototype.addController = function (controller) {
            this._controllers.push(controller);
            controller.parent = this;
            this.applyController(controller);
        };
        GComponent.prototype.getControllerAt = function (index) {
            return this._controllers[index];
        };
        GComponent.prototype.getController = function (name) {
            var cnt = this._controllers.length;
            for (var i = 0; i < cnt; ++i) {
                var c = this._controllers[i];
                if (c.name == name)
                    return c;
            }
            return null;
        };
        GComponent.prototype.removeController = function (c) {
            var index = this._controllers.indexOf(c);
            if (index == -1)
                throw new Error("controller not exists");
            c.parent = null;
            this._controllers.splice(index, 1);
            this._children.forEach(function (child) {
                child.handleControllerChanged(c);
            });
        };
        Object.defineProperty(GComponent.prototype, "controllers", {
            get: function () {
                return this._controllers;
            },
            enumerable: true,
            configurable: true
        });
        GComponent.prototype.childStateChanged = function (child) {
            var _this = this;
            if (this._buildingDisplayList)
                return;
            if (child instanceof fgui.GGroup) {
                this._children.forEach(function (g) {
                    if (g.group == child)
                        _this.childStateChanged(g);
                }, this);
                return;
            }
            if (!child.displayObject)
                return;
            if (child.finalVisible) {
                if (!child.displayObject.parent) {
                    var index = 0;
                    var len = this._children.length;
                    for (var i1 = 0; i1 < len; i1++) {
                        var g = this._children[i1];
                        if (g == child)
                            break;
                        if (g.displayObject && g.displayObject.parent)
                            index++;
                    }
                    this._container.addChildAt(child.displayObject, index);
                }
            }
            else {
                if (child.displayObject.parent)
                    this._container.removeChild(child.displayObject);
            }
        };
        GComponent.prototype.applyController = function (c) {
            this._applyingController = c;
            this._children.forEach(function (child) {
                child.handleControllerChanged(c);
            });
            this._applyingController = null;
            c.executeActions();
        };
        GComponent.prototype.applyAllControllers = function () {
            var _this = this;
            this._controllers.forEach(function (c) {
                _this.applyController(c);
            }, this);
        };
        GComponent.prototype.adjustRadioGroupDepth = function (obj, c) {
            var myIndex = -1, maxIndex = -1;
            this._children.forEach(function (child, i) {
                if (child == obj) {
                    myIndex = i;
                }
                else if ((child instanceof fgui.GButton)
                    && child.relatedController == c) {
                    if (i > maxIndex)
                        maxIndex = i;
                }
            });
            if (myIndex < maxIndex) {
                if (this._applyingController != null)
                    this._children[maxIndex].handleControllerChanged(this._applyingController); //TODO: twice
                this.swapChildrenAt(myIndex, maxIndex);
            }
        };
        GComponent.prototype.getTransitionAt = function (index) {
            return this._transitions[index];
        };
        GComponent.prototype.getTransition = function (transName) {
            var cnt = this._transitions.length;
            for (var i = 0; i < cnt; ++i) {
                var trans = this._transitions[i];
                if (trans.name == transName)
                    return trans;
            }
            return null;
        };
        GComponent.prototype.isChildInView = function (child) {
            if (this._rootContainer.scrollRect != null) {
                return child.x + child.width >= 0 && child.x <= this.width
                    && child.y + child.height >= 0 && child.y <= this.height;
            }
            else if (this._scrollPane != null) {
                return this._scrollPane.isChildInView(child);
            }
            else
                return true;
        };
        GComponent.prototype.getFirstChildInView = function () {
            var cnt = this._children.length;
            for (var i = 0; i < cnt; ++i) {
                var child = this._children[i];
                if (this.isChildInView(child))
                    return i;
            }
            return -1;
        };
        Object.defineProperty(GComponent.prototype, "scrollPane", {
            get: function () {
                return this._scrollPane;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComponent.prototype, "opaque", {
            get: function () {
                return this._opaque;
            },
            set: function (value) {
                if (this._opaque != value) {
                    this._opaque = value;
                    if (this._opaque) {
                        this.updateOpaque();
                    }
                    else {
                        if (this._rootContainer.hitArea && this._rootContainer.hitArea instanceof PIXI.Rectangle) {
                            this._rootContainer.hitArea.width = this._rootContainer.hitArea.height = 0;
                        }
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComponent.prototype, "margin", {
            get: function () {
                return this._margin;
            },
            set: function (value) {
                this._margin.copy(value);
                if (this._rootContainer.scrollRect != null) {
                    this._container.x = this._margin.left + this._alignOffset.x;
                    this._container.y = this._margin.top + this._alignOffset.y;
                }
                this.handleSizeChanged();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComponent.prototype, "apexIndex", {
            get: function () {
                return this._apexIndex;
            },
            set: function (value) {
                if (this._apexIndex != value) {
                    this._apexIndex = value;
                    if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch)
                        this.buildNativeDisplayList();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComponent.prototype, "mask", {
            get: function () {
                return this._rootContainer.mask;
            },
            // TODO
            set: function (obj) {
                if (!obj)
                    return;
                if (obj instanceof PIXI.Container) {
                    obj.interactive = obj.interactiveChildren = false;
                    obj.isMask = true;
                }
                if (obj instanceof PIXI.Graphics)
                    obj.isMask = true;
                this._rootContainer.mask = obj;
            },
            enumerable: true,
            configurable: true
        });
        GComponent.prototype.updateOpaque = function () {
            if (!this._rootContainer.hitArea)
                this._rootContainer.hitArea = new PIXI.Rectangle();
            var h = this._rootContainer.hitArea;
            h.x = h.y = 0;
            h.width = this.width;
            h.height = this.height;
        };
        GComponent.prototype.updateScrollRect = function () {
            var rect = this._rootContainer.scrollRect;
            if (rect == null)
                rect = new PIXI.Rectangle();
            var w = this.width - this._margin.right;
            var h = this.height - this._margin.bottom;
            rect.x = rect.y = 0;
            rect.width = w;
            rect.height = h;
            this._rootContainer.scrollRect = rect;
        };
        // protected setupScroll(scrollBarMargin: utils.Margin,
        //     scroll: ScrollType,
        //     scrollBarDisplay: ScrollBarDisplayType,
        //     flags: number,
        //     vtScrollBarRes: string,
        //     hzScrollBarRes: string,
        //     headerRes:string,
        //     footerRes:string): void {
        //     if (this._rootContainer == this._container) {
        //         this._container = new PIXI.Container();
        //         this._rootContainer.addChild(this._container);
        //     }
        //     this._scrollPane = new ScrollPane(this, scroll, scrollBarMargin, scrollBarDisplay, flags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes);
        // }
        GComponent.prototype.setupScroll = function (buffer) {
            if (this._rootContainer == this._container) {
                this._container = new PIXI.Container();
                this._rootContainer.addChild(this._container);
            }
            this._scrollPane = new fgui.ScrollPane(this);
            this._scrollPane.setup(buffer);
            this.setBoundsChangedFlag();
        };
        GComponent.prototype.setupOverflow = function (overflow) {
            if (overflow == fgui.OverflowType.Hidden) {
                if (this._rootContainer == this._container) {
                    this._container = new PIXI.Container();
                    this._rootContainer.addChild(this._container);
                }
                this.updateScrollRect();
                this._container.x = this._margin.left;
                this._container.y = this._margin.top;
            }
            else if (this._margin.left != 0 || this._margin.top != 0) {
                if (this._rootContainer == this._container) {
                    this._container = new PIXI.Container();
                    this._rootContainer.addChild(this._container);
                }
                this._container.x = this._margin.left;
                this._container.y = this._margin.top;
            }
            this.setBoundsChangedFlag();
        };
        GComponent.prototype.handleSizeChanged = function () {
            if (this._scrollPane)
                this._scrollPane.onOwnerSizeChanged();
            else if (this._rootContainer.scrollRect != null)
                this.updateScrollRect();
            if (this._opaque)
                this.updateOpaque();
        };
        GComponent.prototype.handleGrayedChanged = function () {
            var c = this.getController("grayed");
            if (c != null)
                c.selectedIndex = this.grayed ? 1 : 0;
            else
                _super.prototype.handleGrayedChanged.call(this);
        };
        GComponent.prototype.setBoundsChangedFlag = function () {
            if (!this._scrollPane && !this._trackBounds)
                return;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                fgui.GTimer.inst.callLater(this._validate, this);
            }
        };
        GComponent.prototype._validate = function (dt) {
            if (this._boundsChanged)
                this.updateBounds();
        };
        GComponent.prototype.ensureBoundsCorrect = function () {
            if (this._boundsChanged)
                this.updateBounds();
        };
        GComponent.prototype.updateBounds = function () {
            var ax = 0, ay = 0, aw = 0, ah = 0;
            var len = this._children.length;
            if (len > 0) {
                ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                var ar_1 = Number.NEGATIVE_INFINITY, ab_1 = Number.NEGATIVE_INFINITY;
                var tmp_1 = 0;
                this._children.forEach(function (child) {
                    child.ensureSizeCorrect();
                    tmp_1 = child.x;
                    if (tmp_1 < ax)
                        ax = tmp_1;
                    tmp_1 = child.y;
                    if (tmp_1 < ay)
                        ay = tmp_1;
                    tmp_1 = child.x + child.actualWidth;
                    if (tmp_1 > ar_1)
                        ar_1 = tmp_1;
                    tmp_1 = child.y + child.actualHeight;
                    if (tmp_1 > ab_1)
                        ab_1 = tmp_1;
                });
                aw = ar_1 - ax;
                ah = ab_1 - ay;
            }
            this.setBounds(ax, ay, aw, ah);
        };
        GComponent.prototype.setBounds = function (ax, ay, aw, ah) {
            if (ah === void 0) { ah = 0; }
            this._boundsChanged = false;
            if (this._scrollPane) {
                this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
            }
        };
        Object.defineProperty(GComponent.prototype, "viewWidth", {
            get: function () {
                if (this._scrollPane != null)
                    return this._scrollPane.viewWidth;
                else
                    return this.width - this._margin.left - this._margin.right;
            },
            set: function (value) {
                if (this._scrollPane != null)
                    this._scrollPane.viewWidth = value;
                else
                    this.width = value + this._margin.left + this._margin.right;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComponent.prototype, "viewHeight", {
            get: function () {
                if (this._scrollPane != null)
                    return this._scrollPane.viewHeight;
                else
                    return this.height - this._margin.top - this._margin.bottom;
            },
            set: function (value) {
                if (this._scrollPane != null)
                    this._scrollPane.viewHeight = value;
                else
                    this.height = value + this._margin.top + this._margin.bottom;
            },
            enumerable: true,
            configurable: true
        });
        GComponent.prototype.getSnappingPosition = function (xValue, yValue, resultPoint) {
            if (!resultPoint)
                resultPoint = new PIXI.Point();
            var cnt = this._children.length;
            if (cnt <= 0) {
                resultPoint.x = 0;
                resultPoint.y = 0;
                return resultPoint;
            }
            this.ensureBoundsCorrect();
            var obj = null;
            var prev = null;
            var i = 0;
            if (yValue != 0) {
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (yValue < obj.y) {
                        if (i == 0) {
                            yValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (yValue < prev.y + prev.actualHeight / 2) //top half part
                                yValue = prev.y;
                            else //bottom half part
                                yValue = obj.y;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    yValue = obj.y;
            }
            if (xValue != 0) {
                if (i > 0)
                    i--;
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (xValue < obj.x) {
                        if (i == 0) {
                            xValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (xValue < prev.x + prev.actualWidth / 2) //top half part
                                xValue = prev.x;
                            else //bottom half part
                                xValue = obj.x;
                            break;
                        }
                    }
                }
                if (i == cnt)
                    xValue = obj.x;
            }
            resultPoint.x = xValue;
            resultPoint.y = yValue;
            return resultPoint;
        };
        GComponent.prototype.childSortingOrderChanged = function (child, oldValue, newValue) {
            if (newValue === void 0) { newValue = 0; }
            if (newValue == 0) {
                this._sortingChildCount--;
                this.setChildIndex(child, this._children.length);
            }
            else {
                if (oldValue == 0)
                    this._sortingChildCount++;
                var oldIndex = this._children.indexOf(child);
                var index = this.getInsertPosForSortingChild(child);
                if (oldIndex < index)
                    this._setChildIndex(child, oldIndex, index - 1);
                else
                    this._setChildIndex(child, oldIndex, index);
            }
        };
        /**@internal */
        GComponent.prototype.constructFromResource = function () {
            // this.constructInternal(null, 0);
            this.constructFromResource2(null, 0);
        };
        GComponent.prototype.constructFromResource2 = function (objectPool, poolIndex) {
            var contentItem = this.packageItem.getBranch();
            if (!contentItem.decoded) {
                contentItem.decoded = true;
                fgui.TranslationHelper.translateComponent(contentItem);
            }
            var i;
            var dataLen;
            var curPos;
            var nextPos;
            var f1;
            var f2;
            var i1;
            var i2;
            var buffer = contentItem.rawData;
            buffer.seek(0, 0);
            this._underConstruct = true;
            this.sourceWidth = buffer.readInt();
            this.sourceHeight = buffer.readInt();
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this.setSize(this.sourceWidth, this.sourceHeight);
            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }
            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.internalSetPivot(f1, f2, buffer.readBool());
            }
            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }
            var overflow = buffer.readByte();
            if (overflow == fgui.OverflowType.Scroll) {
                var savedPos = buffer.position;
                buffer.seek(0, 7);
                this.setupScroll(buffer);
                buffer.position = savedPos;
            }
            else
                this.setupOverflow(overflow);
            if (buffer.readBool())
                buffer.skip(8);
            this._buildingDisplayList = true;
            buffer.seek(0, 1);
            var controllerCount = buffer.readShort();
            for (i = 0; i < controllerCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                var controller = new fgui.Controller();
                this._controllers.push(controller);
                controller.parent = this;
                controller.setup(buffer);
                buffer.position = nextPos;
            }
            buffer.seek(0, 2);
            var child;
            var childCount = buffer.readShort();
            for (i = 0; i < childCount; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.position;
                if (objectPool != null) {
                    child = objectPool[poolIndex + i];
                }
                else {
                    buffer.seek(curPos, 0);
                    var type = buffer.readByte();
                    var src = buffer.readS();
                    var pkgId = buffer.readS();
                    var pi = null;
                    if (src != null) {
                        var pkg;
                        if (pkgId != null)
                            pkg = fgui.UIPackage.getById(pkgId);
                        else
                            pkg = contentItem.owner;
                        pi = pkg != null ? pkg.getItemById(src) : null;
                    }
                    if (pi != null) {
                        child = fgui.UIObjectFactory.newObject(pi);
                        child.constructFromResource();
                    }
                    else {
                        child = fgui.UIObjectFactory.newObject2(type);
                    }
                }
                child._underConstruct = true;
                child.setup_beforeAdd(buffer, curPos);
                child.parent = this;
                this._children.push(child);
                buffer.position = curPos + dataLen;
            }
            buffer.seek(0, 3);
            this.relations.setup(buffer, true);
            buffer.seek(0, 2);
            buffer.skip(2);
            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                buffer.seek(buffer.position, 3);
                this._children[i].relations.setup(buffer, false);
                buffer.position = nextPos;
            }
            buffer.seek(0, 2);
            buffer.skip(2);
            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                child = this._children[i];
                child.setup_afterAdd(buffer, buffer.position);
                child._underConstruct = false;
                buffer.position = nextPos;
            }
            buffer.seek(0, 4);
            buffer.skip(2); //customData
            this.opaque = buffer.readBool();
            var maskId = buffer.readShort();
            if (maskId != -1) {
                this.mask = this.getChildAt(maskId).displayObject;
                buffer.readBool(); //reversedMask
            }
            var hitTestId = buffer.readS();
            i1 = buffer.readInt();
            i2 = buffer.readInt();
            if (hitTestId != null) {
                pi = contentItem.owner.getItemById(hitTestId);
                if (pi != null && pi.pixelHitTestData != null) {
                    this._rootContainer.hitArea = new fgui.PixelHitTest(pi.pixelHitTestData, i1, i2);
                }
            }
            else if (i1 != 0 && i2 != -1) {
                this._rootContainer.hitArea = this.getChildAt(i2).displayObject;
            }
            buffer.seek(0, 5);
            var transitionCount = buffer.readShort();
            for (i = 0; i < transitionCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                var trans = new fgui.Transition(this);
                trans.setup(buffer);
                this._transitions.push(trans);
                buffer.position = nextPos;
            }
            if (this._transitions.length > 0) {
                this.on("added", this.___added, this);
                this.on("removed", this.___removed, this);
            }
            this.applyAllControllers();
            this._buildingDisplayList = false;
            this._underConstruct = false;
            this.buildNativeDisplayList();
            this.setBoundsChangedFlag();
            if (contentItem.objectType != fgui.ObjectType.Component) {
                this.constructExtension(buffer);
            }
            this.onConstruct();
        };
        GComponent.prototype.constructExtension = function (buffer) {
        };
        GComponent.prototype.onConstruct = function () {
            this.constructFromXML(null);
        };
        GComponent.prototype.buildNativeDisplayList = function () {
            var cnt = this._children.length;
            if (cnt == 0)
                return;
            var i;
            var child;
            switch (this._childrenRenderOrder) {
                case fgui.ChildrenRenderOrder.Ascent:
                    {
                        for (i = 0; i < cnt; i++) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;
                case fgui.ChildrenRenderOrder.Descent:
                    {
                        for (i = cnt - 1; i >= 0; i--) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;
                case fgui.ChildrenRenderOrder.Arch:
                    {
                        var apex = fgui.ToolSet.clamp(this._apexIndex, 0, cnt);
                        for (i = 0; i < apex; i++) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                        for (i = cnt - 1; i >= apex; i--) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;
            }
        };
        GComponent.prototype.appendChildrenList = function () {
            var _this = this;
            this._children.forEach(function (child) {
                if (child.displayObject != null && child.finalVisible)
                    _this._container.addChild(child.displayObject);
            }, this);
        };
        GComponent.prototype.constructFromXML = function (xml) {
        };
        GComponent.prototype.___added = function (d) {
            var cnt = this._transitions.length;
            for (var i = 0; i < cnt; ++i) {
                this._transitions[i].onOwnerAddedToStage();
            }
        };
        GComponent.prototype.___removed = function (d) {
            var cnt = this._transitions.length;
            for (var i = 0; i < cnt; ++i) {
                this._transitions[i].onOwnerRemovedFromStage();
            }
        };
        return GComponent;
    }(fgui.GObject));
    fgui.GComponent = GComponent;
})(fgui || (fgui = {}));
/// <reference path="./GComponent.ts" />

/// <reference path="./GComponent.ts" />
(function (fgui) {
    var GButton = /** @class */ (function (_super) {
        __extends(GButton, _super);
        function GButton() {
            var _this = _super.call(this) || this;
            _this._mode = fgui.ButtonMode.Common;
            _this._title = "";
            _this._icon = "";
            _this._sound = fgui.UIConfig.buttonSound;
            _this._soundVolumeScale = fgui.UIConfig.buttonSoundVolumeScale;
            //this._pageOption = new PageOption();
            _this._changeStateOnClick = true;
            _this._downEffect = 0;
            _this._downEffectValue = 0.8;
            return _this;
        }
        GButton.prototype.setDisplayObject = function (value) {
            _super.prototype.setDisplayObject.call(this, value);
            this._displayObject.buttonMode = true;
        };
        Object.defineProperty(GButton.prototype, "icon", {
            get: function () {
                return this._icon;
            },
            set: function (value) {
                this._icon = value;
                value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
                if (this._iconObject != null) {
                    this._iconObject.icon = value;
                }
                this.updateGear(7 /* Icon */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "selectedIcon", {
            get: function () {
                return this._selectedIcon;
            },
            set: function (value) {
                this._selectedIcon = value;
                value = (this._selected && this._selectedIcon) ? this._selectedIcon : this._icon;
                if (this._iconObject != null) {
                    this._iconObject.icon = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "title", {
            get: function () {
                return this._title;
            },
            set: function (value) {
                this._title = value;
                if (this._titleObject)
                    this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
                this.updateGear(6 /* Text */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "text", {
            get: function () {
                return this.title;
            },
            set: function (value) {
                this.title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "selectedTitle", {
            get: function () {
                return this._selectedTitle;
            },
            set: function (value) {
                this._selectedTitle = value;
                if (this._titleObject)
                    this._titleObject.text = (this._selected && this._selectedTitle) ? this._selectedTitle : this._title;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "titleColor", {
            get: function () {
                if (fgui.isColorableTitle(this._titleObject))
                    return this._titleObject.titleColor;
                return 0;
            },
            set: function (value) {
                if (fgui.isColorableTitle(this._titleObject))
                    this._titleObject.titleColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "titleFontSize", {
            get: function () {
                var tf = this.getTextField();
                if (tf != null)
                    return tf.fontSize;
                else
                    return 0;
            },
            set: function (value) {
                var tf = this.getTextField();
                if (tf != null)
                    tf.fontSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "sound", {
            get: function () {
                return this._sound;
            },
            set: function (val) {
                this._sound = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "soundVolumeScale", {
            get: function () {
                return this._soundVolumeScale;
            },
            set: function (value) {
                this._soundVolumeScale = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "fontSize", {
            get: function () {
                if (fgui.isColorableTitle(this._titleObject))
                    return this._titleObject.fontSize;
                return 0;
            },
            set: function (value) {
                if (fgui.isColorableTitle(this._titleObject))
                    this._titleObject.fontSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "selected", {
            get: function () {
                return this._selected;
            },
            set: function (val) {
                if (this._mode == fgui.ButtonMode.Common)
                    return;
                if (this._selected != val) {
                    this._selected = val;
                    if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
                        if (this._selected)
                            this.setState(GButton.SELECTED_DISABLED);
                        else
                            this.setState(GButton.DISABLED);
                    }
                    else {
                        if (this._selected)
                            this.setState(this._over ? GButton.SELECTED_OVER : GButton.DOWN);
                        else
                            this.setState(this._over ? GButton.OVER : GButton.UP);
                    }
                    if (this._selectedTitle && this._titleObject)
                        this._titleObject.text = this._selected ? this._selectedTitle : this._title;
                    if (this._selectedIcon) {
                        var str = this._selected ? this._selectedIcon : this._icon;
                        if (this._iconObject != null)
                            this._iconObject.icon = str;
                    }
                    if (this._relatedController
                        && this._parent
                        && !this._parent._buildingDisplayList) {
                        if (this._selected) {
                            this._relatedController.selectedPageId = this._relatedPageId;
                            if (this._relatedController.autoRadioGroupDepth)
                                this._parent.adjustRadioGroupDepth(this, this._relatedController);
                        }
                        else if (this._mode == fgui.ButtonMode.Check && this._relatedController.selectedPageId == this._relatedPageId)
                            this._relatedController.oppositePageId = this._relatedPageId;
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "mode", {
            get: function () {
                return this._mode;
            },
            set: function (value) {
                if (this._mode != value) {
                    if (value == fgui.ButtonMode.Common)
                        this.selected = false;
                    this._mode = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "relatedController", {
            get: function () {
                return this._relatedController;
            },
            set: function (val) {
                this._relatedController = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "relatedPageId", {
            get: function () {
                return this._relatedPageId;
            },
            set: function (val) {
                this._relatedPageId = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "changeStateOnClick", {
            get: function () {
                return this._changeStateOnClick;
            },
            set: function (value) {
                this._changeStateOnClick = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GButton.prototype, "linkedPopup", {
            get: function () {
                return this._linkedPopup;
            },
            set: function (value) {
                this._linkedPopup = value;
            },
            enumerable: true,
            configurable: true
        });
        GButton.prototype.getTextField = function () {
            if (this._titleObject instanceof fgui.GTextField)
                return this._titleObject;
            else if (this._titleObject instanceof fgui.GLabel)
                return this._titleObject.getTextField();
            else if (this._titleObject instanceof GButton)
                return this._titleObject.getTextField();
            else
                return null;
        };
        GButton.prototype.addStateListener = function (listener, thisObj) {
            this.on("__stateChanged" /* CHANGED */, listener, thisObj);
        };
        GButton.prototype.removeStateListener = function (listener, thisObj) {
            this.off("__stateChanged" /* CHANGED */, listener, thisObj);
        };
        GButton.prototype.fireClick = function (downEffect) {
            if (downEffect === void 0) { downEffect = true; }
            if (downEffect && this._mode == fgui.ButtonMode.Common) {
                this.setState(GButton.OVER);
                fgui.GTimer.inst.add(100, 1, this.setState, this, GButton.DOWN);
                fgui.GTimer.inst.add(200, 1, this.setState, this, GButton.UP);
            }
            this._click(null);
        };
        GButton.prototype.setState = function (val) {
            if (this._buttonController)
                this._buttonController.selectedPage = val;
            if (this._downEffect == 1) {
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED) {
                    var r = this._downEffectValue * 255;
                    var color_1 = (r << 16) + (r << 8) + r;
                    this._children.forEach(function (obj) {
                        if (fgui.isColorGear(obj))
                            obj.color = color_1;
                    });
                }
                else {
                    this._children.forEach(function (obj) {
                        if (fgui.isColorGear(obj))
                            obj.color = 0xffffff;
                    });
                }
            }
            else if (this._downEffect == 2) {
                if (val == GButton.DOWN || val == GButton.SELECTED_OVER || val == GButton.SELECTED_DISABLED)
                    this.setScale(this._downEffectValue, this._downEffectValue);
                else
                    this.setScale(1, 1);
            }
        };
        GButton.prototype.handleControllerChanged = function (c) {
            _super.prototype.handleControllerChanged.call(this, c);
            if (this._relatedController == c)
                this.selected = this._relatedPageId == c.selectedPageId;
        };
        GButton.prototype.handleGrayedChanged = function () {
            if (this._buttonController && this._buttonController.hasPage(GButton.DISABLED)) {
                if (this.grayed) {
                    if (this._selected && this._buttonController.hasPage(GButton.SELECTED_DISABLED))
                        this.setState(GButton.SELECTED_DISABLED);
                    else
                        this.setState(GButton.DISABLED);
                }
                else if (this._selected)
                    this.setState(GButton.DOWN);
                else
                    this.setState(GButton.UP);
            }
            else
                _super.prototype.handleGrayedChanged.call(this);
        };
        GButton.prototype.constructExtension = function (buffer) {
            buffer.seek(0, 6);
            this._mode = buffer.readByte();
            var str = buffer.readS();
            if (str) {
                this._sound = str;
            }
            this._soundVolumeScale = buffer.readFloat();
            this._downEffect = buffer.readByte();
            this._downEffectValue = buffer.readFloat();
            if (this._downEffect == 2) {
                this.setPivot(0.5, 0.5, this.pivotAsAnchor);
            }
            this._buttonController = this.getController("button");
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
            if (this._titleObject != null) {
                this._title = this._titleObject.text;
            }
            if (this._iconObject != null) {
                this._icon = this._iconObject.icon;
            }
            if (this._mode == fgui.ButtonMode.Common) {
                this.setState(GButton.UP);
            }
            this.on(fgui.InteractiveEvents.Over, this._rollover, this);
            this.on(fgui.InteractiveEvents.Out, this._rollout, this);
            this.on(fgui.InteractiveEvents.Down, this._mousedown, this);
            this.on(fgui.InteractiveEvents.Click, this._click, this);
        };
        GButton.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!buffer.seek(beginPos, 6)) {
                return;
            }
            if (buffer.readByte() != this.packageItem.objectType) {
                return;
            }
            var str;
            var iv;
            str = buffer.readS();
            if (str != null)
                this.title = str;
            str = buffer.readS();
            if (str != null)
                this.selectedTitle = str;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            str = buffer.readS();
            if (str != null)
                this.selectedIcon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            iv = buffer.readInt();
            if (iv != 0)
                this.titleFontSize = iv;
            iv = buffer.readShort();
            if (iv >= 0)
                this._relatedController = this.parent.getControllerAt(iv);
            this._relatedPageId = buffer.readS();
            str = buffer.readS();
            if (str != null)
                this._sound = str;
            if (buffer.readBool())
                this._soundVolumeScale = buffer.readFloat();
            this.selected = buffer.readBool();
        };
        GButton.prototype._rollover = function (evt) {
            if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER))
                return;
            this._over = true;
            if (this._down)
                return;
            this.setState(this._selected ? GButton.SELECTED_OVER : GButton.OVER);
        };
        GButton.prototype._rollout = function (evt) {
            if (!this._buttonController || !this._buttonController.hasPage(GButton.OVER))
                return;
            this._over = false;
            if (this._down)
                return;
            this.setState(this._selected ? GButton.DOWN : GButton.UP);
        };
        GButton.prototype._mousedown = function (evt) {
            this._down = true;
            fgui.GRoot.inst.on(fgui.InteractiveEvents.Up, this._mouseup, this);
            if (this._mode == fgui.ButtonMode.Common) {
                if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED))
                    this.setState(GButton.SELECTED_DISABLED);
                else
                    this.setState(GButton.DOWN);
            }
            if (this._linkedPopup != null) {
                if (this._linkedPopup instanceof fgui.Window)
                    this._linkedPopup.toggleVisible();
                else
                    this.root.togglePopup(this._linkedPopup, this);
            }
        };
        GButton.prototype._mouseup = function (evt) {
            if (this._down) {
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Up, this._mouseup, this);
                this._down = false;
                if (this._mode == fgui.ButtonMode.Common) {
                    if (this.grayed && this._buttonController && this._buttonController.hasPage(GButton.DISABLED))
                        this.setState(GButton.DISABLED);
                    else if (this._over)
                        this.setState(GButton.OVER);
                    else
                        this.setState(GButton.UP);
                }
            }
        };
        GButton.prototype._click = function (evt) {
            if (!this._changeStateOnClick)
                return;
            if (this._sound) {
                var pi = fgui.UIPackage.getItemByURL(this._sound);
                if (pi) {
                    var sound = pi.owner.getItemAsset(pi);
                    if (sound) {
                        fgui.GRoot.inst.playOneShotSound(sound, this._soundVolumeScale);
                    }
                }
            }
            if (this._mode == fgui.ButtonMode.Check) {
                this.selected = !this._selected;
                this.emit("__stateChanged" /* CHANGED */, this, evt);
            }
            else if (this._mode == fgui.ButtonMode.Radio) {
                if (!this._selected) {
                    this.selected = true;
                    this.emit("__stateChanged" /* CHANGED */, this, evt);
                }
            }
            else {
                if (this._relatedController)
                    this._relatedController.selectedPageId = this._relatedPageId;
            }
        };
        GButton.prototype.dispose = function () {
            fgui.GTimer.inst.remove(this.setState, this);
            fgui.GRoot.inst.off(fgui.InteractiveEvents.Up, this._mouseup, this);
            _super.prototype.dispose.call(this);
        };
        GButton.UP = "up";
        GButton.DOWN = "down";
        GButton.OVER = "over";
        GButton.SELECTED_OVER = "selectedOver";
        GButton.DISABLED = "disabled";
        GButton.SELECTED_DISABLED = "selectedDisabled";
        return GButton;
    }(fgui.GComponent));
    fgui.GButton = GButton;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isColorableTitle = function (obj) {
        return obj && "titleColor" in obj && "fontSize" in obj;
    };
})(fgui || (fgui = {}));
/// <reference path="./IColorableTitle.ts" />

/// <reference path="./IColorableTitle.ts" />
(function (fgui) {
    var GComboBox = /** @class */ (function (_super) {
        __extends(GComboBox, _super);
        function GComboBox() {
            var _this = _super.call(this) || this;
            _this._visibleItemCount = 0;
            _this._selectedIndex = 0;
            _this._popupDirection = fgui.PopupDirection.Down;
            _this._visibleItemCount = fgui.UIConfig.defaultComboBoxVisibleItemCount;
            _this._itemsUpdated = true;
            _this._selectedIndex = -1;
            _this._items = [];
            _this._values = [];
            return _this;
        }
        Object.defineProperty(GComboBox.prototype, "text", {
            get: function () {
                if (this._titleObject)
                    return this._titleObject.text;
                else
                    return null;
            },
            set: function (value) {
                if (this._titleObject)
                    this._titleObject.text = value;
                this.updateGear(6 /* Text */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "icon", {
            get: function () {
                if (this._iconObject)
                    return this._iconObject.icon;
                else
                    return null;
            },
            set: function (value) {
                if (this._iconObject)
                    this._iconObject.icon = value;
                this.updateGear(7 /* Icon */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "titleColor", {
            get: function () {
                if (fgui.isColorableTitle(this._titleObject))
                    return this._titleObject.titleColor;
                return 0;
            },
            set: function (value) {
                if (fgui.isColorableTitle(this._titleObject))
                    this._titleObject.titleColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "visibleItemCount", {
            get: function () {
                return this._visibleItemCount;
            },
            set: function (value) {
                this._visibleItemCount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "popupDirection", {
            get: function () {
                return this._popupDirection;
            },
            set: function (value) {
                this._popupDirection = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "items", {
            get: function () {
                return this._items;
            },
            set: function (value) {
                if (!value)
                    this._items.length = 0;
                else
                    this._items = value.concat();
                if (this._items.length > 0) {
                    if (this._selectedIndex >= this._items.length)
                        this._selectedIndex = this._items.length - 1;
                    else if (this._selectedIndex == -1)
                        this._selectedIndex = 0;
                    this.text = this._items[this._selectedIndex];
                    if (this._icons != null && this._selectedIndex < this._icons.length)
                        this.icon = this._icons[this._selectedIndex];
                }
                else {
                    this.text = "";
                    if (this._icons != null)
                        this.icon = null;
                    this._selectedIndex = -1;
                }
                this._itemsUpdated = true;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "icons", {
            get: function () {
                return this._icons;
            },
            set: function (value) {
                this._icons = value;
                if (this._icons != null && this._selectedIndex != -1 && this._selectedIndex < this._icons.length)
                    this.icon = this._icons[this._selectedIndex];
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "values", {
            get: function () {
                return this._values;
            },
            set: function (value) {
                if (!value)
                    this._values.length = 0;
                else
                    this._values = value.concat();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "selectedIndex", {
            get: function () {
                return this._selectedIndex;
            },
            set: function (val) {
                if (this._selectedIndex == val)
                    return;
                this._selectedIndex = val;
                if (this.selectedIndex >= 0 && this.selectedIndex < this._items.length) {
                    this.text = this._items[this._selectedIndex];
                    if (this._icons != null && this._selectedIndex < this._icons.length)
                        this.icon = this._icons[this._selectedIndex];
                }
                else {
                    this.text = "";
                    if (this._icons != null)
                        this.icon = null;
                }
                this.updateSelectionController();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "value", {
            get: function () {
                return this._values[this._selectedIndex];
            },
            set: function (val) {
                this.selectedIndex = this._values.indexOf(val);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GComboBox.prototype, "selectionController", {
            get: function () {
                return this._selectionController;
            },
            set: function (value) {
                this._selectionController = value;
            },
            enumerable: true,
            configurable: true
        });
        GComboBox.prototype.getTextField = function () {
            if (this._titleObject instanceof fgui.GTextField)
                return this._titleObject;
            else if (this._titleObject instanceof fgui.GLabel)
                return this._titleObject.getTextField();
            else if (this._titleObject instanceof fgui.GButton)
                return this._titleObject.getTextField();
            else
                return null;
        };
        GComboBox.prototype.setState = function (val) {
            if (this._buttonController) {
                this._buttonController.selectedPage = val;
            }
        };
        GComboBox.prototype.getProp = function (index) {
            switch (index) {
                case fgui.ObjectPropID.Color:
                    return this.titleColor;
                case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case fgui.ObjectPropID.FontSize:
                    {
                        tf = this.getTextField();
                        if (tf)
                            return tf.fontSize;
                        else
                            return 0;
                    }
                default:
                    return _super.prototype.getProp.call(this, index);
            }
        };
        GComboBox.prototype.setProp = function (index, value) {
            switch (index) {
                case fgui.ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case fgui.ObjectPropID.FontSize:
                    {
                        tf = this.getTextField();
                        if (tf)
                            tf.fontSize = value;
                    }
                    break;
                default:
                    _super.prototype.setProp.call(this, index, value);
                    break;
            }
        };
        GComboBox.prototype.constructExtension = function (buffer) {
            var str;
            this._buttonController = this.getController("button");
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
            str = buffer.readS();
            if (str) {
                this.dropdown = (fgui.UIPackage.createObjectFromURL(str));
                if (!this.dropdown) {
                    console.error("下拉框必须为元件");
                    return;
                }
                this.dropdown.name = "this.dropdown";
                this._list = this.dropdown.getChild("list").asList;
                if (this._list == null) {
                    console.error(this.resourceURL + ": 下拉框的弹出元件里必须包含名为list的列表");
                    return;
                }
                this._list.on("__itemClick" /* ItemClick */, this.__clickItem, this);
                this._list.addRelation(this.dropdown, fgui.RelationType.Width);
                this._list.removeRelation(this.dropdown, fgui.RelationType.Height);
                this.dropdown.addRelation(this._list, fgui.RelationType.Height);
                this.dropdown.removeRelation(this._list, fgui.RelationType.Width);
                this.dropdown.displayObject.on("removed", this.__popupWinClosed, this);
            }
            if (!PIXI.utils.isMobile.any) {
                this.on(fgui.InteractiveEvents.Over, this.__rollover, this);
                this.on(fgui.InteractiveEvents.Out, this.__rollout, this);
            }
            this.on(fgui.InteractiveEvents.Down, this.__mousedown, this);
        };
        GComboBox.prototype.handleControllerChanged = function (c) {
            _super.prototype.handleControllerChanged.call(this, c);
            if (this._selectionController == c)
                this.selectedIndex = c.selectedIndex;
        };
        GComboBox.prototype.updateSelectionController = function () {
            if (this._selectionController != null && !this._selectionController.changing
                && this._selectedIndex < this._selectionController.pageCount) {
                var c = this._selectionController;
                this._selectionController = null;
                c.selectedIndex = this._selectedIndex;
                this._selectionController = c;
            }
        };
        GComboBox.prototype.dispose = function () {
            fgui.GTimer.inst.remove(this.delayedClickItem, this);
            this._list.off("__itemClick" /* ItemClick */, this.__clickItem, this);
            this.dropdown.off("removed", this.__popupWinClosed, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._mouseup, this);
            this.__popupWinClosed(null);
            if (this.dropdown) {
                this.dropdown.dispose();
                this.dropdown = null;
            }
            _super.prototype.dispose.call(this);
        };
        GComboBox.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!buffer.seek(beginPos, 6))
                return;
            if (buffer.readByte() != this.packageItem.objectType)
                return;
            var i;
            var iv;
            var nextPos;
            var str;
            var itemCount = buffer.readShort();
            for (i = 0; i < itemCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                this._items[i] = buffer.readS();
                this._values[i] = buffer.readS();
                str = buffer.readS();
                if (str != null) {
                    if (this._icons == null)
                        this._icons = new Array();
                    this._icons[i] = str;
                }
                buffer.position = nextPos;
            }
            str = buffer.readS();
            if (str != null) {
                this.text = str;
                this._selectedIndex = this._items.indexOf(str);
            }
            else if (this._items.length > 0) {
                this._selectedIndex = 0;
                this.text = this._items[0];
            }
            else
                this._selectedIndex = -1;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            iv = buffer.readInt();
            if (iv > 0)
                this._visibleItemCount = iv;
            this._popupDirection = buffer.readByte();
            iv = buffer.readShort();
            if (iv >= 0)
                this._selectionController = this.parent.getControllerAt(iv);
        };
        GComboBox.prototype.showDropdown = function () {
            var _this = this;
            if (this._itemsUpdated) {
                this._itemsUpdated = false;
                this._list.removeChildrenToPool();
                this._items.forEach(function (o, i) {
                    var item = _this._list.addItemFromPool();
                    item.name = i < _this._values.length ? _this._values[i] : "";
                    item.text = _this._items[i];
                    item.icon = (_this._icons != null && i < _this._icons.length) ? _this._icons[i] : null;
                }, this);
                this._list.resizeToFit(this._visibleItemCount);
            }
            this._list.selectedIndex = -1;
            this.dropdown.width = this.width;
            this.root.togglePopup(this.dropdown, this, this._popupDirection);
            if (this.dropdown.parent) {
                this.setState(fgui.GButton.DOWN);
            }
        };
        GComboBox.prototype.__popupWinClosed = function (evt) {
            if (this._over)
                this.setState(fgui.GButton.OVER);
            else
                this.setState(fgui.GButton.UP);
        };
        GComboBox.prototype.__clickItem = function (evt, item) {
            fgui.GTimer.inst.add(100, 1, this.__clickItem2, this, this._list.getChildIndex(item));
        };
        GComboBox.prototype.__clickItem2 = function (index) {
            if (this.dropdown.parent instanceof fgui.GRoot)
                (this.dropdown.parent).hidePopup();
            this._selectedIndex = -1;
            this.selectedIndex = index;
            if (this._selectedIndex >= 0)
                this.text = this._items[this._selectedIndex];
            else
                this.text = "";
            this.emit("__stateChanged" /* CHANGED */, this);
        };
        GComboBox.prototype.delayedClickItem = function (index) {
            if (this.dropdown.parent instanceof fgui.GRoot)
                this.dropdown.parent.hidePopup();
            this._selectedIndex = index;
            if (this._selectedIndex >= 0)
                this.text = this._items[this._selectedIndex];
            else
                this.text = "";
            this.emit("__stateChanged" /* CHANGED */, this);
        };
        GComboBox.prototype.__rollover = function (evt) {
            this._over = true;
            if (this._down || this.dropdown && this.dropdown.parent)
                return;
            this.setState(fgui.GButton.OVER);
        };
        GComboBox.prototype.__rollout = function (evt) {
            this._over = false;
            if (this._down || this.dropdown && this.dropdown.parent)
                return;
            this.setState(fgui.GButton.UP);
        };
        GComboBox.prototype.__mousedown = function (evt) {
            evt.stopPropagation();
            //if(evt.currentTarget instanceof PIXI.TextInput)   //TODO: TextInput
            //    return;
            fgui.GRoot.inst.checkPopups(evt.target);
            this._down = true;
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Up, this._mouseup, this);
            if (this.dropdown)
                this.showDropdown();
        };
        GComboBox.prototype._mouseup = function (evt) {
            if (this._down) {
                this._down = false;
                fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._mouseup, this);
                if (this.dropdown && !this.dropdown.parent) {
                    if (this._over)
                        this.setState(fgui.GButton.OVER);
                    else
                        this.setState(fgui.GButton.UP);
                }
            }
        };
        return GComboBox;
    }(fgui.GComponent));
    fgui.GComboBox = GComboBox;
})(fgui || (fgui = {}));
/// <reference path="./GObject.ts" />

/// <reference path="./GObject.ts" />
(function (fgui) {
    var eGraphType;
    (function (eGraphType) {
        eGraphType[eGraphType["Empty"] = 0] = "Empty";
        eGraphType[eGraphType["Rect"] = 1] = "Rect";
        eGraphType[eGraphType["Ellipse"] = 2] = "Ellipse";
        eGraphType[eGraphType["Path"] = 3] = "Path";
        eGraphType[eGraphType["Polygon"] = 4] = "Polygon";
    })(eGraphType = fgui.eGraphType || (fgui.eGraphType = {}));
    var GGraph = /** @class */ (function (_super) {
        __extends(GGraph, _super);
        function GGraph() {
            var _this = _super.call(this) || this;
            ///
            /** @hide  绘制对象 */
            //private _graphics: PIXI.Graphics;
            /** @hide 类型 */
            _this._type = eGraphType.Empty;
            /** @hide 线条大小 */
            _this._lineSize = 0;
            /** @hide 线条颜色 */
            _this._lineColor = 0;
            /** @hide 填充颜色 */
            _this._fillColor = 0;
            _this._lineSize = 1;
            _this._lineAlpha = 1;
            _this._fillAlpha = 1;
            _this._fillColor = 0xFFFFFF;
            return _this;
        }
        Object.defineProperty(GGraph.prototype, "graphics", {
            /**
             * 获取原始 PIXI.Graphics 对象，通过这个对象可以调用 PIXI 的绘制接口
             */
            get: function () {
                return this._displayObject;
            },
            enumerable: true,
            configurable: true
        });
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
        GGraph.prototype.drawRect = function (lineSize, lineColor, lineAlpha, fillColor, fillAlpha, corner) {
            if (corner === void 0) { corner = null; }
            this._type = 1;
            this._lineSize = lineSize;
            this._lineColor = lineColor;
            this._lineAlpha = lineAlpha;
            this._fillColor = fillColor;
            this._fillAlpha = fillAlpha;
            this._corner = corner;
            return this.updateGraph();
        };
        GGraph.prototype.drawEllipse = function (lineSize, lineColor, lineAlpha, fillColor, fillAlpha) {
            this._type = 2;
            this._lineSize = lineSize;
            this._lineColor = lineColor;
            this._lineAlpha = lineAlpha;
            this._fillColor = fillColor;
            this._fillAlpha = fillAlpha;
            this._corner = null;
            return this.updateGraph();
        };
        Object.defineProperty(GGraph.prototype, "color", {
            get: function () {
                return this._fillColor;
            },
            set: function (value) {
                this._fillColor = value;
                if (this._type != 0) {
                    this.updateGraph();
                }
            },
            enumerable: true,
            configurable: true
        });
        /** @hide update  */
        GGraph.prototype.updateGraph = function () {
            var ctx = this.graphics;
            if (!ctx) {
                return this;
            }
            ctx.interactive = this.touchable;
            ctx.clear();
            var w = this.width;
            var h = this.height;
            if (w == 0 || h == 0) {
                return;
            }
            if (this._lineSize == 0) {
                ctx.lineStyle(0, 0, 0);
            }
            else {
                ctx.lineStyle(this._lineSize, this._lineColor, this._lineAlpha);
            }
            ctx.beginFill(this._fillColor, this._fillAlpha);
            if (this._type == eGraphType.Rect) {
                if (this._cornerRadius && this._cornerRadius.length >= 1) {
                    ctx.drawRoundedRect(0, 0, w, h, this._cornerRadius[0] * 2);
                }
                else {
                    ctx.drawRect(0, 0, w, h);
                }
            }
            else if (this._type == eGraphType.Ellipse) {
                var halfW = w * .5;
                var halfH = h * .5;
                if (w == h)
                    ctx.drawCircle(halfW, halfW, halfW);
                else
                    ctx.drawEllipse(halfW, halfH, halfW, halfH);
            }
            else if (this._type == eGraphType.Path) {
                fgui.ToolSet.fillPath(ctx, this._polygonPoints, 0, 0);
            }
            else if (this._type == eGraphType.Polygon) {
                if (!this._polygonPoints) {
                    this._polygonPoints = [];
                }
                var radius = Math.min(this._width, this._height) / 2;
                this._polygonPoints.length = 0;
                var angle = this._startAngle * Math.PI / 180;
                var deltaAngle = 2 * Math.PI / this._sides;
                var dist;
                for (var i = 0; i < this._sides; i++) {
                    if (this._distances) {
                        dist = this._distances[i];
                        if (isNaN(dist)) {
                            dist = 1;
                        }
                    }
                    else {
                        dist = 1;
                    }
                    var xv = radius + radius * dist * Math.cos(angle);
                    var yv = radius + radius * dist * Math.sin(angle);
                    this._polygonPoints.push(xv, yv);
                    angle += deltaAngle;
                }
                fgui.ToolSet.fillPath(ctx, this._polygonPoints, 0, 0);
            }
            ctx.endFill();
            return this;
        };
        GGraph.prototype.replaceMe = function (target) {
            if (!this._parent)
                throw new Error("parent not set");
            target.name = this.name;
            target.alpha = this.alpha;
            target.rotation = this.rotation;
            target.visible = this.visible;
            target.touchable = this.touchable;
            target.grayed = this.grayed;
            target.setXY(this.x, this.y);
            target.setSize(this.width, this.height);
            var index = this._parent.getChildIndex(this);
            this._parent.addChildAt(target, index);
            target.relations.copyFrom(this.relations);
            this._parent.removeChild(this, true);
        };
        GGraph.prototype.addBeforeMe = function (target) {
            if (this._parent == null)
                throw new Error("parent not set");
            var index = this._parent.getChildIndex(this);
            this._parent.addChildAt(target, index);
        };
        GGraph.prototype.addAfterMe = function (target) {
            if (this._parent == null)
                throw new Error("parent not set");
            var index = this._parent.getChildIndex(this);
            index++;
            this._parent.addChildAt(target, index);
        };
        GGraph.prototype.setNativeObject = function (obj) {
            this._type = eGraphType.Empty;
            var g = this._displayObject;
            g.interactive = this.touchable;
            g.clear();
            g.removeChildren(); //clear old
            g.addChild(obj);
            // this.setDisplayObject(obj);
            // if (this._parent) {
            //     this._parent.childStateChanged(this);
            // }
            // this.handleXYChanged();
            // let sprite : PIXI.Sprite = new PIXI.Sprite();
            // sprite.alpha = this.alpha;
            // sprite.rotation = this.rotation;
            // sprite.visible = this.visible;
            // sprite.interactive = this.touchable;
            // sprite.interactiveChildren = this.touchable;
            // sprite.addChild(obj);
        };
        /** @hide */
        GGraph.prototype.createDisplayObject = function () {
            // let sprite = new UISprite(this);
            // sprite.interactive = false;
            // this._graphics = sprite;
            // this.setDisplayObject(sprite);
            this._displayObject = new fgui.UISprite(this);
        };
        /** 获取属性 */
        GGraph.prototype.getProp = function (index) {
            if (index == fgui.ObjectPropID.Color)
                return this.color;
            else
                return _super.prototype.getProp.call(this, index);
        };
        /** 设置属性 */
        GGraph.prototype.setProp = function (index, value) {
            if (index == fgui.ObjectPropID.Color)
                this.color = value;
            else
                _super.prototype.setProp.call(this, index, value);
        };
        /** 处理尺寸改变 */
        GGraph.prototype.handleSizeChanged = function () {
            _super.prototype.handleSizeChanged.call(this);
            if (this._type != eGraphType.Empty) {
                this.updateGraph();
            }
        };
        /**
         * 根据配置流设置属性
         * @hide
         * @param buffer 对象属性流
         * @param beginPos 其实位置
         */
        GGraph.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._type = buffer.readByte();
            if (this._type != eGraphType.Empty) {
                var i;
                var cnt;
                this._lineSize = buffer.readInt();
                var c = buffer.readColor(true);
                this._lineColor = c & 0xFFFFFF;
                this._lineAlpha = ((c >> 24) & 0xFF) / 0xFF;
                c = buffer.readColor(true);
                this._fillColor = c & 0xFFFFFF;
                this._fillAlpha = ((c >> 24) & 0xFF) / 0xFF;
                if (buffer.readBool()) {
                    this._cornerRadius = new Array(4);
                    for (i = 0; i < 4; i++) {
                        this._cornerRadius[i] = buffer.readFloat();
                    }
                }
                if (this._type == 3) {
                    cnt = buffer.readShort();
                    this._polygonPoints = [];
                    this._polygonPoints.length = cnt;
                    for (i = 0; i < cnt; i++) {
                        this._polygonPoints[i] = buffer.readFloat();
                    }
                }
                else if (this._type == 4) {
                    this._sides = buffer.readShort();
                    this._startAngle = buffer.readFloat();
                    cnt = buffer.readShort();
                    if (cnt > 0) {
                        this._distances = [];
                        for (i = 0; i < cnt; i++) {
                            this._distances[i] = buffer.readFloat();
                        }
                    }
                }
                this.updateGraph();
            }
        };
        return GGraph;
    }(fgui.GObject));
    fgui.GGraph = GGraph;
})(fgui || (fgui = {}));
/// <reference path="./GObject.ts" />

/// <reference path="./GObject.ts" />
(function (fgui) {
    var GGroup = /** @class */ (function (_super) {
        __extends(GGroup, _super);
        function GGroup() {
            var _this = _super.call(this) || this;
            _this._layout = 0;
            _this._lineGap = 0;
            _this._columnGap = 0;
            _this._mainGridIndex = -1;
            _this._mainGridMinSize = 50;
            _this._mainChildIndex = -1;
            _this._totalSize = 0;
            _this._numChildren = 0;
            /**@internal */
            _this._updating = 0;
            return _this;
        }
        GGroup.prototype.dispose = function () {
            this._boundsChanged = false;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(GGroup.prototype, "layout", {
            /**
             * @see GroupLayout
             */
            get: function () {
                return this._layout;
            },
            /**
             * @see GroupLayout
             */
            set: function (value) {
                if (this._layout != value) {
                    this._layout = value;
                    this.setBoundsChangedFlag();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "lineGap", {
            get: function () {
                return this._lineGap;
            },
            set: function (value) {
                if (this._lineGap != value) {
                    this._lineGap = value;
                    this.setBoundsChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "columnGap", {
            get: function () {
                return this._columnGap;
            },
            set: function (value) {
                if (this._columnGap != value) {
                    this._columnGap = value;
                    this.setBoundsChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "excludeInvisibles", {
            get: function () {
                return this._excludeInvisibles;
            },
            set: function (value) {
                if (this._excludeInvisibles != value) {
                    this._excludeInvisibles = value;
                    this.setBoundsChangedFlag();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "autoSizeDisabled", {
            get: function () {
                return this._autoSizeDisabled;
            },
            set: function (value) {
                this._autoSizeDisabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "mainGridMinSize", {
            get: function () {
                return this._mainGridMinSize;
            },
            set: function (value) {
                if (this._mainGridMinSize != value) {
                    this._mainGridMinSize = value;
                    this.setBoundsChangedFlag();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GGroup.prototype, "mainGridIndex", {
            get: function () {
                return this._mainGridIndex;
            },
            set: function (value) {
                if (this._mainGridIndex != value) {
                    this._mainGridIndex = value;
                    this.setBoundsChangedFlag();
                }
            },
            enumerable: true,
            configurable: true
        });
        GGroup.prototype.setBoundsChangedFlag = function (positionChangedOnly) {
            if (positionChangedOnly === void 0) { positionChangedOnly = false; }
            if (this._updating == 0 && this._parent != null) {
                if (!positionChangedOnly)
                    this._percentReady = false;
                if (!this._boundsChanged) {
                    this._boundsChanged = true;
                    if (this._layout != fgui.GroupLayoutType.None)
                        fgui.GTimer.inst.callLater(this.ensureBoundsCorrect, this);
                }
            }
        };
        GGroup.prototype.ensureSizeCorrect = function () {
            if (this._parent == null || !this._boundsChanged || this._layout == 0)
                return;
            this._boundsChanged = false;
            if (this._autoSizeDisabled)
                this.resizeChildren(0, 0);
            else {
                this.handleLayout();
                this.updateBounds();
            }
        };
        GGroup.prototype.ensureBoundsCorrect = function () {
            if (this._parent == null || !this._boundsChanged)
                return;
            this._boundsChanged = false;
            if (this._layout == 0)
                this.updateBounds();
            else {
                if (this._autoSizeDisabled)
                    this.resizeChildren(0, 0);
                else {
                    this.handleLayout();
                    this.updateBounds();
                }
            }
        };
        GGroup.prototype.updateBounds = function () {
            fgui.GTimer.inst.remove(this.ensureBoundsCorrect, this);
            var cnt = this._parent.numChildren;
            var i;
            var child;
            var ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
            var ar = Number.NEGATIVE_INFINITY, ab = Number.NEGATIVE_INFINITY;
            var tmp;
            var empty = true;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group != this || this._excludeInvisibles && !child.internalVisible3)
                    continue;
                tmp = child.xMin;
                if (tmp < ax)
                    ax = tmp;
                tmp = child.yMin;
                if (tmp < ay)
                    ay = tmp;
                tmp = child.xMin + child.width;
                if (tmp > ar)
                    ar = tmp;
                tmp = child.yMin + child.height;
                if (tmp > ab)
                    ab = tmp;
                empty = false;
            }
            var w = 0, h = 0;
            if (!empty) {
                this._updating |= 1;
                this.setXY(ax, ay);
                this._updating &= 2;
                w = ar - ax;
                h = ab - ay;
            }
            if ((this._updating & 2) == 0) {
                this._updating |= 2;
                this.setSize(w, h);
                this._updating &= 1;
            }
            else {
                this._updating &= 1;
                this.resizeChildren(this._width - w, this._height - h);
            }
        };
        GGroup.prototype.handleLayout = function () {
            this._updating |= 1;
            var child;
            var i;
            var cnt;
            if (this._layout == fgui.GroupLayoutType.Horizontal) {
                var curX = this.x;
                cnt = this._parent.numChildren;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3)
                        continue;
                    child.xMin = curX;
                    if (child.width != 0)
                        curX += child.width + this._columnGap;
                }
            }
            else if (this._layout == fgui.GroupLayoutType.Vertical) {
                var curY = this.y;
                cnt = this._parent.numChildren;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3)
                        continue;
                    child.yMin = curY;
                    if (child.height != 0)
                        curY += child.height + this._lineGap;
                }
            }
            this._updating &= 2;
        };
        GGroup.prototype.moveChildren = function (dx, dy) {
            if ((this._updating & 1) != 0 || this._parent == null)
                return;
            this._updating |= 1;
            var cnt = this._parent.numChildren;
            var i;
            var child;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group == this) {
                    child.setXY(child.x + dx, child.y + dy);
                }
            }
            this._updating &= 2;
        };
        GGroup.prototype.resizeChildren = function (dw, dh) {
            if (this._layout == fgui.GroupLayoutType.None || (this._updating & 2) != 0 || this._parent == null)
                return;
            this._updating |= 2;
            if (this._boundsChanged) {
                this._boundsChanged = false;
                if (!this._autoSizeDisabled) {
                    this.updateBounds();
                    return;
                }
            }
            var cnt = this._parent.numChildren;
            var i;
            var child;
            if (!this._percentReady) {
                this._percentReady = true;
                this._numChildren = 0;
                this._totalSize = 0;
                this._mainChildIndex = -1;
                var j = 0;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (!this._excludeInvisibles || child.internalVisible3) {
                        if (j == this._mainGridIndex)
                            this._mainChildIndex = i;
                        this._numChildren++;
                        if (this._layout == 1)
                            this._totalSize += child.width;
                        else
                            this._totalSize += child.height;
                    }
                    j++;
                }
                if (this._mainChildIndex != -1) {
                    if (this._layout == 1) {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        this._totalSize += this._mainGridMinSize - child.width;
                        child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                    }
                    else {
                        child = this._parent.getChildAt(this._mainChildIndex);
                        this._totalSize += this._mainGridMinSize - child.height;
                        child._sizePercentInGroup = this._mainGridMinSize / this._totalSize;
                    }
                }
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (i == this._mainChildIndex)
                        continue;
                    if (this._totalSize > 0)
                        child._sizePercentInGroup = (this._layout == 1 ? child.width : child.height) / this._totalSize;
                    else
                        child._sizePercentInGroup = 0;
                }
            }
            var remainSize = 0;
            var remainPercent = 1;
            var priorHandled = false;
            if (this._layout == 1) {
                remainSize = this.width - (this._numChildren - 1) * this._columnGap;
                if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    child.setSize(remainSize - (this._totalSize - this._mainGridMinSize), child._rawHeight + dh, true);
                    remainSize -= child.width;
                    remainPercent -= child._sizePercentInGroup;
                    priorHandled = true;
                }
                var curX = this.x;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3) {
                        child.setSize(child._rawWidth, child._rawHeight + dh, true);
                        continue;
                    }
                    if (!priorHandled || i != this._mainChildIndex) {
                        child.setSize(Math.round(child._sizePercentInGroup / remainPercent * remainSize), child._rawHeight + dh, true);
                        remainPercent -= child._sizePercentInGroup;
                        remainSize -= child.width;
                    }
                    child.xMin = curX;
                    if (child.width != 0)
                        curX += child.width + this._columnGap;
                }
            }
            else {
                remainSize = this.height - (this._numChildren - 1) * this._lineGap;
                if (this._mainChildIndex != -1 && remainSize >= this._totalSize) {
                    child = this._parent.getChildAt(this._mainChildIndex);
                    child.setSize(child._rawWidth + dw, remainSize - (this._totalSize - this._mainGridMinSize), true);
                    remainSize -= child.height;
                    remainPercent -= child._sizePercentInGroup;
                    priorHandled = true;
                }
                var curY = this.y;
                for (i = 0; i < cnt; i++) {
                    child = this._parent.getChildAt(i);
                    if (child.group != this)
                        continue;
                    if (this._excludeInvisibles && !child.internalVisible3) {
                        child.setSize(child._rawWidth + dw, child._rawHeight, true);
                        continue;
                    }
                    if (!priorHandled || i != this._mainChildIndex) {
                        child.setSize(child._rawWidth + dw, Math.round(child._sizePercentInGroup / remainPercent * remainSize), true);
                        remainPercent -= child._sizePercentInGroup;
                        remainSize -= child.height;
                    }
                    child.yMin = curY;
                    if (child.height != 0)
                        curY += child.height + this._lineGap;
                }
            }
            this._updating &= 1;
        };
        GGroup.prototype.handleAlphaChanged = function () {
            if (this._underConstruct)
                return;
            var cnt = this._parent.numChildren;
            for (var i = 0; i < cnt; i++) {
                var child = this._parent.getChildAt(i);
                if (child.group == this)
                    child.alpha = this.alpha;
            }
        };
        GGroup.prototype.handleVisibleChanged = function () {
            if (!this._parent)
                return;
            var cnt = this._parent.numChildren;
            for (var i = 0; i < cnt; i++) {
                var child = this._parent.getChildAt(i);
                if (child.group == this)
                    child.handleVisibleChanged();
            }
        };
        GGroup.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._layout = buffer.readByte();
            this._lineGap = buffer.readInt();
            this._columnGap = buffer.readInt();
            if (buffer.version >= 2) {
                this._excludeInvisibles = buffer.readBool();
                this._autoSizeDisabled = buffer.readBool();
                this._mainChildIndex = buffer.readInt();
            }
        };
        GGroup.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!this.visible)
                this.handleVisibleChanged();
        };
        GGroup.prototype.createDisplayObject = function () {
            var c = new fgui.UIContainer(this);
            c.interactive = false;
            this.setDisplayObject(c);
        };
        // public updateBounds(): void {
        //     if (this._updating || !this.parent)
        //         return;
        //     let cnt: number = this._parent.numChildren;
        //     let i: number = 0;
        //     let ax: number = Number.POSITIVE_INFINITY, ay: number = Number.POSITIVE_INFINITY;
        //     let ar: number = Number.NEGATIVE_INFINITY, ab: number = Number.NEGATIVE_INFINITY;
        //     this._empty = true;
        //     let child: GObject;
        //     let tmp: number = 0;
        //     for (i = 0; i < cnt; i++) {
        //         child = this._parent.getChildAt(i);
        //         if (child.group == this) {
        //             tmp = child.x;
        //             if (tmp < ax) ax = tmp;
        //             tmp = child.y;
        //             if (tmp < ay) ay = tmp;
        //             tmp = child.x + child.width;
        //             if (tmp > ar) ar = tmp;
        //             tmp = child.y + child.height;
        //             if (tmp > ab) ab = tmp;
        //             this._empty = false;
        //         }
        //     }
        //     this._updating = true;
        //     if (!this._empty) {
        //         this.setXY(ax, ay);
        //         this.setSize(ar - ax, ab - ay);
        //     }
        //     else
        //         this.setSize(0, 0);
        //     this._updating = false;
        // }
        GGroup.prototype.setXY = function (xv, yv) {
            if (this._x != xv || this._y != yv) {
                var dx = xv - this._x;
                var dy = yv - this._y;
                _super.prototype.setXY.call(this, xv, yv);
                this.moveChildren(dx, dy);
            }
        };
        // public moveChildren(dx: number, dy: number): void {
        //     if (this._updating || !this._parent)
        //         return;
        //     this._updating = true;
        //     let cnt: number = this._parent.numChildren;
        //     let i: number = 0;
        //     let child: GObject;
        //     for (i = 0; i < cnt; i++) {
        //         child = this._parent.getChildAt(i);
        //         if (child.group == this) {
        //             child.setXY(child.x + dx, child.y + dy);
        //         }
        //     }
        //     this._updating = false;
        // }
        GGroup.prototype.updateAlpha = function () {
            _super.prototype.updateAlpha.call(this);
            if (this._underConstruct)
                return;
            var cnt = this._parent.numChildren;
            var i;
            var child;
            for (i = 0; i < cnt; i++) {
                child = this._parent.getChildAt(i);
                if (child.group == this)
                    child.alpha = this.alpha;
            }
        };
        return GGroup;
    }(fgui.GObject));
    fgui.GGroup = GGroup;
})(fgui || (fgui = {}));

(function (fgui) {
    var GImage = /** @class */ (function (_super) {
        __extends(GImage, _super);
        function GImage() {
            var _this = _super.call(this) || this;
            _this._flip = fgui.FlipType.None;
            return _this;
        }
        Object.defineProperty(GImage.prototype, "touchable", {
            get: function () {
                return false;
            },
            set: function (value) {
                this._touchable = false; //GImage has no interaction
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GImage.prototype, "color", {
            get: function () {
                return this._content.tint;
            },
            set: function (value) {
                if (this.color != value) {
                    this.updateGear(4 /* Color */);
                    this._content.tint = value;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GImage.prototype, "flip", {
            get: function () {
                return this._flip;
            },
            set: function (value) {
                if (this._flip != value) {
                    this._flip = value;
                    var sx = 1, sy = 1;
                    if (this._flip == fgui.FlipType.Horizontal || this._flip == fgui.FlipType.Both) {
                        sx = -1;
                    }
                    if (this._flip == fgui.FlipType.Vertical || this._flip == fgui.FlipType.Both) {
                        sy = -1;
                    }
                    this._content.scale.x = sx;
                    this._content.scale.y = sy;
                    this.handleXYChanged();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GImage.prototype, "fillMethod", {
            get: function () {
                return this._content.fillMethod;
            },
            set: function (value) {
                this._content.fillMethod = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GImage.prototype, "fillAmount", {
            get: function () {
                return this._content.fillAmount;
            },
            set: function (value) {
                this._content.fillAmount = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GImage.prototype, "texture", {
            get: function () {
                return this._content.texture;
            },
            set: function (value) {
                if (value != null) {
                    this.sourceWidth = value.orig.width;
                    this.sourceHeight = value.orig.height;
                }
                else {
                    this.sourceWidth = 0;
                    this.sourceHeight = 0;
                }
                this.initWidth = this.sourceWidth;
                this.initHeight = this.sourceHeight;
                this._content.scale9Grid = null;
                // FIXME
                this._content.fillMethod = 0; //egret.BitmapFillMode.SCALE;
                this._content.texture = value;
            },
            enumerable: true,
            configurable: true
        });
        GImage.prototype.createDisplayObject = function () {
            this._content = new fgui.UIImage(this);
            this.setDisplayObject(this._content);
        };
        GImage.prototype.dispose = function () {
            this._content.destroy();
            _super.prototype.dispose.call(this);
        };
        GImage.prototype.constructFromResource = function () {
            var contentItem = this.packageItem.getBranch();
            this.sourceWidth = contentItem.width;
            this.sourceHeight = contentItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this._content.initDisp(contentItem);
            this.setSize(this.sourceWidth, this.sourceHeight);
            contentItem = contentItem.getHighResolution();
            contentItem.load();
            this._content.scale9Grid = contentItem.scale9Grid;
            this._content.smoothing = contentItem.smoothing;
            if (contentItem.scaleByTile) {
                // TODO
                this._content.fillMethod = 0;
            }
            this.setSize(this.sourceWidth, this.sourceHeight);
            this._content.texture = contentItem.texture;
        };
        GImage.prototype.handleXYChanged = function () {
            _super.prototype.handleXYChanged.call(this);
            if (this._flip != fgui.FlipType.None) {
                if (this._content.scale.x == -1)
                    this._content.x += this.width;
                if (this._content.scale.y == -1)
                    this._content.y += this.height;
            }
        };
        GImage.prototype.handleSizeChanged = function () {
            this._content.width = this.width;
            this._content.height = this.height;
        };
        GImage.prototype.getProp = function (index) {
            if (index == fgui.ObjectPropID.Color)
                return this.color;
            else
                return _super.prototype.getProp.call(this, index);
        };
        GImage.prototype.setProp = function (index, value) {
            if (index == fgui.ObjectPropID.Color)
                this.color = value;
            else
                _super.prototype.setProp.call(this, index, value);
        };
        GImage.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            if (buffer.readBool()) {
                this.color = buffer.readColor();
            }
            this.flip = buffer.readByte();
            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != fgui.FillMethod.None) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }
        };
        return GImage;
    }(fgui.GObject));
    fgui.GImage = GImage;
})(fgui || (fgui = {}));
/// <reference path="./IColorableTitle.ts" />

/// <reference path="./IColorableTitle.ts" />
(function (fgui) {
    var GLabel = /** @class */ (function (_super) {
        __extends(GLabel, _super);
        function GLabel() {
            return _super.call(this) || this;
        }
        Object.defineProperty(GLabel.prototype, "icon", {
            get: function () {
                if (this._iconObject != null)
                    return this._iconObject.icon;
                return null;
            },
            set: function (value) {
                if (this._iconObject != null)
                    this._iconObject.icon = value;
                this.updateGear(7 /* Icon */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "title", {
            get: function () {
                if (this._titleObject)
                    return this._titleObject.text;
                else
                    return null;
            },
            set: function (value) {
                if (this._titleObject)
                    this._titleObject.text = value;
                this.updateGear(6 /* Text */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "text", {
            get: function () {
                return this.title;
            },
            set: function (value) {
                this.title = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "titleColor", {
            get: function () {
                if (fgui.isColorableTitle(this._titleObject))
                    return this._titleObject.titleColor;
                return 0;
            },
            set: function (value) {
                if (fgui.isColorableTitle(this._titleObject))
                    this._titleObject.titleColor = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "fontSize", {
            get: function () {
                if (fgui.isColorableTitle(this._titleObject))
                    return this._titleObject.fontSize;
                return 0;
            },
            set: function (value) {
                if (fgui.isColorableTitle(this._titleObject))
                    this._titleObject.fontSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "titleFontSize", {
            set: function (value) {
                var tf = this.getTextField();
                if (tf != null)
                    tf.fontSize = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLabel.prototype, "editable", {
            get: function () {
                if (this._titleObject && (this._titleObject instanceof fgui.GTextInput))
                    return this._titleObject.editable;
                else
                    return false;
            },
            set: function (val) {
                if (this._titleObject) {
                    this._titleObject.editable = val;
                }
            },
            enumerable: true,
            configurable: true
        });
        GLabel.prototype.getTextField = function () {
            if (this._titleObject instanceof fgui.GTextField)
                return this._titleObject;
            else if (this._titleObject instanceof GLabel)
                return this._titleObject.getTextField();
            else if (this._titleObject instanceof fgui.GButton)
                return this._titleObject.getTextField();
            else
                return null;
        };
        GLabel.prototype.getProp = function (index) {
            switch (index) {
                case fgui.ObjectPropID.Color:
                    return this.titleColor;
                case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            return tf.strokeColor;
                        else
                            return 0;
                    }
                case fgui.ObjectPropID.FontSize:
                    return this.titleFontSize;
                default:
                    return _super.prototype.getProp.call(this, index);
            }
        };
        GLabel.prototype.setProp = function (index, value) {
            switch (index) {
                case fgui.ObjectPropID.Color:
                    this.titleColor = value;
                    break;
                case fgui.ObjectPropID.OutlineColor:
                    {
                        var tf = this.getTextField();
                        if (tf)
                            tf.strokeColor = value;
                    }
                    break;
                case fgui.ObjectPropID.FontSize:
                    this.titleFontSize = value;
                    break;
                default:
                    _super.prototype.setProp.call(this, index, value);
                    break;
            }
        };
        GLabel.prototype.constructExtension = function (buffer) {
            this._titleObject = this.getChild("title");
            this._iconObject = this.getChild("icon");
        };
        GLabel.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!buffer.seek(beginPos, 6))
                return;
            if (buffer.readByte() != this.packageItem.objectType)
                return;
            var str;
            str = buffer.readS();
            if (str != null)
                this.title = str;
            str = buffer.readS();
            if (str != null)
                this.icon = str;
            if (buffer.readBool())
                this.titleColor = buffer.readColor();
            var iv = buffer.readInt();
            if (iv != 0)
                this.titleFontSize = iv;
            if (buffer.readBool()) {
                var input = this.getTextField();
                if (input != null) {
                    str = buffer.readS();
                    if (str != null)
                        input.promptText = str;
                    str = buffer.readS();
                    if (str != null)
                        input.restrict = str;
                    iv = buffer.readInt();
                    if (iv != 0)
                        input.maxLength = iv;
                    iv = buffer.readInt();
                    if (iv != 0) {
                        //keyboardType
                    }
                    if (buffer.readBool())
                        input.password = true;
                }
                else
                    buffer.skip(13);
            }
        };
        return GLabel;
    }(fgui.GComponent));
    fgui.GLabel = GLabel;
})(fgui || (fgui = {}));

(function (fgui) {
    var GList = /** @class */ (function (_super) {
        __extends(GList, _super);
        function GList() {
            var _this = _super.call(this) || this;
            _this.scrollItemToViewOnClick = true;
            _this.foldInvisibleItems = false;
            _this._lineCount = 0;
            _this._columnCount = 0;
            _this._lineGap = 0;
            _this._columnGap = 0;
            _this._lastSelectedIndex = 0;
            _this._numItems = 0;
            _this._realNumItems = 0;
            _this._firstIndex = 0; //the top left index
            _this._curLineItemCount = 0; //item count in one line
            _this._curLineItemCount2 = 0; //只用在页面模式，表示垂直方向的项目数
            _this._virtualListChanged = 0; //1-content changed, 2-size changed
            _this.itemInfoVer = 0; //用来标志item是否在本次处理中已经被重用了
            _this._trackBounds = true;
            _this._pool = new fgui.GObjectPool();
            _this._layout = fgui.ListLayoutType.SingleColumn;
            _this._autoResizeItem = true;
            _this._lastSelectedIndex = -1;
            _this._selectionMode = fgui.ListSelectionMode.Single;
            _this.opaque = true;
            _this._align = fgui.AlignType.Left;
            _this._verticalAlign = fgui.VertAlignType.Top;
            _this._container = new PIXI.Container();
            _this._rootContainer.addChild(_this._container);
            return _this;
        }
        GList.prototype.dispose = function () {
            this._pool.clear();
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(GList.prototype, "layout", {
            get: function () {
                return this._layout;
            },
            set: function (value) {
                if (this._layout != value) {
                    this._layout = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "lineCount", {
            get: function () {
                return this._lineCount;
            },
            set: function (value) {
                if (this._lineCount != value) {
                    this._lineCount = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "columnCount", {
            get: function () {
                return this._columnCount;
            },
            set: function (value) {
                if (this._columnCount != value) {
                    this._columnCount = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "lineGap", {
            get: function () {
                return this._lineGap;
            },
            set: function (value) {
                if (this._lineGap != value) {
                    this._lineGap = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "columnGap", {
            get: function () {
                return this._columnGap;
            },
            set: function (value) {
                if (this._columnGap != value) {
                    this._columnGap = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "align", {
            get: function () {
                return this._align;
            },
            set: function (value) {
                if (this._align != value) {
                    this._align = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "verticalAlign", {
            get: function () {
                return this._verticalAlign;
            },
            set: function (value) {
                if (this._verticalAlign != value) {
                    this._verticalAlign = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "virtualItemSize", {
            get: function () {
                return this._itemSize;
            },
            set: function (value) {
                if (this._virtual) {
                    if (this._itemSize == null)
                        this._itemSize = new PIXI.Point();
                    this._itemSize.copyFrom(value);
                    this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "defaultItem", {
            get: function () {
                return this._defaultItem;
            },
            set: function (val) {
                this._defaultItem = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "autoResizeItem", {
            get: function () {
                return this._autoResizeItem;
            },
            set: function (value) {
                if (this._autoResizeItem != value) {
                    this._autoResizeItem = value;
                    this.setBoundsChangedFlag();
                    if (this._virtual)
                        this.setVirtualListChangedFlag(true);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "selectionMode", {
            get: function () {
                return this._selectionMode;
            },
            set: function (value) {
                this._selectionMode = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "selectionController", {
            get: function () {
                return this._selectionController;
            },
            set: function (value) {
                this._selectionController = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GList.prototype, "itemPool", {
            get: function () {
                return this._pool;
            },
            enumerable: true,
            configurable: true
        });
        GList.prototype.getFromPool = function (url) {
            if (url === void 0) { url = null; }
            if (!url)
                url = this._defaultItem;
            var obj = this._pool.getObject(url);
            if (obj != null)
                obj.visible = true;
            return obj;
        };
        GList.prototype.returnToPool = function (obj) {
            obj.displayObject.cacheAsBitmap = false;
            this._pool.returnObject(obj);
        };
        GList.prototype.addChildAt = function (child, index) {
            if (index === void 0) { index = 0; }
            _super.prototype.addChildAt.call(this, child, index);
            if (child instanceof fgui.GButton) {
                var button = child;
                button.selected = false;
                button.changeStateOnClick = false;
            }
            child.on(fgui.InteractiveEvents.Click, this.__clickItem, this);
            return child;
        };
        GList.prototype.addItem = function (url) {
            if (url === void 0) { url = null; }
            if (!url)
                url = this._defaultItem;
            return this.addChild(fgui.UIPackage.createObjectFromURL(url));
        };
        GList.prototype.addItemFromPool = function (url) {
            if (url === void 0) { url = null; }
            var obj = this.getFromPool(url);
            return this.addChild(obj);
        };
        GList.prototype.removeChildAt = function (index, dispose) {
            if (dispose === void 0) { dispose = false; }
            var child = _super.prototype.removeChildAt.call(this, index, dispose);
            child.off(fgui.InteractiveEvents.Click, this.__clickItem, this);
            return child;
        };
        GList.prototype.removeChildToPoolAt = function (index) {
            if (index === void 0) { index = 0; }
            var child = _super.prototype.removeChildAt.call(this, index);
            this.returnToPool(child);
        };
        GList.prototype.removeChildToPool = function (child) {
            _super.prototype.removeChild.call(this, child);
            this.returnToPool(child);
        };
        GList.prototype.removeChildrenToPool = function (beginIndex, endIndex) {
            if (beginIndex === void 0) { beginIndex = 0; }
            if (endIndex === void 0) { endIndex = -1; }
            if (endIndex < 0 || endIndex >= this._children.length)
                endIndex = this._children.length - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildToPoolAt(beginIndex);
        };
        Object.defineProperty(GList.prototype, "selectedIndex", {
            get: function () {
                var i;
                if (this._virtual) {
                    for (i = 0; i < this._realNumItems; i++) {
                        var ii = this._virtualItems[i];
                        if ((ii.obj instanceof fgui.GButton) && ii.obj.selected
                            || ii.obj == null && ii.selected) {
                            if (this._loop)
                                return i % this._numItems;
                            else
                                return i;
                        }
                    }
                }
                else {
                    var cnt = this._children.length;
                    for (i = 0; i < cnt; i++) {
                        var obj = this._children[i].asButton;
                        if (obj != null && obj.selected)
                            return i;
                    }
                }
                return -1;
            },
            set: function (value) {
                if (value >= 0 && value < this.numItems) {
                    if (this._selectionMode != fgui.ListSelectionMode.Single)
                        this.clearSelection();
                    this.addSelection(value);
                }
                else
                    this.clearSelection();
            },
            enumerable: true,
            configurable: true
        });
        GList.prototype.getSelection = function (result) {
            if (!result)
                result = new Array();
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if ((ii.obj instanceof fgui.GButton) && ii.obj.selected
                        || ii.obj == null && ii.selected) {
                        var j = i;
                        if (this._loop) {
                            j = i % this._numItems;
                            if (result.indexOf(j) != -1)
                                continue;
                        }
                        result.push(j);
                    }
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i].asButton;
                    if (obj != null && obj.selected)
                        result.push(i);
                }
            }
            return result;
        };
        GList.prototype.addSelection = function (index, scrollItToView) {
            if (scrollItToView === void 0) { scrollItToView = false; }
            if (this._selectionMode == fgui.ListSelectionMode.None)
                return;
            this.checkVirtualList();
            if (this._selectionMode == fgui.ListSelectionMode.Single)
                this.clearSelection();
            if (scrollItToView)
                this.scrollToView(index);
            this._lastSelectedIndex = index;
            var obj = null;
            if (this._virtual) {
                var ii = this._virtualItems[index];
                if (ii.obj != null)
                    obj = ii.obj.asButton;
                ii.selected = true;
            }
            else
                obj = this.getChildAt(index).asButton;
            if (obj != null && !obj.selected) {
                obj.selected = true;
                this.updateSelectionController(index);
            }
        };
        GList.prototype.removeSelection = function (index) {
            if (this._selectionMode == fgui.ListSelectionMode.None)
                return;
            var obj = null;
            if (this._virtual) {
                var ii = this._virtualItems[index];
                if (ii.obj != null)
                    obj = ii.obj.asButton;
                ii.selected = false;
            }
            else
                obj = this.getChildAt(index).asButton;
            if (obj != null)
                obj.selected = false;
        };
        GList.prototype.clearSelection = function () {
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = false;
                    ii.selected = false;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i].asButton;
                    if (obj != null)
                        obj.selected = false;
                }
            }
        };
        GList.prototype.clearSelectionExcept = function (g) {
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj != g) {
                        if ((ii.obj instanceof fgui.GButton))
                            ii.obj.selected = false;
                        ii.selected = false;
                    }
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i].asButton;
                    if (obj != null && obj != g)
                        obj.selected = false;
                }
            }
        };
        GList.prototype.selectAll = function () {
            this.checkVirtualList();
            var last = -1;
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if ((ii.obj instanceof fgui.GButton) && !ii.obj.selected) {
                        ii.obj.selected = true;
                        last = i;
                    }
                    ii.selected = true;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i].asButton;
                    if (obj != null && !obj.selected) {
                        obj.selected = true;
                        last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        };
        GList.prototype.selectNone = function () {
            this.clearSelection();
        };
        GList.prototype.selectReverse = function () {
            this.checkVirtualList();
            var last = -1;
            var i;
            if (this._virtual) {
                for (i = 0; i < this._realNumItems; i++) {
                    var ii = this._virtualItems[i];
                    if (ii.obj instanceof fgui.GButton) {
                        ii.obj.selected = !ii.obj.selected;
                        if (ii.obj.selected)
                            last = i;
                    }
                    ii.selected = !ii.selected;
                }
            }
            else {
                var cnt = this._children.length;
                for (i = 0; i < cnt; i++) {
                    var obj = this._children[i].asButton;
                    if (obj != null) {
                        obj.selected = !obj.selected;
                        if (obj.selected)
                            last = i;
                    }
                }
            }
            if (last != -1)
                this.updateSelectionController(last);
        };
        GList.prototype.handleArrowKey = function (dir) {
            if (dir === void 0) { dir = 0; }
            var index = this.selectedIndex;
            if (index == -1)
                return;
            switch (dir) {
                case 1: //up
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowVertical) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        var current = this._children[index];
                        var k = 0;
                        for (var i = index - 1; i >= 0; i--) {
                            var obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 3: //right
                    if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        index++;
                        if (index < this._children.length) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                        current = this._children[index];
                        k = 0;
                        var cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 5: //down
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowVertical) {
                        index++;
                        if (index < this._children.length) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        current = this._children[index];
                        k = 0;
                        cnt = this._children.length;
                        for (i = index + 1; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i < cnt; i++) {
                            obj = this._children[i];
                            if (obj.y != current.y) {
                                this.clearSelection();
                                this.addSelection(i - k - 1, true);
                                break;
                            }
                        }
                    }
                    break;
                case 7: //left
                    if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.Pagination) {
                        index--;
                        if (index >= 0) {
                            this.clearSelection();
                            this.addSelection(index, true);
                        }
                    }
                    else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                        current = this._children[index];
                        k = 0;
                        for (i = index - 1; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                current = obj;
                                break;
                            }
                            k++;
                        }
                        for (; i >= 0; i--) {
                            obj = this._children[i];
                            if (obj.x != current.x) {
                                this.clearSelection();
                                this.addSelection(i + k + 1, true);
                                break;
                            }
                        }
                    }
                    break;
            }
        };
        GList.prototype.__clickItem = function (evt) {
            if (this._scrollPane != null && this._scrollPane.isDragging)
                return;
            var item = fgui.GObject.cast(evt.currentTarget);
            if (!item) {
                return;
            }
            this.setSelectionOnEvent(item);
            if (this._scrollPane && this.scrollItemToViewOnClick) {
                this._scrollPane.scrollToView(item, true);
            }
            this.emit("__itemClick" /* ItemClick */, evt, item);
        };
        GList.prototype.setSelectionOnEvent = function (item) {
            if (!(item instanceof fgui.GButton) || this._selectionMode == fgui.ListSelectionMode.None)
                return;
            var dontChangeLastIndex = false;
            var button = item;
            var index = this.childIndexToItemIndex(this.getChildIndex(item));
            if (this._selectionMode == fgui.ListSelectionMode.Single) {
                if (!button.selected) {
                    this.clearSelectionExcept(button);
                    button.selected = true;
                }
            }
            else {
                if (fgui.GRoot.shiftKeyDown) {
                    if (!button.selected) {
                        if (this._lastSelectedIndex != -1) {
                            var min = Math.min(this._lastSelectedIndex, index);
                            var max = Math.max(this._lastSelectedIndex, index);
                            max = Math.min(max, this.numItems - 1);
                            var i;
                            if (this._virtual) {
                                for (i = min; i <= max; i++) {
                                    var ii = this._virtualItems[i];
                                    if (ii.obj instanceof fgui.GButton)
                                        ii.obj.selected = true;
                                    ii.selected = true;
                                }
                            }
                            else {
                                for (i = min; i <= max; i++) {
                                    var obj = this.getChildAt(i).asButton;
                                    if (obj != null)
                                        obj.selected = true;
                                }
                            }
                            dontChangeLastIndex = true;
                        }
                        else {
                            button.selected = true;
                        }
                    }
                }
                else if (fgui.GRoot.ctrlKeyDown || this._selectionMode == fgui.ListSelectionMode.Multiple_SingleClick) {
                    button.selected = !button.selected;
                }
                else {
                    if (!button.selected) {
                        this.clearSelectionExcept(button);
                        button.selected = true;
                    }
                    else
                        this.clearSelectionExcept(button);
                }
            }
            if (!dontChangeLastIndex)
                this._lastSelectedIndex = index;
            if (button.selected)
                this.updateSelectionController(index);
        };
        GList.prototype.resizeToFit = function (itemCount, minSize) {
            if (itemCount === void 0) { itemCount = Number.POSITIVE_INFINITY; }
            if (minSize === void 0) { minSize = 0; }
            this.ensureBoundsCorrect();
            var curCount = this.numItems;
            if (itemCount > curCount)
                itemCount = curCount;
            if (this._virtual) {
                var lineCount = Math.ceil(itemCount / this._curLineItemCount);
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal)
                    this.viewHeight = lineCount * this._itemSize.y + Math.max(0, lineCount - 1) * this._lineGap;
                else
                    this.viewWidth = lineCount * this._itemSize.x + Math.max(0, lineCount - 1) * this._columnGap;
            }
            else if (itemCount == 0) {
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal)
                    this.viewHeight = minSize;
                else
                    this.viewWidth = minSize;
            }
            else {
                var i = itemCount - 1;
                var obj = null;
                while (i >= 0) {
                    obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible)
                        break;
                    i--;
                }
                if (i < 0) {
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal)
                        this.viewHeight = minSize;
                    else
                        this.viewWidth = minSize;
                }
                else {
                    var size = 0;
                    if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                        size = obj.y + obj.height;
                        if (size < minSize)
                            size = minSize;
                        this.viewHeight = size;
                    }
                    else {
                        size = obj.x + obj.width;
                        if (size < minSize)
                            size = minSize;
                        this.viewWidth = size;
                    }
                }
            }
        };
        GList.prototype.getMaxItemWidth = function () {
            var cnt = this._children.length;
            var max = 0;
            for (var i = 0; i < cnt; i++) {
                var child = this.getChildAt(i);
                if (child.width > max)
                    max = child.width;
            }
            return max;
        };
        GList.prototype.handleSizeChanged = function () {
            _super.prototype.handleSizeChanged.call(this);
            this.setBoundsChangedFlag();
            if (this._virtual)
                this.setVirtualListChangedFlag(true);
        };
        GList.prototype.handleControllerChanged = function (c) {
            _super.prototype.handleControllerChanged.call(this, c);
            if (this._selectionController == c)
                this.selectedIndex = c.selectedIndex;
        };
        GList.prototype.updateSelectionController = function (index) {
            if (this._selectionController != null && !this._selectionController.changing
                && index < this._selectionController.pageCount) {
                var c = this._selectionController;
                this._selectionController = null;
                c.selectedIndex = index;
                this._selectionController = c;
            }
        };
        GList.prototype.getSnappingPosition = function (xValue, yValue, resultPoint) {
            if (this._virtual) {
                if (!resultPoint)
                    resultPoint = new PIXI.Point();
                var saved;
                var index;
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    saved = yValue;
                    GList.pos_param = yValue;
                    index = this.getIndexOnPos1(false);
                    yValue = GList.pos_param;
                    if (index < this._virtualItems.length && saved - yValue > this._virtualItems[index].height / 2 && index < this._realNumItems)
                        yValue += this._virtualItems[index].height + this._lineGap;
                }
                else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                    saved = xValue;
                    GList.pos_param = xValue;
                    index = this.getIndexOnPos2(false);
                    xValue = GList.pos_param;
                    if (index < this._virtualItems.length && saved - xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
                        xValue += this._virtualItems[index].width + this._columnGap;
                }
                else {
                    saved = xValue;
                    GList.pos_param = xValue;
                    index = this.getIndexOnPos3(false);
                    xValue = GList.pos_param;
                    if (index < this._virtualItems.length && saved - xValue > this._virtualItems[index].width / 2 && index < this._realNumItems)
                        xValue += this._virtualItems[index].width + this._columnGap;
                }
                resultPoint.x = xValue;
                resultPoint.y = yValue;
                return resultPoint;
            }
            else {
                return _super.prototype.getSnappingPosition.call(this, xValue, yValue, resultPoint);
            }
        };
        GList.prototype.scrollToView = function (index, ani, setFirst) {
            if (ani === void 0) { ani = false; }
            if (setFirst === void 0) { setFirst = false; }
            if (this._virtual) {
                if (this._numItems == 0)
                    return;
                this.checkVirtualList();
                if (index >= this._virtualItems.length)
                    throw "Invalid child index: " + index + ">" + this._virtualItems.length;
                if (this._loop)
                    index = Math.floor(this._firstIndex / this._numItems) * this._numItems + index;
                var rect;
                var ii = this._virtualItems[index];
                var pos = 0;
                var i;
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].height + this._lineGap;
                    rect = new PIXI.Rectangle(0, pos, this._itemSize.x, ii.height);
                }
                else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                    for (i = this._curLineItemCount - 1; i < index; i += this._curLineItemCount)
                        pos += this._virtualItems[i].width + this._columnGap;
                    rect = new PIXI.Rectangle(pos, 0, ii.width, this._itemSize.y);
                }
                else {
                    var page = index / (this._curLineItemCount * this._curLineItemCount2);
                    rect = new PIXI.Rectangle(page * this.viewWidth + (index % this._curLineItemCount) * (ii.width + this._columnGap), (index / this._curLineItemCount) % this._curLineItemCount2 * (ii.height + this._lineGap), ii.width, ii.height);
                }
                setFirst = true; //因为在可变item大小的情况下，只有设置在最顶端，位置才不会因为高度变化而改变，所以只能支持setFirst=true
                if (this._scrollPane != null)
                    this._scrollPane.scrollToView(rect, ani, setFirst);
            }
            else {
                var obj = this.getChildAt(index);
                if (obj != null) {
                    if (this._scrollPane != null)
                        this._scrollPane.scrollToView(obj, ani, setFirst);
                    else if (this.parent != null && this.parent.scrollPane != null)
                        this.parent.scrollPane.scrollToView(obj, ani, setFirst);
                }
            }
        };
        GList.prototype.getFirstChildInView = function () {
            return this.childIndexToItemIndex(_super.prototype.getFirstChildInView.call(this));
        };
        GList.prototype.childIndexToItemIndex = function (index) {
            if (!this._virtual)
                return index;
            if (this._layout == fgui.ListLayoutType.Pagination) {
                for (var i = this._firstIndex; i < this._realNumItems; i++) {
                    if (this._virtualItems[i].obj != null) {
                        index--;
                        if (index < 0)
                            return i;
                    }
                }
                return index;
            }
            else {
                index += this._firstIndex;
                if (this._loop && this._numItems > 0)
                    index = index % this._numItems;
                return index;
            }
        };
        GList.prototype.itemIndexToChildIndex = function (index) {
            if (!this._virtual)
                return index;
            if (this._layout == fgui.ListLayoutType.Pagination) {
                return this.getChildIndex(this._virtualItems[index].obj);
            }
            else {
                if (this._loop && this._numItems > 0) {
                    var j = this._firstIndex % this._numItems;
                    if (index >= j)
                        index = index - j;
                    else
                        index = this._numItems - j + index;
                }
                else
                    index -= this._firstIndex;
                return index;
            }
        };
        GList.prototype.setVirtual = function () {
            this._setVirtual(false);
        };
        /// <summary>
        /// Set the list to be virtual list, and has loop behavior.
        /// </summary>
        GList.prototype.setVirtualAndLoop = function () {
            this._setVirtual(true);
        };
        /// <summary>
        /// Set the list to be virtual list.
        /// </summary>
        GList.prototype._setVirtual = function (loop) {
            if (!this._virtual) {
                if (this._scrollPane == null)
                    throw "Virtual list must be scrollable!";
                if (loop) {
                    if (this._layout == fgui.ListLayoutType.FlowHorizontal || this._layout == fgui.ListLayoutType.FlowVertical)
                        throw "Loop list is not supported for FlowHorizontal or FlowVertical layout!";
                    this._scrollPane.bouncebackEffect = false;
                }
                this._virtual = true;
                this._loop = loop;
                this._virtualItems = new Array();
                this.removeChildrenToPool();
                if (this._itemSize == null) {
                    this._itemSize = new PIXI.Point();
                    var obj = this.getFromPool(null);
                    if (obj == null) {
                        throw "Virtual List must have a default list item resource.";
                    }
                    else {
                        this._itemSize.x = obj.width;
                        this._itemSize.y = obj.height;
                    }
                    this.returnToPool(obj);
                }
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    this._scrollPane.scrollStep = this._itemSize.y;
                    if (this._loop)
                        this._scrollPane._loop = 2;
                }
                else {
                    this._scrollPane.scrollStep = this._itemSize.x;
                    if (this._loop)
                        this._scrollPane._loop = 1;
                }
                this._scrollPane.on(fgui.ScrollPane.SCROLL, this.__scrolled, this);
                this.setVirtualListChangedFlag(true);
            }
        };
        Object.defineProperty(GList.prototype, "numItems", {
            /// <summary>
            /// Set the list item count. 
            /// If the list is not virtual, specified number of items will be created. 
            /// If the list is virtual, only items in view will be created.
            /// </summary>
            get: function () {
                if (this._virtual)
                    return this._numItems;
                else
                    return this._children.length;
            },
            set: function (value) {
                if (this._virtual) {
                    if (this.itemRenderer == null)
                        throw "Set itemRenderer first!";
                    this._numItems = value;
                    if (this._loop)
                        this._realNumItems = this._numItems * 6; //设置6倍数量，用于循环滚动
                    else
                        this._realNumItems = this._numItems;
                    //_virtualItems的设计是只增不减的
                    var oldCount = this._virtualItems.length;
                    if (this._realNumItems > oldCount) {
                        for (i = oldCount; i < this._realNumItems; i++) {
                            var ii = new ItemInfo();
                            ii.width = this._itemSize.x;
                            ii.height = this._itemSize.y;
                            this._virtualItems.push(ii);
                        }
                    }
                    else {
                        for (i = this._realNumItems; i < oldCount; i++)
                            this._virtualItems[i].selected = false;
                    }
                    if (this._virtualListChanged != 0)
                        fgui.GTimer.inst.remove(this._refreshVirtualList, this);
                    //立即刷新
                    this._refreshVirtualList();
                }
                else {
                    var cnt = this._children.length;
                    if (value > cnt) {
                        for (var i = cnt; i < value; i++) {
                            if (this.itemProvider == null)
                                this.addItemFromPool();
                            else
                                this.addItemFromPool(this.itemProvider.call(this.callbackThisObj, i));
                        }
                    }
                    else {
                        this.removeChildrenToPool(value, cnt);
                    }
                    if (this.itemRenderer != null) {
                        for (i = 0; i < value; i++)
                            this.itemRenderer.call(this.callbackThisObj, i, this.getChildAt(i));
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        GList.prototype.refreshVirtualList = function () {
            this.setVirtualListChangedFlag(false);
        };
        GList.prototype.checkVirtualList = function () {
            if (this._virtualListChanged != 0) {
                this._refreshVirtualList();
                fgui.GTimer.inst.remove(this._refreshVirtualList, this);
            }
        };
        GList.prototype.setVirtualListChangedFlag = function (layoutChanged) {
            if (layoutChanged === void 0) { layoutChanged = false; }
            if (layoutChanged)
                this._virtualListChanged = 2;
            else if (this._virtualListChanged == 0)
                this._virtualListChanged = 1;
            fgui.GTimer.inst.callLater(this._refreshVirtualList, this);
        };
        GList.prototype._refreshVirtualList = function () {
            var layoutChanged = this._virtualListChanged == 2;
            this._virtualListChanged = 0;
            this._eventLocked = true;
            if (layoutChanged) {
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.SingleRow)
                    this._curLineItemCount = 1;
                else if (this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                    if (this._lineCount > 0)
                        this._curLineItemCount = this._lineCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                }
                else //pagination
                 {
                    if (this._columnCount > 0)
                        this._curLineItemCount = this._columnCount;
                    else {
                        this._curLineItemCount = Math.floor((this._scrollPane.viewWidth + this._columnGap) / (this._itemSize.x + this._columnGap));
                        if (this._curLineItemCount <= 0)
                            this._curLineItemCount = 1;
                    }
                    if (this._lineCount > 0)
                        this._curLineItemCount2 = this._lineCount;
                    else {
                        this._curLineItemCount2 = Math.floor((this._scrollPane.viewHeight + this._lineGap) / (this._itemSize.y + this._lineGap));
                        if (this._curLineItemCount2 <= 0)
                            this._curLineItemCount2 = 1;
                    }
                }
            }
            var ch = 0, cw = 0;
            if (this._realNumItems > 0) {
                var i;
                var len = Math.ceil(this._realNumItems / this._curLineItemCount) * this._curLineItemCount;
                var len2 = Math.min(this._curLineItemCount, this._realNumItems);
                if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        ch += this._virtualItems[i].height + this._lineGap;
                    if (ch > 0)
                        ch -= this._lineGap;
                    if (this._autoResizeItem)
                        cw = this._scrollPane.viewWidth;
                    else {
                        for (i = 0; i < len2; i++)
                            cw += this._virtualItems[i].width + this._columnGap;
                        if (cw > 0)
                            cw -= this._columnGap;
                    }
                }
                else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                    for (i = 0; i < len; i += this._curLineItemCount)
                        cw += this._virtualItems[i].width + this._columnGap;
                    if (cw > 0)
                        cw -= this._columnGap;
                    if (this._autoResizeItem)
                        ch = this._scrollPane.viewHeight;
                    else {
                        for (i = 0; i < len2; i++)
                            ch += this._virtualItems[i].height + this._lineGap;
                        if (ch > 0)
                            ch -= this._lineGap;
                    }
                }
                else {
                    var pageCount = Math.ceil(len / (this._curLineItemCount * this._curLineItemCount2));
                    cw = pageCount * this.viewWidth;
                    ch = this.viewHeight;
                }
            }
            this.handleAlign(cw, ch);
            this._scrollPane.setContentSize(cw, ch);
            this._eventLocked = false;
            this.handleScroll(true);
        };
        GList.prototype.__scrolled = function (evt) {
            this.handleScroll(false);
        };
        GList.prototype.getIndexOnPos1 = function (forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                GList.pos_param = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).y;
                if (pos2 > GList.pos_param) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].height + this._lineGap);
                        if (pos2 <= GList.pos_param) {
                            GList.pos_param = pos2;
                            return i;
                        }
                    }
                    GList.pos_param = 0;
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                        if (pos3 > GList.pos_param) {
                            GList.pos_param = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    GList.pos_param = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].height + this._lineGap;
                    if (pos3 > GList.pos_param) {
                        GList.pos_param = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                GList.pos_param = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        };
        GList.prototype.getIndexOnPos2 = function (forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                GList.pos_param = 0;
                return 0;
            }
            var i;
            var pos2;
            var pos3;
            if (this.numChildren > 0 && !forceUpdate) {
                pos2 = this.getChildAt(0).x;
                if (pos2 > GList.pos_param) {
                    for (i = this._firstIndex - this._curLineItemCount; i >= 0; i -= this._curLineItemCount) {
                        pos2 -= (this._virtualItems[i].width + this._columnGap);
                        if (pos2 <= GList.pos_param) {
                            GList.pos_param = pos2;
                            return i;
                        }
                    }
                    GList.pos_param = 0;
                    return 0;
                }
                else {
                    for (i = this._firstIndex; i < this._realNumItems; i += this._curLineItemCount) {
                        pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                        if (pos3 > GList.pos_param) {
                            GList.pos_param = pos2;
                            return i;
                        }
                        pos2 = pos3;
                    }
                    GList.pos_param = pos2;
                    return this._realNumItems - this._curLineItemCount;
                }
            }
            else {
                pos2 = 0;
                for (i = 0; i < this._realNumItems; i += this._curLineItemCount) {
                    pos3 = pos2 + this._virtualItems[i].width + this._columnGap;
                    if (pos3 > GList.pos_param) {
                        GList.pos_param = pos2;
                        return i;
                    }
                    pos2 = pos3;
                }
                GList.pos_param = pos2;
                return this._realNumItems - this._curLineItemCount;
            }
        };
        GList.prototype.getIndexOnPos3 = function (forceUpdate) {
            if (this._realNumItems < this._curLineItemCount) {
                GList.pos_param = 0;
                return 0;
            }
            var viewWidth = this.viewWidth;
            var page = Math.floor(GList.pos_param / viewWidth);
            var startIndex = page * (this._curLineItemCount * this._curLineItemCount2);
            var pos2 = page * viewWidth;
            var i;
            var pos3;
            for (i = 0; i < this._curLineItemCount; i++) {
                pos3 = pos2 + this._virtualItems[startIndex + i].width + this._columnGap;
                if (pos3 > GList.pos_param) {
                    GList.pos_param = pos2;
                    return startIndex + i;
                }
                pos2 = pos3;
            }
            GList.pos_param = pos2;
            return startIndex + this._curLineItemCount - 1;
        };
        GList.prototype.handleScroll = function (forceUpdate) {
            if (this._eventLocked)
                return;
            if (this._layout == fgui.ListLayoutType.SingleColumn || this._layout == fgui.ListLayoutType.FlowHorizontal) {
                var enterCounter = 0;
                while (this.handleScroll1(forceUpdate)) {
                    enterCounter++;
                    forceUpdate = false;
                    if (enterCounter > 20) {
                        console.warn("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
                        break;
                    }
                }
                this.handleArchOrder1();
            }
            else if (this._layout == fgui.ListLayoutType.SingleRow || this._layout == fgui.ListLayoutType.FlowVertical) {
                enterCounter = 0;
                while (this.handleScroll2(forceUpdate)) {
                    enterCounter++;
                    forceUpdate = false;
                    if (enterCounter > 20) {
                        console.warn("FairyGUI: list will never be filled as the item renderer function always returns a different size.");
                        break;
                    }
                }
                this.handleArchOrder2();
            }
            else {
                this.handleScroll3(forceUpdate);
            }
            this._boundsChanged = false;
        };
        GList.prototype.handleScroll1 = function (forceUpdate) {
            var pos = this._scrollPane.scrollingPosY;
            var max = pos + this._scrollPane.viewHeight;
            var end = max == this._scrollPane.contentHeight; //这个标志表示当前需要滚动到最末，无论内容变化大小
            //寻找当前位置的第一条项目
            GList.pos_param = pos;
            var newFirstIndex = this.getIndexOnPos1(forceUpdate);
            pos = GList.pos_param;
            if (newFirstIndex == this._firstIndex && !forceUpdate) {
                return false;
            }
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            var curIndex = newFirstIndex;
            var forward = oldFirstIndex > newFirstIndex;
            var childCount = this.numChildren;
            var lastIndex = oldFirstIndex + childCount - 1;
            var reuseIndex = forward ? lastIndex : oldFirstIndex;
            var curX = 0, curY = pos;
            var needRender;
            var deltaSize = 0;
            var firstItemDeltaSize = 0;
            var url = this.defaultItem;
            var ii, ii2;
            var i, j;
            var partSize = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            this.itemInfoVer++;
            while (curIndex < this._realNumItems && (end || curY < max)) {
                ii = this._virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider != null) {
                        url = this.itemProvider.call(this.callbackThisObj, curIndex % this._numItems);
                        if (url == null)
                            url = this._defaultItem;
                        url = fgui.UIPackage.normalizeURL(url);
                    }
                    if (ii.obj != null && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof fgui.GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    //搜索最适合的重用item，保证每次刷新需要新建或者重新render的item最少
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj != null) {
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    }
                    else {
                        ii.obj = this._pool.getObject(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this._autoResizeItem && (this._layout == fgui.ListLayoutType.SingleColumn || this._columnCount > 0))
                        ii.obj.setSize(partSize, ii.obj.height, true);
                    this.itemRenderer.call(this.callbackThisObj, curIndex % this._numItems, ii.obj);
                    if (curIndex % this._curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.height) - ii.height;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                            //当内容向下滚动时，如果新出现的项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                            firstItemDeltaSize = Math.ceil(ii.obj.height) - ii.height;
                        }
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.updateFlag = this.itemInfoVer;
                ii.obj.setXY(curX, curY);
                if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                    max += ii.height;
                curX += ii.width + this._columnGap;
                if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                    curX = 0;
                    curY += ii.height + this._lineGap;
                }
                curIndex++;
            }
            for (i = 0; i < childCount; i++) {
                ii = this._virtualItems[oldFirstIndex + i];
                if (ii.updateFlag != this.itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            childCount = this._children.length;
            for (i = 0; i < childCount; i++) {
                var obj = this._virtualItems[newFirstIndex + i].obj;
                if (this._children[i] != obj)
                    this.setChildIndex(obj, i);
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this._scrollPane.changeContentSizeOnScrolling(0, deltaSize, 0, firstItemDeltaSize);
            if (curIndex > 0 && this.numChildren > 0 && this._container.y <= 0 && this.getChildAt(0).y > -this._container.y) //最后一页没填满！
                return true;
            else
                return false;
        };
        GList.prototype.handleScroll2 = function (forceUpdate) {
            var pos = this._scrollPane.scrollingPosX;
            var max = pos + this._scrollPane.viewWidth;
            var end = pos == this._scrollPane.contentWidth; //这个标志表示当前需要滚动到最末，无论内容变化大小
            //寻找当前位置的第一条项目
            GList.pos_param = pos;
            var newFirstIndex = this.getIndexOnPos2(forceUpdate);
            pos = GList.pos_param;
            if (newFirstIndex == this._firstIndex && !forceUpdate) {
                return false;
            }
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            var curIndex = newFirstIndex;
            var forward = oldFirstIndex > newFirstIndex;
            var childCount = this.numChildren;
            var lastIndex = oldFirstIndex + childCount - 1;
            var reuseIndex = forward ? lastIndex : oldFirstIndex;
            var curX = pos, curY = 0;
            var needRender;
            var deltaSize = 0;
            var firstItemDeltaSize = 0;
            var url = this.defaultItem;
            var ii, ii2;
            var i, j;
            var partSize = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            this.itemInfoVer++;
            while (curIndex < this._realNumItems && (end || curX < max)) {
                ii = this._virtualItems[curIndex];
                if (ii.obj == null || forceUpdate) {
                    if (this.itemProvider != null) {
                        url = this.itemProvider.call(this.callbackThisObj, curIndex % this._numItems);
                        if (url == null)
                            url = this._defaultItem;
                        url = fgui.UIPackage.normalizeURL(url);
                    }
                    if (ii.obj != null && ii.obj.resourceURL != url) {
                        if (ii.obj instanceof fgui.GButton)
                            ii.selected = ii.obj.selected;
                        this.removeChildToPool(ii.obj);
                        ii.obj = null;
                    }
                }
                if (ii.obj == null) {
                    if (forward) {
                        for (j = reuseIndex; j >= oldFirstIndex; j--) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex--;
                                break;
                            }
                        }
                    }
                    else {
                        for (j = reuseIndex; j <= lastIndex; j++) {
                            ii2 = this._virtualItems[j];
                            if (ii2.obj != null && ii2.updateFlag != this.itemInfoVer && ii2.obj.resourceURL == url) {
                                if (ii2.obj instanceof fgui.GButton)
                                    ii2.selected = ii2.obj.selected;
                                ii.obj = ii2.obj;
                                ii2.obj = null;
                                if (j == reuseIndex)
                                    reuseIndex++;
                                break;
                            }
                        }
                    }
                    if (ii.obj != null) {
                        this.setChildIndex(ii.obj, forward ? curIndex - newFirstIndex : this.numChildren);
                    }
                    else {
                        ii.obj = this._pool.getObject(url);
                        if (forward)
                            this.addChildAt(ii.obj, curIndex - newFirstIndex);
                        else
                            this.addChild(ii.obj);
                    }
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else
                    needRender = forceUpdate;
                if (needRender) {
                    if (this._autoResizeItem && (this._layout == fgui.ListLayoutType.SingleRow || this._lineCount > 0))
                        ii.obj.setSize(ii.obj.width, partSize, true);
                    this.itemRenderer.call(this.callbackThisObj, curIndex % this._numItems, ii.obj);
                    if (curIndex % this._curLineItemCount == 0) {
                        deltaSize += Math.ceil(ii.obj.width) - ii.width;
                        if (curIndex == newFirstIndex && oldFirstIndex > newFirstIndex) {
                            //当内容向下滚动时，如果新出现的一个项目大小发生变化，需要做一个位置补偿，才不会导致滚动跳动
                            firstItemDeltaSize = Math.ceil(ii.obj.width) - ii.width;
                        }
                    }
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
                ii.updateFlag = this.itemInfoVer;
                ii.obj.setXY(curX, curY);
                if (curIndex == newFirstIndex) //要显示多一条才不会穿帮
                    max += ii.width;
                curY += ii.height + this._lineGap;
                if (curIndex % this._curLineItemCount == this._curLineItemCount - 1) {
                    curY = 0;
                    curX += ii.width + this._columnGap;
                }
                curIndex++;
            }
            for (i = 0; i < childCount; i++) {
                ii = this._virtualItems[oldFirstIndex + i];
                if (ii.updateFlag != this.itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
            childCount = this._children.length;
            for (i = 0; i < childCount; i++) {
                var obj = this._virtualItems[newFirstIndex + i].obj;
                if (this._children[i] != obj)
                    this.setChildIndex(obj, i);
            }
            if (deltaSize != 0 || firstItemDeltaSize != 0)
                this._scrollPane.changeContentSizeOnScrolling(deltaSize, 0, firstItemDeltaSize, 0);
            if (curIndex > 0 && this.numChildren > 0 && this._container.x <= 0 && this.getChildAt(0).x > -this._container.x) //最后一页没填满！
                return true;
            else
                return false;
        };
        GList.prototype.handleScroll3 = function (forceUpdate) {
            var pos = this._scrollPane.scrollingPosX;
            //寻找当前位置的第一条项目
            GList.pos_param = pos;
            var newFirstIndex = this.getIndexOnPos3(forceUpdate);
            pos = GList.pos_param;
            if (newFirstIndex == this._firstIndex && !forceUpdate)
                return;
            var oldFirstIndex = this._firstIndex;
            this._firstIndex = newFirstIndex;
            //分页模式不支持不等高，所以渲染满一页就好了
            var reuseIndex = oldFirstIndex;
            var virtualItemCount = this._virtualItems.length;
            var pageSize = this._curLineItemCount * this._curLineItemCount2;
            var startCol = newFirstIndex % this._curLineItemCount;
            var viewWidth = this.viewWidth;
            var page = Math.floor(newFirstIndex / pageSize);
            var startIndex = page * pageSize;
            var lastIndex = startIndex + pageSize * 2; //测试两页
            var needRender;
            var i;
            var ii, ii2;
            var col;
            var url = this._defaultItem;
            var partWidth = (this._scrollPane.viewWidth - this._columnGap * (this._curLineItemCount - 1)) / this._curLineItemCount;
            var partHeight = (this._scrollPane.viewHeight - this._lineGap * (this._curLineItemCount2 - 1)) / this._curLineItemCount2;
            this.itemInfoVer++;
            //先标记这次要用到的项目
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                col = i % this._curLineItemCount;
                if (i - startIndex < pageSize) {
                    if (col < startCol)
                        continue;
                }
                else {
                    if (col > startCol)
                        continue;
                }
                ii = this._virtualItems[i];
                ii.updateFlag = this.itemInfoVer;
            }
            var lastObj = null;
            var insertIndex = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                ii = this._virtualItems[i];
                if (ii.updateFlag != this.itemInfoVer)
                    continue;
                if (ii.obj == null) {
                    //寻找看有没有可重用的
                    while (reuseIndex < virtualItemCount) {
                        ii2 = this._virtualItems[reuseIndex];
                        if (ii2.obj != null && ii2.updateFlag != this.itemInfoVer) {
                            if (ii2.obj instanceof fgui.GButton)
                                ii2.selected = ii2.obj.selected;
                            ii.obj = ii2.obj;
                            ii2.obj = null;
                            break;
                        }
                        reuseIndex++;
                    }
                    if (insertIndex == -1)
                        insertIndex = this.getChildIndex(lastObj) + 1;
                    if (ii.obj == null) {
                        if (this.itemProvider != null) {
                            url = this.itemProvider.call(this.callbackThisObj, i % this._numItems);
                            if (url == null)
                                url = this._defaultItem;
                            url = fgui.UIPackage.normalizeURL(url);
                        }
                        ii.obj = this._pool.getObject(url);
                        this.addChildAt(ii.obj, insertIndex);
                    }
                    else {
                        insertIndex = this.setChildIndexBefore(ii.obj, insertIndex);
                    }
                    insertIndex++;
                    if (ii.obj instanceof fgui.GButton)
                        ii.obj.selected = ii.selected;
                    needRender = true;
                }
                else {
                    needRender = forceUpdate;
                    insertIndex = -1;
                    lastObj = ii.obj;
                }
                if (needRender) {
                    if (this._autoResizeItem) {
                        if (this._curLineItemCount == this._columnCount && this._curLineItemCount2 == this._lineCount)
                            ii.obj.setSize(partWidth, partHeight, true);
                        else if (this._curLineItemCount == this._columnCount)
                            ii.obj.setSize(partWidth, ii.obj.height, true);
                        else if (this._curLineItemCount2 == this._lineCount)
                            ii.obj.setSize(ii.obj.width, partHeight, true);
                    }
                    this.itemRenderer.call(this.callbackThisObj, i % this._numItems, ii.obj);
                    ii.width = Math.ceil(ii.obj.width);
                    ii.height = Math.ceil(ii.obj.height);
                }
            }
            //排列item
            var borderX = (startIndex / pageSize) * viewWidth;
            var xx = borderX;
            var yy = 0;
            var lineHeight = 0;
            for (i = startIndex; i < lastIndex; i++) {
                if (i >= this._realNumItems)
                    continue;
                ii = this._virtualItems[i];
                if (ii.updateFlag == this.itemInfoVer)
                    ii.obj.setXY(xx, yy);
                if (ii.height > lineHeight)
                    lineHeight = ii.height;
                if (i % this._curLineItemCount == this._curLineItemCount - 1) {
                    xx = borderX;
                    yy += lineHeight + this._lineGap;
                    lineHeight = 0;
                    if (i == startIndex + pageSize - 1) {
                        borderX += viewWidth;
                        xx = borderX;
                        yy = 0;
                    }
                }
                else
                    xx += ii.width + this._columnGap;
            }
            //释放未使用的
            for (i = reuseIndex; i < virtualItemCount; i++) {
                ii = this._virtualItems[i];
                if (ii.updateFlag != this.itemInfoVer && ii.obj != null) {
                    if (ii.obj instanceof fgui.GButton)
                        ii.selected = ii.obj.selected;
                    this.removeChildToPool(ii.obj);
                    ii.obj = null;
                }
            }
        };
        GList.prototype.handleArchOrder1 = function () {
            if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) {
                var mid = this._scrollPane.posY + this.viewHeight / 2;
                var minDist = Number.POSITIVE_INFINITY;
                var dist = 0;
                var apexIndex = 0;
                var cnt = this.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.y - obj.height / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        };
        GList.prototype.handleArchOrder2 = function () {
            if (this._childrenRenderOrder == fgui.ChildrenRenderOrder.Arch) {
                var mid = this._scrollPane.posX + this.viewWidth / 2;
                var minDist = Number.POSITIVE_INFINITY;
                var dist = 0;
                var apexIndex = 0;
                var cnt = this.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var obj = this.getChildAt(i);
                    if (!this.foldInvisibleItems || obj.visible) {
                        dist = Math.abs(mid - obj.x - obj.width / 2);
                        if (dist < minDist) {
                            minDist = dist;
                            apexIndex = i;
                        }
                    }
                }
                this.apexIndex = apexIndex;
            }
        };
        GList.prototype.handleAlign = function (contentWidth, contentHeight) {
            var newOffsetX = 0;
            var newOffsetY = 0;
            if (contentHeight < this.viewHeight) {
                if (this._verticalAlign == fgui.VertAlignType.Middle)
                    newOffsetY = Math.floor((this.viewHeight - contentHeight) / 2);
                else if (this._verticalAlign == fgui.VertAlignType.Bottom)
                    newOffsetY = this.viewHeight - contentHeight;
            }
            if (contentWidth < this.viewWidth) {
                if (this._align == fgui.AlignType.Center)
                    newOffsetX = Math.floor((this.viewWidth - contentWidth) / 2);
                else if (this._align == fgui.AlignType.Right)
                    newOffsetX = this.viewWidth - contentWidth;
            }
            if (newOffsetX != this._alignOffset.x || newOffsetY != this._alignOffset.y) {
                this._alignOffset.set(newOffsetX, newOffsetY);
                if (this._scrollPane != null)
                    this._scrollPane.adjustMaskContainer();
                else {
                    this._container.x = this._margin.left + this._alignOffset.x;
                    this._container.y = this._margin.top + this._alignOffset.y;
                }
            }
        };
        GList.prototype.updateBounds = function () {
            if (this._virtual)
                return;
            var i;
            var child;
            var curX = 0;
            var curY = 0;
            var maxWidth = 0;
            var maxHeight = 0;
            var cw = 0, ch = 0;
            var j = 0;
            var page = 0;
            var k = 0;
            var cnt = this._children.length;
            var viewWidth = this.viewWidth;
            var viewHeight = this.viewHeight;
            var lineSize = 0;
            var lineStart = 0;
            var ratio = 0;
            if (this._layout == fgui.ListLayoutType.SingleColumn) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curY != 0)
                        curY += this._lineGap;
                    child.y = curY;
                    if (this._autoResizeItem)
                        child.setSize(viewWidth, child.height, true);
                    curY += Math.ceil(child.height);
                    if (child.width > maxWidth)
                        maxWidth = child.width;
                }
                ch = curY;
                if (ch <= viewHeight && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.vtScrollBar) {
                    viewWidth += this._scrollPane.vtScrollBar.width;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(viewWidth, child.height, true);
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                    }
                }
                cw = Math.ceil(maxWidth);
            }
            else if (this._layout == fgui.ListLayoutType.SingleRow) {
                for (i = 0; i < cnt; i++) {
                    child = this.getChildAt(i);
                    if (this.foldInvisibleItems && !child.visible)
                        continue;
                    if (curX != 0)
                        curX += this._columnGap;
                    child.x = curX;
                    if (this._autoResizeItem)
                        child.setSize(child.width, viewHeight, true);
                    curX += Math.ceil(child.width);
                    if (child.height > maxHeight)
                        maxHeight = child.height;
                }
                cw = curX;
                if (cw <= viewWidth && this._autoResizeItem && this._scrollPane && this._scrollPane._displayInDemand && this._scrollPane.hzScrollBar) {
                    viewHeight += this._scrollPane.hzScrollBar.height;
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        child.setSize(child.width, viewHeight, true);
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                    }
                }
                ch = Math.ceil(maxHeight);
            }
            else if (this._layout == fgui.ListLayoutType.FlowHorizontal) {
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = viewWidth;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                    ch = curY + Math.ceil(maxHeight);
                    cw = Math.ceil(maxWidth);
                }
            }
            else if (this._layout == fgui.ListLayoutType.FlowVertical) {
                if (this._autoResizeItem && this._lineCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        lineSize += child.sourceHeight;
                        j++;
                        if (j == this._lineCount || i == cnt - 1) {
                            ratio = (viewHeight - lineSize - (j - 1) * this._lineGap) / lineSize;
                            curY = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(curX, curY);
                                if (j < i) {
                                    child.setSize(child.width, child.sourceHeight + Math.round(child.sourceHeight * ratio), true);
                                    curY += Math.ceil(child.height) + this._lineGap;
                                }
                                else {
                                    child.setSize(child.width, viewHeight - curY, true);
                                }
                                if (child.width > maxWidth)
                                    maxWidth = child.width;
                            }
                            //new line
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                        }
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = viewHeight;
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curY != 0)
                            curY += this._lineGap;
                        if (this._lineCount != 0 && j >= this._lineCount
                            || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) {
                            curY = 0;
                            curX += Math.ceil(maxWidth) + this._columnGap;
                            maxWidth = 0;
                            j = 0;
                        }
                        child.setXY(curX, curY);
                        curY += Math.ceil(child.height);
                        if (curY > maxHeight)
                            maxHeight = curY;
                        if (child.width > maxWidth)
                            maxWidth = child.width;
                        j++;
                    }
                    cw = curX + Math.ceil(maxWidth);
                    ch = Math.ceil(maxHeight);
                }
            }
            else //pagination
             {
                var eachHeight;
                if (this._autoResizeItem && this._lineCount > 0)
                    eachHeight = Math.floor((viewHeight - (this._lineCount - 1) * this._lineGap) / this._lineCount);
                if (this._autoResizeItem && this._columnCount > 0) {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (j == 0 && (this._lineCount != 0 && k >= this._lineCount
                            || this._lineCount == 0 && curY + (this._lineCount > 0 ? eachHeight : child.height) > viewHeight)) {
                            //new page
                            page++;
                            curY = 0;
                            k = 0;
                        }
                        lineSize += child.sourceWidth;
                        j++;
                        if (j == this._columnCount || i == cnt - 1) {
                            ratio = (viewWidth - lineSize - (j - 1) * this._columnGap) / lineSize;
                            curX = 0;
                            for (j = lineStart; j <= i; j++) {
                                child = this.getChildAt(j);
                                if (this.foldInvisibleItems && !child.visible)
                                    continue;
                                child.setXY(page * viewWidth + curX, curY);
                                if (j < i) {
                                    child.setSize(child.sourceWidth + Math.round(child.sourceWidth * ratio), this._lineCount > 0 ? eachHeight : child.height, true);
                                    curX += Math.ceil(child.width) + this._columnGap;
                                }
                                else {
                                    child.setSize(viewWidth - curX, this._lineCount > 0 ? eachHeight : child.height, true);
                                }
                                if (child.height > maxHeight)
                                    maxHeight = child.height;
                            }
                            //new line
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            lineStart = i + 1;
                            lineSize = 0;
                            k++;
                        }
                    }
                }
                else {
                    for (i = 0; i < cnt; i++) {
                        child = this.getChildAt(i);
                        if (this.foldInvisibleItems && !child.visible)
                            continue;
                        if (curX != 0)
                            curX += this._columnGap;
                        if (this._autoResizeItem && this._lineCount > 0)
                            child.setSize(child.width, eachHeight, true);
                        if (this._columnCount != 0 && j >= this._columnCount
                            || this._columnCount == 0 && curX + child.width > viewWidth && maxHeight != 0) {
                            //new line
                            curX = 0;
                            curY += Math.ceil(maxHeight) + this._lineGap;
                            maxHeight = 0;
                            j = 0;
                            k++;
                            if (this._lineCount != 0 && k >= this._lineCount
                                || this._lineCount == 0 && curY + child.height > viewHeight && maxWidth != 0) //new page
                             {
                                page++;
                                curY = 0;
                                k = 0;
                            }
                        }
                        child.setXY(page * viewWidth + curX, curY);
                        curX += Math.ceil(child.width);
                        if (curX > maxWidth)
                            maxWidth = curX;
                        if (child.height > maxHeight)
                            maxHeight = child.height;
                        j++;
                    }
                }
                ch = page > 0 ? viewHeight : curY + Math.ceil(maxHeight);
                cw = (page + 1) * viewWidth;
            }
            this.handleAlign(cw, ch);
            this.setBounds(0, 0, cw, ch);
        };
        GList.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._layout = buffer.readByte();
            this._selectionMode = buffer.readByte();
            this._align = fgui.AlignMap[buffer.readByte()] || fgui.AlignType.Center;
            this._verticalAlign = buffer.readByte();
            this._lineGap = buffer.readShort();
            this._columnGap = buffer.readShort();
            this._lineCount = buffer.readShort();
            this._columnCount = buffer.readShort();
            this._autoResizeItem = buffer.readBool();
            this._childrenRenderOrder = buffer.readByte();
            this._apexIndex = buffer.readShort();
            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }
            var overflow = buffer.readByte();
            if (overflow == fgui.OverflowType.Scroll) {
                var savedPos = buffer.position;
                buffer.seek(beginPos, 7);
                this.setupScroll(buffer);
                buffer.position = savedPos;
            }
            else
                this.setupOverflow(overflow);
            if (buffer.readBool())
                buffer.skip(8);
            if (buffer.version >= 2) {
                this.scrollItemToViewOnClick = buffer.readBool();
                this.foldInvisibleItems = buffer.readBool();
            }
            buffer.seek(beginPos, 8);
            this._defaultItem = buffer.readS();
            this.readItems(buffer);
        };
        GList.prototype.readItems = function (buffer) {
            var cnt;
            var i;
            var nextPos;
            var str;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                str = buffer.readS();
                if (str == null) {
                    str = this.defaultItem;
                    if (!str) {
                        buffer.position = nextPos;
                        continue;
                    }
                }
                var obj = this.getFromPool(str);
                if (obj != null) {
                    this.addChild(obj);
                    this.setupItem(buffer, obj);
                }
                buffer.position = nextPos;
            }
        };
        GList.prototype.setupItem = function (buffer, obj) {
            var str;
            str = buffer.readS();
            if (str != null)
                obj.text = str;
            str = buffer.readS();
            if (str != null && (obj instanceof fgui.GButton))
                obj.selectedTitle = str;
            str = buffer.readS();
            if (str != null)
                obj.icon = str;
            str = buffer.readS();
            if (str != null && (obj instanceof fgui.GButton))
                obj.selectedIcon = str;
            str = buffer.readS();
            if (str != null)
                obj.name = str;
            var cnt;
            var i;
            if (obj instanceof fgui.GComponent) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    var cc = obj.getController(buffer.readS());
                    str = buffer.readS();
                    if (cc != null)
                        cc.selectedPageId = str;
                }
                if (buffer.version >= 2) {
                    cnt = buffer.readShort();
                    for (i = 0; i < cnt; i++) {
                        var target = buffer.readS();
                        var propertyId = buffer.readShort();
                        var value = buffer.readS();
                        var obj2 = obj.getChildByPath(target);
                        if (obj2)
                            obj2.setProp(propertyId, value);
                    }
                }
            }
        };
        GList.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 6);
            var i = buffer.readShort();
            if (i != -1)
                this._selectionController = this.parent.getControllerAt(i);
        };
        return GList;
    }(fgui.GComponent));
    fgui.GList = GList;
    var ItemInfo = /** @class */ (function () {
        function ItemInfo() {
            this.width = 0;
            this.height = 0;
            this.updateFlag = 0;
            this.selected = false;
        }
        return ItemInfo;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var GObjectPool = /** @class */ (function () {
        function GObjectPool() {
            this._count = 0;
            this._pool = {};
        }
        GObjectPool.prototype.clear = function () {
            for (var i1 in this._pool) {
                var arr = this._pool[i1];
                var cnt = arr.length;
                for (var i = 0; i < cnt; i++)
                    arr[i].dispose();
            }
            this._pool = {};
            this._count = 0;
        };
        Object.defineProperty(GObjectPool.prototype, "count", {
            get: function () {
                return this._count;
            },
            enumerable: true,
            configurable: true
        });
        GObjectPool.prototype.getObject = function (url) {
            url = fgui.UIPackage.normalizeURL(url);
            if (url == null)
                return null;
            var arr = this._pool[url];
            if (arr != null && arr.length) {
                this._count--;
                return arr.shift();
            }
            var child = fgui.UIPackage.createObjectFromURL(url);
            return child;
        };
        GObjectPool.prototype.returnObject = function (obj) {
            var url = obj.resourceURL;
            if (!url)
                return;
            var arr = this._pool[url];
            if (arr == null) {
                arr = new Array();
                this._pool[url] = arr;
            }
            this._count++;
            arr.push(obj);
        };
        return GObjectPool;
    }());
    fgui.GObjectPool = GObjectPool;
})(fgui || (fgui = {}));
/// <reference path="./GObject.ts" />
/// <reference path="./GObjectPool.ts" />

/// <reference path="./GObject.ts" />
/// <reference path="./GObjectPool.ts" />
(function (fgui) {
    var GLoader = /** @class */ (function (_super) {
        __extends(GLoader, _super);
        function GLoader() {
            var _this = _super.call(this) || this;
            _this._frame = 0;
            _this._color = 0;
            _this._contentSourceWidth = 0;
            _this._contentSourceHeight = 0;
            _this._contentWidth = 0;
            _this._contentHeight = 0;
            _this._loadingTexture = null;
            _this._playing = true;
            _this._url = "";
            _this._fill = fgui.LoaderFillType.None;
            _this._align = fgui.AlignType.Left;
            _this._verticalAlign = fgui.VertAlignType.Top;
            _this._showErrorSign = true;
            _this._color = 0xFFFFFF;
            return _this;
        }
        GLoader.prototype.createDisplayObject = function () {
            this._container = new fgui.UIContainer(this);
            this._container.hitArea = new PIXI.Rectangle();
            this.setDisplayObject(this._container);
            this._container.interactiveChildren = false;
            this._content = new fgui.MovieClip(this);
            this._container.addChild(this._content);
        };
        GLoader.prototype.dispose = function () {
            this.clearContent();
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(GLoader.prototype, "url", {
            get: function () {
                return this._url;
            },
            set: function (value) {
                if (this._url == value)
                    return;
                this._url = value;
                this.loadContent();
                this.updateGear(7 /* Icon */);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "icon", {
            get: function () {
                return this._url;
            },
            set: function (value) {
                this.url = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "align", {
            get: function () {
                return this._align;
            },
            set: function (value) {
                if (this._align != value) {
                    this._align = value;
                    this.updateLayout();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "verticalAlign", {
            get: function () {
                return this._verticalAlign;
            },
            set: function (value) {
                if (this._verticalAlign != value) {
                    this._verticalAlign = value;
                    this.updateLayout();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "fill", {
            get: function () {
                return this._fill;
            },
            set: function (value) {
                if (this._fill != value) {
                    this._fill = value;
                    this.updateLayout();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "autoSize", {
            get: function () {
                return this._autoSize;
            },
            set: function (value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this.updateLayout();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "playing", {
            get: function () {
                return this._playing;
            },
            set: function (value) {
                if (this._playing != value) {
                    this._playing = value;
                    if (this._content instanceof fgui.MovieClip)
                        this._content.playing = value;
                    this.updateGear(5 /* Animation */);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "frame", {
            get: function () {
                return this._frame;
            },
            set: function (value) {
                if (this._frame != value) {
                    this._frame = value;
                    if (this._content instanceof fgui.MovieClip) {
                        this._content.currentFrame = value;
                    }
                    this.updateGear(5 /* Animation */);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "color", {
            get: function () {
                return this._color;
            },
            set: function (value) {
                if (this._color != value) {
                    this._color = value;
                    this.updateGear(4 /* Color */);
                    this.applyColor();
                }
            },
            enumerable: true,
            configurable: true
        });
        GLoader.prototype.applyColor = function () {
            if (this._content) {
                this._content.tint = this._color;
            }
        };
        Object.defineProperty(GLoader.prototype, "showErrorSign", {
            get: function () {
                return this._showErrorSign;
            },
            set: function (value) {
                this._showErrorSign = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "content", {
            get: function () {
                return this._content;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GLoader.prototype, "texture", {
            get: function () {
                if (this._content instanceof fgui.UIImage)
                    return this._content.texture;
                else
                    return null;
            },
            set: function (value) {
                this.url = null;
                this.switchToMovieMode(false);
                if (this._content instanceof fgui.UIImage)
                    this._content.texture = value;
                if (value) {
                    this._contentSourceWidth = value.orig.width;
                    this._contentSourceHeight = value.orig.height;
                }
                else
                    this._contentSourceWidth = this._contentHeight = 0;
                this.updateLayout();
            },
            enumerable: true,
            configurable: true
        });
        GLoader.prototype.loadContent = function () {
            this.clearContent();
            if (!this._url)
                return;
            if (fgui.utils.StringUtil.startsWith(this._url, "ui://"))
                this.loadFromPackage(this._url);
            else
                this.loadExternal();
        };
        GLoader.prototype.loadFromPackage = function (itemURL) {
            this._contentItem = fgui.UIPackage.getItemByURL(itemURL);
            if (this._contentItem) {
                this._contentItem.load();
                if (this._contentItem.type == fgui.PackageItemType.Image) {
                    if (this._contentItem.texture == null) {
                        this.setErrorState();
                    }
                    else {
                        this.switchToMovieMode(false);
                        this._content.initDisp(this._contentItem);
                        this._contentSourceWidth = this._contentItem.width;
                        this._contentSourceHeight = this._contentItem.height;
                        this.updateLayout();
                    }
                }
                else if (this._contentItem.type == fgui.PackageItemType.MovieClip) {
                    this.switchToMovieMode(true);
                    this._contentSourceWidth = this._contentItem.width;
                    this._contentSourceHeight = this._contentItem.height;
                    var mc = this._content;
                    mc.interval = this._contentItem.interval;
                    mc.swing = this._contentItem.swing;
                    mc.repeatDelay = this._contentItem.repeatDelay;
                    mc.frames = this._contentItem.frames;
                    // TODO
                    //mc.boundsRect = new PIXI.Rectangle(0, 0, this._contentSourceWidth, this._contentSourceHeight);
                    mc.width = this._contentSourceWidth;
                    mc.height = this._contentSourceHeight;
                    this.updateLayout();
                }
                else {
                    this.setErrorState();
                }
            }
            else {
                this.setErrorState();
            }
        };
        GLoader.prototype.switchToMovieMode = function (value) {
            this._container.removeChildren();
            if (value) {
                if (!(this._content instanceof fgui.MovieClip))
                    this._content = new fgui.MovieClip(this);
            }
            else {
                if (!(this._content instanceof fgui.UIImage))
                    this._content = new fgui.UIImage(null);
            }
            this._container.addChild(this._content);
        };
        /**overwrite this method if you need to load resources by your own way*/
        GLoader.prototype.loadExternal = function () {
            var _this = this;
            var texture = PIXI.Texture.from(this._url, true);
            this._loadingTexture = texture;
            //TODO: Texture does not have error event... monitor error event on baseTexture will casue cross-error-event problem.
            texture.once("update", function () {
                if (!texture.width || !texture.height)
                    _this._loadResCompleted(null);
                else
                    _this._loadResCompleted(texture);
            });
        };
        /**free the resource you loaded */
        GLoader.prototype.freeExternal = function (texture) {
            PIXI.Texture.removeFromCache(texture);
            texture.destroy(texture.baseTexture != null);
        };
        GLoader.prototype._loadResCompleted = function (res) {
            if (res)
                this.onExternalLoadSuccess(res);
            else {
                this.onExternalLoadFailed();
                this._loadingTexture.removeAllListeners();
                this.freeExternal(this._loadingTexture);
                this._loadingTexture = null;
            }
            this._loadingTexture = null;
        };
        /**content loaded */
        GLoader.prototype.onExternalLoadSuccess = function (texture) {
            this._container.removeChildren();
            if (!this._content || !(this._content instanceof fgui.UIImage)) {
                this._content = new fgui.UIImage(null);
                this._content.initDisp();
                this._container.addChild(this._content);
            }
            else {
                this._container.addChild(this._content);
            }
            //baseTexture loaded, so update frame info
            texture.frame = new PIXI.Rectangle(0, 0, texture.baseTexture.width, texture.baseTexture.height);
            this._content.texture = texture;
            this._contentSourceWidth = texture.width;
            this._contentSourceHeight = texture.height;
            this.updateLayout();
        };
        GLoader.prototype.onExternalLoadFailed = function () {
            this.setErrorState();
        };
        GLoader.prototype.setErrorState = function () {
            if (!this._showErrorSign)
                return;
            if (this._errorSign == null) {
                if (fgui.UIConfig.loaderErrorSign) {
                    this._errorSign = GLoader._errorSignPool.getObject(fgui.UIConfig.loaderErrorSign);
                }
            }
            if (this._errorSign) {
                this._errorSign.width = this.width;
                this._errorSign.height = this.height;
                this._container.addChild(this._errorSign.displayObject);
            }
        };
        GLoader.prototype.clearErrorState = function () {
            if (this._errorSign) {
                this._container.removeChild(this._errorSign.displayObject);
                GLoader._errorSignPool.returnObject(this._errorSign);
                this._errorSign = null;
            }
        };
        GLoader.prototype.updateLayout = function () {
            if (this._content == null) {
                if (this._autoSize) {
                    this._updatingLayout = true;
                    this.setSize(50, 30);
                    this._updatingLayout = false;
                }
                return;
            }
            this._content.position.set(0, 0);
            this._content.scale.set(1, 1);
            this._contentWidth = this._contentSourceWidth;
            this._contentHeight = this._contentSourceHeight;
            if (this._autoSize) {
                this._updatingLayout = true;
                if (this._contentWidth == 0)
                    this._contentWidth = 50;
                if (this._contentHeight == 0)
                    this._contentHeight = 30;
                this.setSize(this._contentWidth, this._contentHeight);
                this._updatingLayout = false;
            }
            else {
                var sx = 1, sy = 1;
                if (this._fill != fgui.LoaderFillType.None) {
                    sx = this.width / this._contentSourceWidth;
                    sy = this.height / this._contentSourceHeight;
                    if (sx != 1 || sy != 1) {
                        if (this._fill == fgui.LoaderFillType.ScaleMatchHeight)
                            sx = sy;
                        else if (this._fill == fgui.LoaderFillType.ScaleMatchWidth)
                            sy = sx;
                        else if (this._fill == fgui.LoaderFillType.Scale) {
                            if (sx > sy)
                                sx = sy;
                            else
                                sy = sx;
                        }
                        else if (this._fill == fgui.LoaderFillType.ScaleNoBorder) {
                            if (sx > sy)
                                sy = sx;
                            else
                                sx = sy;
                        }
                        this._contentWidth = this._contentSourceWidth * sx;
                        this._contentHeight = this._contentSourceHeight * sy;
                    }
                }
                if (this._content instanceof fgui.UIImage) {
                    this._content.width = this._contentWidth;
                    this._content.height = this._contentHeight;
                }
                else
                    this._content.scale.set(sx, sy);
                if (this._align == fgui.AlignType.Center)
                    this._content.x = Math.floor((this.width - this._contentWidth) / 2);
                else if (this._align == fgui.AlignType.Right)
                    this._content.x = this.width - this._contentWidth;
                if (this._verticalAlign == fgui.VertAlignType.Middle)
                    this._content.y = Math.floor((this.height - this._contentHeight) / 2);
                else if (this._verticalAlign == fgui.VertAlignType.Bottom)
                    this._content.y = this.height - this._contentHeight;
            }
        };
        GLoader.prototype.clearContent = function () {
            this.clearErrorState();
            if (this._content && this._content.parent)
                this._container.removeChild(this._content);
            if (this._loadingTexture) {
                this._loadingTexture.removeAllListeners();
                this.freeExternal(this._loadingTexture);
                this._loadingTexture = null;
            }
            if (this._contentItem == null && this._content instanceof fgui.UIImage)
                this.freeExternal(this._content.texture);
            this._content && this._content.destroy();
            this._content = null;
            this._contentItem = null;
        };
        GLoader.prototype.handleSizeChanged = function () {
            if (!this._updatingLayout) {
                this.updateLayout();
            }
            var rect = this._container.hitArea; //TODO: hitArea can be Rectangle | Circle | Ellipse | Polygon | RoundedRectangle
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        };
        GLoader.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._url = buffer.readS();
            var align = buffer.readByte();
            this._align = fgui.AlignMap[align] || fgui.AlignType.Center;
            this._verticalAlign = buffer.readByte();
            this._fill = buffer.readByte();
            this._shrinkOnly = buffer.readBool();
            this._autoSize = buffer.readBool();
            this._showErrorSign = buffer.readBool();
            this._content.playing = buffer.readBool();
            var frame = buffer.readInt();
            if (this._content instanceof fgui.GMovieClip) {
                this._content.frame = frame;
            }
            if (buffer.readBool()) {
                this.color = buffer.readColor();
            }
            // @TODO
            this._content.fillMethod = buffer.readByte();
            if (this._content.fillMethod != 0) {
                this._content.fillOrigin = buffer.readByte();
                this._content.fillClockwise = buffer.readBool();
                this._content.fillAmount = buffer.readFloat();
            }
            if (this._url) {
                this.loadContent();
            }
        };
        GLoader._errorSignPool = new fgui.GObjectPool();
        return GLoader;
    }(fgui.GObject));
    fgui.GLoader = GLoader;
})(fgui || (fgui = {}));
/// <reference path="./GObject.ts" />

/// <reference path="./GObject.ts" />
(function (fgui) {
    var GMovieClip = /** @class */ (function (_super) {
        __extends(GMovieClip, _super);
        function GMovieClip() {
            return _super.call(this) || this;
        }
        GMovieClip.prototype.mapPivotWidth = function (scale) {
            return scale * this.sourceWidth;
        };
        GMovieClip.prototype.mapPivotHeight = function (scale) {
            return scale * this.sourceHeight;
        };
        GMovieClip.prototype.handleSizeChanged = function () {
            if (this._displayObject != null && this.sourceWidth != 0 && this.sourceHeight != 0)
                this._displayObject.scale.set(this._width / this.sourceWidth * this._scaleX, this._height / this.sourceHeight * this._scaleY);
        };
        GMovieClip.prototype.handleScaleChanged = function () {
            if (this._displayObject != null) {
                this._displayObject.scale.set(this._width / this.sourceWidth * this._scaleX, this._height / this.sourceHeight * this._scaleY);
            }
        };
        Object.defineProperty(GMovieClip.prototype, "touchable", {
            get: function () {
                return false;
            },
            set: function (value) {
                this._touchable = false; //GMovieClip has no interaction
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GMovieClip.prototype, "color", {
            get: function () {
                return this._movieClip.tint;
            },
            set: function (value) {
                this._movieClip.tint = value;
            },
            enumerable: true,
            configurable: true
        });
        GMovieClip.prototype.createDisplayObject = function () {
            this._movieClip = new fgui.MovieClip(this);
            this.setDisplayObject(this._movieClip);
        };
        Object.defineProperty(GMovieClip.prototype, "playing", {
            get: function () {
                return this._movieClip.playing;
            },
            set: function (value) {
                if (this._movieClip.playing != value) {
                    this._movieClip.playing = value;
                    this.updateGear(5 /* Animation */);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GMovieClip.prototype, "frame", {
            get: function () {
                return this._movieClip.currentFrame;
            },
            set: function (value) {
                if (this._movieClip.currentFrame != value) {
                    this._movieClip.currentFrame = value;
                    this.updateGear(5 /* Animation */);
                }
            },
            enumerable: true,
            configurable: true
        });
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
        GMovieClip.prototype.setPlaySettings = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            this._movieClip.setPlaySettings.apply(this._movieClip, args);
        };
        GMovieClip.prototype.constructFromResource = function () {
            this.sourceWidth = this.packageItem.width;
            this.sourceHeight = this.packageItem.height;
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;
            this.setSize(this.sourceWidth, this.sourceHeight);
            this.packageItem.load();
            this._movieClip.interval = this.packageItem.interval;
            this._movieClip.swing = this.packageItem.swing;
            this._movieClip.repeatDelay = this.packageItem.repeatDelay;
            this._movieClip.frames = this.packageItem.frames;
            //this._movieClip.boundsRect = new PIXI.Rectangle(0, 0, this.sourceWidth, this.sourceHeight);
            this._movieClip.x = 0;
            this._movieClip.y = 0;
            this._movieClip.width = this.sourceWidth;
            this._movieClip.height = this.sourceHeight;
        };
        GMovieClip.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            if (buffer.readBool()) {
                this.color = buffer.readColor();
            }
            buffer.readByte(); //flip
            this._movieClip.currentFrame = buffer.readInt();
            this._movieClip.playing = buffer.readBool();
        };
        return GMovieClip;
    }(fgui.GObject));
    fgui.GMovieClip = GMovieClip;
})(fgui || (fgui = {}));

(function (fgui) {
    var GProgressBar = /** @class */ (function (_super) {
        __extends(GProgressBar, _super);
        function GProgressBar() {
            var _this = _super.call(this) || this;
            _this._min = 0;
            _this._max = 0;
            _this._value = 0;
            _this._barMaxWidth = 0;
            _this._barMaxHeight = 0;
            _this._barMaxWidthDelta = 0;
            _this._barMaxHeightDelta = 0;
            _this._barStartX = 0;
            _this._barStartY = 0;
            _this._titleType = fgui.ProgressTitleType.Percent;
            _this._value = 50;
            _this._max = 100;
            return _this;
        }
        Object.defineProperty(GProgressBar.prototype, "titleType", {
            get: function () {
                return this._titleType;
            },
            set: function (value) {
                if (this._titleType != value) {
                    this._titleType = value;
                    this.update(this._value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GProgressBar.prototype, "min", {
            get: function () {
                return this._min;
            },
            set: function (value) {
                if (this._min != value) {
                    this._min = value;
                    this.update(this._value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GProgressBar.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (value) {
                if (this._max != value) {
                    this._max = value;
                    this.update(this._value);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GProgressBar.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (this._value != value) {
                    fgui.GTween.kill(this, false, this.update);
                    this._value = value;
                    this.update(this._value);
                }
            },
            enumerable: true,
            configurable: true
        });
        GProgressBar.prototype.tweenValue = function (value, duration) {
            var oldValule;
            var tweener = fgui.GTween.getTween(this, this.update);
            if (tweener != null) {
                oldValule = tweener.value.x;
                tweener.kill();
            }
            else
                oldValule = this._value;
            this._value = value;
            return fgui.GTween.to(oldValule, this._value, duration).setTarget(this, this.update).setEase(fgui.EaseType.Linear);
        };
        GProgressBar.prototype.update = function (newValue) {
            var percent = fgui.ToolSet.clamp01((newValue - this._min) / (this._max - this._min));
            if (this._titleObject) {
                switch (this._titleType) {
                    case fgui.ProgressTitleType.Percent:
                        this._titleObject.text = Math.floor(percent * 100) + "%";
                        break;
                    case fgui.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = Math.floor(newValue) + "/" + Math.floor(this._max);
                        break;
                    case fgui.ProgressTitleType.Value:
                        this._titleObject.text = "" + Math.floor(newValue);
                        break;
                    case fgui.ProgressTitleType.Max:
                        this._titleObject.text = "" + Math.floor(this._max);
                        break;
                }
            }
            var fullWidth = this.width - this._barMaxWidthDelta;
            var fullHeight = this.height - this._barMaxHeightDelta;
            if (!this._reverse) {
                if (this._barObjectH) {
                    if ((this._barObjectH instanceof fgui.GImage) && this._barObjectH.fillMethod != fgui.FillMethod.None)
                        this._barObjectH.fillAmount = percent;
                    else
                        this._barObjectH.width = Math.floor(fullWidth * percent);
                }
                if (this._barObjectV) {
                    if ((this._barObjectV instanceof fgui.GImage) && this._barObjectV.fillMethod != fgui.FillMethod.None)
                        this._barObjectV.fillAmount = percent;
                    else
                        this._barObjectV.height = Math.floor(fullHeight * percent);
                }
            }
            else {
                if (this._barObjectH) {
                    if ((this._barObjectH instanceof fgui.GImage) && this._barObjectH.fillMethod != fgui.FillMethod.None)
                        this._barObjectH.fillAmount = 1 - percent;
                    else {
                        this._barObjectH.width = Math.floor(fullWidth * percent);
                        this._barObjectH.x = this._barStartX + (fullWidth - this._barObjectH.width);
                    }
                }
                if (this._barObjectV) {
                    if ((this._barObjectV instanceof fgui.GImage) && this._barObjectV.fillMethod != fgui.FillMethod.None)
                        this._barObjectV.fillAmount = 1 - percent;
                    else {
                        this._barObjectV.height = Math.floor(fullHeight * percent);
                        this._barObjectV.y = this._barStartY + (fullHeight - this._barObjectV.height);
                    }
                }
            }
            if (this._aniObject)
                this._aniObject.setProp(fgui.ObjectPropID.Frame, Math.floor(percent * 100));
        };
        GProgressBar.prototype.constructExtension = function (buffer) {
            buffer.seek(0, 6);
            this._titleType = buffer.readByte();
            this._reverse = buffer.readBool();
            this._titleObject = (this.getChild("title"));
            this._barObjectH = this.getChild("bar");
            this._barObjectV = this.getChild("bar_v");
            this._aniObject = this.getChild("ani");
            if (this._barObjectH) {
                this._barMaxWidth = this._barObjectH.width;
                this._barMaxWidthDelta = this.width - this._barMaxWidth;
                this._barStartX = this._barObjectH.x;
            }
            if (this._barObjectV) {
                this._barMaxHeight = this._barObjectV.height;
                this._barMaxHeightDelta = this.height - this._barMaxHeight;
                this._barStartY = this._barObjectV.y;
            }
        };
        GProgressBar.prototype.handleSizeChanged = function () {
            _super.prototype.handleSizeChanged.call(this);
            if (this._barObjectH)
                this._barMaxWidth = this.width - this._barMaxWidthDelta;
            if (this._barObjectV)
                this._barMaxHeight = this.height - this._barMaxHeightDelta;
            if (!this._underConstruct)
                this.update(this._value);
        };
        GProgressBar.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!buffer.seek(beginPos, 6)) {
                this.update(this._value);
                return;
            }
            if (buffer.readByte() != this.packageItem.objectType) {
                this.update(this._value);
                return;
            }
            this._value = buffer.readInt();
            this._max = buffer.readInt();
            if (buffer.version >= 2)
                this._min = buffer.readInt();
            this.update(this._value);
        };
        return GProgressBar;
    }(fgui.GComponent));
    fgui.GProgressBar = GProgressBar;
})(fgui || (fgui = {}));
/// <reference path="./IColorableTitle.ts" />

/// <reference path="./IColorableTitle.ts" />
(function (fgui) {
    var LineInfo = /** @class */ (function () {
        function LineInfo() {
            this.width = 0;
            this.height = 0;
            this.textHeight = 0;
            this.y = 0;
        }
        LineInfo.get = function () {
            if (LineInfo.pool.length) {
                var ret = LineInfo.pool.pop();
                ret.width = 0;
                ret.height = 0;
                ret.textHeight = 0;
                ret.text = null;
                ret.y = 0;
                return ret;
            }
            else
                return new LineInfo();
        };
        LineInfo.recycle = function (value) {
            LineInfo.pool.push(value);
        };
        LineInfo.recycleMany = function (value) {
            if (value && value.length) {
                value.forEach(function (v) {
                    LineInfo.pool.push(v);
                }, this);
            }
            value.length = 0;
        };
        LineInfo.pool = [];
        return LineInfo;
    }());
    fgui.LineInfo = LineInfo;
    /**
     * 普通文本
     */
    var GTextField = /** @class */ (function (_super) {
        __extends(GTextField, _super);
        function GTextField() {
            var _this = _super.call(this) || this;
            _this._verticalAlign = fgui.VertAlignType.Top;
            _this._offset = new PIXI.Point();
            _this._singleLine = true;
            _this._text = "";
            _this._textWidth = 0;
            _this._textHeight = 0;
            _this._style = new PIXI.TextStyle({
                fontSize: 12,
                fontFamily: fgui.UIConfig.defaultFont,
                align: fgui.AlignType.Left,
                leading: 3,
                fill: 0
            });
            _this._verticalAlign = fgui.VertAlignType.Top;
            _this._text = "";
            _this._autoSize = fgui.AutoSizeType.Both;
            _this._widthAutoSize = true;
            _this._heightAutoSize = true;
            _this._bitmapPool = [];
            _this.touchable = false; //base GTextField has no interaction
            return _this;
        }
        GTextField.prototype.createDisplayObject = function () {
            this._textField = new fgui.UITextField(this);
            this.setDisplayObject(this._textField);
        };
        GTextField.prototype.switchBitmapMode = function (val) {
            if (val && this.displayObject == this._textField) {
                if (this._btContainer == null)
                    this._btContainer = new fgui.UIContainer(this);
                this.switchDisplayObject(this._btContainer);
            }
            else if (!val && this.displayObject == this._btContainer)
                this.switchDisplayObject(this._textField);
        };
        GTextField.prototype.dispose = function () {
            fgui.GTimer.inst.remove(this.__render, this);
            this._bitmapFont = null;
            this._bitmapPool.length = 0;
            this._bitmapPool = null;
            this._style = null;
            _super.prototype.dispose.call(this);
        };
        Object.defineProperty(GTextField.prototype, "text", {
            get: function () {
                return this._text;
            },
            set: function (value) {
                if (value == null)
                    value = "";
                if (this._text == value)
                    return;
                this._text = value;
                this.updateGear(6 /* Text */);
                if (this.parent && this.parent._underConstruct)
                    this.renderNow();
                else
                    this.render();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "color", {
            get: function () {
                return this.getColor();
            },
            set: function (value) {
                this.setColor(value);
            },
            enumerable: true,
            configurable: true
        });
        GTextField.prototype.getColor = function () {
            return this._color;
        };
        GTextField.prototype.setColor = function (value) {
            if (this._color != value) {
                this._color = value;
                this.updateGear(4 /* Color */);
                this._style.fill = this._color;
                this.render();
            }
        };
        Object.defineProperty(GTextField.prototype, "titleColor", {
            get: function () {
                return this.getColor();
            },
            set: function (value) {
                this.setColor(value);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "lineHeight", {
            get: function () {
                if (this._style.lineHeight > 0)
                    return this._style.lineHeight;
                if (!this._fontProperties)
                    return (+this._style.fontSize) + this._style.strokeThickness; //rough value
                return this._fontProperties.fontSize + this._style.strokeThickness + this._style.leading;
            },
            set: function (lh) {
                this._style.lineHeight = lh;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "font", {
            get: function () {
                return this._font || fgui.UIConfig.defaultFont;
            },
            set: function (value) {
                if (this._font != value) {
                    this._font = value;
                    if (this._font && fgui.utils.StringUtil.startsWith(this._font, "ui://"))
                        this._bitmapFont = fgui.UIPackage.getBitmapFontByURL(this._font);
                    else
                        this._style.fontFamily = this._font || fgui.UIConfig.defaultFont;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "fontSize", {
            get: function () {
                return +this._style.fontSize;
            },
            set: function (value) {
                if (value <= 0)
                    return;
                if (this._style.fontSize != value) {
                    this._style.fontSize = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "align", {
            get: function () {
                return this._style.align;
            },
            set: function (value) {
                if (this._style.align != value) {
                    this._style.align = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "verticalAlign", {
            get: function () {
                return this._verticalAlign;
            },
            set: function (value) {
                if (this._verticalAlign != value) {
                    this._verticalAlign = value;
                    if (!this._underConstruct)
                        this.layoutAlign();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "leading", {
            get: function () {
                return this._style.leading;
            },
            set: function (value) {
                if (this._style.leading != value) {
                    this._style.leading = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "letterSpacing", {
            get: function () {
                return this._style.letterSpacing;
            },
            set: function (value) {
                if (this._style.letterSpacing != value) {
                    this._style.letterSpacing = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "underline", {
            get: function () {
                return false; //TODO: not supported yet
            },
            set: function (value) {
                //TODO: not supported yet
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "bold", {
            get: function () {
                return this._style.fontWeight == "bold";
            },
            set: function (value) {
                var v = value === true ? "bold" : "normal";
                if (this._style.fontWeight != v) {
                    this._style.fontWeight = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "weight", {
            get: function () {
                return this._style.fontWeight;
            },
            set: function (v) {
                if (this._style.fontWeight != v) {
                    this._style.fontWeight = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "variant", {
            get: function () {
                return this._style.fontVariant;
            },
            set: function (v) {
                if (this._style.fontVariant != v) {
                    this._style.fontVariant = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "italic", {
            get: function () {
                return this._style.fontStyle == "italic";
            },
            set: function (value) {
                var v = value === true ? "italic" : "normal";
                if (this._style.fontStyle != v) {
                    this._style.fontStyle = v;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "multipleLine", {
            get: function () {
                return !this._singleLine;
            },
            set: function (value) {
                value = !value;
                if (this._singleLine != value) {
                    this._singleLine = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "stroke", {
            get: function () {
                return +this._style.strokeThickness;
            },
            set: function (value) {
                if (this._style.strokeThickness != value)
                    this._style.strokeThickness = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "strokeColor", {
            get: function () {
                return this._style.stroke;
            },
            set: function (value) {
                if (this._style.stroke != value)
                    this._style.stroke = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "autoSize", {
            get: function () {
                return this._autoSize;
            },
            set: function (value) {
                if (this._autoSize != value) {
                    this._autoSize = value;
                    this._widthAutoSize = (value == fgui.AutoSizeType.Both || value == fgui.AutoSizeType.Shrink);
                    this._heightAutoSize = (value == fgui.AutoSizeType.Both || value == fgui.AutoSizeType.Height);
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "textWidth", {
            get: function () {
                // if (this._requireRender){
                //     this.renderNow();
                // }
                return this._textWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextField.prototype, "textHeight", {
            get: function () {
                // if (this._requireRender){
                //     this.renderNow();
                // }
                return this._textHeight;
            },
            enumerable: true,
            configurable: true
        });
        GTextField.prototype.ensureSizeCorrect = function () {
            // if (!this._parent || this._parent._underConstruct) {
            //     return ;
            // }
            if (this._sizeDirty && this._requireRender)
                this.renderNow();
        };
        GTextField.prototype.render = function () {
            if (!this._requireRender) {
                this._requireRender = true;
                fgui.GTimer.inst.callLater(this.__render, this);
            }
            if (!this._sizeDirty && (this._widthAutoSize || this._heightAutoSize)) {
                this._sizeDirty = true;
                this.emit("__sizeDelayChange" /* SIZE_DELAY_CHANGE */, this);
            }
        };
        GTextField.prototype.applyStyle = function () {
            // this._textField.style.stroke = this._style.stroke;
            // this._textField.style.strokeThickness = this._style.strokeThickness;
            // this._textField.style.fontStyle = this._style.fontStyle;
            // this._textField.style.fontVariant = this._style.fontVariant;
            // this._textField.style.fontWeight = this._style.fontWeight;
            // this._textField.style.letterSpacing = this._style.letterSpacing;
            // this._textField.style.align = this._style.align;
            // this._textField.style.fontSize = this._style.fontSize;
            // this._textField.style.fontFamily = this._style.fontFamily;
            // this._textField.style.fill = this._style.fill;
            // this._textField.style.leading = this._style.leading;
            for (var n in this._style) {
                this._textField.style[n] = this._style[n];
            }
        };
        GTextField.prototype.__render = function () {
            if (this._requireRender) {
                this.renderNow();
            }
        };
        GTextField.prototype.renderNow = function (updateBounds) {
            if (updateBounds === void 0) { updateBounds = true; }
            this._requireRender = false;
            this._sizeDirty = false;
            if (this._bitmapFont != null) {
                this.renderWithBitmapFont(updateBounds);
                return;
            }
            this.switchBitmapMode(false);
            this.applyStyle();
            this._textField.updateMinHeight();
            var wordWrap = !this._widthAutoSize && this.multipleLine;
            this._textField.width = this._textField.style.wordWrapWidth = (wordWrap || this.autoSize == fgui.AutoSizeType.None) ? Math.ceil(this.width) : 10000;
            this._textField.style.wordWrap = wordWrap;
            this._textField.style.breakWords = wordWrap;
            this._textField.text = this._text; //trigger t.dirty = true
            this._fontProperties = PIXI.TextMetrics.measureFont(this._style.toFontString());
            this._textWidth = Math.ceil(this._textField.textWidth);
            if (this._textWidth > 0)
                this._textWidth += GTextField.GUTTER_X * 2; //margin gap
            this._textHeight = Math.ceil(this._textField.textHeight);
            if (this._textHeight > 0)
                this._textHeight += GTextField.GUTTER_Y * 2; //margin gap
            var w = this.width, h = this.height;
            if (this.autoSize == fgui.AutoSizeType.Shrink) {
                this.shrinkTextField();
            }
            else {
                this._textField.scale.set(1, 1);
                if (this._widthAutoSize) {
                    w = this._textWidth;
                    this._textField.width = w;
                }
                if (this._heightAutoSize) {
                    h = this._textHeight;
                    if (this._textField.height != this._textHeight)
                        this._textField.height = this._textHeight;
                }
                else {
                    h = this.height;
                    if (this._textHeight > h)
                        this._textHeight = h;
                }
            }
            if (updateBounds) {
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }
            this.layoutAlign();
        };
        GTextField.prototype.renderWithBitmapFont = function (updateBounds) {
            var _this = this;
            this.switchBitmapMode(true);
            this._btContainer.children.forEach(function (c, i) {
                _this._bitmapPool.push(_this._btContainer.getChildAt(i));
            }, this);
            this._btContainer.removeChildren();
            if (!this._lines)
                this._lines = [];
            else
                LineInfo.recycleMany(this._lines);
            var letterSpacing = this.letterSpacing;
            var lineSpacing = this.leading - 1;
            var rectWidth = this.width - GTextField.GUTTER_X * 2;
            var lineWidth = 0, lineHeight = 0, lineTextHeight = 0;
            var glyphWidth = 0, glyphHeight = 0;
            var wordChars = 0, wordStart = 0, wordEnd = 0;
            var lastLineHeight = 0;
            var lineBuffer = "";
            var lineY = GTextField.GUTTER_Y;
            var line;
            var wordWrap = !this._widthAutoSize && this.multipleLine;
            var fontScale = this._bitmapFont.resizable ? this.fontSize / this._bitmapFont.size : 1;
            var glyph;
            this._textWidth = 0;
            this._textHeight = 0;
            var textLength = this.text.length;
            for (var offset = 0; offset < textLength; ++offset) {
                var ch = this._text.charAt(offset);
                var cc = ch.charCodeAt(offset);
                if (ch == "\n") {
                    lineBuffer += ch;
                    line = LineInfo.get();
                    line.width = lineWidth;
                    if (lineTextHeight == 0) {
                        if (lastLineHeight == 0)
                            lastLineHeight = Math.ceil(this.fontSize * fontScale);
                        if (lineHeight == 0)
                            lineHeight = lastLineHeight;
                        lineTextHeight = lineHeight;
                    }
                    line.height = lineHeight;
                    lastLineHeight = lineHeight;
                    line.textHeight = lineTextHeight;
                    line.text = lineBuffer;
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this._textWidth)
                        this._textWidth = line.width;
                    this._lines.push(line);
                    lineBuffer = "";
                    lineWidth = 0;
                    lineHeight = 0;
                    lineTextHeight = 0;
                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    continue;
                }
                if (cc > 256 || cc <= 32) {
                    if (wordChars > 0)
                        wordEnd = lineWidth;
                    wordChars = 0;
                }
                else {
                    if (wordChars == 0)
                        wordStart = lineWidth;
                    wordChars++;
                }
                if (ch == " ") {
                    glyphWidth = Math.ceil(this.fontSize / 2);
                    glyphHeight = Math.ceil(this.fontSize);
                }
                else {
                    glyph = this._bitmapFont.glyphs[ch];
                    if (glyph) {
                        glyphWidth = Math.ceil(glyph.advance * fontScale);
                        glyphHeight = Math.ceil(glyph.lineHeight * fontScale);
                    }
                    else if (ch == " ") {
                        glyphWidth = Math.ceil(this._bitmapFont.size * fontScale / 2);
                        glyphHeight = Math.ceil(this._bitmapFont.size * fontScale);
                    }
                    else {
                        glyphWidth = 0;
                        glyphHeight = 0;
                    }
                }
                if (glyphHeight > lineTextHeight)
                    lineTextHeight = glyphHeight;
                if (glyphHeight > lineHeight)
                    lineHeight = glyphHeight;
                if (lineWidth != 0)
                    lineWidth += letterSpacing;
                lineWidth += glyphWidth;
                if (!wordWrap || lineWidth <= rectWidth) {
                    lineBuffer += ch;
                }
                else {
                    line = LineInfo.get();
                    line.height = lineHeight;
                    line.textHeight = lineTextHeight;
                    if (lineBuffer.length == 0) { //the line cannt fit even a char
                        line.text = ch;
                    }
                    else if (wordChars > 0 && wordEnd > 0) { //if word had broken, move it to new line
                        lineBuffer += ch;
                        var len = lineBuffer.length - wordChars;
                        line.text = fgui.utils.StringUtil.trimRight(lineBuffer.substr(0, len));
                        line.width = wordEnd;
                        lineBuffer = lineBuffer.substr(len + 1);
                        lineWidth -= wordStart;
                    }
                    else {
                        line.text = lineBuffer;
                        line.width = lineWidth - (glyphWidth + letterSpacing);
                        lineBuffer = ch;
                        lineWidth = glyphWidth;
                        lineHeight = glyphHeight;
                        lineTextHeight = glyphHeight;
                    }
                    line.y = lineY;
                    lineY += (line.height + lineSpacing);
                    if (line.width > this._textWidth)
                        this._textWidth = line.width;
                    wordChars = 0;
                    wordStart = 0;
                    wordEnd = 0;
                    this._lines.push(line);
                }
            }
            if (lineBuffer.length > 0
                || this._lines.length > 0 && fgui.utils.StringUtil.endsWith(this._lines[this._lines.length - 1].text, "\n")) {
                line = LineInfo.get();
                line.width = lineWidth;
                if (lineHeight == 0)
                    lineHeight = lastLineHeight;
                if (lineTextHeight == 0)
                    lineTextHeight = lineHeight;
                line.height = lineHeight;
                line.textHeight = lineTextHeight;
                line.text = lineBuffer;
                line.y = lineY;
                if (line.width > this._textWidth)
                    this._textWidth = line.width;
                this._lines.push(line);
            }
            if (this._textWidth > 0)
                this._textWidth += GTextField.GUTTER_X * 2;
            var count = this._lines.length;
            if (count == 0) {
                this._textHeight = 0;
            }
            else {
                line = this._lines[this._lines.length - 1];
                this._textHeight = line.y + line.height + GTextField.GUTTER_Y;
            }
            var w, h = 0;
            if (this._widthAutoSize) {
                if (this._textWidth == 0)
                    w = 0;
                else
                    w = this._textWidth;
            }
            else
                w = this.width;
            if (this._heightAutoSize) {
                if (this._textHeight == 0)
                    h = 0;
                else
                    h = this._textHeight;
            }
            else
                h = this.height;
            if (updateBounds) {
                this._updatingSize = true;
                this.setSize(w, h);
                this._updatingSize = false;
            }
            if (w == 0 || h == 0)
                return;
            rectWidth = this.width - GTextField.GUTTER_X * 2;
            this._lines.forEach(function (line) {
                var charX = GTextField.GUTTER_X;
                var lineIndent = 0;
                var charIndent = 0;
                if (_this.align == fgui.AlignType.Center)
                    lineIndent = (rectWidth - line.width) / 2;
                else if (_this.align == fgui.AlignType.Right)
                    lineIndent = rectWidth - line.width;
                else
                    lineIndent = 0;
                textLength = line.text.length;
                for (var j = 0; j < textLength; j++) {
                    var ch = line.text.charAt(j);
                    glyph = _this._bitmapFont.glyphs[ch];
                    if (glyph != null) {
                        charIndent = (line.height + line.textHeight) / 2 - Math.ceil(glyph.lineHeight * fontScale);
                        var bm = void 0;
                        if (_this._bitmapPool.length)
                            bm = _this._bitmapPool.pop();
                        else
                            bm = new PIXI.Sprite();
                        bm.x = charX + lineIndent + Math.ceil(glyph.offsetX * fontScale);
                        bm.y = line.y + charIndent + Math.ceil(glyph.offsetY * fontScale);
                        bm.texture = glyph.texture;
                        bm.scale.set(fontScale, fontScale);
                        bm.tint = 0xFFFFFF;
                        if (_this._bitmapFont.colorable === true && typeof (_this._color) == "number") {
                            bm.tint = _this._color;
                        }
                        _this._btContainer.addChild(bm);
                        charX += letterSpacing + Math.ceil(glyph.advance * fontScale);
                    }
                    else if (ch == " ") {
                        charX += letterSpacing + Math.ceil(_this._bitmapFont.size * fontScale / 2);
                    }
                    else {
                        charX += letterSpacing;
                    }
                }
            });
        };
        GTextField.prototype.localToGlobal = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            ax -= this._offset.x;
            ay -= this._offset.y;
            return _super.prototype.localToGlobal.call(this, ax, ay, resultPoint);
        };
        GTextField.prototype.globalToLocal = function (ax, ay, resultPoint) {
            if (ax === void 0) { ax = 0; }
            if (ay === void 0) { ay = 0; }
            var r = _super.prototype.globalToLocal.call(this, ax, ay, resultPoint);
            r.x -= this._offset.x;
            r.y -= this._offset.y;
            return r;
        };
        GTextField.prototype.handleSizeChanged = function () {
            if (this._updatingSize)
                return;
            if (this._bitmapFont != null) {
                if (!this._widthAutoSize)
                    this.render();
            }
            else {
                if (this._underConstruct) {
                    this._textField.width = this.width;
                    this._textField.height = this.height;
                }
                else {
                    if (this._autoSize == fgui.AutoSizeType.Shrink)
                        this.shrinkTextField();
                    else {
                        if (!this._widthAutoSize) {
                            if (!this._heightAutoSize) {
                                this._textField.width = this.width;
                                this._textField.height = this.height;
                            }
                            else
                                this._textField.width = this.width;
                        }
                    }
                }
            }
            this.layoutAlign();
        };
        GTextField.prototype.shrinkTextField = function () {
            var fitScale = Math.min(1, this.width / this._textWidth);
            this._textField.scale.set(fitScale, fitScale);
        };
        GTextField.prototype.layoutAlign = function () {
            var tw = this._textWidth, th = this._textHeight;
            if (this.autoSize == fgui.AutoSizeType.Shrink) {
                tw *= this.displayObject.scale.x;
                th *= this.displayObject.scale.y;
            }
            if (this._verticalAlign == fgui.VertAlignType.Top || th == 0)
                this._offset.y = GTextField.GUTTER_Y;
            else {
                var dh = Math.max(0, this.height - th);
                if (this._verticalAlign == fgui.VertAlignType.Middle)
                    this._offset.y = dh * .5;
                else if (this._verticalAlign == fgui.VertAlignType.Bottom)
                    this._offset.y = dh;
            }
            var xPos = 0;
            switch (this._style.align) {
                case "center":
                    xPos = (this.width - tw) * .5;
                    break;
                case "right":
                    xPos = this.width - tw;
                    break;
            }
            this._offset.x = xPos;
            this.updatePosition();
        };
        GTextField.prototype.updatePosition = function () {
            this.displayObject.position.set(Math.floor(this.x + this._offset.x), Math.floor(this.y + this._offset.y));
        };
        GTextField.prototype.handleXYChanged = function () {
            _super.prototype.handleXYChanged.call(this);
            if (this._displayObject)
                this.updatePosition();
        };
        GTextField.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 5);
            this._font = buffer.readS();
            this._style.fontSize = buffer.readShort();
            this.color = buffer.readColor();
            this.align = fgui.AlignMap[buffer.readByte()];
            this.verticalAlign = buffer.readByte();
            this._style.leading = buffer.readShort();
            this._style.letterSpacing = buffer.readShort();
            this.ubbEnabled = buffer.readBool();
            this._autoSize = buffer.readByte();
            this._widthAutoSize = this._autoSize == fgui.AutoSizeType.Both;
            this._heightAutoSize = this._autoSize == fgui.AutoSizeType.Both || this._autoSize == fgui.AutoSizeType.Height;
            this.underline = buffer.readBool();
            this.italic = buffer.readBool();
            this.bold = buffer.readBool();
            this.multiline = !buffer.readBool();
            if (buffer.readBool()) {
                this.strokeColor = buffer.readColor();
                this.stroke = buffer.readFloat() + 1;
            }
            if (buffer.readBool()) //shadow
                buffer.skip(12);
            if (buffer.readBool()) {
                this._templateVars = {};
            }
        };
        GTextField.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 6);
            var str = buffer.readS();
            if (str != null) {
                this.text = str;
            }
            this._sizeDirty = false;
            this._textField.init();
        };
        GTextField.GUTTER_X = 2;
        GTextField.GUTTER_Y = 2;
        return GTextField;
    }(fgui.GObject));
    fgui.GTextField = GTextField;
})(fgui || (fgui = {}));
/// <reference path="./GTextField.ts" />

/// <reference path="./GTextField.ts" />
(function (fgui) {
    var TextBlock = /** @class */ (function () {
        function TextBlock() {
        }
        return TextBlock;
    }());
    fgui.TextBlock = TextBlock;
    //TOOD: impl
    /**
     * 富文本
     */
    var GRichTextField = /** @class */ (function (_super) {
        __extends(GRichTextField, _super);
        // public setupBeforeAdd(xml:utils.XmlNode):void
        // {
        //     super.setupBeforeAdd(xml);
        //     this._ubbEnabled = xml.attributes.ubb == "true";
        // }
        function GRichTextField() {
            var _this = _super.call(this) || this;
            _this._textField.interactive = true;
            _this._textField.interactiveChildren = false;
            _this.on("__linkClick" /* LinkClick */, _this._clickLink, _this);
            return _this;
        }
        Object.defineProperty(GRichTextField.prototype, "ubbEnabled", {
            get: function () {
                return this._ubbEnabled;
            },
            set: function (value) {
                if (this._ubbEnabled != value) {
                    this._ubbEnabled = value;
                    this.render();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRichTextField.prototype, "textFlow", {
            set: function (flow) {
                this._textFlow = flow;
                this.render();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRichTextField.prototype, "text", {
            set: function (value) {
                this._text = value;
                if (this._text == null)
                    this._text = "";
                this._textField.width = this.width;
                //if(this._ubbEnabled)
                //this.textFlow = utils.StringUtil.parseUBB(this._text);   //TODO: parser impl
                this.updateGear(6 /* Text */);
                this.render();
            },
            enumerable: true,
            configurable: true
        });
        GRichTextField.prototype._clickLink = function (block) {
            this.emit("__linkClick" /* LinkClick */, block.text, this);
        };
        GRichTextField.prototype.dispose = function () {
            this.off("__linkClick" /* LinkClick */, this._clickLink, this);
            _super.prototype.dispose.call(this);
        };
        // @FIXIME
        GRichTextField.prototype.updateTextFieldText = function () {
            // var text2: string = this._text;
            // if (this._templateVars != null)
            //     text2 = this.parseTemplate(text2);
            // let arr;
            // if (this._ubbEnabled)
            //     arr = GTextField._htmlParser.parser(ToolSet.parseUBB(text2));
            // else
            //     arr = GTextField._htmlParser.parser(text2);
            // if (this._underline) {
            //     for (var i = 0; i < arr.length; i++) {
            //         let element = arr[i];
            //         if (element.style)
            //             element.style.underline = true;
            //         else
            //             element.style = <egret.ITextStyle>{ underline: true };
            //     }
            // }
            // this._textField.textFlow = arr;
        };
        return GRichTextField;
    }(fgui.GTextField));
    fgui.GRichTextField = GRichTextField;
})(fgui || (fgui = {}));

(function (fgui) {
    var GRootMouseStatus = /** @class */ (function () {
        function GRootMouseStatus() {
            this.touchDown = false;
            this.mouseX = 0;
            this.mouseY = 0;
        }
        return GRootMouseStatus;
    }());
    fgui.GRootMouseStatus = GRootMouseStatus;
    var GRoot = /** @class */ (function (_super) {
        __extends(GRoot, _super);
        function GRoot() {
            var _this = _super.call(this) || this;
            if (GRoot._inst == null)
                GRoot._inst = _this;
            _this.opaque = false;
            _this._popupStack = [];
            _this._justClosedPopups = [];
            _this._uid = GRoot.uniqueID++;
            fgui.utils.DOMEventManager.inst.on("__mouseWheel" /* MOUSE_WHEEL */, _this.dispatchMouseWheel, _this);
            return _this;
        }
        Object.defineProperty(GRoot, "inst", {
            /**
             * the singleton instance of the GRoot object
             */
            get: function () {
                if (GRoot._inst == null)
                    new GRoot();
                return GRoot._inst;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot, "globalMouseStatus", {
            /**
             * the current mouse/pointer data
             */
            get: function () {
                return GRoot._gmStatus;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * the main entry to lauch the UI root, e.g.: GRoot.inst.attachTo(app, options)
         * @param app your PIXI.Application instance to be used in this GRoot instance
         * @param stageOptions stage rotation / resize options
         */
        GRoot.prototype.attachTo = function (app, stageOptions) {
            fgui.GTimer.inst.setTicker(app.ticker);
            fgui.TweenManager._ticker = app.ticker;
            if (this._uiStage) {
                this._uiStage.off("__sizeChanged" /* SIZE_CHANGED */, this._winResize, this);
                this._uiStage.nativeStage.off(fgui.InteractiveEvents.Down, this._stageDown, this);
                this._uiStage.nativeStage.off(fgui.InteractiveEvents.Up, this._stageUp, this);
                this._uiStage.nativeStage.off(fgui.InteractiveEvents.Move, this._stageMove, this);
                this._uiStage.nativeStage.removeChild(this._displayObject);
                this._uiStage.dispose();
            }
            this._uiStage = new fgui.UIStage(app, stageOptions);
            this._uiStage.on("__sizeChanged" /* SIZE_CHANGED */, this._winResize, this);
            this._uiStage.nativeStage.on(fgui.InteractiveEvents.Down, this._stageDown, this);
            this._uiStage.nativeStage.on(fgui.InteractiveEvents.Up, this._stageUp, this);
            this._uiStage.nativeStage.on(fgui.InteractiveEvents.Move, this._stageMove, this);
            this._uiStage.nativeStage.addChild(this._displayObject);
            this._winResize(this._uiStage);
            if (!this._modalLayer) {
                this._modalLayer = new fgui.GGraph();
                this._modalLayer.setSize(this.width, this.height);
                this._modalLayer.drawRect(0, 0, 0, fgui.UIConfig.modalLayerColor, fgui.UIConfig.modalLayerAlpha);
                this._modalLayer.addRelation(this, fgui.RelationType.Size);
            }
        };
        Object.defineProperty(GRoot.prototype, "uniqueID", {
            get: function () {
                return this._uid;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "stageWidth", {
            get: function () {
                return this._uiStage.stageWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "stageHeight", {
            get: function () {
                return this._uiStage.stageHeight;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "contentScaleFactor", {
            get: function () {
                return this._uiStage.resolution;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "applicationContext", {
            get: function () {
                return this._uiStage.applicationContext;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "nativeStage", {
            get: function () {
                return this._uiStage.nativeStage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "orientation", {
            get: function () {
                return this._uiStage.orientation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "stageWrapper", {
            get: function () {
                return this._uiStage;
            },
            enumerable: true,
            configurable: true
        });
        GRoot.prototype.dispatchMouseWheel = function (evt) {
            var childUnderMouse = this.getObjectUnderPoint(GRoot.globalMouseStatus.mouseX, GRoot.globalMouseStatus.mouseY);
            if (childUnderMouse != null) { //bubble
                while (childUnderMouse.parent && childUnderMouse.parent != this) {
                    childUnderMouse.emit("__mouseWheel" /* MOUSE_WHEEL */, evt);
                    childUnderMouse = childUnderMouse.parent;
                }
            }
        };
        /**
         * get the objects which are placed underneath the given stage coordinate
         * @param globalX the stage X
         * @param globalY the stage Y
         */
        GRoot.prototype.getObjectUnderPoint = function (globalX, globalY) {
            GRoot.sHelperPoint.set(globalX, globalY);
            var ret = this._uiStage.applicationContext.renderer.plugins.interaction.hitTest(GRoot.sHelperPoint, this.nativeStage);
            return fgui.GObject.cast(ret);
        };
        GRoot.prototype.showWindow = function (win) {
            this.addChild(win);
            win.requestFocus();
            if (win.x > this.width)
                win.x = this.width - win.width;
            else if (win.x + win.width < 0)
                win.x = 0;
            if (win.y > this.height)
                win.y = this.height - win.height;
            else if (win.y + win.height < 0)
                win.y = 0;
            this.adjustModalLayer();
        };
        GRoot.prototype.hideWindow = function (win) {
            win.hide();
        };
        GRoot.prototype.hideWindowImmediately = function (win) {
            if (win.parent == this)
                this.removeChild(win);
            this.adjustModalLayer();
        };
        GRoot.prototype.bringToFront = function (win) {
            var i;
            if (this._modalLayer.parent != null && !win.modal)
                i = this.getChildIndex(this._modalLayer) - 1;
            else
                i = this.numChildren - 1;
            for (; i >= 0; i--) {
                var g = this.getChildAt(i);
                if (g == win)
                    return;
                if (g instanceof fgui.Window)
                    break;
            }
            if (i >= 0)
                this.setChildIndex(win, i);
        };
        GRoot.prototype.showModalWait = function (msg) {
            if (msg === void 0) { msg = null; }
            if (fgui.UIConfig.globalModalWaiting != null) {
                if (this._modalWaitPane == null) {
                    this._modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.globalModalWaiting);
                    this._modalWaitPane.addRelation(this, fgui.RelationType.Size);
                }
                this._modalWaitPane.setSize(this.width, this.height);
                this.addChild(this._modalWaitPane);
                this._modalWaitPane.text = msg;
            }
        };
        GRoot.prototype.closeModalWait = function () {
            if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
                this.removeChild(this._modalWaitPane);
        };
        GRoot.prototype.closeAllExceptModals = function () {
            var arr = this._children.slice();
            arr.forEach(function (g) {
                if ((g instanceof fgui.Window) && !g.modal)
                    g.hide();
            }, this);
        };
        GRoot.prototype.closeAllWindows = function () {
            var arr = this._children.slice();
            arr.forEach(function (g) {
                if (g instanceof fgui.Window)
                    g.hide();
            }, this);
        };
        GRoot.prototype.getTopWindow = function () {
            var cnt = this.numChildren;
            for (var i = cnt - 1; i >= 0; i--) {
                var g = this.getChildAt(i);
                if (g instanceof fgui.Window) {
                    return g;
                }
            }
            return null;
        };
        Object.defineProperty(GRoot.prototype, "hasModalWindow", {
            get: function () {
                return this._modalLayer.parent != null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GRoot.prototype, "modalWaiting", {
            get: function () {
                return this._modalWaitPane && this._modalWaitPane.inContainer;
            },
            enumerable: true,
            configurable: true
        });
        GRoot.prototype.showPopup = function (popup, target, dir) {
            if (target === void 0) { target = null; }
            if (dir === void 0) { dir = fgui.PopupDirection.Auto; }
            if (this._popupStack.length > 0) {
                var k = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (var i = this._popupStack.length - 1; i >= k; i--)
                        this.removeChild(this._popupStack.pop());
                }
            }
            this._popupStack.push(popup);
            this.addChild(popup);
            this.adjustModalLayer();
            var pos;
            var sizeW = 0, sizeH = 0;
            if (target) {
                pos = target.localToRoot();
                sizeW = target.width;
                sizeH = target.height;
            }
            else
                pos = this.globalToLocal(GRoot._gmStatus.mouseX, GRoot._gmStatus.mouseY);
            var xx, yy;
            xx = pos.x;
            if (xx + popup.width > this.width)
                xx = xx + sizeW - popup.width;
            yy = pos.y + sizeH;
            if ((dir == fgui.PopupDirection.Auto && yy + popup.height > this.height)
                || dir == fgui.PopupDirection.Up) {
                yy = pos.y - popup.height - 1;
                if (yy < 0) {
                    yy = 0;
                    xx += sizeW * .5;
                }
            }
            popup.x = xx;
            popup.y = yy;
        };
        GRoot.prototype.togglePopup = function (popup, target, dir) {
            if (target === void 0) { target = null; }
            if (this._justClosedPopups.indexOf(popup) != -1)
                return;
            this.showPopup(popup, target, dir);
        };
        GRoot.prototype.hidePopup = function (popup) {
            if (popup === void 0) { popup = null; }
            var i;
            if (popup != null) {
                var k = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (i = this._popupStack.length - 1; i >= k; i--)
                        this.closePopup(this._popupStack.pop());
                }
            }
            else {
                var cnt = this._popupStack.length;
                for (i = cnt - 1; i >= 0; i--)
                    this.closePopup(this._popupStack[i]);
                this._popupStack.length = 0;
            }
        };
        Object.defineProperty(GRoot.prototype, "hasAnyPopup", {
            get: function () {
                return this._popupStack.length != 0;
            },
            enumerable: true,
            configurable: true
        });
        GRoot.prototype.closePopup = function (target) {
            if (target.parent != null) {
                if (target instanceof fgui.Window)
                    target.hide();
                else
                    this.removeChild(target);
            }
        };
        GRoot.prototype.showTooltips = function (msg) {
            if (this._defaultTooltipWin == null) {
                var resourceURL = fgui.UIConfig.tooltipsWin;
                if (!resourceURL) {
                    console.error("UIConfig.tooltipsWin not defined");
                    return;
                }
                this._defaultTooltipWin = fgui.UIPackage.createObjectFromURL(resourceURL);
            }
            this._defaultTooltipWin.text = msg;
            this.showTooltipsWin(this._defaultTooltipWin);
        };
        GRoot.prototype.playOneShotSound = function (sound, volumeScale) {
            if (volumeScale === void 0) { volumeScale = 1; }
            // FIXME
        };
        GRoot.prototype.showTooltipsWin = function (tooltipWin, position) {
            if (position === void 0) { position = null; }
            this.hideTooltips();
            this._tooltipWin = tooltipWin;
            var xx = 0;
            var yy = 0;
            if (position == null) {
                xx = GRoot._gmStatus.mouseX + 10;
                yy = GRoot._gmStatus.mouseY + 20;
            }
            else {
                xx = position.x;
                yy = position.y;
            }
            var pt = this.globalToLocal(xx, yy);
            xx = pt.x;
            yy = pt.y;
            if (xx + this._tooltipWin.width > this.width) {
                xx = xx - this._tooltipWin.width - 1;
                if (xx < 0)
                    xx = 10;
            }
            if (yy + this._tooltipWin.height > this.height) {
                yy = yy - this._tooltipWin.height - 1;
                if (xx - this._tooltipWin.width - 1 > 0)
                    xx = xx - this._tooltipWin.width - 1;
                if (yy < 0)
                    yy = 10;
            }
            this._tooltipWin.x = xx;
            this._tooltipWin.y = yy;
            this.addChild(this._tooltipWin);
        };
        GRoot.prototype.hideTooltips = function () {
            if (this._tooltipWin != null) {
                if (this._tooltipWin.parent)
                    this.removeChild(this._tooltipWin);
                this._tooltipWin = null;
            }
        };
        Object.defineProperty(GRoot.prototype, "focus", {
            get: function () {
                if (this._focusedObject && !this._focusedObject.onStage)
                    this._focusedObject = null;
                return this._focusedObject;
            },
            set: function (value) {
                if (value && (!value.focusable || !value.onStage))
                    throw new Error("Invalid target to focus");
                this.setFocus(value);
            },
            enumerable: true,
            configurable: true
        });
        GRoot.prototype.setFocus = function (value) {
            if (this._focusedObject != value) {
                this._focusedObject = value;
                this.emit("__focusChanged" /* CHANGED */, this);
            }
        };
        GRoot.prototype.adjustModalLayer = function () {
            var cnt = this.numChildren;
            if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
                this.setChildIndex(this._modalWaitPane, cnt - 1);
            for (var i = cnt - 1; i >= 0; i--) {
                var g = this.getChildAt(i);
                if ((g instanceof fgui.Window) && g.modal) {
                    if (this._modalLayer.parent == null)
                        this.addChildAt(this._modalLayer, i);
                    else
                        this.setChildIndexBefore(this._modalLayer, i);
                    return;
                }
            }
            if (this._modalLayer.parent != null)
                this.removeChild(this._modalLayer);
        };
        GRoot.prototype._stageDown = function (evt) {
            GRoot._gmStatus.mouseX = evt.data.global.x;
            GRoot._gmStatus.mouseY = evt.data.global.y;
            GRoot._gmStatus.touchDown = true;
            //check focus
            var mc = evt.target;
            while (mc && mc != this.nativeStage) {
                if (fgui.isUIObject(mc)) {
                    var g = mc.UIOwner;
                    if (g.touchable && g.focusable) {
                        this.setFocus(g);
                        break;
                    }
                }
                mc = mc.parent;
            }
            if (this._tooltipWin != null)
                this.hideTooltips();
            this.checkPopups(evt.target);
        };
        GRoot.prototype.checkPopups = function (target) {
            if (this._checkingPopups)
                return;
            this._checkingPopups = true;
            this._justClosedPopups.length = 0;
            if (this._popupStack.length > 0) {
                var mc = target;
                while (mc && mc != this.nativeStage) {
                    if (fgui.isUIObject(mc)) {
                        var pindex = this._popupStack.indexOf(mc.UIOwner);
                        if (pindex != -1) {
                            var popup_1 = void 0;
                            for (var i = this._popupStack.length - 1; i > pindex; i--) {
                                popup_1 = this._popupStack.pop();
                                this.closePopup(popup_1);
                                this._justClosedPopups.push(popup_1);
                            }
                            return;
                        }
                    }
                    mc = mc.parent;
                }
                var cnt = this._popupStack.length;
                var popup = void 0;
                for (var i = cnt - 1; i >= 0; i--) {
                    popup = this._popupStack[i];
                    this.closePopup(popup);
                    this._justClosedPopups.push(popup);
                }
                this._popupStack.length = 0;
            }
        };
        GRoot.prototype._stageMove = function (evt) {
            GRoot._gmStatus.mouseX = evt.data.global.x;
            GRoot._gmStatus.mouseY = evt.data.global.y;
        };
        GRoot.prototype._stageUp = function (evt) {
            GRoot._gmStatus.touchDown = false;
            this._checkingPopups = false;
        };
        GRoot.prototype._winResize = function (stage) {
            this.setSize(stage.stageWidth, stage.stageHeight);
        };
        GRoot.contentScaleLevel = 0;
        GRoot.uniqueID = 0;
        GRoot.contentScaleFactor = 1;
        GRoot._gmStatus = new GRootMouseStatus();
        return GRoot;
    }(fgui.GComponent));
    fgui.GRoot = GRoot;
})(fgui || (fgui = {}));

(function (fgui) {
    var GScrollBar = /** @class */ (function (_super) {
        __extends(GScrollBar, _super);
        function GScrollBar() {
            var _this = _super.call(this) || this;
            _this._dragOffset = new PIXI.Point();
            _this._scrollPerc = 0;
            return _this;
        }
        GScrollBar.prototype.setScrollPane = function (target, vertical) {
            this._target = target;
            this._vertical = vertical;
        };
        Object.defineProperty(GScrollBar.prototype, "displayPerc", {
            set: function (val) {
                if (!this._grip) {
                    return;
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
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GScrollBar.prototype, "scrollPerc", {
            get: function () {
                return this._scrollPerc;
            },
            set: function (val) {
                if (!this._grip) {
                    return;
                }
                this._scrollPerc = val;
                if (this._vertical)
                    this._grip.y = this._bar.y + (this._bar.height - this._grip.height) * this._scrollPerc;
                else
                    this._grip.x = this._bar.x + (this._bar.width - this._grip.width) * this._scrollPerc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GScrollBar.prototype, "minSize", {
            get: function () {
                if (this._vertical)
                    return (this._arrowButton1 != null ? this._arrowButton1.height : 0) + (this._arrowButton2 != null ? this._arrowButton2.height : 0);
                else
                    return (this._arrowButton1 != null ? this._arrowButton1.width : 0) + (this._arrowButton2 != null ? this._arrowButton2.width : 0);
            },
            enumerable: true,
            configurable: true
        });
        GScrollBar.prototype._gripMouseDown = function (evt) {
            if (!this._bar)
                return;
            evt.stopPropagation();
            this._dragOffset = evt.data.getLocalPosition(this.displayObject, this._dragOffset);
            this._dragOffset.x -= this._grip.x;
            this._dragOffset.y -= this._grip.y;
            var g = fgui.GRoot.inst.nativeStage;
            g.on(fgui.InteractiveEvents.Move, this._gripDragging, this);
            g.on(fgui.InteractiveEvents.Up, this._gripDraggingEnd, this);
        };
        GScrollBar.prototype._gripDragging = function (evt) {
            var pt = evt.data.getLocalPosition(this.displayObject, GScrollBar.sScrollbarHelperPoint);
            if (this._vertical) {
                var curY = pt.y - this._dragOffset.y;
                this._target.setPercY((curY - this._bar.y) / (this._bar.height - this._grip.height), false);
            }
            else {
                var curX = pt.x - this._dragOffset.x;
                this._target.setPercX((curX - this._bar.x) / (this._bar.width - this._grip.width), false);
            }
        };
        GScrollBar.prototype._gripDraggingEnd = function (evt) {
            var g = fgui.GRoot.inst.nativeStage;
            g.off(fgui.InteractiveEvents.Move, this._gripDragging, this);
            g.off(fgui.InteractiveEvents.Up, this._gripDraggingEnd, this);
        };
        GScrollBar.prototype._arrowButton1Click = function (evt) {
            evt.stopPropagation();
            if (this._vertical)
                this._target.scrollUp();
            else
                this._target.scrollLeft();
        };
        GScrollBar.prototype._arrowButton2Click = function (evt) {
            evt.stopPropagation();
            if (this._vertical)
                this._target.scrollDown();
            else
                this._target.scrollRight();
        };
        GScrollBar.prototype._barMouseDown = function (evt) {
            var pt = evt.data.getLocalPosition(this._grip.displayObject, GScrollBar.sScrollbarHelperPoint);
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
        };
        GScrollBar.prototype.dispose = function () {
            this.off(fgui.InteractiveEvents.Down, this._barMouseDown, this);
            if (this._arrowButton1)
                this._arrowButton1.off(fgui.InteractiveEvents.Down, this._arrowButton1Click, this);
            if (this._arrowButton2)
                this._arrowButton2.off(fgui.InteractiveEvents.Down, this._arrowButton2Click, this);
            this._grip.off(fgui.InteractiveEvents.Down, this._gripMouseDown, this);
            this._gripDraggingEnd(null);
            _super.prototype.dispose.call(this);
        };
        GScrollBar.sScrollbarHelperPoint = new PIXI.Point();
        return GScrollBar;
    }(fgui.GComponent));
    fgui.GScrollBar = GScrollBar;
})(fgui || (fgui = {}));

(function (fgui) {
    var GSlider = /** @class */ (function (_super) {
        __extends(GSlider, _super);
        function GSlider() {
            var _this = _super.call(this) || this;
            _this._min = 0;
            _this._max = 0;
            _this._value = 0;
            _this._barMaxWidth = 0;
            _this._barMaxHeight = 0;
            _this._barMaxWidthDelta = 0;
            _this._barMaxHeightDelta = 0;
            _this._titleType = fgui.ProgressTitleType.Percent;
            _this._value = 50;
            _this._max = 100;
            _this._clickPos = new PIXI.Point();
            return _this;
        }
        Object.defineProperty(GSlider.prototype, "titleType", {
            get: function () {
                return this._titleType;
            },
            set: function (value) {
                this._titleType = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GSlider.prototype, "max", {
            get: function () {
                return this._max;
            },
            set: function (value) {
                if (this._max != value) {
                    this._max = value;
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GSlider.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                if (this._value != value) {
                    this._value = value;
                    this.update();
                }
            },
            enumerable: true,
            configurable: true
        });
        GSlider.prototype.update = function () {
            var percent = Math.min(this._value / this._max, 1);
            this.updateWidthPercent(percent);
        };
        GSlider.prototype.updateWidthPercent = function (percent) {
            if (this._titleObject) {
                switch (this._titleType) {
                    case fgui.ProgressTitleType.Percent:
                        this._titleObject.text = Math.round(percent * 100) + "%";
                        break;
                    case fgui.ProgressTitleType.ValueAndMax:
                        this._titleObject.text = this._value + "/" + this._max;
                        break;
                    case fgui.ProgressTitleType.Value:
                        this._titleObject.text = "" + this._value;
                        break;
                    case fgui.ProgressTitleType.Max:
                        this._titleObject.text = "" + this._max;
                        break;
                }
            }
            if (this._barObjectH)
                this._barObjectH.width = (this.width - this._barMaxWidthDelta) * percent;
            if (this._barObjectV)
                this._barObjectV.height = (this.height - this._barMaxHeightDelta) * percent;
            if (this._aniObject instanceof fgui.GMovieClip)
                this._aniObject.frame = Math.round(percent * 100);
        };
        GSlider.prototype.handleSizeChanged = function () {
            _super.prototype.handleSizeChanged.call(this);
            if (this._barObjectH)
                this._barMaxWidth = this.width - this._barMaxWidthDelta;
            if (this._barObjectV)
                this._barMaxHeight = this.height - this._barMaxHeightDelta;
            // if (!this._inProgressBuilding)
            //     this.update();
            if (!this._underConstruct)
                this.update();
        };
        GSlider.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            if (!buffer.seek(beginPos, 6)) {
                this.update();
                return;
            }
            if (buffer.readByte() != this.packageItem.objectType) {
                this.update();
                return;
            }
            this._value = buffer.readInt();
            this._max = buffer.readInt();
            if (buffer.version >= 2)
                this._min = buffer.readInt();
            this.update();
        };
        // public setupAfterAdd(xml: utils.XmlNode): void {
        //     super.setupAfterAdd(xml);
        //     xml = utils.XmlParser.getChildNodes(xml, "Slider")[0];
        //     if (xml) {
        //         this._value = parseInt(xml.attributes.value);
        //         this._max = parseInt(xml.attributes.max);
        //     }
        //     this.update();
        // }
        GSlider.prototype._gripMouseDown = function (evt) {
            this._clickPos = this.globalToLocal(evt.data.global.x, evt.data.global.y);
            this._clickPercent = this._value / this._max;
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Move, this._gripMouseMove, this);
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Up, this._gripMouseUp, this);
        };
        GSlider.prototype._gripMouseMove = function (evt) {
            var pt = this.globalToLocal(evt.data.global.x, evt.data.global.y, GSlider.sSilderHelperPoint);
            var deltaX = pt.x - this._clickPos.x;
            var deltaY = pt.y - this._clickPos.y;
            var percent;
            if (this._barObjectH)
                percent = this._clickPercent + deltaX / this._barMaxWidth;
            else
                percent = this._clickPercent + deltaY / this._barMaxHeight;
            if (percent > 1)
                percent = 1;
            else if (percent < 0)
                percent = 0;
            var newValue = Math.round(this._max * percent);
            if (newValue != this._value) {
                this._value = newValue;
                this.emit("__stateChanged" /* CHANGED */, this);
            }
            this.updateWidthPercent(percent);
        };
        GSlider.prototype._gripMouseUp = function (evt) {
            var percent = this._value / this._max;
            this.updateWidthPercent(percent);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._gripMouseMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._gripMouseUp, this);
        };
        GSlider.prototype.dispose = function () {
            if (this._gripObject)
                this._gripObject.off(fgui.InteractiveEvents.Down, this._gripMouseDown, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._gripMouseMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._gripMouseUp, this);
            _super.prototype.dispose.call(this);
        };
        GSlider.sSilderHelperPoint = new PIXI.Point();
        return GSlider;
    }(fgui.GComponent));
    fgui.GSlider = GSlider;
})(fgui || (fgui = {}));
/// <reference path="./IColorableTitle.ts" />

/// <reference path="./IColorableTitle.ts" />
(function (fgui) {
    ;
    var GTextInput = /** @class */ (function (_super) {
        __extends(GTextInput, _super);
        function GTextInput() {
            var _this = _super.call(this) || this;
            _this._util = null;
            /**@internal */
            _this._isTyping = false;
            _this.focusable = true;
            _this.editable = true; //init
            _this.type = "text" /* TEXT */;
            _this.on("removed", _this.removed, _this);
            _this.on("added", _this.added, _this);
            _this._util.initialize();
            return _this;
        }
        GTextInput.prototype.createDisplayObject = function () {
            _super.prototype.createDisplayObject.call(this);
            this._displayObject.hitArea = new PIXI.Rectangle();
        };
        GTextInput.prototype.handleSizeChanged = function () {
            _super.prototype.handleSizeChanged.call(this);
            var rect = this._displayObject.hitArea;
            rect.x = rect.y = 0;
            rect.width = this.width;
            rect.height = this.height;
        };
        GTextInput.prototype.removed = function (disp) {
            if (this._util)
                this._util.destroy();
        };
        GTextInput.prototype.added = function (disp) {
            if (this._util)
                this._util.initialize();
        };
        GTextInput.prototype.requestFocus = function () {
            this.root.focus = this;
            this._util._onFocus();
        };
        Object.defineProperty(GTextInput.prototype, "editable", {
            get: function () {
                return this._editable;
            },
            set: function (v) {
                if (v != this._editable) {
                    this._editable = v;
                    if (this._editable) {
                        if (!this._util)
                            this._util = new fgui.utils.InputDelegate(this);
                        this._util.initialize();
                    }
                    else {
                        if (this._util)
                            this._util.destroy();
                    }
                    this.touchable = this._editable;
                }
            },
            enumerable: true,
            configurable: true
        });
        GTextInput.prototype.changeToPassText = function (text) {
            var passText = "";
            for (var i = 0, num = text.length; i < num; i++) {
                switch (text.charAt(i)) {
                    case '\n':
                        passText += "\n";
                        break;
                    case '\r':
                        break;
                    default:
                        passText += '*';
                }
            }
            return passText;
        };
        GTextInput.prototype.getText = function () {
            return this._util.text;
        };
        GTextInput.prototype.setText = function (value) {
            if (value == null)
                value = "";
            if (this._text == value)
                return;
            this._util.text = value;
            //super.setText(value);
            this.text = value;
        };
        GTextInput.prototype.setColor = function (value) {
            _super.prototype.setColor.call(this, value);
            this._util.setColor(value);
        };
        Object.defineProperty(GTextInput.prototype, "promptText", {
            get: function () {
                return this._util._getProperty("placeholder");
            },
            set: function (v) {
                if (v == null)
                    v = "";
                this._util._setProperty("placeholder", v);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextInput.prototype, "maxLength", {
            get: function () {
                return parseInt(this._util._getProperty("maxlength")) || 0;
            },
            set: function (v) {
                this._util._setProperty("maxlength", String(v));
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextInput.prototype, "restrict", {
            get: function () {
                return this._util._restrict;
            },
            set: function (v) {
                this._util._restrict = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextInput.prototype, "password", {
            get: function () {
                return this.type == "password" /* PASSWORD */;
            },
            set: function (v) {
                this.type = "password" /* PASSWORD */;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTextInput.prototype, "type", {
            get: function () {
                return this._util.type;
            },
            set: function (t) {
                this._util.type = t;
            },
            enumerable: true,
            configurable: true
        });
        GTextInput.prototype.dispose = function () {
            _super.prototype.dispose.call(this);
            this.off("removed", this.removed, this);
            this.off("added", this.added, this);
            this._util.destroy();
            this._util = null;
        };
        GTextInput.prototype.renderNow = function (updateBounds) {
            if (updateBounds === void 0) { updateBounds = true; }
            this._requireRender = false;
            this._sizeDirty = false;
            this._util._updateProperties();
            if (this._isTyping)
                this.decorateInputbox();
            var origText = this._text;
            if (this.type == "password" /* PASSWORD */)
                this._text = this.changeToPassText(this._text);
            _super.prototype.renderNow.call(this, updateBounds);
            this._text = origText;
        };
        GTextInput.prototype.decorateInputbox = function () {
            //draw underlines?
        };
        GTextInput.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 4);
            var str = buffer.readS();
            if (str != null) {
                this.promptText = str;
            }
            str = buffer.readS();
            if (str != null) {
                this.restrict = str;
            }
            var iv = buffer.readInt();
            if (iv != 0) {
                this.maxLength = iv;
            }
            iv = buffer.readInt();
            if (iv != 0) {
                //keyboardType
                // if(iv == 4)
                //     this.type = InputType.NUMBER;
                // else if(iv == 3)
                //     this.type = InputType.URL;
                // else if(iv == 5)
                //     this.type = InputType.TEL;
                // else if(iv == 6)
                //     this.type = InputType.EMAIL;
            }
            if (buffer.readBool()) {
                this.password = true;
            }
            this.updateVertAlign();
        };
        GTextInput.prototype.updateVertAlign = function () {
            // @FIXME
            // switch (this._verticalAlign) {
            //     case VertAlignType.Top:
            //         this._textField.verticalAlign = egret.VerticalAlign.TOP;
            //         break;
            //     case VertAlignType.Middle:
            //         this._textField.verticalAlign = egret.VerticalAlign.MIDDLE;
            //         break;
            //     case VertAlignType.Bottom:
            //         this._textField.verticalAlign = egret.VerticalAlign.BOTTOM;
            //         break;
            // }
        };
        GTextInput.prototype.setup_afterAdd = function (buffer, beginPos) {
            _super.prototype.setup_afterAdd.call(this, buffer, beginPos);
            this._textField.text = "dddddddddddddddddd";
            if ((!this._text || this._text.length <= 0) && this.promptText) {
                this._textField.text = this.promptText;
                this.password = false;
                //this._textField.textFlow = (new egret.HtmlTextParser).parser(ToolSet.parseUBB(ToolSet.encodeHTML(this._promptText)));
            }
        };
        return GTextInput;
    }(fgui.GTextField));
    fgui.GTextInput = GTextInput;
})(fgui || (fgui = {}));

(function (fgui) {
    var GTimer = /** @class */ (function () {
        function GTimer() {
            this._enumIdx = 0;
            this._enumCount = 0;
            this._curTime = Date.now();
            this._lastTime = 0;
            this._items = [];
            this._itemPool = [];
        }
        Object.defineProperty(GTimer.prototype, "_enumI", {
            get: function () {
                return this._enumIdx;
            },
            set: function (v) {
                this._enumIdx = v;
            },
            enumerable: true,
            configurable: true
        });
        GTimer.prototype.getItem = function () {
            if (this._itemPool.length)
                return this._itemPool.pop();
            else
                return new TimerItem();
        };
        GTimer.prototype.findItem = function (callback, thisObj) {
            var len = this._items.length;
            for (var i = 0; i < len; i++) {
                var item = this._items[i];
                if (item.callback == callback && item.thisObj == thisObj)
                    return item;
            }
            return null;
        };
        //repeat <= 0 means loop
        GTimer.prototype.add = function (delayInMs, repeat, callback, thisObj, callbackParam) {
            var item = this.findItem(callback, thisObj);
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
        };
        GTimer.prototype.addLoop = function (delayInMs, callback, thisObj, callbackParam) {
            this.add(delayInMs, 0, callback, thisObj, callbackParam);
        };
        GTimer.prototype.callLater = function (callback, thisObj, callbackParam) {
            this.add(1, 1, callback, thisObj, callbackParam);
        };
        GTimer.prototype.callDelay = function (delayInMs, callback, thisObj, callbackParam) {
            this.add(delayInMs, 1, callback, thisObj, callbackParam);
        };
        GTimer.prototype.callBy24Fps = function (callback, thisObj, callbackParam) {
            if (callbackParam === void 0) { callbackParam = null; }
            this.add(GTimer.FPS24, 0, callback, thisObj, callbackParam);
        };
        GTimer.prototype.exists = function (callback, thisObj) {
            var item = this.findItem(callback, thisObj);
            return item != null;
        };
        GTimer.prototype.remove = function (callback, thisObj) {
            var item = this.findItem(callback, thisObj);
            if (item) {
                var i = this._items.indexOf(item);
                this._items.splice(i, 1);
                if (i < this._enumIdx)
                    this._enumIdx--;
                this._enumCount--;
                item.callback = null;
                item.param = null;
                this._itemPool.push(item);
            }
        };
        GTimer.prototype.__timer = function (timeStamp) {
            GTimer.time = timeStamp;
            GTimer.deltaTime = timeStamp - this._lastTime;
            this._lastTime = timeStamp;
            this._enumI = 0;
            this._enumCount = this._items.length;
            while (this._enumI < this._enumCount) {
                var item = this._items[this._enumI];
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
        };
        Object.defineProperty(GTimer.prototype, "ticker", {
            get: function () {
                return this._ticker;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTimer.prototype, "curTime", {
            get: function () {
                return this._curTime;
            },
            enumerable: true,
            configurable: true
        });
        GTimer.prototype.advance = function () {
            this._enumIdx = 0;
            this._enumCount = this._items.length;
            while (this._enumIdx < this._enumCount) {
                var item = this._items[this._enumIdx];
                this._enumIdx++;
                var ms = this._ticker.deltaTime / PIXI.settings.TARGET_FPMS;
                this._curTime += ms;
                if (item.advance(ms)) {
                    if (item.end) {
                        this._enumIdx--;
                        this._enumCount--;
                        this._items.splice(this._enumIdx, 1);
                        this._itemPool.push(item);
                    }
                    if (item.callback) {
                        var args = [ms];
                        if (item.param && item.param instanceof Array)
                            args = item.param.concat(args);
                        else if (item.param !== void 0)
                            args.unshift(item.param);
                        item.callback.apply(item.thisObj, args);
                    }
                    if (item.end)
                        item.callback = item.thisObj = item.param = null;
                }
            }
        };
        GTimer.prototype.setTicker = function (ticker) {
            if (this._ticker && (this._ticker != ticker)) {
                // this._ticker.remove(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL);
                // this._ticker.remove(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH);
                this._ticker.remove(this.advance, this);
            }
            this._ticker = ticker;
            this._ticker.add(this.advance, this, PIXI.UPDATE_PRIORITY.NORMAL);
            //this._ticker.add(this.tickTween, this, PIXI.UPDATE_PRIORITY.HIGH);
            if (!this._ticker.started) {
                this._ticker.start();
            }
        };
        GTimer.FPS24 = 1000 / 24;
        GTimer.deltaTime = 0;
        GTimer.time = 0;
        GTimer.inst = new GTimer();
        return GTimer;
    }());
    fgui.GTimer = GTimer;
    var TimerItem = /** @class */ (function () {
        function TimerItem() {
            this.delay = 0;
            this.counter = 0;
            this.repeat = 0;
        }
        TimerItem.prototype.advance = function (elapsed) {
            if (elapsed === void 0) { elapsed = 0; }
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
            }
            else {
                return false;
            }
        };
        TimerItem.prototype.reset = function () {
            this.callback = null;
            this.thisObj = null;
            this.param = null;
        };
        return TimerItem;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var GTree = /** @class */ (function (_super) {
        __extends(GTree, _super);
        function GTree() {
            var _this = _super.call(this) || this;
            _this._indent = 15;
            _this._rootNode = new fgui.GTreeNode(true);
            _this._rootNode._setTree(_this);
            _this._rootNode.expanded = true;
            return _this;
        }
        Object.defineProperty(GTree.prototype, "rootNode", {
            get: function () {
                return this._rootNode;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTree.prototype, "indent", {
            get: function () {
                return this._indent;
            },
            set: function (value) {
                this._indent = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTree.prototype, "clickToExpand", {
            get: function () {
                return this._clickToExpand;
            },
            set: function (value) {
                this._clickToExpand = value;
            },
            enumerable: true,
            configurable: true
        });
        GTree.prototype.getSelectedNode = function () {
            if (this.selectedIndex != -1)
                return this.getChildAt(this.selectedIndex)._treeNode;
            else
                return null;
        };
        GTree.prototype.getSelectedNodes = function (result) {
            if (!result)
                result = new Array();
            GTree.helperIntList.length = 0;
            _super.prototype.getSelection.call(this, GTree.helperIntList);
            var cnt = GTree.helperIntList.length;
            var ret = new Array();
            for (var i = 0; i < cnt; i++) {
                var node = this.getChildAt(GTree.helperIntList[i])._treeNode;
                ret.push(node);
            }
            return ret;
        };
        GTree.prototype.selectNode = function (node, scrollItToView) {
            var parentNode = node.parent;
            while (parentNode != null && parentNode != this._rootNode) {
                parentNode.expanded = true;
                parentNode = parentNode.parent;
            }
            if (!node._cell)
                return;
            this.addSelection(this.getChildIndex(node._cell), scrollItToView);
        };
        GTree.prototype.unselectNode = function (node) {
            if (!node._cell)
                return;
            this.removeSelection(this.getChildIndex(node._cell));
        };
        GTree.prototype.expandAll = function (folderNode) {
            if (!folderNode)
                folderNode = this._rootNode;
            folderNode.expanded = true;
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node.isFolder)
                    this.expandAll(node);
            }
        };
        GTree.prototype.collapseAll = function (folderNode) {
            if (!folderNode)
                folderNode = this._rootNode;
            if (folderNode != this._rootNode)
                folderNode.expanded = false;
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node.isFolder)
                    this.collapseAll(node);
            }
        };
        GTree.prototype.createCell = function (node) {
            var child = this.getFromPool(node._resURL ? node._resURL : this.defaultItem);
            if (!child)
                throw new Error("cannot create tree node object.");
            child._treeNode = node;
            node._cell = child;
            var indentObj = child.getChild("indent");
            if (indentObj != null)
                indentObj.width = (node.level - 1) * this._indent;
            var cc;
            cc = child.getController("expanded");
            if (cc) {
                cc.on("__stateChanged" /* CHANGED */, this.__expandedStateChanged, this);
                cc.selectedIndex = node.expanded ? 1 : 0;
            }
            cc = child.getController("leaf");
            if (cc)
                cc.selectedIndex = node.isFolder ? 0 : 1;
            if (node.isFolder) {
                child.on(fgui.InteractiveEvents.Down, this.__cellMouseDown, this);
            }
            if (this.treeNodeRender) {
                this.treeNodeRender.call(this.callbackThisObj, node, child);
            }
        };
        GTree.prototype._afterInserted = function (node) {
            if (!node._cell)
                this.createCell(node);
            var index = this.getInsertIndexForNode(node);
            this.addChildAt(node._cell, index);
            if (this.treeNodeRender)
                this.treeNodeRender.call(this.callbackThisObj, node, node._cell);
            if (node.isFolder && node.expanded)
                this.checkChildren(node, index);
        };
        GTree.prototype.getInsertIndexForNode = function (node) {
            var prevNode = node.getPrevSibling();
            if (prevNode == null)
                prevNode = node.parent;
            var insertIndex = this.getChildIndex(prevNode._cell) + 1;
            var myLevel = node.level;
            var cnt = this.numChildren;
            for (var i = insertIndex; i < cnt; i++) {
                var testNode = this.getChildAt(i)._treeNode;
                if (testNode.level <= myLevel)
                    break;
                insertIndex++;
            }
            return insertIndex;
        };
        GTree.prototype._afterRemoved = function (node) {
            this.removeNode(node);
        };
        GTree.prototype._afterExpanded = function (node) {
            if (node == this._rootNode) {
                this.checkChildren(this._rootNode, 0);
                return;
            }
            if (this.treeNodeWillExpand != null)
                this.treeNodeWillExpand.call(this.callbackThisObj, node, true);
            if (node._cell == null)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender.call(this.callbackThisObj, node, node._cell);
            var cc = node._cell.getController("expanded");
            if (cc)
                cc.selectedIndex = 1;
            if (node._cell.parent != null)
                this.checkChildren(node, this.getChildIndex(node._cell));
        };
        GTree.prototype._afterCollapsed = function (node) {
            if (node == this._rootNode) {
                this.checkChildren(this._rootNode, 0);
                return;
            }
            if (this.treeNodeWillExpand)
                this.treeNodeWillExpand.call(this.callbackThisObj, node, false);
            if (node._cell == null)
                return;
            if (this.treeNodeRender)
                this.treeNodeRender.call(this.callbackThisObj, node, node._cell);
            var cc = node._cell.getController("expanded");
            if (cc)
                cc.selectedIndex = 0;
            if (node._cell.parent != null)
                this.hideFolderNode(node);
        };
        GTree.prototype._afterMoved = function (node) {
            var startIndex = this.getChildIndex(node._cell);
            var endIndex;
            if (node.isFolder)
                endIndex = this.getFolderEndIndex(startIndex, node.level);
            else
                endIndex = startIndex + 1;
            var insertIndex = this.getInsertIndexForNode(node);
            var i;
            var cnt = endIndex - startIndex;
            var obj;
            if (insertIndex < startIndex) {
                for (i = 0; i < cnt; i++) {
                    obj = this.getChildAt(startIndex + i);
                    this.setChildIndex(obj, insertIndex + i);
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    obj = this.getChildAt(startIndex);
                    this.setChildIndex(obj, insertIndex);
                }
            }
        };
        GTree.prototype.getFolderEndIndex = function (startIndex, level) {
            var cnt = this.numChildren;
            for (var i = startIndex + 1; i < cnt; i++) {
                var node = this.getChildAt(i)._treeNode;
                if (node.level <= level)
                    return i;
            }
            return cnt;
        };
        GTree.prototype.checkChildren = function (folderNode, index) {
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                index++;
                var node = folderNode.getChildAt(i);
                if (node._cell == null)
                    this.createCell(node);
                if (!node._cell.parent)
                    this.addChildAt(node._cell, index);
                if (node.isFolder && node.expanded)
                    index = this.checkChildren(node, index);
            }
            return index;
        };
        GTree.prototype.hideFolderNode = function (folderNode) {
            var cnt = folderNode.numChildren;
            for (var i = 0; i < cnt; i++) {
                var node = folderNode.getChildAt(i);
                if (node._cell)
                    this.removeChild(node._cell);
                if (node.isFolder && node.expanded)
                    this.hideFolderNode(node);
            }
        };
        GTree.prototype.removeNode = function (node) {
            if (node._cell != null) {
                if (node._cell.parent != null)
                    this.removeChild(node._cell);
                this.returnToPool(node._cell);
                node._cell._treeNode = null;
                node._cell = null;
            }
            if (node.isFolder) {
                var cnt = node.numChildren;
                for (var i = 0; i < cnt; i++) {
                    var node2 = node.getChildAt(i);
                    this.removeNode(node2);
                }
            }
        };
        GTree.prototype.__cellMouseDown = function (evt) {
            var item = fgui.GObject.cast(evt.currentTarget);
            if (!item) {
                return;
            }
            var node = item._treeNode;
            if (!node) {
                return;
            }
            this._expandedStatusInEvt = node.expanded;
        };
        GTree.prototype.__expandedStateChanged = function (cc) {
            var node = cc.parent._treeNode;
            node.expanded = cc.selectedIndex == 1;
        };
        GTree.prototype.setup_beforeAdd = function (buffer, beginPos) {
            _super.prototype.setup_beforeAdd.call(this, buffer, beginPos);
            buffer.seek(beginPos, 9);
            this._indent = buffer.readInt();
            this._clickToExpand = buffer.readByte();
        };
        GTree.prototype.readItems = function (buffer) {
            var cnt;
            var i;
            var nextPos;
            var str;
            var isFolder;
            var lastNode;
            var level;
            var prevLevel = 0;
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                str = buffer.readS();
                if (str == null) {
                    str = this.defaultItem;
                    if (!str) {
                        buffer.position = nextPos;
                        continue;
                    }
                }
                isFolder = buffer.readBool();
                level = buffer.readByte();
                var node = new fgui.GTreeNode(isFolder, str);
                node.expanded = true;
                if (i == 0)
                    this._rootNode.addChild(node);
                else {
                    if (level > prevLevel)
                        lastNode.addChild(node);
                    else if (level < prevLevel) {
                        for (var j = level; j <= prevLevel; j++)
                            lastNode = lastNode.parent;
                        lastNode.addChild(node);
                    }
                    else
                        lastNode.parent.addChild(node);
                }
                lastNode = node;
                prevLevel = level;
                this.setupItem(buffer, node.cell);
                buffer.position = nextPos;
            }
        };
        GTree.helperIntList = new Array();
        return GTree;
    }(fgui.GList));
    fgui.GTree = GTree;
})(fgui || (fgui = {}));

(function (fgui) {
    var GTreeNode = /** @class */ (function () {
        function GTreeNode(hasChild, resURL) {
            this._expanded = false;
            this._level = 0;
            this._resURL = resURL;
            if (hasChild)
                this._children = new Array();
        }
        Object.defineProperty(GTreeNode.prototype, "expanded", {
            get: function () {
                return this._expanded;
            },
            set: function (value) {
                if (this._children == null)
                    return;
                if (this._expanded != value) {
                    this._expanded = value;
                    if (this._tree != null) {
                        if (this._expanded)
                            this._tree._afterExpanded(this);
                        else
                            this._tree._afterCollapsed(this);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "isFolder", {
            get: function () {
                return this._children != null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "parent", {
            get: function () {
                return this._parent;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "text", {
            get: function () {
                if (this._cell != null)
                    return this._cell.text;
                else
                    return null;
            },
            set: function (value) {
                if (this._cell != null)
                    this._cell.text = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "icon", {
            get: function () {
                if (this._cell != null)
                    return this._cell.icon;
                else
                    return null;
            },
            set: function (value) {
                if (this._cell != null)
                    this._cell.icon = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "cell", {
            get: function () {
                return this._cell;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTreeNode.prototype, "level", {
            get: function () {
                return this._level;
            },
            enumerable: true,
            configurable: true
        });
        GTreeNode.prototype._setLevel = function (value) {
            this._level = value;
        };
        GTreeNode.prototype.addChild = function (child) {
            this.addChildAt(child, this._children.length);
            return child;
        };
        GTreeNode.prototype.addChildAt = function (child, index) {
            if (!child)
                throw new Error("child is null");
            var numChildren = this._children.length;
            if (index >= 0 && index <= numChildren) {
                if (child._parent == this) {
                    this.setChildIndex(child, index);
                }
                else {
                    if (child._parent)
                        child._parent.removeChild(child);
                    var cnt = this._children.length;
                    if (index == cnt)
                        this._children.push(child);
                    else
                        this._children.splice(index, 0, child);
                    child._parent = this;
                    child._level = this._level + 1;
                    child._setTree(this._tree);
                    if (this._tree != null && this == this._tree.rootNode || this._cell != null && this._cell.parent != null && this._expanded)
                        this._tree._afterInserted(child);
                }
                return child;
            }
            else {
                throw new RangeError("Invalid child index");
            }
        };
        GTreeNode.prototype.removeChild = function (child) {
            var childIndex = this._children.indexOf(child);
            if (childIndex != -1) {
                this.removeChildAt(childIndex);
            }
            return child;
        };
        GTreeNode.prototype.removeChildAt = function (index) {
            if (index >= 0 && index < this.numChildren) {
                var child = this._children[index];
                this._children.splice(index, 1);
                child._parent = null;
                if (this._tree != null) {
                    child._setTree(null);
                    this._tree._afterRemoved(child);
                }
                return child;
            }
            else {
                throw "Invalid child index";
            }
        };
        GTreeNode.prototype.removeChildren = function (beginIndex, endIndex) {
            if (beginIndex === void 0) { beginIndex = 0; }
            if (endIndex === void 0) { endIndex = -1; }
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;
            for (var i = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex);
        };
        GTreeNode.prototype.getChildAt = function (index) {
            if (index >= 0 && index < this.numChildren)
                return this._children[index];
            else
                throw "Invalid child index";
        };
        GTreeNode.prototype.getChildIndex = function (child) {
            return this._children.indexOf(child);
        };
        GTreeNode.prototype.getPrevSibling = function () {
            if (this._parent == null)
                return null;
            var i = this._parent._children.indexOf(this);
            if (i <= 0)
                return null;
            return this._parent._children[i - 1];
        };
        GTreeNode.prototype.getNextSibling = function () {
            if (this._parent == null)
                return null;
            var i = this._parent._children.indexOf(this);
            if (i < 0 || i >= this._parent._children.length - 1)
                return null;
            return this._parent._children[i + 1];
        };
        GTreeNode.prototype.setChildIndex = function (child, index) {
            var oldIndex = this._children.indexOf(child);
            if (oldIndex == -1)
                throw "Not a child of this container";
            var cnt = this._children.length;
            if (index < 0)
                index = 0;
            else if (index > cnt)
                index = cnt;
            if (oldIndex == index)
                return;
            this._children.splice(oldIndex, 1);
            this._children.splice(index, 0, child);
            if (this._tree != null && this == this._tree.rootNode || this._cell != null && this._cell.parent != null && this._expanded)
                this._tree._afterMoved(child);
        };
        GTreeNode.prototype.swapChildren = function (child1, child2) {
            var index1 = this._children.indexOf(child1);
            var index2 = this._children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw "Not a child of this container";
            this.swapChildrenAt(index1, index2);
        };
        GTreeNode.prototype.swapChildrenAt = function (index1, index2) {
            var child1 = this._children[index1];
            var child2 = this._children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        };
        Object.defineProperty(GTreeNode.prototype, "numChildren", {
            get: function () {
                return this._children.length;
            },
            enumerable: true,
            configurable: true
        });
        GTreeNode.prototype.expandToRoot = function () {
            var p = this;
            while (p) {
                p.expanded = true;
                p = p.parent;
            }
        };
        Object.defineProperty(GTreeNode.prototype, "tree", {
            get: function () {
                return this._tree;
            },
            enumerable: true,
            configurable: true
        });
        GTreeNode.prototype._setTree = function (value) {
            this._tree = value;
            if (this._tree != null && this._tree.treeNodeWillExpand && this._expanded)
                this._tree.treeNodeWillExpand(this, true);
            if (this._children != null) {
                var cnt = this._children.length;
                for (var i = 0; i < cnt; i++) {
                    var node = this._children[i];
                    node._level = this._level + 1;
                    node._setTree(value);
                }
            }
        };
        return GTreeNode;
    }());
    fgui.GTreeNode = GTreeNode;
})(fgui || (fgui = {}));

(function (fgui) {
    var PopupMenu = /** @class */ (function () {
        function PopupMenu(resourceURL) {
            if (resourceURL === void 0) { resourceURL = null; }
            if (!resourceURL) {
                resourceURL = fgui.UIConfig.popupMenu;
                if (!resourceURL)
                    throw new Error("UIConfig.popupMenu not defined");
            }
            this._contentPane = fgui.UIPackage.createObjectFromURL(resourceURL);
            this._contentPane.on("added", this._addedToStage, this);
            this._list = (this._contentPane.getChild("list"));
            this._list.removeChildrenToPool();
            this._list.addRelation(this._contentPane, fgui.RelationType.Width);
            this._list.removeRelation(this._contentPane, fgui.RelationType.Height);
            this._contentPane.addRelation(this._list, fgui.RelationType.Height);
            this._list.on("__itemClick" /* ItemClick */, this._clickItem, this);
        }
        PopupMenu.prototype.dispose = function () {
            fgui.GTimer.inst.remove(this._delayClickItem, this);
            this._list.off("__itemClick" /* ItemClick */, this._clickItem, this);
            this._contentPane.off("added", this._addedToStage, this);
            this._contentPane.dispose();
        };
        PopupMenu.prototype.addItem = function (caption, handler) {
            var item = this._list.addItemFromPool();
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            var c = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        };
        PopupMenu.prototype.addItemAt = function (caption, index, handler) {
            var item = this._list.getFromPool();
            this._list.addChildAt(item, index);
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            var c = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        };
        PopupMenu.prototype.addSeperator = function () {
            if (fgui.UIConfig.popupMenuSeperator == null)
                throw new Error("UIConfig.popupMenuSeperator not defined");
            this._list.addItemFromPool(fgui.UIConfig.popupMenuSeperator);
        };
        PopupMenu.prototype.getItemName = function (index) {
            var item = this._list.getChildAt(index);
            return item.name;
        };
        PopupMenu.prototype.setItemText = function (name, caption) {
            var item = this._list.getChild(name);
            item.title = caption;
        };
        PopupMenu.prototype.setItemVisible = function (name, visible) {
            var item = this._list.getChild(name);
            if (item.visible != visible) {
                item.visible = visible;
                this._list.setBoundsChangedFlag();
            }
        };
        PopupMenu.prototype.setItemGrayed = function (name, grayed) {
            var item = this._list.getChild(name);
            item.grayed = grayed;
        };
        PopupMenu.prototype.setItemCheckable = function (name, checkable) {
            var item = this._list.getChild(name);
            var c = item.getController("checked");
            if (c != null) {
                if (checkable) {
                    if (c.selectedIndex == 0)
                        c.selectedIndex = 1;
                }
                else
                    c.selectedIndex = 0;
            }
        };
        PopupMenu.prototype.setItemChecked = function (name, checked) {
            var item = this._list.getChild(name);
            var c = item.getController("checked");
            if (c != null)
                c.selectedIndex = checked ? 2 : 1;
        };
        PopupMenu.prototype.isItemChecked = function (name) {
            var item = this._list.getChild(name);
            var c = item.getController("checked");
            if (c != null)
                return c.selectedIndex == 2;
            else
                return false;
        };
        PopupMenu.prototype.removeItem = function (name) {
            var item = this._list.getChild(name);
            if (item != null) {
                var index = this._list.getChildIndex(item);
                this._list.removeChildToPoolAt(index);
                return true;
            }
            else
                return false;
        };
        PopupMenu.prototype.clearItems = function () {
            this._list.removeChildrenToPool();
        };
        Object.defineProperty(PopupMenu.prototype, "itemCount", {
            get: function () {
                return this._list.numChildren;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PopupMenu.prototype, "contentPane", {
            get: function () {
                return this._contentPane;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PopupMenu.prototype, "list", {
            get: function () {
                return this._list;
            },
            enumerable: true,
            configurable: true
        });
        PopupMenu.prototype.show = function (target, dir) {
            if (target === void 0) { target = null; }
            var r = target != null ? target.root : fgui.GRoot.inst;
            r.showPopup(this.contentPane, (target instanceof fgui.GRoot) ? null : target, dir);
        };
        PopupMenu.prototype._clickItem = function (evt, itemObject) {
            fgui.GTimer.inst.add(100, 1, this._delayClickItem, this, itemObject);
        };
        PopupMenu.prototype._delayClickItem = function (itemObject) {
            if (!(itemObject instanceof fgui.GButton))
                return;
            if (itemObject.grayed) {
                this._list.selectedIndex = -1;
                return;
            }
            var c = itemObject.getController("checked");
            if (c != null && c.selectedIndex != 0) {
                if (c.selectedIndex == 1)
                    c.selectedIndex = 2;
                else
                    c.selectedIndex = 1;
            }
            var r = this._contentPane.parent;
            if (r)
                r.hidePopup(this.contentPane);
            if (itemObject.data != null)
                itemObject.data.call(null);
            fgui.GTimer.inst.remove(this._delayClickItem, this);
        };
        PopupMenu.prototype._addedToStage = function () {
            this._list.selectedIndex = -1;
            this._list.resizeToFit(100000, 10);
        };
        return PopupMenu;
    }());
    fgui.PopupMenu = PopupMenu;
})(fgui || (fgui = {}));

(function (fgui) {
    var RelationItem = /** @class */ (function () {
        function RelationItem(owner) {
            this._owner = owner;
            this._defs = new Array();
        }
        Object.defineProperty(RelationItem.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(RelationItem.prototype, "target", {
            get: function () {
                return this._target;
            },
            set: function (value) {
                if (this._target != value) {
                    if (this._target)
                        this.releaseRefTarget(this._target);
                    this._target = value;
                    if (this._target)
                        this.addRefTarget(this._target);
                }
            },
            enumerable: true,
            configurable: true
        });
        RelationItem.prototype.add = function (relationType, usePercent) {
            if (relationType == fgui.RelationType.Size) {
                this.add(fgui.RelationType.Width, usePercent);
                this.add(fgui.RelationType.Height, usePercent);
                return;
            }
            var length = this._defs.length;
            for (var i = 0; i < length; i++) {
                var def = this._defs[i];
                if (def.type == relationType)
                    return;
            }
            this.internalAdd(relationType, usePercent);
        };
        RelationItem.prototype.internalAdd = function (relationType, usePercent) {
            if (relationType == fgui.RelationType.Size) {
                this.internalAdd(fgui.RelationType.Width, usePercent);
                this.internalAdd(fgui.RelationType.Height, usePercent);
                return;
            }
            var info = new RelationDef();
            info.percent = usePercent;
            info.type = relationType;
            info.axis = (relationType <= fgui.RelationType.Right_Right || relationType == fgui.RelationType.Width || relationType >= fgui.RelationType.LeftExt_Left && relationType <= fgui.RelationType.RightExt_Right) ? 0 : 1;
            this._defs.push(info);
            //当使用中线关联时，因为需要除以2，很容易因为奇数宽度/高度造成小数点坐标；当使用百分比时，也会造成小数坐标；
            //所以设置了这类关联的对象，自动启用pixelSnapping
            if (usePercent || relationType == fgui.RelationType.Left_Center || relationType == fgui.RelationType.Center_Center || relationType == fgui.RelationType.Right_Center
                || relationType == fgui.RelationType.Top_Middle || relationType == fgui.RelationType.Middle_Middle || relationType == fgui.RelationType.Bottom_Middle)
                this._owner.pixelSnapping = true;
        };
        RelationItem.prototype.remove = function (relationType) {
            if (relationType === void 0) { relationType = 0; }
            if (relationType == fgui.RelationType.Size) {
                this.remove(fgui.RelationType.Width);
                this.remove(fgui.RelationType.Height);
                return;
            }
            var dc = this._defs.length;
            for (var k = 0; k < dc; k++) {
                if (this._defs[k].type == relationType) {
                    this._defs.splice(k, 1);
                    break;
                }
            }
        };
        RelationItem.prototype.copyFrom = function (source) {
            this.target = source.target;
            this._defs.length = 0;
            var length = source._defs.length;
            for (var i = 0; i < length; i++) {
                var info = source._defs[i];
                var info2 = new RelationDef();
                info2.copyFrom(info);
                this._defs.push(info2);
            }
        };
        RelationItem.prototype.dispose = function () {
            if (this._target != null) {
                this.releaseRefTarget(this._target);
                this._target = null;
            }
        };
        Object.defineProperty(RelationItem.prototype, "isEmpty", {
            get: function () {
                return this._defs.length == 0;
            },
            enumerable: true,
            configurable: true
        });
        RelationItem.prototype.applyOnSelfResized = function (dWidth, dHeight, applyPivot) {
            var ox = this._owner.x;
            var oy = this._owner.y;
            var length = this._defs.length;
            for (var i = 0; i < length; i++) {
                var info = this._defs[i];
                switch (info.type) {
                    case fgui.RelationType.Center_Center:
                        this._owner.x -= (0.5 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case fgui.RelationType.Right_Center:
                    case fgui.RelationType.Right_Left:
                    case fgui.RelationType.Right_Right:
                        this._owner.x -= (1 - (applyPivot ? this._owner.pivotX : 0)) * dWidth;
                        break;
                    case fgui.RelationType.Middle_Middle:
                        this._owner.y -= (0.5 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                    case fgui.RelationType.Bottom_Middle:
                    case fgui.RelationType.Bottom_Top:
                    case fgui.RelationType.Bottom_Bottom:
                        this._owner.y -= (1 - (applyPivot ? this._owner.pivotY : 0)) * dHeight;
                        break;
                }
            }
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent != null) {
                    var len = this._owner.parent._transitions.length;
                    if (len > 0) {
                        for (var i = 0; i < len; ++i) {
                            this._owner.parent._transitions[i].updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
            }
        };
        RelationItem.prototype.applyOnXYChanged = function (info, dx, dy) {
            var tmp;
            switch (info.type) {
                case fgui.RelationType.Left_Left:
                case fgui.RelationType.Left_Center:
                case fgui.RelationType.Left_Right:
                case fgui.RelationType.Center_Center:
                case fgui.RelationType.Right_Left:
                case fgui.RelationType.Right_Center:
                case fgui.RelationType.Right_Right:
                    this._owner.x += dx;
                    break;
                case fgui.RelationType.Top_Top:
                case fgui.RelationType.Top_Middle:
                case fgui.RelationType.Top_Bottom:
                case fgui.RelationType.Middle_Middle:
                case fgui.RelationType.Bottom_Top:
                case fgui.RelationType.Bottom_Middle:
                case fgui.RelationType.Bottom_Bottom:
                    this._owner.y += dy;
                    break;
                case fgui.RelationType.Width:
                case fgui.RelationType.Height:
                    break;
                case fgui.RelationType.LeftExt_Left:
                case fgui.RelationType.LeftExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth - dx;
                        this._owner.xMin = tmp + dx;
                    }
                    else
                        this._owner.width = this._owner._rawWidth - dx;
                    break;
                case fgui.RelationType.RightExt_Left:
                case fgui.RelationType.RightExt_Right:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.xMin;
                        this._owner.width = this._owner._rawWidth + dx;
                        this._owner.xMin = tmp;
                    }
                    else
                        this._owner.width = this._owner._rawWidth + dx;
                    break;
                case fgui.RelationType.TopExt_Top:
                case fgui.RelationType.TopExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight - dy;
                        this._owner.yMin = tmp + dy;
                    }
                    else
                        this._owner.height = this._owner._rawHeight - dy;
                    break;
                case fgui.RelationType.BottomExt_Top:
                case fgui.RelationType.BottomExt_Bottom:
                    if (this._owner != this._target.parent) {
                        tmp = this._owner.yMin;
                        this._owner.height = this._owner._rawHeight + dy;
                        this._owner.yMin = tmp;
                    }
                    else
                        this._owner.height = this._owner._rawHeight + dy;
                    break;
            }
        };
        RelationItem.prototype.applyOnSizeChanged = function (info) {
            var pos = 0, pivot = 0, delta = 0;
            var v, tmp;
            if (info.axis == 0) {
                if (this._target != this._owner.parent) {
                    pos = this._target.x;
                    if (this._target.pivotAsAnchor)
                        pivot = this._target.pivotX;
                }
                if (info.percent) {
                    if (this._targetWidth != 0)
                        delta = this._target._width / this._targetWidth;
                }
                else
                    delta = this._target._width - this._targetWidth;
            }
            else {
                if (this._target != this._owner.parent) {
                    pos = this._target.y;
                    if (this._target.pivotAsAnchor)
                        pivot = this._target.pivotY;
                }
                if (info.percent) {
                    if (this._targetHeight != 0)
                        delta = this._target._height / this._targetHeight;
                }
                else
                    delta = this._target._height - this._targetHeight;
            }
            switch (info.type) {
                case fgui.RelationType.Left_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case fgui.RelationType.Left_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Left_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin - pos) * delta;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case fgui.RelationType.Center_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth * 0.5 - pos) * delta - this._owner._rawWidth * 0.5;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Right_Left:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else if (pivot != 0)
                        this._owner.x += delta * (-pivot);
                    break;
                case fgui.RelationType.Right_Center:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Right_Right:
                    if (info.percent)
                        this._owner.xMin = pos + (this._owner.xMin + this._owner._rawWidth - pos) * delta - this._owner._rawWidth;
                    else
                        this._owner.x += delta * (1 - pivot);
                    break;
                case fgui.RelationType.Top_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case fgui.RelationType.Top_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Top_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin - pos) * delta;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case fgui.RelationType.Middle_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight * 0.5 - pos) * delta - this._owner._rawHeight * 0.5;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Bottom_Top:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else if (pivot != 0)
                        this._owner.y += delta * (-pivot);
                    break;
                case fgui.RelationType.Bottom_Middle:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (0.5 - pivot);
                    break;
                case fgui.RelationType.Bottom_Bottom:
                    if (info.percent)
                        this._owner.yMin = pos + (this._owner.yMin + this._owner._rawHeight - pos) * delta - this._owner._rawHeight;
                    else
                        this._owner.y += delta * (1 - pivot);
                    break;
                case fgui.RelationType.Width:
                    if (this._owner._underConstruct && this._owner == this._target.parent)
                        v = this._owner.sourceWidth - this._target.initWidth;
                    else
                        v = this._owner._rawWidth - this._targetWidth;
                    if (info.percent)
                        v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.xMin;
                            this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                            this._owner.xMin = tmp;
                        }
                        else
                            this._owner.setSize(this._target._width + v, this._owner._rawHeight, true);
                    }
                    else
                        this._owner.width = this._target._width + v;
                    break;
                case fgui.RelationType.Height:
                    if (this._owner._underConstruct && this._owner == this._target.parent)
                        v = this._owner.sourceHeight - this._target.initHeight;
                    else
                        v = this._owner._rawHeight - this._targetHeight;
                    if (info.percent)
                        v = v * delta;
                    if (this._target == this._owner.parent) {
                        if (this._owner.pivotAsAnchor) {
                            tmp = this._owner.yMin;
                            this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                            this._owner.yMin = tmp;
                        }
                        else
                            this._owner.setSize(this._owner._rawWidth, this._target._height + v, true);
                    }
                    else
                        this._owner.height = this._target._height + v;
                    break;
                case fgui.RelationType.LeftExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case fgui.RelationType.LeftExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.width = this._owner._rawWidth - v;
                    this._owner.xMin = tmp + v;
                    break;
                case fgui.RelationType.RightExt_Left:
                    tmp = this._owner.xMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                    else
                        v = delta * (-pivot);
                    this._owner.width = this._owner._rawWidth + v;
                    this._owner.xMin = tmp;
                    break;
                case fgui.RelationType.RightExt_Right:
                    tmp = this._owner.xMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.width = pos + this._target._width - this._target._width * pivot +
                                    (this._owner.sourceWidth - pos - this._target.initWidth + this._target.initWidth * pivot) * delta;
                            else
                                this._owner.width = pos + (this._owner._rawWidth - pos) * delta;
                        }
                        else {
                            v = pos + (tmp + this._owner._rawWidth - pos) * delta - (tmp + this._owner._rawWidth);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    }
                    else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.width = this._owner.sourceWidth + (this._target._width - this._target.initWidth) * (1 - pivot);
                            else
                                this._owner.width = this._owner._rawWidth + delta * (1 - pivot);
                        }
                        else {
                            v = delta * (1 - pivot);
                            this._owner.width = this._owner._rawWidth + v;
                            this._owner.xMin = tmp;
                        }
                    }
                    break;
                case fgui.RelationType.TopExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case fgui.RelationType.TopExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp - pos) * delta - tmp;
                    else
                        v = delta * (1 - pivot);
                    this._owner.height = this._owner._rawHeight - v;
                    this._owner.yMin = tmp + v;
                    break;
                case fgui.RelationType.BottomExt_Top:
                    tmp = this._owner.yMin;
                    if (info.percent)
                        v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                    else
                        v = delta * (-pivot);
                    this._owner.height = this._owner._rawHeight + v;
                    this._owner.yMin = tmp;
                    break;
                case fgui.RelationType.BottomExt_Bottom:
                    tmp = this._owner.yMin;
                    if (info.percent) {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.height = pos + this._target._height - this._target._height * pivot +
                                    (this._owner.sourceHeight - pos - this._target.initHeight + this._target.initHeight * pivot) * delta;
                            else
                                this._owner.height = pos + (this._owner._rawHeight - pos) * delta;
                        }
                        else {
                            v = pos + (tmp + this._owner._rawHeight - pos) * delta - (tmp + this._owner._rawHeight);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    }
                    else {
                        if (this._owner == this._target.parent) {
                            if (this._owner._underConstruct)
                                this._owner.height = this._owner.sourceHeight + (this._target._height - this._target.initHeight) * (1 - pivot);
                            else
                                this._owner.height = this._owner._rawHeight + delta * (1 - pivot);
                        }
                        else {
                            v = delta * (1 - pivot);
                            this._owner.height = this._owner._rawHeight + v;
                            this._owner.yMin = tmp;
                        }
                    }
                    break;
            }
        };
        RelationItem.prototype.addRefTarget = function (target) {
            if (target != this._owner.parent)
                target.on("__xyChanged" /* XY_CHANGED */, this.__targetXYChanged, this);
            target.on("__sizeChanged" /* SIZE_CHANGED */, this.__targetSizeChanged, this);
            target.on("__sizeDelayChange" /* SIZE_DELAY_CHANGE */, this.__targetSizeWillChange, this);
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
        };
        RelationItem.prototype.releaseRefTarget = function (target) {
            target.off("__xyChanged" /* XY_CHANGED */, this.__targetXYChanged, this);
            target.off("__sizeChanged" /* SIZE_CHANGED */, this.__targetSizeChanged, this);
            target.off("__sizeDelayChange" /* SIZE_DELAY_CHANGE */, this.__targetSizeWillChange, this);
        };
        RelationItem.prototype.__targetXYChanged = function (evt) {
            if (this._owner.relations.handling != null || this._owner.group != null && this._owner.group._updating) {
                this._targetX = this._target.x;
                this._targetY = this._target.y;
                return;
            }
            this._owner.relations.handling = this._target;
            var ox = this._owner.x;
            var oy = this._owner.y;
            var dx = this._target.x - this._targetX;
            var dy = this._target.y - this._targetY;
            var length = this._defs.length;
            for (var i = 0; i < length; i++) {
                var info = this._defs[i];
                this.applyOnXYChanged(info, dx, dy);
            }
            this._targetX = this._target.x;
            this._targetY = this._target.y;
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent != null) {
                    var len = this._owner.parent._transitions.length;
                    if (len > 0) {
                        for (var i = 0; i < len; ++i) {
                            this._owner.parent._transitions[i].updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
            }
            this._owner.relations.handling = null;
        };
        RelationItem.prototype.__targetSizeChanged = function (evt) {
            if (this._owner.relations.handling != null)
                return;
            this._owner.relations.handling = this._target;
            var ox = this._owner.x;
            var oy = this._owner.y;
            var ow = this._owner._rawWidth;
            var oh = this._owner._rawHeight;
            var length = this._defs.length;
            for (var i = 0; i < length; i++) {
                var info = this._defs[i];
                this.applyOnSizeChanged(info);
            }
            this._targetWidth = this._target._width;
            this._targetHeight = this._target._height;
            if (ox != this._owner.x || oy != this._owner.y) {
                ox = this._owner.x - ox;
                oy = this._owner.y - oy;
                this._owner.updateGearFromRelations(1, ox, oy);
                if (this._owner.parent != null) {
                    var len = this._owner.parent._transitions.length;
                    if (len > 0) {
                        for (var i = 0; i < len; ++i) {
                            this._owner.parent._transitions[i].updateFromRelations(this._owner.id, ox, oy);
                        }
                    }
                }
            }
            if (ow != this._owner._rawWidth || oh != this._owner._rawHeight) {
                ow = this._owner._rawWidth - ow;
                oh = this._owner._rawHeight - oh;
                this._owner.updateGearFromRelations(2, ow, oh);
            }
            this._owner.relations.handling = null;
        };
        RelationItem.prototype.__targetSizeWillChange = function (evt) {
            this._owner.relations.sizeDirty = true;
        };
        return RelationItem;
    }());
    fgui.RelationItem = RelationItem;
    var RelationDef = /** @class */ (function () {
        function RelationDef() {
        }
        RelationDef.prototype.copyFrom = function (source) {
            this.percent = source.percent;
            this.type = source.type;
            this.axis = source.axis;
        };
        return RelationDef;
    }());
    fgui.RelationDef = RelationDef;
})(fgui || (fgui = {}));

(function (fgui) {
    var Relations = /** @class */ (function () {
        function Relations(owner) {
            this._owner = owner;
            this._items = new Array();
        }
        Relations.prototype.add = function (target, relationType, usePercent) {
            if (usePercent === void 0) { usePercent = false; }
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                if (item.target == target) {
                    item.add(relationType, usePercent);
                    return;
                }
            }
            var newItem = new fgui.RelationItem(this._owner);
            newItem.target = target;
            newItem.add(relationType, usePercent);
            this._items.push(newItem);
        };
        Relations.prototype.remove = function (target, relationType) {
            if (relationType === void 0) { relationType = 0; }
            var cnt = this._items.length;
            var i = 0;
            while (i < cnt) {
                var item = this._items[i];
                if (item.target == target) {
                    item.remove(relationType);
                    if (item.isEmpty) {
                        item.dispose();
                        this._items.splice(i, 1);
                        cnt--;
                    }
                    else
                        i++;
                }
                else
                    i++;
            }
        };
        Relations.prototype.contains = function (target) {
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                if (item.target == target)
                    return true;
            }
            return false;
        };
        Relations.prototype.clearFor = function (target) {
            var cnt = this._items.length;
            var i = 0;
            while (i < cnt) {
                var item = this._items[i];
                if (item.target == target) {
                    item.dispose();
                    this._items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
        };
        Relations.prototype.clearAll = function () {
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                item.dispose();
            }
            this._items.length = 0;
        };
        Relations.prototype.copyFrom = function (source) {
            this.clearAll();
            var arr = source._items;
            var length = arr.length;
            for (var i = 0; i < length; i++) {
                var ri = arr[i];
                var item = new fgui.RelationItem(this._owner);
                item.copyFrom(ri);
                this._items.push(item);
            }
        };
        Relations.prototype.dispose = function () {
            this.clearAll();
        };
        Relations.prototype.onOwnerSizeChanged = function (dWidth, dHeight, applyPivot) {
            if (this._items.length == 0)
                return;
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                item.applyOnSelfResized(dWidth, dHeight, applyPivot);
            }
        };
        Relations.prototype.ensureRelationsSizeCorrect = function () {
            if (this._items.length == 0)
                return;
            this.sizeDirty = false;
            var length = this._items.length;
            for (var i = 0; i < length; i++) {
                var item = this._items[i];
                item.target.ensureSizeCorrect();
            }
        };
        Object.defineProperty(Relations.prototype, "empty", {
            get: function () {
                return this._items.length == 0;
            },
            enumerable: true,
            configurable: true
        });
        Relations.prototype.setup = function (buffer, parentToChild) {
            var cnt = buffer.readByte();
            var target;
            for (var i = 0; i < cnt; i++) {
                var targetIndex = buffer.readShort();
                if (targetIndex == -1)
                    target = this._owner.parent;
                else if (parentToChild)
                    target = this._owner.getChildAt(targetIndex);
                else
                    target = this._owner.parent.getChildAt(targetIndex);
                var newItem = new fgui.RelationItem(this._owner);
                newItem.target = target;
                this._items.push(newItem);
                var cnt2 = buffer.readByte();
                for (var j = 0; j < cnt2; j++) {
                    var rt = buffer.readByte();
                    var usePercent = buffer.readBool();
                    newItem.internalAdd(rt, usePercent);
                }
            }
        };
        return Relations;
    }());
    fgui.Relations = Relations;
})(fgui || (fgui = {}));

(function (fgui) {
    var ScrollPane = /** @class */ (function (_super) {
        __extends(ScrollPane, _super);
        function ScrollPane(owner) {
            var _this = _super.call(this) || this;
            _this._isDragging = false;
            _this._owner = owner;
            _this._maskContainer = new fgui.UIContainer(null);
            _this._owner._rootContainer.addChild(_this._maskContainer);
            _this._container = _this._owner._container;
            _this._container.x = 0;
            _this._container.y = 0;
            _this._maskContainer.addChild(_this._container);
            _this._scrollBarMargin = new fgui.utils.Margin();
            _this._scrollType = 0;
            _this._scrollStep = fgui.UIConfig.defaultScrollStep;
            _this._mouseWheelSpeed = _this._scrollStep * 2;
            _this._decelerationRate = fgui.UIConfig.defaultScrollDecelerationRate;
            _this._touchEffect = fgui.UIConfig.defaultScrollTouchEffect;
            _this._bouncebackEffect = false;
            _this._bouncebackEffect = fgui.UIConfig.defaultScrollBounceEffect;
            _this._maskContainer.scrollRect = new PIXI.Rectangle();
            _this._scrollBarVisible = true;
            _this._mouseWheelEnabled = true;
            _this._xPos = 0;
            _this._yPos = 0;
            _this._aniFlag = 0;
            _this._footerLockedSize = 0;
            _this._headerLockedSize = 0;
            _this._viewSize = new PIXI.Point();
            _this._contentSize = new PIXI.Point();
            _this._pageSize = new PIXI.Point(1, 1);
            _this._overlapSize = new PIXI.Point();
            _this._tweening = 0;
            _this._tweenTime = new PIXI.Point();
            _this._tweenStart = new PIXI.Point();
            _this._tweenDuration = new PIXI.Point();
            _this._tweenChange = new PIXI.Point();
            _this._velocity = new PIXI.Point();
            _this._containerPos = new PIXI.Point();
            _this._beginTouchPos = new PIXI.Point();
            _this._lastTouchPos = new PIXI.Point();
            _this._lastTouchGlobalPos = new PIXI.Point();
            var res;
            _this._mouseWheelEnabled = false;
            if (_this._header != null || _this._footer != null)
                _this._refreshBarAxis = (_this._scrollType == fgui.ScrollType.Both || _this._scrollType == fgui.ScrollType.Vertical) ? "y" : "x";
            _this.setSize(owner.width, owner.height);
            _this._owner.on(fgui.InteractiveEvents.Over, _this._rollOver, _this);
            _this._owner.on(fgui.InteractiveEvents.Out, _this._rollOut, _this);
            _this._owner.on(fgui.InteractiveEvents.Down, _this._mouseDown, _this);
            _this._owner.on("__mouseWheel" /* MOUSE_WHEEL */, _this._mouseWheel, _this);
            return _this;
        }
        ScrollPane.prototype.setup = function (buffer) {
            this._scrollType = buffer.readByte();
            var scrollBarDisplay = buffer.readByte();
            var flags = buffer.readInt();
            if (buffer.readBool()) {
                this._scrollBarMargin.top = buffer.readInt();
                this._scrollBarMargin.bottom = buffer.readInt();
                this._scrollBarMargin.left = buffer.readInt();
                this._scrollBarMargin.right = buffer.readInt();
            }
            var vtScrollBarRes = buffer.readS();
            var hzScrollBarRes = buffer.readS();
            var headerRes = buffer.readS();
            var footerRes = buffer.readS();
            this._displayOnLeft = (flags & 1) != 0;
            this._snapToItem = (flags & 2) != 0;
            this._displayInDemand = (flags & 4) != 0;
            this._pageMode = (flags & 8) != 0;
            if (flags & 16)
                this._touchEffect = true;
            else if (flags & 32)
                this._touchEffect = false;
            else
                this._touchEffect = fgui.UIConfig.defaultScrollTouchEffect;
            if (flags & 64)
                this._bouncebackEffect = true;
            else if (flags & 128)
                this._bouncebackEffect = false;
            else
                this._bouncebackEffect = fgui.UIConfig.defaultScrollBounceEffect;
            this._inertiaDisabled = (flags & 256) != 0;
            if ((flags & 512) == 0)
                this._maskContainer.scrollRect = new PIXI.Rectangle();
            this._floating = (flags & 1024) != 0;
            if (scrollBarDisplay == fgui.ScrollBarDisplayType.Default)
                scrollBarDisplay = fgui.UIConfig.defaultScrollBarDisplay;
            if (scrollBarDisplay != fgui.ScrollBarDisplayType.Hidden) {
                if (this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Vertical) {
                    var res = vtScrollBarRes ? vtScrollBarRes : fgui.UIConfig.verticalScrollBar;
                    if (res) {
                        this._vtScrollBar = (fgui.UIPackage.createObjectFromURL(res));
                        if (!this._vtScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._vtScrollBar.setScrollPane(this, true);
                        this._owner._rootContainer.addChild(this._vtScrollBar.displayObject);
                    }
                }
                if (this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Horizontal) {
                    var res = hzScrollBarRes ? hzScrollBarRes : fgui.UIConfig.horizontalScrollBar;
                    if (res) {
                        this._hzScrollBar = (fgui.UIPackage.createObjectFromURL(res));
                        if (!this._hzScrollBar)
                            throw "cannot create scrollbar from " + res;
                        this._hzScrollBar.setScrollPane(this, false);
                        this._owner._rootContainer.addChild(this._hzScrollBar.displayObject);
                    }
                }
                this._scrollBarDisplayAuto = scrollBarDisplay == fgui.ScrollBarDisplayType.Auto;
                if (this._scrollBarDisplayAuto) {
                    if (this._vtScrollBar)
                        this._vtScrollBar.displayObject.visible = false;
                    if (this._hzScrollBar)
                        this._hzScrollBar.displayObject.visible = false;
                }
            }
            if (headerRes) {
                this._header = (fgui.UIPackage.createObjectFromURL(headerRes));
                if (this._header == null)
                    throw "cannot create scrollPane header from " + headerRes;
            }
            if (footerRes) {
                this._footer = (fgui.UIPackage.createObjectFromURL(footerRes));
                if (this._footer == null)
                    throw "cannot create scrollPane footer from " + footerRes;
            }
            if (this._header != null || this._footer != null)
                this._refreshBarAxis = (this._scrollType == fgui.ScrollType.Both || this._scrollType == fgui.ScrollType.Vertical) ? "y" : "x";
            this.setSize(this._owner.width, this._owner.height);
        };
        ScrollPane.prototype.dispose = function () {
            if (this._tweening != 0)
                fgui.GTimer.inst.remove(this.tweenUpdate, this);
            this._pageController = null;
            if (this._hzScrollBar != null)
                this._hzScrollBar.dispose();
            if (this._vtScrollBar != null)
                this._vtScrollBar.dispose();
            if (this._header != null)
                this._header.dispose();
            if (this._footer != null)
                this._footer.dispose();
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._mouseMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._mouseUp, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Click, this._click, this);
            this._owner.off(fgui.InteractiveEvents.Over, this._rollOver, this);
            this._owner.off(fgui.InteractiveEvents.Out, this._rollOut, this);
            this._owner.off(fgui.InteractiveEvents.Down, this._mouseDown, this);
            this._owner.off("__mouseWheel" /* MOUSE_WHEEL */, this._mouseWheel, this);
        };
        Object.defineProperty(ScrollPane.prototype, "owner", {
            get: function () {
                return this._owner;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "horzScrollBar", {
            get: function () {
                return this._hzScrollBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "hzScrollBar", {
            get: function () {
                return this._hzScrollBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "vertScrollBar", {
            get: function () {
                return this._vtScrollBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "vtScrollBar", {
            get: function () {
                return this._vtScrollBar;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "header", {
            get: function () {
                return this._header;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "footer", {
            get: function () {
                return this._footer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "bouncebackEffect", {
            get: function () {
                return this._bouncebackEffect;
            },
            set: function (sc) {
                this._bouncebackEffect = sc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "touchEffect", {
            get: function () {
                return this._touchEffect;
            },
            set: function (sc) {
                this._touchEffect = sc;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "scrollSpeed", {
            get: function () {
                return this._scrollStep;
            },
            set: function (val) {
                this._scrollStep = val;
                if (this._scrollStep == 0)
                    this._scrollStep = fgui.UIConfig.defaultScrollStep;
                this._mouseWheelSpeed = this._scrollStep * 2;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "snapToItem", {
            get: function () {
                return this._snapToItem;
            },
            set: function (value) {
                this._snapToItem = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "mouseWheelEnabled", {
            get: function () {
                return this._mouseWheelEnabled;
            },
            set: function (value) {
                this._mouseWheelEnabled = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "decelerationRate", {
            get: function () {
                return this._decelerationRate;
            },
            set: function (value) {
                this._decelerationRate = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "percX", {
            get: function () {
                return this._overlapSize.x == 0 ? 0 : this._xPos / this._overlapSize.x;
            },
            set: function (value) {
                this.setPercX(value, false);
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.setPercX = function (value, ani) {
            if (ani === void 0) { ani = false; }
            this._owner.ensureBoundsCorrect();
            this.setPosX(this._overlapSize.x * fgui.utils.NumberUtil.clamp01(value), ani);
        };
        Object.defineProperty(ScrollPane.prototype, "percY", {
            get: function () {
                return this._overlapSize.y == 0 ? 0 : this._yPos / this._overlapSize.y;
            },
            set: function (value) {
                this.setPercY(value, false);
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.setPercY = function (value, ani) {
            if (ani === void 0) { ani = false; }
            this._owner.ensureBoundsCorrect();
            this.setPosY(this._overlapSize.y * fgui.utils.NumberUtil.clamp01(value), ani);
        };
        Object.defineProperty(ScrollPane.prototype, "posX", {
            get: function () {
                return this._xPos;
            },
            set: function (value) {
                this.setPosX(value, false);
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.setPosX = function (value, ani) {
            if (ani === void 0) { ani = false; }
            this._owner.ensureBoundsCorrect();
            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "x");
            value = fgui.utils.NumberUtil.clamp(value, 0, this._overlapSize.x);
            if (value != this._xPos) {
                this._xPos = value;
                this.posChanged(ani);
            }
        };
        Object.defineProperty(ScrollPane.prototype, "posY", {
            get: function () {
                return this._yPos;
            },
            set: function (value) {
                this.setPosY(value, false);
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.setPosY = function (value, ani) {
            if (ani === void 0) { ani = false; }
            this._owner.ensureBoundsCorrect();
            if (this._loop == 1)
                value = this.loopCheckingNewPos(value, "y");
            value = fgui.utils.NumberUtil.clamp(value, 0, this._overlapSize.y);
            if (value != this._yPos) {
                this._yPos = value;
                this.posChanged(ani);
            }
        };
        Object.defineProperty(ScrollPane.prototype, "contentWidth", {
            get: function () {
                return this._contentSize.x;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "contentHeight", {
            get: function () {
                return this._contentSize.y;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "viewWidth", {
            get: function () {
                return this._viewSize.x;
            },
            set: function (value) {
                value = value + this._owner.margin.left + this._owner.margin.right;
                if (this._vtScrollBar != null)
                    value += this._vtScrollBar.width;
                this._owner.width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "viewHeight", {
            get: function () {
                return this._viewSize.y;
            },
            set: function (value) {
                value = value + this._owner.margin.top + this._owner.margin.bottom;
                if (this._hzScrollBar != null)
                    value += this._hzScrollBar.height;
                this._owner.height = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "currentPageX", {
            get: function () {
                if (!this._pageMode)
                    return 0;
                var page = Math.floor(this._xPos / this._pageSize.x);
                if (this._xPos - page * this._pageSize.x > this._pageSize.x * 0.5)
                    page++;
                return page;
            },
            set: function (value) {
                if (this._pageMode && this._overlapSize.x > 0)
                    this.setPosX(value * this._pageSize.x, false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "currentPageY", {
            get: function () {
                if (!this._pageMode)
                    return 0;
                var page = Math.floor(this._yPos / this._pageSize.y);
                if (this._yPos - page * this._pageSize.y > this._pageSize.y * 0.5)
                    page++;
                return page;
            },
            set: function (value) {
                if (this._pageMode && this._overlapSize.y > 0)
                    this.setPosY(value * this._pageSize.y, false);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "isBottomMost", {
            get: function () {
                return this._yPos == this._overlapSize.y || this._overlapSize.y == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "isRightMost", {
            get: function () {
                return this._xPos == this._overlapSize.x || this._overlapSize.x == 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "pageController", {
            get: function () {
                return this._pageController;
            },
            set: function (value) {
                this._pageController = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "scrollingPosX", {
            get: function () {
                return fgui.utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ScrollPane.prototype, "scrollingPosY", {
            get: function () {
                return fgui.utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y);
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.scrollTop = function (ani) {
            if (ani === void 0) { ani = false; }
            this.setPercY(0, ani);
        };
        ScrollPane.prototype.scrollBottom = function (ani) {
            if (ani === void 0) { ani = false; }
            this.setPercY(1, ani);
        };
        ScrollPane.prototype.scrollUp = function (ratio, ani) {
            if (ratio === void 0) { ratio = 1; }
            if (ani === void 0) { ani = false; }
            if (this._pageMode)
                this.setPosY(this._yPos - this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos - this._scrollStep * ratio, ani);
            ;
        };
        ScrollPane.prototype.scrollDown = function (ratio, ani) {
            if (ratio === void 0) { ratio = 1; }
            if (ani === void 0) { ani = false; }
            if (this._pageMode)
                this.setPosY(this._yPos + this._pageSize.y * ratio, ani);
            else
                this.setPosY(this._yPos + this._scrollStep * ratio, ani);
        };
        ScrollPane.prototype.scrollLeft = function (ratio, ani) {
            if (ratio === void 0) { ratio = 1; }
            if (ani === void 0) { ani = false; }
            if (this._pageMode)
                this.setPosX(this._xPos - this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos - this._scrollStep * ratio, ani);
        };
        ScrollPane.prototype.scrollRight = function (ratio, ani) {
            if (ratio === void 0) { ratio = 1; }
            if (ani === void 0) { ani = false; }
            if (this._pageMode)
                this.setPosX(this._xPos + this._pageSize.x * ratio, ani);
            else
                this.setPosX(this._xPos + this._scrollStep * ratio, ani);
        };
        Object.defineProperty(ScrollPane.prototype, "scrollStep", {
            get: function () {
                return this._scrollStep;
            },
            set: function (v) {
                this._scrollStep = v;
                if (this._scrollStep == 0) {
                    this._scrollStep = fgui.UIConfig.defaultScrollStep;
                }
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.scrollToView = function (target, ani, snapToFirst) {
            if (ani === void 0) { ani = false; }
            if (snapToFirst === void 0) { snapToFirst = false; }
            this._owner.ensureBoundsCorrect();
            if (this._needRefresh)
                this.refresh();
            var rect;
            if (target instanceof fgui.GObject) {
                if (target.parent != this._owner) {
                    target.parent.localToGlobalRect(target.x, target.y, target.width, target.height, ScrollPane.sHelperRect);
                    rect = this._owner.globalToLocalRect(ScrollPane.sHelperRect.x, ScrollPane.sHelperRect.y, ScrollPane.sHelperRect.width, ScrollPane.sHelperRect.height, ScrollPane.sHelperRect);
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
                rect = target;
            if (this._overlapSize.y > 0) {
                var bottom = this._yPos + this._viewSize.y;
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
                var right = this._xPos + this._viewSize.x;
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
        };
        ScrollPane.prototype.isChildInView = function (obj) {
            if (this._overlapSize.y > 0) {
                var dist = obj.y + this._container.y;
                if (dist < -obj.height || dist > this._viewSize.y)
                    return false;
            }
            if (this._overlapSize.x > 0) {
                dist = obj.x + this._container.x;
                if (dist < -obj.width || dist > this._viewSize.x)
                    return false;
            }
            return true;
        };
        ScrollPane.prototype.cancelDragging = function () {
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._mouseMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._mouseUp, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Click, this._click, this);
            if (ScrollPane.draggingPane == this)
                ScrollPane.draggingPane = null;
            ScrollPane._gestureFlag = 0;
            this._isDragging = false;
            this._maskContainer.interactive = true;
        };
        Object.defineProperty(ScrollPane.prototype, "isDragging", {
            get: function () {
                return this._isDragging;
            },
            enumerable: true,
            configurable: true
        });
        ScrollPane.prototype.lockHeader = function (size) {
            if (this._headerLockedSize == size)
                return;
            this._headerLockedSize = size;
            if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] >= 0) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                this._tweenChange[this._refreshBarAxis] = this._headerLockedSize - this._tweenStart[this._refreshBarAxis];
                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this._tweenTime.set(0, 0);
                this._tweening = 2;
                fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        };
        ScrollPane.prototype.lockFooter = function (size) {
            if (this._footerLockedSize == size)
                return;
            this._footerLockedSize = size;
            if (!this._refreshEventDispatching && this._container[this._refreshBarAxis] <= -this._overlapSize[this._refreshBarAxis]) {
                this._tweenStart.set(this._container.x, this._container.y);
                this._tweenChange.set(0, 0);
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                this._tweenChange[this._refreshBarAxis] = -max - this._tweenStart[this._refreshBarAxis];
                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
                this._tweenTime.set(0, 0);
                this._tweening = 2;
                fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
            }
        };
        /**
         * @internal
         */
        ScrollPane.prototype.onOwnerSizeChanged = function () {
            this.setSize(this._owner.width, this._owner.height);
            this.posChanged(false);
        };
        /**
         * @internal
         */
        ScrollPane.prototype.handleControllerChanged = function (c) {
            if (this._pageController == c) {
                if (this._scrollType == fgui.ScrollType.Horizontal)
                    this.currentPageX = c.selectedIndex;
                else
                    this.currentPageY = c.selectedIndex;
            }
        };
        ScrollPane.prototype.updatePageController = function () {
            if (this._pageController != null && !this._pageController.changing) {
                var index = void 0;
                if (this._scrollType == fgui.ScrollType.Horizontal)
                    index = this.currentPageX;
                else
                    index = this.currentPageY;
                if (index < this._pageController.pageCount) {
                    var c = this._pageController;
                    this._pageController = null; //prevent from handleControllerChanged calling
                    c.selectedIndex = index;
                    this._pageController = c;
                }
            }
        };
        /**
         * @internal
         */
        ScrollPane.prototype.adjustMaskContainer = function () {
            var mx, my;
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
        };
        ScrollPane.prototype.setSize = function (width, height) {
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
        };
        ScrollPane.prototype.setContentSize = function (w, h) {
            if (this._contentSize.x == w && this._contentSize.y == h)
                return;
            this._contentSize.x = w;
            this._contentSize.y = h;
            this.handleSizeChanged();
        };
        /**
         * @internal
         */
        ScrollPane.prototype.changeContentSizeOnScrolling = function (deltaWidth, deltaHeight, deltaPosX, deltaPosY) {
            var isRightmost = this._xPos == this._overlapSize.x;
            var isBottom = this._yPos == this._overlapSize.y;
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
        };
        ScrollPane.prototype.handleSizeChanged = function (onScrolling) {
            if (onScrolling === void 0) { onScrolling = false; }
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
            var rect = this._maskContainer.scrollRect;
            if (rect) {
                rect.width = this._viewSize.x;
                rect.height = this._viewSize.y;
                this._maskContainer.scrollRect = rect;
            }
            if (this._scrollType == fgui.ScrollType.Horizontal || this._scrollType == fgui.ScrollType.Both)
                this._overlapSize.x = Math.ceil(Math.max(0, this._contentSize.x - this._viewSize.x));
            else
                this._overlapSize.x = 0;
            if (this._scrollType == fgui.ScrollType.Vertical || this._scrollType == fgui.ScrollType.Both)
                this._overlapSize.y = Math.ceil(Math.max(0, this._contentSize.y - this._viewSize.y));
            else
                this._overlapSize.y = 0;
            //bounds checking
            this._xPos = fgui.utils.NumberUtil.clamp(this._xPos, 0, this._overlapSize.x);
            this._yPos = fgui.utils.NumberUtil.clamp(this._yPos, 0, this._overlapSize.y);
            if (this._refreshBarAxis != null) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (max == 0)
                    max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                else
                    max += this._footerLockedSize;
                if (this._refreshBarAxis == "x") {
                    this._container.position.set(fgui.utils.NumberUtil.clamp(this._container.x, -max, this._headerLockedSize), fgui.utils.NumberUtil.clamp(this._container.y, -this._overlapSize.y, 0));
                }
                else {
                    this._container.position.set(fgui.utils.NumberUtil.clamp(this._container.x, -this._overlapSize.x, 0), fgui.utils.NumberUtil.clamp(this._container.y, -max, this._headerLockedSize));
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
                this._container.position.set(fgui.utils.NumberUtil.clamp(this._container.x, -this._overlapSize.x, 0), fgui.utils.NumberUtil.clamp(this._container.y, -this._overlapSize.y, 0));
            }
            this.syncScrollBar();
            this.checkRefreshBar();
            if (this._pageMode)
                this.updatePageController();
        };
        ScrollPane.prototype.posChanged = function (ani) {
            if (this._aniFlag == 0)
                this._aniFlag = ani ? 1 : -1;
            else if (this._aniFlag == 1 && !ani)
                this._aniFlag = -1;
            this._needRefresh = true;
            fgui.GTimer.inst.callLater(this.refresh, this);
        };
        ScrollPane.prototype.refresh = function () {
            this._needRefresh = false;
            fgui.GTimer.inst.remove(this.refresh, this);
            if (this._pageMode || this._snapToItem) {
                ScrollPane.sEndPos.set(-this._xPos, -this._yPos);
                this.alignPosition(ScrollPane.sEndPos, false);
                this._xPos = -ScrollPane.sEndPos.x;
                this._yPos = -ScrollPane.sEndPos.y;
            }
            this.refresh2();
            //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            this.emit("__scroll" /* SCROLL */, this);
            if (this._needRefresh) { //developer might modify position in the callback, so here refresh again to avoid flickering
                this._needRefresh = false;
                fgui.GTimer.inst.remove(this.refresh, this);
                this.refresh2();
            }
            this.syncScrollBar();
            this._aniFlag = 0;
        };
        ScrollPane.prototype.refresh2 = function () {
            if (this._aniFlag == 1 && !this._isDragging) {
                var posX = void 0;
                var posY = void 0;
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
                    fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
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
        };
        ScrollPane.prototype.syncScrollBar = function (end) {
            if (end === void 0) { end = false; }
            if (this._vtScrollBar != null) {
                this._vtScrollBar.scrollPerc = this._overlapSize.y == 0 ? 0 : fgui.utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y) / this._overlapSize.y;
                if (this._scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }
            if (this._hzScrollBar != null) {
                this._hzScrollBar.scrollPerc = this._overlapSize.x == 0 ? 0 : fgui.utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x) / this._overlapSize.x;
                if (this._scrollBarDisplayAuto)
                    this.showScrollBar(!end);
            }
            if (end)
                this._maskContainer.interactive = true;
        };
        ScrollPane.prototype._mouseDown = function (e) {
            if (!this._touchEffect)
                return;
            if (this._tweening != 0) {
                this.killTween();
                this._isDragging = true;
            }
            else
                this._isDragging = false;
            var globalMouse = PIXI.utils.isMobile.any ?
                this._owner.globalToLocal(e.data.global.x, e.data.global.y)
                : this._owner.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            this._containerPos.set(this._container.x, this._container.y);
            this._beginTouchPos.copyFrom(globalMouse);
            this._lastTouchPos.copyFrom(globalMouse);
            this._lastTouchGlobalPos.copyFrom(globalMouse);
            this._isHoldAreaDone = false;
            this._velocity.set(0, 0);
            this._velocityScale = 1;
            this._lastMoveTime = fgui.GTimer.inst.curTime / 1000;
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Move, this._mouseMove, this);
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Up, this._mouseUp, this);
            fgui.GRoot.inst.nativeStage.on(fgui.InteractiveEvents.Click, this._click, this);
        };
        ScrollPane.prototype._mouseMove = function () {
            if (!this._touchEffect)
                return;
            if (ScrollPane.draggingPane != null && ScrollPane.draggingPane != this || fgui.GObject.draggingObject != null)
                return;
            var sensitivity = fgui.UIConfig.touchScrollSensitivity;
            var globalMouse = this._owner.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY, ScrollPane.sHelperPoint);
            var diff, diff2;
            var sv, sh;
            if (this._scrollType == fgui.ScrollType.Vertical) {
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
            else if (this._scrollType == fgui.ScrollType.Horizontal) {
                if (!this._isHoldAreaDone) {
                    ScrollPane._gestureFlag |= 2; //gesture on horz dir is being observed
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
                ScrollPane._gestureFlag = 3; //both
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
            var newPosX = Math.floor(this._containerPos.x + globalMouse.x - this._beginTouchPos.x);
            var newPosY = Math.floor(this._containerPos.y + globalMouse.y - this._beginTouchPos.y);
            if (sv) {
                if (newPosY > 0) {
                    if (!this._bouncebackEffect)
                        this._container.y = 0;
                    else if (this._header != null && this._header.height != 0) //TODO: height -> maxHeight
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._header.height));
                    else
                        this._container.y = Math.floor(Math.min(newPosY * 0.5, this._viewSize.y * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosY < -this._overlapSize.y) {
                    if (!this._bouncebackEffect)
                        this._container.y = -this._overlapSize.y;
                    else if (this._footer != null && this._footer.height > 0) //TODO: height -> maxHeight
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
                    else if (this._header != null && this._header.width != 0) //TODO: width -> maxWidth
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._header.width));
                    else
                        this._container.x = Math.floor(Math.min(newPosX * 0.5, this._viewSize.x * ScrollPane.PULL_DIST_RATIO));
                }
                else if (newPosX < 0 - this._overlapSize.x) {
                    if (!this._bouncebackEffect)
                        this._container.x = -this._overlapSize.x;
                    else if (this._footer != null && this._footer.width > 0) //TODO: width -> maxWidth
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._footer.width) - this._overlapSize.x);
                    else
                        this._container.x = Math.floor(Math.max((newPosX + this._overlapSize.x) * 0.5, -this._viewSize.x * ScrollPane.PULL_DIST_RATIO) - this._overlapSize.x);
                }
                else
                    this._container.x = newPosX;
            }
            //update acceleration
            var frameRate = fgui.GRoot.inst.applicationContext.ticker.FPS;
            var now = fgui.GTimer.inst.curTime / 1000;
            var deltaTime = Math.max(now - this._lastMoveTime, 1 / frameRate);
            var deltaPositionX = globalMouse.x - this._lastTouchPos.x;
            var deltaPositionY = globalMouse.y - this._lastTouchPos.y;
            if (!sh)
                deltaPositionX = 0;
            if (!sv)
                deltaPositionY = 0;
            if (deltaTime != 0) {
                var elapsed = deltaTime * frameRate - 1;
                if (elapsed > 1) {
                    var factor = Math.pow(0.833, elapsed);
                    this._velocity.x = this._velocity.x * factor;
                    this._velocity.y = this._velocity.y * factor;
                }
                this._velocity.x = fgui.utils.NumberUtil.lerp(this._velocity.x, deltaPositionX * 60 / frameRate / deltaTime, deltaTime * 10);
                this._velocity.y = fgui.utils.NumberUtil.lerp(this._velocity.y, deltaPositionY * 60 / frameRate / deltaTime, deltaTime * 10);
            }
            //in the inertia scrolling we need the offset value to screen space, so here we need to reocrd the offset ratio
            var deltaGlobalPositionX = this._lastTouchGlobalPos.x - globalMouse.x;
            var deltaGlobalPositionY = this._lastTouchGlobalPos.y - globalMouse.y;
            if (deltaPositionX != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionX / deltaPositionX);
            else if (deltaPositionY != 0)
                this._velocityScale = Math.abs(deltaGlobalPositionY / deltaPositionY);
            this._lastTouchPos.copyFrom(globalMouse);
            this._lastTouchGlobalPos.copyFrom(globalMouse);
            this._lastMoveTime = now;
            //update position
            if (this._overlapSize.x > 0)
                this._xPos = fgui.utils.NumberUtil.clamp(-this._container.x, 0, this._overlapSize.x);
            if (this._overlapSize.y > 0)
                this._yPos = fgui.utils.NumberUtil.clamp(-this._container.y, 0, this._overlapSize.y);
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
            this.emit("__scroll" /* SCROLL */, this);
            //Events.dispatch(Events.SCROLL, this._owner.displayObject);
        };
        ScrollPane.prototype._mouseUp = function () {
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this._mouseMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this._mouseUp, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Click, this._click, this);
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
            var flag = false;
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
                if (this._tweenChange.x < -fgui.UIConfig.touchDragSensitivity || this._tweenChange.y < -fgui.UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this.emit("__pullDownRelease" /* PULL_DOWN_RELEASE */);
                    //Events.dispatch(Events.PULLthis._DOWNthis._RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }
                else if (this._tweenChange.x > fgui.UIConfig.touchDragSensitivity || this._tweenChange.y > fgui.UIConfig.touchDragSensitivity) {
                    this._refreshEventDispatching = true;
                    this.emit("__pullUpRelease" /* PULL_UP_RELEASE */);
                    //Events.dispatch(Events.PULLthis._UPthis._RELEASE, this._owner.displayObject);
                    this._refreshEventDispatching = false;
                }
                if (this._headerLockedSize > 0 && ScrollPane.sEndPos[this._refreshBarAxis] == 0) {
                    ScrollPane.sEndPos[this._refreshBarAxis] = this._headerLockedSize;
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                }
                else if (this._footerLockedSize > 0 && ScrollPane.sEndPos[this._refreshBarAxis] == -this._overlapSize[this._refreshBarAxis]) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    ScrollPane.sEndPos[this._refreshBarAxis] = -max;
                    this._tweenChange.x = ScrollPane.sEndPos.x - this._tweenStart.x;
                    this._tweenChange.y = ScrollPane.sEndPos.y - this._tweenStart.y;
                }
                this._tweenDuration.set(ScrollPane.TWEEN_DEFAULT_DURATION, ScrollPane.TWEEN_DEFAULT_DURATION);
            }
            else {
                if (!this._inertiaDisabled) {
                    var frameRate = fgui.GRoot.inst.applicationContext.ticker.FPS;
                    var elapsed = (fgui.GTimer.inst.curTime / 1000 - this._lastMoveTime) * frameRate - 1;
                    if (elapsed > 1) {
                        var factor = Math.pow(0.833, elapsed);
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
            fgui.GTimer.inst.addLoop(1, this.tweenUpdate, this);
        };
        ScrollPane.prototype._click = function () {
            this._isDragging = false;
        };
        ScrollPane.prototype._mouseWheel = function (evt) {
            if (!this._mouseWheelEnabled)
                return;
            var delta = evt.delta > 0 ? -1 : (evt.delta < 0 ? 1 : 0);
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
        };
        ScrollPane.prototype._rollOver = function () {
            this.showScrollBar(true);
        };
        ScrollPane.prototype._rollOut = function () {
            this.showScrollBar(false);
        };
        ScrollPane.prototype.showScrollBar = function (visible) {
            if (visible) {
                fgui.GTimer.inst.remove(this.setScrollBarVisible, this);
                this.setScrollBarVisible(true);
            }
            else
                fgui.GTimer.inst.add(500, 1, this.setScrollBarVisible, this, visible);
        };
        ScrollPane.prototype.setScrollBarVisible = function (visible) {
            this._scrollBarVisible = visible && this._viewSize.x > 0 && this._viewSize.y > 0;
            if (this._vtScrollBar)
                this._vtScrollBar.displayObject.visible = this._scrollBarVisible && !this._vScrollNone;
            if (this._hzScrollBar)
                this._hzScrollBar.displayObject.visible = this._scrollBarVisible && !this._hScrollNone;
        };
        ScrollPane.prototype.getLoopPartSize = function (division, axis) {
            var pad = 0;
            if (this._owner instanceof fgui.GList)
                pad = axis == "x" ? this._owner.columnGap : this._owner.lineGap;
            return (this._contentSize[axis] + pad) / division;
        };
        ScrollPane.prototype.loopCheckingCurrent = function () {
            var changed = false;
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
        };
        ScrollPane.prototype.loopCheckingTarget = function (endPos) {
            if (this._loop == 1)
                this.loopCheckingTarget2(endPos, "x");
            if (this._loop == 2)
                this.loopCheckingTarget2(endPos, "y");
        };
        ScrollPane.prototype.loopCheckingTarget2 = function (endPos, axis) {
            var halfSize;
            var tmp;
            if (endPos[axis] > 0) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this._tweenStart[axis] - halfSize;
                if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                    endPos[axis] -= halfSize;
                    this._tweenStart[axis] = tmp;
                }
            }
            else if (endPos[axis] < -this._overlapSize[axis]) {
                halfSize = this.getLoopPartSize(2, axis);
                tmp = this._tweenStart[axis] + halfSize;
                if (tmp <= 0 && tmp >= -this._overlapSize[axis]) {
                    endPos[axis] += halfSize;
                    this._tweenStart[axis] = tmp;
                }
            }
        };
        ScrollPane.prototype.loopCheckingNewPos = function (value, axis) {
            if (this._overlapSize[axis] == 0)
                return value;
            var pos = axis == "x" ? this._xPos : this._yPos;
            var changed = false;
            var v;
            if (value < 0.001) {
                value += this.getLoopPartSize(2, axis);
                if (value > pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((value - pos) / v) * v;
                    pos = fgui.utils.NumberUtil.clamp(pos + v, 0, this._overlapSize[axis]);
                    changed = true;
                }
            }
            else if (value >= this._overlapSize[axis]) {
                value -= this.getLoopPartSize(2, axis);
                if (value < pos) {
                    v = this.getLoopPartSize(6, axis);
                    v = Math.ceil((pos - value) / v) * v;
                    pos = fgui.utils.NumberUtil.clamp(pos - v, 0, this._overlapSize[axis]);
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
        };
        ScrollPane.prototype.alignPosition = function (pos, inertialScrolling) {
            if (this._pageMode) {
                pos.x = this.alignByPage(pos.x, "x", inertialScrolling);
                pos.y = this.alignByPage(pos.y, "y", inertialScrolling);
            }
            else if (this._snapToItem) {
                var pt = this._owner.getSnappingPosition(-pos.x, -pos.y, ScrollPane.sHelperPoint);
                if (pos.x < 0 && pos.x > -this._overlapSize.x)
                    pos.x = -pt.x;
                if (pos.y < 0 && pos.y > -this._overlapSize.y)
                    pos.y = -pt.y;
            }
        };
        ScrollPane.prototype.alignByPage = function (pos, axis, inertialScrolling) {
            var page;
            if (pos > 0)
                page = 0;
            else if (pos < -this._overlapSize[axis])
                page = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
            else {
                page = Math.floor(-pos / this._pageSize[axis]);
                var change = inertialScrolling ? (pos - this._containerPos[axis]) : (pos - this._container[axis]);
                var testPageSize = Math.min(this._pageSize[axis], this._contentSize[axis] - (page + 1) * this._pageSize[axis]);
                var delta = -pos - page * this._pageSize[axis];
                //page mode magnetic
                if (Math.abs(change) > this._pageSize[axis]) {
                    if (delta > testPageSize * 0.5)
                        page++;
                }
                else {
                    if (delta > testPageSize * (change < 0 ? 0.3 : 0.7))
                        page++;
                }
                //re-calc dist
                var dst = this._pageSize[axis];
                pos = -page * dst;
                if (pos < -dst)
                    pos = -dst;
            }
            if (inertialScrolling) {
                var oldPos = this._tweenStart[axis];
                var oldPage;
                if (oldPos > 0)
                    oldPage = 0;
                else if (oldPos < -this._overlapSize[axis])
                    oldPage = Math.ceil(this._contentSize[axis] / this._pageSize[axis]) - 1;
                else
                    oldPage = Math.floor(-oldPos / this._pageSize[axis]);
                var startPage = Math.floor(-this._containerPos[axis] / this._pageSize[axis]);
                if (Math.abs(page - startPage) > 1 && Math.abs(oldPage - startPage) <= 1) {
                    if (page > startPage)
                        page = startPage + 1;
                    else
                        page = startPage - 1;
                    pos = -page * this._pageSize[axis];
                }
            }
            return pos;
        };
        ScrollPane.prototype.updateTargetAndDuration = function (orignPos, resultPos) {
            resultPos.x = this.updateTargetAndDuration2(orignPos.x, "x");
            resultPos.y = this.updateTargetAndDuration2(orignPos.y, "y");
        };
        ScrollPane.prototype.updateTargetAndDuration2 = function (pos, axis) {
            var v = this._velocity[axis];
            var duration = 0;
            if (pos > 0)
                pos = 0;
            else if (pos < -this._overlapSize[axis])
                pos = -this._overlapSize[axis];
            else {
                var v2 = Math.abs(v) * this._velocityScale;
                if (PIXI.utils.isMobile.any)
                    v2 *= Math.max(fgui.GRoot.inst.stageWrapper.designWidth, fgui.GRoot.inst.stageWrapper.designHeight) / Math.max(fgui.GRoot.inst.stageWidth, fgui.GRoot.inst.stageHeight);
                //threshold, if too slow, stop it
                var ratio = 0;
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
                    this._velocity[axis] = v;
                    duration = Math.log(60 / v2) / Math.log(this._decelerationRate) / 60;
                    var change = (v / 60 - 1) / (1 - this._decelerationRate);
                    //const change: number = Math.floor(v * duration * 0.4);
                    pos += change;
                }
            }
            if (duration < ScrollPane.TWEEN_DEFAULT_DURATION)
                duration = ScrollPane.TWEEN_DEFAULT_DURATION;
            this._tweenDuration[axis] = duration;
            return pos;
        };
        ScrollPane.prototype.fixDuration = function (axis, oldChange) {
            if (this._tweenChange[axis] == 0 || Math.abs(this._tweenChange[axis]) >= Math.abs(oldChange))
                return;
            var newDuration = Math.abs(this._tweenChange[axis] / oldChange) * this._tweenDuration[axis];
            if (newDuration < ScrollPane.TWEEN_DEFAULT_DURATION)
                newDuration = ScrollPane.TWEEN_DEFAULT_DURATION;
            this._tweenDuration[axis] = newDuration;
        };
        ScrollPane.prototype.killTween = function () {
            //tweening == 1: set to end immediately
            if (this._tweening == 1) {
                this._container.position.set(this._tweenStart.x + this._tweenChange.x, this._tweenStart.y + this._tweenChange.y);
                this.emit("__scroll" /* SCROLL */, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }
            this._tweening = 0;
            fgui.GTimer.inst.remove(this.tweenUpdate, this);
            this.emit("__scrollEnd" /* SCROLL_END */, this);
            //Events.dispatch(Events.SCROLLthis._END, this._owner.displayObject);
        };
        ScrollPane.prototype.checkRefreshBar = function () {
            if (this._header == null && this._footer == null)
                return;
            var pos = this._container[this._refreshBarAxis];
            if (this._header != null) {
                if (pos > 0) {
                    if (this._header.displayObject.parent == null)
                        this._maskContainer.addChildAt(this._header.displayObject, 0);
                    var pt = ScrollPane.sHelperPoint;
                    pt.set(this._header.width, this._header.height);
                    pt[this._refreshBarAxis] = pos;
                    this._header.setSize(pt.x, pt.y);
                }
                else {
                    if (this._header.displayObject.parent != null)
                        this._maskContainer.removeChild(this._header.displayObject);
                }
            }
            if (this._footer != null) {
                var max = this._overlapSize[this._refreshBarAxis];
                if (pos < -max || max == 0 && this._footerLockedSize > 0) {
                    if (this._footer.displayObject.parent == null)
                        this._maskContainer.addChildAt(this._footer.displayObject, 0);
                    var pt = ScrollPane.sHelperPoint;
                    pt.set(this._footer.x, this._footer.y);
                    if (max > 0)
                        pt[this._refreshBarAxis] = pos + this._contentSize[this._refreshBarAxis];
                    else
                        pt[this._refreshBarAxis] = Math.max(Math.min(pos + this._viewSize[this._refreshBarAxis], this._viewSize[this._refreshBarAxis] - this._footerLockedSize), this._viewSize[this._refreshBarAxis] - this._contentSize[this._refreshBarAxis]);
                    this._footer.setXY(pt.x, pt.y);
                    pt.set(this._footer.width, this._footer.height);
                    if (max > 0)
                        pt[this._refreshBarAxis] = -max - pos;
                    else
                        pt[this._refreshBarAxis] = this._viewSize[this._refreshBarAxis] - this._footer[this._refreshBarAxis];
                    this._footer.setSize(pt.x, pt.y);
                }
                else {
                    if (this._footer.displayObject.parent != null)
                        this._maskContainer.removeChild(this._footer.displayObject);
                }
            }
        };
        ScrollPane.prototype.tweenUpdate = function () {
            var nx = this.runTween("x");
            var ny = this.runTween("y");
            this._container.position.set(nx, ny);
            if (this._tweening == 2) {
                if (this._overlapSize.x > 0)
                    this._xPos = fgui.utils.NumberUtil.clamp(-nx, 0, this._overlapSize.x);
                if (this._overlapSize.y > 0)
                    this._yPos = fgui.utils.NumberUtil.clamp(-ny, 0, this._overlapSize.y);
                if (this._pageMode)
                    this.updatePageController();
            }
            if (this._tweenChange.x == 0 && this._tweenChange.y == 0) {
                this._tweening = 0;
                fgui.GTimer.inst.remove(this.tweenUpdate, this);
                this.loopCheckingCurrent();
                this.syncScrollBar(true);
                this.checkRefreshBar();
                this.emit("__scroll" /* SCROLL */, this);
                this.emit("__scrollEnd" /* SCROLL_END */, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
                //Events.dispatch(Events.SCROLLthis._END, this._owner.displayObject);
            }
            else {
                this.syncScrollBar(false);
                this.checkRefreshBar();
                this.emit("__scroll" /* SCROLL */, this);
                //Events.dispatch(Events.SCROLL, this._owner.displayObject);
            }
        };
        ScrollPane.prototype.runTween = function (axis) {
            var delta = fgui.GTimer.inst.ticker.deltaTime;
            var newValue;
            if (this._tweenChange[axis] != 0) {
                this._tweenTime[axis] += delta * PIXI.settings.TARGET_FPMS;
                if (this._tweenTime[axis] >= this._tweenDuration[axis]) {
                    newValue = this._tweenStart[axis] + this._tweenChange[axis];
                    this._tweenChange[axis] = 0;
                }
                else {
                    var ratio = ScrollPane._easeTypeFunc(this._tweenTime[axis], this._tweenDuration[axis]);
                    newValue = this._tweenStart[axis] + Math.floor(this._tweenChange[axis] * ratio);
                }
                var threshold1 = 0;
                var threshold2 = -this._overlapSize[axis];
                if (this._headerLockedSize > 0 && this._refreshBarAxis == axis)
                    threshold1 = this._headerLockedSize;
                if (this._footerLockedSize > 0 && this._refreshBarAxis == axis) {
                    var max = this._overlapSize[this._refreshBarAxis];
                    if (max == 0)
                        max = Math.max(this._contentSize[this._refreshBarAxis] + this._footerLockedSize - this._viewSize[this._refreshBarAxis], 0);
                    else
                        max += this._footerLockedSize;
                    threshold2 = -max;
                }
                if (this._tweening == 2 && this._bouncebackEffect) {
                    if (newValue > 20 + threshold1 && this._tweenChange[axis] > 0
                        || newValue > threshold1 && this._tweenChange[axis] == 0) //start to bounce
                     {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        this._tweenChange[axis] = -newValue + threshold1;
                        this._tweenStart[axis] = newValue;
                    }
                    else if (newValue < threshold2 - 20 && this._tweenChange[axis] < 0
                        || newValue < threshold2 && this._tweenChange[axis] == 0) {
                        this._tweenTime[axis] = 0;
                        this._tweenDuration[axis] = ScrollPane.TWEEN_DEFAULT_DURATION;
                        this._tweenChange[axis] = threshold2 - newValue;
                        this._tweenStart[axis] = newValue;
                    }
                }
                else {
                    if (newValue > threshold1) {
                        newValue = threshold1;
                        this._tweenChange[axis] = 0;
                    }
                    else if (newValue < threshold2) {
                        newValue = threshold2;
                        this._tweenChange[axis] = 0;
                    }
                }
            }
            else
                newValue = this._container[axis];
            return newValue;
        };
        ScrollPane._easeTypeFunc = function (t, d) { return (t = t / d - 1) * t * t + 1; }; //cubic out
        ScrollPane._gestureFlag = 0;
        ScrollPane.sHelperPoint = new PIXI.Point();
        ScrollPane.sHelperRect = new PIXI.Rectangle();
        ScrollPane.sEndPos = new PIXI.Point();
        ScrollPane.sOldChange = new PIXI.Point();
        // @FIXME
        ScrollPane.SCROLL = "__scroll";
        ScrollPane.SCROLL_END = "__scrollEnd";
        ScrollPane.PULL_DOWN_RELEASE = "pullDownRelease";
        ScrollPane.PULL_UP_RELEASE = "pullUpRelease";
        ScrollPane.TWEEN_DEFAULT_DURATION = .4;
        ScrollPane.TWEEN_MANUALLY_SET_DURATION = 0.5; //tween duration used when call setPos(useAni=true)
        ScrollPane.PULL_DIST_RATIO = 0.5; //pulldown / pullup distance ratio of the whole viewport
        return ScrollPane;
    }(PIXI.utils.EventEmitter));
    fgui.ScrollPane = ScrollPane;
})(fgui || (fgui = {}));

(function (fgui) {
    var Transition = /** @class */ (function () {
        function Transition(owner) {
            this._ownerBaseX = 0;
            this._ownerBaseY = 0;
            this._totalTimes = 0;
            this._totalTasks = 0;
            this._playing = false;
            this._paused = false;
            this._options = 0;
            this._reversed = false;
            this._totalDuration = 0;
            this._autoPlay = false;
            this._autoPlayTimes = 1;
            this._autoPlayDelay = 0;
            this._timeScale = 1;
            this._startTime = 0;
            this._endTime = 0;
            this._owner = owner;
            this._items = new Array();
        }
        Transition.prototype.play = function (onComplete, onCompleteObj, onCompleteParam, times, delay, startTime, endTime) {
            if (onComplete === void 0) { onComplete = null; }
            if (onCompleteObj === void 0) { onCompleteObj = null; }
            if (onCompleteParam === void 0) { onCompleteParam = null; }
            if (times === void 0) { times = 1; }
            if (delay === void 0) { delay = 0; }
            if (startTime === void 0) { startTime = 0; }
            if (endTime === void 0) { endTime = -1; }
            this._play(onComplete, onCompleteObj, onCompleteParam, times, delay, startTime, endTime, false);
        };
        Transition.prototype.playReverse = function (onComplete, onCompleteObj, onCompleteParam, times, delay) {
            if (onComplete === void 0) { onComplete = null; }
            if (onCompleteObj === void 0) { onCompleteObj = null; }
            if (onCompleteParam === void 0) { onCompleteParam = null; }
            if (times === void 0) { times = 1; }
            if (delay === void 0) { delay = 0; }
            this._play(onComplete, onCompleteObj, onCompleteParam, times, delay, 0, -1, true);
        };
        Transition.prototype.changePlayTimes = function (value) {
            this._totalTimes = value;
        };
        Transition.prototype.setAutoPlay = function (value, times, delay) {
            if (times === void 0) { times = -1; }
            if (delay === void 0) { delay = 0; }
            if (this._autoPlay != value) {
                this._autoPlay = value;
                this._autoPlayTimes = times;
                this._autoPlayDelay = delay;
                if (this._autoPlay) {
                    if (this._owner.onStage)
                        this.play(null, null, this._autoPlayTimes, this._autoPlayDelay);
                }
                else {
                    if (!this._owner.onStage)
                        this.stop(false, true);
                }
            }
        };
        Transition.prototype._play = function (onComplete, onCompleteCaller, onCompleteParam, times, delay, startTime, endTime, reversed) {
            if (onComplete === void 0) { onComplete = null; }
            if (onCompleteCaller === void 0) { onCompleteCaller = null; }
            if (onCompleteParam === void 0) { onCompleteParam = null; }
            if (times === void 0) { times = 1; }
            if (delay === void 0) { delay = 0; }
            if (startTime === void 0) { startTime = 0; }
            if (endTime === void 0) { endTime = -1; }
            if (reversed === void 0) { reversed = false; }
            this.stop(true, true);
            this._totalTimes = times;
            this._reversed = reversed;
            this._startTime = startTime;
            this._endTime = endTime;
            this._playing = true;
            this._paused = false;
            this._onComplete = onComplete;
            this._onCompleteParam = onCompleteParam;
            this._onCompleteCaller = onCompleteCaller;
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.target == null) {
                    if (item.targetId)
                        item.target = this._owner.getChildById(item.targetId);
                    else
                        item.target = this._owner;
                }
                else if (item.target != this._owner && item.target.parent != this._owner)
                    item.target = null;
                if (item.target != null && item.type == TransitionActionType.Transition) {
                    var trans = item.target.getTransition(item.value.transName);
                    if (trans == this)
                        trans = null;
                    if (trans != null) {
                        if (item.value.playTimes == 0) //stop
                         {
                            var j;
                            for (j = i - 1; j >= 0; j--) {
                                var item2 = this._items[j];
                                if (item2.type == TransitionActionType.Transition) {
                                    if (item2.value.trans == trans) {
                                        item2.value.stopTime = item.time - item2.time;
                                        break;
                                    }
                                }
                            }
                            if (j < 0)
                                item.value.stopTime = 0;
                            else
                                trans = null; //no need to handle stop anymore
                        }
                        else
                            item.value.stopTime = -1;
                    }
                    item.value.trans = trans;
                }
            }
            if (delay == 0)
                this.onDelayedPlay();
            else
                fgui.GTween.delayedCall(delay).onComplete(this.onDelayedPlay, this);
        };
        Transition.prototype.stop = function (setToComplete, processCallback) {
            if (setToComplete === void 0) { setToComplete = true; }
            if (processCallback === void 0) { processCallback = false; }
            if (!this._playing)
                return;
            this._playing = false;
            this._totalTasks = 0;
            this._totalTimes = 0;
            var func = this._onComplete;
            var param = this._onCompleteParam;
            var thisObj = this._onCompleteCaller;
            this._onComplete = null;
            this._onCompleteParam = null;
            this._onCompleteCaller = null;
            fgui.GTween.kill(this); //delay start
            var cnt = this._items.length;
            if (this._reversed) {
                for (var i = cnt - 1; i >= 0; i--) {
                    var item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.stopItem(item, setToComplete);
                }
            }
            else {
                for (i = 0; i < cnt; i++) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.stopItem(item, setToComplete);
                }
            }
            if (processCallback && func != null) {
                func.call(thisObj, param);
            }
        };
        Transition.prototype.stopItem = function (item, setToComplete) {
            if (item.displayLockToken != 0) {
                item.target.releaseDisplayLock(item.displayLockToken);
                item.displayLockToken = 0;
            }
            if (item.tweener != null) {
                item.tweener.kill(setToComplete);
                item.tweener = null;
                if (item.type == TransitionActionType.Shake && !setToComplete) //震动必须归位，否则下次就越震越远了。
                 {
                    item.target._gearLocked = true;
                    item.target.setXY(item.target.x - item.value.lastOffsetX, item.target.y - item.value.lastOffsetY);
                    item.target._gearLocked = false;
                }
            }
            if (item.type == TransitionActionType.Transition) {
                var trans = item.value.trans;
                if (trans != null)
                    trans.stop(setToComplete, false);
            }
        };
        Transition.prototype.setPaused = function (paused) {
            if (!this._playing || this._paused == paused)
                return;
            this._paused = paused;
            var tweener = fgui.GTween.getTween(this);
            if (tweener != null)
                tweener.setPaused(paused);
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.target == null)
                    continue;
                if (item.type == TransitionActionType.Transition) {
                    if (item.value.trans != null)
                        item.value.trans.setPaused(paused);
                }
                else if (item.type == TransitionActionType.Animation) {
                    if (paused) {
                        item.value.flag = item.target.getProp(fgui.ObjectPropID.Playing);
                        item.target.setProp(fgui.ObjectPropID.Playing, false);
                    }
                    else
                        item.target.setProp(fgui.ObjectPropID.Playing, item.value.flag);
                }
                if (item.tweener != null)
                    item.tweener.setPaused(paused);
            }
        };
        Transition.prototype.dispose = function () {
            if (this._playing)
                fgui.GTween.kill(this); //delay start
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.tweener != null) {
                    item.tweener.kill();
                    item.tweener = null;
                }
                item.target = null;
                item.hook = null;
                if (item.tweenConfig != null)
                    item.tweenConfig.endHook = null;
            }
            this._items.length = 0;
            this._playing = false;
            this._onComplete = null;
            this._onCompleteCaller = null;
            this._onCompleteParam = null;
        };
        Object.defineProperty(Transition.prototype, "playing", {
            get: function () {
                return this._playing;
            },
            enumerable: true,
            configurable: true
        });
        Transition.prototype.setValue = function (label) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            var cnt = this._items.length;
            var value;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    if (item.tweenConfig != null)
                        value = item.tweenConfig.startValue;
                    else
                        value = item.value;
                }
                else if (item.tweenConfig != null && item.tweenConfig.endLabel == label) {
                    value = item.tweenConfig.endValue;
                }
                else
                    continue;
                switch (item.type) {
                    case TransitionActionType.XY:
                    case TransitionActionType.Size:
                    case TransitionActionType.Pivot:
                    case TransitionActionType.Scale:
                    case TransitionActionType.Skew:
                        value.b1 = true;
                        value.b2 = true;
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        break;
                    case TransitionActionType.Alpha:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case TransitionActionType.Rotation:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case TransitionActionType.Color:
                        value.f1 = parseFloat(args[0]);
                        break;
                    case TransitionActionType.Animation:
                        value.frame = parseInt(args[0]);
                        if (args.length > 1)
                            value.playing = args[1];
                        break;
                    case TransitionActionType.Visible:
                        value.visible = args[0];
                        break;
                    case TransitionActionType.Sound:
                        value.sound = args[0];
                        if (args.length > 1)
                            value.volume = parseFloat(args[1]);
                        break;
                    case TransitionActionType.Transition:
                        value.transName = args[0];
                        if (args.length > 1)
                            value.playTimes = parseInt(args[1]);
                        break;
                    case TransitionActionType.Shake:
                        value.amplitude = parseFloat(args[0]);
                        if (args.length > 1)
                            value.duration = parseFloat(args[1]);
                        break;
                    case TransitionActionType.ColorFilter:
                        value.f1 = parseFloat(args[0]);
                        value.f2 = parseFloat(args[1]);
                        value.f3 = parseFloat(args[2]);
                        value.f4 = parseFloat(args[3]);
                        break;
                    case TransitionActionType.Text:
                    case TransitionActionType.Icon:
                        value.text = args[0];
                        break;
                }
            }
        };
        Transition.prototype.setHook = function (label, callback, caller) {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    item.hook = callback;
                    item.hookCaller = caller;
                    break;
                }
                else if (item.tweenConfig != null && item.tweenConfig.endLabel == label) {
                    item.tweenConfig.endHook = callback;
                    item.tweenConfig.endHookCaller = caller;
                    break;
                }
            }
        };
        Transition.prototype.clearHooks = function () {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                item.hook = null;
                item.hookCaller = null;
                if (item.tweenConfig != null) {
                    item.tweenConfig.endHook = null;
                    item.tweenConfig.endHookCaller = null;
                }
            }
        };
        Transition.prototype.setTarget = function (label, newTarget) {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label) {
                    item.targetId = (newTarget == this._owner || newTarget == null) ? "" : newTarget.id;
                    if (this._playing) {
                        if (item.targetId.length > 0)
                            item.target = this._owner.getChildById(item.targetId);
                        else
                            item.target = this._owner;
                    }
                    else
                        item.target = null;
                }
            }
        };
        Transition.prototype.setDuration = function (label, value) {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.tweenConfig != null && item.label == label)
                    item.tweenConfig.duration = value;
            }
        };
        Transition.prototype.getLabelTime = function (label) {
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.label == label)
                    return item.time;
                else if (item.tweenConfig != null && item.tweenConfig.endLabel == label)
                    return item.time + item.tweenConfig.duration;
            }
            return Number.NaN;
        };
        Object.defineProperty(Transition.prototype, "timeScale", {
            get: function () {
                return this._timeScale;
            },
            set: function (value) {
                if (this._timeScale != value) {
                    this._timeScale = value;
                    if (this._playing) {
                        var cnt = this._items.length;
                        for (var i = 0; i < cnt; i++) {
                            var item = this._items[i];
                            if (item.tweener != null)
                                item.tweener.setTimeScale(value);
                            else if (item.type == TransitionActionType.Transition) {
                                if (item.value.trans != null)
                                    item.value.trans.timeScale = value;
                            }
                            else if (item.type == TransitionActionType.Animation) {
                                if (item.target != null)
                                    item.target.setProp(fgui.ObjectPropID.TimeScale, value);
                            }
                        }
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Transition.prototype.updateFromRelations = function (targetId, dx, dy) {
            var cnt = this._items.length;
            if (cnt == 0)
                return;
            for (var i = 0; i < cnt; i++) {
                var item = this._items[i];
                if (item.type == TransitionActionType.XY && item.targetId == targetId) {
                    if (item.tweenConfig != null) {
                        item.tweenConfig.startValue.f1 += dx;
                        item.tweenConfig.startValue.f2 += dy;
                        item.tweenConfig.endValue.f1 += dx;
                        item.tweenConfig.endValue.f2 += dy;
                    }
                    else {
                        item.value.f1 += dx;
                        item.value.f2 += dy;
                    }
                }
            }
        };
        Transition.prototype.onOwnerAddedToStage = function () {
            if (this._autoPlay && !this._playing)
                this.play(null, null, null, this._autoPlayTimes, this._autoPlayDelay);
        };
        Transition.prototype.onOwnerRemovedFromStage = function () {
            if ((this._options & Transition.OPTION_AUTO_STOP_DISABLED) == 0)
                this.stop((this._options & Transition.OPTION_AUTO_STOP_AT_END) != 0 ? true : false, false);
        };
        Transition.prototype.onDelayedPlay = function () {
            this.internalPlay();
            this._playing = this._totalTasks > 0;
            if (this._playing) {
                if ((this._options & Transition.OPTION_IGNORE_DISPLAY_CONTROLLER) != 0) {
                    var cnt = this._items.length;
                    for (var i = 0; i < cnt; i++) {
                        var item = this._items[i];
                        if (item.target != null && item.target != this._owner)
                            item.displayLockToken = item.target.addDisplayLock();
                    }
                }
            }
            else if (this._onComplete != null) {
                var func = this._onComplete;
                var param = this._onCompleteParam;
                var thisObj = this._onCompleteCaller;
                this._onComplete = null;
                this._onCompleteParam = null;
                this._onCompleteCaller = null;
                func.call(thisObj, param);
            }
        };
        Transition.prototype.internalPlay = function () {
            this._ownerBaseX = this._owner.x;
            this._ownerBaseY = this._owner.y;
            this._totalTasks = 0;
            var cnt = this._items.length;
            var item;
            var needSkipAnimations = false;
            var i;
            if (!this._reversed) {
                for (i = 0; i < cnt; i++) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    if (item.type == TransitionActionType.Animation && this._startTime != 0 && item.time <= this._startTime) {
                        needSkipAnimations = true;
                        item.value.flag = false;
                    }
                    else
                        this.playItem(item);
                }
            }
            else {
                for (i = cnt - 1; i >= 0; i--) {
                    item = this._items[i];
                    if (item.target == null)
                        continue;
                    this.playItem(item);
                }
            }
            if (needSkipAnimations)
                this.skipAnimations();
        };
        Transition.prototype.playItem = function (item) {
            var time;
            if (item.tweenConfig != null) {
                if (this._reversed)
                    time = (this._totalDuration - item.time - item.tweenConfig.duration);
                else
                    time = item.time;
                if (this._endTime == -1 || time <= this._endTime) {
                    var startValue;
                    var endValue;
                    if (this._reversed) {
                        startValue = item.tweenConfig.endValue;
                        endValue = item.tweenConfig.startValue;
                    }
                    else {
                        startValue = item.tweenConfig.startValue;
                        endValue = item.tweenConfig.endValue;
                    }
                    item.value.b1 = startValue.b1 || endValue.b1;
                    item.value.b2 = startValue.b2 || endValue.b2;
                    switch (item.type) {
                        case TransitionActionType.XY:
                        case TransitionActionType.Size:
                        case TransitionActionType.Scale:
                        case TransitionActionType.Skew:
                            item.tweener = fgui.GTween.to2(startValue.f1, startValue.f2, endValue.f1, endValue.f2, item.tweenConfig.duration);
                            break;
                        case TransitionActionType.Alpha:
                        case TransitionActionType.Rotation:
                            item.tweener = fgui.GTween.to(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;
                        case TransitionActionType.Color:
                            item.tweener = fgui.GTween.toColor(startValue.f1, endValue.f1, item.tweenConfig.duration);
                            break;
                        case TransitionActionType.ColorFilter:
                            item.tweener = fgui.GTween.to4(startValue.f1, startValue.f2, startValue.f3, startValue.f4, endValue.f1, endValue.f2, endValue.f3, endValue.f4, item.tweenConfig.duration);
                            break;
                    }
                    item.tweener.setDelay(time)
                        .setEase(item.tweenConfig.easeType)
                        .setRepeat(item.tweenConfig.repeat, item.tweenConfig.yoyo)
                        .setTimeScale(this._timeScale)
                        .setTarget(item)
                        .onStart(this.onTweenStart, this)
                        .onUpdate(this.onTweenUpdate, this)
                        .onComplete(this.onTweenComplete, this);
                    if (this._endTime >= 0)
                        item.tweener.setBreakpoint(this._endTime - time);
                    this._totalTasks++;
                }
            }
            else if (item.type == TransitionActionType.Shake) {
                if (this._reversed)
                    time = (this._totalDuration - item.time - item.value.duration);
                else
                    time = item.time;
                item.value.offsetX = item.value.offsetY = 0;
                item.value.lastOffsetX = item.value.lastOffsetY = 0;
                item.tweener = fgui.GTween.shake(0, 0, item.value.amplitude, item.value.duration)
                    .setDelay(time)
                    .setTimeScale(this._timeScale)
                    .setTarget(item)
                    .onUpdate(this.onTweenUpdate, this)
                    .onComplete(this.onTweenComplete, this);
                if (this._endTime >= 0)
                    item.tweener.setBreakpoint(this._endTime - item.time);
                this._totalTasks++;
            }
            else {
                if (this._reversed)
                    time = (this._totalDuration - item.time);
                else
                    time = item.time;
                if (time <= this._startTime) {
                    this.applyValue(item);
                    this.callHook(item, false);
                }
                else if (this._endTime == -1 || time <= this._endTime) {
                    this._totalTasks++;
                    item.tweener = fgui.GTween.delayedCall(time)
                        .setTimeScale(this._timeScale)
                        .setTarget(item)
                        .onComplete(this.onDelayedPlayItem, this);
                }
            }
            if (item.tweener != null)
                item.tweener.seek(this._startTime);
        };
        Transition.prototype.skipAnimations = function () {
            var frame;
            var playStartTime;
            var playTotalTime;
            var value;
            var target;
            var item;
            var cnt = this._items.length;
            for (var i = 0; i < cnt; i++) {
                item = this._items[i];
                if (item.type != TransitionActionType.Animation || item.time > this._startTime)
                    continue;
                value = item.value;
                if (value.flag)
                    continue;
                target = item.target;
                frame = target.getProp(fgui.ObjectPropID.Frame);
                playStartTime = target.getProp(fgui.ObjectPropID.Playing) ? 0 : -1;
                playTotalTime = 0;
                for (var j = i; j < cnt; j++) {
                    item = this._items[j];
                    if (item.type != TransitionActionType.Animation || item.target != target || item.time > this._startTime)
                        continue;
                    value = item.value;
                    value.flag = true;
                    if (value.frame != -1) {
                        frame = value.frame;
                        if (value.playing)
                            playStartTime = item.time;
                        else
                            playStartTime = -1;
                        playTotalTime = 0;
                    }
                    else {
                        if (value.playing) {
                            if (playStartTime < 0)
                                playStartTime = item.time;
                        }
                        else {
                            if (playStartTime >= 0)
                                playTotalTime += (item.time - playStartTime);
                            playStartTime = -1;
                        }
                    }
                    this.callHook(item, false);
                }
                if (playStartTime >= 0)
                    playTotalTime += (this._startTime - playStartTime);
                target.setProp(fgui.ObjectPropID.Playing, playStartTime >= 0);
                target.setProp(fgui.ObjectPropID.Frame, frame);
                if (playTotalTime > 0)
                    target.setProp(fgui.ObjectPropID.DeltaTime, playTotalTime * 1000);
            }
        };
        Transition.prototype.onDelayedPlayItem = function (tweener) {
            var item = tweener.target;
            item.tweener = null;
            this._totalTasks--;
            this.applyValue(item);
            this.callHook(item, false);
            this.checkAllComplete();
        };
        Transition.prototype.onTweenStart = function (tweener) {
            var item = tweener.target;
            if (item.type == TransitionActionType.XY || item.type == TransitionActionType.Size) //位置和大小要到start才最终确认起始值
             {
                var startValue;
                var endValue;
                if (this._reversed) {
                    startValue = item.tweenConfig.endValue;
                    endValue = item.tweenConfig.startValue;
                }
                else {
                    startValue = item.tweenConfig.startValue;
                    endValue = item.tweenConfig.endValue;
                }
                if (item.type == TransitionActionType.XY) {
                    if (item.target != this._owner) {
                        if (!startValue.b1)
                            tweener.startValue.x = item.target.x;
                        else if (startValue.b3) //percent
                            tweener.startValue.x = startValue.f1 * this._owner.width;
                        if (!startValue.b2)
                            tweener.startValue.y = item.target.y;
                        else if (startValue.b3) //percent
                            tweener.startValue.y = startValue.f2 * this._owner.height;
                        if (!endValue.b1)
                            tweener.endValue.x = tweener.startValue.x;
                        else if (endValue.b3)
                            tweener.endValue.x = endValue.f1 * this._owner.width;
                        if (!endValue.b2)
                            tweener.endValue.y = tweener.startValue.y;
                        else if (endValue.b3)
                            tweener.endValue.y = endValue.f2 * this._owner.height;
                    }
                    else {
                        if (!startValue.b1)
                            tweener.startValue.x = item.target.x - this._ownerBaseX;
                        if (!startValue.b2)
                            tweener.startValue.y = item.target.y - this._ownerBaseY;
                        if (!endValue.b1)
                            tweener.endValue.x = tweener.startValue.x;
                        if (!endValue.b2)
                            tweener.endValue.y = tweener.startValue.y;
                    }
                }
                else {
                    if (!startValue.b1)
                        tweener.startValue.x = item.target.width;
                    if (!startValue.b2)
                        tweener.startValue.y = item.target.height;
                    if (!endValue.b1)
                        tweener.endValue.x = tweener.startValue.x;
                    if (!endValue.b2)
                        tweener.endValue.y = tweener.startValue.y;
                }
                if (item.tweenConfig.path) {
                    item.value.b1 = item.value.b2 = true;
                    tweener.setPath(item.tweenConfig.path);
                }
            }
            this.callHook(item, false);
        };
        Transition.prototype.onTweenUpdate = function (tweener) {
            var item = tweener.target;
            switch (item.type) {
                case TransitionActionType.XY:
                case TransitionActionType.Size:
                case TransitionActionType.Scale:
                case TransitionActionType.Skew:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    if (item.tweenConfig.path) {
                        item.value.f1 += tweener.startValue.x;
                        item.value.f2 += tweener.startValue.y;
                    }
                    break;
                case TransitionActionType.Alpha:
                case TransitionActionType.Rotation:
                    item.value.f1 = tweener.value.x;
                    break;
                case TransitionActionType.Color:
                    item.value.f1 = tweener.value.color;
                    break;
                case TransitionActionType.ColorFilter:
                    item.value.f1 = tweener.value.x;
                    item.value.f2 = tweener.value.y;
                    item.value.f3 = tweener.value.z;
                    item.value.f4 = tweener.value.w;
                    break;
                case TransitionActionType.Shake:
                    item.value.offsetX = tweener.deltaValue.x;
                    item.value.offsetY = tweener.deltaValue.y;
                    break;
            }
            this.applyValue(item);
        };
        Transition.prototype.onTweenComplete = function (tweener) {
            var item = tweener.target;
            item.tweener = null;
            this._totalTasks--;
            if (tweener.allCompleted) //当整体播放结束时间在这个tween的中间时不应该调用结尾钩子
                this.callHook(item, true);
            this.checkAllComplete();
        };
        Transition.prototype.onPlayTransCompleted = function (item) {
            this._totalTasks--;
            this.checkAllComplete();
        };
        Transition.prototype.callHook = function (item, tweenEnd) {
            if (tweenEnd) {
                if (item.tweenConfig != null && item.tweenConfig.endHook != null)
                    item.tweenConfig.endHook.call(item.tweenConfig.endHookCaller);
            }
            else {
                if (item.time >= this._startTime && item.hook != null)
                    item.hook.call(item.hookCaller);
            }
        };
        Transition.prototype.checkAllComplete = function () {
            if (this._playing && this._totalTasks == 0) {
                if (this._totalTimes < 0) {
                    this.internalPlay();
                }
                else {
                    this._totalTimes--;
                    if (this._totalTimes > 0)
                        this.internalPlay();
                    else {
                        this._playing = false;
                        var cnt = this._items.length;
                        for (var i = 0; i < cnt; i++) {
                            var item = this._items[i];
                            if (item.target != null && item.displayLockToken != 0) {
                                item.target.releaseDisplayLock(item.displayLockToken);
                                item.displayLockToken = 0;
                            }
                        }
                        if (this._onComplete != null) {
                            var func = this._onComplete;
                            var param = this._onCompleteParam;
                            var thisObj = this._onCompleteCaller;
                            this._onComplete = null;
                            this._onCompleteParam = null;
                            this._onCompleteCaller = null;
                            func.call(thisObj, param);
                        }
                    }
                }
            }
        };
        Transition.prototype.applyValue = function (item) {
            item.target._gearLocked = true;
            var value = item.value;
            switch (item.type) {
                case TransitionActionType.XY:
                    if (item.target == this._owner) {
                        if (value.b1 && value.b2)
                            item.target.setXY(value.f1 + this._ownerBaseX, value.f2 + this._ownerBaseY);
                        else if (value.b1)
                            item.target.x = value.f1 + this._ownerBaseX;
                        else
                            item.target.y = value.f2 + this._ownerBaseY;
                    }
                    else {
                        if (value.b3) //position in percent
                         {
                            if (value.b1 && value.b2)
                                item.target.setXY(value.f1 * this._owner.width, value.f2 * this._owner.height);
                            else if (value.b1)
                                item.target.x = value.f1 * this._owner.width;
                            else if (value.b2)
                                item.target.y = value.f2 * this._owner.height;
                        }
                        else {
                            if (value.b1 && value.b2)
                                item.target.setXY(value.f1, value.f2);
                            else if (value.b1)
                                item.target.x = value.f1;
                            else if (value.b2)
                                item.target.y = value.f2;
                        }
                    }
                    break;
                case TransitionActionType.Size:
                    if (!value.b1)
                        value.f1 = item.target.width;
                    if (!value.b2)
                        value.f2 = item.target.height;
                    item.target.setSize(value.f1, value.f2);
                    break;
                case TransitionActionType.Pivot:
                    item.target.setPivot(value.f1, value.f2, item.target.pivotAsAnchor);
                    break;
                case TransitionActionType.Alpha:
                    item.target.alpha = value.f1;
                    break;
                case TransitionActionType.Rotation:
                    item.target.rotation = value.f1;
                    break;
                case TransitionActionType.Scale:
                    item.target.setScale(value.f1, value.f2);
                    break;
                case TransitionActionType.Skew:
                    item.target.setSkew(value.f1, value.f2);
                    break;
                case TransitionActionType.Color:
                    item.target.setProp(fgui.ObjectPropID.Color, value.f1);
                    break;
                case TransitionActionType.Animation:
                    if (value.frame >= 0)
                        item.target.setProp(fgui.ObjectPropID.Frame, value.frame);
                    item.target.setProp(fgui.ObjectPropID.Playing, value.playing);
                    item.target.setProp(fgui.ObjectPropID.TimeScale, this._timeScale);
                    break;
                case TransitionActionType.Visible:
                    item.target.visible = value.visible;
                    break;
                case TransitionActionType.Transition:
                    if (this._playing) {
                        var trans = value.trans;
                        if (trans != null) {
                            this._totalTasks++;
                            var startTime = this._startTime > item.time ? (this._startTime - item.time) : 0;
                            var endTime = this._endTime >= 0 ? (this._endTime - item.time) : -1;
                            if (value.stopTime >= 0 && (endTime < 0 || endTime > value.stopTime))
                                endTime = value.stopTime;
                            trans.timeScale = this._timeScale;
                            trans._play(this.onPlayTransCompleted, this, item, value.playTimes, 0, startTime, endTime, this._reversed);
                        }
                    }
                    break;
                case TransitionActionType.Sound:
                    if (this._playing && item.time >= this._startTime) {
                        if (value.audioClip == null) {
                            var pi = fgui.UIPackage.getItemByURL(value.sound);
                            if (pi) {
                                // FIXME
                                value.audioClip = pi.owner.getItemAsset(pi);
                            }
                        }
                        if (value.audioClip) {
                            fgui.GRoot.inst.playOneShotSound(value.audioClip, value.volume);
                        }
                    }
                    break;
                case TransitionActionType.Shake:
                    item.target.setXY(item.target.x - value.lastOffsetX + value.offsetX, item.target.y - value.lastOffsetY + value.offsetY);
                    value.lastOffsetX = value.offsetX;
                    value.lastOffsetY = value.offsetY;
                    break;
                case TransitionActionType.ColorFilter:
                    {
                        fgui.ToolSet.setColorFilter(item.target.displayObject, [value.f1, value.f2, value.f3, value.f4]);
                        break;
                    }
                case TransitionActionType.Text:
                    item.target.text = value.text;
                    break;
                case TransitionActionType.Icon:
                    item.target.icon = value.text;
                    break;
            }
            item.target._gearLocked = false;
        };
        Transition.prototype.setup = function (buffer) {
            this.name = buffer.readS();
            this._options = buffer.readInt();
            this._autoPlay = buffer.readBool();
            this._autoPlayTimes = buffer.readInt();
            this._autoPlayDelay = buffer.readFloat();
            var cnt = buffer.readShort();
            for (var i = 0; i < cnt; i++) {
                var dataLen = buffer.readShort();
                var curPos = buffer.position;
                buffer.seek(curPos, 0);
                var item = new TransitionItem(buffer.readByte());
                this._items[i] = item;
                item.time = buffer.readFloat();
                var targetId = buffer.readShort();
                if (targetId < 0)
                    item.targetId = "";
                else
                    item.targetId = this._owner.getChildAt(targetId).id;
                item.label = buffer.readS();
                if (buffer.readBool()) {
                    buffer.seek(curPos, 1);
                    item.tweenConfig = new TweenConfig();
                    item.tweenConfig.duration = buffer.readFloat();
                    if (item.time + item.tweenConfig.duration > this._totalDuration)
                        this._totalDuration = item.time + item.tweenConfig.duration;
                    item.tweenConfig.easeType = buffer.readByte();
                    item.tweenConfig.repeat = buffer.readInt();
                    item.tweenConfig.yoyo = buffer.readBool();
                    item.tweenConfig.endLabel = buffer.readS();
                    buffer.seek(curPos, 2);
                    this.decodeValue(item, buffer, item.tweenConfig.startValue);
                    buffer.seek(curPos, 3);
                    this.decodeValue(item, buffer, item.tweenConfig.endValue);
                    if (buffer.version >= 2) {
                        var pathLen = buffer.readInt();
                        if (pathLen > 0) {
                            item.tweenConfig.path = new fgui.GPath();
                            var pts = new Array();
                            for (var j = 0; j < pathLen; j++) {
                                var curveType = buffer.readByte();
                                switch (curveType) {
                                    case fgui.CurveType.Bezier:
                                        pts.push(fgui.GPathPoint.newBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                        break;
                                    case fgui.CurveType.CubicBezier:
                                        pts.push(fgui.GPathPoint.newCubicBezierPoint(buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat(), buffer.readFloat()));
                                        break;
                                    default:
                                        pts.push(fgui.GPathPoint.newPoint(buffer.readFloat(), buffer.readFloat(), curveType));
                                        break;
                                }
                            }
                            item.tweenConfig.path.create(pts);
                        }
                    }
                }
                else {
                    if (item.time > this._totalDuration)
                        this._totalDuration = item.time;
                    buffer.seek(curPos, 2);
                    this.decodeValue(item, buffer, item.value);
                }
                buffer.position = curPos + dataLen;
            }
        };
        Transition.prototype.decodeValue = function (item, buffer, value) {
            switch (item.type) {
                case TransitionActionType.XY:
                case TransitionActionType.Size:
                case TransitionActionType.Pivot:
                case TransitionActionType.Skew:
                    value.b1 = buffer.readBool();
                    value.b2 = buffer.readBool();
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    if (buffer.version >= 2 && item.type == TransitionActionType.XY)
                        value.b3 = buffer.readBool(); //percent
                    break;
                case TransitionActionType.Alpha:
                case TransitionActionType.Rotation:
                    value.f1 = buffer.readFloat();
                    break;
                case TransitionActionType.Scale:
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    break;
                case TransitionActionType.Color:
                    value.f1 = buffer.readColor();
                    break;
                case TransitionActionType.Animation:
                    value.playing = buffer.readBool();
                    value.frame = buffer.readInt();
                    break;
                case TransitionActionType.Visible:
                    value.visible = buffer.readBool();
                    break;
                case TransitionActionType.Sound:
                    value.sound = buffer.readS();
                    value.volume = buffer.readFloat();
                    break;
                case TransitionActionType.Transition:
                    value.transName = buffer.readS();
                    value.playTimes = buffer.readInt();
                    break;
                case TransitionActionType.Shake:
                    value.amplitude = buffer.readFloat();
                    value.duration = buffer.readFloat();
                    break;
                case TransitionActionType.ColorFilter:
                    value.f1 = buffer.readFloat();
                    value.f2 = buffer.readFloat();
                    value.f3 = buffer.readFloat();
                    value.f4 = buffer.readFloat();
                    break;
                case TransitionActionType.Text:
                case TransitionActionType.Icon:
                    value.text = buffer.readS();
                    break;
            }
        };
        Transition.OPTION_IGNORE_DISPLAY_CONTROLLER = 1;
        Transition.OPTION_AUTO_STOP_DISABLED = 2;
        Transition.OPTION_AUTO_STOP_AT_END = 4;
        return Transition;
    }());
    fgui.Transition = Transition;
    var TransitionActionType = /** @class */ (function () {
        function TransitionActionType() {
        }
        TransitionActionType.XY = 0;
        TransitionActionType.Size = 1;
        TransitionActionType.Scale = 2;
        TransitionActionType.Pivot = 3;
        TransitionActionType.Alpha = 4;
        TransitionActionType.Rotation = 5;
        TransitionActionType.Color = 6;
        TransitionActionType.Animation = 7;
        TransitionActionType.Visible = 8;
        TransitionActionType.Sound = 9;
        TransitionActionType.Transition = 10;
        TransitionActionType.Shake = 11;
        TransitionActionType.ColorFilter = 12;
        TransitionActionType.Skew = 13;
        TransitionActionType.Text = 14;
        TransitionActionType.Icon = 15;
        TransitionActionType.Unknown = 16;
        return TransitionActionType;
    }());
    var TransitionItem = /** @class */ (function () {
        function TransitionItem(type) {
            this.type = type;
            switch (type) {
                case TransitionActionType.XY:
                case TransitionActionType.Size:
                case TransitionActionType.Scale:
                case TransitionActionType.Pivot:
                case TransitionActionType.Skew:
                case TransitionActionType.Alpha:
                case TransitionActionType.Rotation:
                case TransitionActionType.Color:
                case TransitionActionType.ColorFilter:
                    this.value = new TValue();
                    break;
                case TransitionActionType.Animation:
                    this.value = new TValue_Animation();
                    break;
                case TransitionActionType.Shake:
                    this.value = new TValue_Shake();
                    break;
                case TransitionActionType.Sound:
                    this.value = new TValue_Sound();
                    break;
                case TransitionActionType.Transition:
                    this.value = new TValue_Transition();
                    break;
                case TransitionActionType.Visible:
                    this.value = new TValue_Visible();
                    break;
                case TransitionActionType.Text:
                case TransitionActionType.Icon:
                    this.value = new TValue_Text();
                    break;
            }
        }
        return TransitionItem;
    }());
    var TweenConfig = /** @class */ (function () {
        function TweenConfig() {
            this.duration = 0;
            this.repeat = 0;
            this.yoyo = false;
            this.easeType = fgui.EaseType.QuadOut;
            this.startValue = new TValue();
            this.endValue = new TValue();
        }
        return TweenConfig;
    }());
    var TValue_Visible = /** @class */ (function () {
        function TValue_Visible() {
        }
        return TValue_Visible;
    }());
    var TValue_Animation = /** @class */ (function () {
        function TValue_Animation() {
        }
        return TValue_Animation;
    }());
    var TValue_Sound = /** @class */ (function () {
        function TValue_Sound() {
        }
        return TValue_Sound;
    }());
    var TValue_Transition = /** @class */ (function () {
        function TValue_Transition() {
        }
        return TValue_Transition;
    }());
    var TValue_Shake = /** @class */ (function () {
        function TValue_Shake() {
        }
        return TValue_Shake;
    }());
    var TValue_Text = /** @class */ (function () {
        function TValue_Text() {
        }
        return TValue_Text;
    }());
    var TValue = /** @class */ (function () {
        function TValue() {
            this.f1 = this.f2 = this.f3 = this.f4 = 0;
            this.b1 = this.b2 = true;
        }
        return TValue;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var TranslationHelper = /** @class */ (function () {
        function TranslationHelper() {
        }
        TranslationHelper.loadFromXML = function (source) {
            TranslationHelper.strings = {};
            var xml = fgui.utils.XmlParser.tryParse(source);
            var nodes = xml.children;
            var length1 = nodes.length;
            for (var i1 = 0; i1 < length1; i1++) {
                var cxml = nodes[i1];
                if (cxml.name == "string") {
                    var key = cxml.attributes.name;
                    var text = cxml.children.length > 0 ? cxml.children[0].text : "";
                    var i = key.indexOf("-");
                    if (i == -1)
                        continue;
                    var key2 = key.substr(0, i);
                    var key3 = key.substr(i + 1);
                    var col = TranslationHelper.strings[key2];
                    if (!col) {
                        col = {};
                        TranslationHelper.strings[key2] = col;
                    }
                    col[key3] = text;
                }
            }
        };
        TranslationHelper.translateComponent = function (item) {
            if (TranslationHelper.strings == null)
                return;
            var compStrings = TranslationHelper.strings[item.owner.id + item.id];
            if (compStrings == null)
                return;
            var elementId, value;
            var buffer = item.rawData;
            var nextPos;
            var itemCount;
            var i, j, k;
            var dataLen;
            var curPos;
            var valueCnt;
            var page;
            buffer.seek(0, 2);
            var childCount = buffer.readShort();
            for (i = 0; i < childCount; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.position;
                buffer.seek(curPos, 0);
                var baseType = buffer.readByte();
                var type = baseType;
                buffer.skip(4);
                elementId = buffer.readS();
                if (type == fgui.ObjectType.Component) {
                    if (buffer.seek(curPos, 6))
                        type = buffer.readByte();
                }
                buffer.seek(curPos, 1);
                if ((value = compStrings[elementId + "-tips"]) != null)
                    buffer.writeS(value);
                buffer.seek(curPos, 2);
                var gearCnt = buffer.readShort();
                for (j = 0; j < gearCnt; j++) {
                    nextPos = buffer.readShort();
                    nextPos += buffer.position;
                    if (buffer.readByte() == 6) //gearText
                     {
                        buffer.skip(2); //controller
                        valueCnt = buffer.readShort();
                        for (k = 0; k < valueCnt; k++) {
                            page = buffer.readS();
                            if (page != null) {
                                if ((value = compStrings[elementId + "-texts_" + k]) != null)
                                    buffer.writeS(value);
                                else
                                    buffer.skip(2);
                            }
                        }
                        if (buffer.readBool() && (value = compStrings[elementId + "-texts_def"]) != null)
                            buffer.writeS(value);
                    }
                    if (baseType == fgui.ObjectType.Component && buffer.version >= 2) {
                        buffer.seek(curPos, 4);
                        buffer.skip(2); //pageController
                        buffer.skip(4 * buffer.readShort());
                        var cpCount = buffer.readShort();
                        for (var k = 0; k < cpCount; k++) {
                            var target = buffer.readS();
                            var propertyId = buffer.readShort();
                            if (propertyId == 0 && (value = compStrings[elementId + "-cp-" + target]) != null)
                                buffer.writeS(value);
                            else
                                buffer.skip(2);
                        }
                    }
                    buffer.position = nextPos;
                }
                switch (type) {
                    case fgui.ObjectType.Text:
                    case fgui.ObjectType.RichText:
                    case fgui.ObjectType.InputText:
                        {
                            if ((value = compStrings[elementId]) != null) {
                                buffer.seek(curPos, 6);
                                buffer.writeS(value);
                            }
                            if ((value = compStrings[elementId + "-prompt"]) != null) {
                                buffer.seek(curPos, 4);
                                buffer.writeS(value);
                            }
                            break;
                        }
                    case fgui.ObjectType.List:
                    case fgui.ObjectType.Tree:
                        {
                            buffer.seek(curPos, 8);
                            buffer.skip(2);
                            itemCount = buffer.readShort();
                            for (j = 0; j < itemCount; j++) {
                                nextPos = buffer.readShort();
                                nextPos += buffer.position;
                                buffer.skip(2); //url
                                if (type == fgui.ObjectType.Tree)
                                    buffer.skip(2);
                                //title
                                if ((value = compStrings[elementId + "-" + j]) != null)
                                    buffer.writeS(value);
                                else
                                    buffer.skip(2);
                                //selected title
                                if ((value = compStrings[elementId + "-" + j + "-0"]) != null)
                                    buffer.writeS(value);
                                else
                                    buffer.skip(2);
                                if (buffer.version >= 2) {
                                    buffer.skip(6);
                                    buffer.skip(buffer.readUnsignedShort() * 4); //controllers
                                    var cpCount = buffer.readUnsignedShort();
                                    for (var k = 0; k < cpCount; k++) {
                                        var target = buffer.readS();
                                        var propertyId = buffer.readUnsignedShort();
                                        if (propertyId == 0 && (value = compStrings[elementId + "-" + j + "-" + target]) != null)
                                            buffer.writeS(value);
                                        else
                                            buffer.skip(2);
                                    }
                                }
                                buffer.position = nextPos;
                            }
                            break;
                        }
                    case fgui.ObjectType.Label:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                if ((value = compStrings[elementId]) != null)
                                    buffer.writeS(value);
                                else
                                    buffer.skip(2);
                                buffer.skip(2);
                                if (buffer.readBool())
                                    buffer.skip(4);
                                buffer.skip(4);
                                if (buffer.readBool() && (value = compStrings[elementId + "-prompt"]) != null)
                                    buffer.writeS(value);
                            }
                            break;
                        }
                    case fgui.ObjectType.Button:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                if ((value = compStrings[elementId]) != null)
                                    buffer.writeS(value);
                                else
                                    buffer.skip(2);
                                if ((value = compStrings[elementId + "-0"]) != null)
                                    buffer.writeS(value);
                            }
                            break;
                        }
                    case fgui.ObjectType.ComboBox:
                        {
                            if (buffer.seek(curPos, 6) && buffer.readByte() == type) {
                                itemCount = buffer.readShort();
                                for (j = 0; j < itemCount; j++) {
                                    nextPos = buffer.readShort();
                                    nextPos += buffer.position;
                                    if ((value = compStrings[elementId + "-" + j]) != null)
                                        buffer.writeS(value);
                                    buffer.position = nextPos;
                                }
                                if ((value = compStrings[elementId]) != null)
                                    buffer.writeS(value);
                            }
                            break;
                        }
                }
                buffer.position = curPos + dataLen;
            }
        };
        TranslationHelper.strings = null;
        return TranslationHelper;
    }());
    fgui.TranslationHelper = TranslationHelper;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.version = "1.0.0";
})(fgui || (fgui = {}));

(function (fgui) {
    var Window = /** @class */ (function (_super) {
        __extends(Window, _super);
        function Window() {
            var _this = _super.call(this) || this;
            _this._requestingCmd = 0;
            _this.focusable = true;
            _this._uiSources = [];
            _this.bringToFrontOnClick = fgui.UIConfig.bringWindowToFrontOnClick;
            _this.on("added", _this._onShown, _this);
            _this.on("removed", _this._onHidden, _this);
            _this.on(fgui.InteractiveEvents.Down, _this._mouseDown, _this);
            return _this;
        }
        Window.prototype.addUISource = function (source) {
            this._uiSources.push(source);
        };
        Object.defineProperty(Window.prototype, "contentPane", {
            get: function () {
                return this._contentPane;
            },
            set: function (val) {
                if (this._contentPane != val) {
                    if (this._contentPane != null)
                        this.removeChild(this._contentPane);
                    this._contentPane = val;
                    if (this._contentPane != null) {
                        this.addChild(this._contentPane);
                        this.setSize(this._contentPane.width, this._contentPane.height);
                        this._contentPane.addRelation(this, fgui.RelationType.Size);
                        this._frame = this._contentPane.getChild("frame");
                        if (this._frame != null) {
                            this.closeButton = this._frame.getChild("closeButton");
                            this.dragArea = this._frame.getChild("dragArea");
                            this.contentArea = this._frame.getChild("contentArea");
                        }
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "frame", {
            get: function () {
                return this._frame;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "closeButton", {
            get: function () {
                return this._closeButton;
            },
            set: function (value) {
                if (this._closeButton != null)
                    this._closeButton.off(fgui.InteractiveEvents.Click, this.closeEventHandler, this);
                this._closeButton = value;
                if (this._closeButton != null)
                    this._closeButton.on(fgui.InteractiveEvents.Click, this.closeEventHandler, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "dragArea", {
            get: function () {
                return this._dragArea;
            },
            set: function (value) {
                if (this._dragArea != value) {
                    if (this._dragArea != null) {
                        this._dragArea.draggable = false;
                        this._dragArea.off("__dragStart" /* START */, this._dragStart, this);
                    }
                    this._dragArea = value;
                    if (this._dragArea != null) {
                        if (this._dragArea instanceof fgui.GGraph)
                            this._dragArea.drawRect(0, 0, 0, 0, 0);
                        this._dragArea.draggable = true;
                        this._dragArea.on("__dragStart" /* START */, this._dragStart, this);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "contentArea", {
            get: function () {
                return this._contentArea;
            },
            set: function (value) {
                this._contentArea = value;
            },
            enumerable: true,
            configurable: true
        });
        Window.prototype.show = function () {
            fgui.GRoot.inst.showWindow(this);
        };
        Window.prototype.showOn = function (root) {
            root.showWindow(this);
        };
        Window.prototype.hide = function () {
            if (this.isShowing)
                this.doHideAnimation();
        };
        Window.prototype.hideImmediately = function () {
            var r = (this.parent && this.parent instanceof fgui.GRoot) ? this.parent : fgui.GRoot.inst;
            r.hideWindowImmediately(this);
        };
        Window.prototype.centerOn = function (r, autoUpdate) {
            if (autoUpdate === void 0) { autoUpdate = false; }
            this.setXY(Math.round((r.width - this.width) * .5), Math.round((r.height - this.height) * .5));
            if (autoUpdate) {
                this.addRelation(r, fgui.RelationType.Center_Center);
                this.addRelation(r, fgui.RelationType.Middle_Middle);
            }
        };
        Window.prototype.toggleVisible = function () {
            if (this.isTop)
                this.hide();
            else
                this.show();
        };
        Object.defineProperty(Window.prototype, "isShowing", {
            get: function () {
                return this.parent != null;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "isTop", {
            get: function () {
                return this.parent != null && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Window.prototype, "modal", {
            get: function () {
                return this._modal;
            },
            set: function (val) {
                this._modal = val;
            },
            enumerable: true,
            configurable: true
        });
        Window.prototype.bringToFront = function () {
            this.root.bringToFront(this);
        };
        Window.prototype.showModalWait = function (msg, cmd) {
            if (cmd === void 0) { cmd = 0; }
            if (cmd != 0)
                this._requestingCmd = cmd;
            if (fgui.UIConfig.windowModalWaiting) {
                if (!this._modalWaitPane)
                    this._modalWaitPane = fgui.UIPackage.createObjectFromURL(fgui.UIConfig.windowModalWaiting);
                this.layoutModalWaitPane(msg);
                this.addChild(this._modalWaitPane);
            }
        };
        Window.prototype.layoutModalWaitPane = function (msg) {
            if (this._contentArea != null) {
                var pt = this._frame.localToGlobal();
                pt = this.globalToLocal(pt.x, pt.y, pt);
                this._modalWaitPane.setXY(pt.x + this._contentArea.x, pt.y + this._contentArea.y);
                this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
                if (msg && msg.length)
                    this._modalWaitPane.text = msg;
            }
            else
                this._modalWaitPane.setSize(this.width, this.height);
        };
        Window.prototype.closeModalWait = function (cmd) {
            if (cmd === void 0) { cmd = 0; }
            if (cmd != 0) {
                if (this._requestingCmd != cmd)
                    return false;
            }
            this._requestingCmd = 0;
            if (this._modalWaitPane && this._modalWaitPane.parent != null)
                this.removeChild(this._modalWaitPane);
            return true;
        };
        Object.defineProperty(Window.prototype, "modalWaiting", {
            get: function () {
                return this._modalWaitPane && this._modalWaitPane.parent != null;
            },
            enumerable: true,
            configurable: true
        });
        Window.prototype.init = function () {
            var _this = this;
            if (this._inited || this._loading)
                return;
            if (this._uiSources.length > 0) {
                this._loading = false;
                this._uiSources.forEach(function (o) {
                    if (!o.loaded) {
                        o.load(_this._uiLoadComplete, _this);
                        _this._loading = true;
                    }
                }, this);
                if (!this._loading)
                    this._init();
            }
            else
                this._init();
        };
        Window.prototype.onInit = function () {
        };
        Window.prototype.onShown = function () {
        };
        Window.prototype.onHide = function () {
        };
        Window.prototype.doShowAnimation = function () {
            this.onShown();
        };
        Window.prototype.doHideAnimation = function () {
            this.hideImmediately();
        };
        Window.prototype._uiLoadComplete = function () {
            var cnt = this._uiSources.length;
            for (var i = 0; i < cnt; i++) {
                if (!this._uiSources[i].loaded)
                    return;
            }
            this._loading = false;
            this._init();
        };
        Window.prototype._init = function () {
            this._inited = true;
            this.onInit();
            if (this.isShowing)
                this.doShowAnimation();
        };
        Window.prototype.dispose = function () {
            this.off("added", this._onShown, this);
            this.off("removed", this._onHidden, this);
            this.off(fgui.InteractiveEvents.Down, this._mouseDown, this);
            if (this._dragArea)
                this._dragArea.off("__dragStart" /* START */, this._dragStart, this);
            if (this.parent != null)
                this.hideImmediately();
            if (this._modalWaitPane)
                this._modalWaitPane.dispose();
            if (this._contentPane)
                this._contentPane.dispose();
            _super.prototype.dispose.call(this);
        };
        Window.prototype.closeEventHandler = function (evt) {
            this.hide();
        };
        Window.prototype._onShown = function (target) {
            if (!this._inited)
                this.init();
            else
                this.doShowAnimation();
        };
        Window.prototype._onHidden = function (target) {
            this.closeModalWait();
            this.onHide();
        };
        Window.prototype._mouseDown = function (evt) {
            if (this.isShowing && this.bringToFrontOnClick)
                this.bringToFront();
        };
        Window.prototype._dragStart = function (evt) {
            fgui.GObject.cast(evt.currentTarget).stopDrag();
            this.startDrag(evt.data.pointerId);
        };
        return Window;
    }(fgui.GComponent));
    fgui.Window = Window;
})(fgui || (fgui = {}));

(function (fgui) {
    var pixi_extend;
    (function (pixi_extend) {
        var InteractionManager = /** @class */ (function (_super) {
            __extends(InteractionManager, _super);
            function InteractionManager(renderer, options) {
                var _this = _super.call(this, renderer, options) || this;
                _this.stageRotation = 0;
                _this.stageScaleX = 1;
                _this.stageScaleY = 1;
                return _this;
            }
            InteractionManager.prototype.mapPositionToPoint = function (point, x, y) {
                var rect = void 0;
                var dom = this.interactionDOMElement;
                // IE 11 fix
                if (!dom.parentElement) {
                    rect = { x: 0, y: 0, width: 0, height: 0 };
                }
                else {
                    rect = dom.getBoundingClientRect();
                }
                var nav = navigator;
                var resolutionMultiplier = nav.isCocoonJS ? this.resolution : 1.0 / this.resolution;
                var doc = document.documentElement;
                var left = rect.left + window.pageXOffset - doc.clientLeft;
                var top = rect.top + window.pageYOffset - doc.clientTop;
                x -= left;
                y -= top;
                var newx = x, newy = y;
                if (this.stageRotation == 90) {
                    newx = y;
                    newy = rect.width - x;
                }
                else if (this.stageRotation == -90) {
                    newx = rect.height - y;
                    newy = x;
                }
                newx = newx * this.stageScaleX * resolutionMultiplier;
                newy = newy * this.stageScaleY * resolutionMultiplier;
                point.set(newx, newy);
            };
            return InteractionManager;
        }(PIXI.interaction.InteractionManager));
        pixi_extend.InteractionManager = InteractionManager;
        var n = InteractionManager;
        //override
        PIXI.Renderer.registerPlugin("interaction", n);
        //PIXI.CanvasRenderer.registerPlugin("interaction", PIXI.extras.InteractionManager);
        //PIXI.WebGLRenderer.registerPlugin("interaction", PIXI.extras.InteractionManager);
    })(pixi_extend = fgui.pixi_extend || (fgui.pixi_extend = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var pixi_extend;
    (function (pixi_extend) {
        var NineSlicePlane = /** @class */ (function (_super) {
            __extends(NineSlicePlane, _super);
            function NineSlicePlane() {
                var _this = _super !== null && _super.apply(this, arguments) || this;
                _this.$flipX = false;
                _this.$flipY = false;
                return _this;
            }
            NineSlicePlane.prototype.updateHorizontalVertices = function () {
                var vertices = this.verticesBuffer;
                var h = this.topHeight + this.bottomHeight;
                var scale = this._height > h ? 1.0 : this._height / h;
                vertices[9] = vertices[11] = vertices[13] = vertices[15] = (this.$flipY ? this.bottomHeight : this.topHeight) * scale;
                vertices[17] = vertices[19] = vertices[21] = vertices[23] = this._height - (this.$flipY ? this.topHeight : this.bottomHeight) * scale;
                vertices[25] = vertices[27] = vertices[29] = vertices[31] = this._height;
            };
            ;
            NineSlicePlane.prototype.updateVerticalVertices = function () {
                var vertices = this.verticesBuffer;
                var w = this.leftWidth + this.rightWidth;
                var scale = this._width > w ? 1.0 : this._width / w;
                vertices[2] = vertices[10] = vertices[18] = vertices[26] = (this.$flipX ? this.rightWidth : this.leftWidth) * scale;
                vertices[4] = vertices[12] = vertices[20] = vertices[28] = this._width - (this.$flipX ? this.leftWidth : this.rightWidth) * scale;
                vertices[6] = vertices[14] = vertices[22] = vertices[30] = this._width;
            };
            ;
            NineSlicePlane.prototype._refresh = function () {
                //call stack: super() -> Plane.refresh -> this._refresh() but now _leftWidth etc are undefined, so the calculations in this._refresh are useless.
                if (isNaN(this.leftWidth) || isNaN(this.topHeight) || isNaN(this.rightWidth) || isNaN(this.bottomHeight))
                    return;
                _super.prototype._refresh.call(this);
                //let uvs = this.uvs;
                // !FIXME
                var uvs = this.uvBuffer;
                if (this.$flipX) {
                    var x0 = uvs[0];
                    var x1 = uvs[2];
                    uvs[0] = uvs[6];
                    uvs[2] = uvs[4];
                    uvs[6] = x0;
                    uvs[4] = x1;
                    x0 = uvs[8];
                    x1 = uvs[10];
                    uvs[8] = uvs[14];
                    uvs[10] = uvs[12];
                    uvs[14] = x0;
                    uvs[12] = x1;
                    x0 = uvs[16];
                    x1 = uvs[18];
                    uvs[16] = uvs[22];
                    uvs[18] = uvs[20];
                    uvs[22] = x0;
                    uvs[20] = x1;
                    x0 = uvs[24];
                    x1 = uvs[26];
                    uvs[24] = uvs[30];
                    uvs[26] = uvs[28];
                    uvs[30] = x0;
                    uvs[28] = x1;
                }
                if (this.$flipY) {
                    var y0 = uvs[1];
                    var y1 = uvs[9];
                    uvs[1] = uvs[25];
                    uvs[9] = uvs[17];
                    uvs[25] = y0;
                    uvs[17] = y1;
                    y0 = uvs[3];
                    y1 = uvs[11];
                    uvs[3] = uvs[27];
                    uvs[11] = uvs[19];
                    uvs[27] = y0;
                    uvs[19] = y1;
                    y0 = uvs[5];
                    y1 = uvs[13];
                    uvs[5] = uvs[29];
                    uvs[13] = uvs[21];
                    uvs[29] = y0;
                    uvs[21] = y1;
                    y0 = uvs[7];
                    y1 = uvs[15];
                    uvs[7] = uvs[31];
                    uvs[15] = uvs[23];
                    uvs[31] = y0;
                    uvs[23] = y1;
                }
            };
            Object.defineProperty(NineSlicePlane.prototype, "flipX", {
                get: function () {
                    return this.$flipX;
                },
                set: function (v) {
                    if (this.$flipX != v) {
                        this.$flipX = v;
                        this._refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(NineSlicePlane.prototype, "flipY", {
                get: function () {
                    return this.$flipY;
                },
                set: function (v) {
                    if (this.$flipY != v) {
                        this.$flipY = v;
                        this._refresh();
                    }
                },
                enumerable: true,
                configurable: true
            });
            return NineSlicePlane;
        }(PIXI.NineSlicePlane));
        pixi_extend.NineSlicePlane = NineSlicePlane;
    })(pixi_extend = fgui.pixi_extend || (fgui.pixi_extend = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var pixi_extend;
    (function (pixi_extend) {
        var Sprite = /** @class */ (function (_super) {
            __extends(Sprite, _super);
            function Sprite(frameId, tex) {
                var _this = _super.call(this, tex) || this;
                _this._flipX = false;
                _this._flipY = false;
                _this._frameId = frameId;
                return _this;
            }
            Object.defineProperty(Sprite.prototype, "flipX", {
                get: function () {
                    return this._flipX;
                },
                set: function (v) {
                    if (this._flipX != v) {
                        this._flipX = v;
                        fgui.GTimer.inst.callLater(this.updateUvs, this);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(Sprite.prototype, "flipY", {
                get: function () {
                    return this._flipY;
                },
                set: function (v) {
                    if (this._flipY != v) {
                        this._flipY = v;
                        fgui.GTimer.inst.callLater(this.updateUvs, this);
                    }
                },
                enumerable: true,
                configurable: true
            });
            Sprite.prototype.combineCacheId = function (flipx, flipy) {
                if (!this._frameId || this._frameId == "")
                    return null;
                return "_{this._frameId}_{flipx ? '_fx' : ''}_{flipy ? '_fy' : ''}";
            };
            Sprite.prototype.getTextureFromCache = function (flipx, flipy) {
                var cachedid = this.combineCacheId(flipx, flipy);
                if (cachedid == null)
                    return this.texture;
                var ret = Sprite._cachedTexturePool[cachedid];
                if (!ret) {
                    ret = {
                        refCount: 1,
                        texture: this.createFlippedTexture(this.texture, flipx, flipy)
                    };
                    Sprite._cachedTexturePool[cachedid] = ret;
                }
                else
                    ret.refCount++;
                return ret.texture;
            };
            Sprite.prototype.tryRemoveTextureCache = function (flipx, flipy) {
                var cachedid = this.combineCacheId(flipx, flipy);
                if (!cachedid)
                    return false;
                var ret = Sprite._cachedTexturePool[cachedid];
                if (ret) {
                    ret.refCount--;
                    if (ret.refCount <= 0) {
                        ret.texture.destroy();
                        delete Sprite._cachedTexturePool[cachedid];
                    }
                    return true;
                }
                return false;
            };
            Sprite.prototype.createFlippedTexture = function (origTexture, flipx, flipy) {
                var newTex = origTexture.clone();
                var uvs = newTex["_uvs"];
                if (this._flipX) {
                    var tx0 = uvs.x0;
                    var tx3 = uvs.x3;
                    uvs.x0 = uvs.x1;
                    uvs.x1 = tx0;
                    uvs.x3 = uvs.x2;
                    uvs.x2 = tx3;
                }
                if (this._flipY) {
                    var ty0 = uvs.y0;
                    var ty1 = uvs.y1;
                    uvs.y0 = uvs.y3;
                    uvs.y3 = ty0;
                    uvs.y1 = uvs.y2;
                    uvs.y2 = ty1;
                }
                newTex.uvMatrix;
                // uvs.uvsUint32[0] = (uvs.y0 * 65535 & 0xFFFF) << 16 | uvs.x0 * 65535 & 0xFFFF;
                // uvs.uvsUint32[1] = (uvs.y1 * 65535 & 0xFFFF) << 16 | uvs.x1 * 65535 & 0xFFFF;
                // uvs.uvsUint32[2] = (uvs.y2 * 65535 & 0xFFFF) << 16 | uvs.x2 * 65535 & 0xFFFF;
                // uvs.uvsUint32[3] = (uvs.y3 * 65535 & 0xFFFF) << 16 | uvs.x3 * 65535 & 0xFFFF;
                return newTex;
            };
            Sprite.prototype.updateUvs = function () {
                if (!this.texture)
                    return;
                if (this._flipX || this._flipY) {
                    var cachedTex = this.getTextureFromCache(this._flipX, this._flipY);
                    if (this.texture != cachedTex) {
                        this.texture = cachedTex;
                    }
                }
            };
            Sprite.prototype.destroy = function (options) {
                this.tryRemoveTextureCache(this._flipX, this._flipY);
                _super.prototype.destroy.call(this, options);
            };
            Sprite._cachedTexturePool = {};
            return Sprite;
        }(PIXI.Sprite));
        pixi_extend.Sprite = Sprite;
    })(pixi_extend = fgui.pixi_extend || (fgui.pixi_extend = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    /**global ui configuration */
    var UIConfig = /** @class */ (function () {
        function UIConfig() {
        }
        /**default font name of your project.
         * 默认字体
         */
        UIConfig.defaultFont = "Arial";
        /** modal layer background configuration. */
        UIConfig.modalLayerColor = 0x333333;
        UIConfig.modalLayerAlpha = 0.2;
        UIConfig.buttonSoundVolumeScale = 1;
        //Scrolling step in pixels
        UIConfig.defaultScrollStep = 25;
        /** Deceleration ratio of scrollpane when its in touch dragging.*/
        UIConfig.defaultScrollDecelerationRate = .967;
        /** default scrollbar display mode. It's recommended to set ScrollBarDisplayType.Visible for Desktop environment and ScrollBarDisplayType.Auto for mobile environment.*/
        UIConfig.defaultScrollBarDisplay = fgui.ScrollBarDisplayType.Visible;
        /** allow user to drag the content of a container. Set to true for mobile is recommended.*/
        UIConfig.defaultScrollTouchEffect = true;
        /** enable bounce effect when the scrolling reaches to the edge of a container. Set to true for mobile is recommended.*/
        UIConfig.defaultScrollBounceEffect = true;
        /** maximum count of items to be displayed in the visible viewport of the GCombobox.*/
        UIConfig.defaultComboBoxVisibleItemCount = 10;
        /** the finger moving threshold in pixel to trigger the scrolling action.*/
        UIConfig.touchScrollSensitivity = 20;
        /** the finger moving threshold in pixel to trigger the dragging event.*/
        UIConfig.touchDragSensitivity = 10;
        /** auto bring the window you clicked to the topmost level of the GRoot children list.*/
        UIConfig.bringWindowToFrontOnClick = true;
        UIConfig.frameTimeForAsyncUIConstruction = 2;
        return UIConfig;
    }());
    fgui.UIConfig = UIConfig;
})(fgui || (fgui = {}));

(function (fgui) {
    /** Action 类型定义 */
    var eActionType;
    (function (eActionType) {
        /** 播放动效 */
        eActionType[eActionType["PlayTransitionAction"] = 0] = "PlayTransitionAction";
        /** 改变页面 */
        eActionType[eActionType["ChangePageAction"] = 1] = "ChangePageAction";
    })(eActionType = fgui.eActionType || (fgui.eActionType = {}));
    var Action = /** @class */ (function () {
        function Action() {
        }
        Action.createAction = function (type) {
            switch (type) {
                case eActionType.PlayTransitionAction:
                    return new fgui.PlayTransitionAction();
                case eActionType.ChangePageAction:
                    return new fgui.ChangePageAction();
            }
            return null;
        };
        Action.create = function (type) {
            switch (type) {
                case "play_transition":
                    return new fgui.PlayTransitionAction();
                case "change_page":
                    return new fgui.ChangePageAction();
            }
            return null;
        };
        Action.prototype.execute = function (controller, prevPage, curPage) {
            if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
                && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
                this.enter(controller);
            else
                this.leave(controller);
        };
        Action.prototype.enter = function (controller) {
        };
        Action.prototype.leave = function (controller) {
        };
        /**
         * @hide
         * @param buffer package 包中对应的Action对象属性字节流
         */
        Action.prototype.setup = function (buffer) {
            var cnt;
            var i;
            cnt = buffer.readShort();
            this.fromPage = [];
            for (i = 0; i < cnt; i++) {
                this.fromPage[i] = buffer.readS();
            }
            cnt = buffer.readShort();
            this.toPage = [];
            for (i = 0; i < cnt; i++) {
                this.toPage[i] = buffer.readS();
            }
        };
        /**
         * v1 版本
         * @hide
         * @param xml 属性
         */
        Action.prototype.setupv1 = function (xml) {
            var str;
            str = xml.attributes.fromPage;
            if (str)
                this.fromPage = str.split(",");
            str = xml.attributes.toPage;
            if (str)
                this.toPage = str.split(",");
        };
        return Action;
    }());
    fgui.Action = Action;
})(fgui || (fgui = {}));

(function (fgui) {
    /**
     * 改变页面 Action
     */
    var ChangePageAction = /** @class */ (function (_super) {
        __extends(ChangePageAction, _super);
        function ChangePageAction() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * @override Action.enter
         * @param controller
         */
        ChangePageAction.prototype.enter = function (controller) {
            if (!this.controllerName) {
                return;
            }
            var gcom;
            if (this.objectId) {
                var obj = controller.parent.getChildById(this.objectId);
                if (obj instanceof fgui.GComponent) {
                    gcom = obj;
                }
                else {
                    return;
                }
            }
            else {
                gcom = controller.parent;
            }
            if (gcom) {
                var cc = gcom.getController(this.controllerName);
                if (cc && cc != controller && !cc.changing) {
                    if (this.targetPage == "~1") {
                        if (controller.selectedIndex < cc.pageCount) {
                            cc.selectedIndex = controller.selectedIndex;
                        }
                    }
                    else if (this.targetPage == "~2") {
                        cc.selectedPage = controller.selectedPage;
                    }
                    else {
                        cc.selectedPageId = this.targetPage;
                    }
                }
            }
        };
        /**
         * @hide
         * @override Action.setup
         * @param buffer 参数流
         */
        ChangePageAction.prototype.setup = function (buffer) {
            _super.prototype.setup.call(this, buffer);
            this.objectId = buffer.readS();
            this.controllerName = buffer.readS();
            this.targetPage = buffer.readS();
        };
        return ChangePageAction;
    }(fgui.Action));
    fgui.ChangePageAction = ChangePageAction;
})(fgui || (fgui = {}));

(function (fgui) {
    var PageOption = /** @class */ (function () {
        function PageOption() {
        }
        Object.defineProperty(PageOption.prototype, "controller", {
            set: function (val) {
                this._controller = val;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageOption.prototype, "name", {
            get: function () {
                if (this._id)
                    return this._controller.getPageNameById(this._id);
                else
                    return null;
            },
            set: function (pageName) {
                this._id = this._controller.getPageIdByName(pageName);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(PageOption.prototype, "index", {
            get: function () {
                if (this._id)
                    return this._controller.getPageIndexById(this._id);
                else
                    return -1;
            },
            set: function (pageIndex) {
                this._id = this._controller.getPageId(pageIndex);
            },
            enumerable: true,
            configurable: true
        });
        PageOption.prototype.clear = function () {
            this._id = null;
        };
        Object.defineProperty(PageOption.prototype, "id", {
            get: function () {
                return this._id;
            },
            set: function (id) {
                this._id = id;
            },
            enumerable: true,
            configurable: true
        });
        return PageOption;
    }());
    fgui.PageOption = PageOption;
})(fgui || (fgui = {}));

(function (fgui) {
    var PlayTransitionAction = /** @class */ (function (_super) {
        __extends(PlayTransitionAction, _super);
        function PlayTransitionAction() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.delay = 0;
            _this.stopOnExit = false;
            return _this;
        }
        PlayTransitionAction.prototype.enter = function (controller) {
            var trans = controller.parent.getTransition(this.transitionName);
            if (trans) {
                if (this._currentTransition && this._currentTransition.playing) {
                    trans.changePlayTimes(this.playTimes);
                }
                else {
                    trans.play(null, null, null, this.playTimes, this.delay);
                }
                this._currentTransition = trans;
            }
        };
        PlayTransitionAction.prototype.leave = function (controller) {
            if (this.stopOnExit && this._currentTransition) {
                this._currentTransition.stop();
                this._currentTransition = null;
            }
        };
        PlayTransitionAction.prototype.setup = function (buffer) {
            _super.prototype.setup.call(this, buffer);
            this.transitionName = buffer.readS();
            this.playTimes = buffer.readInt();
            this.delay = buffer.readFloat();
            this.stopOnExit = buffer.readBool();
        };
        return PlayTransitionAction;
    }(fgui.Action));
    fgui.PlayTransitionAction = PlayTransitionAction;
})(fgui || (fgui = {}));

(function (fgui) {
    var BMGlyph = /** @class */ (function () {
        function BMGlyph() {
            this.x = 0;
            this.y = 0;
            this.offsetX = 0;
            this.offsetY = 0;
            this.width = 0;
            this.height = 0;
            this.advance = 0;
            this.lineHeight = 0;
            this.channel = 0;
        }
        return BMGlyph;
    }());
    fgui.BMGlyph = BMGlyph;
})(fgui || (fgui = {}));

(function (fgui) {
    var BitmapFont = /** @class */ (function () {
        function BitmapFont() {
            this.size = 0;
            this.glyphs = {};
        }
        return BitmapFont;
    }());
    fgui.BitmapFont = BitmapFont;
})(fgui || (fgui = {}));

(function (fgui) {
    /**for webgl only */
    var FillSprite = /** @class */ (function (_super) {
        __extends(FillSprite, _super);
        function FillSprite(texture) {
            var _this = _super.call(this, texture) || this;
            _this._fillDir = 0 /* CW */; //for deg type only
            _this._flip = 0;
            _this._percent = 0;
            return _this;
        }
        Object.defineProperty(FillSprite.prototype, "flip", {
            get: function () {
                return this._flip;
            },
            set: function (v) {
                if (v != this._flip) {
                    this._flip = v;
                    //this.requiresUpdate = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FillSprite.prototype, "fillAmount", {
            get: function () {
                return typeof this._fillAmount == "number" ? this._fillAmount : 100;
            },
            set: function (n) {
                if (n != this._fillAmount) {
                    this._fillAmount = n;
                    //this.requiresUpdate = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FillSprite.prototype, "fillBegin", {
            get: function () {
                return this._fillBegin;
            },
            set: function (n) {
                if (n != this._fillBegin) {
                    this._fillBegin = n;
                    //this.requiresUpdate = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FillSprite.prototype, "fillMode", {
            get: function () {
                return this._fillMode;
            },
            set: function (n) {
                if (n != this._fillMode) {
                    this._fillMode = n;
                    this.checkAndFixFillBegin();
                    //this.requiresUpdate = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(FillSprite.prototype, "fillDirection", {
            get: function () {
                return this._fillDir;
            },
            set: function (n) {
                if (n != this._fillDir) {
                    this._fillDir = n;
                    this.checkAndFixFillBegin();
                    //this.requiresUpdate = true;
                }
            },
            enumerable: true,
            configurable: true
        });
        FillSprite.prototype.checkAndFixFillBegin = function () {
            switch (this._fillMode) {
                case 1 /* HORZ */:
                    if (this._fillBegin != 0 /* L */ && this._fillBegin != 1 /* R */)
                        this._fillBegin = 0 /* L */;
                    break;
                case 2 /* VERT */:
                    if (this._fillBegin != 2 /* T */ && this._fillBegin != 3 /* B */)
                        this._fillBegin = 2 /* T */;
                    break;
                case 3 /* DEG90 */:
                    if (this._fillBegin != 4 /* LT */ && this._fillBegin != 6 /* LB */
                        && this._fillBegin != 5 /* RT */ && this._fillBegin != 7 /* RB */)
                        this._fillBegin = 4 /* LT */;
                    break;
                case 4 /* DEG180 */:
                case 5 /* DEG360 */:
                    if (this._fillBegin != 0 /* L */ && this._fillBegin != 1 /* R */
                        && this._fillBegin != 2 /* T */ && this._fillBegin != 3 /* B */)
                        this._fillBegin = 2 /* T */;
                    break;
            }
        };
        Object.defineProperty(FillSprite.prototype, "amount", {
            get: function () {
                return this._percent;
            },
            set: function (v) {
                this._percent = v;
            },
            enumerable: true,
            configurable: true
        });
        return FillSprite;
    }(PIXI.Sprite));
    fgui.FillSprite = FillSprite;
})(fgui || (fgui = {}));

(function (fgui) {
    /**
     * 动画帧
     */
    var Frame = /** @class */ (function () {
        function Frame() {
            /** 延时 */
            this.addDelay = 0;
        }
        return Frame;
    }());
    fgui.Frame = Frame;
})(fgui || (fgui = {}));

(function (fgui) {
    var HTMLInput = /** @class */ (function () {
        function HTMLInput() {
            /**@internal */
            this._requestToShow = false;
            /**@internal */
            this._scaleX = 1;
            /**@internal */
            this._scaleY = 1;
        }
        Object.defineProperty(HTMLInput, "inst", {
            get: function () {
                if (!HTMLInput._instance)
                    HTMLInput._instance = new HTMLInput();
                return HTMLInput._instance;
            },
            enumerable: true,
            configurable: true
        });
        HTMLInput.prototype.initialize = function (container, view) {
            this._canvas = view;
            var div;
            if (!this._delegateDiv) {
                div = document.createElement("div");
                this._delegateDiv = div;
                div.id = "__delegateDiv";
                container.appendChild(div);
                this.initDomPos(div);
                this._wrapper = document.createElement("div");
                this.initDomPos(this._wrapper);
                this._wrapper.style.width = "0px";
                this._wrapper.style.height = "0px";
                this._wrapper.style.left = "0px";
                this._wrapper.style.top = "-100px";
                this.setTransform(this._wrapper, "0% 0% 0px");
                div.appendChild(this._wrapper);
                fgui.GRoot.inst.on(fgui.InteractiveEvents.Click, this.canvasClickHandler, this);
                this.initInputElement(true); //input
                this.initInputElement(false); //textarea
            }
        };
        HTMLInput.prototype.isInputOn = function () {
            return this._input != null;
        };
        HTMLInput.prototype.canvasClickHandler = function (e) {
            if (this._requestToShow) {
                this._requestToShow = false;
                this._input.onClickHandler(e);
                this.show();
            }
            else {
                if (this._curEle) {
                    this.clearInputElement();
                    this._curEle.blur();
                    this._curEle = null;
                }
            }
        };
        HTMLInput.prototype.isInputShown = function () {
            return this._input != null;
        };
        HTMLInput.prototype.isCurrentInput = function (input) {
            return this._input == input;
        };
        HTMLInput.prototype.initDomPos = function (dom) {
            dom.style.position = "absolute";
            dom.style.left = "0px";
            dom.style.top = "0px";
            dom.style.border = "none";
            dom.style.padding = "0";
        };
        HTMLInput.prototype.setTransform = function (el, origin, transform) {
            var style = el.style;
            style.transformOrigin = style.webkitTransformOrigin = style.msTransformOrigin = style.mozTransformOrigin = style.oTransformOrigin = origin;
            if (transform && transform.length > 0)
                style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = transform;
        };
        /**@internal */
        HTMLInput.prototype.updateSize = function (sx, sy) {
            if (!this._canvas)
                return;
            this._scaleX = sx;
            this._scaleY = sy;
            this._delegateDiv.style.left = this._canvas.style.left;
            this._delegateDiv.style.top = this._canvas.style.top;
            var cvsStyle = this._canvas.style;
            this.setTransform(this._delegateDiv, "0% 0% 0px", cvsStyle.transform || cvsStyle.webkitTransform || cvsStyle.msTransform || cvsStyle.mozTransform || cvsStyle.oTransform);
        };
        HTMLInput.prototype.initInputElement = function (multiline) {
            var _this = this;
            var inputElement;
            if (multiline) {
                inputElement = document.createElement("textarea");
                inputElement.style.resize = "none";
                this._multiLine = inputElement;
                inputElement.id = "stageTextAreaEle";
            }
            else {
                inputElement = document.createElement("input");
                this._singleLine = inputElement;
                inputElement.type = "text";
                inputElement.id = "stageInputEle";
            }
            this._wrapper.appendChild(inputElement);
            inputElement.setAttribute("tabindex", "-1");
            inputElement.style.width = "1px";
            inputElement.style.height = "12px";
            this.initDomPos(inputElement);
            var style = inputElement.style;
            style.outline = "thin";
            style.background = "none";
            style.overflow = "hidden";
            style.wordBreak = "break-all";
            style.opacity = 0;
            inputElement.oninput = function (e) {
                if (_this._input)
                    _this._input.onInputHandler();
            };
        };
        HTMLInput.prototype.show = function () {
            var _this = this;
            fgui.GTimer.inst.callLater(function () {
                _this._curEle.style.opacity = "1";
                _this._curEle.focus();
            }, this);
        };
        HTMLInput.prototype.disconnect = function (ele) {
            if (this._input == null || this._input == ele) {
                this.clearInputElement();
                if (this._curEle)
                    this._curEle.blur();
            }
        };
        HTMLInput.prototype.clearAttributes = function (obj) {
            if (this._curEle) {
                for (var key in obj) {
                    this._curEle.removeAttribute(key);
                }
            }
        };
        HTMLInput.prototype.clearInputElement = function () {
            if (this._curEle) {
                this._curEle.value = "";
                this._curEle.onblur = null;
                var style = this._curEle.style;
                style.width = "1px";
                style.height = "12px";
                style.left = "0px";
                style.top = "0px";
                style.opacity = "0";
                var el2 = void 0;
                if (this._singleLine == this._curEle)
                    el2 = this._multiLine;
                else
                    el2 = this._singleLine;
                el2.style.display = "block";
                this._wrapper.style.left = "0px";
                this._wrapper.style.top = "-100px";
                this._wrapper.style.height = "0px";
                this._wrapper.style.width = "0px";
            }
            if (this._input) {
                this._input.onDisconnect();
                this._input = null;
                HTMLInput.isTyping = false;
            }
        };
        HTMLInput.prototype.requestInput = function (ele) {
            this.clearInputElement();
            this._input = ele;
            HTMLInput.isTyping = true;
            var el2;
            if (this._input.textField.multipleLine) {
                this._curEle = this._multiLine;
                el2 = this._singleLine;
            }
            else {
                this._curEle = this._singleLine;
                el2 = this._multiLine;
            }
            el2.style.display = "none";
            return this._curEle;
        };
        HTMLInput.isTyping = false;
        return HTMLInput;
    }());
    fgui.HTMLInput = HTMLInput;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isUIObject = function (obj) {
        return obj && "UIOwner" in obj && obj.UIOwner != null;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    var InputElement = /** @class */ (function (_super) {
        __extends(InputElement, _super);
        function InputElement(tf) {
            var _this = _super.call(this) || this;
            _this._requestToShow = false;
            //private _requestToHide:boolean = false;
            _this.inputElement = null;
            _this.inputDiv = null;
            _this._scaleX = 0;
            _this._scaleY = 0;
            _this.textValue = "";
            _this.colorValue = 0xffffff;
            _this._attrsCache = {};
            _this._textfield = tf;
            return _this;
        }
        /**@internal */
        InputElement.prototype._addToStage = function () {
            this.htmlInput = fgui.HTMLInput.inst; //take multiple canvas on webpage into account?
        };
        InputElement.prototype.initElement = function () {
            var point = this._textfield.localToGlobal(0, 0);
            var x = point.x;
            var y = point.y;
            var scaleX = this.htmlInput._scaleX;
            var scaleY = this.htmlInput._scaleY;
            if (!this._textfield.multipleLine)
                this.inputElement.style.top = (-this._textfield.leading * scaleY) + "px";
            this.inputDiv.style.top = (y + 1) * scaleY + "px";
            this.inputDiv.style.left = x * scaleX + "px";
            var node = this._textfield;
            var cX = 1;
            var cY = 1;
            var rotation = 0;
            while (node.parent) {
                cX *= node.scaleX;
                cY *= node.scaleY;
                rotation += node.rotation;
                node = node.parent;
            }
            var style = this.inputDiv.style;
            style.transform = style.webkitTransform = style.msTransform = style.mozTransform = style.oTransform = "rotate(" + rotation + "deg)";
            this._scaleX = scaleX * cX;
            this._scaleY = scaleY * cY;
        };
        Object.defineProperty(InputElement.prototype, "textField", {
            get: function () {
                return this._textfield;
            },
            enumerable: true,
            configurable: true
        });
        /**@internal */
        InputElement.prototype._show = function () {
            if (!this.htmlInput.isCurrentInput(this)) {
                this.inputElement = this.htmlInput.requestInput(this);
                if (!this._textfield.multipleLine)
                    this.inputElement.type = this._textfield.type;
                for (var key in this._attrsCache)
                    this.inputElement.setAttribute(key, this._attrsCache[key]);
                this.inputDiv = this.htmlInput._wrapper;
            }
            else
                this.inputElement.onblur = null;
            this.htmlInput._requestToShow = true;
            this._requestToShow = true;
            this.initElement();
        };
        InputElement.prototype.onBlurHandler = function () {
            this.htmlInput.clearInputElement();
            this.htmlInput.clearAttributes(this._attrsCache);
            window.scrollTo(0, 0);
        };
        /**@internal */
        InputElement.prototype._hide = function () {
            /*this._requestToHide = true;
            if (this.htmlInput && PIXI.utils.isMobile && iOS) {  //if os is ios need to clearInput once
                this.htmlInput.disconnect(this);
            }*/
        };
        Object.defineProperty(InputElement.prototype, "text", {
            get: function () {
                if (!this.textValue)
                    this.textValue = "";
                return this.textValue;
            },
            set: function (value) {
                this.textValue = value;
                if (this.inputElement)
                    this.inputElement.value = this.textValue;
            },
            enumerable: true,
            configurable: true
        });
        InputElement.prototype.setColor = function (value) {
            this.colorValue = value;
            if (this.inputElement)
                this.setElementStyle("color", fgui.utils.StringUtil.convertToHtmlColor(this.colorValue));
        };
        /**@internal */
        InputElement.prototype._onBlur = function () {
            //this.emit("updateText");
        };
        InputElement.prototype.onInputHandler = function () {
            var _this = this;
            window.setTimeout(function () {
                _this.textValue = _this.inputElement.value;
                _this.emit("updateText");
            }, 0);
        };
        InputElement.prototype.setAreaHeight = function () {
            var tf = this._textfield;
            if (tf.multipleLine) {
                var textheight = tf.textHeight;
                if (tf.height <= tf.fontSize) {
                    this.setElementStyle("height", tf.fontSize * this._scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
                else if (tf.height < textheight) {
                    this.setElementStyle("height", (tf.height) * this._scaleY + "px");
                    this.setElementStyle("padding", "0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
                else {
                    this.setElementStyle("height", (textheight + tf.leading) * this._scaleY + "px");
                    var rap = (tf.height - textheight) * this._scaleY;
                    var valign = this.getVAlignFactor(tf);
                    var top_1 = rap * valign;
                    var bottom = rap - top_1;
                    this.setElementStyle("padding", top_1 + "px 0px " + bottom + "px 0px");
                    this.setElementStyle("lineHeight", tf.lineHeight * this._scaleY + "px");
                }
            }
        };
        InputElement.prototype.getVAlignFactor = function (textfield) {
            var vao = 0;
            switch (textfield.verticalAlign) {
                case fgui.VertAlignType.Top:
                    break;
                case fgui.VertAlignType.Middle:
                    vao = .5;
                    break;
                case fgui.VertAlignType.Bottom:
                    vao = 1;
                    break;
            }
            return vao;
        };
        InputElement.prototype.onClickHandler = function (e) {
            if (this._requestToShow) {
                //e.stopImmediatePropagation();
                this._requestToShow = false;
                this.inputElement.value = this.text;
                if (this.inputElement.onblur == null)
                    this.inputElement.onblur = fgui.utils.Binder.create(this.onBlurHandler, this);
                this.resetInput();
                if (this._textfield.maxLength > 0)
                    this.inputElement.setAttribute("maxlength", String(this._textfield.maxLength));
                else
                    this.inputElement.removeAttribute("maxlength");
                this.inputElement.selectionStart = this.inputElement.value.length;
                this.inputElement.selectionEnd = this.inputElement.value.length;
                this.inputElement.focus();
                this.emit("__focusChanged" /* CHANGED */, "focus", this.inputElement);
            }
        };
        InputElement.prototype.onDisconnect = function () {
            this.inputElement = null;
            this.emit("__focusChanged" /* CHANGED */, "blur", this.inputElement);
        };
        InputElement.prototype.setElementStyle = function (style, value) {
            if (value == null)
                return;
            if (this.inputElement) {
                var ss = this.inputElement.style;
                ss[style] = value;
            }
        };
        InputElement.prototype.setAttribute = function (name, value) {
            if (name == null || value == null)
                return;
            this._attrsCache[name] = value;
        };
        InputElement.prototype.getAttribute = function (name) {
            return this._attrsCache[name];
        };
        /**@internal */
        InputElement.prototype._removeFromStage = function () {
            if (this.inputElement)
                this.htmlInput.disconnect(this);
        };
        InputElement.prototype.resetInput = function () {
            if (this.inputElement) {
                var textfield = this._textfield;
                this.setElementStyle("fontFamily", textfield.font);
                this.setElementStyle("fontStyle", textfield.italic ? "italic" : "normal");
                this.setElementStyle("fontWeight", textfield.bold ? "bold" : "normal");
                this.setElementStyle("textAlign", textfield.align);
                this.setElementStyle("fontSize", textfield.fontSize * this._scaleY + "px");
                this.setElementStyle("color", fgui.utils.StringUtil.convertToHtmlColor(textfield.color));
                this.setElementStyle("width", textfield.width * this._scaleX + "px"); //take 'maxWidth' into account
                var va = "middle", vao = 0;
                switch (textfield.verticalAlign) {
                    case fgui.VertAlignType.Top:
                        va = "top";
                        break;
                    case fgui.VertAlignType.Middle:
                        va = "middle";
                        vao = .5;
                        break;
                    case fgui.VertAlignType.Bottom:
                        va = "bottom";
                        vao = 1;
                        break;
                }
                this.setElementStyle("verticalAlign", va);
                if (textfield.multipleLine)
                    this.setAreaHeight();
                else {
                    this.setElementStyle("lineHeight", textfield.lineHeight * this._scaleY + "px");
                    if (textfield.height < textfield.fontSize) {
                        this.setElementStyle("height", textfield.fontSize * this._scaleY + "px");
                        this.setElementStyle("padding", "0px 0px " + (textfield.fontSize * .5 * this._scaleX) + "px 0px");
                    }
                    else {
                        this.setElementStyle("height", textfield.fontSize * this._scaleY + "px");
                        var rap = (textfield.height - textfield.fontSize) * this._scaleY;
                        var top_2 = rap * vao;
                        var bottom = rap - top_2, fsy = textfield.fontSize * .5 * this._scaleY;
                        if (bottom < fsy)
                            bottom = fsy;
                        this.setElementStyle("padding", top_2 + "px 0px " + bottom + "px 0px");
                    }
                }
                this.inputDiv.style.clip = "rect(0px " + (textfield.width * this._scaleX) + "px " + (textfield.height * this._scaleY) + "px 0px)";
                this.inputDiv.style.height = textfield.height * this._scaleY + "px";
                this.inputDiv.style.width = textfield.width * this._scaleX + "px"; //take 'maxWidth' into account
            }
        };
        return InputElement;
    }(PIXI.utils.EventEmitter));
    fgui.InputElement = InputElement;
})(fgui || (fgui = {}));

(function (fgui) {
    ;
    var MovieClip = /** @class */ (function (_super) {
        __extends(MovieClip, _super);
        function MovieClip(owner) {
            var _this = _super.call(this) || this;
            /** @hide 间隔 */
            _this.interval = 0;
            _this.repeatDelay = 0;
            /** @hide 帧数量 */
            _this._frameCount = 0;
            /** @hide 当前帧 */
            _this._currentFrame = 0;
            /** @hide 状态 */
            _this._status = 0 /* NORMAL */;
            _this._frameElapsed = 0; //当前帧延迟
            _this.UIOwner = owner;
            _this.data = new fgui.MovieClipData();
            _this._playing = true;
            _this.interactive = _this.interactiveChildren = false;
            _this._settings = new fgui.DefaultMovieClipSettings();
            // 监听增加到舞台事件
            _this.on("added", _this.added, _this);
            _this.on("removed", _this.removed, _this);
            return _this;
        }
        Object.defineProperty(MovieClip.prototype, "frames", {
            /** 获取帧信息 */
            get: function () {
                return this._frames;
            },
            /** 设置帧信息 */
            set: function (value) {
                this._frames = value;
                if (this._frames != null)
                    this._frameCount = this._frames.length;
                else
                    this._frameCount = 0;
                if (this._settings.endFrame == -1 || this._settings.endFrame > this._frameCount - 1)
                    this._settings.endFrame = this._frameCount - 1;
                if (this._settings.loopEndAt == -1 || this._settings.loopEndAt > this._frameCount - 1)
                    this._settings.loopEndAt = this._frameCount - 1;
                if (this._currentFrame < 0 || this._currentFrame > this._frameCount - 1)
                    this._currentFrame = this._frameCount - 1;
                if (this._frameCount > 0)
                    this.setFrame(this._frames[this._currentFrame]);
                else
                    this.setFrame(null);
                this.data.rewind();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "frameCount", {
            get: function () {
                return this._frameCount;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "currentFrame", {
            // public set frame(value: number) {
            //     if (this._frame != value) {
            //         if (this._frames != null && value >= this._frameCount)
            //             value = this._frameCount - 1;
            //         this._frame = value;
            //         this._frameElapsed = 0;
            //         this.drawFrame();
            //     }
            // }
            /** 获取当前帧 */
            get: function () {
                return this._currentFrame;
            },
            /** 设置当前的帧 */
            set: function (value) {
                if (this._currentFrame != value) {
                    this._currentFrame = value;
                    this.data.currentFrame = value;
                    this.setFrame(this._currentFrame < this._frameCount ? this._frames[this._currentFrame] : null);
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MovieClip.prototype, "playing", {
            /** 是否正在播放 */
            get: function () {
                return this._playing;
            },
            /** 是否正在播放 */
            set: function (value) {
                this._playing = value;
                if (value && fgui.GObject.isDisplayObjectOnStage(this))
                    fgui.GTimer.inst.add(0, 0, this.update, this);
                else
                    fgui.GTimer.inst.remove(this.update, this);
            },
            enumerable: true,
            configurable: true
        });
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
        MovieClip.prototype.setPlaySettings = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (args.length == 1 && typeof args[0] == "object")
                this._settings.mix(args[0]);
            else {
                var s = args[0], e = args[1], r = args[2], l = args[3], ec = args[4], ecc = args[5];
                var o = {};
                if (fgui.utils.NumberUtil.isNumber(s))
                    o.startFrame = s;
                if (fgui.utils.NumberUtil.isNumber(e))
                    o.endFrame = e;
                if (fgui.utils.NumberUtil.isNumber(r))
                    o.repeatCount = r;
                if (fgui.utils.NumberUtil.isNumber(l))
                    o.loopEndAt = l;
                if (ec && typeof (ec) == "function")
                    o.endCallback = ec;
                if (ecc)
                    o.endCallbackContext = ecc;
                this._settings.mix(o);
            }
            if (this._settings.endFrame == -1 || this._settings.endFrame > this._frameCount - 1)
                this._settings.endFrame = this._frameCount - 1;
            if (this._settings.loopEndAt == -1)
                this._settings.loopEndAt = this._settings.endFrame;
            this._status = 0 /* NORMAL */;
            this.currentFrame = this._settings.startFrame;
        };
        MovieClip.prototype.update = function () {
            //if(this.UIOwner._inProgressBuilding) return;
            if (this._playing && this._frameCount != 0 && this._status != 3 /* ENDED */) {
                this.data.update(this);
                if (this._currentFrame != this.data.currentFrame) {
                    if (this._status == 1 /* LOOPING */) {
                        this._currentFrame = this._settings.startFrame;
                        this.data.currentFrame = this._currentFrame;
                        this._status = 0 /* NORMAL */;
                    }
                    else if (this._status == 2 /* STOPPING */) {
                        this._currentFrame = this._settings.loopEndAt;
                        this.data.currentFrame = this._currentFrame;
                        this._status = 3 /* ENDED */;
                        //play end
                        if (this._settings.endCallback != null)
                            fgui.GTimer.inst.callLater(this.__playEnd, this);
                    }
                    else {
                        this._currentFrame = this.data.currentFrame;
                        if (this._currentFrame == this._settings.endFrame) {
                            if (this._settings.repeatCount > 0) {
                                this._settings.repeatCount--;
                                if (this._settings.repeatCount == 0)
                                    this._status = 2 /* STOPPING */;
                                else
                                    this._status = 1 /* LOOPING */;
                            }
                        }
                    }
                    this.setFrame(this._frames[this._currentFrame]);
                }
            }
        };
        // private drawFrame(): void {
        //     if (this._frameCount > 0 && this._frame < this._frames.length) {
        //         var frame: Frame = this._frames[this._frame];
        //         this.texture = frame.texture;
        //     }
        //     else
        //         this.texture = null;
        // }
        MovieClip.prototype.__playEnd = function () {
            if (this._settings.endCallback != null) {
                var f = this._settings.endCallback;
                var fObj = this._settings.endCallbackContext;
                this._settings.endCallback = this._settings.endCallbackContext = null;
                this._settings.endCallbackContext = null;
                if (f) {
                    f.call(fObj, this);
                }
            }
        };
        MovieClip.prototype.setFrame = function (frame) {
            this.texture = frame == null ? null : frame.texture;
            // @FIXME 
            //this_textureID = -1;
        };
        MovieClip.prototype.added = function (disp) {
            if (this._playing)
                fgui.GTimer.inst.add(0, 0, this.update, this);
        };
        MovieClip.prototype.removed = function (disp) {
            if (this._playing) {
                fgui.GTimer.inst.remove(this.update, this);
            }
        };
        MovieClip.prototype.destroy = function () {
            fgui.GTimer.inst.remove(this.update, this);
            this.off("added", this.added, this);
            this.off("removed", this.removed, this);
            _super.prototype.destroy.call(this);
        };
        return MovieClip;
    }(PIXI.Sprite));
    fgui.MovieClip = MovieClip;
})(fgui || (fgui = {}));

(function (fgui) {
    var MovieClipData = /** @class */ (function () {
        function MovieClipData() {
            this.repeatedCount = 0;
            this._curFrame = 0;
            this._lastTime = 0;
            this._curFrameDelay = 0;
            this._lastTime = Date.now();
        }
        MovieClipData.prototype.update = function (mc) {
            var t = Date.now();
            var elapsed = t - this._lastTime;
            this._lastTime = t;
            var cur = this._curFrame;
            if (cur >= mc.frameCount)
                cur = mc.frameCount - 1;
            this.reachesEnd = false;
            this._curFrameDelay += elapsed;
            var interval = mc.interval + mc.frames[cur].addDelay
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
        };
        Object.defineProperty(MovieClipData.prototype, "currentFrame", {
            get: function () {
                return this._curFrame;
            },
            set: function (value) {
                this._curFrame = value;
                this._curFrameDelay = 0;
            },
            enumerable: true,
            configurable: true
        });
        MovieClipData.prototype.rewind = function () {
            this._curFrame = 0;
            this._curFrameDelay = 0;
            this.reversed = false;
            this.reachesEnd = false;
        };
        MovieClipData.prototype.reset = function () {
            this._curFrame = 0;
            this._curFrameDelay = 0;
            this.repeatedCount = 0;
            this.reachesEnd = false;
            this.reversed = false;
        };
        MovieClipData.prototype.copy = function (src) {
            this._curFrame = src._curFrame;
            this._curFrameDelay = src._curFrameDelay;
            this.repeatedCount = src.repeatedCount;
            this.reachesEnd = src.reachesEnd;
            this.reversed = src.reversed;
        };
        return MovieClipData;
    }());
    fgui.MovieClipData = MovieClipData;
})(fgui || (fgui = {}));

(function (fgui) {
    var DefaultMovieClipSettings = /** @class */ (function () {
        function DefaultMovieClipSettings() {
            /**the first frame number to start to play */
            this.startFrame = 0;
            /**the end frame the playing will end at, -1 means to the tail */
            this.endFrame = -1;
            /**play count, 0 means endeless */
            this.repeatCount = 0;
            /**once the repeated playing completes, the playing will end at, -1 means to the tail */
            this.loopEndAt = -1;
            /**complete callback handler */
            this.endCallback = null;
            /**context object for the callback function */
            this.endCallbackContext = null;
        }
        /**modify the current settings without whole parameters provided */
        DefaultMovieClipSettings.prototype.mix = function (other) {
            var ret = this;
            for (var key in other) {
                if (key == "mix")
                    continue;
                ret[key] = other[key];
            }
            return this;
        };
        return DefaultMovieClipSettings;
    }());
    fgui.DefaultMovieClipSettings = DefaultMovieClipSettings;
})(fgui || (fgui = {}));

(function (fgui) {
    var UIContainer = /** @class */ (function (_super) {
        __extends(UIContainer, _super);
        function UIContainer(owner) {
            var _this = _super.call(this) || this;
            _this.UIOwner = owner;
            _this.interactive = true;
            _this.interactiveChildren = true;
            return _this;
        }
        Object.defineProperty(UIContainer.prototype, "scrollRect", {
            get: function () {
                return this._scrollRect;
            },
            set: function (rect) {
                this._scrollRect = rect;
                if (rect != null) {
                    if (!this._rectMask) {
                        this._rectMask = new PIXI.Graphics();
                        this._rectMask.isMask = true;
                        this.addChild(this._rectMask);
                        this.mask = this._rectMask;
                    }
                    this._rectMask.clear();
                    if (rect.width > 0 && rect.height > 0) {
                        this._rectMask.beginFill(0x0, 1);
                        this._rectMask.drawRect(this._scrollRect.x, this._scrollRect.y, this._scrollRect.width, this._scrollRect.height);
                        this._rectMask.endFill();
                    }
                }
                else
                    this.mask = null;
            },
            enumerable: true,
            configurable: true
        });
        return UIContainer;
    }(PIXI.Container));
    fgui.UIContainer = UIContainer;
})(fgui || (fgui = {}));
/// <reference path="../PIXI/extras/Sprite.ts" />

/// <reference path="../PIXI/extras/Sprite.ts" />
(function (fgui) {
    var UIImage = /** @class */ (function (_super) {
        __extends(UIImage, _super);
        function UIImage(owner) {
            var _this = _super.call(this) || this;
            _this.UIOwner = owner;
            _this.interactive = _this.interactiveChildren = false;
            var a;
            return _this;
        }
        /**@internal */
        UIImage.prototype.initDisp = function (item) {
            if (this._disp) {
                return;
            }
            if (item) {
                item.load();
                if (item.scaleByTile) {
                    this._disp = new PIXI.TilingSprite(item.texture);
                }
                else if (item.scale9Grid) {
                    this._disp = new fgui.pixi_extend.Sprite(item.id, item.texture);
                    // TODO
                    // this._disp = new pixi_extend.NineSlicePlane(
                    //     item.texture,
                    //     item.scale9Grid.left,
                    //     item.scale9Grid.top,
                    //     Math.max(0, item.texture.width - item.scale9Grid.width - item.scale9Grid.x),
                    //     Math.max(0, item.texture.height - item.scale9Grid.height - item.scale9Grid.y)
                    // );
                    // this.tiledSlices = item.tiledSlices;
                }
                else {
                    this._disp = new fgui.pixi_extend.Sprite(item.id, item.texture);
                }
            }
            else {
                this._disp = new fgui.pixi_extend.Sprite();
            }
            this.addChild(this._disp);
        };
        Object.defineProperty(UIImage.prototype, "tint", {
            get: function () {
                return this._disp.tint;
            },
            set: function (v) {
                this._disp.tint = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "height", {
            get: function () {
                return this._disp.height;
            },
            set: function (v) {
                this._disp.height = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "width", {
            get: function () {
                return this._disp.width;
            },
            set: function (v) {
                this._disp.width = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "texture", {
            get: function () {
                return this._disp.texture;
            },
            set: function (v) {
                //need to reset first?
                /*if (this._disp instanceof PIXI.extras.TilingSprite) {
                    this._disp.tileScale.set(1, 1);
                    this._disp.tilePosition.set(0, 0);
                }
                else if (this._disp instanceof PIXI.mesh.NineSlicePlane)
                    this._disp.leftWidth = this._disp.topHeight = this._disp.rightWidth = this._disp.bottomHeight = 0;
                */
                this._disp.texture = v;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "scale9Grid", {
            /**
             * rect = x,y,w,h = l,t,r,b
             */
            get: function () {
                if (this._disp instanceof PIXI.NineSlicePlane) {
                    return new PIXI.Rectangle(this._disp.leftWidth, this._disp.topHeight, this._disp.rightWidth, this._disp.bottomHeight);
                }
                return null;
            },
            /**
             * rect = x,y,w,h = l,t,r,b
             */
            set: function (rect) {
                if (this._disp instanceof PIXI.NineSlicePlane) {
                    if (rect.left != this._disp.leftWidth)
                        this._disp.leftWidth = rect.left;
                    if (rect.top != this._disp.topHeight)
                        this._disp.topHeight = rect.top;
                    if (rect.right != this._disp.rightWidth)
                        this._disp.rightWidth = rect.right;
                    if (rect.bottom != this._disp.bottomHeight)
                        this._disp.bottomHeight = rect.bottom;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "tiledSlices", {
            get: function () {
                return 0;
            },
            set: function (flags) {
                //not support
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "flipX", {
            get: function () {
                if (this._disp instanceof fgui.pixi_extend.NineSlicePlane || this._disp instanceof fgui.pixi_extend.Sprite) {
                    return this._disp.flipX;
                }
                return false;
            },
            set: function (v) {
                if (fgui.GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                    return;
                if (this._disp instanceof fgui.pixi_extend.NineSlicePlane || this._disp instanceof fgui.pixi_extend.Sprite) {
                    this._disp.flipX = v;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIImage.prototype, "flipY", {
            get: function () {
                if (this._disp instanceof fgui.pixi_extend.NineSlicePlane || this._disp instanceof fgui.pixi_extend.Sprite) {
                    return this._disp.flipY;
                }
                return false;
            },
            set: function (v) {
                if (fgui.GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                    return;
                if (this._disp instanceof fgui.pixi_extend.NineSlicePlane || this._disp instanceof fgui.pixi_extend.Sprite) {
                    this._disp.flipY = v;
                }
            },
            enumerable: true,
            configurable: true
        });
        UIImage.prototype.destroy = function (options) {
            if (this._disp) {
                this._disp.destroy(options);
                this._disp = null;
            }
            _super.prototype.destroy.call(this, options);
        };
        return UIImage;
    }(PIXI.Container));
    fgui.UIImage = UIImage;
})(fgui || (fgui = {}));

(function (fgui) {
    var UISprite = /** @class */ (function (_super) {
        __extends(UISprite, _super);
        function UISprite(owner) {
            var _this = _super.call(this) || this;
            _this.UIOwner = owner;
            _this.interactive = false;
            _this.interactiveChildren = false;
            return _this;
        }
        return UISprite;
    }(PIXI.Graphics));
    fgui.UISprite = UISprite;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var DOMEventManager = /** @class */ (function (_super) {
            __extends(DOMEventManager, _super);
            function DOMEventManager() {
                var _this = _super.call(this) || this;
                _this.retEvent = {};
                _this.nullLowestDeltaTimeout = NaN;
                /*******************keys*******************/
                _this.$pressedKeys = {};
                _this.$releasedKeys = {};
                _this.$downKeys = [];
                //resize
                window.addEventListener("resize", function (e) { return _this.notifyResizeEvents(e); }, false);
                //modifer keys
                window.addEventListener('keydown', function (e) { return _this.onWindowKeyDown(e); }, false);
                window.addEventListener('keyup', function (e) { return _this.onWindowKeyUp(e); }, false);
                //mouse wheel
                var toBind = ('onwheel' in document || document["documentMode"] >= 9) ?
                    ['wheel'] : ['mousewheel', 'DomMouseScroll', 'MozMousePixelScroll'];
                for (var i = toBind.length; i;) {
                    window.addEventListener(toBind[--i], function (e) { return _this.onMouseWheel(e); }, false);
                }
                return _this;
            }
            //resize
            DOMEventManager.prototype.notifyResizeEvents = function (e) {
                this.emit('resize');
            };
            DOMEventManager.prototype.onMouseWheel = function (event) {
                var _this = this;
                var orgEvent = (event || window.event), delta = 0, deltaX = 0, deltaY = 0, absDelta = 0;
                if ('detail' in orgEvent) {
                    deltaY = orgEvent.detail * -1;
                }
                if ('wheelDelta' in orgEvent) {
                    deltaY = orgEvent.wheelDelta;
                }
                if ('wheelDeltaY' in orgEvent) {
                    deltaY = orgEvent.wheelDeltaY;
                }
                if ('wheelDeltaX' in orgEvent) {
                    deltaX = orgEvent.wheelDeltaX * -1;
                }
                //FF DOMMouseScroll
                if ('axis' in orgEvent && orgEvent.axis === orgEvent.HORIZONTAL_AXIS) {
                    deltaX = deltaY * -1;
                    deltaY = 0;
                }
                delta = deltaY === 0 ? deltaX : deltaY;
                if ('deltaY' in orgEvent) {
                    deltaY = orgEvent.deltaY * -1;
                    delta = deltaY;
                }
                if ('deltaX' in orgEvent) {
                    deltaX = orgEvent.deltaX;
                    if (deltaY === 0) {
                        delta = deltaX * -1;
                    }
                }
                if (deltaY === 0 && deltaX === 0) {
                    return;
                }
                // Delta modes:
                //   * deltaMode 0 is by pixels, nothing to do
                //   * deltaMode 1 is by lines
                //   * deltaMode 2 is by pages
                if (orgEvent.deltaMode === 1) {
                    var lineHeight = 16; //fontSize - line-height;
                    delta *= lineHeight;
                    deltaY *= lineHeight;
                    deltaX *= lineHeight;
                }
                else if (orgEvent.deltaMode === 2) {
                    var pageHeight = 16; //dom.clientHeight = page-height
                    delta *= pageHeight;
                    deltaY *= pageHeight;
                    deltaX *= pageHeight;
                }
                absDelta = Math.max(Math.abs(deltaY), Math.abs(deltaX));
                if (!this.lowestDelta || absDelta < this.lowestDelta) {
                    this.lowestDelta = absDelta;
                    if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0)
                        this.lowestDelta /= 40;
                }
                if (orgEvent.type === 'mousewheel' && absDelta % 120 === 0) {
                    delta /= 40;
                    deltaX /= 40;
                    deltaY /= 40;
                }
                delta = Math[delta >= 1 ? 'floor' : 'ceil'](delta / this.lowestDelta);
                deltaX = Math[deltaX >= 1 ? 'floor' : 'ceil'](deltaX / this.lowestDelta);
                deltaY = Math[deltaY >= 1 ? 'floor' : 'ceil'](deltaY / this.lowestDelta);
                this.retEvent.delta = delta;
                this.retEvent.deltaX = deltaX;
                this.retEvent.deltaY = deltaY;
                this.retEvent.deltaFactor = this.lowestDelta;
                this.retEvent.deltaMode = 0;
                if (this.nullLowestDeltaTimeout) {
                    clearTimeout(this.nullLowestDeltaTimeout);
                }
                this.nullLowestDeltaTimeout = setTimeout(function () { return _this.nullLowestDelta(); }, 200);
                this.emit("__mouseWheel" /* MOUSE_WHEEL */, this.retEvent);
            };
            DOMEventManager.prototype.nullLowestDelta = function () {
                this.lowestDelta = null;
            };
            DOMEventManager.prototype.isKeyDown = function (key) {
                return this.$downKeys.indexOf(key) >= 0;
            };
            DOMEventManager.prototype.isKeyPressed = function (key) {
                return !!this.$pressedKeys[key];
            };
            DOMEventManager.prototype.isKeyReleased = function (key) {
                return !!this.$releasedKeys[key];
            };
            DOMEventManager.prototype.onWindowKeyDown = function (evt) {
                var key = evt.which || evt.keyCode;
                if (!this.isKeyDown(key)) {
                    this.$downKeys.push(key);
                    this.$pressedKeys[key] = true;
                    this.emit('keyPressed', key);
                }
            };
            DOMEventManager.prototype.onWindowKeyUp = function (evt) {
                var key = evt.which || evt.keyCode;
                if (this.isKeyDown(key)) {
                    this.$pressedKeys[key] = false;
                    this.$releasedKeys[key] = true;
                    var index = this.$downKeys.indexOf(key);
                    if (index >= 0)
                        this.$downKeys.splice(index, 1);
                    this.emit('keyReleased', key);
                }
            };
            DOMEventManager.inst = new DOMEventManager();
            return DOMEventManager;
        }(PIXI.utils.EventEmitter));
        utils.DOMEventManager = DOMEventManager;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));
/// <reference path="../utils/DOMEventManager.ts" />

/// <reference path="../utils/DOMEventManager.ts" />
(function (fgui) {
    var DefaultUIStageOptions = /** @class */ (function () {
        function DefaultUIStageOptions() {
            this.scaleMode = "showAll" /* SHOW_ALL */;
            this.orientation = "auto" /* AUTO */;
            this.resolution = 1;
            this.designWidth = 800;
            this.designHeight = 600;
            this.alignV = 4 /* MIDDLE */;
            this.alignH = 1 /* CENTER */;
            this.fallbackWidth = 0;
            this.fallbackHeight = 0;
        }
        return DefaultUIStageOptions;
    }());
    fgui.DefaultUIStageOptions = DefaultUIStageOptions;
    var DefaultBoudingRectCalculator = /** @class */ (function () {
        function DefaultBoudingRectCalculator() {
        }
        DefaultBoudingRectCalculator.prototype.getRect = function (view, fallbackWidth, fallbackHeight) {
            var p = view.parentElement;
            if (!p)
                //this should be impossible situation unless the user forget to append the view into the DOM.
                throw new Error("Your view of PIXI are still in memory but not appended to DOM yet? it's necessary that there is a parent element to wrap your view up.");
            var rect = p.getBoundingClientRect();
            var ret = {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            };
            if (!rect || rect.width <= 0 || rect.height <= 0) {
                console.warn("It seems that you did not set a explicit size for the parent element of your view, now fall back to window size instead.");
                ret.width = window.innerWidth;
                ret.height = window.innerHeight;
                ret.x = 0;
                ret.y = 0;
            }
            else {
                ret.x = rect.left;
                ret.y = rect.top;
                ret.width = rect.width;
                ret.height = rect.height;
            }
            //consider the worst situation: window does not have size!!
            if (ret.width <= 0 || ret.height <= 0) {
                console.warn("fetch container size to initialize PIXI in all ways have failed, now use default size (fallbackWidth / fallbackHeight) specified in the options instead.");
                ret.width = fallbackWidth;
                ret.height = fallbackHeight;
            }
            return ret;
        };
        return DefaultBoudingRectCalculator;
    }());
    var UIStage = /** @class */ (function (_super) {
        __extends(UIStage, _super);
        function UIStage(app, stageOptions) {
            var _this = _super.call(this) || this;
            _this._width = 0;
            _this._height = 0;
            _this._scaleX = 1;
            _this._scaleY = 1;
            _this._canvasMatrix = new PIXI.Matrix();
            _this.offsetX = 0;
            _this.offsetY = 0;
            _this._sizeCalcer = new DefaultBoudingRectCalculator();
            UIStageInst.push(_this);
            _this._appContext = app;
            //this._appContext.renderer.autoResize = false;
            _this._appStage = app.stage;
            _this._appStage.interactive = true;
            var opt;
            if (stageOptions instanceof DefaultUIStageOptions)
                opt = stageOptions;
            else {
                opt = new DefaultUIStageOptions();
                if (stageOptions != null) {
                    for (var i in stageOptions) {
                        opt[i] = stageOptions[i];
                    }
                }
            }
            if (!opt.designWidth || !opt.designHeight)
                throw new Error("Invalid designWidth / designHeight in the parameter 'stageOptions'.");
            _this._options = opt;
            _this._appContext.view.style.position = "absolute";
            var container = _this._appContext.view.parentElement;
            var style = container.style;
            //if parent is not a DIV box, make one
            if (container.tagName != "DIV") {
                container = document.createElement("DIV");
                style.position = "relative";
                style.left = style.top = "0px";
                style.width = style.height = "100%"; //and set default full-screen
                style.overflow = "hidden";
                _this._appContext.view.parentElement.appendChild(container);
                container.appendChild(_this._appContext.view);
            }
            var containerPosition;
            if (document.defaultView && document.defaultView.getComputedStyle)
                containerPosition = document.defaultView.getComputedStyle(container).position;
            else
                containerPosition = style.position;
            if (containerPosition == "" || containerPosition == "static") {
                containerPosition = "relative";
                container.style.position = containerPosition;
            }
            fgui.HTMLInput.inst.initialize(container, _this._appContext.view);
            _this.updateScreenSize();
            return _this;
        }
        Object.defineProperty(UIStage.prototype, "orientation", {
            get: function () {
                return this._options.orientation;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "stageWidth", {
            get: function () {
                return this._width;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "stageHeight", {
            get: function () {
                return this._height;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "applicationContext", {
            get: function () {
                return this._appContext;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "nativeStage", {
            get: function () {
                return this._appStage;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "resolution", {
            get: function () {
                return this._options.resolution;
            },
            set: function (v) {
                this._options.resolution = v;
                this.updateScreenSize();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "scaleX", {
            get: function () {
                return this._scaleX;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "scaleY", {
            get: function () {
                return this._scaleY;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "designWidth", {
            get: function () {
                return this._options.designWidth;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIStage.prototype, "designHeight", {
            get: function () {
                return this._options.designHeight;
            },
            enumerable: true,
            configurable: true
        });
        UIStage.prototype.setDesignSize = function (width, height) {
            var option = this._options;
            option.designWidth = width;
            option.designHeight = height;
            this.updateScreenSize();
        };
        UIStage.prototype.calculateStageSize = function (scaleMode, screenWidth, screenHeight, contentWidth, contentHeight) {
            var displayWidth = screenWidth;
            var displayHeight = screenHeight;
            var stageWidth = contentWidth;
            var stageHeight = contentHeight;
            var scaleX = (screenWidth / stageWidth) || 0;
            var scaleY = (screenHeight / stageHeight) || 0;
            switch (scaleMode) {
                case "exactFit" /* EXACT_FIT */:
                    break;
                case "fixedHeight" /* FIXED_HEIGHT */:
                    stageWidth = Math.round(screenWidth / scaleY);
                    break;
                case "fixedWidth" /* FIXED_WIDTH */:
                    stageHeight = Math.round(screenHeight / scaleX);
                    break;
                case "noBorder" /* NO_BORDER */:
                    if (scaleX > scaleY)
                        displayHeight = Math.round(stageHeight * scaleX);
                    else
                        displayWidth = Math.round(stageWidth * scaleY);
                    break;
                case "showAll" /* SHOW_ALL */:
                    if (scaleX > scaleY)
                        displayWidth = Math.round(stageWidth * scaleY);
                    else
                        displayHeight = Math.round(stageHeight * scaleX);
                    break;
                case "fixedAuto" /* FIXED_AUTO */:
                    if ((displayWidth / displayHeight) < (stageWidth / stageHeight)) {
                        scaleY = scaleX;
                        stageHeight = Math.round(screenHeight / scaleX);
                    }
                    else {
                        scaleX = scaleY;
                        stageWidth = Math.round(screenWidth / scaleY);
                    }
                    break;
                default:
                    stageWidth = screenWidth;
                    stageHeight = screenHeight;
                    break;
            }
            return {
                stageWidth: stageWidth,
                stageHeight: stageHeight,
                displayWidth: displayWidth,
                displayHeight: displayHeight
            };
        };
        /**@internal */
        UIStage.prototype.updateScreenSize = function () {
            if (fgui.HTMLInput.isTyping)
                return;
            var canvas = this._appContext.view;
            var canvasStyle = canvas.style;
            var rect = this._sizeCalcer.getRect(canvas, this._options.fallbackWidth, this._options.fallbackHeight);
            var shouldRotate = false;
            var orientation = this._options.orientation;
            if (orientation != "auto" /* AUTO */) {
                shouldRotate = orientation != "portrait" /* PORTRAIT */ && rect.height > rect.width
                    || orientation == "portrait" /* PORTRAIT */ && rect.width > rect.height;
            }
            var screenWidth = shouldRotate ? rect.height : rect.width;
            var screenHeight = shouldRotate ? rect.width : rect.height;
            var stageSize = this.calculateStageSize(this._options.scaleMode, screenWidth, screenHeight, this._options.designWidth, this._options.designHeight);
            var stageWidth = stageSize.stageWidth;
            var stageHeight = stageSize.stageHeight;
            var displayWidth = stageSize.displayWidth;
            var displayHeight = stageSize.displayHeight;
            if (canvas.width !== stageWidth)
                canvas.width = stageWidth;
            if (canvas.height !== stageHeight)
                canvas.height = stageHeight;
            canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
            canvasStyle.width = displayWidth + "px";
            canvasStyle.height = displayHeight + "px";
            var mat = this._canvasMatrix.identity();
            var dispWidth = shouldRotate ? displayHeight : displayWidth;
            var dispHeight = shouldRotate ? displayWidth : displayHeight;
            var offx, offy;
            if (this._options.alignH == 0 /* LEFT */)
                offx = 0;
            else if (this._options.alignH == 2 /* RIGHT */)
                offx = rect.width - dispWidth;
            else
                offx = (rect.width - dispWidth) * 0.5;
            if (this._options.alignV == 3 /* TOP */)
                offy = 0;
            else if (this._options.alignV == 5 /* BOTTOM */)
                offy = rect.height - dispHeight;
            else
                offy = (rect.height - dispHeight) * 0.5;
            var rotDeg = 0;
            if (shouldRotate) {
                if (this._options.orientation == "landscape" /* LANDSCAPE */) {
                    mat.rotate(Math.PI / 2);
                    mat.translate(screenHeight - offx, offy);
                    rotDeg = 90;
                }
                else {
                    mat.rotate(-Math.PI / 2);
                    mat.translate(offx, screenWidth - offy);
                    rotDeg = -90;
                }
            }
            else
                mat.translate(offx, offy);
            if (shouldRotate) {
                mat.tx += this.offsetY;
                mat.ty += this.offsetX;
            }
            else {
                mat.tx += this.offsetX;
                mat.ty += this.offsetY;
            }
            mat.a = this.formatData(mat.a), mat.d = this.formatData(mat.d),
                mat.tx = this.formatData(mat.tx), mat.ty = this.formatData(mat.ty);
            canvasStyle.transformOrigin = canvasStyle.webkitTransformOrigin = canvasStyle.msTransformOrigin = canvasStyle.mozTransformOrigin = canvasStyle.oTransformOrigin = "0px 0px 0px";
            canvasStyle.transform = canvasStyle.webkitTransform = canvasStyle.msTransform = canvasStyle.mozTransform = canvasStyle.oTransform = "matrix(" + mat.a + "," + mat.b + "," + mat.c + "," + mat.d + "," + mat.tx + "," + mat.ty + ")";
            this._width = stageWidth;
            this._height = stageHeight;
            this._scaleX = stageWidth / displayWidth;
            this._scaleY = stageHeight / displayHeight;
            var im = this._appContext.renderer.plugins.interaction;
            im.stageRotation = rotDeg;
            im.stageScaleX = this._scaleX;
            im.stageScaleY = this._scaleY;
            this._appContext.renderer.resize(stageWidth, stageHeight);
            fgui.HTMLInput.inst.updateSize(displayWidth / stageWidth, displayHeight / stageHeight);
            this.emit("__sizeChanged" /* SIZE_CHANGED */, this);
        };
        UIStage.prototype.formatData = function (value) {
            if (Math.abs(value) < 0.000001)
                return 0;
            if (Math.abs(1 - value) < 0.001)
                return value > 0 ? 1 : -1;
            return value;
        };
        UIStage.prototype.dispose = function () {
            var i = UIStageInst.length;
            while (i-- >= 0) {
                if (UIStageInst[i] === this)
                    UIStageInst.splice(i, 1);
            }
        };
        return UIStage;
    }(PIXI.utils.EventEmitter));
    fgui.UIStage = UIStage;
    var UIStageInst = [];
    var resizeCheckTimer = NaN;
    function resizeHandler() {
        UIStageInst.forEach(function (stage) {
            stage.updateScreenSize();
        });
    }
    fgui.utils.DOMEventManager.inst.on('resize', function () {
        clearTimeout(resizeCheckTimer);
        resizeCheckTimer = window.setTimeout(resizeHandler, 300);
    });
})(fgui || (fgui = {}));

(function (fgui) {
    var isEmojiChar = function (charCode, nextCharCode) {
        var hs = charCode;
        var nextCharValid = typeof nextCharCode === 'number' && !isNaN(nextCharCode) && nextCharCode > 0;
        // surrogate pair
        if (hs >= 0xd800 && hs <= 0xdbff) {
            if (nextCharValid) {
                var uc = ((hs - 0xd800) * 0x400) + (nextCharCode - 0xdc00) + 0x10000;
                if (uc >= 0x1d000 && uc <= 0x1f77f) {
                    return 2;
                }
            }
        }
        // non surrogate
        else if ((hs >= 0x2100 && hs <= 0x27ff)
            || (hs >= 0x2B05 && hs <= 0x2b07)
            || (hs >= 0x2934 && hs <= 0x2935)
            || (hs >= 0x3297 && hs <= 0x3299)
            || hs === 0xa9 || hs === 0xae || hs === 0x303d || hs === 0x3030
            || hs === 0x2b55 || hs === 0x2b1c || hs === 0x2b1b
            || hs === 0x2b50 || hs === 0x231a) {
            return 1;
        }
        else if (nextCharValid && (nextCharCode === 0x20e3 || nextCharCode === 0xfe0f || nextCharCode === 0xd83c)) {
            return 2;
        }
        return 0;
    };
    //override for emoji test
    PIXI.TextMetrics.canBreakChars = function (char, nextChar, token, index, breakWords) {
        if (isEmojiChar(char.charCodeAt(0), nextChar && nextChar.charCodeAt(0)) == 2)
            return false;
        return true;
    };
    /*
    * I assume that your project uses CJK languages so that the sentence won't be splitted by ' ' char here,
    * In case if your project has multiple-language support please override this method in your project like the code below:
    *      PIXI.TextMetrics.isBreakingSpace = function(char?: string): boolean {
           if (typeof char !== 'string')
               return false;
           //not break by ' ' char here for CJK language, and other alphabetic language like English will be splitted by ' ' char naturally
           if(char === ' ' && langSetting.language === 'CJK') return false;
           return (PIXI.TextMetrics._breakingSpaces.indexOf(char.charCodeAt(0)) >= 0);
       };
    */
    // PIXI.TextMetrics.isBreakingSpace = function(char?: string): boolean {
    //     if (typeof char !== 'string')
    //         return false;
    //     if(char === ' ') return false;  //not break by this
    //     return (PIXI.TextMetrics._breakingSpaces.indexOf(char.charCodeAt(0)) >= 0);
    // };
    var UITextField = /** @class */ (function (_super) {
        __extends(UITextField, _super);
        function UITextField(owner) {
            var _this = _super.call(this, null) || this;
            _this._minHeightID = -1;
            _this.UIOwner = owner;
            _this.interactive = _this.interactiveChildren = false;
            //this.texture.noFrame = false;
            _this._minHeight = -1;
            return _this;
        }
        UITextField.prototype.init = function () {
            //this.updateFrame();
            //this.texture.on("update", this.updateFrame, this);
        };
        Object.defineProperty(UITextField.prototype, "minHeight", {
            get: function () {
                return this._minHeight;
            },
            enumerable: true,
            configurable: true
        });
        /**@internal */
        UITextField.prototype.updateMinHeight = function () {
            // if(this.style.styleID != this._minHeightID || this._minHeight <= 0) {
            //     this._minHeight = PIXI.TextMetrics.measureText("", this.style, false).lineHeight;  //no way to get the cached auto-lineheight (when style.lineHeight=0);
            //     this._minHeightID = this.style.styleID;
            // }
        };
        UITextField.prototype.updateFrame = function () {
            fgui.GTimer.inst.callLater(this.internalUpdateFrame, this);
        };
        UITextField.prototype.internalUpdateFrame = function () {
            if (this.texture) {
                var frm = this.texture.frame;
                this.height = Math.max(this.height, this._minHeight);
                var w = frm.x + this.width, h = frm.y + this.height;
                if (w > this.texture.baseTexture.width)
                    w = this.texture.baseTexture.width - frm.x;
                if (h > this.texture.baseTexture.height)
                    h = this.texture.baseTexture.height - frm.y;
                frm.width = w / this.resolution;
                frm.height = h / this.resolution;
                this.texture.trim.width = frm.width;
                this.texture.trim.height = frm.height;
                var padding = this.style.trim ? 0 : this.style.padding;
                this.texture.trim.x = -padding;
                this.texture.trim.y = -padding;
                this.texture.frame = frm;
            }
        };
        Object.defineProperty(UITextField.prototype, "textHeight", {
            get: function () {
                this.calculateBounds();
                return this.texture.orig.height;
            },
            set: function (v) {
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UITextField.prototype, "textWidth", {
            get: function () {
                this.calculateBounds();
                return this.texture.orig.width;
            },
            set: function (v) {
                if (v != this.style.wordWrapWidth) {
                    this.style.wordWrapWidth = v;
                }
            },
            enumerable: true,
            configurable: true
        });
        return UITextField;
    }(PIXI.Text));
    fgui.UITextField = UITextField;
})(fgui || (fgui = {}));

(function (fgui) {
    var GearBase = /** @class */ (function () {
        function GearBase(owner) {
            this._owner = owner;
        }
        GearBase.create = function (owner, index) {
            if (!GearBase.Classes) {
                GearBase.Classes = [
                    fgui.GearDisplay, fgui.GearXY, fgui.GearSize, fgui.GearLook, fgui.GearColor,
                    fgui.GearAnimation, fgui.GearText, fgui.GearIcon, fgui.GearDisplay2, fgui.GearFontSize
                ];
            }
            return new (GearBase.Classes[index])(owner);
        };
        GearBase.prototype.dispose = function () {
            if (this._tweenConfig != null && this._tweenConfig._tweener != null) {
                this._tweenConfig._tweener.kill();
                this._tweenConfig._tweener = null;
            }
        };
        Object.defineProperty(GearBase.prototype, "controller", {
            get: function () {
                return this._controller;
            },
            set: function (val) {
                if (val != this._controller) {
                    this._controller = val;
                    if (this._controller) {
                        this.init();
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GearBase.prototype, "tweenConfig", {
            get: function () {
                if (this._tweenConfig == null)
                    this._tweenConfig = new GearTweenConfig();
                return this._tweenConfig;
            },
            enumerable: true,
            configurable: true
        });
        GearBase.prototype.setup = function (buffer) {
            this._controller = this._owner.parent.getControllerAt(buffer.readShort());
            this.init();
            var i;
            var page;
            var cnt = buffer.readShort();
            if (this instanceof fgui.GearDisplay) {
                this.pages = buffer.readSArray(cnt);
            }
            else if (this instanceof fgui.GearDisplay2) {
                this.pages = buffer.readSArray(cnt);
            }
            else {
                for (i = 0; i < cnt; i++) {
                    page = buffer.readS();
                    if (page == null)
                        continue;
                    this.addStatus(page, buffer);
                }
                if (buffer.readBool())
                    this.addStatus(null, buffer);
            }
            if (buffer.readBool()) {
                this._tweenConfig = new GearTweenConfig();
                this._tweenConfig.easeType = buffer.readByte();
                this._tweenConfig.duration = buffer.readFloat();
                this._tweenConfig.delay = buffer.readFloat();
            }
            if (buffer.version >= 2) {
                if (this instanceof fgui.GearXY) {
                    if (buffer.readBool()) {
                        this.positionsInPercent = true;
                        for (i = 0; i < cnt; i++) {
                            page = buffer.readS();
                            if (page == null)
                                continue;
                            this.addExtStatus(page, buffer);
                        }
                        if (buffer.readBool())
                            this.addExtStatus(null, buffer);
                    }
                }
                else if (this instanceof fgui.GearDisplay2)
                    this.condition = buffer.readByte();
            }
        };
        GearBase.prototype.updateFromRelations = function (dx, dy) {
        };
        GearBase.prototype.addStatus = function (pageId, buffer) {
        };
        GearBase.prototype.init = function () {
        };
        GearBase.prototype.apply = function () {
        };
        GearBase.prototype.updateState = function () {
        };
        GearBase.disableAllTweenEffect = false;
        return GearBase;
    }());
    fgui.GearBase = GearBase;
    var GearTweenConfig = /** @class */ (function () {
        function GearTweenConfig() {
            this.tween = true;
            this.easeType = fgui.EaseType.QuadOut;
            this.duration = 0.3;
            this.delay = 0;
        }
        return GearTweenConfig;
    }());
    fgui.GearTweenConfig = GearTweenConfig;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearAnimation = /** @class */ (function (_super) {
        __extends(GearAnimation, _super);
        function GearAnimation(owner) {
            return _super.call(this, owner) || this;
        }
        GearAnimation.prototype.init = function () {
            this._default = new GearAnimationValue(this._owner.playing, this._owner.frame);
            //this._default = new GearAnimationValue(this._owner.getProp(ObjectPropID.Playing));
            this._storage = {};
        };
        GearAnimation.prototype.addStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null)
                gv = this._default;
            else {
                gv = new GearAnimationValue();
                this._storage[pageId] = gv;
            }
            gv.playing = buffer.readBool();
            gv.frame = buffer.readInt();
        };
        GearAnimation.prototype.apply = function () {
            this._owner._gearLocked = true;
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                gv = this._default;
            // this._owner.setProp(ObjectPropID.Playing, gv.playing);
            // this._owner.setProp(ObjectPropID.Frame, gv.frame);
            this._owner.frame = gv.frame;
            this._owner.playing = gv.playing;
            this._owner._gearLocked = false;
        };
        GearAnimation.prototype.updateState = function () {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding)
            //     return;
            if (this._controller == null || this._owner._gearLocked)
                return;
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = new GearAnimationValue();
                this._storage[this._controller.selectedPageId] = gv;
            }
            // gv.playing = this._owner.getProp(ObjectPropID.Playing);
            // gv.frame = this._owner.getProp(ObjectPropID.Frame);
            gv.frame = this._owner.frame;
            gv.playing = this._owner.playing;
        };
        return GearAnimation;
    }(fgui.GearBase));
    fgui.GearAnimation = GearAnimation;
    var GearAnimationValue = /** @class */ (function () {
        function GearAnimationValue(playing, frame) {
            if (playing === void 0) { playing = true; }
            if (frame === void 0) { frame = 0; }
            this.playing = playing;
            this.frame = frame;
        }
        return GearAnimationValue;
    }());
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearColor = /** @class */ (function (_super) {
        __extends(GearColor, _super);
        function GearColor(owner) {
            return _super.call(this, owner) || this;
        }
        GearColor.prototype.init = function () {
            this._default = new GearColorValue(this._owner.getProp(fgui.ObjectPropID.Color), this._owner.getProp(fgui.ObjectPropID.OutlineColor));
            this._storage = {};
        };
        GearColor.prototype.addStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null) {
                gv = this._default;
            }
            else {
                gv = new GearColorValue();
                this._storage[pageId] = gv;
            }
            gv.color = buffer.readColor();
            gv.strokeColor = buffer.readColor();
        };
        GearColor.prototype.apply = function () {
            this._owner._gearLocked = true;
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                gv = this._default;
            this._owner.setProp(fgui.ObjectPropID.Color, gv.color);
            if (!isNaN(gv.strokeColor))
                this._owner.setProp(fgui.ObjectPropID.OutlineColor, gv.strokeColor);
            this._owner._gearLocked = false;
        };
        GearColor.prototype.updateState = function () {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                this._storage[this._controller.selectedPageId] = gv = new GearColorValue();
            gv.color = this._owner.getProp(fgui.ObjectPropID.Color);
            gv.strokeColor = this._owner.getProp(fgui.ObjectPropID.OutlineColor);
        };
        return GearColor;
    }(fgui.GearBase));
    fgui.GearColor = GearColor;
    var GearColorValue = /** @class */ (function () {
        function GearColorValue(color, strokeColor) {
            if (color === void 0) { color = NaN; }
            if (strokeColor === void 0) { strokeColor = NaN; }
            this.color = color;
            this.strokeColor = strokeColor;
        }
        return GearColorValue;
    }());
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearDisplay = /** @class */ (function (_super) {
        __extends(GearDisplay, _super);
        function GearDisplay(owner) {
            var _this = _super.call(this, owner) || this;
            _this._displayLockToken = 1;
            _this._visible = 0;
            return _this;
        }
        GearDisplay.prototype.init = function () {
            this.pages = null;
        };
        GearDisplay.prototype.apply = function () {
            this._displayLockToken++;
            if (this._displayLockToken == 0)
                this._displayLockToken = 1;
            if (this.pages == null || this.pages.length == 0
                || this.pages.indexOf(this._controller.selectedPageId) != -1)
                this._visible = 1;
            else
                this._visible = 0;
        };
        GearDisplay.prototype.addLock = function () {
            this._visible++;
            return this._displayLockToken;
        };
        GearDisplay.prototype.releaseLock = function (token) {
            if (token == this._displayLockToken) {
                this._visible--;
            }
        };
        Object.defineProperty(GearDisplay.prototype, "connected", {
            get: function () {
                return this.controller == null || this._visible > 0;
            },
            enumerable: true,
            configurable: true
        });
        return GearDisplay;
    }(fgui.GearBase));
    fgui.GearDisplay = GearDisplay;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearDisplay2 = /** @class */ (function (_super) {
        __extends(GearDisplay2, _super);
        function GearDisplay2(owner) {
            var _this = _super.call(this, owner) || this;
            _this._visible = 0;
            return _this;
        }
        GearDisplay2.prototype.init = function () {
            this.pages = null;
        };
        GearDisplay2.prototype.apply = function () {
            if (this.pages == null || this.pages.length == 0
                || this.pages.indexOf(this._controller.selectedPageId) != -1)
                this._visible = 1;
            else
                this._visible = 0;
        };
        GearDisplay2.prototype.evaluate = function (connected) {
            var v = this._controller == null || this._visible > 0;
            if (this.condition == 0)
                v = v && connected;
            else
                v = v || connected;
            return v;
        };
        return GearDisplay2;
    }(fgui.GearBase));
    fgui.GearDisplay2 = GearDisplay2;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearFontSize = /** @class */ (function (_super) {
        __extends(GearFontSize, _super);
        function GearFontSize(owner) {
            var _this = _super.call(this, owner) || this;
            _this._default = 0;
            return _this;
        }
        GearFontSize.prototype.init = function () {
            this._default = this._owner.getProp(fgui.ObjectPropID.FontSize);
            this._storage = {};
        };
        GearFontSize.prototype.addStatus = function (pageId, buffer) {
            if (pageId == null)
                this._default = buffer.readInt();
            else
                this._storage[pageId] = buffer.readInt();
        };
        GearFontSize.prototype.apply = function () {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data != undefined)
                this._owner.setProp(fgui.ObjectPropID.FontSize, data);
            else
                this._owner.setProp(fgui.ObjectPropID.FontSize, this._default);
            this._owner._gearLocked = false;
        };
        GearFontSize.prototype.updateState = function () {
            this._storage[this._controller.selectedPageId] = this._owner.text;
        };
        return GearFontSize;
    }(fgui.GearBase));
    fgui.GearFontSize = GearFontSize;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearIcon = /** @class */ (function (_super) {
        __extends(GearIcon, _super);
        function GearIcon(owner) {
            return _super.call(this, owner) || this;
        }
        GearIcon.prototype.init = function () {
            this._default = this._owner.icon;
            this._storage = {};
        };
        GearIcon.prototype.addStatus = function (pageId, buffer) {
            if (pageId == null)
                this._default = buffer.readS();
            else
                this._storage[pageId] = buffer.readS();
        };
        GearIcon.prototype.apply = function () {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data != undefined)
                this._owner.icon = data;
            else
                this._owner.icon = this._default;
            this._owner._gearLocked = false;
        };
        GearIcon.prototype.updateState = function () {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding) {
            //     return;
            // }
            if (this._controller == null || this._owner._gearLocked) {
                return;
            }
            this._storage[this._controller.selectedPageId] = this._owner.icon;
        };
        return GearIcon;
    }(fgui.GearBase));
    fgui.GearIcon = GearIcon;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearLook = /** @class */ (function (_super) {
        __extends(GearLook, _super);
        function GearLook(owner) {
            return _super.call(this, owner) || this;
        }
        GearLook.prototype.init = function () {
            this._default = new GearLookValue(this._owner.alpha, this._owner.rotation, this._owner.grayed, this._owner.touchable);
            this._storage = {};
        };
        GearLook.prototype.addStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null)
                gv = this._default;
            else {
                gv = new GearLookValue();
                this._storage[pageId] = gv;
            }
            gv.alpha = buffer.readFloat();
            gv.rotation = buffer.readFloat();
            gv.grayed = buffer.readBool();
            gv.touchable = buffer.readBool();
        };
        GearLook.prototype.apply = function () {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                gv = this._default;
            if (this._tweenConfig && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                this._owner._gearLocked = true;
                this._owner.grayed = gv.grayed;
                this._owner.touchable = gv.touchable;
                this._owner._gearLocked = false;
                if (this._tweenConfig._tweener != null) {
                    if (this._tweenConfig._tweener.endValue.x != gv.alpha || this._tweenConfig._tweener.endValue.y != gv.rotation) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else
                        return;
                }
                var a = gv.alpha != this._owner.alpha;
                var b = gv.rotation != this._owner.rotation;
                if (a || b) {
                    if (this._owner.checkGearController(0, this._controller))
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    this._tweenConfig._tweener = fgui.GTween.to2(this._owner.alpha, this._owner.rotation, gv.alpha, gv.rotation, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.grayed = gv.grayed;
                this._owner.touchable = gv.touchable;
                this._owner.alpha = gv.alpha;
                this._owner.rotation = gv.rotation;
                this._owner._gearLocked = false;
            }
        };
        GearLook.prototype.__tweenUpdate = function (tweener) {
            var flag = tweener.userData;
            this._owner._gearLocked = true;
            if ((flag & 1) != 0)
                this._owner.alpha = tweener.value.x;
            if ((flag & 2) != 0)
                this._owner.rotation = tweener.value.y;
            this._owner._gearLocked = false;
        };
        GearLook.prototype.__tweenComplete = function () {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
            this._owner.emit("__gearStop" /* GEAR_STOP */, this);
        };
        GearLook.prototype.updateState = function () {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding)
            //     return;
            if (this._controller == null || this._owner._gearLocked)
                return;
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = new GearLookValue();
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.alpha = this._owner.alpha;
            gv.rotation = this._owner.rotation;
            gv.grayed = this._owner.grayed;
        };
        return GearLook;
    }(fgui.GearBase));
    fgui.GearLook = GearLook;
    var GearLookValue = /** @class */ (function () {
        function GearLookValue(alpha, rotation, grayed, touchable) {
            if (alpha === void 0) { alpha = 0; }
            if (rotation === void 0) { rotation = 0; }
            if (grayed === void 0) { grayed = false; }
            if (touchable === void 0) { touchable = true; }
            this.alpha = alpha;
            this.rotation = rotation;
            this.grayed = grayed;
            this.touchable = touchable;
        }
        return GearLookValue;
    }());
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearSize = /** @class */ (function (_super) {
        __extends(GearSize, _super);
        function GearSize(owner) {
            return _super.call(this, owner) || this;
        }
        GearSize.prototype.init = function () {
            this._default = new GearSizeValue(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY);
            this._storage = {};
        };
        GearSize.prototype.addStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null)
                gv = this._default;
            else {
                gv = new GearSizeValue();
                this._storage[pageId] = gv;
            }
            gv.width = buffer.readInt();
            gv.height = buffer.readInt();
            gv.scaleX = buffer.readFloat();
            gv.scaleY = buffer.readFloat();
        };
        GearSize.prototype.apply = function () {
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv)
                gv = this._default;
            if (this._tweenConfig && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                if (this._tweenConfig._tweener != null) {
                    if (this._tweenConfig._tweener.endValue.x != gv.width || this._tweenConfig._tweener.endValue.y != gv.height
                        || this._tweenConfig._tweener.endValue.z != gv.scaleX || this._tweenConfig._tweener.endValue.w != gv.scaleY) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else
                        return;
                }
                var a = gv.width != this._owner.width || gv.height != this._owner.height;
                var b = gv.scaleX != this._owner.scaleX || gv.scaleY != this._owner.scaleY;
                if (a || b) {
                    if (this._owner.checkGearController(0, this._controller))
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    this._tweenConfig._tweener = fgui.GTween.to4(this._owner.width, this._owner.height, this._owner.scaleX, this._owner.scaleY, gv.width, gv.height, gv.scaleX, gv.scaleY, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setUserData((a ? 1 : 0) + (b ? 2 : 0))
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.setSize(gv.width, gv.height, this._owner.gearXY.controller == this._controller);
                this._owner.setScale(gv.scaleX, gv.scaleY);
                this._owner._gearLocked = false;
            }
        };
        GearSize.prototype.__tweenUpdate = function (tweener) {
            var flag = tweener.userData;
            this._owner._gearLocked = true;
            if ((flag & 1) != 0) {
                this._owner.setSize(tweener.value.x, tweener.value.y, this._owner.checkGearController(1, this._controller));
            }
            if ((flag & 2) != 0) {
                this._owner.setScale(tweener.value.z, tweener.value.w);
            }
            this._owner._gearLocked = false;
        };
        GearSize.prototype.__tweenComplete = function () {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
            this._owner.emit("__gearStop" /* GEAR_STOP */, this);
        };
        GearSize.prototype.updateState = function () {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding)
            //     return;
            if (this._controller == null || this._owner._gearLocked)
                return;
            var gv = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = new GearSizeValue();
                this._storage[this._controller.selectedPageId] = gv;
            }
            gv.width = this._owner.width;
            gv.height = this._owner.height;
            gv.scaleX = this._owner.scaleX;
            gv.scaleY = this._owner.scaleY;
        };
        GearSize.prototype.updateFromRelations = function (dx, dy) {
            if (this._controller == null || this._storage == null)
                return;
            for (var key in this._storage) {
                var gv = this._storage[key];
                gv.width += dx;
                gv.height += dy;
            }
            this._default.width += dx;
            this._default.height += dy;
            this.updateState();
        };
        return GearSize;
    }(fgui.GearBase));
    fgui.GearSize = GearSize;
    var GearSizeValue = /** @class */ (function () {
        function GearSizeValue(width, height, scaleX, scaleY) {
            if (width === void 0) { width = 0; }
            if (height === void 0) { height = 0; }
            if (scaleX === void 0) { scaleX = 0; }
            if (scaleY === void 0) { scaleY = 0; }
            this.width = width;
            this.height = height;
            this.scaleX = scaleX;
            this.scaleY = scaleY;
        }
        return GearSizeValue;
    }());
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearText = /** @class */ (function (_super) {
        __extends(GearText, _super);
        function GearText(owner) {
            return _super.call(this, owner) || this;
        }
        GearText.prototype.init = function () {
            this._default = this._owner.text;
            this._storage = {};
        };
        GearText.prototype.addStatus = function (pageId, buffer) {
            if (pageId == null)
                this._default = buffer.readS();
            else
                this._storage[pageId] = buffer.readS();
        };
        GearText.prototype.apply = function () {
            this._owner._gearLocked = true;
            var data = this._storage[this._controller.selectedPageId];
            if (data != undefined)
                this._owner.text = data;
            else
                this._owner.text = this._default;
            this._owner._gearLocked = false;
        };
        GearText.prototype.updateState = function () {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding) {
            //     return;
            // }
            if (this._controller == null || this._owner._gearLocked) {
                return;
            }
            this._storage[this._controller.selectedPageId] = this._owner.text;
        };
        return GearText;
    }(fgui.GearBase));
    fgui.GearText = GearText;
})(fgui || (fgui = {}));
/// <reference path="./GearBase.ts" />

/// <reference path="./GearBase.ts" />
(function (fgui) {
    var GearXY = /** @class */ (function (_super) {
        __extends(GearXY, _super);
        function GearXY(owner) {
            return _super.call(this, owner) || this;
        }
        GearXY.prototype.init = function () {
            this._default = new PIXI.Point(this._owner.x, this._owner.y);
            // this._default = {
            //     x: this._owner.x, y: this._owner.y,
            //     px: this._owner.x / this._owner.parent.width, py: this._owner.y / this._owner.parent.height
            // };
            this._storage = {};
        };
        GearXY.prototype.addStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null)
                gv = this._default;
            else {
                gv = new PIXI.Point();
                this._storage[pageId] = gv;
            }
            gv.x = buffer.readInt();
            gv.y = buffer.readInt();
        };
        GearXY.prototype.addExtStatus = function (pageId, buffer) {
            var gv;
            if (pageId == null)
                gv = this._default;
            else
                gv = this._storage[pageId];
            gv.px = buffer.readFloat();
            gv.py = buffer.readFloat();
        };
        GearXY.prototype.apply = function () {
            var pt = this._storage[this._controller.selectedPageId];
            if (!pt)
                pt = this._default;
            var ex;
            var ey;
            if (this.positionsInPercent && this._owner.parent) {
                ex = pt.px * this._owner.parent.width;
                ey = pt.py * this._owner.parent.height;
            }
            else {
                ex = pt.x;
                ey = pt.y;
            }
            if (this._tweenConfig != null && this._tweenConfig.tween && !fgui.UIPackage._constructing && !fgui.GearBase.disableAllTweenEffect) {
                if (this._tweenConfig._tweener != null) {
                    if (this._tweenConfig._tweener.endValue.x != ex || this._tweenConfig._tweener.endValue.y != ey) {
                        this._tweenConfig._tweener.kill(true);
                        this._tweenConfig._tweener = null;
                    }
                    else {
                        return;
                    }
                }
                var ox = this._owner.x;
                var oy = this._owner.y;
                if (ox != ex || oy != ey) {
                    if (this._owner.checkGearController(0, this._controller)) {
                        this._tweenConfig._displayLockToken = this._owner.addDisplayLock();
                    }
                    this._tweenConfig._tweener = fgui.GTween.to2(ox, oy, ex, ey, this._tweenConfig.duration)
                        .setDelay(this._tweenConfig.delay)
                        .setEase(this._tweenConfig.easeType)
                        .setTarget(this)
                        .onUpdate(this.__tweenUpdate, this)
                        .onComplete(this.__tweenComplete, this);
                }
            }
            else {
                this._owner._gearLocked = true;
                this._owner.setXY(ex, ey);
                this._owner._gearLocked = false;
            }
        };
        GearXY.prototype.__tweenUpdate = function (tweener) {
            this._owner._gearLocked = true;
            this._owner.setXY(tweener.value.x, tweener.value.y);
            this._owner._gearLocked = false;
        };
        GearXY.prototype.__tweenComplete = function () {
            if (this._tweenConfig._displayLockToken != 0) {
                this._owner.releaseDisplayLock(this._tweenConfig._displayLockToken);
                this._tweenConfig._displayLockToken = 0;
            }
            this._tweenConfig._tweener = null;
        };
        GearXY.prototype.updateState = function () {
            var pt = this._storage[this._controller.selectedPageId];
            if (!pt) {
                pt = {};
                this._storage[this._controller.selectedPageId] = pt;
            }
            pt.x = this._owner.x;
            pt.y = this._owner.y;
            pt.px = this._owner.x / this._owner.parent.width;
            pt.py = this._owner.y / this._owner.parent.height;
        };
        GearXY.prototype.updateFromRelations = function (dx, dy) {
            if (this._controller == null || this._storage == null || this.positionsInPercent)
                return;
            for (var key in this._storage) {
                var pt = this._storage[key];
                pt.x += dx;
                pt.y += dy;
            }
            this._default.x += dx;
            this._default.y += dy;
            this.updateState();
        };
        return GearXY;
    }(fgui.GearBase));
    fgui.GearXY = GearXY;
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isAnimationGear = function (obj) {
        return obj && "playing" in obj && "frame" in obj;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    fgui.isColorGear = function (obj) {
        return obj && "color" in obj;
    };
})(fgui || (fgui = {}));

(function (fgui) {
    var DisplayListItem = /** @class */ (function () {
        function DisplayListItem(packageItem, type) {
            this.packageItem = packageItem;
            this.type = type;
        }
        return DisplayListItem;
    }());
    fgui.DisplayListItem = DisplayListItem;
})(fgui || (fgui = {}));

(function (fgui) {
    var PackageItem = /** @class */ (function () {
        function PackageItem() {
            this.width = 0;
            this.height = 0;
            this.tileGridIndice = 0;
            this.tiledSlices = 0;
            //movieclip
            this.interval = 0;
            this.repeatDelay = 0;
        }
        PackageItem.prototype.load = function () {
            return this.owner.getItemAsset(this);
        };
        PackageItem.prototype.getBranch = function () {
            if (this.branches && this.owner._branchIndex != -1) {
                var itemId = this.branches[this.owner._branchIndex];
                if (itemId) {
                    return this.owner.getItemById(itemId);
                }
            }
            return this;
        };
        PackageItem.prototype.getHighResolution = function () {
            if (this.highResolution && fgui.GRoot.contentScaleLevel > 0) {
                var itemId = this.highResolution[fgui.GRoot.contentScaleLevel - 1];
                if (itemId) {
                    return this.owner.getItemById(itemId);
                }
            }
            return this;
        };
        PackageItem.prototype.toString = function () {
            return this.name;
        };
        return PackageItem;
    }());
    fgui.PackageItem = PackageItem;
})(fgui || (fgui = {}));

(function (fgui) {
    var UIObjectFactory = /** @class */ (function () {
        function UIObjectFactory() {
        }
        UIObjectFactory.setExtension = function (url, type) {
            this.setPackageItemExtension(url, type);
        };
        UIObjectFactory.setPackageItemExtension = function (url, type) {
            UIObjectFactory.packageItemExtensions[url.substring(5)] = type;
        };
        UIObjectFactory.setLoaderExtension = function (type) {
            UIObjectFactory.loaderExtension = type;
        };
        UIObjectFactory.resolvePackageItemExtension = function (pi) {
            pi.extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
            if (!pi.extensionType) {
                pi.extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
            }
        };
        UIObjectFactory.newObject = function (pi, userClass) {
            if (userClass === void 0) { userClass = null; }
            var obj;
            if (pi.type == fgui.PackageItemType.Component) {
                if (userClass) {
                    obj = new userClass();
                }
                else if (pi.extensionType) {
                    obj = new pi.extensionType();
                }
                else {
                    obj = UIObjectFactory.newObject2(pi.objectType);
                }
            }
            else {
                obj = UIObjectFactory.newObject2(pi.objectType);
            }
            if (obj) {
                obj.packageItem = pi;
            }
            return obj;
        };
        UIObjectFactory.newObject2 = function (type) {
            switch (type) {
                case fgui.ObjectType.Image:
                    return new fgui.GImage();
                case fgui.ObjectType.MovieClip:
                    return new fgui.GMovieClip();
                case fgui.ObjectType.Component:
                    return new fgui.GComponent();
                case fgui.ObjectType.Text:
                    return new fgui.GTextField();
                case fgui.ObjectType.RichText:
                    return new fgui.GRichTextField();
                case fgui.ObjectType.InputText:
                    return new fgui.GTextInput();
                case fgui.ObjectType.Group:
                    return new fgui.GGroup();
                case fgui.ObjectType.List:
                    return new fgui.GList();
                case fgui.ObjectType.Graph:
                    return new fgui.GGraph();
                case fgui.ObjectType.Loader:
                    if (UIObjectFactory.loaderType != null)
                        return new UIObjectFactory.loaderType();
                    else
                        return new fgui.GLoader();
                case fgui.ObjectType.Button:
                    return new fgui.GButton();
                case fgui.ObjectType.Label:
                    return new fgui.GLabel();
                case fgui.ObjectType.ProgressBar:
                    return new fgui.GProgressBar();
                case fgui.ObjectType.Slider:
                    return new fgui.GSlider();
                case fgui.ObjectType.ScrollBar:
                    return new fgui.GScrollBar();
                case fgui.ObjectType.ComboBox:
                    return new fgui.GComboBox();
                case fgui.ObjectType.Tree:
                    return new fgui.GTree();
                default:
                    return null;
            }
            return null;
        };
        /**@internal */
        UIObjectFactory.newObjectDirectly = function (type) {
            switch (type) {
                case "image":
                    return new fgui.GImage();
                case "movieclip":
                    return new fgui.GMovieClip();
                case "component":
                    return new fgui.GComponent();
                case "text":
                    return new fgui.GTextField();
                case "list":
                    return new fgui.GList();
                case "richtext":
                    return new fgui.GRichTextField();
                case "inputtext":
                    return new fgui.GTextInput();
                case "group":
                    return new fgui.GGroup();
                case "graph":
                    return new fgui.GGraph();
                case "loader":
                    if (UIObjectFactory.loaderExtension != null)
                        return new UIObjectFactory.loaderExtension();
                    else
                        return new fgui.GLoader();
            }
            return null;
        };
        // v1
        UIObjectFactory.newObjectv1 = function (pi) {
            switch (pi.type) {
                case fgui.PackageItemType.Image:
                    return new fgui.GImage();
                case fgui.PackageItemType.MovieClip:
                    return new fgui.GMovieClip();
                case fgui.PackageItemType.Component:
                    var cls = UIObjectFactory.packageItemExtensions[pi.owner.id + pi.id];
                    if (cls)
                        return new cls();
                    var xml = pi.owner.getItemAsset(pi);
                    var extention = xml.attributes.extention;
                    if (extention != null) {
                        switch (extention) {
                            case "Button":
                                return new fgui.GButton();
                            case "ProgressBar":
                                return new fgui.GProgressBar();
                            case "Label":
                                return new fgui.GLabel();
                            case "Slider":
                                return new fgui.GSlider();
                            case "ScrollBar":
                                return new fgui.GScrollBar();
                            case "ComboBox":
                                return new fgui.GComboBox();
                            default:
                                return new fgui.GComponent();
                        }
                    }
                    else
                        return new fgui.GComponent();
            }
            return null;
        };
        UIObjectFactory.packageItemExtensions = {};
        UIObjectFactory.extensions = UIObjectFactory.packageItemExtensions;
        return UIObjectFactory;
    }());
    fgui.UIObjectFactory = UIObjectFactory;
})(fgui || (fgui = {}));

(function (fgui) {
    var AtlasConfig = /** @class */ (function () {
        function AtlasConfig(atlasName, frame, orig, trim, rotate) {
            this.atlasName = atlasName;
            this.frame = frame;
            this.orig = orig;
            this.trim = trim;
            this.rotate = rotate;
        }
        return AtlasConfig;
    }());
    var UIPackage = /** @class */ (function () {
        function UIPackage() {
            /** @hide 资源组名称 */
            this._assetGroupName = fgui.utils.AssetManager.DEFAULT_GROUP;
            this._items = [];
            this._itemsById = {};
            this._itemsByName = {};
            this._atlasConfigs = {};
            this._dependencies = Array();
            this._branches = Array();
            this._branchIndex = -1;
        }
        Object.defineProperty(UIPackage.prototype, "id", {
            get: function () {
                return this._id;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIPackage.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(UIPackage.prototype, "customId", {
            get: function () {
                return this._customId;
            },
            set: function (value) {
                if (this._customId != null) {
                    delete UIPackage._instById[this._customId];
                }
                this._customId = value;
                if (this._customId != null) {
                    UIPackage._instById[this._customId] = this;
                }
            },
            enumerable: true,
            configurable: true
        });
        UIPackage.getById = function (id) {
            return UIPackage._instById[id];
        };
        UIPackage.getByName = function (name) {
            return UIPackage._instByName[name];
        };
        Object.defineProperty(UIPackage, "branch", {
            get: function () {
                return UIPackage._branch;
            },
            set: function (value) {
                UIPackage._branch = value;
                for (var pkgId in UIPackage._instById) {
                    var pkg = UIPackage._instById[pkgId];
                    if (pkg._branches) {
                        pkg._branchIndex = pkg._branches.indexOf(value);
                    }
                }
            },
            enumerable: true,
            configurable: true
        });
        UIPackage.getVar = function (key) {
            return UIPackage._vars[key];
        };
        UIPackage.setVar = function (key, value) {
            UIPackage._vars[key] = value;
        };
        /**
         * 添加资源包，添加之前，资源包必须已经下载完成，目标不支持内部加载。
         * @param resKey 包名称
         * @param assetGroupName 所在资源组，默认为 utils.AssetManager.DEFAULT_GROUP
         * @param decompressor 解压函数，如果使用压缩功能，需要提供
         */
        UIPackage.addPackage = function (resKey, assetGroupName, decompressor) {
            if (assetGroupName === void 0) { assetGroupName = fgui.utils.AssetManager.DEFAULT_GROUP; }
            var oldPkg = UIPackage._instById[resKey];
            if (oldPkg) {
                return oldPkg;
            }
            var assetDic = fgui.utils.AssetManager.inst.get(assetGroupName);
            if (!assetDic) {
                throw new Error("could not find AssetDictory " + assetGroupName + " in AssetManager");
            }
            // 支持 _fgui 结尾
            var buf = assetDic["" + resKey] || assetDic[resKey + "_fui"];
            if (!buf) {
                throw new Error("Resource '" + resKey + "' not found, please make sure that you use \"new fgui.utils.AssetLoader\" to load resources instead of \" PIXI.loaders.Loader\".");
            }
            if (!buf.data || !(buf.data instanceof ArrayBuffer)) {
                throw new Error("Resource '" + resKey + "' is not a proper binary resource, please load it as binary format by calling yourLoader.add(name, url, { loadType:PIXI.LoaderResource.LOAD_TYPE.XHR, xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER })");
            }
            var pkg = new UIPackage();
            pkg._resKey = resKey;
            pkg._assetGroupName = assetGroupName;
            pkg.loadPackage(new fgui.ByteBuffer(buf.data));
            UIPackage._instById[pkg.id] = pkg;
            UIPackage._instByName[pkg.name] = pkg;
            UIPackage._instById[resKey] = pkg;
            return pkg;
        };
        UIPackage.prototype.loadPackage = function (buffer) {
            // [0 ~ 3]  4字节 包版本/标识
            var pkgVersion = buffer.readUnsignedInt();
            if (pkgVersion != 0x46475549) {
                throw "FairyGUI: old package format found in '" + this._resKey + "'";
            }
            // [4] 4字节 版本
            buffer.version = buffer.readInt();
            // [8] n  1字节 是否压缩
            var compressed = buffer.readBool();
            // [8 + n + 2] n 包ID
            this._id = buffer.readUTF();
            // [n] 包名称
            this._name = buffer.readUTF();
            buffer.skip(20);
            if (compressed) {
                var buf = new Uint8Array(buffer.buffer, buffer.position, buffer.length - buffer.position);
                var inflater = new Zlib.RawInflate(buf);
                var buffer2 = new fgui.ByteBuffer(inflater.decompress());
                buffer2.version = buffer.version;
                buffer = buffer2;
            }
            var ver2 = buffer.version >= 2;
            var indexTablePos = buffer.position;
            var cnt;
            var i;
            var nextPos;
            var str;
            var branchIncluded;
            buffer.seek(indexTablePos, 4);
            // 字符表 个数
            cnt = buffer.readInt();
            var stringTable = new Array(cnt);
            for (i = 0; i < cnt; i++) {
                stringTable[i] = buffer.readUTF();
            }
            buffer.stringTable = stringTable;
            // 包依赖表
            buffer.seek(indexTablePos, 0);
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });
            }
            // ??
            if (ver2) {
                cnt = buffer.readShort();
                if (cnt > 0) {
                    this._branches = buffer.readSArray(cnt);
                    if (UIPackage._branch) {
                        this._branchIndex = this._branches.indexOf(UIPackage._branch);
                    }
                }
                branchIncluded = cnt > 0;
            }
            buffer.seek(indexTablePos, 1);
            // ？？ 
            var pi;
            var fileNamePrefix = this._resKey + "_";
            cnt = buffer.readShort();
            for (var i_1 = 0; i_1 < cnt; i_1++) {
                nextPos = buffer.readInt();
                nextPos += buffer.position;
                pi = new fgui.PackageItem();
                pi.owner = this;
                pi.type = buffer.readByte();
                pi.id = buffer.readS();
                pi.name = buffer.readS();
                buffer.readS(); //path
                pi.file = buffer.readS();
                buffer.readBool(); //exported
                pi.width = buffer.readInt();
                pi.height = buffer.readInt();
                switch (pi.type) {
                    case fgui.PackageItemType.Image:
                        {
                            pi.objectType = fgui.ObjectType.Image;
                            var scaleOption = buffer.readByte();
                            if (scaleOption == 1) {
                                pi.scale9Grid = new PIXI.Rectangle();
                                pi.scale9Grid.x = buffer.readInt();
                                pi.scale9Grid.y = buffer.readInt();
                                pi.scale9Grid.width = buffer.readInt();
                                pi.scale9Grid.height = buffer.readInt();
                                pi.tileGridIndice = buffer.readInt();
                            }
                            else if (scaleOption == 2) {
                                pi.scaleByTile = true;
                            }
                            pi.smoothing = buffer.readBool();
                            break;
                        }
                    case fgui.PackageItemType.MovieClip:
                        {
                            pi.smoothing = buffer.readBool();
                            pi.objectType = fgui.ObjectType.MovieClip;
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case fgui.PackageItemType.Font:
                        {
                            pi.rawData = buffer.readBuffer();
                            break;
                        }
                    case fgui.PackageItemType.Component:
                        {
                            var extension = buffer.readByte();
                            if (extension > 0) {
                                pi.objectType = extension;
                            }
                            else {
                                pi.objectType = fgui.ObjectType.Component;
                            }
                            pi.rawData = buffer.readBuffer();
                            fgui.UIObjectFactory.resolvePackageItemExtension(pi);
                            break;
                        }
                    case fgui.PackageItemType.Atlas:
                    case fgui.PackageItemType.Sound:
                    case fgui.PackageItemType.Misc:
                        {
                            pi.file = fileNamePrefix + fgui.ToolSet.getFileName(pi.file);
                            break;
                        }
                }
                if (ver2) {
                    str = buffer.readS(); //branch
                    if (str) {
                        pi.name = str + "/" + pi.name;
                    }
                    var branchCnt = buffer.readUnsignedByte();
                    if (branchCnt > 0) {
                        if (branchIncluded) {
                            pi.branches = buffer.readSArray(branchCnt);
                        }
                        else {
                            this._itemsById[buffer.readS()] = pi;
                        }
                    }
                    var highResCnt = buffer.readUnsignedByte();
                    if (highResCnt > 0) {
                        pi.highResolution = buffer.readSArray(highResCnt);
                    }
                }
                this._items.push(pi);
                this._itemsById[pi.id] = pi;
                if (pi.name != null) {
                    this._itemsByName[pi.name] = pi;
                }
                buffer.position = nextPos;
            }
            buffer.seek(indexTablePos, 2);
            cnt = buffer.readShort();
            for (var i_2 = 0; i_2 < cnt; i_2++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                var itemId = buffer.readS();
                pi = this._itemsById[buffer.readS()];
                var cfg = new AtlasConfig(pi.id);
                cfg.atlas = pi;
                cfg.frame = new PIXI.Rectangle(buffer.readInt(), buffer.readInt(), buffer.readInt(), buffer.readInt());
                cfg.rotated = buffer.readBool();
                cfg.rotate = cfg.rotated ? 6 : 0;
                cfg.orig = cfg.rotate != 0 ? new PIXI.Rectangle(0, 0, cfg.frame.height, cfg.frame.width) : null;
                if (ver2 && buffer.readBool()) {
                    // TODO
                    buffer.readInt();
                    buffer.readInt();
                    buffer.readInt();
                    buffer.readInt();
                }
                else {
                    // TODO
                }
                this._atlasConfigs[itemId] = cfg;
                buffer.position = nextPos;
            }
            if (buffer.seek(indexTablePos, 3)) {
                cnt = buffer.readShort();
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.readInt();
                    nextPos += buffer.position;
                    pi = this._itemsById[buffer.readS()];
                    if (pi && pi.type == fgui.PackageItemType.Image) {
                        pi.pixelHitTestData = new fgui.PixelHitTestData();
                        pi.pixelHitTestData.load(buffer);
                    }
                    buffer.position = nextPos;
                }
            }
        };
        UIPackage.removePackage = function (packageIdOrName) {
            var pkg = UIPackage._instById[packageIdOrName];
            if (!pkg) {
                pkg = UIPackage._instByName[packageIdOrName];
            }
            if (!pkg) {
                throw new Error("unknown package: " + packageIdOrName);
            }
            pkg.dispose();
            delete UIPackage._instById[pkg.id];
            delete UIPackage._instByName[pkg.name];
            delete UIPackage._instById[pkg._resKey];
            if (pkg._customId != null) {
                delete UIPackage._instById[pkg._customId];
            }
        };
        UIPackage.createObject = function (pkgName, resName, userClass) {
            var pkg = UIPackage.getByName(pkgName);
            if (pkg) {
                return pkg.createObject(resName, userClass);
            }
            else {
                return null;
            }
        };
        UIPackage.createObjectFromURL = function (url, userClass) {
            var pi = UIPackage.getItemByURL(url);
            if (pi) {
                return pi.owner.internalCreateObject(pi, userClass);
            }
            else {
                return null;
            }
        };
        UIPackage.getItemURL = function (pkgName, resName) {
            var pkg = UIPackage.getByName(pkgName);
            if (!pkg) {
                return null;
            }
            var pi = pkg._itemsByName[resName];
            if (!pi) {
                return null;
            }
            return "ui://" + pkg.id + pi.id;
        };
        UIPackage.getItemByURL = function (url) {
            var pos1 = url.indexOf("//");
            if (pos1 == -1) {
                return null;
            }
            var pos2 = url.indexOf("/", pos1 + 2);
            var pkg;
            if (pos2 == -1) {
                if (url.length > 13) {
                    var pkgId = url.substr(5, 8);
                    pkg = UIPackage.getById(pkgId);
                    if (pkg != null) {
                        var srcId = url.substr(13);
                        return pkg.getItemById(srcId);
                    }
                }
            }
            else {
                var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
                pkg = UIPackage.getByName(pkgName);
                if (pkg != null) {
                    var srcName = url.substr(pos2 + 1);
                    return pkg.getItemByName(srcName);
                }
            }
            return null;
        };
        UIPackage.getBitmapFontByURL = function (url) {
            return UIPackage._bitmapFonts[url];
        };
        UIPackage.setStringsSource = function (source) {
            UIPackage._stringsSource = {};
            var xmlroot = fgui.utils.XmlParser.tryParse(source);
            xmlroot.children.forEach(function (cxml) {
                if (cxml.nodeName == "string") {
                    var key = cxml.attributes.name;
                    var i = key.indexOf("-");
                    if (i == -1)
                        return;
                    var text = cxml.children.length > 0 ? cxml.children[0].text : "";
                    var key2 = key.substr(0, i);
                    var key3 = key.substr(i + 1);
                    var col = UIPackage._stringsSource[key2];
                    if (!col) {
                        col = {};
                        UIPackage._stringsSource[key2] = col;
                    }
                    col[key3] = text;
                }
            });
        };
        /**
         * format the URL from old version to new version
         * @param url url with old version format
         */
        UIPackage.normalizeURL = function (url) {
            if (url == null)
                return null;
            var pos1 = url.indexOf("//");
            if (pos1 == -1)
                return null;
            var pos2 = url.indexOf("/", pos1 + 2);
            if (pos2 == -1)
                return url;
            var pkgName = url.substr(pos1 + 2, pos2 - pos1 - 2);
            var srcName = url.substr(pos2 + 1);
            return UIPackage.getItemURL(pkgName, srcName);
        };
        UIPackage.prototype.dispose = function () {
            var _this = this;
            this._items.forEach(function (pi) {
                var texture = pi.texture;
                if (texture != null) {
                    texture.destroy(true);
                    PIXI.Texture.removeFromCache(texture);
                }
                else if (pi.frames != null) {
                    pi.frames.forEach(function (f) {
                        texture = f.texture;
                        if (texture) {
                            texture.destroy(true);
                            PIXI.Texture.removeFromCache(texture);
                        }
                    });
                }
                else if (pi.bitmapFont != null)
                    delete UIPackage._bitmapFonts[pi.bitmapFont.id];
                var cfg = _this._atlasConfigs[pi.id];
                if (cfg) {
                    var assetDic_1 = fgui.utils.AssetManager.inst.get(_this._assetGroupName) || {};
                    // utils.AssetManager.inst.destroyResource(assetDic, `${this._resKey}_${cfg.atlasName}`);
                    fgui.utils.AssetManager.inst.destroyResource(assetDic_1, cfg.atlasName);
                }
            }, this);
            var assetDic = fgui.utils.AssetManager.inst.get(this._assetGroupName) || {};
            fgui.utils.AssetManager.inst.destroyResource(assetDic, "" + this._resKey);
        };
        UIPackage.prototype.createObject = function (resName, userClass) {
            var pi = this._itemsByName[resName];
            if (pi) {
                return this.internalCreateObject(pi, userClass);
            }
            else {
                return null;
            }
        };
        UIPackage.prototype.internalCreateObject = function (item, userClass) {
            if (userClass === void 0) { userClass = null; }
            var g = fgui.UIObjectFactory.newObject(item, userClass);
            if (g == null) {
                return null;
            }
            UIPackage._constructing++;
            g.constructFromResource();
            UIPackage._constructing--;
            return g;
        };
        UIPackage.prototype.getItemById = function (itemId) {
            return this._itemsById[itemId];
        };
        UIPackage.prototype.getItemByName = function (resName) {
            return this._itemsByName[resName];
        };
        UIPackage.prototype.getItemAssetByName = function (resName) {
            var pi = this._itemsByName[resName];
            if (pi == null) {
                throw new Error("Resource '" + resName + "' not found");
            }
            return this.getItemAsset(pi);
        };
        UIPackage.prototype.getItemAsset = function (item) {
            switch (item.type) {
                case fgui.PackageItemType.Image:
                    if (!item.decoded) {
                        item.decoded = true;
                        var sprite = this._atlasConfigs[item.id];
                        if (sprite != null) {
                            item.texture = this.createSpriteTexture(item.id, sprite);
                        }
                    }
                    return item.texture;
                case fgui.PackageItemType.Atlas:
                    if (!item.decoded) {
                        item.decoded = true;
                        var fileName = (item.file != null && item.file.length > 0) ? item.file : (item.id + ".png");
                        //let resName: string = `${this._resKey}_${utils.StringUtil.getFileName(fileName)}`;
                        var resName = fileName;
                        var assetDic_2 = fgui.utils.AssetManager.inst.get(this._assetGroupName) || {};
                        var res = assetDic_2[resName];
                        if (!res) {
                            throw new Error(resName + " not found in fgui.utils.AssetLoader.resourcesPool, please use new AssetLoader() to load assets instead of using new PIXI.loaders.Loader(). besides, AssetLoader is a sub-class from PIXI.loaders.Loader so they have the same usage.");
                        }
                        item.texture = res.texture;
                        if (!item.texture) {
                            res = assetDic_2[this._resKey + "_" + fileName];
                            item.texture = res.texture;
                        }
                    }
                    return item.texture;
                case fgui.PackageItemType.Sound:
                    // FIXME
                    // if (!item.decoded) {
                    //     item.decoded = true;
                    //     item.sound = RES.getRes(item.file);
                    //     if (!item.sound)
                    //         console.log("Resource '" + item.file + "' not found, please check default.res.json!");
                    // }
                    return null;
                case fgui.PackageItemType.Font:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadFont(item);
                    }
                    return item.bitmapFont;
                case fgui.PackageItemType.MovieClip:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadMovieClip(item);
                    }
                    return item.frames;
                case fgui.PackageItemType.Misc:
                //! FIXME
                default:
                    var assetDic = fgui.utils.AssetManager.inst.get(this._assetGroupName) || {};
                    //return assetDic[`${this._resKey}_${item.id}`];
                    return assetDic[item.file || this._resKey + "_" + item.id];
                    ;
            }
        };
        UIPackage.prototype.createSpriteTexture = function (cfgName, cfg) {
            var atlasItem = this._itemsById[cfg.atlasName];
            if (atlasItem != null) {
                var atlasTexture = this.getItemAsset(atlasItem);
                if (!atlasTexture || !atlasTexture.baseTexture)
                    return null;
                if (!cfg.texCacheID) {
                    cfg.texCacheID = this._resKey + "_" + cfg.atlasName + "_" + cfgName;
                }
                var tex = PIXI.utils.TextureCache[cfg.texCacheID];
                if (!tex) {
                    tex = new PIXI.Texture(atlasTexture.baseTexture, cfg.frame, cfg.orig, cfg.trim, cfg.rotate);
                    PIXI.Texture.addToCache(tex, cfg.texCacheID);
                }
                return tex;
            }
            else {
                return null;
            }
        };
        UIPackage.prototype.loadComponentChildren = function (item) {
            var listNode = fgui.utils.XmlParser.getChildNodes(item.componentData, "displayList");
            if (listNode != null && listNode.length > 0) {
                item.displayList = [];
                listNode[0].children.forEach(function (cxml) {
                    var tagName = cxml.nodeName;
                    var di;
                    var src = cxml.attributes.src;
                    if (src) {
                        var pkgId = cxml.attributes.pkg;
                        var pkg = void 0;
                        if (pkgId && pkgId != item.owner.id)
                            pkg = UIPackage.getById(pkgId);
                        else
                            pkg = item.owner;
                        var pi = pkg != null ? pkg.getItemById(src) : null;
                        if (pi != null)
                            di = new fgui.DisplayListItem(pi, null);
                        else
                            di = new fgui.DisplayListItem(null, tagName);
                    }
                    else {
                        if (tagName == "text" && cxml.attributes.input == "true")
                            di = new fgui.DisplayListItem(null, "inputtext");
                        else
                            di = new fgui.DisplayListItem(null, tagName);
                    }
                    di.desc = cxml;
                    item.displayList.push(di);
                });
            }
            else
                item.displayList = [];
        };
        UIPackage.prototype.loadComponentTranslation = function (item) {
            if (UIPackage._stringsSource == null)
                return;
            var strings = UIPackage._stringsSource[this.id + item.id];
            if (strings == null)
                return;
            var value;
            var cxml, dxml;
            var ename;
            var elementId;
            var str;
            item.displayList.forEach(function (item) {
                cxml = item.desc;
                ename = cxml.nodeName;
                elementId = cxml.attributes.id;
                str = cxml.attributes.tooltips;
                if (str) {
                    value = strings[elementId + "-tips"];
                    if (value != undefined)
                        cxml.attributes.tooltips = value;
                }
                var cs = fgui.utils.XmlParser.getChildNodes(cxml, "gearText");
                dxml = cs && cs[0];
                if (dxml) {
                    value = strings[elementId + "-texts"];
                    if (value != undefined)
                        dxml.attributes.values = value;
                    value = strings[elementId + "-texts_def"];
                    if (value != undefined)
                        dxml.attributes.default = value;
                }
                if (ename == "text" || ename == "richtext") {
                    value = strings[elementId];
                    if (value != undefined)
                        cxml.attributes.text = value;
                    value = strings[elementId + "-prompt"];
                    if (value != undefined)
                        cxml.attributes.prompt = value;
                }
                else if (ename == "list") {
                    cxml.children.forEach(function (exml, index) {
                        if (exml.nodeName != "item")
                            return;
                        value = strings[elementId + "-" + index];
                        if (value != undefined)
                            exml.attributes.title = value;
                    });
                }
                else if (ename == "component") {
                    cs = fgui.utils.XmlParser.getChildNodes(cxml, "Button");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        value = strings[elementId + "-0"];
                        if (value != undefined)
                            dxml.attributes.selectedTitle = value;
                        return;
                    }
                    cs = fgui.utils.XmlParser.getChildNodes(cxml, "Label");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        return;
                    }
                    cs = fgui.utils.XmlParser.getChildNodes(cxml, "ComboBox");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        dxml.children.forEach(function (exml, index) {
                            if (exml.nodeName != "item")
                                return;
                            value = strings[elementId + "-" + index];
                            if (value != undefined)
                                exml.attributes.title = value;
                        });
                        return;
                    }
                }
            });
        };
        UIPackage.prototype.loadMovieClip = function (item) {
            var buffer = item.rawData;
            buffer.seek(0, 0);
            item.interval = buffer.readInt();
            item.swing = buffer.readBool();
            item.repeatDelay = buffer.readInt();
            buffer.seek(0, 1);
            var frameCount = buffer.readShort();
            item.frames = Array(frameCount);
            var spriteId;
            var frame;
            var sprite;
            var fx;
            var fy;
            var width;
            var height;
            for (var i = 0; i < frameCount; i++) {
                var nextPos = buffer.readShort();
                nextPos += buffer.position;
                frame = new fgui.Frame();
                fx = buffer.readInt();
                fy = buffer.readInt();
                width = buffer.readInt(); //width
                height = buffer.readInt(); //height
                frame.addDelay = buffer.readInt();
                spriteId = buffer.readS();
                var trimRect = new PIXI.Rectangle(fx, fy, width, height);
                if (spriteId != null && (sprite = this._atlasConfigs[spriteId]) != null) {
                    sprite.trim = trimRect;
                    frame.texture = this.createSpriteTexture(spriteId, sprite);
                }
                item.frames[i] = frame;
                buffer.position = nextPos;
            }
        };
        UIPackage.prototype.loadFont = function (item) {
            var font = new fgui.BitmapFont();
            font.id = "ui://" + this.id + item.id;
            item.bitmapFont = font;
            var buffer = item.rawData;
            buffer.seek(0, 0);
            font.ttf = buffer.readBool();
            font.tint = buffer.readBool();
            font.resizable = buffer.readBool();
            buffer.readBool(); //has channel
            font.size = buffer.readInt();
            var xadvance = buffer.readInt();
            var lineHeight = buffer.readInt();
            var mainTexture = null;
            var mainSprite = this._atlasConfigs[item.id];
            if (mainSprite != null) {
                mainTexture = (this.getItemAsset(mainSprite.atlas));
            }
            buffer.seek(0, 1);
            var bg = null;
            var cnt = buffer.readInt();
            for (var i = 0; i < cnt; i++) {
                var nextPos = buffer.readShort();
                nextPos += buffer.position;
                bg = new fgui.BMGlyph();
                var ch = buffer.readChar();
                font.glyphs[ch] = bg;
                var img = buffer.readS();
                var bx = buffer.readInt();
                var by = buffer.readInt();
                bg.x = buffer.readInt();
                bg.y = buffer.readInt();
                bg.width = buffer.readInt();
                bg.height = buffer.readInt();
                bg.advance = buffer.readInt();
                bg.channel = buffer.readByte();
                if (bg.channel == 1)
                    bg.channel = 3;
                else if (bg.channel == 2)
                    bg.channel = 2;
                else if (bg.channel == 3)
                    bg.channel = 1;
                if (font.ttf) {
                    var cfg = this._atlasConfigs[item.id];
                    var atlasOffsetX = cfg.frame.x;
                    var atlasOffsetY = cfg.frame.y;
                    bg.texture = new PIXI.Texture(mainTexture.baseTexture, new PIXI.Rectangle(bg.x + atlasOffsetX, bg.y + atlasOffsetY, bg.width, bg.height));
                    bg.lineHeight = lineHeight;
                }
                else {
                    var charImg = this._itemsById[img];
                    if (charImg) {
                        this.getItemAsset(charImg);
                        bg.width = charImg.width;
                        bg.height = charImg.height;
                        bg.texture = charImg.texture;
                    }
                    if (bg.advance == 0) {
                        if (xadvance == 0)
                            bg.advance = bg.x + bg.width;
                        else
                            bg.advance = xadvance;
                    }
                    bg.lineHeight = bg.y < 0 ? bg.height : (bg.y + bg.height);
                    if (bg.lineHeight < font.size)
                        bg.lineHeight = font.size;
                }
                buffer.position = nextPos;
            }
        };
        /**@internal */
        UIPackage._constructing = 0;
        UIPackage._bitmapFonts = {};
        UIPackage._stringsSource = null;
        UIPackage._instById = {};
        UIPackage._instByName = {};
        UIPackage._branch = "";
        UIPackage._vars = {};
        return UIPackage;
    }());
    fgui.UIPackage = UIPackage;
})(fgui || (fgui = {}));

(function (fgui) {
    var the3rd;
    (function (the3rd) {
        var ieee754;
        (function (ieee754) {
            // copy from ieee754.js
            function read(buffer, offset, isLE, mLen, nBytes) {
                var e;
                var m;
                var eLen = (nBytes * 8) - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var nBits = -7;
                var i = isLE ? (nBytes - 1) : 0;
                var d = isLE ? -1 : 1;
                var s = buffer[offset + i];
                i += d;
                e = s & ((1 << (-nBits)) - 1);
                s >>= (-nBits);
                nBits += eLen;
                for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) { }
                m = e & ((1 << (-nBits)) - 1);
                e >>= (-nBits);
                nBits += mLen;
                for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) { }
                if (e === 0) {
                    e = 1 - eBias;
                }
                else if (e === eMax) {
                    return m ? NaN : ((s ? -1 : 1) * Infinity);
                }
                else {
                    m = m + Math.pow(2, mLen);
                    e = e - eBias;
                }
                return (s ? -1 : 1) * m * Math.pow(2, e - mLen);
            }
            ieee754.read = read;
            function write(buffer, value, offset, isLE, mLen, nBytes) {
                var e, m, c;
                var eLen = (nBytes * 8) - mLen - 1;
                var eMax = (1 << eLen) - 1;
                var eBias = eMax >> 1;
                var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0);
                var i = isLE ? 0 : (nBytes - 1);
                var d = isLE ? 1 : -1;
                var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0;
                value = Math.abs(value);
                if (isNaN(value) || value === Infinity) {
                    m = isNaN(value) ? 1 : 0;
                    e = eMax;
                }
                else {
                    e = Math.floor(Math.log(value) / Math.LN2);
                    if (value * (c = Math.pow(2, -e)) < 1) {
                        e--;
                        c *= 2;
                    }
                    if (e + eBias >= 1) {
                        value += rt / c;
                    }
                    else {
                        value += rt * Math.pow(2, 1 - eBias);
                    }
                    if (value * c >= 2) {
                        e++;
                        c /= 2;
                    }
                    if (e + eBias >= eMax) {
                        m = 0;
                        e = eMax;
                    }
                    else if (e + eBias >= 1) {
                        m = ((value * c) - 1) * Math.pow(2, mLen);
                        e = e + eBias;
                    }
                    else {
                        m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen);
                        e = 0;
                    }
                }
                for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) { }
                e = (e << mLen) | m;
                eLen += mLen;
                for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) { }
                buffer[offset + i - d] |= s * 128;
            }
            ieee754.write = write;
        })(ieee754 = the3rd.ieee754 || (the3rd.ieee754 = {}));
    })(the3rd = fgui.the3rd || (fgui.the3rd = {}));
})(fgui || (fgui = {}));
// Author: Daniele Giardini - http://www.demigiant.com
// Created: 2014/07/19 14:11
// 
// License Copyright (c) Daniele Giardini.
// This work is subject to the terms at http://dotween.demigiant.com/license.php
// 
// =============================================================
// Contains Daniele Giardini's C# port of the easing equations created by Robert Penner
// (all easing equations except for Flash, InFlash, OutFlash, InOutFlash,
// which use some parts of Robert Penner's equations but were created by Daniele Giardini)
// http://robertpenner.com/easing, see license below:
// =============================================================
//
// TERMS OF USE - EASING EQUATIONS
//
// Open source under the BSD License.
//
// Copyright ? 2001 Robert Penner
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
// - Redistributions of source code must retain the above copyright notice,
// this list of conditions and the following disclaimer.
// - Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// - Neither the name of the author nor the names of contributors may be used to endorse
// or promote products derived from this software without specific prior written permission.
// - THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

// Author: Daniele Giardini - http://www.demigiant.com
// Created: 2014/07/19 14:11
// 
// License Copyright (c) Daniele Giardini.
// This work is subject to the terms at http://dotween.demigiant.com/license.php
// 
// =============================================================
// Contains Daniele Giardini's C# port of the easing equations created by Robert Penner
// (all easing equations except for Flash, InFlash, OutFlash, InOutFlash,
// which use some parts of Robert Penner's equations but were created by Daniele Giardini)
// http://robertpenner.com/easing, see license below:
// =============================================================
//
// TERMS OF USE - EASING EQUATIONS
//
// Open source under the BSD License.
//
// Copyright ? 2001 Robert Penner
// All rights reserved.
//
// Redistribution and use in source and binary forms, with or without modification,
// are permitted provided that the following conditions are met:
//
// - Redistributions of source code must retain the above copyright notice,
// this list of conditions and the following disclaimer.
// - Redistributions in binary form must reproduce the above copyright notice,
// this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.
// - Neither the name of the author nor the names of contributors may be used to endorse
// or promote products derived from this software without specific prior written permission.
// - THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
// AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
// THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
// IN NO EVENT SHALL THE COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
// LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT,
// STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
// EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
(function (fgui) {
    var EaseManager = /** @class */ (function () {
        function EaseManager() {
        }
        EaseManager.evaluate = function (easeType, time, duration, overshootOrAmplitude, period) {
            switch (easeType) {
                case fgui.EaseType.Linear:
                    return time / duration;
                case fgui.EaseType.SineIn:
                    return -Math.cos(time / duration * EaseManager._PiOver2) + 1;
                case fgui.EaseType.SineOut:
                    return Math.sin(time / duration * EaseManager._PiOver2);
                case fgui.EaseType.SineInOut:
                    return -0.5 * (Math.cos(Math.PI * time / duration) - 1);
                case fgui.EaseType.QuadIn:
                    return (time /= duration) * time;
                case fgui.EaseType.QuadOut:
                    return -(time /= duration) * (time - 2);
                case fgui.EaseType.QuadInOut:
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * time * time;
                    return -0.5 * ((--time) * (time - 2) - 1);
                case fgui.EaseType.CubicIn:
                    return (time /= duration) * time * time;
                case fgui.EaseType.CubicOut:
                    return ((time = time / duration - 1) * time * time + 1);
                case fgui.EaseType.CubicInOut:
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * time * time * time;
                    return 0.5 * ((time -= 2) * time * time + 2);
                case fgui.EaseType.QuartIn:
                    return (time /= duration) * time * time * time;
                case fgui.EaseType.QuartOut:
                    return -((time = time / duration - 1) * time * time * time - 1);
                case fgui.EaseType.QuartInOut:
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * time * time * time * time;
                    return -0.5 * ((time -= 2) * time * time * time - 2);
                case fgui.EaseType.QuintIn:
                    return (time /= duration) * time * time * time * time;
                case fgui.EaseType.QuintOut:
                    return ((time = time / duration - 1) * time * time * time * time + 1);
                case fgui.EaseType.QuintInOut:
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * time * time * time * time * time;
                    return 0.5 * ((time -= 2) * time * time * time * time + 2);
                case fgui.EaseType.ExpoIn:
                    return (time == 0) ? 0 : Math.pow(2, 10 * (time / duration - 1));
                case fgui.EaseType.ExpoOut:
                    if (time == duration)
                        return 1;
                    return (-Math.pow(2, -10 * time / duration) + 1);
                case fgui.EaseType.ExpoInOut:
                    if (time == 0)
                        return 0;
                    if (time == duration)
                        return 1;
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * Math.pow(2, 10 * (time - 1));
                    return 0.5 * (-Math.pow(2, -10 * --time) + 2);
                case fgui.EaseType.CircIn:
                    return -(Math.sqrt(1 - (time /= duration) * time) - 1);
                case fgui.EaseType.CircOut:
                    return Math.sqrt(1 - (time = time / duration - 1) * time);
                case fgui.EaseType.CircInOut:
                    if ((time /= duration * 0.5) < 1)
                        return -0.5 * (Math.sqrt(1 - time * time) - 1);
                    return 0.5 * (Math.sqrt(1 - (time -= 2) * time) + 1);
                case fgui.EaseType.ElasticIn:
                    var s0;
                    if (time == 0)
                        return 0;
                    if ((time /= duration) == 1)
                        return 1;
                    if (period == 0)
                        period = duration * 0.3;
                    if (overshootOrAmplitude < 1) {
                        overshootOrAmplitude = 1;
                        s0 = period / 4;
                    }
                    else
                        s0 = period / EaseManager._TwoPi * Math.asin(1 / overshootOrAmplitude);
                    return -(overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s0) * EaseManager._TwoPi / period));
                case fgui.EaseType.ElasticOut:
                    var s1;
                    if (time == 0)
                        return 0;
                    if ((time /= duration) == 1)
                        return 1;
                    if (period == 0)
                        period = duration * 0.3;
                    if (overshootOrAmplitude < 1) {
                        overshootOrAmplitude = 1;
                        s1 = period / 4;
                    }
                    else
                        s1 = period / EaseManager._TwoPi * Math.asin(1 / overshootOrAmplitude);
                    return (overshootOrAmplitude * Math.pow(2, -10 * time) * Math.sin((time * duration - s1) * EaseManager._TwoPi / period) + 1);
                case fgui.EaseType.ElasticInOut:
                    var s;
                    if (time == 0)
                        return 0;
                    if ((time /= duration * 0.5) == 2)
                        return 1;
                    if (period == 0)
                        period = duration * (0.3 * 1.5);
                    if (overshootOrAmplitude < 1) {
                        overshootOrAmplitude = 1;
                        s = period / 4;
                    }
                    else
                        s = period / EaseManager._TwoPi * Math.asin(1 / overshootOrAmplitude);
                    if (time < 1)
                        return -0.5 * (overshootOrAmplitude * Math.pow(2, 10 * (time -= 1)) * Math.sin((time * duration - s) * EaseManager._TwoPi / period));
                    return overshootOrAmplitude * Math.pow(2, -10 * (time -= 1)) * Math.sin((time * duration - s) * EaseManager._TwoPi / period) * 0.5 + 1;
                case fgui.EaseType.BackIn:
                    return (time /= duration) * time * ((overshootOrAmplitude + 1) * time - overshootOrAmplitude);
                case fgui.EaseType.BackOut:
                    return ((time = time / duration - 1) * time * ((overshootOrAmplitude + 1) * time + overshootOrAmplitude) + 1);
                case fgui.EaseType.BackInOut:
                    if ((time /= duration * 0.5) < 1)
                        return 0.5 * (time * time * (((overshootOrAmplitude *= (1.525)) + 1) * time - overshootOrAmplitude));
                    return 0.5 * ((time -= 2) * time * (((overshootOrAmplitude *= (1.525)) + 1) * time + overshootOrAmplitude) + 2);
                case fgui.EaseType.BounceIn:
                    return Bounce.easeIn(time, duration);
                case fgui.EaseType.BounceOut:
                    return Bounce.easeOut(time, duration);
                case fgui.EaseType.BounceInOut:
                    return Bounce.easeInOut(time, duration);
                default:
                    return -(time /= duration) * (time - 2);
            }
        };
        EaseManager._PiOver2 = Math.PI * 0.5;
        EaseManager._TwoPi = Math.PI * 2;
        return EaseManager;
    }());
    fgui.EaseManager = EaseManager;
    var Bounce = /** @class */ (function () {
        function Bounce() {
        }
        Bounce.easeIn = function (time, duration) {
            return 1 - Bounce.easeOut(duration - time, duration);
        };
        Bounce.easeOut = function (time, duration) {
            if ((time /= duration) < (1 / 2.75)) {
                return (7.5625 * time * time);
            }
            if (time < (2 / 2.75)) {
                return (7.5625 * (time -= (1.5 / 2.75)) * time + 0.75);
            }
            if (time < (2.5 / 2.75)) {
                return (7.5625 * (time -= (2.25 / 2.75)) * time + 0.9375);
            }
            return (7.5625 * (time -= (2.625 / 2.75)) * time + 0.984375);
        };
        Bounce.easeInOut = function (time, duration) {
            if (time < duration * 0.5) {
                return Bounce.easeIn(time * 2, duration) * 0.5;
            }
            return Bounce.easeOut(time * 2 - duration, duration) * 0.5 + 0.5;
        };
        return Bounce;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var EaseType = /** @class */ (function () {
        function EaseType() {
        }
        EaseType.Linear = 0;
        EaseType.SineIn = 1;
        EaseType.SineOut = 2;
        EaseType.SineInOut = 3;
        EaseType.QuadIn = 4;
        EaseType.QuadOut = 5;
        EaseType.QuadInOut = 6;
        EaseType.CubicIn = 7;
        EaseType.CubicOut = 8;
        EaseType.CubicInOut = 9;
        EaseType.QuartIn = 10;
        EaseType.QuartOut = 11;
        EaseType.QuartInOut = 12;
        EaseType.QuintIn = 13;
        EaseType.QuintOut = 14;
        EaseType.QuintInOut = 15;
        EaseType.ExpoIn = 16;
        EaseType.ExpoOut = 17;
        EaseType.ExpoInOut = 18;
        EaseType.CircIn = 19;
        EaseType.CircOut = 20;
        EaseType.CircInOut = 21;
        EaseType.ElasticIn = 22;
        EaseType.ElasticOut = 23;
        EaseType.ElasticInOut = 24;
        EaseType.BackIn = 25;
        EaseType.BackOut = 26;
        EaseType.BackInOut = 27;
        EaseType.BounceIn = 28;
        EaseType.BounceOut = 29;
        EaseType.BounceInOut = 30;
        EaseType.Custom = 31;
        return EaseType;
    }());
    fgui.EaseType = EaseType;
})(fgui || (fgui = {}));

(function (fgui) {
    var GPath = /** @class */ (function () {
        function GPath() {
            this._segments = new Array();
            this._points = new Array();
        }
        Object.defineProperty(GPath.prototype, "length", {
            get: function () {
                return this._fullLength;
            },
            enumerable: true,
            configurable: true
        });
        GPath.prototype.create2 = function (pt1, pt2, pt3, pt4) {
            var points = new Array();
            points.push(pt1);
            points.push(pt2);
            if (pt3)
                points.push(pt3);
            if (pt4)
                points.push(pt4);
            this.create(points);
        };
        GPath.prototype.create = function (points) {
            this._segments.length = 0;
            this._points.length = 0;
            this._fullLength = 0;
            var cnt = points.length;
            if (cnt == 0)
                return;
            var splinePoints = GPath.helperPoints;
            splinePoints.length = 0;
            var prev = points[0];
            if (prev.curveType == fgui.CurveType.CRSpline)
                splinePoints.push(new PIXI.Point(prev.x, prev.y));
            for (var i = 1; i < cnt; i++) {
                var current = points[i];
                if (prev.curveType != fgui.CurveType.CRSpline) {
                    var seg = new Segment();
                    seg.type = prev.curveType;
                    seg.ptStart = this._points.length;
                    if (prev.curveType == fgui.CurveType.Straight) {
                        seg.ptCount = 2;
                        this._points.push(new PIXI.Point(prev.x, prev.y));
                        this._points.push(new PIXI.Point(current.x, current.y));
                    }
                    else if (prev.curveType == fgui.CurveType.Bezier) {
                        seg.ptCount = 3;
                        this._points.push(new PIXI.Point(prev.x, prev.y));
                        this._points.push(new PIXI.Point(current.x, current.y));
                        this._points.push(new PIXI.Point(prev.control1_x, prev.control1_y));
                    }
                    else if (prev.curveType == fgui.CurveType.CubicBezier) {
                        seg.ptCount = 4;
                        this._points.push(new PIXI.Point(prev.x, prev.y));
                        this._points.push(new PIXI.Point(current.x, current.y));
                        this._points.push(new PIXI.Point(prev.control1_x, prev.control1_y));
                        this._points.push(new PIXI.Point(prev.control2_x, prev.control2_y));
                    }
                    seg.length = fgui.ToolSet.distance(prev.x, prev.y, current.x, current.y);
                    this._fullLength += seg.length;
                    this._segments.push(seg);
                }
                if (current.curveType != fgui.CurveType.CRSpline) {
                    if (splinePoints.length > 0) {
                        splinePoints.push(new PIXI.Point(current.x, current.y));
                        this.createSplineSegment();
                    }
                }
                else
                    splinePoints.push(new PIXI.Point(current.x, current.y));
                prev = current;
            }
            if (splinePoints.length > 1)
                this.createSplineSegment();
        };
        GPath.prototype.createSplineSegment = function () {
            var splinePoints = GPath.helperPoints;
            var cnt = splinePoints.length;
            splinePoints.splice(0, 0, splinePoints[0]);
            splinePoints.push(splinePoints[cnt]);
            splinePoints.push(splinePoints[cnt]);
            cnt += 3;
            var seg = new Segment();
            seg.type = fgui.CurveType.CRSpline;
            seg.ptStart = this._points.length;
            seg.ptCount = cnt;
            this._points = this._points.concat(splinePoints);
            seg.length = 0;
            for (var i = 1; i < cnt; i++) {
                seg.length += fgui.ToolSet.distance(splinePoints[i - 1].x, splinePoints[i - 1].y, splinePoints[i].x, splinePoints[i].y);
            }
            this._fullLength += seg.length;
            this._segments.push(seg);
            splinePoints.length = 0;
        };
        GPath.prototype.clear = function () {
            this._segments.length = 0;
            this._points.length = 0;
        };
        GPath.prototype.getPointAt = function (t, result) {
            if (!result)
                result = new PIXI.Point();
            else
                result.x = result.y = 0;
            t = fgui.ToolSet.clamp01(t);
            var cnt = this._segments.length;
            if (cnt == 0) {
                return result;
            }
            var seg;
            if (t == 1) {
                seg = this._segments[cnt - 1];
                if (seg.type == fgui.CurveType.Straight) {
                    result.x = fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                    result.y = fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    return result;
                }
                else if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier)
                    return this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                else
                    return this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
            }
            var len = t * this._fullLength;
            for (var i = 0; i < cnt; i++) {
                seg = this._segments[i];
                len -= seg.length;
                if (len < 0) {
                    t = 1 + len / seg.length;
                    if (seg.type == fgui.CurveType.Straight) {
                        result.x = fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t);
                        result.y = fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t);
                    }
                    else if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier)
                        result = this.onBezierCurve(seg.ptStart, seg.ptCount, t, result);
                    else
                        result = this.onCRSplineCurve(seg.ptStart, seg.ptCount, t, result);
                    break;
                }
            }
            return result;
        };
        Object.defineProperty(GPath.prototype, "segmentCount", {
            get: function () {
                return this._segments.length;
            },
            enumerable: true,
            configurable: true
        });
        GPath.prototype.getAnchorsInSegment = function (segmentIndex, points) {
            if (points == null)
                points = new Array();
            var seg = this._segments[segmentIndex];
            for (var i = 0; i < seg.ptCount; i++)
                points.push(new PIXI.Point(this._points[seg.ptStart + i].x, this._points[seg.ptStart + i].y));
            return points;
        };
        GPath.prototype.getPointsInSegment = function (segmentIndex, t0, t1, points, ts, pointDensity) {
            if (points == null)
                points = new Array();
            if (!pointDensity || isNaN(pointDensity))
                pointDensity = 0.1;
            if (ts)
                ts.push(t0);
            var seg = this._segments[segmentIndex];
            if (seg.type == fgui.CurveType.Straight) {
                points.push(new PIXI.Point(fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t0), fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t0)));
                points.push(new PIXI.Point(fgui.ToolSet.lerp(this._points[seg.ptStart].x, this._points[seg.ptStart + 1].x, t1), fgui.ToolSet.lerp(this._points[seg.ptStart].y, this._points[seg.ptStart + 1].y, t1)));
            }
            else {
                var func;
                if (seg.type == fgui.CurveType.Bezier || seg.type == fgui.CurveType.CubicBezier)
                    func = this.onBezierCurve;
                else
                    func = this.onCRSplineCurve;
                points.push(func.call(this, seg.ptStart, seg.ptCount, t0, new PIXI.Point()));
                var SmoothAmount = Math.min(seg.length * pointDensity, 50);
                for (var j = 0; j <= SmoothAmount; j++) {
                    var t = j / SmoothAmount;
                    if (t > t0 && t < t1) {
                        points.push(func.call(this, seg.ptStart, seg.ptCount, t, new PIXI.Point()));
                        if (ts != null)
                            ts.push(t);
                    }
                }
                points.push(func.call(this, seg.ptStart, seg.ptCount, t1, new PIXI.Point()));
            }
            if (ts != null)
                ts.push(t1);
            return points;
        };
        GPath.prototype.getAllPoints = function (points, ts, pointDensity) {
            if (points == null)
                points = new Array();
            if (!pointDensity || isNaN(pointDensity))
                pointDensity = 0.1;
            var cnt = this._segments.length;
            for (var i = 0; i < cnt; i++)
                this.getPointsInSegment(i, 0, 1, points, ts, pointDensity);
            return points;
        };
        GPath.prototype.onCRSplineCurve = function (ptStart, ptCount, t, result) {
            var adjustedIndex = Math.floor(t * (ptCount - 4)) + ptStart; //Since the equation works with 4 points, we adjust the starting point depending on t to return a point on the specific segment
            var p0x = this._points[adjustedIndex].x;
            var p0y = this._points[adjustedIndex].y;
            var p1x = this._points[adjustedIndex + 1].x;
            var p1y = this._points[adjustedIndex + 1].y;
            var p2x = this._points[adjustedIndex + 2].x;
            var p2y = this._points[adjustedIndex + 2].y;
            var p3x = this._points[adjustedIndex + 3].x;
            var p3y = this._points[adjustedIndex + 3].y;
            var adjustedT = (t == 1) ? 1 : fgui.ToolSet.repeat(t * (ptCount - 4), 1); // Then we adjust t to be that value on that new piece of segment... for t == 1f don't use repeat (that would return 0f);
            var t0 = ((-adjustedT + 2) * adjustedT - 1) * adjustedT * 0.5;
            var t1 = (((3 * adjustedT - 5) * adjustedT) * adjustedT + 2) * 0.5;
            var t2 = ((-3 * adjustedT + 4) * adjustedT + 1) * adjustedT * 0.5;
            var t3 = ((adjustedT - 1) * adjustedT * adjustedT) * 0.5;
            result.x = p0x * t0 + p1x * t1 + p2x * t2 + p3x * t3;
            result.y = p0y * t0 + p1y * t1 + p2y * t2 + p3y * t3;
            return result;
        };
        GPath.prototype.onBezierCurve = function (ptStart, ptCount, t, result) {
            var t2 = 1 - t;
            var p0x = this._points[ptStart].x;
            var p0y = this._points[ptStart].y;
            var p1x = this._points[ptStart + 1].x;
            var p1y = this._points[ptStart + 1].y;
            var cp0x = this._points[ptStart + 2].x;
            var cp0y = this._points[ptStart + 2].y;
            if (ptCount == 4) {
                var cp1x = this._points[ptStart + 3].x;
                var cp1y = this._points[ptStart + 3].y;
                result.x = t2 * t2 * t2 * p0x + 3 * t2 * t2 * t * cp0x + 3 * t2 * t * t * cp1x + t * t * t * p1x;
                result.y = t2 * t2 * t2 * p0y + 3 * t2 * t2 * t * cp0y + 3 * t2 * t * t * cp1y + t * t * t * p1y;
            }
            else {
                result.x = t2 * t2 * p0x + 2 * t2 * t * cp0x + t * t * p1x;
                result.y = t2 * t2 * p0y + 2 * t2 * t * cp0y + t * t * p1y;
            }
            return result;
        };
        GPath.helperPoints = new Array();
        return GPath;
    }());
    fgui.GPath = GPath;
    var Segment = /** @class */ (function () {
        function Segment() {
        }
        return Segment;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var CurveType;
    (function (CurveType) {
        CurveType[CurveType["CRSpline"] = 0] = "CRSpline";
        CurveType[CurveType["Bezier"] = 1] = "Bezier";
        CurveType[CurveType["CubicBezier"] = 2] = "CubicBezier";
        CurveType[CurveType["Straight"] = 3] = "Straight";
    })(CurveType = fgui.CurveType || (fgui.CurveType = {}));
    var GPathPoint = /** @class */ (function () {
        function GPathPoint() {
            this.x = 0;
            this.y = 0;
            this.control1_x = 0;
            this.control1_y = 0;
            this.control2_x = 0;
            this.control2_y = 0;
            this.curveType = 0;
        }
        GPathPoint.newPoint = function (x, y, curveType) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (curveType === void 0) { curveType = 0; }
            var pt = new GPathPoint();
            pt.x = x;
            pt.y = y;
            pt.control1_x = 0;
            pt.control1_y = 0;
            pt.control2_x = 0;
            pt.control2_y = 0;
            pt.curveType = curveType;
            return pt;
        };
        GPathPoint.newBezierPoint = function (x, y, control1_x, control1_y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (control1_x === void 0) { control1_x = 0; }
            if (control1_y === void 0) { control1_y = 0; }
            var pt = new GPathPoint();
            pt.x = x;
            pt.y = y;
            pt.control1_x = control1_x;
            pt.control1_y = control1_y;
            pt.control2_x = 0;
            pt.control2_y = 0;
            pt.curveType = CurveType.Bezier;
            return pt;
        };
        GPathPoint.newCubicBezierPoint = function (x, y, control1_x, control1_y, control2_x, control2_y) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (control1_x === void 0) { control1_x = 0; }
            if (control1_y === void 0) { control1_y = 0; }
            if (control2_x === void 0) { control2_x = 0; }
            if (control2_y === void 0) { control2_y = 0; }
            var pt = new GPathPoint();
            pt.x = x;
            pt.y = y;
            pt.control1_x = control1_x;
            pt.control1_y = control1_y;
            pt.control2_x = control2_x;
            pt.control2_y = control2_y;
            pt.curveType = CurveType.CubicBezier;
            return pt;
        };
        GPathPoint.prototype.clone = function () {
            var ret = new GPathPoint();
            ret.x = this.x;
            ret.y = this.y;
            ret.control1_x = this.control1_x;
            ret.control1_y = this.control1_y;
            ret.control2_x = this.control2_x;
            ret.control2_y = this.control2_y;
            ret.curveType = this.curveType;
            return ret;
        };
        return GPathPoint;
    }());
    fgui.GPathPoint = GPathPoint;
})(fgui || (fgui = {}));

(function (fgui) {
    var GTween = /** @class */ (function () {
        function GTween() {
        }
        GTween.to = function (start, end, duration) {
            return fgui.TweenManager.createTween()._to(start, end, duration);
        };
        GTween.to2 = function (start, start2, end, end2, duration) {
            return fgui.TweenManager.createTween()._to2(start, start2, end, end2, duration);
        };
        GTween.to3 = function (start, start2, start3, end, end2, end3, duration) {
            return fgui.TweenManager.createTween()._to3(start, start2, start3, end, end2, end3, duration);
        };
        GTween.to4 = function (start, start2, start3, start4, end, end2, end3, end4, duration) {
            return fgui.TweenManager.createTween()._to4(start, start2, start3, start4, end, end2, end3, end4, duration);
        };
        GTween.toColor = function (start, end, duration) {
            return fgui.TweenManager.createTween()._toColor(start, end, duration);
        };
        GTween.delayedCall = function (delay) {
            return fgui.TweenManager.createTween().setDelay(delay);
        };
        GTween.shake = function (startX, startY, amplitude, duration) {
            return fgui.TweenManager.createTween()._shake(startX, startY, amplitude, duration);
        };
        GTween.isTweening = function (target, propType) {
            return fgui.TweenManager.isTweening(target, propType);
        };
        GTween.kill = function (target, complete, propType) {
            fgui.TweenManager.killTweens(target, complete, propType);
        };
        GTween.getTween = function (target, propType) {
            return fgui.TweenManager.getTween(target, propType);
        };
        GTween.catchCallbackExceptions = true;
        return GTween;
    }());
    fgui.GTween = GTween;
})(fgui || (fgui = {}));

(function (fgui) {
    var GTweener = /** @class */ (function () {
        function GTweener() {
            this._startValue = new fgui.TweenValue();
            this._endValue = new fgui.TweenValue();
            this._value = new fgui.TweenValue();
            this._deltaValue = new fgui.TweenValue();
            this._reset();
        }
        GTweener.prototype.setDelay = function (value) {
            this._delay = value;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "delay", {
            get: function () {
                return this._delay;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setDuration = function (value) {
            this._duration = value;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "duration", {
            get: function () {
                return this._duration;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setBreakpoint = function (value) {
            this._breakpoint = value;
            return this;
        };
        GTweener.prototype.setEase = function (value) {
            this._easeType = value;
            return this;
        };
        GTweener.prototype.setEasePeriod = function (value) {
            this._easePeriod = value;
            return this;
        };
        GTweener.prototype.setEaseOvershootOrAmplitude = function (value) {
            this._easeOvershootOrAmplitude = value;
            return this;
        };
        GTweener.prototype.setRepeat = function (repeat, yoyo) {
            if (yoyo === void 0) { yoyo = false; }
            this._repeat = repeat;
            this._yoyo = yoyo;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "repeat", {
            get: function () {
                return this._repeat;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setTimeScale = function (value) {
            this._timeScale = value;
            return this;
        };
        GTweener.prototype.setSnapping = function (value) {
            this._snapping = value;
            return this;
        };
        GTweener.prototype.setTarget = function (value, propType) {
            if (propType === void 0) { propType = null; }
            this._target = value;
            this._propType = propType;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "target", {
            get: function () {
                return this._target;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setUserData = function (value) {
            this._userData = value;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "userData", {
            get: function () {
                return this._userData;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setPath = function (value) {
            this._path = value;
            return this;
        };
        GTweener.prototype.onUpdate = function (callback, caller) {
            this._onUpdate = callback;
            this._onUpdateCaller = caller;
            return this;
        };
        GTweener.prototype.onStart = function (callback, caller) {
            this._onStart = callback;
            this._onStartCaller = caller;
            return this;
        };
        GTweener.prototype.onComplete = function (callback, caller) {
            this._onComplete = callback;
            this._onCompleteCaller = caller;
            return this;
        };
        Object.defineProperty(GTweener.prototype, "startValue", {
            get: function () {
                return this._startValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "endValue", {
            get: function () {
                return this._endValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "deltaValue", {
            get: function () {
                return this._deltaValue;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "normalizedTime", {
            get: function () {
                return this._normalizedTime;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "completed", {
            get: function () {
                return this._ended != 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(GTweener.prototype, "allCompleted", {
            get: function () {
                return this._ended == 1;
            },
            enumerable: true,
            configurable: true
        });
        GTweener.prototype.setPaused = function (paused) {
            this._paused = paused;
            return this;
        };
        /**
         * seek position of the tween, in seconds.
         */
        GTweener.prototype.seek = function (time) {
            if (this._killed)
                return;
            this._elapsedTime = time;
            if (this._elapsedTime < this._delay) {
                if (this._started)
                    this._elapsedTime = this._delay;
                else
                    return;
            }
            this.update();
        };
        GTweener.prototype.kill = function (complete) {
            if (complete === void 0) { complete = false; }
            if (this._killed)
                return;
            if (complete) {
                if (this._ended == 0) {
                    if (this._breakpoint >= 0)
                        this._elapsedTime = this._delay + this._breakpoint;
                    else if (this._repeat >= 0)
                        this._elapsedTime = this._delay + this._duration * (this._repeat + 1);
                    else
                        this._elapsedTime = this._delay + this._duration * 2;
                    this.update();
                }
                this.callCompleteCallback();
            }
            this._killed = true;
        };
        GTweener.prototype._to = function (start, end, duration) {
            this._valueSize = 1;
            this._startValue.x = start;
            this._endValue.x = end;
            this._value.x = start;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._to2 = function (start, start2, end, end2, duration) {
            this._valueSize = 2;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._value.x = start;
            this._value.y = start2;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._to3 = function (start, start2, start3, end, end2, end3, duration) {
            this._valueSize = 3;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._startValue.z = start3;
            this._endValue.z = end3;
            this._value.x = start;
            this._value.y = start2;
            this._value.z = start3;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._to4 = function (start, start2, start3, start4, end, end2, end3, end4, duration) {
            this._valueSize = 4;
            this._startValue.x = start;
            this._endValue.x = end;
            this._startValue.y = start2;
            this._endValue.y = end2;
            this._startValue.z = start3;
            this._endValue.z = end3;
            this._startValue.w = start4;
            this._endValue.w = end4;
            this._value.x = start;
            this._value.y = start2;
            this._value.z = start3;
            this._value.w = start4;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._toColor = function (start, end, duration) {
            this._valueSize = 4;
            this._startValue.color = start;
            this._endValue.color = end;
            this._value.color = start;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._shake = function (startX, startY, amplitude, duration) {
            this._valueSize = 5;
            this._startValue.x = startX;
            this._startValue.y = startY;
            this._startValue.w = amplitude;
            this._duration = duration;
            return this;
        };
        GTweener.prototype._init = function () {
            this._delay = 0;
            this._duration = 0;
            this._breakpoint = -1;
            this._easeType = fgui.EaseType.QuadOut;
            this._timeScale = 1;
            this._easePeriod = 0;
            this._easeOvershootOrAmplitude = 1.70158;
            this._snapping = false;
            this._repeat = 0;
            this._yoyo = false;
            this._valueSize = 0;
            this._started = false;
            this._paused = false;
            this._killed = false;
            this._elapsedTime = 0;
            this._normalizedTime = 0;
            this._ended = 0;
        };
        GTweener.prototype._reset = function () {
            this._target = null;
            this._propType = null;
            this._userData = null;
            this._path = null;
            this._onStart = this._onUpdate = this._onComplete = null;
            this._onStartCaller = this._onUpdateCaller = this._onCompleteCaller = null;
        };
        GTweener.prototype._update = function (dt) {
            if (this._timeScale != 1)
                dt *= this._timeScale;
            if (dt == 0)
                return;
            if (this._ended != 0) //Maybe completed by seek
             {
                this.callCompleteCallback();
                this._killed = true;
                return;
            }
            this._elapsedTime += dt;
            this.update();
            if (this._ended != 0) {
                if (!this._killed) {
                    this.callCompleteCallback();
                    this._killed = true;
                }
            }
        };
        GTweener.prototype.update = function () {
            this._ended = 0;
            if (this._valueSize == 0) //DelayedCall
             {
                if (this._elapsedTime >= this._delay + this._duration)
                    this._ended = 1;
                return;
            }
            if (!this._started) {
                if (this._elapsedTime < this._delay)
                    return;
                this._started = true;
                this.callStartCallback();
                if (this._killed)
                    return;
            }
            var reversed = false;
            var tt = this._elapsedTime - this._delay;
            if (this._breakpoint >= 0 && tt >= this._breakpoint) {
                tt = this._breakpoint;
                this._ended = 2;
            }
            if (this._repeat != 0) {
                var round = Math.floor(tt / this._duration);
                tt -= this._duration * round;
                if (this._yoyo)
                    reversed = round % 2 == 1;
                if (this._repeat > 0 && this._repeat - round < 0) {
                    if (this._yoyo)
                        reversed = this._repeat % 2 == 1;
                    tt = this._duration;
                    this._ended = 1;
                }
            }
            else if (tt >= this._duration) {
                tt = this._duration;
                this._ended = 1;
            }
            this._normalizedTime = fgui.EaseManager.evaluate(this._easeType, reversed ? (this._duration - tt) : tt, this._duration, this._easeOvershootOrAmplitude, this._easePeriod);
            this._value.setZero();
            this._deltaValue.setZero();
            if (this._valueSize == 5) {
                if (this._ended == 0) {
                    var r = this._startValue.w * (1 - this._normalizedTime);
                    var rx = r * (Math.random() > 0.5 ? 1 : -1);
                    var ry = r * (Math.random() > 0.5 ? 1 : -1);
                    this._deltaValue.x = rx;
                    this._deltaValue.y = ry;
                    this._value.x = this._startValue.x + rx;
                    this._value.y = this._startValue.y + ry;
                }
                else {
                    this._value.x = this._startValue.x;
                    this._value.y = this._startValue.y;
                }
            }
            else if (this._path) {
                var pt = GTweener.helperPoint;
                this._path.getPointAt(this._normalizedTime, pt);
                if (this._snapping) {
                    pt.x = Math.round(pt.x);
                    pt.y = Math.round(pt.y);
                }
                this._deltaValue.x = pt.x - this._value.x;
                this._deltaValue.y = pt.y - this._value.y;
                this._value.x = pt.x;
                this._value.y = pt.y;
            }
            else {
                for (var i = 0; i < this._valueSize; i++) {
                    var n1 = this._startValue.getField(i);
                    var n2 = this._endValue.getField(i);
                    var f = n1 + (n2 - n1) * this._normalizedTime;
                    if (this._snapping)
                        f = Math.round(f);
                    this._deltaValue.setField(i, f - this._value.getField(i));
                    this._value.setField(i, f);
                }
            }
            if (this._target != null && this._propType != null) {
                if (this._propType instanceof Function) {
                    switch (this._valueSize) {
                        case 1:
                            this._propType.call(this._target, this._value.x);
                            break;
                        case 2:
                            this._propType.call(this._target, this._value.x, this._value.y);
                            break;
                        case 3:
                            this._propType.call(this._target, this._value.x, this._value.y, this._value.z);
                            break;
                        case 4:
                            this._propType.call(this._target, this._value.x, this._value.y, this._value.z, this._value.w);
                            break;
                        case 5:
                            this._propType.call(this._target, this._value.color);
                            break;
                        case 6:
                            this._propType.call(this._target, this._value.x, this._value.y);
                            break;
                    }
                }
                else {
                    if (this._valueSize == 5)
                        this._target[this._propType] = this._value.color;
                    else
                        this._target[this._propType] = this._value.x;
                }
            }
            this.callUpdateCallback();
        };
        GTweener.prototype.callStartCallback = function () {
            if (this._onStart != null) {
                try {
                    this._onStart.call(this._onStartCaller, this);
                }
                catch (err) {
                    console.warn("FairyGUI: error in start callback > " + err);
                }
            }
        };
        GTweener.prototype.callUpdateCallback = function () {
            if (this._onUpdate != null) {
                try {
                    this._onUpdate.call(this._onUpdateCaller, this);
                }
                catch (err) {
                    console.warn("FairyGUI: error in update callback > " + err);
                }
            }
        };
        GTweener.prototype.callCompleteCallback = function () {
            if (this._onComplete != null) {
                try {
                    this._onComplete.call(this._onCompleteCaller, this);
                }
                catch (err) {
                    console.warn("FairyGUI: error in complete callback > " + err);
                }
            }
        };
        GTweener.helperPoint = new PIXI.Point();
        return GTweener;
    }());
    fgui.GTweener = GTweener;
})(fgui || (fgui = {}));

(function (fgui) {
    var TweenManager = /** @class */ (function () {
        function TweenManager() {
        }
        TweenManager.createTween = function () {
            if (!TweenManager._inited) {
                TweenManager._ticker.add(TweenManager.update, this, PIXI.UPDATE_PRIORITY.NORMAL);
                TweenManager._ticker.autoStart = true;
                TweenManager._inited = true;
                TweenManager._lastTime = Date.now();
            }
            var tweener;
            var cnt = TweenManager._tweenerPool.length;
            if (cnt > 0) {
                tweener = TweenManager._tweenerPool.pop();
            }
            else
                tweener = new fgui.GTweener();
            tweener._init();
            TweenManager._activeTweens[TweenManager._totalActiveTweens++] = tweener;
            if (TweenManager._totalActiveTweens == TweenManager._activeTweens.length)
                TweenManager._activeTweens.length = TweenManager._activeTweens.length + Math.ceil(TweenManager._activeTweens.length * 0.5);
            return tweener;
        };
        TweenManager.isTweening = function (target, propType) {
            if (target == null)
                return false;
            var anyType = propType == null || propType == undefined;
            for (var i = 0; i < TweenManager._totalActiveTweens; i++) {
                var tweener = TweenManager._activeTweens[i];
                if (tweener != null && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType))
                    return true;
            }
            return false;
        };
        TweenManager.killTweens = function (target, completed, propType) {
            if (target == null)
                return false;
            var flag = false;
            var cnt = TweenManager._totalActiveTweens;
            var anyType = propType == null || propType == undefined;
            for (var i = 0; i < cnt; i++) {
                var tweener = TweenManager._activeTweens[i];
                if (tweener != null && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType)) {
                    tweener.kill(completed);
                    flag = true;
                }
            }
            return flag;
        };
        TweenManager.getTween = function (target, propType) {
            if (target == null)
                return null;
            var cnt = TweenManager._totalActiveTweens;
            var anyType = propType == null || propType == undefined;
            for (var i = 0; i < cnt; i++) {
                var tweener = TweenManager._activeTweens[i];
                if (tweener != null && tweener.target == target && !tweener._killed
                    && (anyType || tweener._propType == propType)) {
                    return tweener;
                }
            }
            return null;
        };
        TweenManager.update = function () {
            //var dt: number = timestamp - TweenManager._lastTime;
            var dt = TweenManager._ticker.deltaTime / PIXI.settings.TARGET_FPMS;
            TweenManager._lastTime += dt;
            dt /= 1000;
            var cnt = TweenManager._totalActiveTweens;
            var freePosStart = -1;
            var freePosCount = 0;
            for (var i = 0; i < cnt; i++) {
                var tweener = TweenManager._activeTweens[i];
                if (tweener == null) {
                    if (freePosStart == -1)
                        freePosStart = i;
                    freePosCount++;
                }
                else if (tweener._killed) {
                    tweener._reset();
                    TweenManager._tweenerPool.push(tweener);
                    TweenManager._activeTweens[i] = null;
                    if (freePosStart == -1)
                        freePosStart = i;
                    freePosCount++;
                }
                else {
                    if ((tweener._target instanceof fgui.GObject) && (tweener._target).isDisposed)
                        tweener._killed = true;
                    else if (!tweener._paused)
                        tweener._update(dt);
                    if (freePosStart != -1) {
                        TweenManager._activeTweens[freePosStart] = tweener;
                        TweenManager._activeTweens[i] = null;
                        freePosStart++;
                    }
                }
            }
            if (freePosStart >= 0) {
                if (TweenManager._totalActiveTweens != cnt) //new tweens added
                 {
                    var j = cnt;
                    cnt = TweenManager._totalActiveTweens - cnt;
                    for (i = 0; i < cnt; i++)
                        TweenManager._activeTweens[freePosStart++] = TweenManager._activeTweens[j++];
                }
                TweenManager._totalActiveTweens = freePosStart;
            }
            return false;
        };
        TweenManager._activeTweens = new Array(30);
        TweenManager._tweenerPool = new Array();
        TweenManager._totalActiveTweens = 0;
        TweenManager._lastTime = 0;
        TweenManager._inited = false;
        return TweenManager;
    }());
    fgui.TweenManager = TweenManager;
})(fgui || (fgui = {}));

(function (fgui) {
    var TweenValue = /** @class */ (function () {
        function TweenValue() {
            this.x = this.y = this.z = this.w = 0;
        }
        Object.defineProperty(TweenValue.prototype, "color", {
            get: function () {
                return (this.w << 24) + (this.x << 16) + (this.y << 8) + this.z;
            },
            set: function (value) {
                this.x = (value & 0xFF0000) >> 16;
                this.y = (value & 0x00FF00) >> 8;
                this.z = (value & 0x0000FF);
                this.w = (value & 0xFF000000) >> 24;
            },
            enumerable: true,
            configurable: true
        });
        TweenValue.prototype.getField = function (index) {
            switch (index) {
                case 0:
                    return this.x;
                case 1:
                    return this.y;
                case 2:
                    return this.z;
                case 3:
                    return this.w;
                default:
                    throw new Error("Index out of bounds: " + index);
            }
        };
        TweenValue.prototype.setField = function (index, value) {
            switch (index) {
                case 0:
                    this.x = value;
                    break;
                case 1:
                    this.y = value;
                    break;
                case 2:
                    this.z = value;
                    break;
                case 3:
                    this.w = value;
                    break;
                default:
                    throw new Error("Index out of bounds: " + index);
            }
        };
        TweenValue.prototype.setZero = function () {
            this.x = this.y = this.z = this.w = 0;
        };
        return TweenValue;
    }());
    fgui.TweenValue = TweenValue;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        /**
         * 资源管理。
         * 目前的资源条目命名规则：文件名无后缀
         *
         */
        var AssetManager = /** @class */ (function () {
            function AssetManager() {
                var _a;
                /** @hide 资源组 */
                this._assetGroup = (_a = {},
                    _a[AssetManager.DEFAULT_GROUP] = {},
                    _a);
            }
            Object.defineProperty(AssetManager, "inst", {
                /**
                 * 单例
                 */
                get: function () {
                    if (!AssetManager._inst) {
                        AssetManager._inst = new AssetManager();
                    }
                    return AssetManager._inst;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetManager.prototype, "assetGroup", {
                /** 获取资源管理 */
                get: function () {
                    return this._assetGroup;
                },
                enumerable: true,
                configurable: true
            });
            /**
             * 获取资源组
             * @param groupName 组名称，默认为 "default"
             * @return 返回组对应的资源
             */
            AssetManager.prototype.get = function (groupName) {
                if (groupName === void 0) { groupName = AssetManager.DEFAULT_GROUP; }
                return this._assetGroup[groupName];
            };
            /**
             * 设置资源组
             * @param groupName 资源组名称
             * @param assetDic 资源组
             * @return this
             */
            AssetManager.prototype.set = function (groupName, assetDic) {
                if (!groupName) {
                    throw new Error("groupName could not empty");
                }
                this.assetGroup[groupName] = assetDic;
                return this;
            };
            /**
             * 添加资源
             * @param groupName 组名，如果已经存在组名，已经存在的将会被覆盖
             * @param assets 资源组
             * @return this
             */
            AssetManager.prototype.add = function (groupName, assetDic) {
                this.assetGroup[groupName] = assetDic;
                return this;
            };
            /**
             * 将资源组从资源管理对象中移除，改操作不释放资源
             * @param groupName 资源组名，默认为 "default"
             * @return this
             */
            AssetManager.prototype.remove = function (groupName) {
                if (groupName === void 0) { groupName = AssetManager.DEFAULT_GROUP; }
                this.assetGroup[groupName] = null;
                delete this.assetGroup[groupName];
                return this;
            };
            /**
             * 销毁资源组中的资源
             * @param groupName 资源组，默认为 "default"
             * @return this
             */
            AssetManager.prototype.destroyAsset = function (groupName) {
                if (groupName === void 0) { groupName = AssetManager.DEFAULT_GROUP; }
                var assetsDic = this.assetGroup[groupName];
                if (!assetsDic) {
                    return;
                }
                for (var key in assetsDic) {
                    this.destroyResource(assetsDic, key);
                }
                this.assetGroup[groupName] = null;
                delete this.assetGroup[groupName];
                return this;
            };
            /**
             * 销毁一个资源
             * @param assetDic 资源所在资源组
             * @param key 资源名称
             */
            AssetManager.prototype.destroyResource = function (assetDic, key) {
                var res = assetDic[key];
                if (!res) {
                    return;
                }
                if (!res.isComplete) {
                    res.abort();
                }
                res.children = null;
                res.data = null;
                res.texture && res.texture.destroy();
                if (res.textures) {
                    for (var tkey in res.textures) {
                        var texture = res.textures[tkey];
                        texture && texture.destroy();
                        res.textures[tkey] = undefined;
                        delete res.textures[tkey];
                    }
                }
                res.textures = null;
                res.xhr = null;
                assetDic[key] = null;
                delete assetDic[key];
            };
            /** @hide 默认资源组名称 */
            AssetManager.DEFAULT_GROUP = "default";
            return AssetManager;
        }());
        utils.AssetManager = AssetManager;
        /**
         * PIXI 资源加载封装
         * 5.x PIXI版本使用加载器 ：https://github.com/englercj/resource-loader
         */
        var AssetLoader = /** @class */ (function (_super) {
            __extends(AssetLoader, _super);
            /**
             * 构造函数
             * @param gourpName 资源组名，默认为 utils.AssetManager.DEFAULT_GROUP
             * @param addToAssetManager 是否自动加载到 AssetManager 资源管理器中, 默认为 true
             * @param baseUrl baseUrl
             * @param concurrency 并行数量
             */
            function AssetLoader(gourpName, addToAssetManager, baseUrl, concurrency) {
                if (gourpName === void 0) { gourpName = AssetManager.DEFAULT_GROUP; }
                if (addToAssetManager === void 0) { addToAssetManager = true; }
                var _this = _super.call(this, baseUrl, concurrency) || this;
                _this._groupName = gourpName;
                _this._autoAddToAssetManager = addToAssetManager;
                if (_this._autoAddToAssetManager) {
                    _this.__listenOnceLoadComplete();
                }
                return _this;
            }
            Object.defineProperty(AssetLoader.prototype, "groupName", {
                /** 获取资源组名称 */
                get: function () {
                    return this._groupName;
                },
                /** 设置资源组名称，如果设置为null,将会重新设置为 AssetManager.DEFAULT_GROUP */
                set: function (val) {
                    if (typeof (val) !== "string") {
                        this._groupName = AssetManager.DEFAULT_GROUP;
                    }
                    else {
                        this._groupName = val;
                    }
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "autoAddToAssetManager", {
                get: function () {
                    return this._autoAddToAssetManager;
                },
                set: function (val) {
                    if (val === this._autoAddToAssetManager) {
                        return;
                    }
                    this._autoAddToAssetManager = val;
                    if (val) {
                        this.__listenOnceLoadComplete();
                    }
                },
                enumerable: true,
                configurable: true
            });
            AssetLoader.prototype.__listenOnceLoadComplete = function () {
                this.completeSignal.once(function () {
                    AssetManager.inst.add(this._groupName, this.resources);
                }, this);
            };
            Object.defineProperty(AssetLoader.prototype, "completeSignal", {
                /** this.onComplete 封装 */
                get: function () {
                    return this.onComplete;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "errorSignal", {
                /** this.onError 封装 */
                get: function () {
                    return this.onError;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "loadSignal", {
                /** this.onLoad 封装 */
                get: function () {
                    return this.onLoad;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "startSignal", {
                /** this.onStart 封装 */
                get: function () {
                    return this.onStart;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(AssetLoader.prototype, "progressSignal", {
                /** this.onProgress 封装 */
                get: function () {
                    return this.onProgress;
                },
                enumerable: true,
                configurable: true
            });
            AssetLoader.prototype.easyAdd = function () {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return this.add.apply(this, args);
            };
            /**
             * 批量添加，等同于 this.add(name: string, url: string)
             * @param list 资源信息条目列表
             * @return this
             */
            AssetLoader.prototype.addGroup = function (list) {
                for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                    var item = list_1[_i];
                    this.easyAdd(item.name, item.path);
                }
                return this;
            };
            /**
             * 异步加载
             * @return {PIXI.IResourceDictionary} 成功
             * @return {Error} 失败
             */
            AssetLoader.prototype.loadAsync = function () {
                var _this = this;
                return new Promise(function (resolve) {
                    _this.completeSignal.once(function () {
                        if (this._autoAddToAssetManager) {
                            AssetManager.inst.add(this._groupName, this.resources);
                        }
                        resolve(this.resources);
                    }, _this);
                    _this.errorSignal.once(function (errMessage, loader, resource) {
                        resolve(new Error(errMessage));
                    }, _this);
                    _this.load();
                });
            };
            return AssetLoader;
        }(PIXI.Loader));
        utils.AssetLoader = AssetLoader;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var AsyncOperation = /** @class */ (function () {
        function AsyncOperation() {
            this._itemList = new Array();
            this._objectPool = new Array();
        }
        AsyncOperation.prototype.createObject = function (pkgName, resName) {
            var pkg = fgui.UIPackage.getByName(pkgName);
            if (pkg) {
                var pi = pkg.getItemByName(resName);
                if (!pi)
                    throw new Error("resource not found: " + resName);
                this.internalCreateObject(pi);
            }
            else
                throw new Error("package not found: " + pkgName);
        };
        AsyncOperation.prototype.createObjectFromURL = function (url) {
            var pi = fgui.UIPackage.getItemByURL(url);
            if (pi)
                this.internalCreateObject(pi);
            else
                throw new Error("resource not found: " + url);
        };
        AsyncOperation.prototype.cancel = function () {
            fgui.GTimer.inst.remove(this.run, this);
            this._itemList.length = 0;
            var cnt = this._objectPool.length;
            if (cnt > 0) {
                for (var i = 0; i < cnt; i++)
                    this._objectPool[i].dispose();
                this._objectPool.length = 0;
            }
        };
        AsyncOperation.prototype.internalCreateObject = function (item) {
            this._itemList.length = 0;
            this._objectPool.length = 0;
            var di = new DisplayListItem(item, 0);
            di.childCount = this.collectComponentChildren(item);
            this._itemList.push(di);
            this._index = 0;
            fgui.GTimer.inst.add(1, 0, this.run, this);
        };
        AsyncOperation.prototype.collectComponentChildren = function (item) {
            var buffer = item.rawData;
            buffer.seek(0, 2);
            var di;
            var pi;
            var i;
            var dataLen;
            var curPos;
            var pkg;
            var dcnt = buffer.readShort();
            for (i = 0; i < dcnt; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.position;
                buffer.seek(curPos, 0);
                var type = buffer.readByte();
                var src = buffer.readS();
                var pkgId = buffer.readS();
                buffer.position = curPos;
                if (src != null) {
                    if (pkgId != null)
                        pkg = fgui.UIPackage.getById(pkgId);
                    else
                        pkg = item.owner;
                    pi = pkg != null ? pkg.getItemById(src) : null;
                    di = new DisplayListItem(pi, type);
                    if (pi != null && pi.type == fgui.PackageItemType.Component)
                        di.childCount = this.collectComponentChildren(pi);
                }
                else {
                    di = new DisplayListItem(null, type);
                    if (type == fgui.ObjectType.List) //list
                        di.listItemCount = this.collectListChildren(buffer);
                }
                this._itemList.push(di);
                buffer.position = curPos + dataLen;
            }
            return dcnt;
        };
        AsyncOperation.prototype.collectListChildren = function (buffer) {
            buffer.seek(buffer.position, 8);
            var listItemCount = 0;
            var i;
            var nextPos;
            var url;
            var pi;
            var di;
            var defaultItem = buffer.readS();
            var itemCount = buffer.readShort();
            for (i = 0; i < itemCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;
                url = buffer.readS();
                if (url == null)
                    url = defaultItem;
                if (url) {
                    pi = fgui.UIPackage.getItemByURL(url);
                    if (pi != null) {
                        di = new DisplayListItem(pi, pi.objectType);
                        if (pi.type == fgui.PackageItemType.Component)
                            di.childCount = this.collectComponentChildren(pi);
                        this._itemList.push(di);
                        listItemCount++;
                    }
                }
                buffer.position = nextPos;
            }
            return listItemCount;
        };
        AsyncOperation.prototype.run = function () {
            var obj;
            var di;
            var poolStart;
            var k;
            var t = PIXI.Ticker.system.elapsedMS;
            var frameTime = fgui.UIConfig.frameTimeForAsyncUIConstruction;
            var totalItems = this._itemList.length;
            while (this._index < totalItems) {
                di = this._itemList[this._index];
                if (di.packageItem != null) {
                    obj = fgui.UIObjectFactory.newObject(di.packageItem);
                    this._objectPool.push(obj);
                    fgui.UIPackage._constructing++;
                    if (di.packageItem.type == fgui.PackageItemType.Component) {
                        poolStart = this._objectPool.length - di.childCount - 1;
                        obj.constructFromResource2(this._objectPool, poolStart);
                        this._objectPool.splice(poolStart, di.childCount);
                    }
                    else {
                        obj.constructFromResource();
                    }
                    fgui.UIPackage._constructing--;
                }
                else {
                    obj = fgui.UIObjectFactory.newObject2(di.type);
                    this._objectPool.push(obj);
                    if (di.type == fgui.ObjectType.List && di.listItemCount > 0) {
                        poolStart = this._objectPool.length - di.listItemCount - 1;
                        //把他们都放到pool里，这样GList在创建时就不需要创建对象了
                        for (k = 0; k < di.listItemCount; k++) {
                            obj.itemPool.returnObject(this._objectPool[k + poolStart]);
                        }
                        this._objectPool.splice(poolStart, di.listItemCount);
                    }
                }
                this._index++;
                if ((this._index % 5 == 0) && PIXI.Ticker.system.elapsedMS - t >= frameTime)
                    return;
            }
            fgui.GTimer.inst.remove(this.run, this);
            var result = this._objectPool[0];
            this._itemList.length = 0;
            this._objectPool.length = 0;
            if (this.callback != null)
                this.callback.call(this.callbackObj, result);
        };
        return AsyncOperation;
    }());
    fgui.AsyncOperation = AsyncOperation;
    var DisplayListItem = /** @class */ (function () {
        function DisplayListItem(packageItem, type) {
            this.packageItem = packageItem;
            this.type = type;
        }
        return DisplayListItem;
    }());
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var Binder = /** @class */ (function () {
            function Binder() {
            }
            Binder.create = function (func, context) {
                var args = [];
                for (var _i = 2; _i < arguments.length; _i++) {
                    args[_i - 2] = arguments[_i];
                }
                if (!context)
                    return func;
                return (function () {
                    var fullargs = arguments.length > 0 ? [].concat(Array.prototype.slice.call(arguments)).concat(args) : [].concat(args);
                    func.apply(context, fullargs);
                });
            };
            return Binder;
        }());
        utils.Binder = Binder;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    /**
     * ByteBuffer,目前只实现了读的部分
     * @todo
     * 写部分
     */
    var ByteBuffer = /** @class */ (function () {
        function ByteBuffer(buffer) {
            this.endian = ByteBuffer.BIG_ENDIAN;
            this.stringTable = null;
            this.version = 0;
            this._position = 0;
            this._buffer = buffer;
            this._uint8Array = new Uint8Array(buffer);
        }
        Object.defineProperty(ByteBuffer.prototype, "buffer", {
            get: function () {
                return this._buffer;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteBuffer.prototype, "position", {
            get: function () {
                return this._position;
            },
            set: function (pos) {
                this._position = pos;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(ByteBuffer.prototype, "length", {
            get: function () {
                return this._uint8Array.byteLength;
            },
            enumerable: true,
            configurable: true
        });
        ByteBuffer.prototype.__checkEOF = function (bytes) {
            if (bytes === void 0) { bytes = 1; }
            if (this._position + bytes > this._uint8Array.byteLength) {
                throw ("END OF BUFFER, length=" + this._uint8Array.byteLength + " position=" + (this._position + bytes));
            }
        };
        ByteBuffer.prototype.skip = function (count) {
            this.position += count;
        };
        //////////////////////////////////
        ByteBuffer.prototype.readUInt8 = function () {
            this.__checkEOF();
            var value = this._uint8Array[this._position];
            this._position++;
            return value;
        };
        ByteBuffer.prototype.readUInt16LE = function () {
            this.__checkEOF(2);
            var a = this._uint8Array;
            var offset = this._position;
            var value = a[offset] | (a[offset + 1] << 8);
            this._position += 2;
            return value;
        };
        ByteBuffer.prototype.readUInt16BE = function () {
            this.__checkEOF(2);
            var a = this._uint8Array;
            var offset = this._position;
            var value = (a[offset] << 8) | a[offset + 1];
            this._position += 2;
            return value;
        };
        ByteBuffer.prototype.readUInt32LE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = ((a[offset]) |
                (a[offset + 1] << 8) |
                (a[offset + 2] << 16)) +
                (a[offset + 3] * 0x1000000);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readUInt32BE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = (a[offset] * 0x1000000) +
                ((a[offset + 1] << 16) |
                    (a[offset + 2] << 8) |
                    a[offset + 3]);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readInt8 = function () {
            this.__checkEOF();
            var a = this._uint8Array;
            var offset = this._position;
            var value;
            if (!(a[offset] & 0x80)) {
                value = a[offset];
            }
            else {
                value = ((0xff - a[offset] + 1) * -1);
            }
            this._position++;
            return value;
        };
        ByteBuffer.prototype.readInt16LE = function () {
            this.__checkEOF(2);
            var a = this._uint8Array;
            var offset = this._position;
            var value = a[offset] | (a[offset + 1] << 8);
            this._position += 2;
            return (value & 0x8000) ? value | 0xFFFF0000 : value;
        };
        ByteBuffer.prototype.readInt16BE = function () {
            this.__checkEOF(2);
            var a = this._uint8Array;
            var offset = this._position;
            var val = a[offset + 1] | (a[offset] << 8);
            this._position += 2;
            return (val & 0x8000) ? val | 0xFFFF0000 : val;
        };
        ByteBuffer.prototype.readInt32LE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = (a[offset]) |
                (a[offset + 1] << 8) |
                (a[offset + 2] << 16) |
                (a[offset + 3] << 24);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readInt32BE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = (a[offset] << 24) |
                (a[offset + 1] << 16) |
                (a[offset + 2] << 8) |
                (a[offset + 3]);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readFloatLE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = fgui.the3rd.ieee754.read(a, offset, true, 23, 4);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readFloatBE = function () {
            this.__checkEOF(4);
            var a = this._uint8Array;
            var offset = this._position;
            var value = fgui.the3rd.ieee754.read(a, offset, false, 23, 4);
            this._position += 4;
            return value;
        };
        ByteBuffer.prototype.readDoubleLE = function () {
            this.__checkEOF(8);
            var a = this._uint8Array;
            var offset = this._position;
            var value = fgui.the3rd.ieee754.read(a, offset, true, 52, 8);
            this._position += 8;
            return value;
        };
        ByteBuffer.prototype.readDoubleBE = function () {
            this.__checkEOF(8);
            var a = this._uint8Array;
            var offset = this._position;
            var value = fgui.the3rd.ieee754.read(a, offset, false, 52, 8);
            this._position += 8;
            return value;
        };
        ///////////////////////////////
        ByteBuffer.prototype.readBool = function () {
            return this.readByte() == 1;
        };
        ByteBuffer.prototype.readUnsignedShort = function () {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readUInt16BE();
            }
            return this.readUInt16LE();
        };
        ByteBuffer.prototype.readByte = function () {
            return this.readInt8();
        };
        ByteBuffer.prototype.readUnsignedByte = function () {
            return this.readUInt8();
        };
        ByteBuffer.prototype.readUnsignedInt = function () {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readUInt32BE();
            }
            return this.readUInt32LE();
        };
        ByteBuffer.prototype.readInt = function () {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readInt32BE();
            }
            return this.readInt32LE();
        };
        ByteBuffer.prototype.readShort = function () {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readInt16BE();
            }
            return this.readInt16LE();
        };
        ByteBuffer.prototype.readFloat = function () {
            if (this.endian == ByteBuffer.BIG_ENDIAN) {
                return this.readFloatBE();
            }
            return this.readFloatLE();
        };
        ByteBuffer.prototype.decodeCodePointsArray = function (codePoints) {
            var len = codePoints.length;
            if (len <= ByteBuffer.MAX_ARGUMENTS_LENGTH) {
                return String.fromCharCode.apply(String, codePoints); // avoid extra slice()
            }
            // Decode in chunks to avoid "call stack size exceeded".
            var res = '';
            var i = 0;
            while (i < len) {
                res += String.fromCharCode.apply(String, codePoints.slice(i, i += ByteBuffer.MAX_ARGUMENTS_LENGTH));
            }
            return res;
        };
        /**
         * 读取 UTF8 字符串. 假定字符串的前缀是无符号的短整型(Uint16)（以字节表示长度）
         * @note 非通用接口， 字符串格式必须在 255 个字符之内，并且以0结尾.
         */
        ByteBuffer.prototype.readUTF = function () {
            var buf = this._uint8Array;
            var length = this.readUInt16BE();
            var start = this._position;
            var end = this._position + length;
            var res = [];
            var i = start;
            while (i < end) {
                var firstByte = buf[i];
                var codePoint = null;
                var bytesPerSequence = (firstByte > 0xEF) ? 4 : (firstByte > 0xDF) ? 3 : (firstByte > 0xBF) ? 2 : 1;
                if (i + bytesPerSequence <= end) {
                    var secondByte = void 0, thirdByte = void 0, fourthByte = void 0, tempCodePoint = void 0;
                    switch (bytesPerSequence) {
                        case 1:
                            if (firstByte < 0x80) {
                                codePoint = firstByte;
                            }
                            break;
                        case 2:
                            secondByte = buf[i + 1];
                            if ((secondByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F);
                                if (tempCodePoint > 0x7F) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;
                        case 3:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F);
                                if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
                                    codePoint = tempCodePoint;
                                }
                            }
                            break;
                        case 4:
                            secondByte = buf[i + 1];
                            thirdByte = buf[i + 2];
                            fourthByte = buf[i + 3];
                            if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
                                tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F);
                                if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
                                    codePoint = tempCodePoint;
                                }
                            }
                    }
                }
                if (codePoint === null) {
                    // we did not generate a valid codePoint so insert a
                    // replacement char (U+FFFD) and advance only 1 byte
                    codePoint = 0xFFFD;
                    bytesPerSequence = 1;
                }
                else if (codePoint > 0xFFFF) {
                    // encode to utf16 (surrogate pair dance)
                    codePoint -= 0x10000;
                    res.push(codePoint >>> 10 & 0x3FF | 0xD800);
                    codePoint = 0xDC00 | codePoint & 0x3FF;
                }
                res.push(codePoint);
                i += bytesPerSequence;
            }
            this._position = end;
            return this.decodeCodePointsArray(res);
        };
        ByteBuffer.prototype.readS = function () {
            var index = this.readUnsignedShort();
            if (index == 65534) //null
                return null;
            else if (index == 65533)
                return "";
            else
                return this.stringTable[index];
        };
        ByteBuffer.prototype.readSArray = function (cnt) {
            var ret = new Array(cnt);
            for (var i = 0; i < cnt; i++)
                ret[i] = this.readS();
            return ret;
        };
        ByteBuffer.prototype.writeS = function (value) {
            var index = this.readUnsignedShort();
            if (index != 65534 && index != 65533)
                this.stringTable[index] = value;
        };
        ByteBuffer.prototype.readColor = function (hasAlpha) {
            if (hasAlpha === void 0) { hasAlpha = false; }
            var r = this.readUnsignedByte();
            var g = this.readUnsignedByte();
            var b = this.readUnsignedByte();
            var a = this.readUnsignedByte();
            return (hasAlpha ? (a << 24) : 0) + (r << 16) + (g << 8) + b;
        };
        ByteBuffer.prototype.readChar = function () {
            var i = this.readUnsignedShort();
            return String.fromCharCode(i);
        };
        ByteBuffer.prototype.readBuffer = function () {
            var count = this.readUnsignedInt();
            var ba = new ByteBuffer(new Uint8Array(this.buffer, this.position, count));
            ba.stringTable = this.stringTable;
            ba.version = this.version;
            this.position += count;
            return ba;
        };
        ByteBuffer.prototype.seek = function (indexTablePos, blockIndex) {
            var tmp = this.position;
            this.position = indexTablePos;
            var segCount = this.readByte();
            if (blockIndex < segCount) {
                var useShort = this.readByte() == 1;
                var newPos;
                if (useShort) {
                    this.position += 2 * blockIndex;
                    newPos = this.readUnsignedShort();
                }
                else {
                    this.position += 4 * blockIndex;
                    newPos = this.readUnsignedInt();
                }
                if (newPos > 0) {
                    this.position = indexTablePos + newPos;
                    return true;
                }
                else {
                    this.position = tmp;
                    return false;
                }
            }
            else {
                this.position = tmp;
                return false;
            }
        };
        ByteBuffer.BIG_ENDIAN = "big";
        ByteBuffer.LITTLE_ENDIAN = "little";
        // Based on http://stackoverflow.com/a/22747272/680742, the browser with
        // the lowest limit is Chrome, with 0x10000 args.
        // We go 1 magnitude less, for safety
        ByteBuffer.MAX_ARGUMENTS_LENGTH = 0x1000;
        return ByteBuffer;
    }());
    fgui.ByteBuffer = ByteBuffer;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        /*
        * ColorMatrix
        * Visit http://createjs.com/ for documentation, updates and examples.
        *
        * Copyright (c) 2010 gskinner.com, inc.
        *
        * Permission is hereby granted, free of charge, to any person
        * obtaining a copy of this software and associated documentation
        * files (the "Software"), to deal in the Software without
        * restriction, including without limitation the rights to use,
        * copy, modify, merge, publish, distribute, sublicense, and/or sell
        * copies of the Software, and to permit persons to whom the
        * Software is furnished to do so, subject to the following
        * conditions:
        *
        * The above copyright notice and this permission notice shall be
        * included in all copies or substantial portions of the Software.
        *
        * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
        * EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
        * OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
        * NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
        * HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
        * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
        * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        * OTHER DEALINGS IN THE SOFTWARE.
        */
        var ColorMatrix = /** @class */ (function () {
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
            function ColorMatrix(brightness, contrast, saturation, hue) {
                if (brightness === void 0) { brightness = 0; }
                if (contrast === void 0) { contrast = 0; }
                if (saturation === void 0) { saturation = 0; }
                if (hue === void 0) { hue = 0; }
                /** @internal */
                this._raw = [];
                this.h = 0;
                this.s = 0;
                this.c = 0;
                this.b = 0;
                this.setColor(brightness, contrast, saturation, hue);
            }
            Object.defineProperty(ColorMatrix.prototype, "hue", {
                get: function () { return this.h; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ColorMatrix.prototype, "brightness", {
                get: function () { return this.b; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ColorMatrix.prototype, "contrast", {
                get: function () { return this.c; },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(ColorMatrix.prototype, "saturation", {
                get: function () { return this.s; },
                enumerable: true,
                configurable: true
            });
            ColorMatrix.getMatrix = function (p_brightness, p_contrast, p_saturation, p_hue, result) {
                if (!result)
                    result = new Array(ColorMatrix.length);
                var mat = new ColorMatrix(p_brightness, p_contrast, p_saturation, p_hue);
                var l = ColorMatrix.LENGTH;
                if (result && result.length >= l) {
                    for (var i = 0; i < l; i++) {
                        result[i] = mat._raw[i];
                    }
                }
                else {
                    result = mat._raw;
                }
                return result;
            };
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
            ColorMatrix.prototype.setColor = function (brightness, contrast, saturation, hue) {
                return this.reset().adjustColor(brightness, contrast, saturation, hue);
            };
            ;
            /**
             * Resets the matrix to identity values.
             * @method reset
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             */
            ColorMatrix.prototype.reset = function () {
                return this.copy(ColorMatrix.IDENTITY_MATRIX);
            };
            ;
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
            ColorMatrix.prototype.adjustColor = function (brightness, contrast, saturation, hue) {
                this.adjustHue(hue);
                this.adjustContrast(contrast);
                this.adjustBrightness(brightness);
                return this.adjustSaturation(saturation);
            };
            ;
            /**
             * Adjusts the brightness of pixel color by adding the specified value to the red, green and blue channels.
             * Positive values will make the image brighter, negative values will make it darker.
             * @method adjustBrightness
             * @param {Number} value A value between -255 & 255 that will be added to the RGB channels.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.adjustBrightness = function (value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.b = value;
                value = this._cleanValue(value, 255);
                this._multiplyMatrix([
                    1, 0, 0, 0, value,
                    0, 1, 0, 0, value,
                    0, 0, 1, 0, value,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            };
            ;
            /**
             * Adjusts the contrast of pixel color.
             * Positive values will increase contrast, negative values will decrease contrast.
             * @method adjustContrast
             * @param {Number} value A value between -100 & 100.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.adjustContrast = function (value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.c = value;
                value = this._cleanValue(value, 100);
                var x;
                var cst = 1; //127
                if (value < 0) {
                    x = cst + value / 100 * cst;
                }
                else {
                    x = value % 1;
                    if (x == 0) {
                        x = ColorMatrix.DELTA_INDEX[value];
                    }
                    else {
                        x = ColorMatrix.DELTA_INDEX[(value << 0)] * (1 - x) + ColorMatrix.DELTA_INDEX[(value << 0) + 1] * x; // use linear interpolation for more granularity.
                    }
                    x = x * cst + cst;
                }
                this._multiplyMatrix([
                    x / cst, 0, 0, 0, 0.5 * (cst - x),
                    0, x / cst, 0, 0, 0.5 * (cst - x),
                    0, 0, x / cst, 0, 0.5 * (cst - x),
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            };
            ;
            /**
             * Adjusts the color saturation of the pixel.
             * Positive values will increase saturation, negative values will decrease saturation (trend towards greyscale).
             * @method adjustSaturation
             * @param {Number} value A value between -100 & 100.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.adjustSaturation = function (value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.s = value;
                value = this._cleanValue(value, 100);
                var x = 1 + ((value > 0) ? 3 * value / 100 : value / 100);
                var lumR = 0.3086;
                var lumG = 0.6094;
                var lumB = 0.0820;
                this._multiplyMatrix([
                    lumR * (1 - x) + x, lumG * (1 - x), lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x) + x, lumB * (1 - x), 0, 0,
                    lumR * (1 - x), lumG * (1 - x), lumB * (1 - x) + x, 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            };
            ;
            /**
             * Adjusts the hue of the pixel color.
             * @method adjustHue
             * @param {Number} value A value between -180 & 180.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.adjustHue = function (value) {
                if (value == 0 || isNaN(value)) {
                    return this;
                }
                this.h = value;
                value = this._cleanValue(value, 180) / 180 * Math.PI;
                var cosVal = Math.cos(value);
                var sinVal = Math.sin(value);
                var lumR = 0.213;
                var lumG = 0.715;
                var lumB = 0.072;
                this._multiplyMatrix([
                    lumR + cosVal * (1 - lumR) + sinVal * (-lumR), lumG + cosVal * (-lumG) + sinVal * (-lumG), lumB + cosVal * (-lumB) + sinVal * (1 - lumB), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (0.143), lumG + cosVal * (1 - lumG) + sinVal * (0.140), lumB + cosVal * (-lumB) + sinVal * (-0.283), 0, 0,
                    lumR + cosVal * (-lumR) + sinVal * (-(1 - lumR)), lumG + cosVal * (-lumG) + sinVal * (lumG), lumB + cosVal * (1 - lumB) + sinVal * (lumB), 0, 0,
                    0, 0, 0, 1, 0,
                    0, 0, 0, 0, 1
                ]);
                return this;
            };
            ;
            /**
             * Concatenates (multiplies) the specified matrix with this one.
             * @method concat
             * @param {Array} matrix An array or ColorMatrix instance.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.concat = function (matrix) {
                matrix = this._fixMatrix(matrix);
                if (matrix.length != ColorMatrix.LENGTH) {
                    return this;
                }
                this._multiplyMatrix(matrix);
                return this;
            };
            ;
            /**
             * Returns a clone of this ColorMatrix.
             * @method clone
             * @return {ColorMatrix} A clone of this ColorMatrix.
             **/
            ColorMatrix.prototype.clone = function () {
                return (new ColorMatrix()).copy(this._raw);
            };
            ;
            /**
             * Return a length 25 (5x5) array instance containing this matrix's values.
             * @method toArray
             * @return {Array} An array holding this matrix's values.
             **/
            ColorMatrix.prototype.toArray = function () {
                var arr = [];
                for (var i = 0, l = ColorMatrix.LENGTH; i < l; i++) {
                    arr[i] = this._raw[i];
                }
                return arr;
            };
            ;
            /**
             * Copy the specified matrix's values to this matrix.
             * @method copy
             * @param {Array} matrix An array or ColorMatrix instance.
             * @return {ColorMatrix} The ColorMatrix instance the method is called on (useful for chaining calls.)
             * @chainable
             **/
            ColorMatrix.prototype.copy = function (matrix) {
                var l = ColorMatrix.LENGTH;
                for (var i = 0; i < l; i++) {
                    this._raw[i] = matrix[i];
                }
                return this;
            };
            ;
            /**
             * @method _multiplyMatrix
             * @param {Array} matrix
             * @protected
             **/
            ColorMatrix.prototype._multiplyMatrix = function (matrix) {
                var i, j, k, col = [];
                for (i = 0; i < 5; i++) {
                    for (j = 0; j < 5; j++) {
                        col[j] = this._raw[j + i * 5];
                    }
                    for (j = 0; j < 5; j++) {
                        var val = 0;
                        for (k = 0; k < 5; k++) {
                            val += matrix[j + k * 5] * col[k];
                        }
                        this._raw[j + i * 5] = val;
                    }
                }
            };
            ;
            /**
             * Make sure values are within the specified range, hue has a limit of 180, brightness is 255, others are 100.
             * @method _cleanValue
             * @param {Number} value The raw number
             * @param {Number} limit The maximum that the number can be. The minimum is the limit * -1.
             * @protected
             **/
            ColorMatrix.prototype._cleanValue = function (value, limit) {
                return Math.min(limit, Math.max(-limit, value));
            };
            ;
            /**
             * Makes sure matrixes are 5x5 (25 long).
             * @method _fixMatrix
             * @param {Array} matrix
             * @protected
             **/
            ColorMatrix.prototype._fixMatrix = function (matrix) {
                if (matrix instanceof ColorMatrix) {
                    matrix = matrix.toArray();
                }
                if (matrix.length < ColorMatrix.LENGTH) {
                    matrix = matrix.slice(0, matrix.length).concat(ColorMatrix.IDENTITY_MATRIX.slice(matrix.length, ColorMatrix.LENGTH));
                }
                else if (matrix.length > ColorMatrix.LENGTH) {
                    matrix = matrix.slice(0, ColorMatrix.LENGTH);
                }
                return matrix;
            };
            /**
             * Array of delta values for contrast calculations.
             * @property DELTA_INDEX
             * @type Array
             * @protected
             * @static
             **/
            ColorMatrix.DELTA_INDEX = [
                0, 0.01, 0.02, 0.04, 0.05, 0.06, 0.07, 0.08, 0.1, 0.11,
                0.12, 0.14, 0.15, 0.16, 0.17, 0.18, 0.20, 0.21, 0.22, 0.24,
                0.25, 0.27, 0.28, 0.30, 0.32, 0.34, 0.36, 0.38, 0.40, 0.42,
                0.44, 0.46, 0.48, 0.5, 0.53, 0.56, 0.59, 0.62, 0.65, 0.68,
                0.71, 0.74, 0.77, 0.80, 0.83, 0.86, 0.89, 0.92, 0.95, 0.98,
                1.0, 1.06, 1.12, 1.18, 1.24, 1.30, 1.36, 1.42, 1.48, 1.54,
                1.60, 1.66, 1.72, 1.78, 1.84, 1.90, 1.96, 2.0, 2.12, 2.25,
                2.37, 2.50, 2.62, 2.75, 2.87, 3.0, 3.2, 3.4, 3.6, 3.8,
                4.0, 4.3, 4.7, 4.9, 5.0, 5.5, 6.0, 6.5, 6.8, 7.0,
                7.3, 7.5, 7.8, 8.0, 8.4, 8.7, 9.0, 9.4, 9.6, 9.8,
                10.0
            ];
            /**
             * Identity matrix values.
             * @property IDENTITY_MATRIX
             * @type Array
             * @protected
             * @static
             **/
            ColorMatrix.IDENTITY_MATRIX = [
                1, 0, 0, 0, 0,
                0, 1, 0, 0, 0,
                0, 0, 1, 0, 0,
                0, 0, 0, 1, 0,
                0, 0, 0, 0, 1
            ];
            /**
             * The constant length of a color matrix.
             * @property LENGTH
             * @type Number
             * @protected
             * @static
             **/
            ColorMatrix.LENGTH = ColorMatrix.IDENTITY_MATRIX.length;
            ColorMatrix.helper = new ColorMatrix();
            return ColorMatrix;
        }());
        utils.ColorMatrix = ColorMatrix;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));
/// <reference path="../GRoot.ts" />

/// <reference path="../GRoot.ts" />
(function (fgui) {
    var utils;
    (function (utils) {
        var DragIndicator = /** @class */ (function () {
            function DragIndicator() {
                this.$agent = new fgui.GLoader();
                this.$agent.draggable = true;
                this.$agent.touchable = false;
                this.$agent.setSize(100, 100);
                this.$agent.setPivot(0.5, 0.5, true);
                this.$agent.align = fgui.AlignType.Center;
                this.$agent.verticalAlign = fgui.VertAlignType.Middle;
                this.$agent.sortingOrder = 1000000; //top most
                this.$agent.on("__dragEnd" /* END */, this.$dragEnd, this);
            }
            Object.defineProperty(DragIndicator.prototype, "dragAgent", {
                get: function () {
                    return this.$agent;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DragIndicator.prototype, "isDragging", {
                get: function () {
                    return this.$agent.parent != null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DragIndicator.prototype, "sourceObject", {
                get: function () {
                    return this.$sourceObject;
                },
                enumerable: true,
                configurable: true
            });
            DragIndicator.prototype.startDrag = function (source, icon, sourceData, touchPointID) {
                if (touchPointID === void 0) { touchPointID = -1; }
                if (this.isDragging)
                    return;
                this.$sourceObject = source;
                this.$sourceData = sourceData;
                this.$agent.url = icon;
                fgui.GRoot.inst.addChild(this.$agent);
                var pt = fgui.GRoot.inst.globalToLocal(fgui.GRoot.globalMouseStatus.mouseX, fgui.GRoot.globalMouseStatus.mouseY);
                this.$agent.setXY(pt.x, pt.y);
                this.$agent.startDrag(touchPointID);
            };
            DragIndicator.prototype.cancel = function () {
                if (this.$agent.parent != null) {
                    this.$agent.stopDrag();
                    fgui.GRoot.inst.removeChild(this.$agent);
                    this.$sourceData = null;
                }
            };
            DragIndicator.prototype.$dragEnd = function (evt) {
                if (!this.isDragging)
                    return;
                fgui.GRoot.inst.removeChild(this.$agent);
                var sourceData = this.$sourceData;
                this.$sourceData = null;
                var obj = fgui.GRoot.inst.getObjectUnderPoint(evt.data.global.x, evt.data.global.y);
                while (obj != null) {
                    if (obj.listenerCount("__dragDrop" /* DROP */)) {
                        obj.requestFocus();
                        evt.currentTarget = obj.displayObject;
                        obj.emit("__dragDrop" /* DROP */, evt, sourceData);
                        return;
                    }
                    obj = obj.parent;
                }
            };
            return DragIndicator;
        }());
        utils.DragIndicator = DragIndicator;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var InputDelegate = /** @class */ (function () {
            function InputDelegate(tf) {
                this._inited = false;
                this._restrictString = null;
                this._restrictRegex = null;
                this._focused = false;
                this._textField = tf;
                this._input = new fgui.InputElement(tf);
            }
            InputDelegate.prototype.initialize = function () {
                if (this._inited)
                    return;
                this._input._addToStage();
                this._input.on("updateText", this.updateText, this);
                this._input.on("__focusChanged" /* CHANGED */, this.focusHandler, this);
                this._textField.on(fgui.InteractiveEvents.Down, this.textFieldDownHandler, this);
                this._inited = true;
            };
            InputDelegate.prototype.textFieldDownHandler = function () {
                this._onFocus();
            };
            InputDelegate.prototype.destroy = function () {
                if (!this._inited)
                    return;
                this._input._removeFromStage();
                this._textField.off(fgui.InteractiveEvents.Down, this.textFieldDownHandler, this);
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                this._input.off("updateText", this.updateText, this);
                this._input.off("__focusChanged" /* CHANGED */, this.focusHandler, this);
                this._inited = false;
            };
            Object.defineProperty(InputDelegate.prototype, "text", {
                get: function () {
                    return this._input.text;
                },
                set: function (v) {
                    this._input.text = v;
                },
                enumerable: true,
                configurable: true
            });
            InputDelegate.prototype.setColor = function (v) {
                return this._input.setColor(v);
            };
            InputDelegate.prototype.updateText = function () {
                var textValue = this._input.text;
                var isChanged = false;
                if (this._restrictRegex != null) {
                    var result = textValue.match(this._restrictRegex);
                    if (result)
                        textValue = result.join("");
                    else
                        textValue = "";
                    isChanged = true;
                }
                if (isChanged && this._input.text != textValue)
                    this._input.text = textValue;
                this._textField.text = this._input.text;
                this._textField.emit("__textChange" /* Change */, this._textField);
            };
            InputDelegate.prototype.onStageDown = function (e) {
                var target = fgui.GObject.cast(e.currentTarget);
                if (target != this._textField) {
                    this._input._hide();
                }
                this._input._show();
            };
            InputDelegate.prototype.focusHandler = function (type) {
                if (type == "focus") {
                    if (!this._focused) {
                        this._focused = true;
                        this._textField._isTyping = true;
                        this._textField.alpha = 1;
                        this._textField.emit("__focusChanged" /* CHANGED */, "focus", this._textField);
                        this._textField.emit("__textFocusIn" /* FocusIn */, this._textField);
                    }
                }
                else if (type == "blur") {
                    if (this._focused) {
                        this._focused = false;
                        fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                        this._textField._isTyping = false;
                        this._textField.alpha = 1;
                        this._input._onBlur();
                        this._textField.emit("__focusChanged" /* CHANGED */, "blur", this._textField);
                        this._textField.emit("__textFocusOut" /* FocusOut */, this._textField);
                    }
                }
            };
            Object.defineProperty(InputDelegate.prototype, "isFocused", {
                get: function () {
                    return this._focused;
                },
                enumerable: true,
                configurable: true
            });
            /**@internal */
            InputDelegate.prototype._getProperty = function (name) {
                return this._inited && this._input.getAttribute(name) || null;
            };
            /**@internal */
            InputDelegate.prototype._setProperty = function (name, value) {
                if (!this._inited)
                    return;
                this._input.setAttribute(name, value);
            };
            Object.defineProperty(InputDelegate.prototype, "_restrict", {
                get: function () {
                    return this._restrictString;
                },
                set: function (v) {
                    this._restrictString = v;
                    if (this._restrictString != null && this._restrictString.length > 0)
                        this._restrictRegex = new RegExp(this._restrictString);
                    else
                        this._restrictRegex = null;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(InputDelegate.prototype, "type", {
                get: function () {
                    return this._type;
                },
                set: function (v) {
                    if (v != this._type)
                        this._type = v;
                },
                enumerable: true,
                configurable: true
            });
            InputDelegate.prototype.tryHideInput = function () {
                if (!this._textField.visible && this._input)
                    this._input._removeFromStage();
            };
            /**@internal */
            InputDelegate.prototype._updateProperties = function () {
                if (this.isFocused) {
                    this._input.resetInput();
                    this.tryHideInput();
                    return;
                }
                this._input.text = this._textField.text;
                this._input.resetInput();
                this.tryHideInput();
            };
            /**@internal */
            InputDelegate.prototype._onFocus = function () {
                var _this = this;
                if (!this._textField.visible || this._focused) {
                    return;
                }
                fgui.GRoot.inst.off(fgui.InteractiveEvents.Down, this.onStageDown, this);
                fgui.GTimer.inst.callLater(function () {
                    fgui.GRoot.inst.on(fgui.InteractiveEvents.Down, _this.onStageDown, _this);
                }, this);
                this._input._show();
            };
            return InputDelegate;
        }());
        utils.InputDelegate = InputDelegate;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var Margin = /** @class */ (function () {
            function Margin() {
                this.left = 0;
                this.right = 0;
                this.top = 0;
                this.bottom = 0;
            }
            Margin.prototype.parse = function (str) {
                if (!str) {
                    this.left = this.right = this.top = this.bottom = 0;
                    return;
                }
                var arr = str.split(",");
                if (arr.length == 1) {
                    var k = parseInt(arr[0]);
                    this.left = this.right = this.top = this.bottom = k;
                }
                else {
                    this.top = parseInt(arr[0]);
                    this.bottom = parseInt(arr[1]);
                    this.left = parseInt(arr[2]);
                    this.right = parseInt(arr[3]);
                }
            };
            Margin.prototype.copy = function (source) {
                this.top = source.top;
                this.bottom = source.bottom;
                this.left = source.left;
                this.right = source.right;
            };
            return Margin;
        }());
        utils.Margin = Margin;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var NumberUtil = /** @class */ (function () {
            function NumberUtil() {
            }
            NumberUtil.clamp = function (value, min, max) {
                if (value < min)
                    value = min;
                else if (value > max)
                    value = max;
                return value;
            };
            NumberUtil.clamp01 = function (value) {
                if (value > 1)
                    value = 1;
                else if (value < 0)
                    value = 0;
                return value;
            };
            NumberUtil.isNumber = function (n) {
                if (typeof (n) != "number")
                    return false;
                if (isNaN(n))
                    return false;
                return true;
            };
            NumberUtil.sign = function (x) {
                x = Number(x);
                if (x === 0 || isNaN(x))
                    return x;
                return x > 0 ? 1 : -1;
            };
            NumberUtil.angleToRadian = function (n) {
                return n * NumberUtil.RADIAN;
            };
            NumberUtil.lerp = function (s, e, p) {
                return s + p * (e - s);
            };
            NumberUtil.RADIAN = Math.PI / 180;
            return NumberUtil;
        }());
        utils.NumberUtil = NumberUtil;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var PixelHitTest = /** @class */ (function () {
        function PixelHitTest(data, offsetX, offsetY) {
            if (offsetX === void 0) { offsetX = 0; }
            if (offsetY === void 0) { offsetY = 0; }
            this._data = data;
            this.offsetX = offsetX;
            this.offsetY = offsetY;
            this.scaleX = 1;
            this.scaleY = 1;
        }
        PixelHitTest.prototype.contains = function (x, y) {
            x = Math.floor((x / this.scaleX - this.offsetX) * this._data.scale);
            y = Math.floor((y / this.scaleY - this.offsetY) * this._data.scale);
            if (x < 0 || y < 0 || x >= this._data.pixelWidth)
                return false;
            var pos = y * this._data.pixelWidth + x;
            var pos2 = Math.floor(pos / 8);
            var pos3 = pos % 8;
            if (pos2 >= 0 && pos2 < this._data.pixels.length)
                return ((this._data.pixels[pos2] >> pos3) & 0x1) == 1;
            else
                return false;
        };
        return PixelHitTest;
    }());
    fgui.PixelHitTest = PixelHitTest;
    var PixelHitTestData = /** @class */ (function () {
        function PixelHitTestData() {
        }
        PixelHitTestData.prototype.load = function (ba) {
            ba.readInt();
            this.pixelWidth = ba.readInt();
            this.scale = 1 / ba.readByte();
            var len = ba.readInt();
            this.pixels = [];
            for (var i = 0; i < len; i++) {
                var j = ba.readByte();
                if (j < 0)
                    j += 256;
                this.pixels[i] = j;
            }
        };
        return PixelHitTestData;
    }());
    fgui.PixelHitTestData = PixelHitTestData;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var StringUtil = /** @class */ (function () {
            function StringUtil() {
            }
            StringUtil.encodeHTML = function (str) {
                if (!str)
                    return "";
                else
                    return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;");
            };
            StringUtil.getFileName = function (source) {
                var i = source.lastIndexOf("/");
                if (i != -1)
                    source = source.substr(i + 1);
                i = source.lastIndexOf("\\");
                if (i != -1)
                    source = source.substr(i + 1);
                i = source.lastIndexOf(".");
                if (i != -1)
                    return source.substring(0, i);
                else
                    return source;
            };
            StringUtil.startsWith = function (source, str, ignoreCase) {
                if (ignoreCase === void 0) { ignoreCase = false; }
                if (!source)
                    return false;
                else if (source.length < str.length)
                    return false;
                else {
                    source = source.substring(0, str.length);
                    if (!ignoreCase)
                        return source == str;
                    else
                        return source.toLowerCase() == str.toLowerCase();
                }
            };
            StringUtil.endsWith = function (source, str, ignoreCase) {
                if (ignoreCase === void 0) { ignoreCase = false; }
                if (!source)
                    return false;
                else if (source.length < str.length)
                    return false;
                else {
                    source = source.substring(source.length - str.length);
                    if (!ignoreCase)
                        return source == str;
                    else
                        return source.toLowerCase() == str.toLowerCase();
                }
            };
            StringUtil.trim = function (targetString) {
                return StringUtil.trimLeft(StringUtil.trimRight(targetString));
            };
            StringUtil.trimLeft = function (targetString) {
                var tempChar = "";
                var i;
                for (i = 0; i < targetString.length; i++) {
                    tempChar = targetString.charAt(i);
                    if (tempChar != " " && tempChar != "\n" && tempChar != "\r")
                        break;
                }
                return targetString.substr(i);
            };
            StringUtil.trimRight = function (targetString) {
                var tempChar = "";
                var i;
                for (i = targetString.length - 1; i >= 0; i--) {
                    tempChar = targetString.charAt(i);
                    if (tempChar != " " && tempChar != "\n" && tempChar != "\r")
                        break;
                }
                return targetString.substring(0, i + 1);
            };
            StringUtil.convertToHtmlColor = function (argb, hasAlpha) {
                if (hasAlpha === void 0) { hasAlpha = false; }
                var alpha;
                if (hasAlpha)
                    alpha = (argb >> 24 & 0xFF).toString(16);
                else
                    alpha = "";
                var red = (argb >> 16 & 0xFF).toString(16);
                var green = (argb >> 8 & 0xFF).toString(16);
                var blue = (argb & 0xFF).toString(16);
                if (alpha.length == 1)
                    alpha = "0" + alpha;
                if (red.length == 1)
                    red = "0" + red;
                if (green.length == 1)
                    green = "0" + green;
                if (blue.length == 1)
                    blue = "0" + blue;
                return "#" + alpha + red + green + blue;
            };
            StringUtil.convertFromHtmlColor = function (str, hasAlpha) {
                if (hasAlpha === void 0) { hasAlpha = false; }
                if (str.length < 1)
                    return 0;
                if (str.charAt(0) == "#")
                    str = str.substr(1);
                if (str.length == 8)
                    return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16);
                else if (hasAlpha)
                    return 0xFF000000 + parseInt(str, 16);
                else
                    return parseInt(str, 16);
            };
            return StringUtil;
        }());
        utils.StringUtil = StringUtil;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));

(function (fgui) {
    var UBBParser = /** @class */ (function () {
        function UBBParser() {
            this._readPos = 0;
            this.smallFontSize = 12;
            this.normalFontSize = 14;
            this.largeFontSize = 16;
            this.defaultImgWidth = 0;
            this.defaultImgHeight = 0;
            this._handlers = {};
            this._handlers["url"] = this.onTag_URL;
            this._handlers["img"] = this.onTag_IMG;
            this._handlers["b"] = this.onTag_Simple;
            this._handlers["i"] = this.onTag_Simple;
            this._handlers["u"] = this.onTag_Simple;
            this._handlers["sup"] = this.onTag_Simple;
            this._handlers["sub"] = this.onTag_Simple;
            this._handlers["color"] = this.onTag_COLOR;
            this._handlers["font"] = this.onTag_FONT;
            this._handlers["size"] = this.onTag_SIZE;
        }
        UBBParser.prototype.onTag_URL = function (tagName, end, attr) {
            if (!end) {
                if (attr != null)
                    return "<a href=\"" + attr + "\" target=\"_blank\">";
                else {
                    var href = this.getTagText();
                    return "<a href=\"" + href + "\" target=\"_blank\">";
                }
            }
            else
                return "</a>";
        };
        UBBParser.prototype.onTag_IMG = function (tagName, end, attr) {
            if (!end) {
                var src = this.getTagText(true);
                if (!src)
                    return null;
                if (this.defaultImgWidth)
                    return "<img src=\"" + src + "\" width=\"" + this.defaultImgWidth + "\" height=\"" + this.defaultImgHeight + "\"/>";
                else
                    return "<img src=\"" + src + "\"/>";
            }
            else
                return null;
        };
        UBBParser.prototype.onTag_Simple = function (tagName, end, attr) {
            return end ? ("</" + tagName + ">") : ("<" + tagName + ">");
        };
        UBBParser.prototype.onTag_COLOR = function (tagName, end, attr) {
            if (!end)
                return "<font color=\"" + attr + "\">";
            else
                return "</font>";
        };
        UBBParser.prototype.onTag_FONT = function (tagName, end, attr) {
            if (!end)
                return "<font face=\"" + attr + "\">";
            else
                return "</font>";
        };
        UBBParser.prototype.onTag_SIZE = function (tagName, end, attr) {
            if (!end) {
                if (attr == "normal")
                    attr = "" + this.normalFontSize;
                else if (attr == "small")
                    attr = "" + this.smallFontSize;
                else if (attr == "large")
                    attr = "" + this.largeFontSize;
                else if (attr.length && attr.charAt(0) == "+")
                    attr = "" + (this.smallFontSize + parseInt(attr.substr(1)));
                else if (attr.length && attr.charAt(0) == "-")
                    attr = "" + (this.smallFontSize - parseInt(attr.substr(1)));
                return "<font size=\"" + attr + "\">";
            }
            else
                return "</font>";
        };
        UBBParser.prototype.getTagText = function (remove) {
            if (remove === void 0) { remove = false; }
            var pos1 = this._readPos;
            var pos2;
            var result = "";
            while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                if (this._text.charCodeAt(pos2 - 1) == 92) //\
                 {
                    result += this._text.substring(pos1, pos2 - 1);
                    result += "[";
                    pos1 = pos2 + 1;
                }
                else {
                    result += this._text.substring(pos1, pos2);
                    break;
                }
            }
            if (pos2 == -1)
                return null;
            if (remove)
                this._readPos = pos2;
            return result;
        };
        UBBParser.prototype.parse = function (text, remove) {
            if (remove === void 0) { remove = false; }
            this._text = text;
            var pos1 = 0, pos2, pos3;
            var end;
            var tag, attr;
            var repl;
            var func;
            var result = "";
            while ((pos2 = this._text.indexOf("[", pos1)) != -1) {
                if (pos2 > 0 && this._text.charCodeAt(pos2 - 1) == 92) //\
                 {
                    result += this._text.substring(pos1, pos2 - 1);
                    result += "[";
                    pos1 = pos2 + 1;
                    continue;
                }
                result += this._text.substring(pos1, pos2);
                pos1 = pos2;
                pos2 = this._text.indexOf("]", pos1);
                if (pos2 == -1)
                    break;
                end = this._text.charAt(pos1 + 1) == '/';
                tag = this._text.substring(end ? pos1 + 2 : pos1 + 1, pos2);
                this._readPos = pos2 + 1;
                attr = null;
                repl = null;
                pos3 = tag.indexOf("=");
                if (pos3 != -1) {
                    attr = tag.substring(pos3 + 1);
                    tag = tag.substring(0, pos3);
                }
                tag = tag.toLowerCase();
                func = this._handlers[tag];
                if (func != null) {
                    if (!remove) {
                        repl = func.call(this, tag, end, attr);
                        if (repl != null)
                            result += repl;
                    }
                }
                else
                    result += this._text.substring(pos1, this._readPos);
                pos1 = this._readPos;
            }
            if (pos1 < this._text.length)
                result += this._text.substr(pos1);
            this._text = null;
            return result;
        };
        UBBParser.inst = new UBBParser();
        return UBBParser;
    }());
    fgui.UBBParser = UBBParser;
})(fgui || (fgui = {}));
/// <reference path="UBBParser.ts" />
/// <reference path="ColorMatrix.ts" />

/// <reference path="UBBParser.ts" />
/// <reference path="ColorMatrix.ts" />
(function (fgui) {
    var ToolSet = /** @class */ (function () {
        function ToolSet() {
        }
        /**
         * 获取内部使用的文件名，不包含文件后缀
         * @hide
         * @param source 源文件名
         * @return 内部使用的文件名
         */
        ToolSet.getFileName = function (source) {
            var i = source.lastIndexOf("/");
            if (i != -1)
                source = source.substr(i + 1);
            i = source.lastIndexOf("\\");
            if (i != -1)
                source = source.substr(i + 1);
            i = source.lastIndexOf(".");
            if (i != -1)
                return source.substring(0, i);
            else
                return source;
        };
        ToolSet.startsWith = function (source, str, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            if (!source)
                return false;
            else if (source.length < str.length)
                return false;
            else {
                source = source.substring(0, str.length);
                if (!ignoreCase)
                    return source == str;
                else
                    return source.toLowerCase() == str.toLowerCase();
            }
        };
        ToolSet.endsWith = function (source, str, ignoreCase) {
            if (ignoreCase === void 0) { ignoreCase = false; }
            if (!source)
                return false;
            else if (source.length < str.length)
                return false;
            else {
                source = source.substring(source.length - str.length);
                if (!ignoreCase)
                    return source == str;
                else
                    return source.toLowerCase() == str.toLowerCase();
            }
        };
        ToolSet.trim = function (targetString) {
            return ToolSet.trimLeft(ToolSet.trimRight(targetString));
        };
        ToolSet.trimLeft = function (targetString) {
            var tempChar = "";
            for (var i = 0; i < targetString.length; i++) {
                tempChar = targetString.charAt(i);
                if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                    break;
                }
            }
            return targetString.substr(i);
        };
        ToolSet.trimRight = function (targetString) {
            var tempChar = "";
            for (var i = targetString.length - 1; i >= 0; i--) {
                tempChar = targetString.charAt(i);
                if (tempChar != " " && tempChar != "\n" && tempChar != "\r") {
                    break;
                }
            }
            return targetString.substring(0, i + 1);
        };
        ToolSet.convertToHtmlColor = function (argb, hasAlpha) {
            if (hasAlpha === void 0) { hasAlpha = false; }
            var alpha;
            if (hasAlpha)
                alpha = (argb >> 24 & 0xFF).toString(16);
            else
                alpha = "";
            var red = (argb >> 16 & 0xFF).toString(16);
            var green = (argb >> 8 & 0xFF).toString(16);
            var blue = (argb & 0xFF).toString(16);
            if (alpha.length == 1)
                alpha = "0" + alpha;
            if (red.length == 1)
                red = "0" + red;
            if (green.length == 1)
                green = "0" + green;
            if (blue.length == 1)
                blue = "0" + blue;
            return "#" + alpha + red + green + blue;
        };
        ToolSet.convertFromHtmlColor = function (str, hasAlpha) {
            if (hasAlpha === void 0) { hasAlpha = false; }
            if (str.length < 1)
                return 0;
            if (str.charAt(0) == "#")
                str = str.substr(1);
            if (str.length == 8)
                return (parseInt(str.substr(0, 2), 16) << 24) + parseInt(str.substr(2), 16);
            else if (hasAlpha)
                return 0xFF000000 + parseInt(str, 16);
            else
                return parseInt(str, 16);
        };
        ToolSet.displayObjectToGObject = function (obj) {
            while (obj != null && !(obj instanceof fgui.UIStage)) {
                if (obj["$owner"]) {
                    return fgui.GObject.cast(obj);
                }
                obj = obj.parent;
            }
            return null;
        };
        ToolSet.encodeHTML = function (str) {
            if (!str)
                return "";
            else
                return str.replace("&", "&amp;").replace("<", "&lt;").replace(">", "&gt;").replace("'", "&apos;");
        };
        ToolSet.parseUBB = function (text) {
            return ToolSet.defaultUBBParser.parse(text);
        };
        ToolSet.clamp = function (value, min, max) {
            if (value < min)
                value = min;
            else if (value > max)
                value = max;
            return value;
        };
        ToolSet.clamp01 = function (value) {
            if (value > 1)
                value = 1;
            else if (value < 0)
                value = 0;
            return value;
        };
        ToolSet.lerp = function (start, end, percent) {
            return (start + percent * (end - start));
        };
        ToolSet.repeat = function (t, length) {
            return t - Math.floor(t / length) * length;
        };
        ToolSet.distance = function (x1, y1, x2, y2) {
            return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
        };
        ToolSet.fillPath = function (ctx, points, px, py) {
            var cnt = points.length;
            ctx.moveTo(points[0] + px, points[1] + py);
            for (var i = 2; i < cnt; i += 2)
                ctx.lineTo(points[i] + px, points[i + 1] + py);
            ctx.lineTo(points[0] + px, points[1] + py);
        };
        ToolSet.setColorFilter = function (obj, color) {
            var filter = obj.$_colorFilter_; //cached instance
            var filter = obj.$_colorFilter_;
            var filters = obj.filters;
            var toApplyColor;
            var toApplyGray;
            var tp = typeof (color);
            if (tp == "boolean") //gray
             {
                toApplyColor = filter ? filter.$_color_ : null;
                toApplyGray = color;
            }
            else {
                toApplyColor = color == 0xFFFFFF ? null : color;
                toApplyGray = filter ? filter.$_grayed_ : false;
            }
            if ((!toApplyColor && toApplyColor != 0) && !toApplyGray) {
                if (filters && filter) {
                    var i = filters.indexOf(filter);
                    if (i != -1) {
                        filters.splice(i, 1);
                        if (filters.length > 0)
                            obj.filters = filters;
                        else
                            obj.filters = null;
                    }
                }
                return;
            }
            if (!filter) {
                filter = new PIXI.filters.ColorMatrixFilter();
                obj.$_colorFilter_ = filter;
            }
            if (!filters)
                filters = [filter];
            else {
                var i_3 = filters.indexOf(filter);
                if (i_3 == -1)
                    filters.push(filter);
            }
            obj.filters = filters;
            filter.$_color_ = toApplyColor;
            filter.$_grayed_ = toApplyGray;
            var mat = filter.matrix;
            if (toApplyGray) {
                for (var i_4 = 0; i_4 < 20; i_4++)
                    mat[i_4] = ToolSet.grayScaleMatrix[i_4];
            }
            else if (toApplyColor instanceof Array) {
                fgui.utils.ColorMatrix.getMatrix(toApplyColor[0], toApplyColor[1], toApplyColor[2], toApplyColor[3], mat);
            }
            else {
                for (var i_5 = 0; i_5 < 20; i_5++) {
                    mat[i_5] = (i_5 == 0 || i_5 == 6 || i_5 == 12 || i_5 == 18) ? 1 : 0;
                }
                mat[0] = ((color >> 16) & 0xFF) / 255;
                mat[6] = ((color >> 8) & 0xFF) / 255;
                mat[12] = (color & 0xFF) / 255;
            }
            filter.matrix = mat;
        };
        ToolSet.defaultUBBParser = new fgui.UBBParser();
        ToolSet.grayScaleMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        return ToolSet;
    }());
    fgui.ToolSet = ToolSet;
})(fgui || (fgui = {}));

(function (fgui) {
    var utils;
    (function (utils) {
        var XmlNode = /** @class */ (function () {
            function XmlNode(ele) {
                this.nodeName = ele.nodeName;
                this.context = ele;
                this.type = ele.nodeType;
                this.text = (this.type == Node.COMMENT_NODE || this.type == Node.TEXT_NODE) ? this.context.textContent : null;
            }
            Object.defineProperty(XmlNode.prototype, "children", {
                get: function () {
                    if (!this.$children)
                        this.$children = XmlParser.getChildNodes(this);
                    return this.$children;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(XmlNode.prototype, "attributes", {
                get: function () {
                    if (!this.$attributes)
                        this.$attributes = XmlParser.getNodeAttributes(this);
                    return this.$attributes;
                },
                enumerable: true,
                configurable: true
            });
            return XmlNode;
        }());
        utils.XmlNode = XmlNode;
        var XmlParser = /** @class */ (function () {
            function XmlParser() {
            }
            XmlParser.tryParse = function (xmlstring, mimeType) {
                if (mimeType === void 0) { mimeType = "application/xml"; }
                var doc = XmlParser.$parser.parseFromString(xmlstring, mimeType);
                if (doc && doc.childNodes && doc.childNodes.length >= 1)
                    return new XmlNode(doc.firstChild);
                return null;
            };
            XmlParser.getXmlRoot = function (xml) {
                if (!xml || !xml.context)
                    throw new Error("Invalid xml node");
                var p = xml.context;
                while (p.parentNode != null)
                    p = p.parentNode;
                return p == xml.context ? xml : new XmlNode(p);
            };
            XmlParser.getChildNodes = function (xml, matchName) {
                if (matchName === void 0) { matchName = null; }
                var nodes = xml.context.childNodes;
                var ret = [];
                if (!nodes || nodes.length <= 0)
                    return ret;
                var len = nodes.length;
                for (var i = 0; i < len; i++) {
                    var n = nodes.item(i);
                    if (n.nodeType == Node.TEXT_NODE)
                        continue;
                    if (!matchName || (matchName && matchName.length > 0 && n.nodeName.toLowerCase() == matchName.toLowerCase()))
                        ret.push(new XmlNode(n));
                }
                return ret;
            };
            XmlParser.getNodeAttributes = function (xml) {
                //let asList: NamedNodeMap = xml.context.attributes;
                var asList = xml.context.childNodes;
                var ret = {};
                if (!asList || asList.length <= 0)
                    return ret;
                var len = asList.length;
                for (var i = 0; i < len; i++) {
                    //let a: Attr = asList.item(i);
                    var a = asList.item(i);
                    ret[a.nodeName] = a.nodeValue;
                }
                return ret;
            };
            XmlParser.$parser = new DOMParser();
            return XmlParser;
        }());
        utils.XmlParser = XmlParser;
    })(utils = fgui.utils || (fgui.utils = {}));
})(fgui || (fgui = {}));
