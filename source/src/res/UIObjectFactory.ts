namespace fgui {

    type ExtensionClassDictionary = {
        [key: string]: new () => GComponent
    };

    export class UIObjectFactory {

        private static packageItemExtensions: ExtensionClassDictionary = {};
        public static extensions: ExtensionClassDictionary = UIObjectFactory.packageItemExtensions;
        private static loaderType: any;

        private static loaderExtension: new () => GLoader;
        
        public static setExtension(url: string, type: { new(): GComponent }): void {
            this.setPackageItemExtension(url, type);
        }

        public static setPackageItemExtension(url: string, type: { new(): GComponent }): void {
            UIObjectFactory.packageItemExtensions[url.substring(5)] = type;
        }

        public static setLoaderExtension(type: { new(): GLoader }): void {
            UIObjectFactory.loaderExtension = type;
        }

        public static resolvePackageItemExtension(pi: PackageItem): void {
            pi.extensionType = UIObjectFactory.extensions["ui://" + pi.owner.id + pi.id];
            if (!pi.extensionType){
                pi.extensionType = UIObjectFactory.extensions["ui://" + pi.owner.name + "/" + pi.name];
            }
        }

        public static newObject(pi: PackageItem, userClass: { new(): GObject; } = null): GObject {
            var obj: GObject;
            Debug.log("newObject", pi.file);
            if (pi.type == PackageItemType.Component) {
                if (userClass){
                    obj = new userClass();
                } else if (pi.extensionType){
                    obj = new pi.extensionType();
                } else {
                    obj = UIObjectFactory.newObject2(pi.objectType);
                }
            } else{
                obj = UIObjectFactory.newObject2(pi.objectType);
            }

            if (obj) {
                obj.packageItem = pi;
            }

            return obj;
        }

        public static newObject2(type: ObjectType): GObject { 
            Debug.log("newObject2", type);
            switch (type) {
                case ObjectType.Image:
                    return new GImage();
                
                    case ObjectType.MovieClip:
                        return new GMovieClip();
    
                    case ObjectType.Component:
                        return new GComponent();
    
                    case ObjectType.Text:
                        return new GTextField();
    
                    case ObjectType.RichText:
                        return new GRichTextField();
    
                    case ObjectType.InputText:
                        return new GTextInput();
    
                    case ObjectType.Group:
                        return new GGroup();
    
                    case ObjectType.List:
                        return new GList();
    
                    case ObjectType.Graph:
                        return new GGraph();
    
                    case ObjectType.Loader:
                        if (UIObjectFactory.loaderType != null)
                            return new UIObjectFactory.loaderType();
                        else
                            return new GLoader();
    
                    case ObjectType.Button:
                        return new GButton();
    
                    case ObjectType.Label:
                        return new GLabel();
    
                    case ObjectType.ProgressBar:
                        return new GProgressBar();
    
                    case ObjectType.Slider:
                        return new GSlider();
    
                    case ObjectType.ScrollBar:
                        return new GScrollBar();
    
                    case ObjectType.ComboBox:
                        return new GComboBox();
    
                    case ObjectType.Tree:
                        return new GTree();
    
                    default:
                        return null;
                    
            }
            return null;
        }

        /**@internal */
        static newObjectDirectly(type: string): GObject {
            switch (type) {

                case "image":
                    return new GImage();

                case "movieclip":
                    return new GMovieClip();

                case "component":
                    return new GComponent();

                case "text":
                    return new GTextField();

                case "list":
                    return new GList();
                    
                case "richtext":
                    return new GRichTextField();

                case "inputtext":
                    return new GTextInput();

                case "group":
                    return new GGroup();

                case "graph":
                    return new GGraph();

                case "loader":
                    if (UIObjectFactory.loaderExtension != null)
                        return new UIObjectFactory.loaderExtension();
                    else
                        return new GLoader();
            }
            return null;
        }

        // v1
        public static newObjectv1(pi: PackageItem): GObject {
            switch (pi.type) {
                case PackageItemType.Image:
                    return new GImage();

                case PackageItemType.MovieClip:
                    return new GMovieClip();

                case PackageItemType.Component:
                    let cls: { new(): GObject; } = UIObjectFactory.packageItemExtensions[pi.owner.id + pi.id];
                    if (cls)
                        return new cls();

                    let xml: utils.XmlNode = pi.owner.getItemAsset(pi) as utils.XmlNode;
                    let extention: string = xml.attributes.extention;
                    if (extention != null) {
                        switch (extention) {
                            case "Button":
                                return new GButton();

                            case "ProgressBar":
                                return new GProgressBar();

                            case "Label":
                                return new GLabel();
                                
                            case "Slider":
                                return new GSlider();

                            case "ScrollBar":
                                return new GScrollBar();

                            case "ComboBox":
                                return new GComboBox();

                            default:
                                return new GComponent();
                        }
                    }
                    else
                        return new GComponent();
            }
            return null;
        }
    }
}