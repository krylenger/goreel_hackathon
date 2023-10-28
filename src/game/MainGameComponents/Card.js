import {SpineBase} from "../../components/base/spine-base";
import {randomFromArr} from "../../helpers/helper";
import {send, subscribe} from "../../sender/event-sender";
import {SET_CARDS_INTERACTIVE} from "../../constants/events";

export class Card extends SpineBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        this.descriptor = descriptor
        this.eventMode = 'static'
        this.cursor = 'pointer';

        this.on('pointerup', () => {
            send(SET_CARDS_INTERACTIVE, false)
            const random = randomFromArr([0, 1, 2])
            const placeholder = this.descriptor.placeholders[random]

            console.log(placeholder)



            this.addToStage()
            this.setAnimation(0, 'click_win', false)

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

}
