/// <reference path="../PIXI/extras/Sprite.ts" />

namespace fgui {
    export class UIImage extends PIXI.Container implements IUIObject {
        public UIOwner:GObject;
        protected _disp: PIXI.TilingSprite | pixi_extend.NineSlicePlane | pixi_extend.Sprite;
       
        public playing : boolean;
        public frame : number;
        // FIXIME
        protected _fillMethod : FillMethod;
        protected _fillOrigin : number;
        protected _fillClockwise : number;
        protected _fillAmount : number;
        public fillMethod : number;
        public fillOrigin : number;
        public fillClockwise : boolean;
        public fillAmount : number;
        public smoothing : boolean;

        public constructor(owner?:GObject) {
            super();
            this.UIOwner = owner;
            this.interactive = this.interactiveChildren = false; 
            let a : PIXI.TilingSprite;
        }
        
        /**@internal */
        initDisp(item?: PackageItem): void {
            if (this._disp) {
                return;
            } 
            Debug.log("initDisp");
            if(item) {
                item.load();

                if (item.scaleByTile) {
                    this._disp = new PIXI.TilingSprite(item.texture);
                    Debug.log("initDisp scaleByTile....",)
                } else if (item.scale9Grid) {
                    this._disp = new pixi_extend.Sprite(item.id, item.texture);
                    // TODO
                    // this._disp = new pixi_extend.NineSlicePlane(
                    //     item.texture,
                    //     item.scale9Grid.left,
                    //     item.scale9Grid.top,
                    //     Math.max(0, item.texture.width - item.scale9Grid.width - item.scale9Grid.x),
                    //     Math.max(0, item.texture.height - item.scale9Grid.height - item.scale9Grid.y)
                    // );
                    // this.tiledSlices = item.tiledSlices;
                    // Debug.log("initDisp scale9Grid....",)
                } else {
                    Debug.log("initDisp normal....",)
                    this._disp = new pixi_extend.Sprite(item.id, item.texture);
                }
            } else {
                this._disp = new pixi_extend.Sprite();
                Debug.log("initDisp", "item is null");
            }
            
            this.addChild(this._disp);
        }

        public get tint():number {
            return this._disp.tint;
        }

        public set tint(v:number) {
            this._disp.tint = v;
        }

        public get height():number {
            return this._disp.height;
        }

        public set height(v:number) {
            this._disp.height = v;
        }

        public get width():number {
            return this._disp.width;
        }

        public set width(v:number) {
            this._disp.width = v;
        }
        
        public get texture(): PIXI.Texture {
            return this._disp.texture;
        }

        public set texture(v: PIXI.Texture) {
            //need to reset first?
            /*if (this._disp instanceof PIXI.extras.TilingSprite) {
                this._disp.tileScale.set(1, 1);
                this._disp.tilePosition.set(0, 0);
            }
            else if (this._disp instanceof PIXI.mesh.NineSlicePlane)
                this._disp.leftWidth = this._disp.topHeight = this._disp.rightWidth = this._disp.bottomHeight = 0;
            */
            this._disp.texture = v;
            Debug.log("uiimage texture", v.width, v.height);
        }

        /**
         * rect = x,y,w,h = l,t,r,b
         */
        public get scale9Grid(): PIXI.Rectangle {
            if (this._disp instanceof PIXI.NineSlicePlane) {
                return new PIXI.Rectangle(
                    this._disp.leftWidth,
                    this._disp.topHeight,
                    this._disp.rightWidth,
                    this._disp.bottomHeight
                );
            }
            return null;
        }

        /**
         * rect = x,y,w,h = l,t,r,b
         */
        public set scale9Grid(rect: PIXI.Rectangle) {
            if (this._disp instanceof PIXI.NineSlicePlane) {
                if(rect.left != this._disp.leftWidth)
                    this._disp.leftWidth = rect.left;
                if(rect.top != this._disp.topHeight)
                    this._disp.topHeight = rect.top;
                if(rect.right != this._disp.rightWidth)
                    this._disp.rightWidth = rect.right;
                if(rect.bottom != this._disp.bottomHeight)
                    this._disp.bottomHeight = rect.bottom;
            }
        }
        
        public get tiledSlices(): number {
            return 0;
        }

        public set tiledSlices(flags: number) {
            //not support
        }

        public get flipX():boolean {
            if (this._disp instanceof pixi_extend.NineSlicePlane || this._disp instanceof pixi_extend.Sprite) {
                return this._disp.flipX;
            }
            return false;
        }

        public get flipY():boolean {
            if (this._disp instanceof pixi_extend.NineSlicePlane || this._disp instanceof pixi_extend.Sprite) {
                return this._disp.flipY;
            }
            return false;
        }

        public set flipX(v:boolean) {
            if(GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                return;
            if (this._disp instanceof pixi_extend.NineSlicePlane || this._disp instanceof pixi_extend.Sprite) {
                this._disp.flipX = v;
            }
            
        }

        public set flipY(v:boolean) {
            if(GRoot.inst.applicationContext.renderer.type != PIXI.RENDERER_TYPE.WEBGL)
                return;
            
            if (this._disp instanceof pixi_extend.NineSlicePlane || this._disp instanceof pixi_extend.Sprite) {
                this._disp.flipY = v;
            }
        }

        public destroy(options?:  {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void {
            if(this._disp) {
                this._disp.destroy(options);
                this._disp = null;
            }
            super.destroy(options);
        }
    }

}