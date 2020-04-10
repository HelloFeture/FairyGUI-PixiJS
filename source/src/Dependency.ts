namespace fgui {
    /**
     * @description
     * -en 
     * decompressor for uipackage.fgui, for example use zlib to compress :
     * let compressor = new Zlib. 
     * -zh 
     * 解压函数，如果在发布fairygui项目的时候选择了二进制压缩，则需要提供解压函数，
     * 使用 ZLib 解压示例如下：
     * 
     */
    export type Decompressor = (rawData : ArrayBuffer) => Uint8Array;

    /**
     * AssetLoader
     */
    export interface IAssetLoader {

    }
}