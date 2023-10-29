import {SpineBase} from "../../components/base/spine-base";
import {createTexture, randomFromArr} from "../../helpers/helper";
import {send, subscribe} from "../../sender/event-sender";
import {ON_BONUS_GAME_START, SET_CARDS_INTERACTIVE} from "../../constants/events";
import {playSound, stopSound} from "../../sound-engine/sound-engine";
import gsap from "gsap/all";

export class Card extends SpineBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        this.descriptor = descriptor
        this.eventMode = 'static'
        this.cursor = 'pointer';

        this.on('pointerup', () => {
            playSound('click')
            gsap.delayedCall(0.3, ()=> playSound('mix'))
            gsap.delayedCall(1.5, ()=> stopSound('mix'))

            send(SET_CARDS_INTERACTIVE, false)
            const randomInd = randomFromArr([0, 1, 2])
            const rnd = [0, 1, 2][randomInd]
            const placeholder = this.descriptor.placeholders[rnd]
            const textureName = placeholder.textureName
            this.replacePlaceholder(textureName)

            this.addToStage()
            this.setAnimation(0, 'click_win', false)
            this.addAnimation(0, 'flip_win', false, 2.7)
            gsap.delayedCall(2.7, ()=>  playSound('collect'))
            gsap.delayedCall(3, () => {

                send(ON_BONUS_GAME_START, placeholder.id)
            })

        })


        subscribe(SET_CARDS_INTERACTIVE, ({detail}) => this.setInteractive(detail))
    }

    setPosition(i, j){
        this.x = (this.width + 20) * i
        this.y = (this.height + 20) * j
    }

    setInteractive(bool){
        this.eventMode = bool ? 'static' : 'none'
    }

    replacePlaceholder(textureName){
        const slotIndex = this.skeleton.findSlotIndex('put_bonus_here_win');
        const slot = this.skeleton.slots[slotIndex];
        const sprite = slot.currentSprite;
        if (!sprite) return;
        sprite.texture = createTexture(textureName)
    }

}
