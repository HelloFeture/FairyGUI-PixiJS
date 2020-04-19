/// <reference path="./GObject.ts" />
/// <reference path="./controller/Controller.ts" />

namespace fgui {

    export class GComponent extends GObject {

        protected _sortingChildCount: number = 0;
        protected _applyingController: Controller;
        protected _opaque: boolean;

        protected _margin: utils.Margin;
        protected _trackBounds: boolean;
        protected _boundsChanged: boolean;
        protected _childrenRenderOrder: ChildrenRenderOrder = ChildrenRenderOrder.Ascent;
        protected _children: GObject[];
        protected _apexIndex: number = 0;

        /**@internal */
        public _buildingDisplayList: boolean;
        /**@internal */
        public _controllers: Controller[];
        /**@internal */
        public _transitions: Transition[];
        /**@internal */
        public _rootContainer: UIContainer;
        /**@internal */
        public _container: PIXI.Container;
        /**@internal */
        public _scrollPane: ScrollPane;
        /**@internal */
        public _alignOffset: PIXI.Point;

        public constructor() {
            super();
            this._children = [];
            this._controllers = [];
            this._transitions = [];
            this._margin = new utils.Margin();
            this._alignOffset = new PIXI.Point();
        }

        protected createDisplayObject(): void {
            this._rootContainer = new UIContainer(this);
            this.setDisplayObject(this._rootContainer);
            this._container = this._rootContainer;
        }

        public dispose(): void {
            GTimer.inst.remove(this._validate, this);
            this.off("added", this.___added, this);
            this.off("removed", this.___removed, this);
            this._transitions.forEach((trans: Transition): void => {
                trans.dispose();
            });
            let numChildren: number = this._children.length;
            for (let i = numChildren - 1; i >= 0; --i) {
                let obj: GObject = this._children[i];
                obj.parent = null; //avoid removeFromParent call
                obj.dispose();
            }
            this._boundsChanged = false;
            if(this._scrollPane) this._scrollPane.dispose();
            super.dispose();
        }

        public get displayListContainer(): PIXI.Container {
            return this._container;
        }

        public addChild(child: GObject): GObject {
            this.addChildAt(child, this._children.length);
            return child;
        }

        public addChildAt(child: GObject, index: number = 0): GObject {
            if (!child)
                throw new Error("Invalid child");
            let numChildren: number = this._children.length;
            if (index >= 0 && index <= numChildren) {
                if (child.parent == this)
                    this.setChildIndex(child, index);
                else {
                    child.removeFromParent();
                    child.parent = this;
                    let cnt: number = this._children.length;
                    if (child.sortingOrder != 0) {
                        this._sortingChildCount++;
                        index = this.getInsertPosForSortingChild(child);
                    }
                    else if (this._sortingChildCount > 0) {
                        if (index > (cnt - this._sortingChildCount))
                            index = cnt - this._sortingChildCount;
                    }
                    if (index == cnt)
                        this._children.push(child);
                    else
                        this._children.splice(index, 0, child);

                    this.childStateChanged(child);
                    this.setBoundsChangedFlag();
                }
                return child;
            }
            else
                throw new Error("Invalid child index");
        }

        private getInsertPosForSortingChild(target: GObject): number {
            let cnt: number = this._children.length;
            let i: number = 0;
            for (i = 0; i < cnt; i++) {
                let child: GObject = this._children[i];
                if (child == target)
                    continue;
                if (target.sortingOrder < child.sortingOrder)
                    break;
            }
            return i;
        }

        public removeChild(child: GObject, dispose: boolean = false): GObject {
            let childIndex: number = this._children.indexOf(child);
            if (childIndex != -1)
                this.removeChildAt(childIndex, dispose);
            return child;
        }

        public removeChildAt(index: number, dispose: boolean = false): GObject {
            if (index >= 0 && index < this.numChildren) {
                let child: GObject = this._children[index];
                child.parent = null;

                if (child.sortingOrder != 0)
                    this._sortingChildCount--;

                this._children.splice(index, 1);
                if (child.inContainer){
                    this._container.removeChild(child.displayObject);
                }

                if (dispose === true)
                    child.dispose();

                this.setBoundsChangedFlag();

                return child;
            } else {
                throw new Error("Invalid child index");
            }
        }

