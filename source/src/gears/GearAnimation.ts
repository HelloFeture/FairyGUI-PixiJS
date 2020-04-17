/// <reference path="./GearBase.ts" />

namespace fgui {

    export class GearAnimation extends GearBase<IAnimationGear> {
        private _storage: { [key: string]: GearAnimationValue };
        private _default: GearAnimationValue;

        public constructor(owner: GObject & IAnimationGear) {
            super(owner);
        }

        protected init(): void {
            this._default = new GearAnimationValue(this._owner.playing, this._owner.frame);
            //this._default = new GearAnimationValue(this._owner.getProp(ObjectPropID.Playing));
            this._storage = {};
        }

        protected addStatus(pageId: string, buffer: ByteBuffer): void {
            var gv: GearAnimationValue;
            if (pageId == null)
                gv = this._default;
            else {
                gv = new GearAnimationValue();
                this._storage[pageId] = gv;
            }
            gv.playing = buffer.readBool();
            gv.frame = buffer.readInt();
        }


        public apply(): void {
            this._owner._gearLocked = true;

            var gv: GearAnimationValue = this._storage[this._controller.selectedPageId];
            if (!gv)
                gv = this._default;

            // this._owner.setProp(ObjectPropID.Playing, gv.playing);
            // this._owner.setProp(ObjectPropID.Frame, gv.frame);

            this._owner.frame = gv.frame;
            this._owner.playing = gv.playing;

            this._owner._gearLocked = false;
        }


        public updateState(): void {
            // if (this._controller == null || this._owner._gearLocked || this._owner._inProgressBuilding)
            //     return;
            if (this._controller == null || this._owner._gearLocked)
                return;

            let gv: GearAnimationValue = this._storage[this._controller.selectedPageId];
            if (!gv) {
                gv = new GearAnimationValue();
                this._storage[this._controller.selectedPageId] = gv;
            }

            // gv.playing = this._owner.getProp(ObjectPropID.Playing);
            // gv.frame = this._owner.getProp(ObjectPropID.Frame);

            gv.frame = this._owner.frame;
            gv.playing = this._owner.playing;
        }
    }

    class GearAnimationValue implements IAnimationGear {
        public playing: boolean;
        public frame: number;

        public constructor(playing: boolean = true, frame: number = 0) {
            this.playing = playing;
            this.frame = frame;
        }
    }
}