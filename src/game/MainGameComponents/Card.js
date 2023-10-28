import {SpineBase} from "../../components/base/spine-base";
import {createTexture, randomFromArr} from "../../helpers/helper";
import {send, subscribe} from "../../sender/event-sender";
import {ON_BONUS_GAME_START, SET_CARDS_INTERACTIVE} from "../../constants/events";

export class Card extends SpineBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        this.descriptor = descriptor
        this.eventMode = 'static'
        this.cursor = 'pointer';

        this.isOpened = false

        this.on('pointerup', () => {

            send(SET_CARDS_INTERACTIVE, false)
            const randomInd = randomFromArr([1, 2])
            const rnd = [1, 2][randomInd]
            const placeholder = this.descriptor.placeholders[rnd]
            const textureName = placeholder.textureName
            this.replacePlaceholder(textureName)

            this.addToStage()
            this.setAnimation(0, 'click_win', false)
            this.isOpened = true

            setTimeout(() =>  send(ON_BONUS_GAME_START, placeholder.id), 3000)
        })


        subscribe(SET_CARDS_INTERACTIVE, ({detail}) => this.setInteractive(detail))
    }

    setPosition(i, j){
        this.x = (this.width + 20) * i
        this.y = (this.height + 20) * j
    }

    setInteractive(bool){
        this.eventMode = bool && !this.isOpened ? 'static' : 'none'
    }

    replacePlaceholder(textureName){
        const slotIndex = this.skeleton.findSlotIndex('put_bonus_here_win');
        const slot = this.skeleton.slots[slotIndex];
        const sprite = slot.currentSprite;
        if (!sprite) return;
        sprite.texture = createTexture(textureName)
    }

}
