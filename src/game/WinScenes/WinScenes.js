import {ContainerBase} from "../../components/base-oriented/container";
import {SpineBase} from "../../components/base/spine-base";
import {subscribe} from "../../sender/event-sender";
import {ON_EVENT_WIN, ON_PLAY_BTN} from "../../constants/events";

export class WinScenes extends ContainerBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        this.bigWin = new SpineBase(this, descriptor.bigWin)
        this.regularWin = new SpineBase(this, descriptor.regularWin)

        subscribe(ON_EVENT_WIN, ({detail: {win, bigWin}}) => {

            if(win >= 100 || bigWin) {
                this.bigWin.setAnimation(0, 'big_win', false)
            } else if(win > 0){
                this.regularWin.setAnimation(0, 'animation', false)
            }
        })

        subscribe(ON_PLAY_BTN, () => {
            this.bigWin.stopAnimation(0)
            this.regularWin.stopAnimation(0)
        })
    }

}
