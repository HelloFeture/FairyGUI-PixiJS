namespace fgui.utils {
        

        //////////////////////////////////////////////////////////
        /**
         * https://github.com/englercj/resource-loader
         * PIXI 目前的部分接口没有提示功能，封装
         */
        export type OnProgressSignal = (loader: AssetLoader, resource: PIXI.LoaderResource) => void;
        export type OnErrorSignal = (errMessage: string, loader: AssetLoader, resource: PIXI.LoaderResource) => void;
        export type OnLoadSignal = (loader: AssetLoader, resource: PIXI.LoaderResource) => void;
        export type OnStartSignal = (loader: AssetLoader) => void;
        export type OnCompleteSignal = (loader: AssetLoader, resources: PIXI.IResourceDictionary) => void;
        export type MiddlewareFn = (resource: PIXI.LoaderResource, next: () => void) => void;
        export type ArgumentTypes<T> = T extends (...args: infer U) => infer R ? U : never;
        export type ReplaceReturnType<T, TNewReturn> = (...a: ArgumentTypes<T>) => TNewReturn;
        export type SignalFilterFn<T> = ReplaceReturnType<T, boolean>;
        export type SignalCallbackFn<T> = ReplaceReturnType<T, void>;
        export interface SignalBinding<T extends Function> {
            readonly fn: SignalCallbackFn<T>;
            readonly once: boolean;
            readonly thisArg: any;
            next: SignalBinding<T> | null;
            prev: SignalBinding<T> | null;
            owner: Signal<any> | null;
            constructor(fn: SignalCallbackFn<T>, once: boolean | undefined, thisArg: any);
            detach(): boolean;
            dispose(): void;
        }
        export interface Signal<T extends Function> {
            handlers(): SignalBinding<T>[];
            hasAny(): boolean;
            has(node: SignalBinding<T>): boolean;
            dispatch(...args: ArgumentTypes<T>): boolean;
            add(fn: SignalCallbackFn<T>, thisArg?: any): SignalBinding<T>;
            once(fn: SignalCallbackFn<T>, thisArg?: any): SignalBinding<T>;
            detach(node: SignalBinding<T>): this;
            detachAll(): this;
            filter(filter: SignalFilterFn<T>): void;
            proxy(...signals: Signal<T>[]): this;
        }
        //////////////////////////////////////////////////////////

        /** 资源组 */
        export type AssetGroup = {[key : string] : PIXI.IResourceDictionary};

        /** 一个资源条目 */
        export interface IAssetInfoItem {
            /**
             * 名称，如 Bag.fui 对应的资源名应该为 Bag
             */
            name : string;
            /**
             * 资源路径，如 assets/UI/Bag.fui
             */
            path : string;
        }

        /** 资源组 */
        export interface IAssetItemInfoGroup {
            /**
             * 资源组名称，如 Group1
             */
            name : string;
            /**
             * 资源条目信息
             */
            items : Array<IAssetInfoItem>;
        }

        /** 
         * 资源管理。 
         * 目前的资源条目命名规则：文件名无后缀
         * 
         */
        export class AssetManager {
            /** @hide 默认资源组名称 */
            public static readonly DEFAULT_GROUP : string = "default";
            private static _inst : AssetManager;
            /**
             * 单例
             */
            public static get inst() : AssetManager {
                if (!AssetManager._inst) {
                    AssetManager._inst = new AssetManager();
                }
                return AssetManager._inst;
            }
            /** @hide 资源组 */
            private  _assetGroup : AssetGroup = {
                [AssetManager.DEFAULT_GROUP] : {},
            };

            /** 获取资源管理 */
            public get assetGroup() : AssetGroup{
                return this._assetGroup;
            }

            /** 
             * 获取资源组
             * @param groupName 组名称，默认为 "default"
             * @return 返回组对应的资源
             */
            public get(groupName : string = AssetManager.DEFAULT_GROUP) : PIXI.IResourceDictionary{
                return this._assetGroup[groupName];
            }

            /**
             * 设置资源组
             * @param groupName 资源组名称
             * @param assetDic 资源组
             * @return this
             */
            public set(groupName : string , assetDic : PIXI.IResourceDictionary) : this{
                if (!groupName) {
                    throw new Error("groupName could not empty");
                }
                this.assetGroup[groupName] = assetDic;
                return this;
            }

            /**
             * 添加资源
             * @param groupName 组名，如果已经存在组名，已经存在的将会被覆盖 
             * @param assets 资源组
             * @return this
             */
            public add(groupName : string, assetDic : PIXI.IResourceDictionary) : this {
                this.assetGroup[groupName] = assetDic;
                return this;
            }

            /**
             * 将资源组从资源管理对象中移除，改操作不释放资源
             * @param groupName 资源组名，默认为 "default"
             * @return this
             */
            public remove(groupName : string = AssetManager.DEFAULT_GROUP) : this {
                this.assetGroup[groupName] = null;
                delete this.assetGroup[groupName];
                return this;
            }
            
            /**
             * 销毁资源组中的资源
             * @param groupName 资源组，默认为 "default"
             * @return this
             */
            public destroyAsset(groupName : string = AssetManager.DEFAULT_GROUP) : this {
                let assetsDic = this.assetGroup[groupName];
                if (!assetsDic) {
                    return ;
                }
                for (let key in assetsDic) {
                    this.destroyResource(assetsDic, key);
                }
                this.assetGroup[groupName] = null;
                delete this.assetGroup[groupName];
                return this;
            }

            /**
             * 销毁一个资源
             * @param assetDic 资源所在资源组
             * @param key 资源名称
             */
            public destroyResource(assetDic: PIXI.IResourceDictionary, key?: string): void {
                let res = assetDic[key];
                if (!res) {
                    return;
                }

                if (!res.isComplete) {
                    res.abort();
                }
                res.children = null;
                res.data = null;
                res.texture && res.texture.destroy();

                if (res.textures) {
                    for (let tkey in res.textures) {
                        let texture = res.textures[tkey];
                        texture && texture.destroy();
                        res.textures[tkey] = undefined;
                        delete res.textures[tkey];
                    }
                }
                res.textures = null;
                res.xhr = null;
                assetDic[key] = null;
                delete assetDic[key];
            }
        }
        
        /**
         * PIXI 资源加载封装
         * 5.x PIXI版本使用加载器 ：https://github.com/englercj/resource-loader
         */
        export class AssetLoader extends PIXI.Loader {

            /** @hide 资源组名 */
            protected _groupName : string;
            /** 获取资源组名称 */
            public get groupName() : string {
                return this._groupName;
            }
            /** 设置资源组名称，如果设置为null,将会重新设置为 AssetManager.DEFAULT_GROUP */
            public set groupName(val : string) {
                if (typeof(val) !== "string") {
                    this._groupName = AssetManager.DEFAULT_GROUP;
                } else {
                    this._groupName = val;
                }
            }
            protected _autoAddToAssetManager : boolean;
            public get autoAddToAssetManager() : boolean {
                return this._autoAddToAssetManager;
            }
            public set autoAddToAssetManager(val : boolean) {
                if (val === this._autoAddToAssetManager) {
                    return ;
                }
                this._autoAddToAssetManager = val;
                if (val) {
                    this.__listenOnceLoadComplete();
                }
            }
            /**
             * 构造函数
             * @param gourpName 资源组名，默认为 utils.AssetManager.DEFAULT_GROUP
             * @param addToAssetManager 是否自动加载到 AssetManager 资源管理器中, 默认为 true
             * @param baseUrl baseUrl
             * @param concurrency 并行数量
             */
            public constructor(gourpName : string = AssetManager.DEFAULT_GROUP, addToAssetManager : boolean = true,  baseUrl?:string, concurrency?:number) {
                super(baseUrl, concurrency);
                this._groupName = gourpName;
                this._autoAddToAssetManager = addToAssetManager;
                if (this._autoAddToAssetManager) {
                    this.__listenOnceLoadComplete();
                }
            }

            private __listenOnceLoadComplete() : void {
                this.completeSignal.once(function () : void {
                    AssetManager.inst.add(this._groupName, this.resources);
                }, this);
            }

            /** this.onComplete 封装 */
            public get completeSignal() : Signal<OnCompleteSignal> {
                return this.onComplete;
            }
            /** this.onError 封装 */
            public get errorSignal() :Signal<OnErrorSignal> {
                return this.onError;
            }
            /** this.onLoad 封装 */
            public get loadSignal() :Signal<OnLoadSignal> {
                return this.onLoad;
            }
            /** this.onStart 封装 */
            public get startSignal() :Signal<OnStartSignal> {
                return this.onStart;
            }
            /** this.onProgress 封装 */
            public get progressSignal() :Signal<OnProgressSignal> {
                return this.onProgress;
            }
        
            /** 在开发环境中(非 CommonJs/ES6 )，发现 add 接口 typescript 无提示功能*/
            public easyAdd(url: string): this;
            public easyAdd(name: string, url: string): this;
            public easyAdd(name: string, url: string, options?: PIXI.ILoaderOptions, cb?: Function): this;
            public easyAdd(obj: string | any | any[], options?: PIXI.ILoaderOptions, cb?: Function): this;
            public easyAdd(...args : any[]) : this {
                return this.add(...args);
            }

            /**
             * 批量添加，等同于 this.add(name: string, url: string)
             * @param list 资源信息条目列表
             * @return this
             */
            public addGroup(list : Array<IAssetInfoItem>) : this {
                for (let item of list) {
                    this.easyAdd(item.name, item.path);
                }
                return this;
            }

            /**
             * 异步加载
             * @return {PIXI.IResourceDictionary} 成功
             * @return {Error} 失败 
             */
            public loadAsync() : Promise<PIXI.IResourceDictionary | Error>{
                return new Promise<PIXI.IResourceDictionary | Error>(resolve => {
                    this.completeSignal.once(function () : void {
                        if (this._autoAddToAssetManager) {
                            AssetManager.inst.add(this._groupName, this.resources);
                        }
                        resolve(this.resources);
                    }, this);
                    this.errorSignal.once(function (errMessage: string, loader: AssetLoader, resource: PIXI.LoaderResource) : void {
                        resolve(new Error(errMessage));
                    }, this);
                    this.load();
                });
            }
        }
    }