import {ScalingButton} from "../../components/ScalingButton";
import {ON_SET_SOUNDS_ON_OFF} from "../../constants/events";
import {createTexture} from "../../helpers/helper";
import {send} from "../../sender/event-sender";
import {playSound} from "../../sound-engine/sound-engine";

export class SoundButton extends ScalingButton{
    constructor(stage, descriptor, callback) {
        super(stage, descriptor, callback);

        this.textures = descriptor.textureNames.map(textureName => createTexture(textureName))
        this.soundState = true
        // this.isSoundRun = true

    }
    onPointerUp() {
        this.soundState = !this.soundState;

        send(ON_SET_SOUNDS_ON_OFF, this.soundState);

        // if(this.soundState && !this.isSoundRun){
        //     playSound('main')
        //     this.isSoundRun = true
        // }
        this.texture = this.textures[+!!this.soundState]
        super.onPointerUp();
    }

}
