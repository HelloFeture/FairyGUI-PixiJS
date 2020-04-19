class BagDemo {
    private _view: fgui.GComponent;
    private _bagWindow: fgui.Window;

    constructor() {
    }

    public async start() {
        //await fgui.UIPackage.loadPackage("Bag");
        fgui.UIPackage.addPackage("Bag");
        this._view = fgui.UIPackage.createObject("Bag", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);

        this._bagWindow = new BagWindow();
        this._view.getChild("bagBtn").onClick(() => { this._bagWindow.show(); }, this);
    }

    public destroy() {
        fgui.UIPackage.removePackage("Bag");
    }
}

class BagWindow extends fgui.Window {
    public constructor() {
        super();
    }

    protected onInit(): void {
        this.contentPane = fgui.UIPackage.createObject("Bag", "BagWin").asCom;
        this.center();
    }

    protected onShown(): void {
        var list: fgui.GList = this.contentPane.getChild("list").asList;
        list.on(fgui.InteractiveEvents.Click, this.onClickItem, this);
        list.itemRenderer = this.renderListItem;
        list.callbackThisObj = this;
        list.setVirtual();
        list.numItems = 45;
    }

    private renderListItem(index: number, obj: fgui.GObject): void {
        obj.icon = "resource/assets/Icons/i" + Math.floor(Math.random() * 10) +".png";
        obj.text = "" + Math.floor(Math.random() * 100);
    }
    private onClickItem(...args : any[]): void {
        console.log(...args);
    
    }
    // private onClickItem(evt: fgui.InteractiveEvents, obj : fgui.GObject): void {
    //     console.log(evt, obj);
    //     this.contentPane.getChild("n11").asLoader.url = obj.icon;
    //     this.contentPane.getChild("n13").text = obj.icon;
    // }
}