        public removeChildren(beginIndex: number = 0, endIndex: number = -1, dispose: boolean = false): void {
            if (endIndex < 0 || endIndex >= this.numChildren)
                endIndex = this.numChildren - 1;

            for (let i: number = beginIndex; i <= endIndex; ++i)
                this.removeChildAt(beginIndex, dispose);
        }

        public getChildAt(index: number = 0): GObject {
            if (index >= 0 && index < this.numChildren)
                return this._children[index];
            else
                throw new Error("Invalid child index");
        }

        public getChild(name: string): GObject {
            let cnt: number = this._children.length;
            for (let i: number = 0; i < cnt; ++i) {
                if (this._children[i].name == name)
                    return this._children[i];
            }
            return null;
        }

        public getChildByPath(path: String): GObject {
            var arr: string[] = path.split(".");
            var cnt: number = arr.length;
            var gcom: GComponent = this;
            var obj: GObject;
            for (var i: number = 0; i < cnt; ++i) {
                obj = gcom.getChild(arr[i]);
                if (!obj)
                    break;

                if (i != cnt - 1) {
                    if (!(gcom instanceof GComponent)) {
                        obj = null;
                        break;
                    }
                    else
                        gcom = <GComponent>obj;
                }
            }

            return obj;
        }

        public getVisibleChild(name: string): GObject {
            var cnt: number = this._children.length;
            for (var i: number = 0; i < cnt; ++i) {
                var child: GObject = this._children[i];
                if (child.internalVisible && child.internalVisible && child.name == name)
                    return child;
            }

            return null;
        }

        public getChildInGroup(name: string, group: GGroup): GObject {
            let cnt: number = this._children.length;
            for (let i: number = 0; i < cnt; ++i) {
                let child: GObject = this._children[i];
                if (child.group == group && child.name == name)
                    return child;
            }
            return null;
        }

        public getChildById(id: string): GObject {
            let cnt: number = this._children.length;
            for (let i: number = 0; i < cnt; ++i) {
                if (this._children[i].id == id)
                    return this._children[i];
            }
            return null;
        }

        public getChildIndex(child: GObject): number {
            return this._children.indexOf(child);
        }

        public setChildIndex(child: GObject, index: number = 0): void {
            let oldIndex: number = this._children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0) //no effect
                return;
            let cnt: number = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            this._setChildIndex(child, oldIndex, index);
        }

        public setChildIndexBefore(child: GObject, index: number): number {
            let oldIndex: number = this._children.indexOf(child);
            if (oldIndex == -1)
                throw new Error("no such child found");
            if (child.sortingOrder != 0) //no effect
                return oldIndex;
            let cnt: number = this._children.length;
            if (this._sortingChildCount > 0) {
                if (index > (cnt - this._sortingChildCount - 1))
                    index = cnt - this._sortingChildCount - 1;
            }
            if (oldIndex < index)
                return this._setChildIndex(child, oldIndex, index - 1);
            else
                return this._setChildIndex(child, oldIndex, index);
        }

        protected _setChildIndex(child: GObject, oldIndex: number, index: number = 0): number {
            let cnt: number = this._children.length;
            if (index > cnt)
                index = cnt;

            if (oldIndex == index)
                return oldIndex;

            this._children.splice(oldIndex, 1);
            this._children.splice(index, 0, child);

            if (child.inContainer) {
                let displayIndex: number = 0;
                let childCount: number = this._container.children.length;
                for (let i: number = 0; i < index; i++) {
                    let g: GObject = this._children[i];
                    if (g.inContainer)
                        displayIndex++;
                }
                if (displayIndex == childCount)
                    displayIndex--;
                this._container.setChildIndex(child.displayObject, displayIndex);

                this.setBoundsChangedFlag();
            }
            return index;
        }

        public swapChildren(child1: GObject, child2: GObject): void {
            let index1: number = this._children.indexOf(child1);
            let index2: number = this._children.indexOf(child2);
            if (index1 == -1 || index2 == -1)
                throw new Error("no such child found");
            this.swapChildrenAt(index1, index2);
        }

