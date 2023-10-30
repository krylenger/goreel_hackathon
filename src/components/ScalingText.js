import {TextBase} from "./base/text-base";
import gsap from "gsap/all";

export class ScalingText extends TextBase{
    constructor(stage, descriptor) {
        super(stage, descriptor);

        gsap.to(this, {pixi: {scale: 1.1}, duration:1, repeat: -1, yoyo: true, ease: 'Sine.easeInOut'})
    }

}
