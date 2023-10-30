import UI from "./MainGameComponents/UI";
import gsap from "gsap/all";
import {ON_BONUS_GAME_CLOSE, ON_BONUS_GAME_START, SET_CARDS_INTERACTIVE} from "../constants/events";
import {SpriteBaseOriented} from "../components/base-oriented/sprite-base-oriented";
import {ContainerBase} from "../components/base-oriented/container";
import {Card} from "./MainGameComponents/Card";
import {Container} from "pixi.js";
import {WheelOfFortune} from "./SmallGames/WheelOfFortune/WheelOfFortune";
import {HeadAndTail} from './SmallGames/HeadAndTail/HeadAndTail';
import {Thimbles} from "./SmallGames/Thimbles/Thimbles";
import {WinScenes} from "./WinScenes/WinScenes";
import {Tutorial} from "./Tutorial/Tutorial";
import {ScalingText} from "../components/ScalingText";
import {send, subscribe} from "../sender/event-sender";
import {playSound} from "../sound-engine/sound-engine";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor

        this.mainGameContainer = new Container()
        this.stage.addChild(this.mainGameContainer)

        this.bg = new SpriteBaseOriented(this.mainGameContainer, descriptor['main']['bg'])
        this.bg.addToStage()

        this.cardsContainer = this.createCards()

        this.chooseText = new ScalingText(this.cardsContainer, this.descriptor['main']['chooseText'])

        this.wheelOfFortune = new WheelOfFortune(this.stage, this.descriptor.wheelOfFortune)
        this.wheelOfFortune.visible = false

        this.thimbles = new Thimbles(this.stage, this.descriptor.thimbles)
        this.thimbles.visible = false

        this.headAndTail = new HeadAndTail(this.stage, this.descriptor.headAndTail);
        this.headAndTail.visible = false;

        UI.init(this.stage, this.descriptor['ui'])
        UI.setVisiblePlayBtn(false)

        this.winScenes = new WinScenes(stage, descriptor.winScenes)

        subscribe(ON_BONUS_GAME_CLOSE, () => this.restartGame())
        subscribe(ON_BONUS_GAME_START, ({detail}) => this.onBonusGameStart(detail))

        this.tutorial = new Tutorial(this.mainGameContainer, this.descriptor.tutorial)

    }

    onBonusGameStart(detail){
        playSound('stop_fx')
        switch (detail) {
            case 0:
                this.headAndTail.open()
                break
            case 1:
                this.thimbles.open()
                break
            case 2:
                this.wheelOfFortune.open()
                break

        }

        this.setMainGameVisibility(false)
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
            this.mainGameContainer.visible = true
        } else {
            gsap.to(this.mainGameContainer, {pixi: {alpha: 0}, duration: 1, onComplete: () => {
                    this.mainGameContainer.alpha = 1
                    this.mainGameContainer.visible = false
                    send(SET_CARDS_INTERACTIVE, true)
                }})
        }

    }

    restartGame() {
        playSound('collect')
        this.setMainGameVisibility(true);
        UI.setVisiblePlayBtn(false)
        UI.setPlayBtnAction(null)
    }
}
