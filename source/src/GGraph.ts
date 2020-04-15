/// <reference path="./GObject.ts" />

namespace fgui {

    export enum eGraphType {
        Empty,
        Rect,
        Ellipse,
        Path,
        Polygon
    }

    export class GGraph extends GObject implements IColorGear {
        ///
        /** @hide  绘制对象 */
        //private _graphics: PIXI.Graphics;
        /** @hide 类型 */
        private _type: number = eGraphType.Empty;
        /** @hide 线条大小 */
        private _lineSize: number = 0;
        /** @hide 线条颜色 */
        private _lineColor: number = 0;
        /** @hide 线条透明度  */
        private _lineAlpha: number;
        /** @hide 填充颜色 */
        private _fillColor: number = 0;
        /** @hide 填充透明度 */
        private _fillAlpha: number;
        private _cornerRadius: Array<number>;
        private _sides: number;
        private _startAngle: number;
        /** 多边形点 */
        private _polygonPoints: any[];
        private _distances: number[];
        private _corner: number[];

        public constructor() {
            super();

            this._lineSize = 1;
            this._lineAlpha = 1;
            this._fillAlpha = 1;
            this._fillColor = 0xFFFFFF;
        }

        /**
         * 获取原始 PIXI.Graphics 对象，通过这个对象可以调用 PIXI 的绘制接口
         */
        public get graphics(): PIXI.Graphics {
            return this._displayObject as PIXI.Graphics;
        }
        
        /**
         * 绘制矩形
         * @param lineSize 线条宽度
         * @param lineColor 线条颜色
         * @param lineAlpha 线条透明度
         * @param fillColor 填充颜色
         * @param fillAlpha 填充透明度
         * @param corner 
         * @return this
         */
        public drawRect(lineSize: number, lineColor: number, lineAlpha: number,
            fillColor: number, fillAlpha: number, corner: number[] = null): this {
            this._type = 1;
            this._lineSize = lineSize;
            this._lineColor = lineColor;
            this._lineAlpha = lineAlpha;
            this._fillColor = fillColor;
            this._fillAlpha = fillAlpha;
            this._corner = corner;
            return this.updateGraph();
        }

        public drawEllipse(lineSize: number, lineColor: number, lineAlpha: number,
            fillColor: number, fillAlpha: number): this {
            this._type = 2;
            this._lineSize = lineSize;
            this._lineColor = lineColor;
            this._lineAlpha = lineAlpha;
            this._fillColor = fillColor;
            this._fillAlpha = fillAlpha;
            this._corner = null;
            return this.updateGraph();
        }

        public get color(): number {
            return this._fillColor;
        }

        public set color(value: number) {
            this._fillColor = value;
            if (this._type != 0) {
                this.updateGraph();
            }
        }

        /** @hide update  */
        private updateGraph(): this {
            let ctx = this.graphics;
            if (!ctx) {
                return this;
            }
            ctx.interactive = this.touchable;
            ctx.clear();

            var w: number = this.width;
            var h: number = this.height;
            if (w == 0 || h == 0) {
                return;
            }
   
            if (this._lineSize == 0) {
                ctx.lineStyle(0, 0, 0);
            } else {
                ctx.lineStyle(this._lineSize, this._lineColor, this._lineAlpha);
            }
            
            ctx.beginFill(this._fillColor, this._fillAlpha);
            if (this._type == eGraphType.Rect) {
                if (this._cornerRadius && this._cornerRadius.length >= 1) {
                    ctx.drawRoundedRect(0, 0, w, h, this._cornerRadius[0] * 2);
                } else {
                    ctx.drawRect(0, 0, w, h);
                }
            }
            else if (this._type == eGraphType.Ellipse) {
                let halfW:number = w * .5;
                let  halfH:number = h * .5;
                if(w == h)
                    ctx.drawCircle(halfW, halfW, halfW);
                else
                    ctx.drawEllipse(halfW, halfH, halfW, halfH);
            } else if (this._type == eGraphType.Path) {
                ToolSet.fillPath(ctx, this._polygonPoints, 0, 0);
            } else if (this._type == eGraphType.Polygon) {
                if (!this._polygonPoints) {
                    this._polygonPoints = [];
                }
                var radius: number = Math.min(this._width, this._height) / 2;
                this._polygonPoints.length = 0;
                var angle: number = this._startAngle * Math.PI / 180;
                var deltaAngle: number = 2 * Math.PI / this._sides;
                var dist: number;
                for (var i: number = 0; i < this._sides; i++) {
                    if (this._distances) {
                        dist = this._distances[i];
                        if (isNaN(dist)) {
                            dist = 1;
                        }
                    } else {
                        dist = 1;
                    }

                    var xv: number = radius + radius * dist * Math.cos(angle);
                    var yv: number = radius + radius * dist * Math.sin(angle);
                    this._polygonPoints.push(xv, yv);

                    angle += deltaAngle;
                }

                ToolSet.fillPath(ctx, this._polygonPoints, 0, 0);
            }
            ctx.endFill();

            return this;
        }

