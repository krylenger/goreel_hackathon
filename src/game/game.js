import UI from "./UI";
import {SpriteBaseOriented} from "../components/base-oriented/sprite-base-oriented";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor

        this.bg = new SpriteBaseOriented(this.stage, descriptor['main']['bg'])
        this.bg.addToStage()


        UI.init(this.stage, this.descriptor['ui'])
    }

}
