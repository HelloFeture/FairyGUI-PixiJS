namespace fgui {

    export class Relations {

        protected _owner: GObject;
        protected _items: RelationItem[];
        public handling: GObject;

        public sizeDirty: boolean = false;

        /**@internal */
        _dealing: GObject;  //currently deal with

        private static RELATION_NAMES: string[] =
        [
            "left-left",        //0
            "left-center",
            "left-right",
            "center-center",
            "right-left",
            "right-center",
            "right-right",
            "top-top",          //7
            "top-middle",
            "top-bottom",
            "middle-middle",
            "bottom-top",
            "bottom-middle",
            "bottom-bottom",
            "width-width",      //14
            "height-height",    //15
            "leftext-left",     //16
            "leftext-right",
            "rightext-left",
            "rightext-right",
            "topext-top",//20
            "topext-bottom",
            "bottomext-top",
            "bottomext-bottom"//23
        ];

        public constructor(owner: GObject) {
            this._owner = owner;
            this._items = [];
        }

        public add(target: GObject, relationType: number, usePercent: boolean = false): void {
            let length: number = this._items.length;
            for (let i: number = 0; i < length; i++) {
                let item: RelationItem = this._items[i];
                if (item.target == target) {
                    item.add(relationType, usePercent);
                    return;
                }
            }
            let newItem: RelationItem = new RelationItem(this._owner);
            newItem.target = target;
            newItem.add(relationType, usePercent);
            this._items.push(newItem);
        }

        public addItems(target: GObject, sidePairs: string): void {
            let arr: string[] = sidePairs.split(",");
            let s: string;
            let usePercent: boolean;
            
            for (let i = 0; i < 2; i++) {
                s = arr[i];
                if (!s)
                    continue;

                if (s.charAt(s.length - 1) == "%") {
                    s = s.substr(0, s.length - 1);
                    usePercent = true;
                }
                else
                    usePercent = false;
                if (s.indexOf("-") == -1)
                    s = `${s}-${s}`;

                let t: number = Relations.RELATION_NAMES.indexOf(s);
                if (t == -1)
                    throw new Error("Invalid relation type");

                this.add(target, t, usePercent);
            }
        }

        public remove(target: GObject, relationType: number = 0): void {
            let cnt: number = this._items.length;
            let i: number = 0;
            while (i < cnt) {
                let item: RelationItem = this._items[i];
                if (item.target == target) {
                    item.remove(relationType);
                    if (item.isEmpty) {
                        item.dispose();
                        this._items.splice(i, 1);
                        cnt--;
                    }
                    else
                        i++;
                }
                else
                    i++;
            }
        }

        public contains(target: GObject): boolean {
            let length: number = this._items.length;
            for (let i: number = 0; i < length; i++) {
                if (this._items[i].target == target)
                    return true;
            }
            return false;
        }

        public clearFor(target: GObject): void {
            let cnt: number = this._items.length;
            let i: number = 0;
            while (i < cnt) {
                let item: RelationItem = this._items[i];
                if (item.target == target) {
                    item.dispose();
                    this._items.splice(i, 1);
                    cnt--;
                }
                else
                    i++;
            }
        }

        public clearAll(): void {
            this._items.forEach(item => {
                item.dispose();
            }, this);
            this._items.length = 0;
        }

        public copyFrom(source: Relations): void {
            this.clearAll();

            var arr: Array<RelationItem> = source._items;
            var length: number = arr.length;
            for (var i: number = 0; i < length; i++) {
                var ri: RelationItem = arr[i];
                var item: RelationItem = new RelationItem(this._owner);
                item.copyFrom(ri);
                this._items.push(item);
            }
        }

        public dispose(): void {
            this.clearAll();
        }

        public onOwnerSizeChanged(dWidth: number, dHeight: number, applyPivot: boolean): void {
            if (this._items.length == 0)
                return;

            var length: number = this._items.length;
            for (var i: number = 0; i < length; i++) {
                var item: RelationItem = this._items[i];
                item.applyOnSelfResized(dWidth, dHeight, applyPivot);
            }
        }

        public ensureRelationsSizeCorrect(): void {
            if (this._items.length == 0)
                return;

            this.sizeDirty = false;
            var length: number = this._items.length;
            for (var i: number = 0; i < length; i++) {
                var item: RelationItem = this._items[i];
                item.target.ensureSizeCorrect();
            }
        }

        public get empty(): boolean {
            return this._items.length == 0;
        }

        public setup(buffer: ByteBuffer, parentToChild: boolean): void {
            var cnt: number = buffer.readByte();
            var target: GObject;
            for (var i: number = 0; i < cnt; i++) {
                var targetIndex: number = buffer.readShort();
                if (targetIndex == -1)
                    target = this._owner.parent;
                else if (parentToChild)
                    target = (<GComponent>this._owner).getChildAt(targetIndex);
                else
                    target = this._owner.parent.getChildAt(targetIndex);

                var newItem: RelationItem = new RelationItem(this._owner);
                newItem.target = target;
                this._items.push(newItem);

                var cnt2: number = buffer.readByte();
                for (var j: number = 0; j < cnt2; j++) {
                    var rt: number = buffer.readByte();
                    var usePercent: boolean = buffer.readBool();
                    newItem.internalAdd(rt, usePercent);
                }
            }
        }

        // public setup(xml: utils.XmlNode): void {
        //     xml.children.forEach(cxml => {
        //         if (cxml.nodeName != "relation")
        //             return;

        //         let targetId: string;
        //         let target: GObject;

        //         targetId = cxml.attributes.target;
        //         if (this._owner.parent) {
        //             if (targetId)
        //                 target = this._owner.parent.getChildById(targetId);
        //             else
        //                 target = this._owner.parent;
        //         }
        //         else {
        //             //call from the component's constructor
        //             target = (this._owner as GComponent).getChildById(targetId);
        //         }
        //         if (target)
        //             this.addItems(target, cxml.attributes.sidePair);
        //     }, this);
        // }
    }
}