        public swapChildrenAt(index1: number, index2: number = 0): void {
            let child1: GObject = this._children[index1];
            let child2: GObject = this._children[index2];
            this.setChildIndex(child1, index2);
            this.setChildIndex(child2, index1);
        }

        public get numChildren(): number {
            return this._children.length;
        }

        public isAncestorOf(child: GObject): boolean {
            if (child == null)
                return false;

            let p: GComponent = child.parent;
            while (p) {
                if (p == this)
                    return true;

                p = p.parent;
            }
            return false;
        }

        public addController(controller: Controller): void {
            this._controllers.push(controller);
            controller.parent = this;
            this.applyController(controller);
        }

        public getControllerAt(index: number): Controller {
            return this._controllers[index];
        }

        public getController(name: string): Controller {
            let cnt: number = this._controllers.length;
            for (let i: number = 0; i < cnt; ++i) {
                let c: Controller = this._controllers[i];
                if (c.name == name)
                    return c;
            }
            return null;
        }

        public removeController(c: Controller): void {
            let index: number = this._controllers.indexOf(c);
            if (index == -1)
                throw new Error("controller not exists");

            c.parent = null;
            this._controllers.splice(index, 1);

            this._children.forEach(child => {
                child.handleControllerChanged(c);
            });
        }

        public get controllers(): Controller[] {
            return this._controllers;
        }

        public childStateChanged(child: GObject): void {
            if (this._buildingDisplayList)
                return;

            if (child instanceof GGroup) {
                this._children.forEach(g => {
                    if (g.group == child)
                        this.childStateChanged(g);
                }, this);
                return;
            }

            if (!child.displayObject)
                return;

            if (child.finalVisible) {
                if (!child.displayObject.parent) {
                    let index: number = 0;
                    let len: number = this._children.length;
                    for (let i1: number = 0; i1 < len; i1++) {
                        let g = this._children[i1];
                        if (g == child)
                            break;

                        if (g.displayObject && g.displayObject.parent)
                            index++;
                    }
                    this._container.addChildAt(child.displayObject, index);
                }
            }
            else {
                if (child.displayObject.parent)
                    this._container.removeChild(child.displayObject);
            }
        }

        public applyController(c: Controller): void {
            this._applyingController = c;
            this._children.forEach(child => {
                child.handleControllerChanged(c);
            });
            this._applyingController = null;
            c.executeActions();
        }

        public applyAllControllers(): void {
            this._controllers.forEach(c => {
                this.applyController(c);
            }, this);
        }

        public adjustRadioGroupDepth(obj: GObject, c: Controller): void {
            let myIndex: number = -1, maxIndex: number = -1;
            this._children.forEach((child, i) => {
                if (child == obj) {
                    myIndex = i;
                }
                else if ((child instanceof GButton)
                    && child.relatedController == c) {
                    if (i > maxIndex)
                        maxIndex = i;
                }
            });
            if (myIndex < maxIndex) {
                if(this._applyingController != null)
                    this._children[maxIndex].handleControllerChanged(this._applyingController);  //TODO: twice
                this.swapChildrenAt(myIndex, maxIndex);
            }
        }

        public getTransitionAt(index: number): Transition {
            return this._transitions[index];
        }

        public getTransition(transName: string): Transition {
            let cnt: number = this._transitions.length;
            for (let i: number = 0; i < cnt; ++i) {
                let trans: Transition = this._transitions[i];
                if (trans.name == transName)
                    return trans;
            }
            return null;
        }

        public isChildInView(child: GObject): boolean {
            if (this._rootContainer.scrollRect != null) {
                return child.x + child.width >= 0 && child.x <= this.width
                    && child.y + child.height >= 0 && child.y <= this.height;
            }
            else if (this._scrollPane != null) {
                return this._scrollPane.isChildInView(child);
            }
            else
                return true;
        }

        public getFirstChildInView(): number {
            let cnt: number = this._children.length;
            for (let i: number = 0; i < cnt; ++i) {
                let child: GObject = this._children[i];
                if (this.isChildInView(child))
                    return i;
            }
            return -1;
        }

