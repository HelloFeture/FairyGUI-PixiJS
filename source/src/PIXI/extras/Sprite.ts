namespace fgui.pixi_extend {

    export class Sprite extends PIXI.Sprite {

        protected _flipX: boolean = false;
        protected _flipY: boolean = false;
        protected _frameId: string;

        protected static _cachedTexturePool: { [key: string]: { refCount: number, texture: PIXI.Texture } } = {};

        public constructor(frameId?: string, tex?: PIXI.Texture) {
            super(tex);
            this._frameId = frameId;
        }

        public get flipX(): boolean {
            return this._flipX;
        }

        public get flipY(): boolean {
            return this._flipY;
        }

        public set flipX(v: boolean) {
            if (this._flipX != v) {
                this._flipX = v;
                fgui.GTimer.inst.callLater(this.updateUvs, this);
            }
        }

        public set flipY(v: boolean) {
            if (this._flipY != v) {
                this._flipY = v;
                fgui.GTimer.inst.callLater(this.updateUvs, this);
            }
        }

        private combineCacheId(flipx: boolean, flipy: boolean): string {
            if (!this._frameId || this._frameId == "") return null;
            return `_{this._frameId}_{flipx ? '_fx' : ''}_{flipy ? '_fy' : ''}`;
        }

        private getTextureFromCache(flipx: boolean, flipy: boolean): PIXI.Texture {
            const cachedid = this.combineCacheId(flipx, flipy);
            if (cachedid == null) return this.texture;

            let ret = Sprite._cachedTexturePool[cachedid];
            if (!ret) {
                ret = {
                    refCount: 1,
                    texture: this.createFlippedTexture(this.texture, flipx, flipy)
                };
                Sprite._cachedTexturePool[cachedid] = ret;
            }
            else
                ret.refCount++;
            return ret.texture;
        }

        private tryRemoveTextureCache(flipx: boolean, flipy: boolean): boolean {
            const cachedid = this.combineCacheId(flipx, flipy);
            if (!cachedid) return false;

            let ret = Sprite._cachedTexturePool[cachedid];
            if (ret) {
                ret.refCount--;
                if (ret.refCount <= 0) {
                    ret.texture.destroy();
                    delete Sprite._cachedTexturePool[cachedid];
                }
                return true;
            }
            return false;
        }

        private createFlippedTexture(origTexture: PIXI.Texture, flipx: boolean, flipy: boolean): PIXI.Texture {
            let newTex = origTexture.clone();
            
            let uvs =  newTex["_uvs"] as PIXI.TextureUvs;
            if (this._flipX) {
                const tx0 = uvs.x0;
                const tx3 = uvs.x3;
                uvs.x0 = uvs.x1;
                uvs.x1 = tx0;
                uvs.x3 = uvs.x2;
                uvs.x2 = tx3;
            }
            if (this._flipY) {
                const ty0 = uvs.y0;
                const ty1 = uvs.y1;
                uvs.y0 = uvs.y3;
                uvs.y3 = ty0;
                uvs.y1 = uvs.y2;
                uvs.y2 = ty1;
            }
            newTex.uvMatrix

            // uvs.uvsUint32[0] = (uvs.y0 * 65535 & 0xFFFF) << 16 | uvs.x0 * 65535 & 0xFFFF;
            // uvs.uvsUint32[1] = (uvs.y1 * 65535 & 0xFFFF) << 16 | uvs.x1 * 65535 & 0xFFFF;
            // uvs.uvsUint32[2] = (uvs.y2 * 65535 & 0xFFFF) << 16 | uvs.x2 * 65535 & 0xFFFF;
            // uvs.uvsUint32[3] = (uvs.y3 * 65535 & 0xFFFF) << 16 | uvs.x3 * 65535 & 0xFFFF;

            return newTex;
        }

        private updateUvs(): void {
            if (!this.texture) return;

            if (this._flipX || this._flipY) {
                let cachedTex = this.getTextureFromCache(this._flipX, this._flipY);
                if (this.texture != cachedTex){
                    this.texture = cachedTex;
                }
            }
        }

        public destroy(options?: {
            children?: boolean;
            texture?: boolean;
            baseTexture?: boolean;
        }): void {
            this.tryRemoveTextureCache(this._flipX, this._flipY);
            super.destroy(options);
        }
    }
}