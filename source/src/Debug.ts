namespace fgui {
    export class Debug {
        public static enableDebug : boolean = true;
        public static log(...args : any[]) : void {
            if (!Debug.enableDebug) {
                return;
            }
            console.log(...args);
        }
    }
}