import UI from "./MainGameComponents/UI";
import {SpriteBaseOriented} from "../components/base-oriented/sprite-base-oriented";
import {ContainerBase} from "../components/base-oriented/container";
import {Card} from "./MainGameComponents/Card";
import {subscribe} from "../sender/event-sender";
import {ON_BONUS_GAME_START} from "../constants/events";
import {Container} from "pixi.js";
import {WheelOfFortune} from "./SmallGames/WheelOfFortune/WheelOfFortune";
import gsap from "gsap/all";
import {Thimbles} from "./SmallGames/Thimbles/Thimbles";
import {playSound} from "../sound/sound-engine";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor


        this.mainGameContainer = new Container()
        this.stage.addChild(this.mainGameContainer)

        this.bg = new SpriteBaseOriented(this.mainGameContainer, descriptor['main']['bg'])
        this.bg.addToStage()
        this.cardsContainer = this.createCards()

        this.wheelOfFortune = new WheelOfFortune(this.stage, this.descriptor.wheelOfFortune)
        this.wheelOfFortune.visible = false

        this.thimbles = new Thimbles(this.stage, this.descriptor.thimbles)
        this.thimbles.visible = false


        UI.init(this.stage, this.descriptor['ui'])
        UI.setVisiblePlayBtn(false)


        // document.addEventListener('dblclick', ()=> playSound('click_cancel'))

        subscribe(ON_BONUS_GAME_START, ({detail}) => {

            switch (detail) {
                case 0:
                    // this.thimbles.open()

                    break
                case 1:
                    this.thimbles.open()
                    break
                case 2:
                    this.wheelOfFortune.open()
                    break

            }

            this.setMainGameVisibility(false)

        })

    }

    createCards(){
        const cardsContainer = new ContainerBase(this.mainGameContainer, this.descriptor['main'].cards)

        for(let i = 0; i < 3; i++){

            for(let j = 0; j < 3; j++){
                const card = new Card(cardsContainer, this.descriptor['main'].cards)
                card.setPosition(i, j)
            }
        }

        return cardsContainer
    }

    setMainGameVisibility(bool){

        if(bool){

            this.mainGameContainer.alpha = 0
            this.mainGameContainer.visible = true
            gsap.to(this.mainGameContainer, {pixi: {alpha: 1}, duration: 2})
        } else {
            gsap.to(this.mainGameContainer, {pixi: {alpha: 0}, duration: 2, onComplete: () => {
                    this.mainGameContainer.alpha = 1
                    this.mainGameContainer.visible = false
                }})
        }

    }


}
