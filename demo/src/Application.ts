
import * as PIXI from "pixi.js";

export class Application {
    /**
     * start run application 
     */
    public start() : void {
        let view = document.getElementById("pixiJsRenderCanvas") as HTMLCanvasElement;
        let app : PIXI.Application = new PIXI.Application({
            view : view,
            antialias : true,
            forceCanvas : false,
        });

        fgui.GRoot.inst.attachTo(app,{
            designHeight : 640,
            designWidth : 1136,
            scaleMode: fgui.StageScaleMode.EXACT_FIT,
            orientation: fgui.StageOrientation.LANDSCAPE,
            alignV: fgui.StageAlign.CENTER,
            alignH: fgui.StageAlign.CENTER
        });

        let loader = new fgui.utils.AssetLoader();

    }   
}