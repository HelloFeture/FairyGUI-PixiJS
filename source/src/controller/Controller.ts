namespace fgui {

    /**
     * 控制器
     */
    export class Controller extends PIXI.utils.EventEmitter {

     
        private _selectedIndex: number = 0;
        private _previousIndex: number = 0;
        private _pageIds: string[];
        private _pageNames: string[];
        private _actions: Action[];
        /** 控制器名称 */
        public name: string;
        /** 所属组件  */
        public parent: GComponent;
        public autoRadioGroupDepth: boolean;
        public changing: boolean = false;
  

        private static _nextPageId: number = 0;

        public constructor() {
            super();
            this._pageIds = [];
            this._pageNames = [];
            this._selectedIndex = -1;
            this._previousIndex = -1;
        }

        public get selectedIndex(): number {
            return this._selectedIndex;
        }

        public set selectedIndex(value: number) {
            if (this._selectedIndex != value) {
                if (value > this._pageIds.length - 1) {
                    throw "index out of bounds: " + value;
                }

                this.changing = true;
                this._previousIndex = this._selectedIndex;
                this._selectedIndex = value;
                this.parent.applyController(this);

                this.emit(StateChangeEvent.CHANGED, this);

                this.changing = false;
            }
        }

        //same effect as selectedIndex but without event emitted
        public setSelectedIndex(value: number = 0): void {
            if (this._selectedIndex != value) {
                if (value > this._pageIds.length - 1) {
                    throw "index out of bounds: " + value;
                }

                this.changing = true;
                this._previousIndex = this._selectedIndex;
                this._selectedIndex = value;
                this.parent.applyController(this);
                this.changing = false;
            }
        }

        public get previsousIndex(): number {
            return this._previousIndex;
        }

        public get selectedPage(): string {
            if (this._selectedIndex == -1)
                return null;
            else
                return this._pageNames[this._selectedIndex];
        }

        public set selectedPage(val: string) {
            this.selectedIndex = Math.max(0, this._pageNames.indexOf(val));
        }

        public setSelectedPage(value: string): void {
            this.setSelectedIndex(Math.max(0, this._pageNames.indexOf(value)));
        }

        /** @readonly 上次页面名称 */
        public get previousPage(): string {
            if (this._previousIndex == -1)
                return null;
            else
                return this._pageNames[this._previousIndex];
        }

        /** @readonly page数量 */
        public get pageCount(): number {
            return this._pageIds.length;
        }

        /**
         * 获取指定下标的夜名称
         * @param index 下标
         */
        public getPageName(index: number = 0): string {
            return this._pageNames[index];
        }

        /** 
         * 增加页面到尾部
         * @param name 页面名称
         */
        public addPage(name: string = ""): void {
            this.addPageAt(name, this._pageIds.length);
        }

        /** 
         * 增加页面到指定下标
         * @param name 页面名称
         * @param index 下标，默认为0 
         */
        public addPageAt(name: string, index: number = 0): void {
            let nid: string = `${Controller._nextPageId++}`;
            if (index == this._pageIds.length) {
                this._pageIds.push(nid);
                this._pageNames.push(name);
            } else {
                this._pageIds.splice(index, 0, nid);
                this._pageNames.splice(index, 0, name);
            }
        }

        /**
         * 删除一个页面
         * @param name 页面名称
         */
        public removePage(name: string): void {
            let i: number = this._pageNames.indexOf(name);
            if (i != -1) {
                this._pageIds.splice(i, 1);
                this._pageNames.splice(i, 1);
                if (this._selectedIndex >= this._pageIds.length)
                    this.selectedIndex = this._selectedIndex - 1;
                else
                    this.parent.applyController(this);
            }
        }

        /**
         * 删除一个页面
         * @param index 页下标
         */
        public removePageAt(index: number = 0): void {
            this._pageIds.splice(index, 1);
            this._pageNames.splice(index, 1);
            if (this._selectedIndex >= this._pageIds.length)
                this.selectedIndex = this._selectedIndex - 1;
            else
                this.parent.applyController(this);
        }

        /**
         * 删除所有页面
         */
        public clearPages(): void {
            this._pageIds.length = 0;
            this._pageNames.length = 0;
            if (this._selectedIndex != -1)
                this.selectedIndex = -1;
            else
                this.parent.applyController(this);
        }

        /**
         * 是否包含某个页面
         * @param aName 页面名称
         */
        public hasPage(aName: string): boolean {
            return this._pageNames.indexOf(aName) >= 0;
        }

        /**
         * @hide 
         * 根据页ID获取下标
         * @param aId 
         */
        public getPageIndexById(aId: string): number {
            return this._pageIds.indexOf(aId);
        }

        /**
         * @hide 
         * 根据页名称获取页ID
         * @param aName 
         */
        public getPageIdByName(aName: string): string {
            let i: number = this._pageNames.indexOf(aName);
            if (i != -1)
                return this._pageIds[i];
            else
                return null;
        }

        /**
         * @hide 
         * 根据页ID获取页名称
         * @param aId 
         */
        public getPageNameById(aId: string): string {
            let i: number = this._pageIds.indexOf(aId);
            if (i != -1)
                return this._pageNames[i];
            else
                return null;
        }

        /**
         * @hide 
         * 获取指定页的下标
         * @param index 下表
         */
        public getPageId(index: number = 0): string {
            return this._pageIds[index];
        }

        /**
         * 获取选择的页ID
         */
        public get selectedPageId(): string {
            if (this._selectedIndex == -1)
                return null;
            else
                return this._pageIds[this._selectedIndex];
        }

        /**
         * 设置选择的页ID
         */
        public set selectedPageId(val: string) {
            this.selectedIndex = this._pageIds.indexOf(val);
        }

        public set oppositePageId(val: string) {
            let i: number = this._pageIds.indexOf(val);
            if (i > 0)
                this.selectedIndex = 0;
            else if (this._pageIds.length > 1)
                this.selectedIndex = 1;
        }

        public get previousPageId(): string {
            if (this._previousIndex == -1)
                return null;
            else
                return this._pageIds[this._previousIndex];
        }

        public executeActions(): void {
            if (this._actions && this._actions.length > 0) {
                this._actions.forEach(a => {
                    a.execute(this, this.previousPageId, this.selectedPageId);
                });
            }
        }

        /**
         * @param buffer 
         */
        public setup(buffer: ByteBuffer): void {
            var beginPos: number = buffer.position;
            buffer.seek(beginPos, 0);
            // 名称 string
            this.name = buffer.readS();
            this.autoRadioGroupDepth = buffer.readBool();
            // ?
            buffer.seek(beginPos, 1);

            var i: number;
            var nextPos: number;
            var cnt: number = buffer.readShort();
            for (i = 0; i < cnt; i++) {
                this._pageIds.push(buffer.readS());
                this._pageNames.push(buffer.readS());
            }

            var homePageIndex: number = 0;
            if (buffer.version >= 2) {
                var homePageType: number = buffer.readByte();
                switch (homePageType) {
                    case 1:
                        homePageIndex = buffer.readShort();
                        break;

                    case 2:
                        homePageIndex = this._pageNames.indexOf(UIPackage.branch);
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;

                    case 3:
                        homePageIndex = this._pageNames.indexOf(UIPackage.getVar(buffer.readS()));
                        if (homePageIndex == -1)
                            homePageIndex = 0;
                        break;
                }
            }

            buffer.seek(beginPos, 2);

            cnt = buffer.readShort();
            if (cnt > 0) {
                this._actions = this._actions || [];
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.readShort();
                    nextPos += buffer.position;

                    var action: Action = Action.createAction(buffer.readByte());
                    action.setup(buffer);
                    this._actions.push(action);

                    buffer.position = nextPos;
                }
            }

            if (this.parent != null && this._pageIds.length > 0)
                this._selectedIndex = homePageIndex;
            else
                this._selectedIndex = -1;
        }
    }
}