        public get scrollPane(): ScrollPane {
            return this._scrollPane;
        }

        public get opaque(): boolean {
            return this._opaque;
        }

        public set opaque(value: boolean) {
            if (this._opaque != value) {
                this._opaque = value;
                if (this._opaque){
                    this.updateOpaque();
                } else {
                    if (this._rootContainer.hitArea && this._rootContainer.hitArea instanceof PIXI.Rectangle){
                        this._rootContainer.hitArea.width = this._rootContainer.hitArea.height = 0;
                    }
                }
            }
        }

        public get margin(): utils.Margin {
            return this._margin;
        }

        public set margin(value: utils.Margin) {
            this._margin.copy(value);
            if (this._rootContainer.scrollRect != null) {
                this._container.x = this._margin.left + this._alignOffset.x;
                this._container.y = this._margin.top + this._alignOffset.y;
            }
            this.handleSizeChanged();
        }

        public get apexIndex(): number {
            return this._apexIndex;
        }

        public set apexIndex(value: number) {
            if (this._apexIndex != value) {
                this._apexIndex = value;

                if (this._childrenRenderOrder == ChildrenRenderOrder.Arch)
                    this.buildNativeDisplayList();
            }
        }

   
        public get mask():    PIXI.Container | PIXI.MaskData {
            return this._rootContainer.mask;
        }

        // TODO
        public set mask(obj: PIXI.Container | PIXI.MaskData) {
            if(!obj) return;
     
            if (obj instanceof PIXI.Container) {
                obj.interactive =  obj.interactiveChildren = false;
                obj.isMask = true;
            }
            if (obj instanceof PIXI.Graphics) 
                obj.isMask = true;
            this._rootContainer.mask = obj;
        }

        protected updateOpaque() {
            if (!this._rootContainer.hitArea)
                this._rootContainer.hitArea = new PIXI.Rectangle();
            let h: PIXI.Rectangle = this._rootContainer.hitArea as PIXI.Rectangle;
            h.x = h.y = 0;
            h.width = this.width;
            h.height = this.height;
        }

        protected updateScrollRect() {
            let rect: PIXI.Rectangle = this._rootContainer.scrollRect;
            if (rect == null)
                rect = new PIXI.Rectangle();
            let w: number = this.width - this._margin.right;
            let h: number = this.height - this._margin.bottom;
            rect.x = rect.y = 0;
            rect.width = w;
            rect.height = h;
            this._rootContainer.scrollRect = rect;
        }

        // protected setupScroll(scrollBarMargin: utils.Margin,
        //     scroll: ScrollType,
        //     scrollBarDisplay: ScrollBarDisplayType,
        //     flags: number,
        //     vtScrollBarRes: string,
        //     hzScrollBarRes: string,
        //     headerRes:string,
        //     footerRes:string): void {
        //     if (this._rootContainer == this._container) {
        //         this._container = new PIXI.Container();
        //         this._rootContainer.addChild(this._container);
        //     }
        //     this._scrollPane = new ScrollPane(this, scroll, scrollBarMargin, scrollBarDisplay, flags, vtScrollBarRes, hzScrollBarRes, headerRes, footerRes);
        // }

        protected setupScroll(buffer: ByteBuffer): void {
            if (this._rootContainer == this._container) {
                this._container = new PIXI.Container();
                this._rootContainer.addChild(this._container);
            }
            this._scrollPane = new ScrollPane(this);
            this._scrollPane.setup(buffer);
            this.setBoundsChangedFlag();
        }

        protected setupOverflow(overflow: OverflowType): void {
            if (overflow == OverflowType.Hidden) {
                if (this._rootContainer == this._container) {
                    this._container = new PIXI.Container();
                    this._rootContainer.addChild(this._container);
                }
                this.updateScrollRect();
                this._container.x = this._margin.left;
                this._container.y = this._margin.top;
            }
            else if (this._margin.left != 0 || this._margin.top != 0) {
                if (this._rootContainer == this._container) {
                    this._container = new PIXI.Container();
                    this._rootContainer.addChild(this._container);
                }
                this._container.x = this._margin.left;
                this._container.y = this._margin.top;
            }
            this.setBoundsChangedFlag();
        }
        
