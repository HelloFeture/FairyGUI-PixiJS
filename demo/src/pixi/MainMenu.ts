interface TT {
    owner : any;
}
class MT extends PIXI.Text implements TT {
    owner : any;
    protected _minHeight:number;
    protected _minHeightID:number = -1;
    public constructor() {
        super(null);
        this.owner = null;
        
        this.interactive = this.interactiveChildren = false;
        this.texture.noFrame = false;
        this._minHeight = -1;
    }
}

class MainMenu {
    private _view: fgui.GComponent;

    constructor() {
        
    }

    public enter() : void {
        this.__loadAndStart();
    }

    private async __loadAndStart()  {

        PIXI.LoaderResource.setExtensionLoadType(".fui", PIXI.LoaderResource.LOAD_TYPE.XHR);
        PIXI.LoaderResource.setExtensionXhrType(".fui", PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER);
        let loader : fgui.utils.AssetLoader = new fgui.utils.AssetLoader("assetConfig", false);
        loader.easyAdd("asset", "asset.json");
        let resDic = await loader.loadAsync();
        if (resDic instanceof Error) {
            console.error(resDic);
            return;
        }

        let data = resDic["asset"];
        if (!data) {
            console.error("载入配置文件错误");
            return ;
        }
        let items  = data.data.default;
        loader.reset();
        loader.groupName = null; //config.name;
        loader.autoAddToAssetManager = true;
        loader.addGroup(items);
        
        let result = await loader.loadAsync();
        if (result instanceof Error) {
            console.error(result);
            return;
        }

        console.log(fgui.utils.AssetManager.inst.assetGroup);

        this.__start();
    }



    private __start() : void {

        fgui.UIPackage.addPackage("Test");
        this._view = fgui.UIPackage.createObject("Test", "Main").asCom;
        this._view.setSize(fgui.GRoot.inst.width, fgui.GRoot.inst.height);
        fgui.GRoot.inst.addChild(this._view);
        // let a = new MT();
        // console.log(a);
        // a.text = "dddddddddddddd";
        // let st = a.style as PIXI.TextStyle;
        // st.fill = 0xFFFFFF;
        // st.fontSize = 20; 
        // a.x = 200;
        // (fgui.GRoot.inst.displayObject as PIXI.Container).addChild(a);
        // let rs = a.scale.set(2, 2);
        // console.log("a++ ", rs, a.scale);


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
    }

    startDemo(demoClass: any): void {
        this._view.dispose();
        let demo: any = new demoClass();
        demo.start().then(()=> {
            fgui.GRoot.inst.emit("start_demo", false, demo);
        });
    }

    destroy() {
        this._view.dispose();
    }
}