import {Spine} from "pixi-spine";
import * as keys from "../../constants/keys";
import {createSpineData, isExist} from "../../helpers/helper";


export class SpineBase extends Spine{
    constructor(stage, descriptor) {
        super(createSpineData(descriptor[keys.NAME]));

        this.animations = descriptor[keys.ANIMATIONS]

        this.stage = stage;

        if(isExist(descriptor[keys.X])) this.x = descriptor[keys.X];
        if(isExist(descriptor[keys.Y])) this.y = descriptor[keys.Y];
        this.scale.set(descriptor[keys.SCALE] ?? 1);
        if(isExist(descriptor[keys.WIDTH])) this.width = descriptor[keys.WIDTH];
        if(isExist(descriptor[keys.HEIGHT])) this.height = descriptor[keys.HEIGHT];
        if(isExist(descriptor[keys.Z_INDEX])) this.zIndex = descriptor[keys.Z_INDEX];
        if(isExist(descriptor[keys.ALPHA])) this.alpha = descriptor[keys.ALPHA];
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

    setAnimation(trackIndex,animationName, loop ){
        this.state.setAnimation(trackIndex, animationName, loop)
    }

    addAnimation(trackIndex, animationName, loop , delay){
        this.state.addAnimation(trackIndex, animationName, loop, delay)
    }

    setMix(from, to, duration){
        this.stateData.setMix(from, to, duration)
    }

    setTimeScale(value){
        this.state.timeScale = value
    }

}
