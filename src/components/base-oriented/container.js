import * as keys from "../../constants/keys";
import * as sender from "../../sender/event-sender";
import * as events from "../../constants/events";
import {Container} from "pixi.js";
import {isExist, isLand} from "../../helpers/helper";

export class ContainerBase extends Container{

    constructor(stage, descriptor) {
        super()

        this.stage = stage;

        [this.portX, this.portY, this.landX, this.landY, this.portScale, this.landScale] = [0, 0, 0, 0, 1, 1];

        if(isExist(descriptor[keys.PORT])) {

            this.portX = descriptor[keys.PORT][keys.X];
            this.portY = descriptor[keys.PORT][keys.Y];
            this.portScale = descriptor[keys.PORT][keys.SCALE] ?? 1;
        }

        if(isExist(descriptor[keys.LAND])) {

            this.landX = descriptor[keys.LAND][keys.X];
            this.landY = descriptor[keys.LAND][keys.Y];
            this.landScale = descriptor[keys.LAND][keys.SCALE] ?? 1;

        }

        this._changeOrientationFunc = this.onOrientationChange.bind(this)
        sender.subscribe(events.CHANGE_ORIENTATION, this._changeOrientationFunc);

        this.onOrientationChange();

        this.addToStage();

    }

    destroy(params) {

        sender.unSubscribe(events.CHANGE_ORIENTATION, this._changeOrientationFunc)

        super.destroy(params)
    }

    removeFromStage() {

        this.stage.removeChild(this)

    }

    addToStage() {

        this.stage.addChild(this)
    }

    setAlpha(alpha) {

        this.alpha = alpha;

    }

    setVisible(visible) {

        this.visible = visible;

    }

    onOrientationChange() {

        if(isLand()){
            this.position.set(this.landX, this.landY)
            this.scale.set(this.landScale)
        } else {
            this.position.set(this.portX, this.portY)
            this.scale.set(this.portScale)
        }

    }
}
