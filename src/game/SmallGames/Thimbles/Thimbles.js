import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";
import {TextBase} from "../../../components/base/text-base";
import {ScalingButton} from '../../../components/ScalingButton';
import {ContainerBase} from "../../../components/base-oriented/container";
import {SpineBase} from "../../../components/base/spine-base";
import {randomFromArr} from "../../../helpers/helper";
import {send} from "../../../sender/event-sender";
import {playSound} from "../../../sound-engine/sound-engine";
import {ON_BONUS_GAME_CLOSE} from "../../../constants/events";
import UI from "../../MainGameComponents/UI";
import gsap from "gsap/all";



export class Thimbles extends Container {
    constructor(stage, descriptor) {
        super()
        this.stage = stage
        this.descriptor = descriptor

        this.currentBet = null;

        this.bg = new SpriteBaseOriented(this, descriptor['bg'])
        this.bg.addToStage()

        this.container = new ContainerBase(this, this.descriptor['thimblesSpine'])
        this.thimbles = new SpineBase(this.container, this.descriptor['thimblesSpine'])

        this.chooseText = new TextBase(this.container, this.descriptor['chooseText'])
        this.chooseText.visible = false
        gsap.to(this.chooseText, {pixi: {scale: 1.2}, duration:1, repeat: -1, yoyo: true})

        this.exitButtonCont = new ContainerBase(this.container, this.descriptor.exitButtonCont);
        this.exitButton = new ScalingButton(this.exitButtonCont, this.descriptor.exitButton, () => this.close());
        this.exitButton.setVisible(false);

        this.stage.addChild(this)

        this.caps = ['cap', 'cap2', 'cap3']
        this.anims = ['open_left', 'open_center', 'open_right']
        this.ballIndex = 1

      this.capsSprites = this.caps.map(name => {
            const slotIndex = this.thimbles.skeleton.findSlotIndex(name);
            const slot = this.thimbles.skeleton.slots[slotIndex];
            const sprite = slot.currentSprite;
            sprite.cursor = 'pointer'
            sprite.on('pointerup',() => this.onCapPointerUp(name))
            return sprite
        })


    }
    onPlayBtn(){

        const balance = UI.getBalance()
        this.currentBet = UI.getBet()
        UI.setWin(0)
        UI.setBalance(balance - this.currentBet)
        UI.setVisiblePlayBtn(false)
        this.exitButton.setVisible(false);

        playSound('stop_fx')
        this.thimbles.setAnimation(0, this.anims[this.ballIndex],false)
        this.thimbles.addAnimation(0, 'mixing',false, 2)
        gsap.delayedCall(2, ()=> playSound('sack_mix'))

        gsap.delayedCall(5, () => {
            this.chooseText.visible = true
            this.capsSprites.forEach(sprite => sprite.eventMode = 'static')
        })

    }

    onCapPointerUp(name){
        playSound('stop_fx')
        this.capsSprites.forEach(sprite => sprite.eventMode = 'none')
        this.chooseText.visible = false
        gsap.delayedCall(0.2, () => {
            this.ballIndex = randomFromArr(this.anims)

            this.thimbles.setAnimation(0, this.anims[this.ballIndex],false)

            gsap.delayedCall(2, () => {
                if(this.caps.indexOf(name) === this.ballIndex){
                    this.setWin()
                } else {
                    UI.setVisiblePlayBtn(true)
                    UI.setWin(0)
                }
                this.exitButton.setVisible(true);
            })
        })
    }

    setWin(){
        const balance = UI.getBalance()
        UI.setWin(this.currentBet * 3)
        UI.setBalance(balance + this.currentBet * 3)
        UI.setVisiblePlayBtn(true)
    }

    open(){
        UI.setPlayBtnEnabled(false)
        UI.setPlayBtnAction(this.onPlayBtn.bind(this))
        UI.setVisiblePlayBtn(true)
        this.visible = true
        this.alpha = 0
        this.exitButton.setVisible(false);
        gsap.to(this, {pixi: {alpha: 1}, duration: 1, onComplete:() => UI.setPlayBtnEnabled(true)})

    }

    close(){
        this.exitButton.setVisible(false);
        gsap.to(this, {pixi: {alpha: 0}, duration: 1, onComplete: () =>{
                this.alpha = 1
                this.visible = false
            }})
       send(ON_BONUS_GAME_CLOSE)
    }

}
