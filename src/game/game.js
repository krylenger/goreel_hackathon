import UI from "./MainGameComponents/UI";
import {SpriteBaseOriented} from "../components/base-oriented/sprite-base-oriented";
import {SpineBase} from "../components/base/spine-base";
import {ContainerBase} from "../components/base-oriented/container";
import {Card} from "./MainGameComponents/Card";
import {send, subscribe} from "../sender/event-sender";
import {ON_BONUS_GAME_START} from "../constants/events";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor

        this.bg = new SpriteBaseOriented(this.stage, descriptor['main']['bg'])
        this.bg.addToStage()

       this.cardsContainer = this.createCards()


        UI.init(this.stage, this.descriptor['ui'])
        UI.setVisiblePlayBtn(false)



        subscribe(ON_BONUS_GAME_START, ({detail}) => console.log(detail))


    }

    createCards(){
        const cardsContainer = new ContainerBase(this.stage, this.descriptor['main'].cards)

        for(let i = 0; i < 3; i++){

            for(let j = 0; j < 3; j++){
                const card = new Card(cardsContainer, this.descriptor['main'].cards)
                card.setPosition(i, j)
            }
        }

        return cardsContainer
    }

}
