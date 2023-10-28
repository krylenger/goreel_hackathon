import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";

export class WheelOfFortune extends Container{
    constructor(stage, descriptor) {
        super()
        this.stage = stage
        this.descriptor = descriptor

        this.bg = new SpriteBaseOriented(this, descriptor['bg'])
        this.bg.addToStage()







        this.stage.addChild(this)
    }



}
