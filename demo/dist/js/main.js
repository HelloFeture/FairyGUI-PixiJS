var __extends = (this && this.__extends) || (function () {
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var MT = /** @class */ (function (_super) {
    __extends(MT, _super);
    function MT() {
        var _this = _super.call(this, null) || this;
        _this._minHeightID = -1;
        _this.owner = null;
        _this.interactive = _this.interactiveChildren = false;
        _this.texture.noFrame = false;
        _this._minHeight = -1;
        return _this;
    }
    return MT;
}(PIXI.Text));
var MainMenu = /** @class */ (function () {
    function MainMenu() {
    }
    MainMenu.prototype.enter = function () {
        this.__loadAndStart();
    };
    MainMenu.prototype.__loadAndStart = function () {
        return __awaiter(this, void 0, void 0, function () {
            var loader, resDic, data, items, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        PIXI.LoaderResource.setExtensionLoadType(".fui", PIXI.LoaderResource.LOAD_TYPE.XHR);
                        PIXI.LoaderResource.setExtensionXhrType(".fui", PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
                        loader = new fgui.utils.AssetLoader("assetConfig", false);
                        loader.easyAdd("asset", "asset.json");
                        return [4 /*yield*/, loader.loadAsync()];
                    case 1:
                        resDic = _a.sent();
                        if (resDic instanceof Error) {
                            console.error(resDic);
                            return [2 /*return*/];
                        }
                        data = resDic["asset"];
                        if (!data) {
                            console.error("载入配置文件错误");
                            return [2 /*return*/];
                        }
                        items = data.data.default;
                        loader.reset();
                        loader.groupName = null; //config.name;
                        loader.autoAddToAssetManager = true;
                        loader.addGroup(items);
                        return [4 /*yield*/, loader.loadAsync()];
                    case 2:
                        result = _a.sent();
                        if (result instanceof Error) {
                            console.error(result);
                            return [2 /*return*/];
                        }
                        console.log(fgui.utils.AssetManager.inst.assetGroup);
                        this.__start();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainMenu.prototype.__start = function () {
        // fgui.UIPackage.addPackage("Bag");
        // this._view = fgui.UIPackage.createObject("Bag", "Main").asCom;
        // this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        // fgui.GRoot.inst.addChild(this._view);
        // if (this._view) {
        //     return ;
        // }
        fgui.UIPackage.addPackage("Basics");
        this._view = fgui.UIPackage.createObject("Basics", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        fgui.UIPackage.addPackage("MainMenu");
        this._view = fgui.UIPackage.createObject("MainMenu", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
        this._view.getChild("n1").onClick(function () {
            this.startDemo(BasicDemo);
        }, this);
        this._view.getChild("n2").onClick(function () {
            this.startDemo(TransitionDemo);
        }, this);
        this._view.getChild("n4").onClick(function () {
            this.startDemo(VirtualListDemo);
        }, this);
        this._view.getChild("n5").onClick(function () {
            this.startDemo(LoopListDemo);
        }, this);
        this._view.getChild("n6").onClick(function () {
            this.startDemo(HitTestDemo);
        }, this);
        this._view.getChild("n7").onClick(function () {
            this.startDemo(PullToRefreshDemo);
        }, this);
        this._view.getChild("n8").onClick(function () {
            this.startDemo(ModalWaitingDemo);
        }, this);
        this._view.getChild("n9").onClick(function () {
            this.startDemo(JoystickDemo);
        }, this);
        this._view.getChild("n10").onClick(function () {
            this.startDemo(BagDemo);
        }, this);
        this._view.getChild("n11").onClick(function () {
            this.startDemo(ChatDemo);
        }, this);
        this._view.getChild("n12").onClick(function () {
            this.startDemo(ListEffectDemo);
        }, this);
        this._view.getChild("n13").onClick(function () {
            this.startDemo(ScrollPaneDemo);
        }, this);
        this._view.getChild("n14").onClick(function () {
            this.startDemo(TreeViewDemo);
        }, this);
        this._view.getChild("n15").onClick(function () {
            this.startDemo(GuideDemo);
        }, this);
        this._view.getChild("n16").onClick(function () {
            this.startDemo(CooldownDemo);
        }, this);
    };
    MainMenu.prototype.startDemo = function (demoClass) {
        this._view.dispose();
        var demo = new demoClass();
        demo.start().then(function () {
            fgui.GRoot.inst.emit("start_demo", false, demo);
        });
    };
    MainMenu.prototype.destroy = function () {
        this._view.dispose();
    };
    return MainMenu;
}());
/// <reference path="./pixi/MainMenu.ts" />
var Application = /** @class */ (function () {
    function Application() {
    }
    /**
     * start run application
     */
    Application.prototype.start = function () {
        // this._startBabylon();
        this._startPIXI();
    };
    Application.prototype._startPIXI = function () {
        this.canvas = document.getElementById("babylonRenderCanvas");
        //let view = document.getElementById("pixiJsRenderCanvas") as HTMLCanvasElement;
        var view = this.canvas;
        this.app = new PIXI.Application({
            view: view,
            antialias: true,
        });
        fgui.GRoot.inst.attachTo(this.app, {
            designHeight: 640,
            designWidth: 1136,
            scaleMode: "noScale" /* NO_SCALE */,
            orientation: "landscape" /* LANDSCAPE */,
            alignV: 1 /* CENTER */,
            alignH: 1 /* CENTER */
        });
        var menu = new MainMenu();
        menu.enter();
    };
    Application.prototype._startBabylon = function () {
        var _this = this;
        this.canvas = document.getElementById("babylonRenderCanvas");
        this.engine = new BABYLON.Engine(this.canvas, true);
        // This creates a basic Babylon Scene object (non-mesh)
        var scene = new BABYLON.Scene(this.engine);
        scene.clearColor = new BABYLON.Color4(0, 0, 0, 1);
        // This creates and positions a free camera (non-mesh)
        this.camera = new BABYLON.FreeCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
        // This targets the camera to scene origin
        this.camera.setTarget(BABYLON.Vector3.Zero());
        // This attaches the camera to the canvas
        // this.camera.attachControl(this.canvas, true);
        // var camera = new BABYLON.ArcRotateCamera("camera1", 0, 0, 0, new BABYLON.Vector3(2, 3, 4), scene);
        // camera.setPosition(new BABYLON.Vector3(10, 3, -10));
        // camera.attachControl(this.canvas, true);
        // var camera = new BABYLON.Camera("camera1", new BABYLON.Vector3(0, 0, 2), scene);
        // camera.attachControl(this.canvas, true);
        // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
        var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0, 1, 0), scene);
        // Default intensity is 1. Let's dim the light a small amount
        light.intensity = 0.7;
        // Our built-in 'sphere' shape. Params: name, subdivs, size, scene
        this.sphere = BABYLON.Mesh.CreateSphere("sphere1", 16, 2, scene);
        // Move the sphere upward 1/2 its height
        this.sphere.position.y = 1;
        // Our built-in 'ground' shape. Params: name, width, depth, subdivs, scene
        var ground = BABYLON.Mesh.CreateGround("ground1", 6, 6, 2, scene);
        this.engine.runRenderLoop(function () {
            if (scene) {
                scene.render();
                _this.engine.wipeCaches(true);
            }
            if (_this.app) {
                _this.app.renderer.reset();
                _this.app.render();
            }
        });
    };
    return Application;
}());
var app = new Application();
app.start();
var BagDemo = /** @class */ (function () {
    function BagDemo() {
    }
    BagDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Bag");
                fgui.UIPackage.addPackage("Bag");
                this._view = fgui.UIPackage.createObject("Bag", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._bagWindow = new BagWindow();
                this._view.getChild("bagBtn").onClick(function () { _this._bagWindow.show(); }, this);
                return [2 /*return*/];
            });
        });
    };
    BagDemo.prototype.destroy = function () {
        fgui.UIPackage.removePackage("Bag");
    };
    return BagDemo;
}());
var BagWindow = /** @class */ (function (_super) {
    __extends(BagWindow, _super);
    function BagWindow() {
        return _super.call(this) || this;
    }
    BagWindow.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Bag", "BagWin").asCom;
        this.center();
    };
    BagWindow.prototype.onShown = function () {
        var list = this.contentPane.getChild("list").asList;
        list.on(fgui.InteractiveEvents.Click, this.onClickItem, this);
        list.itemRenderer = this.renderListItem;
        list.callbackThisObj = this;
        list.setVirtual();
        list.numItems = 45;
    };
    BagWindow.prototype.renderListItem = function (index, obj) {
        obj.icon = "resource/assets/Icons/i" + Math.floor(Math.random() * 10) + ".png";
        obj.text = "" + Math.floor(Math.random() * 100);
    };
    BagWindow.prototype.onClickItem = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        console.log.apply(console, args);
    };
    return BagWindow;
}(fgui.Window));
var BasicDemo = /** @class */ (function () {
    function BasicDemo() {
    }
    BasicDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var cnt, i, obj;
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Basics");
                fgui.UIPackage.addPackage("Basics");
                fgui.UIConfig.verticalScrollBar = "ui://Basics/ScrollBar_VT";
                fgui.UIConfig.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
                fgui.UIConfig.popupMenu = "ui://Basics/PopupMenu";
                fgui.UIConfig.buttonSound = "ui://Basics/click";
                this._view = fgui.UIPackage.createObject("Basics", "Main").asCom;
                this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                fgui.GRoot.inst.addChild(this._view);
                this._backBtn = this._view.getChild("btn_Back");
                this._backBtn.visible = false;
                this._backBtn.on(fgui.InteractiveEvents.Click, this.onClickBack, this);
                this._demoContainer = this._view.getChild("container").asCom;
                this._cc = this._view.getController("c1");
                cnt = this._view.numChildren;
                for (i = 0; i < cnt; i++) {
                    obj = this._view.getChildAt(i);
                    if (obj.group != null && obj.group.name == "btns")
                        obj.on(fgui.InteractiveEvents.Click, this.runDemo, this);
                }
                this._demoObjects = {};
                return [2 /*return*/];
            });
        });
    };
    BasicDemo.prototype.destroy = function () {
        fgui.UIConfig.verticalScrollBar = "";
        fgui.UIConfig.horizontalScrollBar = "";
        fgui.UIConfig.popupMenu = "";
        fgui.UIConfig.buttonSound = "";
        fgui.UIPackage.removePackage("Basics");
    };
    BasicDemo.prototype.runDemo = function (evt) {
        var type = (evt.gObject).name.substr(4);
        var obj = this._demoObjects[type];
        if (obj == null) {
            obj = fgui.UIPackage.createObject("Basics", "Demo_" + type).asCom;
            this._demoObjects[type] = obj;
        }
        this._demoContainer.removeChildren();
        this._demoContainer.addChild(obj);
        this._cc.selectedIndex = 1;
        this._backBtn.visible = true;
        switch (type) {
            case "Button":
                this.playButton();
                break;
            case "Text":
                this.playText();
                break;
            case "Window":
                this.playWindow();
                break;
            case "Popup":
                this.playPopup();
                break;
            case "Drag&Drop":
                this.playDragDrop();
                break;
            case "Depth":
                this.playDepth();
                break;
            case "Grid":
                this.playGrid();
                break;
            case "ProgressBar":
                this.playProgressBar();
                break;
        }
    };
    BasicDemo.prototype.onClickBack = function (evt) {
        this._cc.selectedIndex = 0;
        this._backBtn.visible = false;
    };
    //------------------------------
    BasicDemo.prototype.playButton = function () {
        var obj = this._demoObjects["Button"];
        obj.getChild("n34").on(fgui.InteractiveEvents.Click, this.__clickButton, this);
    };
    BasicDemo.prototype.__clickButton = function (evt) {
        console.log("click button");
    };
    //------------------------------
    BasicDemo.prototype.playText = function () {
        var obj = this._demoObjects["Text"];
        obj.getChild("n12").asRichTextField.on("__linkClick" /* LinkClick */, this.__clickLink, this);
        obj.getChild("n25").on(fgui.InteractiveEvents.Click, this.__clickGetInput, this);
    };
    BasicDemo.prototype.__clickLink = function (evt) {
        var obj = evt.currentTarget;
        obj.text = "[img]ui://9leh0eyft9fj5f[/img][color=#FF0000]你点击了链接[/color]：";
    };
    BasicDemo.prototype.__clickGetInput = function (evt) {
        var obj = this._demoObjects["Text"];
        obj.getChild("n24").text = obj.getChild("n22").text;
    };
    BasicDemo.prototype.playWindow = function () {
        var obj = this._demoObjects["Window"];
        obj.getChild("n0").on(fgui.InteractiveEvents.Click, this.__clickWindowA, this);
        obj.getChild("n1").on(fgui.InteractiveEvents.Click, this.__clickWindowB, this);
    };
    BasicDemo.prototype.__clickWindowA = function (evt) {
        if (this._winA == null) {
            this._winA = new WindowA();
        }
        this._winA.show();
    };
    BasicDemo.prototype.__clickWindowB = function (evt) {
        if (this._winB == null) {
            this._winB = new WindowB();
        }
        this._winB.show();
    };
    BasicDemo.prototype.playPopup = function () {
        if (this._pm == null) {
            this._pm = new fgui.PopupMenu();
            this._pm.addItem("Item 1");
            this._pm.addItem("Item 2");
            this._pm.addItem("Item 3");
            this._pm.addItem("Item 4");
            if (this._popupCom == null) {
                this._popupCom = fgui.UIPackage.createObject("Basics", "Component12").asCom;
                this._popupCom.center();
            }
        }
        var obj = this._demoObjects["Popup"];
        var btn = obj.getChild("n0");
        btn.on(fgui.InteractiveEvents.Click, this.__clickPopup1, this);
        var btn2 = obj.getChild("n1");
        btn2.on(fgui.InteractiveEvents.Click, this.__clickPopup2, this);
    };
    BasicDemo.prototype.__clickPopup1 = function (evt) {
        var btn = evt.currentTarget;
        this._pm.show(btn);
    };
    BasicDemo.prototype.__clickPopup2 = function (evt) {
        fgui.GRoot.inst.showPopup(this._popupCom);
    };
    //------------------------------
    BasicDemo.prototype.playDragDrop = function () {
        var obj = this._demoObjects["Drag&Drop"];
        var btnA = obj.getChild("a");
        btnA.draggable = true;
        var btnB = obj.getChild("b").asButton;
        btnB.draggable = true;
        btnB.on("__dragStart" /* START */, this.__onDragStart, this);
        var btnC = obj.getChild("c").asButton;
        btnC.icon = null;
        btnC.on("__dragDrop" /* DROP */, this.__onDrop, this);
        var btnD = obj.getChild("d");
        btnD.draggable = true;
        var bounds = obj.getChild("bounds");
        var rect = new PIXI.Rectangle();
        bounds.localToGlobalRect(0, 0, bounds.width, bounds.height, rect);
        fgui.GRoot.inst.globalToLocalRect(rect.x, rect.y, rect.width, rect.height, rect);
        //因为这时候面板还在从右往左动，所以rect不准确，需要用相对位置算出最终停下来的范围
        rect.x -= obj.parent.x;
        btnD.dragBounds = rect;
    };
    BasicDemo.prototype.__onDragStart = function (evt) {
        //取消对原目标的拖动，换成一个替代品
        evt.stopPropagation();
        var btn = evt.gObject;
        fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon);
    };
    BasicDemo.prototype.__onDrop = function (evt) {
        var btn = evt.gObject;
        btn.icon = evt.source.asButton.icon;
    };
    //------------------------------
    BasicDemo.prototype.playDepth = function () {
        var obj = this._demoObjects["Depth"];
        var testContainer = obj.getChild("n22").asCom;
        var fixedObj = testContainer.getChild("n0");
        fixedObj.sortingOrder = 100;
        fixedObj.draggable = true;
        var numChildren = testContainer.numChildren;
        var i = 0;
        while (i < numChildren) {
            var child = testContainer.getChildAt(i);
            if (child != fixedObj) {
                testContainer.removeChildAt(i);
                numChildren--;
            }
            else
                i++;
        }
        var startPos = new PIXI.Point(fixedObj.x, fixedObj.y);
        obj.getChild("btn0").onClick(function () {
            var graph = new fgui.GGraph();
            startPos.x += 10;
            startPos.y += 10;
            graph.setXY(startPos.x, startPos.y);
            graph.setSize(150, 150);
            graph.drawRect(1, 0, 1, 0xFF0000, 1);
            obj.getChild("n22").asCom.addChild(graph);
        }, this);
        obj.getChild("btn1").onClick(function () {
            var graph = new fgui.GGraph();
            startPos.x += 10;
            startPos.y += 10;
            graph.setXY(startPos.x, startPos.y);
            graph.setSize(150, 150);
            graph.drawRect(1, 0, 1, 0x00FF00, 1);
            graph.sortingOrder = 200;
            obj.getChild("n22").asCom.addChild(graph);
        }, this);
    };
    //------------------------------
    BasicDemo.prototype.playGrid = function () {
        var obj = this._demoObjects["Grid"];
        var list1 = obj.getChild("list1").asList;
        list1.removeChildrenToPool();
        var testNames = ["苹果手机操作系统", "安卓手机操作系统", "微软手机操作系统", "微软桌面操作系统", "苹果桌面操作系统", "未知操作系统"];
        var testColors = [0xFFFF00, 0xFF0000, 0xFFFFFF, 0x0000FF];
        var cnt = testNames.length;
        for (var i = 0; i < cnt; i++) {
            var item = list1.addItemFromPool().asButton;
            item.getChild("t0").text = "" + (i + 1);
            item.getChild("t1").text = testNames[i];
            item.getChild("t2").asTextField.color = testColors[Math.floor(Math.random() * 4)];
            item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3) + 1) / 3 * 100;
        }
        var list2 = obj.getChild("list2").asList;
        list2.removeChildrenToPool();
        for (var i = 0; i < cnt; i++) {
            var item = list2.addItemFromPool().asButton;
            item.getChild("cb").asButton.selected = false;
            item.getChild("t1").text = testNames[i];
            item.getChild("mc").asMovieClip.playing = i % 2 == 0;
            item.getChild("t3").text = "" + Math.floor(Math.random() * 10000);
        }
    };
    //------------------------------
    BasicDemo.prototype.playProgressBar = function () {
        var obj = this._demoObjects["ProgressBar"];
        fgui.GTimer.inst.add(40, 0, this.__playProgress, this);
        obj.on("removed", this.__removeTimer, this);
    };
    BasicDemo.prototype.__removeTimer = function () {
        fgui.GTimer.inst.remove(this.__playProgress, this);
    };
    BasicDemo.prototype.__playProgress = function () {
        var obj = this._demoObjects["ProgressBar"];
        var cnt = obj.numChildren;
        for (var i = 0; i < cnt; i++) {
            var child = obj.getChildAt(i);
            if (child != null) {
                child.value += 1;
                if (child.value > child.max)
                    child.value = 0;
            }
        }
    };
    return BasicDemo;
}());
var Message = /** @class */ (function () {
    function Message() {
    }
    return Message;
}());
var ChatDemo = /** @class */ (function () {
    function ChatDemo() {
    }
    ChatDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Chat");
                fgui.UIPackage.addPackage("Chat");
                this._view = fgui.UIPackage.createObject("Chat", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._messages = new Array();
                this._emojiParser = new EmojiParser();
                this._list = this._view.getChild("list").asList;
                this._list.setVirtual();
                this._list.itemProvider = this.getListItemResource;
                this._list.itemRenderer = this.renderListItem;
                this._list.callbackThisObj = this;
                this._input = this._view.getChild("input1").asTextInput;
                this._view.getChild("btnSend1").onClick(this.onClickSendBtn, this);
                this._view.getChild("btnEmoji1").onClick(this.onClickEmojiBtn, this);
                this._emojiSelectUI = fgui.UIPackage.createObject("Chat", "EmojiSelectUI").asCom;
                this._emojiSelectUI.getChild("list").on(fgui.InteractiveEvents.Click, this.onClickEmoji, this);
                return [2 /*return*/];
            });
        });
    };
    ChatDemo.prototype.addMsg = function (sender, senderIcon, msg, fromMe) {
        var isScrollBottom = this._list.scrollPane.isBottomMost;
        var newMessage = new Message();
        newMessage.sender = sender;
        newMessage.senderIcon = senderIcon;
        newMessage.msg = msg;
        newMessage.fromMe = fromMe;
        this._messages.push(newMessage);
        if (newMessage.fromMe) {
            if (this._messages.length == 1 || Math.random() < 0.5) {
                var replyMessage = new Message();
                replyMessage.sender = "FairyGUI";
                replyMessage.senderIcon = "r1";
                replyMessage.msg = "Today is a good day. ";
                replyMessage.fromMe = false;
                this._messages.push(replyMessage);
            }
        }
        if (this._messages.length > 100)
            this._messages.splice(0, this._messages.length - 100);
        this._list.numItems = this._messages.length;
        if (isScrollBottom)
            this._list.scrollPane.scrollBottom();
    };
    ChatDemo.prototype.getListItemResource = function (index) {
        var msg = this._messages[index];
        if (msg.fromMe)
            return "ui://Chat/chatRight";
        else
            return "ui://Chat/chatLeft";
    };
    ChatDemo.prototype.renderListItem = function (index, item) {
        var msg = this._messages[index];
        if (!msg.fromMe)
            item.getChild("name").text = msg.sender;
        item.icon = fgui.UIPackage.getItemURL("Chat", msg.senderIcon);
        var txtObj = item.getChild("msg").asRichTextField;
        txtObj.width = txtObj.initWidth;
        txtObj.text = this._emojiParser.parse(msg.msg);
        if (txtObj.textWidth < txtObj.width)
            txtObj.width = txtObj.textWidth;
    };
    ChatDemo.prototype.onClickSendBtn = function () {
        var msg = this._input.text;
        if (!msg)
            return;
        this.addMsg("Creator", "r0", msg, true);
        this._input.text = "";
    };
    ChatDemo.prototype.onClickEmojiBtn = function (evt) {
        fgui.GRoot.inst.showPopup(this._emojiSelectUI, evt.gObject);
    };
    ChatDemo.prototype.onClickEmoji = function (evt) {
        this._input.text += "[:" + evt.gObject.text + "]";
    };
    ChatDemo.prototype.onSubmit = function () {
        this.onClickSendBtn();
    };
    return ChatDemo;
}());
var CooldownDemo = /** @class */ (function () {
    function CooldownDemo() {
    }
    CooldownDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Cooldown");
                fgui.UIPackage.addPackage("Cooldown");
                this._view = fgui.UIPackage.createObject("Cooldown", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._btn0 = this._view.getChild("b0").asProgress;
                this._btn1 = this._view.getChild("b1").asProgress;
                this._btn0.getChild("icon").icon = "resource/assets/Icons/k0.png";
                this._btn1.getChild("icon").icon = "resource/assets/Icons/k1.png";
                fgui.GTween.to(0, 100, 5).setTarget(this._btn0, "value").setRepeat(-1);
                fgui.GTween.to(10, 0, 10).setTarget(this._btn1, "value").setRepeat(-1);
                return [2 /*return*/];
            });
        });
    };
    return CooldownDemo;
}());
var DemoEntry = /** @class */ (function () {
    function DemoEntry() {
        fgui.UIPackage.addPackage("MainMenu");
        fgui.GRoot.inst.on("start_demo", this.onDemoStart, this);
        this._currentDemo = new MainMenu();
    }
    DemoEntry.prototype.onDemoStart = function (evt) {
        this._currentDemo = evt.data;
        this._closeButton = fgui.UIPackage.createObject("MainMenu", "CloseButton");
        this._closeButton.setXY(fgui.GRoot.inst.width - this._closeButton.width - 10, fgui.GRoot.inst.height - this._closeButton.height - 10);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Right_Right);
        this._closeButton.addRelation(fgui.GRoot.inst, fgui.RelationType.Bottom_Bottom);
        this._closeButton.sortingOrder = 100000;
        this._closeButton.onClick(this.onDemoClosed, this);
        fgui.GRoot.inst.addChild(this._closeButton);
    };
    DemoEntry.prototype.onDemoClosed = function () {
        if (this._currentDemo.destroy)
            this._currentDemo.destroy();
        fgui.GRoot.inst.removeChildren(0, -1, true);
        this._currentDemo = new MainMenu();
    };
    return DemoEntry;
}());
var EmojiParser = /** @class */ (function (_super) {
    __extends(EmojiParser, _super);
    function EmojiParser() {
        var _this = _super.call(this) || this;
        EmojiParser.TAGS.forEach(function (element) {
            _this._handlers[":" + element] = _this.onTag_Emoji;
        });
        return _this;
    }
    EmojiParser.prototype.onTag_Emoji = function (tagName, end, attr) {
        return "<img src='" + fgui.UIPackage.getItemURL("Chat", tagName.substring(1).toLowerCase()) + "'/>";
    };
    EmojiParser.TAGS = ["88", "am", "bs", "bz", "ch", "cool", "dhq", "dn", "fd", "gz", "han", "hx", "hxiao", "hxiu"];
    return EmojiParser;
}(fgui.UBBParser));
var GuideDemo = /** @class */ (function () {
    function GuideDemo() {
    }
    GuideDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var bagBtn;
            var _this = this;
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Guide");
                fgui.UIPackage.addPackage("Guide");
                this._view = fgui.UIPackage.createObject("Guide", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._guideLayer = fgui.UIPackage.createObject("Guide", "GuideLayer").asCom;
                this._guideLayer.makeFullScreen();
                this._guideLayer.addRelation(fgui.GRoot.inst, fgui.RelationType.Size);
                bagBtn = this._view.getChild("bagBtn");
                bagBtn.onClick(function () {
                    _this._guideLayer.removeFromParent();
                }, this);
                this._view.getChild("n2").onClick(function () {
                    fgui.GRoot.inst.addChild(_this._guideLayer);
                    var rect = bagBtn.localToGlobalRect(0, 0, bagBtn.width, bagBtn.height);
                    rect = _this._guideLayer.globalToLocalRect(rect.x, rect.y, rect.width, rect.height);
                    var window = _this._guideLayer.getChild("window");
                    window.setSize(rect.width, rect.height);
                    fgui.GTween.to2(window.x, window.y, rect.x, rect.y, 0.5).setTarget(window, window.setXY);
                }, this);
                return [2 /*return*/];
            });
        });
    };
    return GuideDemo;
}());
var HitTestDemo = /** @class */ (function () {
    function HitTestDemo() {
    }
    HitTestDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("HitTest");
                fgui.UIPackage.addPackage("HitTest");
                this._view = fgui.UIPackage.createObject("HitTest", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                return [2 /*return*/];
            });
        });
    };
    return HitTestDemo;
}());
var JoystickDemo = /** @class */ (function () {
    function JoystickDemo() {
    }
    JoystickDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Joystick");
                fgui.UIPackage.addPackage("Joystick");
                this._view = fgui.UIPackage.createObject("Joystick", "Main").asCom;
                this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                fgui.GRoot.inst.addChild(this._view);
                this._text = this._view.getChild("n9").asTextField;
                this._joystick = new JoystickModule(this._view);
                this._joystick.on(JoystickModule.JoystickMoving, this.onJoystickMoving, this);
                this._joystick.on(JoystickModule.JoystickUp, this.onJoystickUp, this);
                return [2 /*return*/];
            });
        });
    };
    JoystickDemo.prototype.onJoystickMoving = function (evt) {
        this._text.text = "" + evt.data;
    };
    JoystickDemo.prototype.onJoystickUp = function () {
        this._text.text = "";
    };
    return JoystickDemo;
}());
var JoystickModule = /** @class */ (function (_super) {
    __extends(JoystickModule, _super);
    function JoystickModule(mainView) {
        var _this = _super.call(this) || this;
        _this._button = mainView.getChild("joystick").asButton;
        _this._button.changeStateOnClick = false;
        _this._thumb = _this._button.getChild("thumb");
        _this._touchArea = mainView.getChild("joystick_touch");
        _this._center = mainView.getChild("joystick_center");
        _this._InitX = _this._center.x + _this._center.width / 2;
        _this._InitY = _this._center.y + _this._center.height / 2;
        _this.touchId = -1;
        _this.radius = 150;
        _this._curPos = new PIXI.Point();
        _this._touchArea.on(fgui.InteractiveEvents.Click, _this.onTouchDown, _this);
        return _this;
    }
    JoystickModule.prototype.Trigger = function (evt) {
        this.onTouchDown(evt);
    };
    JoystickModule.prototype.onTouchDown = function (evt) {
        if (this.touchId == -1) //First touch
         {
            this.touchId = evt.data.pointerId;
            // if(this._tweener != null) {
            //     this._tweener.setPaused(true);
            //     this._tweener = null;
            // }
            fgui.GRoot.inst.globalToLocal(evt.data.global.x, evt.data.global.y, this._curPos);
            var bx = this._curPos.x;
            var by = this._curPos.y;
            this._button.selected = true;
            if (bx < 0)
                bx = 0;
            else if (bx > this._touchArea.width)
                bx = this._touchArea.width;
            if (by > fgui.GRoot.inst.height)
                by = fgui.GRoot.inst.height;
            else if (by < this._touchArea.y)
                by = this._touchArea.y;
            this._lastStageX = bx;
            this._lastStageY = by;
            this._startStageX = bx;
            this._startStageY = by;
            this._center.visible = true;
            this._center.x = bx - this._center.width / 2;
            this._center.y = by - this._center.height / 2;
            this._button.x = bx - this._button.width / 2;
            this._button.y = by - this._button.height / 2;
            var deltaX = bx - this._InitX;
            var deltaY = by - this._InitY;
            var degrees = Math.atan2(deltaY, deltaX) * 180 / Math.PI;
            this._thumb.rotation = degrees + 90;
            fgui.GRoot.inst.nativeStage.on(fairygui.InteractiveEvents.Move, this.OnTouchMove, this);
            fgui.GRoot.inst.nativeStage.on(fairygui.InteractiveEvents.TouchEnd, this.OnTouchUp, this);
        }
    };
    JoystickModule.prototype.OnTouchUp = function (evt) {
        if (this.touchId != -1 && evt.data.pointerId == this.touchId) {
            this.touchId = -1;
            this._thumb.rotation = this._thumb.rotation + 180;
            this._center.visible = false;
            // this._tweener = egret.Tween.get(this._button)
            //     .to({ x: this._InitX - this._button.width / 2,y: this._InitY - this._button.height / 2 },
            //         300,egret.Ease.circOut)
            //     .call(function(): void {
            //         this._tweener = null;
            //         this._button.selected = false;
            //         this._thumb.rotation = 0;
            //         this._center.visible = true;
            //         this._center.x = this._InitX - this._center.width / 2;
            //         this._center.y = this._InitY - this._center.height / 2;
            //     },this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move, this.OnTouchMove, this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up, this.OnTouchUp, this);
            this.emit(JoystickModule.JoystickUp, false);
        }
    };
    JoystickModule.prototype.OnTouchMove = function (evt) {
        if (this.touchId != -1 && evt.data.pointerId == this.touchId) {
            var bx = evt.data.global.x / fgui.GRoot.contentScaleFactor;
            var by = evt.data.global.y / fgui.GRoot.contentScaleFactor;
            var moveX = bx - this._lastStageX;
            var moveY = by - this._lastStageY;
            this._lastStageX = bx;
            this._lastStageY = by;
            var buttonX = this._button.x + moveX;
            var buttonY = this._button.y + moveY;
            var offsetX = buttonX + this._button.width / 2 - this._startStageX;
            var offsetY = buttonY + this._button.height / 2 - this._startStageY;
            var rad = Math.atan2(offsetY, offsetX);
            var degree = rad * 180 / Math.PI;
            this._thumb.rotation = degree + 90;
            var maxX = this.radius * Math.cos(rad);
            var maxY = this.radius * Math.sin(rad);
            if (Math.abs(offsetX) > Math.abs(maxX))
                offsetX = maxX;
            if (Math.abs(offsetY) > Math.abs(maxY))
                offsetY = maxY;
            buttonX = this._startStageX + offsetX;
            buttonY = this._startStageY + offsetY;
            if (buttonX < 0)
                buttonX = 0;
            if (buttonY > fgui.GRoot.inst.height)
                buttonY = fgui.GRoot.inst.height;
            this._button.x = buttonX - this._button.width / 2;
            this._button.y = buttonY - this._button.height / 2;
            this.emit(JoystickModule.JoystickMoving, false, degree);
        }
    };
    JoystickModule.JoystickMoving = "JoystickMoving";
    JoystickModule.JoystickUp = "JoystickUp";
    return JoystickModule;
}(PIXI.utils.EventEmitter));
var ListEffectDemo = /** @class */ (function () {
    function ListEffectDemo() {
    }
    ListEffectDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var i, item, delay, i, item;
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("ListEffect");
                fgui.UIPackage.addPackage("ListEffect");
                fgui.UIObjectFactory.setExtension("ui://ListEffect/mailItem", MailItem);
                this._view = fgui.UIPackage.createObject("ListEffect", "Main").asCom;
                this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                fgui.GRoot.inst.addChild(this._view);
                this._list = this._view.getChild("mailList").asList;
                for (i = 0; i < 10; i++) {
                    item = this._list.addItemFromPool();
                    item.setFetched(i % 3 == 0);
                    item.setRead(i % 2 == 0);
                    item.setTime("5 Nov 2015 16:24:33");
                    item.title = "Mail title here";
                }
                this._list.ensureBoundsCorrect();
                delay = 0;
                for (i = 0; i < 10; i++) {
                    item = this._list.getChildAt(i);
                    if (this._list.isChildInView(item)) {
                        item.playEffect(delay);
                        delay += 0.2;
                    }
                    else
                        break;
                }
                return [2 /*return*/];
            });
        });
    };
    return ListEffectDemo;
}());
var LoopListDemo = /** @class */ (function () {
    function LoopListDemo() {
    }
    LoopListDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("LoopList");
                fgui.UIPackage.addPackage("LoopList");
                this._view = fgui.UIPackage.createObject("LoopList", "Main").asCom;
                this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                fgui.GRoot.inst.addChild(this._view);
                this._list = this._view.getChild("list").asList;
                this._list.setVirtualAndLoop();
                this._list.itemRenderer = this.renderListItem;
                this._list.callbackThisObj = this;
                this._list.numItems = 5;
                this._list.scrollPane.on(fgui.ScrollPane.SCROLL, this.doSpecialEffect, this);
                this.doSpecialEffect();
                return [2 /*return*/];
            });
        });
    };
    LoopListDemo.prototype.doSpecialEffect = function () {
        //change the scale according to the distance to the middle
        var midX = this._list.scrollPane.posX + this._list.viewWidth / 2;
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
            var obj = this._list.getChildAt(i);
            var dist = Math.abs(midX - obj.x - obj.width / 2);
            if (dist > obj.width) //no intersection
                obj.setScale(1, 1);
            else {
                var ss = 1 + (1 - dist / obj.width) * 0.24;
                obj.setScale(ss, ss);
            }
        }
        this._view.getChild("n3").text = "" + ((this._list.getFirstChildInView() + 1) % this._list.numItems);
    };
    LoopListDemo.prototype.renderListItem = function (index, obj) {
        var item = obj.asButton;
        item.setPivot(0.5, 0.5);
        item.icon = fgui.UIPackage.getItemURL("LoopList", "n" + (index + 1));
    };
    return LoopListDemo;
}());
var MailItem = /** @class */ (function (_super) {
    __extends(MailItem, _super);
    function MailItem() {
        return _super.call(this) || this;
    }
    MailItem.prototype.onConstruct = function () {
        this._timeText = this.getChild("timeText").asTextField;
        this._readController = this.getController("IsRead");
        this._fetchController = this.getController("c1");
        this._trans = this.getTransition("t0");
    };
    MailItem.prototype.setTime = function (value) {
        this._timeText.text = value;
    };
    MailItem.prototype.setRead = function (value) {
        this._readController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.setFetched = function (value) {
        this._fetchController.selectedIndex = value ? 1 : 0;
    };
    MailItem.prototype.playEffect = function (delay) {
        this.visible = false;
        this._trans.play(null, null, null, 1, delay);
    };
    return MailItem;
}(fgui.GButton));
var ModalWaitingDemo = /** @class */ (function () {
    function ModalWaitingDemo() {
    }
    ModalWaitingDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await fgui.UIPackage.loadPackage("ModalWaiting");
                    return [4 /*yield*/, fgui.UIPackage.addPackage("ModalWaiting")];
                    case 1:
                        //await fgui.UIPackage.loadPackage("ModalWaiting");
                        _a.sent();
                        fgui.UIConfig.globalModalWaiting = "ui://ModalWaiting/GlobalModalWaiting";
                        fgui.UIConfig.windowModalWaiting = "ui://ModalWaiting/WindowModalWaiting";
                        this._view = fgui.UIPackage.createObject("ModalWaiting", "Main").asCom;
                        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
                        fgui.GRoot.inst.addChild(this._view);
                        this._testWin = new TestWin();
                        this._view.getChild("n0").onClick(function () { this._testWin.show(); }, this);
                        //这里模拟一个要锁住全屏的等待过程
                        fgui.GRoot.inst.showModalWait();
                        fgui.GTimer.inst.add(3000, 1, function () {
                            fgui.GRoot.inst.closeModalWait();
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    return ModalWaitingDemo;
}());
var PullToRefreshDemo = /** @class */ (function () {
    function PullToRefreshDemo() {
    }
    PullToRefreshDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("PullToRefresh");
                fgui.UIPackage.addPackage("PullToRefresh");
                fgui.UIObjectFactory.setExtension("ui://PullToRefresh/Header", ScrollPaneHeader);
                this._view = fgui.UIPackage.createObject("PullToRefresh", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._list1 = this._view.getChild("list1").asList;
                this._list1.itemRenderer = this.renderListItem1;
                this._list1.callbackThisObj = this;
                this._list1.setVirtual();
                this._list1.numItems = 1;
                this._list1.scrollPane.on(fgui.ScrollPane.PULL_DOWN_RELEASE, this.onPullDownToRefresh, this);
                this._list2 = this._view.getChild("list2").asList;
                this._list2.itemRenderer = this.renderListItem2;
                this._list2.callbackThisObj = this;
                this._list2.setVirtual();
                this._list2.numItems = 1;
                this._list2.scrollPane.on(fgui.ScrollPane.PULL_UP_RELEASE, this.onPullUpToRefresh, this);
                return [2 /*return*/];
            });
        });
    };
    PullToRefreshDemo.prototype.renderListItem1 = function (index, item) {
        item.text = "Item " + (this._list1.numItems - index - 1);
    };
    PullToRefreshDemo.prototype.renderListItem2 = function (index, item) {
        item.text = "Item " + index;
    };
    PullToRefreshDemo.prototype.onPullDownToRefresh = function (evt) {
        var header = (this._list1.scrollPane.header);
        if (header.readyToRefresh) {
            header.setRefreshStatus(2);
            this._list1.scrollPane.lockHeader(header.sourceHeight);
            //Simulate a async resquest
            fgui.GTimer.inst.add(2000, 1, function () {
                this._list1.numItems += 5;
                //Refresh completed
                header.setRefreshStatus(3);
                this._list1.scrollPane.lockHeader(35);
                fgui.GTimer.inst.add(2000, 1, function () {
                    header.setRefreshStatus(0);
                    this._list1.scrollPane.lockHeader(0);
                }, this);
            }, this);
        }
    };
    PullToRefreshDemo.prototype.onPullUpToRefresh = function (evt) {
        var footer = this._list2.scrollPane.footer.asCom;
        footer.getController("c1").selectedIndex = 1;
        this._list2.scrollPane.lockFooter(footer.sourceHeight);
        //Simulate a async resquest
        fgui.GTimer.inst.add(2000, 1, function () {
            this._list2.numItems += 5;
            //Refresh completed
            footer.getController("c1").selectedIndex = 0;
            this._list2.scrollPane.lockFooter(0);
        }, this);
    };
    return PullToRefreshDemo;
}());
var ScrollPaneDemo = /** @class */ (function () {
    function ScrollPaneDemo() {
    }
    ScrollPaneDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("ScrollPane");
                fgui.UIPackage.addPackage("ScrollPane");
                this._view = fgui.UIPackage.createObject("ScrollPane", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._list = this._view.getChild("list").asList;
                this._list.itemRenderer = this.renderListItem;
                this._list.callbackThisObj = this;
                this._list.setVirtual();
                this._list.numItems = 1000;
                this._list.on(fairygui.InteractiveEvents.Down, this.onClickList, this);
                return [2 /*return*/];
            });
        });
    };
    ScrollPaneDemo.prototype.renderListItem = function (index, item) {
        item.title = "Item " + index;
        item.scrollPane.posX = 0; //reset scroll pos
        item.getChild("b0").onClick(this.onClickStick, this);
        item.getChild("b1").onClick(this.onClickDelete, this);
    };
    ScrollPaneDemo.prototype.onClickList = function (evt) {
        //点击列表时，查找是否有项目处于编辑状态， 如果有就归位
        var touchTarget = fgui.GRoot.inst.getObjectUnderPoint(evt.data.global.x, evt.data.global.x);
        var cnt = this._list.numChildren;
        for (var i = 0; i < cnt; i++) {
            var item = this._list.getChildAt(i).asButton;
            if (item.scrollPane.posX != 0) {
                //Check if clicked on the button
                if (item.getChild("b0").asButton.isAncestorOf(touchTarget)
                    || item.getChild("b1").asButton.isAncestorOf(touchTarget)) {
                    return;
                }
                item.scrollPane.setPosX(0, true);
                //取消滚动面板可能发生的拉动。
                item.scrollPane.cancelDragging();
                this._list.scrollPane.cancelDragging();
                break;
            }
        }
    };
    ScrollPaneDemo.prototype.onClickStick = function (evt) {
        this._view.getChild("txt").text = "Stick " + evt.gObject.parent.text;
    };
    ScrollPaneDemo.prototype.onClickDelete = function (evt) {
        this._view.getChild("txt").text = "Delete " + evt.gObject.parent.text;
    };
    return ScrollPaneDemo;
}());
var ScrollPaneHeader = /** @class */ (function (_super) {
    __extends(ScrollPaneHeader, _super);
    function ScrollPaneHeader() {
        return _super.call(this) || this;
    }
    ScrollPaneHeader.prototype.onConstruct = function () {
        this._c1 = this.getController("c1");
        this.on(fgui.GObject.SIZE_CHANGED, this.onSizeChanged, this);
    };
    ScrollPaneHeader.prototype.onSizeChanged = function () {
        if (this._c1.selectedIndex == 2 || this._c1.selectedIndex == 3)
            return;
        if (this.height > this.sourceHeight)
            this._c1.selectedIndex = 1;
        else
            this._c1.selectedIndex = 0;
    };
    Object.defineProperty(ScrollPaneHeader.prototype, "readyToRefresh", {
        get: function () {
            return this._c1.selectedIndex == 1;
        },
        enumerable: true,
        configurable: true
    });
    ScrollPaneHeader.prototype.setRefreshStatus = function (value) {
        this._c1.selectedIndex = value;
    };
    return ScrollPaneHeader;
}(fgui.GComponent));
// class TestDemo {
//     private _view: fgui.GComponent;
//     private _backBtn: fgui.GObject;
//     private _demoContainer: fgui.GComponent;
//     private _cc: fgui.Controller;
//     private _demoObjects: any;
//     public constructor() {
//     }
//     public async start() {
//         //await fgui.UIPackage.loadPackage("Basics");
//         fgui.UIPackage.addPackage("Basics");
//         fgui.UIConfig.verticalScrollBar = "ui://Basics/ScrollBar_VT";
//         fgui.UIConfig.horizontalScrollBar = "ui://Basics/ScrollBar_HZ";
//         fgui.UIConfig.popupMenu = "ui://Basics/PopupMenu";
//         fgui.UIConfig.buttonSound = "ui://Basics/click";
//         this._view = fgui.UIPackage.createObject("Basics", "Main").asCom;
//         this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
//         fgui.GRoot.inst.addChild(this._view);
//         this._backBtn = this._view.getChild("btn_Back");
//         this._backBtn.visible = false;
//         this._backBtn.onClick(this.onClickBack, this);
//         this._demoContainer = this._view.getChild("container").asCom;
//         this._cc = this._view.getController("c1");
//         var cnt: number = this._view.numChildren;
//         for (var i: number = 0; i < cnt; i++) {
//             var obj: fgui.GObject = this._view.getChildAt(i);
//             if (obj.group != null && obj.group.name == "btns")
//                 obj.onClick(this.runDemo, this);
//         }
//         this._demoObjects = {};
//     }
//     destroy() {
//         fgui.UIConfig.verticalScrollBar = "";
//         fgui.UIConfig.horizontalScrollBar = "";
//         fgui.UIConfig.popupMenu = "";
//         fgui.UIConfig.buttonSound = "";
//         fgui.UIPackage.removePackage("Basics");
//     }
//     private runDemo(evt: Event): void {
//         var type: string = (<fgui.GObject><any>(evt.currentTarget)).name.substr(4);
//         var obj: fgui.GComponent = this._demoObjects[type];
//         if (obj == null) {
//             obj = fgui.UIPackage.createObject("Basics", "Demo_" + type).asCom;
//             this._demoObjects[type] = obj;
//         }
//         this._demoContainer.removeChildren();
//         this._demoContainer.addChild(obj);
//         this._cc.selectedIndex = 1;
//         this._backBtn.visible = true;
//         switch (type) {
//             case "Button":
//                 this.playButton();
//                 break;
//             case "Text":
//                 this.playText();
//                 break;
//             case "Window":
//                 this.playWindow();
//                 break;
//             case "Popup":
//                 this.playPopup();
//                 break;
//             case "Drag&Drop":
//                 this.playDragDrop();
//                 break;
//             case "Depth":
//                 this.playDepth();
//                 break;
//             case "Grid":
//                 this.playGrid();
//                 break;
//             case "ProgressBar":
//                 this.playProgressBar();
//                 break;
//         }
//     }
//     private onClickBack(evt: Event): void {
//         this._cc.selectedIndex = 0;
//         this._backBtn.visible = false;
//     }
//     //------------------------------
//     private playButton(): void {
//         var obj: fgui.GComponent = this._demoObjects["Button"];
//         obj.getChild("n34").onClick(this.__clickButton, this);
//     }
//     private __clickButton(evt: PIXI.interaction.InteractionEvent): void {
//         console.log("click button");
//     }
//     //------------------------------
//     private playText(): void {
//         var obj: fgui.GComponent = this._demoObjects["Text"];
//         //obj.getChild("n12").asRichTextField.addEventListener(egret.TextEvent.LINK, this.__clickLink, this);
//         obj.getChild("n25").onClick(this.__clickGetInput, this);
//     }
//     private __clickLink(evt: PIXI.interaction.InteractionEvent): void {
//         var obj: fgui.GRichTextField = <fgui.GRichTextField><any>evt.currentTarget;
//         //obj.text = "[img]ui://9leh0eyft9fj5f[/img][color=#FF0000]你点击了链接[/color]：" + evt.text;
//     }
//     private __clickGetInput(evt: PIXI.interaction.InteractionEvent): void {
//         var obj: fgui.GComponent = this._demoObjects["Text"];
//         obj.getChild("n24").text = obj.getChild("n22").text;
//     }
//     //------------------------------
//     private _winA: fgui.Window;
//     private _winB: fgui.Window;
//     private playWindow(): void {
//         var obj: fgui.GComponent = this._demoObjects["Window"];
//         obj.getChild("n0").onClick(this.__clickWindowA, this);
//         obj.getChild("n1").onClick(this.__clickWindowB, this);
//     }
//     private __clickWindowA(evt: PIXI.interaction.InteractionEvent): void {
//         if (this._winA == null){
//             //this._winA = new WindowA();
//         }
//         //this._winA.show();
//     }
//     private __clickWindowB(evt: PIXI.interaction.InteractionEvent): void {
//         if (this._winB == null){
//             //this._winB = new WindowB();
//         }
//         //this._winB.show();
//     }
//     //------------------------------
//     private _pm: fgui.PopupMenu;
//     private _popupCom: fgui.GComponent;
//     private playPopup(): void {
//         if (this._pm == null) {
//             this._pm = new fgui.PopupMenu();
//             this._pm.addItem("Item 1");
//             this._pm.addItem("Item 2");
//             this._pm.addItem("Item 3");
//             this._pm.addItem("Item 4");
//             if (this._popupCom == null) {
//                 this._popupCom = fgui.UIPackage.createObject("Basics", "Component12").asCom;
//                 this._popupCom.center();
//             }
//         }
//         var obj: fgui.GComponent = this._demoObjects["Popup"];
//         var btn: fgui.GObject = obj.getChild("n0");
//         btn.onClick(this.__clickPopup1, this);
//         var btn2: fgui.GObject = obj.getChild("n1");
//         btn2.onClick(this.__clickPopup2, this);
//     }
//     private __clickPopup1(evt: PIXI.interaction.InteractionEvent): void {
//         var btn: fgui.GObject = <fgui.GObject><any>evt.currentTarget;
//         //this._pm.show(btn, true);
//     }
//     private __clickPopup2(evt: PIXI.interaction.InteractionEvent): void {
//         fgui.GRoot.inst.showPopup(this._popupCom);
//     }
//     //------------------------------
//     private playDragDrop(): void {
//         var obj: fgui.GComponent = this._demoObjects["Drag&Drop"];
//         var btnA: fgui.GObject = obj.getChild("a");
//         btnA.draggable = true;
//         var btnB: fgui.GButton = obj.getChild("b").asButton;
//         btnB.draggable = true;
//         //btnB.addEventListener(fgui.DragEvent.DRAG_START, this.__onDragStart, this);
//         var btnC: fgui.GButton = obj.getChild("c").asButton;
//         btnC.icon = null;
//         //btnC.addEventListener(fgui.DropEvent.DROP, this.__onDrop, this);
//         var btnD: fgui.GObject = obj.getChild("d");
//         btnD.draggable = true;
//         var bounds: fgui.GObject = obj.getChild("bounds");
//         //var rect: egret.Rectangle = new egret.Rectangle();
//         //bounds.localToGlobalRect(0, 0, bounds.width, bounds.height, rect);
//         //fgui.GRoot.inst.globalToLocalRect(rect.x, rect.y, rect.width, rect.height, rect);
//         //因为这时候面板还在从右往左动，所以rect不准确，需要用相对位置算出最终停下来的范围
//         //rect.x -= obj.parent.x;
//         //btnD.dragBounds = rect;
//     }
//     private __onDragStart(evt: fgui.DragEvent): void {
//         //取消对原目标的拖动，换成一个替代品
//         //evt.preventDefault();
//         //var btn: fgui.GButton = <fgui.GButton><any>evt.currentTarget;
//         //fgui.DragDropManager.inst.startDrag(btn, btn.icon, btn.icon);
//     }
//     private __onDrop(evt: PIXI.interaction.InteractionEvent): void {
//         var btn: fgui.GButton = <fgui.GButton><any>evt.currentTarget;
//         //btn.icon = evt.source;
//     }
//     //------------------------------
//     private playDepth(): void {
//         var obj: fgui.GComponent = this._demoObjects["Depth"];
//         var testContainer: fgui.GComponent = obj.getChild("n22").asCom;
//         var fixedObj: fgui.GObject = testContainer.getChild("n0");
//         fixedObj.sortingOrder = 100;
//         fixedObj.draggable = true;
//         var numChildren: number = testContainer.numChildren;
//         var i: number = 0;
//         while (i < numChildren) {
//             var child: fgui.GObject = testContainer.getChildAt(i);
//             if (child != fixedObj) {
//                 testContainer.removeChildAt(i);
//                 numChildren--;
//             }
//             else
//                 i++;
//         }
//         //var startPos: egret.Point = new egret.Point(fixedObj.x, fixedObj.y);
//         // obj.getChild("btn0").addClickListener(function (): void {
//         //     var graph: fgui.GGraph = new fgui.GGraph();
//         //     startPos.x += 10;
//         //     startPos.y += 10;
//         //     graph.setXY(startPos.x, startPos.y);
//         //     graph.setSize(150, 150);
//         //     graph.drawRect(1, 0, 1, 0xFF0000, 1);
//         //     obj.getChild("n22").asCom.addChild(graph);
//         // }, this);
//         // obj.getChild("btn1").addClickListener(function (): void {
//         //     var graph: fgui.GGraph = new fgui.GGraph();
//         //     startPos.x += 10;
//         //     startPos.y += 10;
//         //     graph.setXY(startPos.x, startPos.y);
//         //     graph.setSize(150, 150);
//         //     graph.drawRect(1, 0, 1, 0x00FF00, 1);
//         //     graph.sortingOrder = 200;
//         //     obj.getChild("n22").asCom.addChild(graph);
//         // }, this);
//     }
//     //------------------------------
//     private playGrid(): void {
//         var obj: fgui.GComponent = this._demoObjects["Grid"];
//         var list1: fgui.GList = obj.getChild("list1").asList;
//         list1.removeChildrenToPool();
//         var testNames: Array<string> = ["苹果手机操作系统", "安卓手机操作系统", "微软手机操作系统", "微软桌面操作系统", "苹果桌面操作系统", "未知操作系统"];
//         var testColors: Array<number> = [0xFFFF00, 0xFF0000, 0xFFFFFF, 0x0000FF];
//         var cnt: number = testNames.length;
//         for (var i: number = 0; i < cnt; i++) {
//             var item: fgui.GButton = list1.addItemFromPool().asButton;
//             item.getChild("t0").text = "" + (i + 1);
//             item.getChild("t1").text = testNames[i];
//             item.getChild("t2").asTextField.color = testColors[Math.floor(Math.random() * 4)];
//             item.getChild("star").asProgress.value = (Math.floor(Math.random() * 3) + 1) / 3 * 100;
//         }
//         var list2: fgui.GList = obj.getChild("list2").asList;
//         list2.removeChildrenToPool();
//         for (var i: number = 0; i < cnt; i++) {
//             var item: fgui.GButton = list2.addItemFromPool().asButton;
//             item.getChild("cb").asButton.selected = false;
//             item.getChild("t1").text = testNames[i];
//             item.getChild("mc").asMovieClip.playing = i % 2 == 0;
//             item.getChild("t3").text = "" + Math.floor(Math.random() * 10000)
//         }
//     }
//     //------------------------------
//     private playProgressBar(): void {
//         // var obj: fgui.GComponent = this._demoObjects["ProgressBar"];
//         // fgui.GTimers.inst.add(40, 0, this.__playProgress, this);
//         // obj.addEventListener(egret.Event.REMOVED_FROM_STAGE, this.__removeTimer, this);
//     }
//     private __removeTimer(): void {
//         // fgui.GTimers.inst.remove(this.__playProgress, this);
//     }
//     private __playProgress(): void {
//         var obj: fgui.GComponent = this._demoObjects["ProgressBar"];
//         var cnt: number = obj.numChildren;
//         for (var i: number = 0; i < cnt; i++) {
//             var child: fgui.GProgressBar = obj.getChildAt(i) as fgui.GProgressBar;
//             if (child != null) {
//                 child.value += 1;
//                 if (child.value > child.max)
//                     child.value = 0;
//             }
//         }
//     }
// }
var TestWin = /** @class */ (function (_super) {
    __extends(TestWin, _super);
    function TestWin() {
        return _super.call(this) || this;
    }
    TestWin.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("ModalWaiting", "TestWin").asCom;
        this.contentPane.getChild("n1").onClick(this.onClickStart, this);
        this.center();
    };
    TestWin.prototype.onClickStart = function () {
        //这里模拟一个要锁住当前窗口的过程，在锁定过程中，窗口仍然是可以移动和关闭的
        this.showModalWait();
        fgui.GTween.delayedCall(3).onComplete(function () { this.closeModalWait(); }, this);
    };
    return TestWin;
}(fgui.Window));
var WindowA = /** @class */ (function (_super) {
    __extends(WindowA, _super);
    function WindowA() {
        return _super.call(this) || this;
    }
    WindowA.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowA").asCom;
        this.center();
    };
    WindowA.prototype.onShown = function () {
        var list = this.contentPane.getChild("n6").asList;
        list.removeChildrenToPool();
        for (var i = 0; i < 6; i++) {
            var item = list.addItemFromPool().asButton;
            item.title = "" + i;
            item.icon = fgui.UIPackage.getItemURL("Basics", "r4");
        }
    };
    return WindowA;
}(fgui.Window));
var WindowB = /** @class */ (function (_super) {
    __extends(WindowB, _super);
    function WindowB() {
        return _super.call(this) || this;
    }
    WindowB.prototype.onInit = function () {
        this.contentPane = fgui.UIPackage.createObject("Basics", "WindowB").asCom;
        this.center();
        //弹出窗口的动效已中心为轴心
        this.setPivot(0.5, 0.5);
    };
    WindowB.prototype.doShowAnimation = function () {
        this.setScale(0.1, 0.1);
        fgui.GTween.to2(0.1, 0.1, 1, 1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.onShown, this);
    };
    WindowB.prototype.doHideAnimation = function () {
        fgui.GTween.to2(1, 1, 0.1, 0.1, 0.3)
            .setTarget(this, this.setScale)
            .setEase(fgui.EaseType.QuadOut)
            .onComplete(this.hideImmediately, this);
    };
    WindowB.prototype.onShown = function () {
        this.contentPane.getTransition("t1").play();
    };
    WindowB.prototype.onHide = function () {
        this.contentPane.getTransition("t1").stop();
    };
    return WindowB;
}(fgui.Window));
var TransitionDemo = /** @class */ (function () {
    function TransitionDemo() {
    }
    TransitionDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                //await fgui.UIPackage.loadPackage("Transition");
                fgui.UIPackage.addPackage("Transition");
                this._view = fgui.UIPackage.createObject("Transition", "Main").asCom;
                this._view.makeFullScreen();
                fgui.GRoot.inst.addChild(this._view);
                this._btnGroup = this._view.getChild("g0").asGroup;
                this._g1 = fgui.UIPackage.createObject("Transition", "BOSS").asCom;
                this._g2 = fgui.UIPackage.createObject("Transition", "BOSS_SKILL").asCom;
                this._g3 = fgui.UIPackage.createObject("Transition", "TRAP").asCom;
                this._g4 = fgui.UIPackage.createObject("Transition", "GoodHit").asCom;
                this._g5 = fgui.UIPackage.createObject("Transition", "PowerUp").asCom;
                this._g6 = fgui.UIPackage.createObject("Transition", "PathDemo").asCom;
                //play_num_now是在编辑器里设定的名称，这里表示播放到'play_num_now'这个位置时才开始播放数字变化效果
                this._g5.getTransition("t0").setHook("play_num_now", this.__playNum, this);
                this._view.getChild("btn0").onClick(function () { this.__play(this._g1); }, this);
                this._view.getChild("btn1").onClick(function () { this.__play(this._g2); }, this);
                this._view.getChild("btn2").onClick(function () { this.__play(this._g3); }, this);
                this._view.getChild("btn3").onClick(this.__play4, this);
                this._view.getChild("btn4").onClick(this.__play5, this);
                this._view.getChild("btn5").onClick(function () { this.__play(this._g6); }, this);
                return [2 /*return*/];
            });
        });
    };
    TransitionDemo.prototype.__play = function (target) {
        var _this = this;
        this._btnGroup.visible = false;
        fgui.GRoot.inst.addChild(target);
        var t = target.getTransition("t0");
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(target);
        }, this);
    };
    TransitionDemo.prototype.__play4 = function () {
        var _this = this;
        this._btnGroup.visible = false;
        this._g4.x = fgui.GRoot.inst.width - this._g4.width - 20;
        this._g4.y = 100;
        fgui.GRoot.inst.addChild(this._g4);
        var t = this._g4.getTransition("t0");
        //播放3次
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(_this._g4);
        }, this, null, 3);
    };
    TransitionDemo.prototype.__play5 = function () {
        var _this = this;
        this._btnGroup.visible = false;
        this._g5.x = 20;
        this._g5.y = fgui.GRoot.inst.height - this._g5.height - 100;
        fgui.GRoot.inst.addChild(this._g5);
        var t = this._g5.getTransition("t0");
        this._startValue = 10000;
        var add = Math.ceil(Math.random() * 2000 + 1000);
        this._endValue = this._startValue + add;
        this._g5.getChild("value").text = "" + this._startValue;
        this._g5.getChild("add_value").text = "+" + add;
        t.play(function () {
            _this._btnGroup.visible = true;
            fgui.GRoot.inst.removeChild(_this._g5);
        }, this);
    };
    TransitionDemo.prototype.__playNum = function () {
        //这里演示了一个数字变化的过程
        fgui.GTween.to(this._startValue, this._endValue, 0.3)
            .setEase(fgui.EaseType.Linear)
            .onUpdate(function (tweener) {
            this._g5.getChild("value").text = "" + Math.floor(tweener.value.x);
        }, this);
    };
    return TransitionDemo;
}());
var TreeViewDemo = /** @class */ (function () {
    function TreeViewDemo() {
    }
    TreeViewDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            var topNode, i, node, aFolderNode, i, node, i, node, anotherTopNode;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await fgui.UIPackage.loadPackage("TreeView");
                    return [4 /*yield*/, fgui.UIPackage.addPackage("TreeView")];
                    case 1:
                        //await fgui.UIPackage.loadPackage("TreeView");
                        _a.sent();
                        this._view = fgui.UIPackage.createObject("TreeView", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._fileURL = "ui://TreeView/file";
                        this._tree1 = this._view.getChild("tree").asTree;
                        this._tree1.on(fgui.InteractiveEvents.Click, this.__clickNode, this);
                        this._tree2 = this._view.getChild("tree2").asTree;
                        this._tree2.on(fgui.InteractiveEvents.Click, this.__clickNode, this);
                        this._tree2.treeNodeRender = this.renderTreeNode;
                        this._tree2.callbackThisObj = this;
                        topNode = new fgui.GTreeNode(true);
                        topNode.data = "I'm a top node";
                        this._tree2.rootNode.addChild(topNode);
                        for (i = 0; i < 5; i++) {
                            node = new fgui.GTreeNode(false);
                            node.data = "Hello " + i;
                            topNode.addChild(node);
                        }
                        aFolderNode = new fgui.GTreeNode(true);
                        aFolderNode.data = "A folder node";
                        topNode.addChild(aFolderNode);
                        for (i = 0; i < 5; i++) {
                            node = new fgui.GTreeNode(false);
                            node.data = "Good " + i;
                            aFolderNode.addChild(node);
                        }
                        for (i = 0; i < 3; i++) {
                            node = new fgui.GTreeNode(false);
                            node.data = "World " + i;
                            topNode.addChild(node);
                        }
                        anotherTopNode = new fgui.GTreeNode(false);
                        anotherTopNode.data = ["I'm a top node too", "ui://TreeView/heart"];
                        this._tree2.rootNode.addChild(anotherTopNode);
                        return [2 /*return*/];
                }
            });
        });
    };
    TreeViewDemo.prototype.renderTreeNode = function (node, obj) {
        if (node.isFolder) {
            obj.text = node.data;
        }
        else if (node.data instanceof Array) {
            obj.icon = node.data[1];
            obj.text = node.data[0];
        }
        else {
            obj.icon = this._fileURL;
            obj.text = node.data;
        }
    };
    TreeViewDemo.prototype.__clickNode = function (evt) {
        var node = evt.itemObject.treeNode;
        console.log(node.text);
    };
    return TreeViewDemo;
}());
var VirtualListDemo = /** @class */ (function () {
    function VirtualListDemo() {
    }
    VirtualListDemo.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    //await fgui.UIPackage.loadPackage("VirtualList");
                    return [4 /*yield*/, fgui.UIPackage.addPackage("VirtualList")];
                    case 1:
                        //await fgui.UIPackage.loadPackage("VirtualList");
                        _a.sent();
                        fgui.UIObjectFactory.setExtension("ui://VirtualList/mailItem", MailItem);
                        this._view = fgui.UIPackage.createObject("VirtualList", "Main").asCom;
                        this._view.makeFullScreen();
                        fgui.GRoot.inst.addChild(this._view);
                        this._view.getChild("n6").onClick(function () { this._list.addSelection(500, true); }, this);
                        this._view.getChild("n7").onClick(function () { this._list.scrollPane.scrollTop(); }, this);
                        this._view.getChild("n8").onClick(function () { this._list.scrollPane.scrollBottom(); }, this);
                        this._list = this._view.getChild("mailList").asList;
                        this._list.setVirtual();
                        this._list.itemRenderer = this.renderListItem;
                        this._list.callbackThisObj = this;
                        this._list.numItems = 1000;
                        return [2 /*return*/];
                }
            });
        });
    };
    VirtualListDemo.prototype.renderListItem = function (index, obj) {
        var item = obj;
        item.setFetched(index % 3 == 0);
        item.setRead(index % 2 == 0);
        item.setTime("5 Nov 2015 16:24:33");
        item.title = index + " Mail title here";
    };
    return VirtualListDemo;
}());
