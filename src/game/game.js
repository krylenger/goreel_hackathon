import UI from "./MainGameComponents/UI";
import {SpriteBaseOriented} from "../components/base-oriented/sprite-base-oriented";
import {SpineBase} from "../components/base/spine-base";
import {ContainerBase} from "../components/base-oriented/container";
import {Card} from "./MainGameComponents/Card";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor

        this.bg = new SpriteBaseOriented(this.stage, descriptor['main']['bg'])
        this.bg.addToStage()

        const cardsContainer = new ContainerBase(this.stage, descriptor['main'].cards)

        for(let i = 0; i < 3; i++){

            for(let j = 0; j < 3; j++){
                const card = new Card(cardsContainer, descriptor['main'].cards)
                card.setPosition(i, j)
            }
        }




        UI.init(this.stage, this.descriptor['ui'])
    }

}
