import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";

export class WheelOfFortune {
    constructor(stage, descriptor) {

        this.stage = stage
        this.descriptor = descriptor

        this.mainGameContainer = new Container()
        this.stage.addChild(this.mainGameContainer)

        this.bg = new SpriteBaseOriented(this.mainGameContainer, descriptor['bg'])
        this.bg.addToStage()
    }


}