        protected handleSizeChanged(): void {
            if (this._scrollPane)
                this._scrollPane.onOwnerSizeChanged();
            else if (this._rootContainer.scrollRect != null)
                this.updateScrollRect();

            if (this._opaque)
                this.updateOpaque();
        }

        protected handleGrayedChanged(): void {
            let c: Controller = this.getController("grayed");
            if (c != null)
                c.selectedIndex = this.grayed ? 1 : 0;
            else
                super.handleGrayedChanged();
        }

        public setBoundsChangedFlag(): void {
            if (!this._scrollPane && !this._trackBounds)
                return;
            if (!this._boundsChanged) {
                this._boundsChanged = true;
                GTimer.inst.callLater(this._validate, this);
            }
        }

        private _validate(dt: number): void {
            if (this._boundsChanged)
                this.updateBounds();
        }

        public ensureBoundsCorrect(): void {
            if (this._boundsChanged)
                this.updateBounds();
        }

        protected updateBounds(): void {
            let ax: number = 0, ay: number = 0, aw: number = 0, ah: number = 0;
            let len: number = this._children.length;
            if (len > 0) {
                ax = Number.POSITIVE_INFINITY, ay = Number.POSITIVE_INFINITY;
                let ar: number = Number.NEGATIVE_INFINITY, ab: number = Number.NEGATIVE_INFINITY;
                let tmp: number = 0;

                this._children.forEach(child => {
                    child.ensureSizeCorrect();

                    tmp = child.x;
                    if (tmp < ax)
                        ax = tmp;
                    tmp = child.y;
                    if (tmp < ay)
                        ay = tmp;
                    tmp = child.x + child.actualWidth;
                    if (tmp > ar)
                        ar = tmp;
                    tmp = child.y + child.actualHeight;
                    if (tmp > ab)
                        ab = tmp;
                });
                aw = ar - ax;
                ah = ab - ay;
            }

            this.setBounds(ax, ay, aw, ah);
        }

        public setBounds(ax: number, ay: number, aw: number, ah: number = 0): void {
            this._boundsChanged = false;

            if (this._scrollPane){
                this._scrollPane.setContentSize(Math.round(ax + aw), Math.round(ay + ah));
            }
        }

        public get viewWidth(): number {
            if (this._scrollPane != null)
                return this._scrollPane.viewWidth;
            else
                return this.width - this._margin.left - this._margin.right;
        }

        public set viewWidth(value: number) {
            if (this._scrollPane != null)
                this._scrollPane.viewWidth = value;
            else
                this.width = value + this._margin.left + this._margin.right;
        }

        public get viewHeight(): number {
            if (this._scrollPane != null)
                return this._scrollPane.viewHeight;
            else
                return this.height - this._margin.top - this._margin.bottom;
        }

        public set viewHeight(value: number) {
            if (this._scrollPane != null)
                this._scrollPane.viewHeight = value;
            else
                this.height = value + this._margin.top + this._margin.bottom;
        }

        public getSnappingPosition(xValue: number, yValue: number, resultPoint?: PIXI.Point): PIXI.Point {
            if (!resultPoint)
                resultPoint = new PIXI.Point();

            let cnt: number = this._children.length;
            if (cnt <= 0) {
                resultPoint.x = 0;
                resultPoint.y = 0;
                return resultPoint;
            }

            this.ensureBoundsCorrect();

            let obj: GObject = null;
            let prev: GObject = null;
            let i: number = 0;
            if (yValue != 0) {
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (yValue < obj.y) {
                        if (i == 0) {
                            yValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (yValue < prev.y + prev.actualHeight / 2) //top half part
                                yValue = prev.y;
                            else //bottom half part
                                yValue = obj.y;
                            break;
                        }
                    }
                }

                if (i == cnt)
                    yValue = obj.y;
            }

