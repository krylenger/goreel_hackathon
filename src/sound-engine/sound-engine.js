import { Howl } from 'howler'
import {isExist} from "../helpers/helper";
import {subscribe} from "../sender/event-sender";
import {ON_SET_SOUNDS_ON_OFF} from "../constants/events";
import soundJson from  '../../res/sound/soundsprite.json'

let sound = null;
let isInited = false
let isAllowed = false
const soundIds = {};

window.addEventListener('blur', ()=> (isInited && isAllowed) && Howler.mute(true))
window.addEventListener('focus', ()=> (isInited && isAllowed) && Howler.mute(false))
subscribe(ON_SET_SOUNDS_ON_OFF, ({detail: allow}) => onSetSoundsOnOff(allow));

const onSetSoundsOnOff = allow => {
    isAllowed = allow;
    Howler.mute(!allow)
}

const initSounds = () => {
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

export {playSound, stopSound, initSounds};
