
import {ScalingButton} from "../../components/ScalingButton";
import {createTexture} from "../../helpers/helper";
import {ON_SET_SOUNDS_ON_OFF} from "../../constants/events";
import {send} from "../../sender/event-sender";


export class SoundButton extends ScalingButton{
    constructor(stage, descriptor, callback) {
        super(stage, descriptor, callback);

        this.textures = descriptor.textureNames.map(textureName => createTexture(textureName))

        this.soundState = false
    }
    onPointerUp() {
        this.soundState = !this.soundState;

        send(ON_SET_SOUNDS_ON_OFF, this.soundState);

        this.texture = this.textures[+!!this.soundState]

        super.onPointerUp();
    }

}
