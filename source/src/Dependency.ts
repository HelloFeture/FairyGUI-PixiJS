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

    export interface IDecompressObject {
        decompress(rawData : ArrayBuffer) : Uint8Array;
    }

    export interface IDecompressHandler {
        (rawData : ArrayBuffer) : Uint8Array;
    }

    export type DecompressAdapter = IDecompressObject | IDecompressHandler;

    /**
     * AssetLoader
     */
    export interface IAssetLoader {

    }

    export interface IAssetManagerObject {
        getAsset<T>(key : string) : T;
    }

    export interface IAssetManagerHandler {
        <T>(key : string) : T;
    }

    export type AssetManagerAdapter =  IAssetManagerObject | IAssetManagerHandler;
}