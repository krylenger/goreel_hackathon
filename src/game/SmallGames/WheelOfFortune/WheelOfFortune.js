import {Container} from "pixi.js";
import {SpriteBaseOriented} from "../../../components/base-oriented/sprite-base-oriented";
import {SpriteBase} from "../../../components/base/sprite-base";
import {ContainerBase} from "../../../components/base-oriented/container";
import gsap from 'gsap/all'

export class WheelOfFortune extends Container{
    constructor(stage, descriptor) {
        super()
        this.stage = stage
        this.descriptor = descriptor

        this.bg = new SpriteBaseOriented(this, descriptor['bg'])
        this.bg.addToStage()

        this.wheelContainer = new ContainerBase(this, this.descriptor['wheel'])

        this.bgFrame = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].bgFrame)

        this.drum = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].drum)

        gsap.to(this.drum, {pixi: {angle: 360}, duration: 1, repeat: -1, ease: 'Power0.easeInOut'})

        this.underFrame = new SpriteBase(this.wheelContainer, this.descriptor['wheel'].underFrame)

        this.stage.addChild(this)
    }

}
