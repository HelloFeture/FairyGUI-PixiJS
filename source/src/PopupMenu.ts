namespace fgui {

    export class PopupMenu {

        protected _contentPane: GComponent;
        protected _list: GList;

        public constructor(resourceURL: string = null) {
            if (!resourceURL) {
                resourceURL = UIConfig.popupMenu;
                if (!resourceURL)
                    throw new Error("UIConfig.popupMenu not defined");
            }
            this._contentPane = UIPackage.createObjectFromURL(resourceURL) as GComponent;
            this._contentPane.on("added", this._addedToStage, this);
            this._list = <GList>(this._contentPane.getChild("list"));
            this._list.removeChildrenToPool();
            this._list.addRelation(this._contentPane, RelationType.Width);
            this._list.removeRelation(this._contentPane, RelationType.Height);
            this._contentPane.addRelation(this._list, RelationType.Height);
            this._list.on(ListEvent.ItemClick, this._clickItem, this);
        }

        public dispose(): void {
            GTimer.inst.remove(this._delayClickItem, this);
            this._list.off(ListEvent.ItemClick, this._clickItem, this);
            this._contentPane.off("added", this._addedToStage, this);
            this._contentPane.dispose();
        }

        public addItem(caption: string, handler?: Function): GButton {
            let item: GButton = this._list.addItemFromPool() as GButton;
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            let c: Controller = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        }

        public addItemAt(caption: string, index: number, handler?: Function): GButton {
            let item: GButton = this._list.getFromPool() as GButton;
            this._list.addChildAt(item, index);
            item.title = caption;
            item.data = handler;
            item.grayed = false;
            let c: Controller = item.getController("checked");
            if (c != null)
                c.selectedIndex = 0;
            return item;
        }

        public addSeperator(): void {
            if (UIConfig.popupMenuSeperator == null)
                throw new Error("UIConfig.popupMenuSeperator not defined");
            this._list.addItemFromPool(UIConfig.popupMenuSeperator);
        }

        public getItemName(index: number): string {
            let item: GObject = this._list.getChildAt(index);
            return item.name;
        }

        public setItemText(name: string, caption: string): void {
            let item: GButton = this._list.getChild(name) as GButton;
            item.title = caption;
        }

        public setItemVisible(name: string, visible: boolean): void {
            let item: GButton = this._list.getChild(name) as GButton;
            if (item.visible != visible) {
                item.visible = visible;
                this._list.setBoundsChangedFlag();
            }
        }

        public setItemGrayed(name: string, grayed: boolean): void {
            let item: GButton = this._list.getChild(name) as GButton;
            item.grayed = grayed;
        }

        public setItemCheckable(name: string, checkable: boolean): void {
            let item: GButton = this._list.getChild(name) as GButton;
            let c: Controller = item.getController("checked");
            if (c != null) {
                if (checkable) {
                    if (c.selectedIndex == 0)
                        c.selectedIndex = 1;
                }
                else
                    c.selectedIndex = 0;
            }
        }

        public setItemChecked(name: string, checked: boolean): void {
            let item: GButton = this._list.getChild(name) as GButton;
            let c: Controller = item.getController("checked");
            if (c != null)
                c.selectedIndex = checked ? 2 : 1;
        }

        public isItemChecked(name: string): boolean {
            let item: GButton = this._list.getChild(name) as GButton;
            let c: Controller = item.getController("checked");
            if (c != null)
                return c.selectedIndex == 2;
            else
                return false;
        }

        public removeItem(name: string): boolean {
            let item: GButton = this._list.getChild(name) as GButton;
            if (item != null) {
                let index: number = this._list.getChildIndex(item);
                this._list.removeChildToPoolAt(index);
                return true;
            }
            else
                return false;
        }

        public clearItems(): void {
            this._list.removeChildrenToPool();
        }

        public get itemCount(): Number {
            return this._list.numChildren;
        }

        public get contentPane(): GComponent {
            return this._contentPane;
        }

        public get list(): GList {
            return this._list;
        }

        public show(target: GObject = null, dir?: PopupDirection): void {
            let r: GRoot = target != null ? target.root : GRoot.inst;
            r.showPopup(this.contentPane, (target instanceof GRoot) ? null : target, dir);
        }

        private _clickItem(evt:PIXI.interaction.InteractionEvent, itemObject: GObject): void {
            GTimer.inst.add(100, 1, this._delayClickItem, this, itemObject);
        }

        private _delayClickItem(itemObject: GObject): void {
            if (!(itemObject instanceof GButton))
                return;
            if (itemObject.grayed) {
                this._list.selectedIndex = -1;
                return;
            }
            let c: Controller = itemObject.getController("checked");
            if (c != null && c.selectedIndex != 0) {
                if (c.selectedIndex == 1)
                    c.selectedIndex = 2;
                else
                    c.selectedIndex = 1;
            }
            let r: GRoot = this._contentPane.parent as GRoot;
            if(r)
                r.hidePopup(this.contentPane);
            if (itemObject.data != null)
                (itemObject.data as Function).call(null);
            
            GTimer.inst.remove(this._delayClickItem, this);
        }

        private _addedToStage(): void {
            this._list.selectedIndex = -1;
            this._list.resizeToFit(100000, 10);
        }

    }
}
