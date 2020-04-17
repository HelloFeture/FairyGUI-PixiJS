
class JoystickModule extends PIXI.utils.EventEmitter {
    private _InitX: number;
    private _InitY: number;
    private _startStageX: number;
    private _startStageY: number;
    private _lastStageX: number;
    private _lastStageY: number;
    private _button: fgui.GButton;
    private _touchArea: fgui.GObject;
    private _thumb: fgui.GObject;
    private _center: fgui.GObject;
    private touchId: number;
    //private _tweener: egret.Tween;
    private _curPos: PIXI.Point;
    
    public static JoystickMoving: string = "JoystickMoving";
    public static JoystickUp: string = "JoystickUp";

    public radius: number;

    public constructor(mainView: fgui.GComponent) {
        super();
        
        this._button = mainView.getChild("joystick").asButton;
        this._button.changeStateOnClick = false;
        this._thumb = this._button.getChild("thumb");
        this._touchArea = mainView.getChild("joystick_touch");
        this._center = mainView.getChild("joystick_center");

        this._InitX = this._center.x + this._center.width / 2;
        this._InitY = this._center.y + this._center.height / 2;
        this.touchId = -1;
        this.radius = 150;
        
        this._curPos = new PIXI.Point();

        this._touchArea.on(fgui.InteractiveEvents.Click,this.onTouchDown,this);
    }

    public Trigger(evt: fgui.IGObjectInteractionEvent): void {
        this.onTouchDown(evt);
    }

    private onTouchDown(evt: fgui.IGObjectInteractionEvent) {
        if(this.touchId == -1)//First touch
        {
            this.touchId = evt.data.pointerId;

            // if(this._tweener != null) {
            //     this._tweener.setPaused(true);
            //     this._tweener = null;
            // }

            fgui.GRoot.inst.globalToLocal(evt.data.global.x,evt.data.global.y,this._curPos);
            var bx: number = this._curPos.x;
            var by: number = this._curPos.y;
            this._button.selected = true;

            if(bx < 0)
                bx = 0;
            else if(bx > this._touchArea.width)
                bx = this._touchArea.width;

            if(by > fgui.GRoot.inst.height)
                by = fgui.GRoot.inst.height;
            else if(by < this._touchArea.y)
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

            var deltaX: number = bx - this._InitX;
            var deltaY: number = by - this._InitY;
            var degrees: number = Math.atan2(deltaY,deltaX) * 180 / Math.PI;
            this._thumb.rotation = degrees + 90;

            fgui.GRoot.inst.nativeStage.on(fairygui.InteractiveEvents.Move,this.OnTouchMove,this);
            fgui.GRoot.inst.nativeStage.on(fairygui.InteractiveEvents.TouchEnd,this.OnTouchUp,this);
        }
    }

    private OnTouchUp(evt: fgui.IGObjectInteractionEvent): void {
        if(this.touchId != -1 && evt.data.pointerId == this.touchId) {
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

            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Move,this.OnTouchMove,this);
            fgui.GRoot.inst.nativeStage.off(fgui.InteractiveEvents.Up,this.OnTouchUp,this);

            this.emit(JoystickModule.JoystickUp,false);
        }
    }

    private OnTouchMove(evt: fgui.IGObjectInteractionEvent): void {
        if(this.touchId != -1 && evt.data.pointerId == this.touchId) {
            var bx: number = evt.data.global.x / fgui.GRoot.contentScaleFactor;
            var by: number = evt.data.global.y / fgui.GRoot.contentScaleFactor;
            var moveX: number = bx - this._lastStageX;
            var moveY: number = by - this._lastStageY;
            this._lastStageX = bx;
            this._lastStageY = by;
            var buttonX: number = this._button.x + moveX;
            var buttonY: number = this._button.y + moveY;

            var offsetX: number = buttonX + this._button.width / 2 - this._startStageX;
            var offsetY: number = buttonY + this._button.height / 2 - this._startStageY;

            var rad: number = Math.atan2(offsetY,offsetX);
            var degree: number = rad * 180 / Math.PI;
            this._thumb.rotation = degree + 90;

            var maxX: number = this.radius * Math.cos(rad);
            var maxY: number = this.radius * Math.sin(rad);
            if(Math.abs(offsetX) > Math.abs(maxX))
                offsetX = maxX;
            if(Math.abs(offsetY) > Math.abs(maxY))
                offsetY = maxY;

            buttonX = this._startStageX + offsetX;
            buttonY = this._startStageY + offsetY;
            if(buttonX < 0)
                buttonX = 0;
            if(buttonY > fgui.GRoot.inst.height)
                buttonY = fgui.GRoot.inst.height;

            this._button.x = buttonX - this._button.width / 2;
            this._button.y = buttonY - this._button.height / 2;

            this.emit(JoystickModule.JoystickMoving,false,degree);
        }
    }
}
