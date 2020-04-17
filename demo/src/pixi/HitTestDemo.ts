class HitTestDemo {
    private _view: fgui.GComponent;

    constructor() {
    }

    public async start() {
        //await fgui.UIPackage.loadPackage("HitTest");
        fgui.UIPackage.addPackage("HitTest");

        this._view = fgui.UIPackage.createObject("HitTest", "Main").asCom;
        this._view.makeFullScreen();
        fgui.GRoot.inst.addChild(this._view);
    }
}
