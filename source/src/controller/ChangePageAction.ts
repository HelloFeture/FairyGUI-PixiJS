namespace fgui {
    /**
     * 改变页面 Action
     */
	export class ChangePageAction extends Action {

		public objectId: string;
		public controllerName: string;
		public targetPage: string;

        /**
         * @override Action.enter
         * @param controller 
         */
		protected enter(controller: Controller): void {
            if (!this.controllerName) {
                return;
            }

            var gcom: GComponent;
            if (this.objectId) {
                var obj: GObject = controller.parent.getChildById(this.objectId);
                if (obj instanceof GComponent) {
                    gcom = <GComponent><any>obj;
                } else {
                    return;
                }
            }
            else {
                gcom = controller.parent;
            }

            if (gcom) {
                var cc: Controller = gcom.getController(this.controllerName);
                if (cc && cc != controller && !cc.changing) {
                    if (this.targetPage == "~1") {
                        if (controller.selectedIndex < cc.pageCount) {
                            cc.selectedIndex = controller.selectedIndex;
                        }
                    } else if (this.targetPage == "~2") {
                        cc.selectedPage = controller.selectedPage;
                    } else {
                        cc.selectedPageId = this.targetPage;
                    }
                }
            }
        }

        /**
         * @hide 
         * @override Action.setup
         * @param buffer 参数流
         */
		public setup(buffer: ByteBuffer): void {
            super.setup(buffer);

            this.objectId = buffer.readS();
            this.controllerName = buffer.readS();
            this.targetPage = buffer.readS();
        }
	}
}