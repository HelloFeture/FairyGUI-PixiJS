namespace fgui {

    export type AssetTypes = PIXI.Texture | BitmapFont | Frame[] | utils.XmlNode | PIXI.LoaderResource;

    type PackageItemDictionary = {
        [key: string]: PackageItem
    }

    type BitmapFontDictionary = {
        [key: string]: BitmapFont
    }

    type ResDataDictionary = {
        [key: string]: string
    }

    class AtlasConfig {
        public atlas: PackageItem;
        public atlasName: string;
        public texCacheID: string;
        public frame: PIXI.Rectangle;
        public orig: PIXI.Rectangle;
        public trim: PIXI.Rectangle;
        public rotate: number;


        public rotated: boolean;
        public constructor(atlasName:string, frame?:PIXI.Rectangle, orig?:PIXI.Rectangle, trim?:PIXI.Rectangle, rotate?:number) {
            this.atlasName = atlasName;
            this.frame = frame;
            this.orig = orig;
            this.trim = trim;
            this.rotate = rotate;
        }
    }

    type AtlasSprite = AtlasConfig;

    type AtlasDictionary = {
        [key: string]: AtlasConfig;
    }

    type StringSource = {
        [key: string]: string
    }
    type StringSourceMap = {
        [key: string]: StringSource
    }

    export class UIPackage {
        private _id: string;
        private _name: string;
        private _items: PackageItem[];
        private _itemsById: PackageItemDictionary;
        private _itemsByName: PackageItemDictionary;
        private _resKey: string;
        private _customId: string;
        private _atlasConfigs: AtlasDictionary;
        /** @hide 资源组名称 */
        private _assetGroupName : string =  utils.AssetManager.DEFAULT_GROUP;

        private _dependencies: Array<any>;
        private _branches: Array<string>;
        public _branchIndex: number;

        /**@internal */
        public static _constructing: number = 0;

        private static _bitmapFonts: BitmapFontDictionary = {};

        private static _stringsSource: StringSourceMap = null;

        private static _instById: any = {};
        private static _instByName: any = {};
        private static _branch: string = "";
        private static _vars: any = {};


        public constructor() {
            this._items = [];
            this._itemsById = {};
            this._itemsByName = {};
            this._atlasConfigs = {};
            this._dependencies = Array<any>();
            this._branches = Array<string>();
            this._branchIndex = -1;
        }

        public get id(): string {
            return this._id;
        }

        public get name(): string {
            return this._name;
        }

        public get customId(): string {
            return this._customId;
        }

        public set customId(value: string) {
            if (this._customId != null){
                delete UIPackage._instById[this._customId];
            }
            this._customId = value;
            if (this._customId != null){
                UIPackage._instById[this._customId] = this;
            }
        }

        public static getById(id: string): UIPackage {
            return UIPackage._instById[id];
        }

        public static getByName(name: string): UIPackage {
            return UIPackage._instByName[name];
        }

        public static get branch(): string {
            return UIPackage._branch;
        }

        public static set branch(value: string) {
            UIPackage._branch = value;
            for (var pkgId in UIPackage._instById) {
                var pkg: UIPackage = UIPackage._instById[pkgId];
                if (pkg._branches) {
                    pkg._branchIndex = pkg._branches.indexOf(value);
                }
            }
        }

        public static getVar(key: string): any {
            return UIPackage._vars[key];
        }

        public static setVar(key: string, value: any) {
            UIPackage._vars[key] = value;
        }

        /**
         * 添加资源包，添加之前，资源包必须已经下载完成，目标不支持内部加载。
         * @param resKey 包名称
         * @param assetGroupName 所在资源组，默认为 utils.AssetManager.DEFAULT_GROUP
         * @param decompressor 解压函数，如果使用压缩功能，需要提供
         */
        public static addPackage(resKey: string, assetGroupName : string = utils.AssetManager.DEFAULT_GROUP,  decompressor ?: Decompressor): UIPackage {
            let oldPkg = UIPackage._instById[resKey];
            if (oldPkg) {
                return oldPkg;
            }
            
            let assetDic = utils.AssetManager.inst.get(assetGroupName);
            if (!assetDic) {
                throw new Error(`could not find AssetDictory ${assetGroupName} in AssetManager`);
            }
            // 支持 _fgui 结尾
            let buf: PIXI.LoaderResource = assetDic[`${resKey}`] || assetDic[`${resKey}_fui`];
            if (!buf) {
                throw new Error(`Resource '${resKey}' not found, please make sure that you use "new fgui.utils.AssetLoader" to load resources instead of " PIXI.loaders.Loader".`);
            }

            if (!buf.data || !(buf.data instanceof ArrayBuffer)){
                throw new Error(`Resource '${resKey}' is not a proper binary resource, please load it as binary format by calling yourLoader.add(name, url, { loadType:PIXI.LoaderResource.LOAD_TYPE.XHR, xhrType: PIXI.LoaderResource.XHR_RESPONSE_TYPE.BUFFER })`);
            }

            let pkg: UIPackage = new UIPackage();
            Debug.log(`pakage length ${(buf.data as ArrayBuffer) .byteLength}`);
            pkg._resKey = resKey;
            pkg._assetGroupName = assetGroupName;
            pkg.loadPackage(new ByteBuffer(buf.data));
            UIPackage._instById[pkg.id] = pkg;
            UIPackage._instByName[pkg.name] = pkg;
            UIPackage._instById[resKey] = pkg;

            return pkg;
        }

        private loadPackage(buffer: ByteBuffer): void {
            // [0 ~ 3]  4字节 包版本/标识
            let pkgVersion : number = buffer.readUnsignedInt();
            if (pkgVersion != 0x46475549) {
                Debug.log(`package version ${pkgVersion}, expect ${0x46475549}`);
                throw "FairyGUI: old package format found in '" + this._resKey + "'";
            }
            // [4] 4字节 版本
            buffer.version = buffer.readInt();
            // [8] n  1字节 是否压缩
            var compressed: boolean = buffer.readBool();
            // [8 + n + 2] n 包ID
            this._id = buffer.readUTF();
            // [n] 包名称
            this._name = buffer.readUTF();
            buffer.skip(20);
            Debug.log("version", buffer.version);
            Debug.log("compressed", compressed);
            Debug.log("id", this._id);
            Debug.log("name", this._name);
            
            if (compressed) {
                var buf: Uint8Array = new Uint8Array(buffer.buffer, buffer.position, buffer.length - buffer.position);
                var inflater: Zlib.RawInflate = new Zlib.RawInflate(buf);
                let buffer2: ByteBuffer = new ByteBuffer(inflater.decompress());
                buffer2.version = buffer.version;
                buffer = buffer2;
            }

            var ver2: boolean = buffer.version >= 2;
            var indexTablePos: number = buffer.position;
            var cnt: number;
            var i: number;
            var nextPos: number;
            var str: string;
            var branchIncluded: boolean;

            buffer.seek(indexTablePos, 4);
            // 字符表 个数
            cnt = buffer.readInt();
            Debug.log(`string table count ${cnt}`);
            var stringTable: Array<string> = new Array<string>(cnt);
            for (i = 0; i < cnt; i++) {
                stringTable[i] = buffer.readUTF();
            }
            buffer.stringTable = stringTable;
            
            // 包依赖表
            buffer.seek(indexTablePos, 0);
            cnt = buffer.readShort();
            for (i = 0; i < cnt; i++){
                this._dependencies.push({ id: buffer.readS(), name: buffer.readS() });
            }
            Debug.log(`dependencies count ${cnt}`);
            // ??
            if (ver2) {
                cnt = buffer.readShort();
                if (cnt > 0) {
                    this._branches = buffer.readSArray(cnt);
                    if (UIPackage._branch){
                        this._branchIndex = this._branches.indexOf(UIPackage._branch);
                    }
                }

                branchIncluded = cnt > 0;
            }

            buffer.seek(indexTablePos, 1);

            // ？？ 
            var pi: PackageItem;
            var fileNamePrefix: string = this._resKey + "_";

            cnt = buffer.readShort();
            Debug.log("PackageItem count ", cnt, buffer.position);
            for (let i = 0; i < cnt; i++) {
                nextPos = buffer.readInt();
                nextPos += buffer.position;

                pi = new PackageItem();
                pi.owner = this;
                pi.type = buffer.readByte();
                pi.id = buffer.readS();
                pi.name = buffer.readS();
                buffer.readS(); //path
                pi.file = buffer.readS();
                buffer.readBool();//exported
                pi.width = buffer.readInt();
                pi.height = buffer.readInt();

                Debug.log("", `${pi.id} ${pi.name} ${pi.file} ${pi.width} ${pi.height} type ${pi.type}`);

                switch (pi.type) {
                    case PackageItemType.Image:
                        {
                            pi.objectType = ObjectType.Image;
                            var scaleOption: number = buffer.readByte();
                            if (scaleOption == 1) {
                                pi.scale9Grid = new PIXI.Rectangle();
                                pi.scale9Grid.x = buffer.readInt();
                                pi.scale9Grid.y = buffer.readInt();
                                pi.scale9Grid.width = buffer.readInt();
                                pi.scale9Grid.height = buffer.readInt();

                                pi.tileGridIndice = buffer.readInt();
                            }
                            else if (scaleOption == 2){
                                pi.scaleByTile = true;
                            }

                            pi.smoothing = buffer.readBool();
                            break;
                        }

                    case PackageItemType.MovieClip:
                        {
                            pi.smoothing = buffer.readBool();
                            pi.objectType = ObjectType.MovieClip;
                            pi.rawData = buffer.readBuffer();
                            break;
                        }

                    case PackageItemType.Font:
                        {
                            pi.rawData = buffer.readBuffer();
                            break;
                        }

                    case PackageItemType.Component:
                        {
                            var extension: number = buffer.readByte();
                            if (extension > 0){
                                pi.objectType = extension;
                            } else {
                                pi.objectType = ObjectType.Component;
                            }
                            pi.rawData = buffer.readBuffer();

                            UIObjectFactory.resolvePackageItemExtension(pi);
                            break;
                        }

                    case PackageItemType.Atlas:
                    case PackageItemType.Sound:
                    case PackageItemType.Misc:
                        {
                            pi.file = fileNamePrefix + ToolSet.getFileName(pi.file);
                            break;
                        }
                }

                if (ver2) {
                    str = buffer.readS();//branch
                    if (str){
                        pi.name = str + "/" + pi.name;
                    }

                    var branchCnt: number = buffer.readUnsignedByte();
                    if (branchCnt > 0) {
                        if (branchIncluded){
                            pi.branches = buffer.readSArray(branchCnt);
                        } else {
                            this._itemsById[buffer.readS()] = pi;
                        }
                    }

                    var highResCnt: number = buffer.readUnsignedByte();
                    if (highResCnt > 0){
                        pi.highResolution = buffer.readSArray(highResCnt);
                    }
                }

                this._items.push(pi);
                this._itemsById[pi.id] = pi;
                if (pi.name != null){
                    this._itemsByName[pi.name] = pi;
                }
                buffer.position = nextPos;
            }
            
            buffer.seek(indexTablePos, 2);

            cnt = buffer.readShort();   
            Debug.log("sprite count ", cnt);
            for (let i = 0; i < cnt; i++) {
                nextPos = buffer.readShort();
                nextPos += buffer.position;

                var itemId: string = buffer.readS();
                pi = this._itemsById[buffer.readS()];
                var cfg: AtlasConfig = new AtlasConfig(pi.id);
                cfg.atlas = pi;
                cfg.frame = new PIXI.Rectangle(buffer.readInt(), buffer.readInt(), buffer.readInt(), buffer.readInt())
                cfg.rotated = buffer.readBool();
                cfg.rotate = cfg.rotated ? 6 : 0;
                cfg.orig = cfg.rotate != 0 ? new PIXI.Rectangle(0, 0, cfg.frame.height, cfg.frame.width) : null;
                Debug.log("", `${itemId} ${cfg.frame.x} ${cfg.frame.y} ${cfg.frame.width} ${cfg.frame.height}`);

                if (ver2 && buffer.readBool()) {
                    // TODO
                    buffer.readInt();
                    buffer.readInt();
                    buffer.readInt();
                    buffer.readInt();
                }
                else {
                    // TODO
                }
                this._atlasConfigs[itemId] = cfg;

                buffer.position = nextPos;
            }

            if (buffer.seek(indexTablePos, 3)) {
                cnt = buffer.readShort();
                Debug.log("count3 ", cnt);
                for (i = 0; i < cnt; i++) {
                    nextPos = buffer.readInt();
                    nextPos += buffer.position;

                    pi = this._itemsById[buffer.readS()];
                    if (pi && pi.type == PackageItemType.Image) {
                        pi.pixelHitTestData = new PixelHitTestData();
                        pi.pixelHitTestData.load(buffer);
                    }

                    buffer.position = nextPos;
                }
            }
        }

        public static removePackage(packageIdOrName: string): void {
            let pkg: UIPackage = UIPackage._instById[packageIdOrName];
            if (!pkg){
                pkg = UIPackage._instByName[packageIdOrName];
            }
            if (!pkg){
                throw new Error("unknown package: " + packageIdOrName);
            }
            pkg.dispose();
            delete UIPackage._instById[pkg.id];
            delete UIPackage._instByName[pkg.name];
            delete UIPackage._instById[pkg._resKey];
            if (pkg._customId != null){
                delete UIPackage._instById[pkg._customId];
            }
        }

        public static createObject(pkgName: string, resName: string, userClass?: { new():GObject }): GObject {
            let pkg: UIPackage = UIPackage.getByName(pkgName);
            if (pkg){
                return pkg.createObject(resName, userClass);
            } else{
                return null;
            }
        }

        public static createObjectFromURL(url: string, userClass?: { new():GObject }): GObject {
            let pi: PackageItem = UIPackage.getItemByURL(url);
            if (pi){
                return pi.owner.internalCreateObject(pi, userClass);
            } else{
                return null;
            }
        }

        public static getItemURL(pkgName: string, resName: string): string {
            let pkg: UIPackage = UIPackage.getByName(pkgName);
            if (!pkg) {
                return null;
            }

            let pi: PackageItem = pkg._itemsByName[resName];
            if (!pi) {
                return null;
            }

            return `ui://${pkg.id}${pi.id}`;
        }

        public static getItemByURL(url: string): PackageItem {
            let pos1: number = url.indexOf("//");
            if (pos1 == -1){
                return null;
            }

            let pos2: number = url.indexOf("/", pos1 + 2);
            let pkg: UIPackage;
            if (pos2 == -1) {
                if (url.length > 13) {
                    let pkgId: string = url.substr(5, 8);
                    pkg = UIPackage.getById(pkgId);
                    if (pkg != null) {
                        let srcId: string = url.substr(13);
                        return pkg.getItemById(srcId);
                    }
                }
            }
            else {
                let pkgName: string = url.substr(pos1 + 2, pos2 - pos1 - 2);
                pkg = UIPackage.getByName(pkgName);
                if (pkg != null) {
                    let srcName: string = url.substr(pos2 + 1);
                    return pkg.getItemByName(srcName);
                }
            }

            return null;
        }

        public static getBitmapFontByURL(url: string): BitmapFont {
            return UIPackage._bitmapFonts[url];
        }

        public static setStringsSource(source: string): void {
            UIPackage._stringsSource = {};
            let xmlroot: utils.XmlNode = utils.XmlParser.tryParse(source);
            xmlroot.children.forEach(cxml => {
                if (cxml.nodeName == "string") {
                    let key: string = cxml.attributes.name;
                    let i: number = key.indexOf("-");
                    if (i == -1) return;

                    let text: string = cxml.children.length > 0 ? cxml.children[0].text : "";

                    let key2: string = key.substr(0, i);
                    let key3: string = key.substr(i + 1);
                    let col: StringSource = UIPackage._stringsSource[key2];
                    if (!col) {
                        col = {};
                        UIPackage._stringsSource[key2] = col;
                    }
                    col[key3] = text;
                }
            });
        }

        /**
         * format the URL from old version to new version
         * @param url url with old version format
         */
        public static normalizeURL(url: string): string {
            if (url == null)
                return null;

            let pos1: number = url.indexOf("//");
            if (pos1 == -1)
                return null;

            let pos2: number = url.indexOf("/", pos1 + 2);
            if (pos2 == -1)
                return url;

            let pkgName: string = url.substr(pos1 + 2, pos2 - pos1 - 2);
            let srcName: string = url.substr(pos2 + 1);
            return UIPackage.getItemURL(pkgName, srcName);
        }

        public dispose(): void {
            this._items.forEach(pi => {
                let texture: PIXI.Texture = pi.texture;
                if (texture != null) {
                    texture.destroy(true);
                    PIXI.Texture.removeFromCache(texture);
                }
                else if (pi.frames != null) {
                    pi.frames.forEach(f => {
                        texture = f.texture;
                        if(texture) {
                            texture.destroy(true);
                            PIXI.Texture.removeFromCache(texture);
                        }
                    });
                }
                else if (pi.bitmapFont != null)
                    delete UIPackage._bitmapFonts[pi.bitmapFont.id];
                    
                let cfg = this._atlasConfigs[pi.id];
                if(cfg) {
                    let assetDic = utils.AssetManager.inst.get(this._assetGroupName) || {};
                    // utils.AssetManager.inst.destroyResource(assetDic, `${this._resKey}_${cfg.atlasName}`);
                    utils.AssetManager.inst.destroyResource(assetDic, cfg.atlasName);
                }
            }, this);

            let assetDic = utils.AssetManager.inst.get(this._assetGroupName) || {};
            utils.AssetManager.inst.destroyResource(assetDic, `${this._resKey}`);
        }


        public createObject(resName: string, userClass?: { new():GObject }): GObject {
            let pi: PackageItem = this._itemsByName[resName];
            if (pi){
                return this.internalCreateObject(pi, userClass);
            } else {
                return null;
            }
        }

        public internalCreateObject(item: PackageItem, userClass: { new(): GObject; } = null): GObject {
            var g: GObject = UIObjectFactory.newObject(item, userClass);
            if (g == null){
                return null;
            }

            UIPackage._constructing++;
            g.constructFromResource();
            UIPackage._constructing--;
            return g;
        }

        public getItemById(itemId: string): PackageItem {
            return this._itemsById[itemId];
        }

        public getItemByName(resName: string): PackageItem {
            return this._itemsByName[resName];
        }

        public getItemAssetByName(resName: string): AssetTypes {
            let pi: PackageItem = this._itemsByName[resName];
            if (pi == null){
                throw new Error(`Resource '${resName}' not found`);
            }
            return this.getItemAsset(pi);
        }

        public getItemAsset(item: PackageItem): any {
            switch (item.type) {
                case PackageItemType.Image:
                    if (!item.decoded) {
                        item.decoded = true;
                        var sprite: AtlasSprite = this._atlasConfigs[item.id];
                        if (sprite != null) {
                            item.texture = this.createSpriteTexture(item.id, sprite);
                        }
                    }
                    return item.texture;

                case PackageItemType.Atlas:
                    
                    if (!item.decoded) {
                        item.decoded = true;
                        let fileName: string = (item.file != null && item.file.length > 0) ? item.file : (`${item.id}.png`);
                        Debug.log("Atlas filename", fileName);
                        //let resName: string = `${this._resKey}_${utils.StringUtil.getFileName(fileName)}`;
                        let resName: string = fileName;
                        let assetDic = utils.AssetManager.inst.get(this._assetGroupName) || {};
                        let res: PIXI.LoaderResource = assetDic[resName];
                        if (!res) {
                            throw new Error(`${resName} not found in fgui.utils.AssetLoader.resourcesPool, please use new AssetLoader() to load assets instead of using new PIXI.loaders.Loader(). besides, AssetLoader is a sub-class from PIXI.loaders.Loader so they have the same usage.`);
                        }
                        item.texture = res.texture;
                        if (!item.texture) {
                            res = assetDic[`${this._resKey}_${fileName}`];
                            item.texture = res.texture;
                        }
                    }
                    return item.texture;

                case PackageItemType.Sound:
                    // FIXME
                    // if (!item.decoded) {
                    //     item.decoded = true;
                    //     item.sound = RES.getRes(item.file);
                    //     if (!item.sound)
                    //         console.log("Resource '" + item.file + "' not found, please check default.res.json!");
                    // }
                    return null;

                case PackageItemType.Font:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadFont(item);
                    }
                    return item.bitmapFont;

                case PackageItemType.MovieClip:
                    if (!item.decoded) {
                        item.decoded = true;
                        this.loadMovieClip(item);
                    }
                    return item.frames;

                case PackageItemType.Misc:
                    //! FIXME
                default:
                    let assetDic = utils.AssetManager.inst.get(this._assetGroupName) || {};
                    //return assetDic[`${this._resKey}_${item.id}`];
                    return assetDic[item.file || `${this._resKey}_${item.id}`];;
            }
        }

        private createSpriteTexture(cfgName:string, cfg: AtlasConfig): PIXI.Texture {
            Debug.log("createSpriteTexture", `${this._resKey}_${cfg.atlasName}_${cfgName}`);
            let atlasItem: PackageItem = this._itemsById[cfg.atlasName];
            if (atlasItem != null) {
                let atlasTexture: PIXI.Texture = this.getItemAsset(atlasItem) as PIXI.Texture;
                if (!atlasTexture || !atlasTexture.baseTexture) return null;
                if(!cfg.texCacheID){
                    cfg.texCacheID = `${this._resKey}_${cfg.atlasName}_${cfgName}`;
                }

                let tex = PIXI.utils.TextureCache[cfg.texCacheID];
                if(!tex) {
                    tex = new PIXI.Texture(atlasTexture.baseTexture, cfg.frame, cfg.orig, cfg.trim, cfg.rotate);
                    PIXI.Texture.addToCache(tex, cfg.texCacheID);
                }
                return tex;
            }
            else {
                return null;
            }
        }

      

        private loadComponentChildren(item: PackageItem): void {
            let listNode: utils.XmlNode[] = utils.XmlParser.getChildNodes(item.componentData, "displayList");
            if (listNode != null && listNode.length > 0) {
                item.displayList = [];
                listNode[0].children.forEach(cxml => {
                    let tagName: string = cxml.nodeName;
                    let di: DisplayListItem;
                    let src: string = cxml.attributes.src;
                    if (src) {
                        let pkgId: string = cxml.attributes.pkg;
                        let pkg: UIPackage;
                        if (pkgId && pkgId != item.owner.id)
                            pkg = UIPackage.getById(pkgId);
                        else
                            pkg = item.owner;

                        let pi: PackageItem = pkg != null ? pkg.getItemById(src) : null;
                        if (pi != null)
                            di = new DisplayListItem(pi, null);
                        else
                            di = new DisplayListItem(null, tagName);
                    }
                    else {
                        if (tagName == "text" && cxml.attributes.input == "true")
                            di = new DisplayListItem(null, "inputtext");
                        else
                            di = new DisplayListItem(null, tagName);
                    }

                    di.desc = cxml;
                    item.displayList.push(di);
                });
            }
            else
                item.displayList = [];
        }

        

        private loadComponentTranslation(item: PackageItem): void {
            if (UIPackage._stringsSource == null)
                return;

            let strings: StringSource = UIPackage._stringsSource[this.id + item.id];
            if (strings == null)
                return;

            let value: string;
            let cxml: utils.XmlNode, dxml: utils.XmlNode;
            let ename: string;
            let elementId: string;
            let str: string;

            item.displayList.forEach(item => {

                cxml = item.desc;
                ename = cxml.nodeName;
                elementId = cxml.attributes.id;

                str = cxml.attributes.tooltips;
                if (str) {
                    value = strings[`${elementId}-tips`];
                    if (value != undefined)
                        cxml.attributes.tooltips = value;
                }

                let cs: utils.XmlNode[] = utils.XmlParser.getChildNodes(cxml, "gearText");
                dxml = cs && cs[0];
                if (dxml) {
                    value = strings[`${elementId}-texts`];
                    if (value != undefined)
                        dxml.attributes.values = value;

                    value = strings[`${elementId}-texts_def`];
                    if (value != undefined)
                        dxml.attributes.default = value;
                }

                if (ename == "text" || ename == "richtext") {
                    value = strings[elementId];
                    if (value != undefined)
                        cxml.attributes.text = value;
                    value = strings[`${elementId}-prompt`];
                    if (value != undefined)
                        cxml.attributes.prompt = value;
                }
                else if (ename == "list") {
                    cxml.children.forEach((exml, index) => {
                        if (exml.nodeName != "item")
                            return;
                        value = strings[`${elementId}-${index}`];
                        if (value != undefined)
                            exml.attributes.title = value;
                    });
                }
                else if (ename == "component") {
                    cs = utils.XmlParser.getChildNodes(cxml, "Button");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        value = strings[`${elementId}-0`];
                        if (value != undefined)
                            dxml.attributes.selectedTitle = value;
                        return;
                    }

                    cs = utils.XmlParser.getChildNodes(cxml, "Label");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;
                        return;
                    }

                    cs = utils.XmlParser.getChildNodes(cxml, "ComboBox");
                    dxml = cs && cs[0];
                    if (dxml) {
                        value = strings[elementId];
                        if (value != undefined)
                            dxml.attributes.title = value;

                        dxml.children.forEach((exml, index) => {
                            if (exml.nodeName != "item")
                                return;
                            value = strings[`${elementId}-${index}`];
                            if (value != undefined)
                                exml.attributes.title = value;
                        });
                        return;
                    }
                }
            });
        }

        private loadMovieClip(item: PackageItem): void {
            var buffer: ByteBuffer = item.rawData;

            buffer.seek(0, 0);

            item.interval = buffer.readInt();
            item.swing = buffer.readBool();
            item.repeatDelay = buffer.readInt();

            buffer.seek(0, 1);

            var frameCount: number = buffer.readShort();
            item.frames = Array<Frame>(frameCount);

            var spriteId: string;
            var frame: Frame;
            var sprite: AtlasConfig;
            var fx: number;
            var fy: number;
            var width : number;
            var height : number;

            for (var i: number = 0; i < frameCount; i++) {
                var nextPos: number = buffer.readShort();
                nextPos += buffer.position;

                frame = new Frame();
                fx = buffer.readInt();
                fy = buffer.readInt();
                width = buffer.readInt();//width
                height = buffer.readInt();//height
                frame.addDelay = buffer.readInt();
                spriteId = buffer.readS();
                let trimRect: PIXI.Rectangle = new PIXI.Rectangle(fx, fy, width, height);
                
                if (spriteId != null && (sprite = this._atlasConfigs[spriteId]) != null) {
                    sprite.trim = trimRect;
                    frame.texture = this.createSpriteTexture(spriteId, sprite);
                }
                item.frames[i] = frame;

                buffer.position = nextPos;
            }
        }

        

        private loadFont(item: PackageItem): void {
            var font: BitmapFont = new BitmapFont();
            font.id = `ui://${this.id}${item.id}`;
            item.bitmapFont = font;
            var buffer: ByteBuffer = item.rawData;

            buffer.seek(0, 0);

            font.ttf = buffer.readBool();
            font.tint = buffer.readBool();
            font.resizable = buffer.readBool();
            buffer.readBool(); //has channel
            font.size = buffer.readInt();
            var xadvance: number = buffer.readInt();
            var lineHeight: number = buffer.readInt();

            var mainTexture: PIXI.Texture = null;
            var mainSprite: AtlasConfig = this._atlasConfigs[item.id];
            if (mainSprite != null){
                mainTexture = <PIXI.Texture>(this.getItemAsset(mainSprite.atlas));
            }

            buffer.seek(0, 1);

            var bg: BMGlyph = null;
            var cnt: number = buffer.readInt();
            for (var i: number = 0; i < cnt; i++) {
                var nextPos: number = buffer.readShort();
                nextPos += buffer.position;

                bg = new BMGlyph();
                var ch: string = buffer.readChar();
                font.glyphs[ch] = bg;

                var img: string = buffer.readS();
                var bx: number = buffer.readInt();
                var by: number = buffer.readInt();
                bg.x = buffer.readInt();
                bg.y = buffer.readInt();
                bg.width = buffer.readInt();
                bg.height = buffer.readInt();
                bg.advance = buffer.readInt();
                bg.channel = buffer.readByte();
                if (bg.channel == 1)
                    bg.channel = 3;
                else if (bg.channel == 2)
                    bg.channel = 2;
                else if (bg.channel == 3)
                    bg.channel = 1;

                if (font.ttf) {
                    let cfg: AtlasConfig = this._atlasConfigs[item.id];
                    let atlasOffsetX = cfg.frame.x;
                    let atlasOffsetY = cfg.frame.y;
                    bg.texture = new PIXI.Texture(mainTexture.baseTexture, new PIXI.Rectangle(bg.x + atlasOffsetX, bg.y + atlasOffsetY, bg.width, bg.height));
                    bg.lineHeight = lineHeight;
                } else {
                    var charImg: PackageItem = this._itemsById[img];
                    if (charImg) {
                        this.getItemAsset(charImg);
                        bg.width = charImg.width;
                        bg.height = charImg.height;
                        bg.texture = charImg.texture;
                    }

                    if (bg.advance == 0) {
                        if (xadvance == 0)
                            bg.advance = bg.x + bg.width;
                        else
                        
                            bg.advance = xadvance;
                    }

                    bg.lineHeight = bg.y < 0 ? bg.height : (bg.y + bg.height);
                    if (bg.lineHeight < font.size)
                        bg.lineHeight = font.size;
                }
                buffer.position = nextPos;
            }
        }
    }
}