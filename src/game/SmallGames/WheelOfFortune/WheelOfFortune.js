import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";
import {SpriteBase} from "../../../components/base/sprite-base";
import {ContainerBase} from "../../../components/base-oriented/container";
import gsap from 'gsap/all'
import {SpineBase} from "../../../components/base/spine-base";
import {randomFromArr, randomMinMax} from "../../../helpers/helper";
import UI from "../../MainGameComponents/UI";

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

        this.stage.addChild(this)

    }

    init(){
        UI.setVisiblePlayBtn(true)
        UI.setPlayBtnAction(this.rotate.bind(this))
    }

    rotate(){
        UI.setPlayBtnEnabled(false)
        const balance = UI.getBalance()
        const bet = UI.getBet()
        UI.setBalance(balance - bet)

        const pos = randomFromArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11])

        const repeat = randomFromArr([0,0, 0, 1, 1, 1, 1, 1, 2, 2, 2, 3, 3])

        const xTime = randomMinMax(5, repeat === 3 ? 7 : 15)/10

        gsap.to(this.drum, {
            pixi: {angle: this.drum.angle + 30}, duration: 0.75 * xTime, ease: 'Back.easeIn(3)',
            onComplete: ()=>{
                gsap.to(this.drum, {
                    pixi: {angle: this.drum.angle + 360}, duration: 1.5*xTime, repeat, ease: 'Power0.easeInOut',
                    onComplete: () =>{
                        gsap.to(this.drum, {
                            pixi: {angle: this.drum.angle + pos * 30}, duration: 1.5*xTime* pos/12, ease: 'Power0.easeInOut',
                            onComplete: () =>{
                                gsap.to(this.drum, {pixi: {angle: this.drum.angle + 60}, duration: xTime, ease: 'Back.easeOut', onComplete:() =>{
                                        this.drum.angle = this.drum.angle % 360
                                        const xWin = this.wins[Math.round(this.drum.angle/30)] * bet
                                        this.setWin(xWin)
                                    }})
                            }})
                    }})
            }})

    }


    setWin(xWin){

        UI.setWin(xWin)
        const balance = UI.getBalance()
        UI.setBalance(balance + xWin)
        UI.setPlayBtnEnabled(true)
    }

}