            if (xValue != 0) {
                if (i > 0)
                    i--;
                for (; i < cnt; i++) {
                    obj = this._children[i];
                    if (xValue < obj.x) {
                        if (i == 0) {
                            xValue = 0;
                            break;
                        }
                        else {
                            prev = this._children[i - 1];
                            if (xValue < prev.x + prev.actualWidth / 2) //top half part
                                xValue = prev.x;
                            else //bottom half part
                                xValue = obj.x;
                            break;
                        }
                    }
                }

                if (i == cnt)
                    xValue = obj.x;
            }

            resultPoint.x = xValue;
            resultPoint.y = yValue;
            return resultPoint;
        }

        public childSortingOrderChanged(child: GObject, oldValue: number, newValue: number = 0): void {
            if (newValue == 0) {
                this._sortingChildCount--;
                this.setChildIndex(child, this._children.length);
            }
            else {
                if (oldValue == 0)
                    this._sortingChildCount++;

                let oldIndex: number = this._children.indexOf(child);
                let index: number = this.getInsertPosForSortingChild(child);
                if (oldIndex < index)
                    this._setChildIndex(child, oldIndex, index - 1);
                else
                    this._setChildIndex(child, oldIndex, index);
            }
        }

        /**@internal */
        constructFromResource(): void {
            // this.constructInternal(null, 0);
            this.constructFromResource2(null, 0);
        }

        public constructFromResource2(objectPool: Array<GObject>, poolIndex: number): void {
            var contentItem:PackageItem = this.packageItem.getBranch();
            if (!contentItem.decoded) {
                contentItem.decoded = true;
                TranslationHelper.translateComponent(contentItem);
            }

            var i: number;
            var dataLen: number;
            var curPos: number;
            var nextPos: number;
            var f1: number;
            var f2: number;
            var i1: number;
            var i2: number;

            var buffer: ByteBuffer = contentItem.rawData;
            buffer.seek(0, 0);

            this._underConstruct = true;

            this.sourceWidth = buffer.readInt();
            this.sourceHeight = buffer.readInt();
            this.initWidth = this.sourceWidth;
            this.initHeight = this.sourceHeight;

            this.setSize(this.sourceWidth, this.sourceHeight);

            if (buffer.readBool()) {
                this.minWidth = buffer.readInt();
                this.maxWidth = buffer.readInt();
                this.minHeight = buffer.readInt();
                this.maxHeight = buffer.readInt();
            }

            if (buffer.readBool()) {
                f1 = buffer.readFloat();
                f2 = buffer.readFloat();
                this.internalSetPivot(f1, f2, buffer.readBool());
            }

            if (buffer.readBool()) {
                this._margin.top = buffer.readInt();
                this._margin.bottom = buffer.readInt();
                this._margin.left = buffer.readInt();
                this._margin.right = buffer.readInt();
            }

            var overflow: number = buffer.readByte();
            if (overflow == OverflowType.Scroll) {
                var savedPos: number = buffer.position;
                buffer.seek(0, 7);
                this.setupScroll(buffer);
                buffer.position = savedPos;
            }
            else
                this.setupOverflow(overflow);

            if (buffer.readBool())
                buffer.skip(8);

            this._buildingDisplayList = true;

            buffer.seek(0, 1);

            var controllerCount: number = buffer.readShort();
            for (i = 0; i < controllerCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                var controller  = new Controller();
                this._controllers.push(controller);
                controller.parent = this;
                controller.setup(buffer);

                buffer.position = nextPos;
            }

            buffer.seek(0, 2);

            var child: GObject;
            var childCount: number = buffer.readShort();
            for (i = 0; i < childCount; i++) {
                dataLen = buffer.readShort();
                curPos = buffer.position;

                if (objectPool != null) {
                    child = objectPool[poolIndex + i];
                } else {
                    buffer.seek(curPos, 0);

                    var type: ObjectType = buffer.readByte();
                    var src: string = buffer.readS();
                    var pkgId: string = buffer.readS();

                    var pi: PackageItem = null;
                    if (src != null) {
                        var pkg: UIPackage;
                        if (pkgId != null)
                            pkg = UIPackage.getById(pkgId);
                        else
                            pkg = contentItem.owner;

                        pi = pkg != null ? pkg.getItemById(src) : null;
                    }

                    if (pi != null) {
                        child = UIObjectFactory.newObject(pi);
                        child.constructFromResource();
                    } else {
                        child = UIObjectFactory.newObject2(type);
                    }
                }

                child._underConstruct = true;
                child.setup_beforeAdd(buffer, curPos);
                child.parent = this;
                this._children.push(child);
                buffer.position = curPos + dataLen;
            }

            buffer.seek(0, 3);
            this.relations.setup(buffer, true);

            buffer.seek(0, 2);
            buffer.skip(2);

            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                buffer.seek(buffer.position, 3);
                this._children[i].relations.setup(buffer, false);

                buffer.position = nextPos;
            }

            buffer.seek(0, 2);
            buffer.skip(2);

            for (i = 0; i < childCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                child = this._children[i];
                child.setup_afterAdd(buffer, buffer.position);
                child._underConstruct = false;
                buffer.position = nextPos;
            }

            buffer.seek(0, 4);

            buffer.skip(2); //customData
            this.opaque = buffer.readBool();
            var maskId: number = buffer.readShort();
            if (maskId != -1) {
                this.mask = <any>this.getChildAt(maskId).displayObject;
                buffer.readBool(); //reversedMask
            }
            var hitTestId: string = buffer.readS();
            i1 = buffer.readInt();
            i2 = buffer.readInt();
            if (hitTestId != null) {
                pi = contentItem.owner.getItemById(hitTestId);
                if (pi != null && pi.pixelHitTestData != null) {
                    this._rootContainer.hitArea = new PixelHitTest(pi.pixelHitTestData, i1, i2);
                }
            } else if (i1 != 0 && i2 != -1) {
                this._rootContainer.hitArea = <any>this.getChildAt(i2).displayObject;
            }

            buffer.seek(0, 5);

            var transitionCount: number = buffer.readShort();
            for (i = 0; i < transitionCount; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                var trans: Transition = new Transition(this);
                trans.setup(buffer);
                this._transitions.push(trans);

                buffer.position = nextPos;
            }
           
            if (this._transitions.length > 0) {
                this.on("added", this.___added, this);
                this.on("removed", this.___removed, this);
            }

            this.applyAllControllers();
            this._buildingDisplayList = false;
            this._underConstruct = false;
            this.buildNativeDisplayList();
            this.setBoundsChangedFlag();
            if (contentItem.objectType != ObjectType.Component){
                this.constructExtension(buffer);
            }
        }

        protected constructExtension(buffer: ByteBuffer): void {
        }

        // protected onConstruct(): void {
        //     this.constructFromXML(null);
        // }

        private buildNativeDisplayList(): void {
            var cnt: number = this._children.length;
            if (cnt == 0)
                return;

            var i: number;
            var child: GObject;
            switch (this._childrenRenderOrder) {
                case ChildrenRenderOrder.Ascent:
                    {
                        for (i = 0; i < cnt; i++) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;
                case ChildrenRenderOrder.Descent:
                    {
                        for (i = cnt - 1; i >= 0; i--) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;

                case ChildrenRenderOrder.Arch:
                    {
                        var apex: number = ToolSet.clamp(this._apexIndex, 0, cnt);
                        for (i = 0; i < apex; i++) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                        for (i = cnt - 1; i >= apex; i--) {
                            child = this._children[i];
                            if (child.displayObject != null && child.internalVisible)
                                this._container.addChild(child.displayObject);
                        }
                    }
                    break;
            }
        }
   

        protected appendChildrenList():void {
            this._children.forEach(child => {
                if (child.displayObject != null && child.finalVisible)
                    this._container.addChild(child.displayObject);
            }, this);
        }

        // protected constructFromXML(xml: utils.XmlNode): void {
        // }

        private ___added(d: PIXI.DisplayObject): void {
            var cnt: number = this._transitions.length;
            for (var i: number = 0; i < cnt; ++i) {
                this._transitions[i].onOwnerAddedToStage();
            }
        }

        private ___removed(d: PIXI.DisplayObject): void {
            var cnt: number = this._transitions.length;
            for (var i: number = 0; i < cnt; ++i) {
                this._transitions[i].onOwnerRemovedFromStage();
            }
        }
    }
}