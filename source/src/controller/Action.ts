namespace fgui {
    /** Action 类型定义 */
    export enum eActionType {
        /** 播放动效 */
        PlayTransitionAction,
        /** 改变页面 */
        ChangePageAction
    }
    export class Action {

        public fromPage: string[];
        public toPage: string[];

        public static createAction(type: number): Action {
            switch (type) {
                case eActionType.PlayTransitionAction:
                    return new PlayTransitionAction();

                case eActionType.ChangePageAction:
                    return new ChangePageAction();
            }
            return null;
        }

        public static create(type: string): Action {
            switch (type) {
                case "play_transition":
                    return new PlayTransitionAction();

                case "change_page":
                    return new ChangePageAction();
            }
            return null;
        }

        public execute(controller: Controller, prevPage: string, curPage: string): void {
            if ((!this.fromPage || this.fromPage.length == 0 || this.fromPage.indexOf(prevPage) != -1)
                && (!this.toPage || this.toPage.length == 0 || this.toPage.indexOf(curPage) != -1))
                this.enter(controller);
            else
                this.leave(controller);
        }

        protected enter(controller: Controller): void {
        }

        protected leave(controller: Controller): void {
        }

        /** 
         * @hide 
         * @param buffer package 包中对应的Action对象属性字节流
         */
        public setup(buffer: ByteBuffer): void {
            var cnt: number;
            var i: number;

            cnt = buffer.readShort();
            this.fromPage = [];
            for (i = 0; i < cnt; i++){
                this.fromPage[i] = buffer.readS();
            }

            cnt = buffer.readShort();
            this.toPage = [];
            for (i = 0; i < cnt; i++){
                this.toPage[i] = buffer.readS();
            }
        }

        /**
         * v1 版本
         * @hide 
         * @param xml 属性 
         */
        public setupv1(xml: utils.XmlNode): void {
            let str: String;

            str = xml.attributes.fromPage;
            if (str)
                this.fromPage = str.split(",");

            str = xml.attributes.toPage;
            if (str)
                this.toPage = str.split(",");
        }
    }
}