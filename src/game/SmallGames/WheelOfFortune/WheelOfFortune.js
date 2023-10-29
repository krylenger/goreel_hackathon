import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";
import {SpriteBase} from "../../../components/base/sprite-base";
import {ContainerBase} from "../../../components/base-oriented/container";
import {ScalingButton} from '../../../components/ScalingButton';
import {SpineBase} from "../../../components/base/spine-base";
import {playSound, stopSound} from "../../../sound-engine/sound-engine";
import {randomFromArr, randomMinMax} from "../../../helpers/helper";
import {send} from "../../../sender/event-sender";
import {ON_BONUS_GAME_CLOSE} from "../../../constants/events";
import UI from "../../MainGameComponents/UI";
import gsap from 'gsap/all'

export class WheelOfFortune extends Container{
    constructor(stage, descriptor) {
        super()
        this.stage = stage
        this.descriptor = descriptor

        this.wins = [5, 0.5, 2, 0.1, 10, 0, 5, 0.5, 2, 0.1, 10, 0]

        this.bg = new SpriteBaseOriented(this, descriptor['bg'])
        this.bg.addToStage()

        this.wheelContainer = new ContainerBase(this, this.descriptor['wheel'])

        this.bgFrame = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].bgFrame)

        this.drum = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].drum)

        this.underFrame = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].underFrame)

        this.light = new SpineBase(this.wheelContainer, this.descriptor['wheel'].light)
        this.light.setAnimation(0, 'light', true)

        this.exitButtonCont = new ContainerBase(this.wheelContainer, this.descriptor['wheel'].exitButtonCont);
        this.exitButton = new ScalingButton(this.exitButtonCont, this.descriptor['wheel'].exitButton, () => this.close());
        this.exitButton.setVisible(false);

        this.stage.addChild(this)

    }

    open(){
        UI.setPlayBtnEnabled(false)
        UI.setPlayBtnAction(this.rotate.bind(this))
        UI.setVisiblePlayBtn(true)
        this.exitButton.setVisible(false);
        this.visible = true
        this.alpha = 0
        gsap.to(this, {pixi: {alpha: 1}, duration: 2, onComplete:() => UI.setPlayBtnEnabled(true)})

    }

    close(){
        this.exitButton.setVisible(false);
        gsap.to(this, {pixi: {alpha: 0}, duration: 2, onComplete: () =>{
                this.alpha = 1
                this.visible = false
            }})

        send(ON_BONUS_GAME_CLOSE)
    }

    rotate(){
        playSound('reel_stop')
        playSound('mix')

        UI.setVisiblePlayBtn(false)
        const balance = UI.getBalance()
        const bet = UI.getBet()
        UI.setWin(0)
        UI.setBalance(balance - bet)
        this.exitButton.setVisible(false);

        const pos = randomFromArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])
        const repeat = randomFromArr([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 2])
        const xTime = randomMinMax(5, repeat === 3 ? 7 : 12)/10

        gsap.to(this.drum, {
            pixi: {angle: this.drum.angle + 30}, duration: 0.5 * xTime, ease: 'Back.easeIn(3)',
            onComplete: ()=>{
                gsap.to(this.drum, {
                    pixi: {angle: this.drum.angle + 360}, duration: 1*xTime, repeat, ease: 'Power0.easeInOut',
                    onComplete: () =>{
                        gsap.to(this.drum, {
                            pixi: {angle: this.drum.angle + pos * 30}, duration: 1*xTime* pos/12, ease: 'Power0.easeInOut',
                            onComplete: () =>{
                                gsap.to(this.drum, {pixi: {angle: this.drum.angle + 60}, duration: 0.7 * xTime, ease: 'Back.easeOut', onComplete:() =>{
                                        this.drum.angle = this.drum.angle % 360

                                        const index = Math.round(this.drum.angle/30)

                                        const hasJackpot = this.wins[index] === 10

                                        const xWin = this.wins[index] * bet
                                        this.setWin(xWin, hasJackpot)
                                        this.exitButton.setVisible(true);

                                        stopSound('mix')
                                        playSound('stop_fx')
                                    }})
                            }})
                    }})
            }})

    }

    setWin(xWin, hasJackpot){

        UI.setWin(xWin, hasJackpot)
        const balance = UI.getBalance()
        UI.setBalance(balance + xWin)
        UI.setVisiblePlayBtn(true)
    }

}