        public replaceMe(target: GObject): void {
            if (!this._parent)
                throw new Error("parent not set");

            target.name = this.name;
            target.alpha = this.alpha;
            target.rotation = this.rotation;
            target.visible = this.visible;
            target.touchable = this.touchable;
            target.grayed = this.grayed;
            target.setXY(this.x, this.y);
            target.setSize(this.width, this.height);

            let index: number = this._parent.getChildIndex(this);
            this._parent.addChildAt(target, index);
            target.relations.copyFrom(this.relations);

            this._parent.removeChild(this, true);
        }

        public addBeforeMe(target: GObject): void {
            if (this._parent == null)
                throw new Error("parent not set");

            let index: number = this._parent.getChildIndex(this);
            this._parent.addChildAt(target, index);
        }

        public addAfterMe(target: GObject): void {
            if (this._parent == null)
                throw new Error("parent not set");

            let index: number = this._parent.getChildIndex(this);
            index++;
            this._parent.addChildAt(target, index);
        }

        public setNativeObject(obj: PIXI.DisplayObject): void {
            this._type = eGraphType.Empty;
            let g = this._displayObject as PIXI.Graphics;
            g.interactive = this.touchable;
            g.clear();
            g.removeChildren();  //clear old
            g.addChild(obj);
            
            // this.setDisplayObject(obj);
            // if (this._parent) {
            //     this._parent.childStateChanged(this);
            // }
            // this.handleXYChanged();
            // let sprite : PIXI.Sprite = new PIXI.Sprite();
            // sprite.alpha = this.alpha;
            // sprite.rotation = this.rotation;
            // sprite.visible = this.visible;
            // sprite.interactive = this.touchable;
            // sprite.interactiveChildren = this.touchable;
            // sprite.addChild(obj);
        }

        /** @hide */
        protected createDisplayObject():void {
            // let sprite = new UISprite(this);
            // sprite.interactive = false;
            // this._graphics = sprite;
            // this.setDisplayObject(sprite);
            this._displayObject = new UISprite(this);
        }

        /** 获取属性 */
        public getProp(index: number): any {
            if (index == ObjectPropID.Color)
                return this.color;
            else
                return super.getProp(index);
        }
        
        /** 设置属性 */
        public setProp(index: number, value: any): void {
            if (index == ObjectPropID.Color)
                this.color = value;
            else
                super.setProp(index, value);
        }

        /** 处理尺寸改变 */
        protected handleSizeChanged(): void {
            super.handleSizeChanged();
            if (this._type != eGraphType.Empty) {
                this.updateGraph();
            }
        }

        /**
         * 根据配置流设置属性
         * @hide 
         * @param buffer 对象属性流 
         * @param beginPos 其实位置
         */
        public setup_beforeAdd(buffer: ByteBuffer, beginPos: number): void {
            super.setup_beforeAdd(buffer, beginPos);

            buffer.seek(beginPos, 5);

            this._type = buffer.readByte();
            if (this._type != eGraphType.Empty) {
                var i: number;
                var cnt: number;

                this._lineSize = buffer.readInt();
                var c: number = buffer.readColor(true);
                this._lineColor = c & 0xFFFFFF;
                this._lineAlpha = ((c >> 24) & 0xFF) / 0xFF;
                c = buffer.readColor(true);
                this._fillColor = c & 0xFFFFFF;
                this._fillAlpha = ((c >> 24) & 0xFF) / 0xFF;
                if (buffer.readBool()) {
                    this._cornerRadius = new Array<number>(4);
                    for (i = 0; i < 4; i++) {
                        this._cornerRadius[i] = buffer.readFloat();
                    }
                }

                if (this._type == 3) {
                    cnt = buffer.readShort();
                    this._polygonPoints = [];
                    this._polygonPoints.length = cnt;
                    for (i = 0; i < cnt; i++) {
                        this._polygonPoints[i] = buffer.readFloat();
                    }
                }
                else if (this._type == 4) {
                    this._sides = buffer.readShort();
                    this._startAngle = buffer.readFloat();
                    cnt = buffer.readShort();
                    if (cnt > 0) {
                        this._distances = [];
                        for (i = 0; i < cnt; i++) {
                            this._distances[i] = buffer.readFloat();
                        }
                    }
                }

                this.updateGraph();
            }
        }
    }
}