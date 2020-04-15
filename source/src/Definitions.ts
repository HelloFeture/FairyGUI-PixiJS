namespace fgui {
    
        let win:any = window;
        let hasPointer = !!(win.PointerEvent || win.MSPointerEvent);
        let hasTouch = 'ontouchstart' in window && PIXI.utils.isMobile.any;

        export type IndexedObject = { [key:string]: any };
    
        export class InteractiveEvents {
            public static Down:string = hasPointer ? "pointerdown" : hasTouch ? "touchstart" : "mousedown";
            public static Cancel:string = hasPointer ? "pointercancel" : hasTouch ? "touchcancel" : "mousecancel";
            public static Up:string = hasPointer ? "pointerup" : hasTouch ? "touchend" : "mouseup";
            public static Click:string = hasPointer ? "pointertap" : hasTouch ? "tap" : "click";
            public static UpOutside:string = hasPointer ? "pointerupoutside" : hasTouch ? "touchendoutside" : "mouseupoutside";
            public static Move:string = hasPointer ? "pointermove" : hasTouch ? "touchmove" : "mousemove";
            public static Over:string = hasPointer ? "pointerover" : hasTouch ? null : "mouseover";
            public static Out:string = hasPointer ? "pointerout" : hasTouch ?  null : "mouseout";
            //mouse only
            public static RightDown = "rightdown";
            public static RightUp = "rightup";
            public static RightClick = "rightclick";
            public static RightUpOutside = "rightupoutside";
            // for adapte
            public static TouchBegin:string = InteractiveEvents.Down;
            public static TouchEnd:string = InteractiveEvents.Up;
        }
    
        export const enum GearType {
            Display = 0,
            XY,
            Size,
            Look,
            Color,
            Animation,
            Text,
            Icon,
    
            Count  //helper member
        };
    
        export type GearNameMap = {
            [key: string]: number
        };
        export let GearXMLNodeNameMap: GearNameMap = {
            "gearDisplay": 0,
            "gearXY": 1,
            "gearSize": 2,
            "gearLook": 3,
            "gearColor": 4,
            "gearAni": 5,
            "gearText": 6,
            "gearIcon": 7
        };
    
        export let BlendModeMap: string[] = [
            "Normal",      //  NORMAL
            "Add",         //  ADD
            "Multiply",    //  MULTIPLY
            "Screen",      //  SCREEN
            "Overlay",     //  OVERLAY
            "Darken",      //  DARKEN
            "Lighten",     //  LIGHTEN
            "ColorDodge",  //  COLOR_DODGE
            "ColorBurn",   //  COLOR_BURN
            "HardLight",   //  HARD_LIGHT
            "SoftLight",   //  SOFT_LIGHT
            "Difference",  //  DIFFERENCE
            "Exclusion",   //  EXCLUSION
            "Hue",         //  HUE
            "Saturation",  //  SATURATION
            "Color",       //  COLOR
            "Luminosity",  //  LUMINOSITY
            "NormalNPM",   //  NORMAL_NPM
            "AddNPM",      //  ADD_NPM
            "ScreenNPM"    //  SCREEN_NPM
        ];
    
        export const enum ScrollPaneFlags {
            DisplayOnLeft = 1,
            SnapToItem = 1 << 1,
            DisplayOnDemand = 1 << 2,
            PageMode = 1 << 3,
            TouchEffect = 1 << 4,
            DisableTouchEffect = 1 << 5,
            BounceEffect = 1 << 6,
            DisableBounceEffect = 1 << 7,
            DisableInertia = 1 << 8,
            DisableScissorRect = 1 << 9
        };
    

        export const enum Keys {
            Up = 38,
            Down = 40,
            Left = 37,
            Right = 39,
            Shift = 16,
            Alt = 18,
            Ctrl = 17
        };
    
        // export const enum FlipType { None, Horizontal, Vertical, Both };

        export const enum TextureFillMode {
            NONE,
            HORZ,         //begin from: L, R
            VERT,         //begin from: T, B
            DEG90,        //begin from: LT, RT, LB, RB
            DEG180,       //begin from: L, R, T, B
            DEG360        //begin from: L, R, T, B
        }
    
        export const enum TextureFillBegin {
            L,
            R,
            T,
            B,
            LT,
            RT,
            LB,
            RB
        }
    
        export const enum TextureFillDirection {  //for deg item only
            CW,
            CCW
        }
    

  
    

    
  
    
    
    
    
    

 
    
 
    
   
    

    
    


 
    
        
    }
    