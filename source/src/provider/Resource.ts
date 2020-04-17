namespace fgui.provider {
    /**
     * 资源提供者
     */
    export interface IResourceProvider {
        getResource<T>(key : string) : T;
    }
}