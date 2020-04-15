/// <reference path="./pixi/MainMenu.ts" />

class Application {
    app : PIXI.Application;
    engine : BABYLON.Engine;
    canvas : HTMLCanvasElement;
    sphere : BABYLON.Mesh;
    camera : BABYLON.FreeCamera;
    /**
     * start run application 
     */
    public start() : void {

        this._startBabylon();
        this._startPIXI();
        
    }

    private _startPIXI() {
        
        //let view = document.getElementById("pixiJsRenderCanvas") as HTMLCanvasElement;
        let view = this.canvas;
         this.app  = new PIXI.Application({
            view : view,
            antialias : true,
            forceCanvas : false,
            transparent : true,
            clearBeforeRender : false,
            autoStart : false,
        });
    
        fgui.GRoot.inst.attachTo(this.app,{
            designHeight : 640,
            designWidth : 1136,
            scaleMode: fgui.StageScaleMode.EXACT_FIT,
            orientation: fgui.StageOrientation.LANDSCAPE,
            alignV: fgui.StageAlign.CENTER,
            alignH: fgui.StageAlign.CENTER
        });

        let menu = new MainMenu();
        menu.enter();
    }

    private _startBabylon() {
        this.canvas = document.getElementById("babylonRenderCanvas") as HTMLCanvasElement;
        this.engine = new BABYLON.Engine(this.canvas, true);
        // This creates a basic Babylon Scene object (non-mesh)
        let scene = new BABYLON.Scene(this.engine);
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

        this.engine.runRenderLoop(() => {
            if (scene) {
                scene.render();
                this.engine.wipeCaches(true);
            }
            if (this.app) {
                this.app.renderer.reset();
                this.app.render();
            }
        });
    }
}