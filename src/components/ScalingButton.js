import {SpriteBase} from "./base/sprite-base";
import {gsap, Power2} from "gsap/all";
import {isFunction} from "../helpers/helper";

export class ScalingButton extends SpriteBase{
    constructor(stage, descriptor, callback) {
        super(stage, descriptor);

        this.eventMode = 'static'
        this.cursor = 'pointer';

        this.action = callback

        this.scaleOver = descriptor['scaleOver'] ?? 1;
        this.scaleOut = descriptor['scale'] ?? 1;

        this.on('pointerup', event => this.onPointerUp(event))
        this.on('pointerover', event => this.onPointerOver(event))
        this.on('pointerleave', event => this.onPointerLeave(event))

        this.anchor.x = descriptor['anchorX'] ?? 0.5;
        this.anchor.y = descriptor['anchorY']  ?? 0.5;

        this.addToStage()
    }

    onPointerUp() {
        if(isFunction(this.action)) this.action();
    }

    onPointerOver() {
        gsap.to(this, {pixi:{scale: this.scaleOut * this.scaleOver},duration: 0.5, ease: Power2.easeOut});
    }

    onPointerLeave() {
        gsap.to(this, {pixi:{scale: this.scaleOut},duration: 0.5, ease: Power2.easeOut});
    }

    setAction(callback) {
        this.action = callback;
    }

}
