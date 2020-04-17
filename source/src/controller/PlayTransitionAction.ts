namespace fgui {
    export class PlayTransitionAction extends Action {

        public transitionName: string;
        public playTimes: number;
        public delay: number = 0;
        public stopOnExit: boolean = false;

        private _currentTransition: Transition;

        protected enter(controller: Controller): void {
            let trans: Transition = controller.parent.getTransition(this.transitionName);
            if (trans) {
                if (this._currentTransition && this._currentTransition.playing){
                    trans.changePlayTimes(this.playTimes);
                } else {
                    trans.play(null, null, null, this.playTimes, this.delay);
                }
                this._currentTransition = trans;
            }
        }

        protected leave(controller: Controller): void {
            if (this.stopOnExit && this._currentTransition) {
                this._currentTransition.stop();
                this._currentTransition = null;
            }
        }

        public setup(buffer:ByteBuffer): void {
            super.setup(buffer);

			this.transitionName = buffer.readS();
			this.playTimes = buffer.readInt();
			this.delay = buffer.readFloat();
			this.stopOnExit = buffer.readBool();
        }
    }
}