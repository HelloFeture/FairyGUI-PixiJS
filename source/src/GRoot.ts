namespace fgui {

    export class GRootMouseStatus {
        public touchDown: boolean = false;
        public mouseX: number = 0;
        public mouseY: number = 0;
    }

    export class GRoot extends GComponent {
        public static contentScaleLevel: number = 0;

        private static uniqueID:number = 0;

        private _uiStage: UIStage;

        private _modalLayer: GGraph;
        private _popupStack: GObject[];
        private _justClosedPopups: GObject[];
        private _modalWaitPane: GObject;
        private _focusedObject: GObject;
        private _tooltipWin: GObject;
        private _defaultTooltipWin: GObject;
        private _volumeScale: number;
        private _checkingPopups:boolean;
        private _uid:number;

        private static _inst: GRoot;

        public static touchScreen: boolean;
        public static contentScaleFactor: number = 1;
        public static touchDown: boolean;
        public static ctrlKeyDown: boolean;
        public static shiftKeyDown: boolean;
        public static mouseX: number;
        public static mouseY: number;

        private static _gmStatus = new GRootMouseStatus();

        /**
         * the singleton instance of the GRoot object
         */
        public static get inst(): GRoot {
            if (GRoot._inst == null)
                new GRoot();
            return GRoot._inst;
        }

        /**
         * the current mouse/pointer data
         */
        public static get globalMouseStatus(): GRootMouseStatus {
            return GRoot._gmStatus;
        }
        
        /**
         * the main entry to lauch the UI root, e.g.: GRoot.inst.attachTo(app, options)
         * @param app your PIXI.Application instance to be used in this GRoot instance
         * @param stageOptions stage rotation / resize options
         */
        public attachTo(app: PIXI.Application, stageOptions?: UIStageOptions): void {

            GTimer.inst.setTicker(app.ticker);
            TweenManager._ticker = app.ticker;
            
            if (this._uiStage) {
                this._uiStage.off(DisplayObjectEvent.SIZE_CHANGED, this._winResize, this);
                this._uiStage.nativeStage.off(InteractiveEvents.Down, this._stageDown, this);
                this._uiStage.nativeStage.off(InteractiveEvents.Up, this._stageUp, this);
                this._uiStage.nativeStage.off(InteractiveEvents.Move, this._stageMove, this);
                this._uiStage.nativeStage.removeChild(this._displayObject);
                this._uiStage.dispose();
            }

            this._uiStage = new UIStage(app, stageOptions);
            this._uiStage.on(DisplayObjectEvent.SIZE_CHANGED, this._winResize, this);
            this._uiStage.nativeStage.on(InteractiveEvents.Down, this._stageDown, this);
            this._uiStage.nativeStage.on(InteractiveEvents.Up, this._stageUp, this);
            this._uiStage.nativeStage.on(InteractiveEvents.Move, this._stageMove, this);
            this._uiStage.nativeStage.addChild(this._displayObject);

            this._winResize(this._uiStage);

            if (!this._modalLayer) {
                this._modalLayer = new GGraph();
                this._modalLayer.setSize(this.width, this.height);
                this._modalLayer.drawRect(0, 0, 0, UIConfig.modalLayerColor, UIConfig.modalLayerAlpha);
                this._modalLayer.addRelation(this, RelationType.Size);
            }
        }
        
        public constructor() {
            super();
            if (GRoot._inst == null)
                GRoot._inst = this;

            this.opaque = false;
            this._popupStack = []
            this._justClosedPopups = [];

            this._uid = GRoot.uniqueID++;

            utils.DOMEventManager.inst.on(DisplayObjectEvent.MOUSE_WHEEL, this.dispatchMouseWheel, this);
        }

        public get uniqueID():number {
            return this._uid;
        }

        public get stageWidth(): number {
            return this._uiStage.stageWidth;
        }

        public get stageHeight(): number {
            return this._uiStage.stageHeight;
        }

        public get contentScaleFactor(): number {
            return this._uiStage.resolution;
        }

        public get applicationContext(): PIXI.Application {
            return this._uiStage.applicationContext;
        }

        public get nativeStage(): PIXI.Container {
            return this._uiStage.nativeStage;
        }

        public get orientation():StageOrientation {
            return this._uiStage.orientation;
        }

        public get stageWrapper(): UIStage {
            return this._uiStage;
        }

        protected dispatchMouseWheel(evt:any):void {
            let childUnderMouse = this.getObjectUnderPoint(GRoot.globalMouseStatus.mouseX, GRoot.globalMouseStatus.mouseY);
            if(childUnderMouse != null) { //bubble
                while(childUnderMouse.parent && childUnderMouse.parent != this) {
                    childUnderMouse.emit(DisplayObjectEvent.MOUSE_WHEEL, evt);
                    childUnderMouse = childUnderMouse.parent;
                }
            }
        }

        /**
         * get the objects which are placed underneath the given stage coordinate
         * @param globalX the stage X
         * @param globalY the stage Y
         */
        public getObjectUnderPoint(globalX:number, globalY:number):GObject {
            GRoot.sHelperPoint.set(globalX, globalY);
            let ret: PIXI.DisplayObject = this._uiStage.applicationContext.renderer.plugins.interaction.hitTest(GRoot.sHelperPoint, this.nativeStage);
            return GObject.cast(ret);
        }

        public showWindow(win: Window): void {
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
        }

        public hideWindow(win: Window): void {
            win.hide();
        }

        public hideWindowImmediately(win: Window): void {
            if (win.parent == this)
                this.removeChild(win);

            this.adjustModalLayer();
        }

        public bringToFront(win: Window): void {
            let i: number;
            if (this._modalLayer.parent != null && !win.modal)
                i = this.getChildIndex(this._modalLayer) - 1;
            else
                i = this.numChildren - 1;

            for (; i >= 0; i--) {
                let g: GObject = this.getChildAt(i);
                if (g == win)
                    return;
                if (g instanceof Window)
                    break;
            }

            if (i >= 0)
                this.setChildIndex(win, i);
        }

        public showModalWait(msg: string = null): void {
            if (UIConfig.globalModalWaiting != null) {
                if (this._modalWaitPane == null) {
                    this._modalWaitPane = UIPackage.createObjectFromURL(UIConfig.globalModalWaiting);
                    this._modalWaitPane.addRelation(this, RelationType.Size);
                }
                this._modalWaitPane.setSize(this.width, this.height);
                this.addChild(this._modalWaitPane);
                this._modalWaitPane.text = msg;
            }
        }

        public closeModalWait(): void {
            if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
                this.removeChild(this._modalWaitPane);
        }

        public closeAllExceptModals(): void {
            let arr: GObject[] = this._children.slice();
            arr.forEach(g => {
                if ((g instanceof Window) && !(g as Window).modal)
                    g.hide();
            }, this);
        }

        public closeAllWindows(): void {
            let arr: GObject[] = this._children.slice();
            arr.forEach(g => {
                if (g instanceof Window)
                    g.hide();
            }, this);
        }

        public getTopWindow(): Window {
            let cnt: number = this.numChildren;
            for (let i: number = cnt - 1; i >= 0; i--) {
                let g: GObject = this.getChildAt(i);
                if (g instanceof Window) {
                    return g as Window;
                }
            }

            return null;
        }

        public get hasModalWindow(): boolean {
            return this._modalLayer.parent != null;
        }

        public get modalWaiting(): boolean {
            return this._modalWaitPane && this._modalWaitPane.inContainer;
        }

        public showPopup(popup: GObject, target: GObject = null, dir: PopupDirection = PopupDirection.Auto): void {
            if (this._popupStack.length > 0) {
                let k: number = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (let i: number = this._popupStack.length - 1; i >= k; i--)
                        this.removeChild(this._popupStack.pop());
                }
            }
            this._popupStack.push(popup);

            this.addChild(popup);
            this.adjustModalLayer();

            let pos: PIXI.Point;
            let sizeW: number = 0, sizeH: number = 0;
            if (target) {
                pos = target.localToRoot();
                sizeW = target.width;
                sizeH = target.height;
            }
            else
                pos = this.globalToLocal(GRoot._gmStatus.mouseX, GRoot._gmStatus.mouseY);

            let xx: number, yy: number;
            xx = pos.x;
            if (xx + popup.width > this.width)
                xx = xx + sizeW - popup.width;
            yy = pos.y + sizeH;
            if ((dir == PopupDirection.Auto && yy + popup.height > this.height)
                || dir == PopupDirection.Up) {
                yy = pos.y - popup.height - 1;
                if (yy < 0) {
                    yy = 0;
                    xx += sizeW * .5;
                }
            }

            popup.x = xx;
            popup.y = yy;
        }

        public togglePopup(popup: GObject, target: GObject = null, dir?: PopupDirection): void {
            if (this._justClosedPopups.indexOf(popup) != -1)
                return;
            this.showPopup(popup, target, dir);
        }

        public hidePopup(popup: GObject = null): void {
            let i:number;
            if (popup != null) {
                let k: number = this._popupStack.indexOf(popup);
                if (k != -1) {
                    for (i = this._popupStack.length - 1; i >= k; i--)
                        this.closePopup(this._popupStack.pop());
                }
            }
            else {
                let cnt: number = this._popupStack.length;
                for (i = cnt - 1; i >= 0; i--)
                    this.closePopup(this._popupStack[i]);
                this._popupStack.length = 0;
            }
        }

        public get hasAnyPopup(): boolean {
            return this._popupStack.length != 0;
        }

        private closePopup(target: GObject): void {
            if (target.parent != null) {
                if (target instanceof Window)
                    (target as Window).hide();
                else
                    this.removeChild(target);
            }
        }

        public showTooltips(msg: string): void {
            if (this._defaultTooltipWin == null) {
                let resourceURL: string = UIConfig.tooltipsWin;
                if (!resourceURL) {
                    console.error("UIConfig.tooltipsWin not defined");
                    return;
                }

                this._defaultTooltipWin = UIPackage.createObjectFromURL(resourceURL);
            }

            this._defaultTooltipWin.text = msg;
            this.showTooltipsWin(this._defaultTooltipWin);
        }

        public playOneShotSound(sound: any, volumeScale: number = 1) {
            // FIXME
        }

        public showTooltipsWin(tooltipWin: GObject, position: PIXI.Point = null): void {
            this.hideTooltips();

            this._tooltipWin = tooltipWin;

            let xx: number = 0;
            let yy: number = 0;
            if (position == null) {
                xx = GRoot._gmStatus.mouseX + 10;
                yy = GRoot._gmStatus.mouseY + 20;
            }
            else {
                xx = position.x;
                yy = position.y;
            }
            let pt: PIXI.Point = this.globalToLocal(xx, yy);
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
        }

        public hideTooltips(): void {
            if (this._tooltipWin != null) {
                if (this._tooltipWin.parent)
                    this.removeChild(this._tooltipWin);
                this._tooltipWin = null;
            }
        }
        
        public get focus(): GObject {
            if (this._focusedObject && !this._focusedObject.onStage)
                this._focusedObject = null;

            return this._focusedObject;
        }

        public set focus(value: GObject) {
            if (value && (!value.focusable || !value.onStage))
                throw new Error("Invalid target to focus");

            this.setFocus(value);
        }

        private setFocus(value: GObject) {
            if (this._focusedObject != value) {
                this._focusedObject = value;
                this.emit(FocusEvent.CHANGED, this);
            }
        }

        private adjustModalLayer(): void {
            let cnt: number = this.numChildren;

            if (this._modalWaitPane != null && this._modalWaitPane.parent != null)
                this.setChildIndex(this._modalWaitPane, cnt - 1);

            for (let i: number = cnt - 1; i >= 0; i--) {
                let g: GObject = this.getChildAt(i);
                if ((g instanceof Window) && g.modal) {
                    if (this._modalLayer.parent == null)
                        this.addChildAt(this._modalLayer, i);
                    else
                        this.setChildIndexBefore(this._modalLayer, i);
                    return;
                }
            }

            if (this._modalLayer.parent != null)
                this.removeChild(this._modalLayer);
        }

        private _stageDown(evt: PIXI.interaction.InteractionEvent): void {
            GRoot._gmStatus.mouseX = evt.data.global.x;
            GRoot._gmStatus.mouseY = evt.data.global.y;
            GRoot._gmStatus.touchDown = true;

            //check focus
            let mc: PIXI.DisplayObject = evt.target;
            while (mc && mc != this.nativeStage) {
                if (fgui.isUIObject(mc)) {
                    let g = mc.UIOwner;
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
        }

        public checkPopups(target:PIXI.DisplayObject):void {
            if(this._checkingPopups)
				return;
			
            this._checkingPopups = true;
            
			this._justClosedPopups.length = 0;
			if (this._popupStack.length > 0) {
                let mc = target;
                while (mc && mc != this.nativeStage) {
					if (fgui.isUIObject(mc)) {
						let pindex = this._popupStack.indexOf(mc.UIOwner);
						if (pindex != -1) {
                            let popup:GObject;
							for(let i = this._popupStack.length - 1; i > pindex; i--) {
								popup = this._popupStack.pop();
								this.closePopup(popup);
								this._justClosedPopups.push(popup);
							}
							return;
						}
					}
					mc = mc.parent;
				}
				
                let cnt = this._popupStack.length;
                let popup:GObject;
				for(let i = cnt - 1; i >= 0; i--) {
					popup = this._popupStack[i];
					this.closePopup(popup);
					this._justClosedPopups.push(popup);
				}
				this._popupStack.length = 0;
            }
        }

        private _stageMove(evt: PIXI.interaction.InteractionEvent): void {
            GRoot._gmStatus.mouseX = evt.data.global.x;
            GRoot._gmStatus.mouseY = evt.data.global.y;
        }

        private _stageUp(evt: PIXI.interaction.InteractionEvent): void {
            GRoot._gmStatus.touchDown = false;
            this._checkingPopups = false;
        }

        private _winResize(stage: UIStage): void {
            this.setSize(stage.stageWidth, stage.stageHeight);
        }
    }
}