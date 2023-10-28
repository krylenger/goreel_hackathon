import { Howl } from 'howler'
import soundsprite from "../../res/sound/soundsprite.json";

const sound = new Howl(soundsprite);

const soundIds = {};

const playSound = soundName => soundIds[soundName] = sound.play(soundName, false)

const stopSound = soundName => sound.stop(soundIds[soundName], false)

export {playSound, stopSound};
