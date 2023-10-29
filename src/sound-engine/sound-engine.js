import { Howl } from 'howler'
import {isExist} from "../helpers/helper";
import {subscribe} from "../sender/event-sender";
import {ON_SET_SOUNDS_ON_OFF} from "../constants/events";
import soundJson from  '../../res/sound/soundsprite.json'

let sound = null;
let isInited = false
const soundIds = {};

window.addEventListener('blur', ()=> Howler.mute(true))
window.addEventListener('focus', ()=> Howler.mute(false))
subscribe(ON_SET_SOUNDS_ON_OFF, ({detail: allow}) => onSetSoundsOnOff(allow));

const onSetSoundsOnOff = allow => {
    if(allow && !isInited) init()
    Howler.mute(!allow)
}

const init = () => {
    sound = new Howl(soundJson)
    isInited = true
};

const playSound = soundName =>  {
    if(!isInited) return
    soundIds[soundName] = sound.play(soundName)
};

const stopSound = soundName => {
    if(!isInited) return
    if(isExist(soundName) && isExist(sound) && isExist(soundIds[soundName])) {
        sound.stop(soundIds[soundName]);
    }
}

export {playSound, stopSound};
