import {Sprite} from "pixi.js";
import * as keys from "../../constants/keys";
import * as sender from "../../sender/event-sender";
import * as events from "../../constants/events";
import {createTexture, isExist, isLand} from "../../helpers/helper";

export class SpriteBaseOriented extends Sprite{

    constructor(stage, descriptor) {
        super(null)

        this.portTexture = null;
        this.landTexture = null;
        this.portX = 0;
        this.portY = 0;
        this.landX = 0;
        this.landY = 0;

        this.portWidth = null;
        this.portHeight = null;

        this.landWidth = null;
        this.landHeight = null;

        this.stage = stage;

        this._changeOrientationFunc = this.onOrientationChange.bind(this);
        sender.subscribe(events.CHANGE_ORIENTATION, this._changeOrientationFunc);

        this.setNewDescriptor(descriptor)

    }

    setNewDescriptor(descriptor){
        if(isExist(descriptor[keys.PORT])) {

            this.portTexture = createTexture(descriptor[keys.PORT][keys.TEXTURE_NAME]);
            this.portX = descriptor[keys.PORT][keys.X];
            this.portY = descriptor[keys.PORT][keys.Y];

            if(isExist(descriptor[keys.PORT][keys.WIDTH])) {
                this.portWidth = descriptor[keys.PORT][keys.WIDTH];
            }

            if(isExist(descriptor[keys.PORT][keys.HEIGHT])) {
                this.portHeight = descriptor[keys.PORT][keys.HEIGHT];
            }
        }

        if(isExist(descriptor[keys.LAND])) {

            this.landTexture = createTexture(descriptor[keys.LAND][keys.TEXTURE_NAME]);
            this.landX = descriptor[keys.LAND][keys.X];
            this.landY = descriptor[keys.LAND][keys.Y];

            if(isExist(descriptor[keys.LAND][keys.WIDTH])) {
                this.landWidth = descriptor[keys.LAND][keys.WIDTH];
            }

            if(isExist(descriptor[keys.LAND][keys.HEIGHT])) {
                this.landHeight = descriptor[keys.LAND][keys.HEIGHT];
            }

        }

        if(isExist(descriptor[keys.ANCHOR_X])) {
            this.anchor.x = descriptor[keys.ANCHOR_X];
        }
        if(isExist(descriptor[keys.ANCHOR_Y])) {
            this.anchor.y = descriptor[keys.ANCHOR_Y];
        }
        this.onOrientationChange();
    }

    destroy(params) {
        sender.unSubscribe(events.CHANGE_ORIENTATION, this._changeOrientationFunc);
        this.removeFromStage();
        super.destroy(params);
    }

    removeFromStage() {
        this.stage.removeChild(this.sprite)
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


    setOrientation(texture, x, y, width, height) {
        if(isExist(texture)) {
            this.texture = texture;
            this.position.set(x, y)
            if(isExist(width)) this.width = width;
            if(isExist(height)) this.height = height;
        }
    }

    onOrientationChange() {

        if(isLand()) {
            this.setOrientation(this.landTexture, this.landX, this.landY, this.landWidth, this.landHeight);
        } else {
            this.setOrientation(this.portTexture, this.portX, this.portY, this.portWidth, this.portHeight);
        }

    }
}

