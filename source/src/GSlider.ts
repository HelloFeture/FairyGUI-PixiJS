namespace fgui {

    export class GSlider extends GComponent {
        private _min: number = 0;
        protected _max: number = 0;
        protected _value: number = 0;
        protected _titleType: ProgressTitleType;

        protected _titleObject: GTextField;
        protected _aniObject: GObject;
        protected _barObjectH: GObject;
        protected _barObjectV: GObject;

        protected _barMaxWidth: number = 0;
        protected _barMaxHeight: number = 0;
        protected _barMaxWidthDelta: number = 0;
        protected _barMaxHeightDelta: number = 0;
        protected _gripObject: GObject;

        private _clickPos: PIXI.Point;
        private _clickPercent: number;

        public constructor() {
            super();

            this._titleType = ProgressTitleType.Percent;
            this._value = 50;
            this._max = 100;
            this._clickPos = new PIXI.Point();
        }

        public get titleType(): ProgressTitleType {
            return this._titleType;
        }

        public set titleType(value: ProgressTitleType) {
            this._titleType = value;
        }

        public get max(): number {
            return this._max;
        }

        public set max(value: number) {
            if (this._max != value) {
                this._max = value;
                this.update();
            }
        }

        public get value(): number {
            return this._value;
        }

        public set value(value: number) {
            if (this._value != value) {
                this._value = value;
                this.update();
            }
        }

        public update(): void {
            let percent: number = Math.min(this._value / this._max, 1);
            this.updateWidthPercent(percent);
        }

        private updateWidthPercent(percent: number): void {
            if (this._titleObject) {
                switch (this._titleType) {
                    case ProgressTitleType.Percent:
                        this._titleObject.text = `${Math.round(percent * 100)}%`;
                        break;

                    case ProgressTitleType.ValueAndMax:
                        this._titleObject.text = `${this._value}/${this._max}`;
                        break;

                    case ProgressTitleType.Value:
                        this._titleObject.text = `${this._value}`;
                        break;

                    case ProgressTitleType.Max:
                        this._titleObject.text = `${this._max}`;
                        break;
                }
            }

            if (this._barObjectH)
                this._barObjectH.width = (this.width - this._barMaxWidthDelta) * percent;
            if (this._barObjectV)
                this._barObjectV.height = (this.height - this._barMaxHeightDelta) * percent;

            if (this._aniObject instanceof GMovieClip)
                (this._aniObject as GMovieClip).frame = Math.round(percent * 100);
        }

        protected handleSizeChanged(): void {
            super.handleSizeChanged();

            if (this._barObjectH)
                this._barMaxWidth = this.width - this._barMaxWidthDelta;
            if (this._barObjectV)
                this._barMaxHeight = this.height - this._barMaxHeightDelta;
            if (!this._inProgressBuilding)
                this.update();
        }

        public setup_afterAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_afterAdd(buffer, beginPos);

            if (!buffer.seek(beginPos, 6)) {
                this.update();
                return;
            }

            if (buffer.readByte() != this.packageItem.objectType) {
                this.update();
                return;
            }

            this._value = buffer.readInt();
            this._max = buffer.readInt();
            if (buffer.version >= 2)
                this._min = buffer.readInt();

            this.update();
        }

        // public setupAfterAdd(xml: utils.XmlNode): void {
        //     super.setupAfterAdd(xml);

        //     xml = utils.XmlParser.getChildNodes(xml, "Slider")[0];
        //     if (xml) {
        //         this._value = parseInt(xml.attributes.value);
        //         this._max = parseInt(xml.attributes.max);
        //     }

        //     this.update();
        // }

       

        private _gripMouseDown(evt: PIXI.interaction.InteractionEvent): void {
            this._clickPos = this.globalToLocal(evt.data.global.x, evt.data.global.y);
            this._clickPercent = this._value / this._max;

            GRoot.inst.nativeStage.on(InteractiveEvents.Move, this._gripMouseMove, this);
            GRoot.inst.nativeStage.on(InteractiveEvents.Up, this._gripMouseUp, this);
        }

        private static sSilderHelperPoint: PIXI.Point = new PIXI.Point();

        private _gripMouseMove(evt: PIXI.interaction.InteractionEvent): void {
            let pt: PIXI.Point = this.globalToLocal(evt.data.global.x, evt.data.global.y, GSlider.sSilderHelperPoint);
            let deltaX: number = pt.x - this._clickPos.x;
            let deltaY: number = pt.y - this._clickPos.y;

            let percent: number;
            if (this._barObjectH)
                percent = this._clickPercent + deltaX / this._barMaxWidth;
            else
                percent = this._clickPercent + deltaY / this._barMaxHeight;
            if (percent > 1)
                percent = 1;
            else if (percent < 0)
                percent = 0;
            let newValue: number = Math.round(this._max * percent);
            if (newValue != this._value) {
                this._value = newValue;
                this.emit(StateChangeEvent.CHANGED, this);
            }
            this.updateWidthPercent(percent);
        }

        private _gripMouseUp(evt: PIXI.interaction.InteractionEvent): void {
            let percent: number = this._value / this._max;
            this.updateWidthPercent(percent);

            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._gripMouseMove, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._gripMouseUp, this);
        }

        public dispose():void {
            if (this._gripObject)
                this._gripObject.off(InteractiveEvents.Down, this._gripMouseDown, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Move, this._gripMouseMove, this);
            GRoot.inst.nativeStage.off(InteractiveEvents.Up, this._gripMouseUp, this);
            super.dispose();
        }
    }
}