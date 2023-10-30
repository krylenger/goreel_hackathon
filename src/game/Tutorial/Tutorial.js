import {SpineBase} from "../../components/base/spine-base";
import {isLand} from "../../helpers/helper";
import {initSounds, playSound} from "../../sound-engine/sound-engine";
import {subscribe, unSubscribe} from "../../sender/event-sender";
import {CHANGE_ORIENTATION} from "../../constants/events";
import gsap from "gsap/all";
import UI from "../MainGameComponents/UI";

export class Tutorial extends SpineBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        this.eventMode = 'static'

        this._onChangeOrientation = this.onChangeOrientation.bind(this)
        subscribe(CHANGE_ORIENTATION, this._onChangeOrientation)

        this._onPointerUp = this.onPointerUp.bind(this)
        this.on('pointerup', this._onPointerUp)

        this.onChangeOrientation()

        this.addToStage()
    }

    onPointerUp(){
        this.eventMode = 'none'
        initSounds()
        UI.onTutorialClick()
        playSound('main')
        gsap.to(this, {pixi: {alpha: 0}, duration: 1, onComplete:() => {
                this.removeFromStage()
                this.destroy()
            }})

    }
    onChangeOrientation(){
        this.setAnimation(0, isLand() ? 'lend' : 'port', true)
    }
    destroy(options) {
        unSubscribe(CHANGE_ORIENTATION, this._onChangeOrientation)
        this.off('pointerup', this._onPointerUp)
        super.destroy(options);
    }

}
