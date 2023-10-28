import {SpineBase} from "../../components/base/spine-base";

export class Card extends SpineBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);
        this.eventMode = 'static'
        this.cursor = 'pointer';
        this.on('pointerup', () => {
            this.addToStage()
            this.setAnimation(0, 'click_win', false)
        })
    }

    setPosition(i, j){
        this.x = (this.width + 20) * i
        this.y = (this.height + 20) * j
    }

}
