import { Howl } from 'howler'
import {isExist} from "../helpers/helper";
import {subscribe} from "../sender/event-sender";
import {ON_SET_SOUNDS_ON_OFF} from "../constants/events";

let sound = null;

let soundJson = null;

const soundIds = {};

const setSoundJson = json => soundJson = json;

let isInited = false


subscribe(ON_SET_SOUNDS_ON_OFF, ({detail: allow}) => {
    if(allow && !isInited) {
        initSound()
        isInited = true
    }
        Howler.mute(!allow)
});


const initSound = () => sound = new Howl(soundJson);


const playSound = soundName =>  {
    if(!isInited) return
    soundIds[soundName] = sound.play(soundName)
};


const isPlaying = () => sound.playing();



const stopSound = soundName => {
    if(!isInited) return
    if(isExist(soundName) && isExist(sound) && isExist(soundIds[soundName])) {

        sound.stop(soundIds[soundName]);

    }
}

export {setSoundJson, initSound, playSound, stopSound, isPlaying};
