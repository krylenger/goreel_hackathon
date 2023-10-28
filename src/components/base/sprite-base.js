import {Sprite} from "pixi.js";
import {createTexture, isExist} from "../../helpers/helper";
import * as keys from "../../constants/keys";

export class SpriteBase extends Sprite{

    constructor(stage, descriptor) {

        super(createTexture(descriptor[keys.TEXTURE_NAME]))

        this.stage = stage;

        if(isExist(descriptor[keys.X])) this.x = descriptor[keys.X];

        if(isExist(descriptor[keys.Y])) this.y = descriptor[keys.Y];

        this.scale.set(descriptor[keys.SCALE] ?? 1)

        if(isExist(descriptor[keys.WIDTH])) this.width = descriptor[keys.WIDTH];

        if(isExist(descriptor[keys.HEIGHT])) this.height = descriptor[keys.HEIGHT];

        if(isExist(descriptor[keys.Z_INDEX])) this.zIndex = descriptor[keys.Z_INDEX];

        if(isExist(descriptor[keys.ALPHA])) this.alpha = descriptor[keys.ALPHA];

        this.anchor.set(descriptor[keys.ANCHOR_X] ?? 0, descriptor[keys.ANCHOR_Y] ?? 0)

        this.addToStage()

    }

    removeFromStage() {

        this.stage.removeChild(this);

    }

    addToStage() {

        this.stage.addChild(this);

    }

    setAlpha(alpha) {

        this.alpha = alpha;

    }

    setVisible(visible) {

        this.visible = visible;
    }

}
