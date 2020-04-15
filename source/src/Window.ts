namespace fgui {

    export class Window extends GComponent {
        private _contentPane: GComponent;
        private _modalWaitPane: GObject;
        private _closeButton: GObject;
        private _dragArea: GObject;
        private _contentArea: GObject;
        private _frame: GComponent;
        private _modal: boolean;

        private _uiSources: IUISource[];
        private _inited: boolean;
        private _loading: boolean;

        protected _requestingCmd: number = 0;

        public bringToFrontOnClick: boolean;

        public constructor() {
            super();
            this.focusable = true;
            this._uiSources = [];
            this.bringToFrontOnClick = UIConfig.bringWindowToFrontOnClick;

            this.on("added", this._onShown, this);
            this.on("removed", this._onHidden, this);
            this.on(InteractiveEvents.Down, this._mouseDown, this);
        }

        public addUISource(source: IUISource): void {
            this._uiSources.push(source);
        }

        public set contentPane(val: GComponent) {
            if (this._contentPane != val) {
                if (this._contentPane != null)
                    this.removeChild(this._contentPane);
                this._contentPane = val;
                if (this._contentPane != null) {
                    this.addChild(this._contentPane);
                    this.setSize(this._contentPane.width, this._contentPane.height);
                    this._contentPane.addRelation(this, RelationType.Size);
                    this._frame = this._contentPane.getChild("frame") as GComponent;
                    if (this._frame != null) {
                        this.closeButton = this._frame.getChild("closeButton");
                        this.dragArea = this._frame.getChild("dragArea");
                        this.contentArea = this._frame.getChild("contentArea");
                    }
                }
            }
        }

        public get contentPane(): GComponent {
            return this._contentPane;
        }

        public get frame(): GComponent {
            return this._frame;
        }

        public get closeButton(): GObject {
            return this._closeButton;
        }

        public set closeButton(value: GObject) {
            if (this._closeButton != null)
                this._closeButton.off(InteractiveEvents.Click, this.closeEventHandler, this);
            this._closeButton = value;
            if (this._closeButton != null)
                this._closeButton.on(InteractiveEvents.Click, this.closeEventHandler, this);
        }

        public get dragArea(): GObject {
            return this._dragArea;
        }

        public set dragArea(value: GObject) {
            if (this._dragArea != value) {
                if (this._dragArea != null) {
                    this._dragArea.draggable = false;
                    this._dragArea.off(DragEvent.START, this._dragStart, this);
                }

                this._dragArea = value;
                if (this._dragArea != null) {
                    if (this._dragArea instanceof GGraph)
                        this._dragArea.drawRect(0, 0, 0, 0, 0);
                    this._dragArea.draggable = true;
                    this._dragArea.on(DragEvent.START, this._dragStart, this);
                }
            }
        }

        public get contentArea(): GObject {
            return this._contentArea;
        }

        public set contentArea(value: GObject) {
            this._contentArea = value;
        }

        public show(): void {
            GRoot.inst.showWindow(this);
        }

        public showOn(root: GRoot): void {
            root.showWindow(this);
        }

        public hide(): void {
            if (this.isShowing)
                this.doHideAnimation();
        }

        public hideImmediately(): void {
            let r: GRoot = (this.parent && this.parent instanceof GRoot) ? this.parent : GRoot.inst;
            r.hideWindowImmediately(this);
        }

        public centerOn(r: GRoot, autoUpdate: boolean = false): void {
            this.setXY(Math.round((r.width - this.width) * .5), Math.round((r.height - this.height) * .5));
            if (autoUpdate) {
                this.addRelation(r, RelationType.Center_Center);
                this.addRelation(r, RelationType.Middle_Middle);
            }
        }

        public toggleVisible(): void {
            if (this.isTop)
                this.hide();
            else
                this.show();
        }

        public get isShowing(): boolean {
            return this.parent != null;
        }

        public get isTop(): boolean {
            return this.parent != null && this.parent.getChildIndex(this) == this.parent.numChildren - 1;
        }

        public get modal(): boolean {
            return this._modal;
        }

        public set modal(val: boolean) {
            this._modal = val;
        }

        public bringToFront(): void {
            this.root.bringToFront(this);
        }

        public showModalWait(msg?:string, cmd: number = 0): void {
            if (cmd != 0)
                this._requestingCmd = cmd;

            if (UIConfig.windowModalWaiting) {
                if (!this._modalWaitPane)
                    this._modalWaitPane = UIPackage.createObjectFromURL(UIConfig.windowModalWaiting);

                this.layoutModalWaitPane(msg);

                this.addChild(this._modalWaitPane);
            }
        }

        protected layoutModalWaitPane(msg?:string): void {
            if (this._contentArea != null) {
                let pt: PIXI.Point = this._frame.localToGlobal();
                pt = this.globalToLocal(pt.x, pt.y, pt);
                this._modalWaitPane.setXY(pt.x + this._contentArea.x, pt.y + this._contentArea.y);
                this._modalWaitPane.setSize(this._contentArea.width, this._contentArea.height);
                if(msg && msg.length)
                    this._modalWaitPane.text = msg;
            }
            else
                this._modalWaitPane.setSize(this.width, this.height);
        }

        public closeModalWait(cmd: number = 0): boolean {
            if (cmd != 0) {
                if (this._requestingCmd != cmd)
                    return false;
            }
            this._requestingCmd = 0;

            if (this._modalWaitPane && this._modalWaitPane.parent != null)
                this.removeChild(this._modalWaitPane);

            return true;
        }

        public get modalWaiting(): boolean {
            return this._modalWaitPane && this._modalWaitPane.parent != null;
        }

        public init(): void {
            if (this._inited || this._loading)
                return;

            if (this._uiSources.length > 0) {
                this._loading = false;
                this._uiSources.forEach(o => {
                    if (!o.loaded) {
                        o.load(this._uiLoadComplete, this);
                        this._loading = true;
                    }
                }, this);
                
                if (!this._loading)
                    this._init();
            }
            else
                this._init();
        }

        protected onInit(): void {
        }

        protected onShown(): void {
        }

        protected onHide(): void {
        }

        protected doShowAnimation(): void {
            this.onShown();
        }

        protected doHideAnimation(): void {
            this.hideImmediately();
        }

        private _uiLoadComplete(): void {
            let cnt: number = this._uiSources.length;
            for (let i: number = 0; i < cnt; i++) {
                if (!this._uiSources[i].loaded)
                    return;
            }

            this._loading = false;
            this._init();
        }

        private _init(): void {
            this._inited = true;
            this.onInit();

            if (this.isShowing)
                this.doShowAnimation();
        }

        public dispose(): void {
            this.off("added", this._onShown, this);
            this.off("removed", this._onHidden, this);
            this.off(InteractiveEvents.Down, this._mouseDown, this);
            if(this._dragArea)
                this._dragArea.off(DragEvent.START, this._dragStart, this);
            
            if (this.parent != null)
                this.hideImmediately();

            if(this._modalWaitPane) this._modalWaitPane.dispose();
            if(this._contentPane) this._contentPane.dispose();
            
            super.dispose();
        }

        protected closeEventHandler(evt: PIXI.interaction.InteractionEvent): void {
            this.hide();
        }

        private _onShown(target: PIXI.DisplayObject): void {
            if (!this._inited)
                this.init();
            else
                this.doShowAnimation();
        }

        private _onHidden(target: PIXI.DisplayObject): void {
            this.closeModalWait();
            this.onHide();
        }

        private _mouseDown(evt: PIXI.interaction.InteractionEvent): void {
            if (this.isShowing && this.bringToFrontOnClick)
                this.bringToFront();
        }

        private _dragStart(evt: PIXI.interaction.InteractionEvent): void {
            GObject.cast(evt.currentTarget).stopDrag();
            this.startDrag(evt.data.pointerId);
        }
    }
}