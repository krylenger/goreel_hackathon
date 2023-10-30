import {Assets} from "pixi.js";
import * as sender from "../sender/event-sender";
import * as events from "../constants/events";
import soundJson from  '../../res/sound/soundsprite.json'
import {loadJson} from "../sound-engine/sound-engine";

export let spineResources;

let [totalToLoad, currentlyLoaded] = [0, 0];

export const loadAssetsToCache = async descriptor => {

    const {textures, spines, fonts} = descriptor;

    totalToLoad = textures.length + spines.length + fonts.length

    Assets.addBundle('textures', textures);
    Assets.addBundle('spines', spines);
    Assets.addBundle('fonts', fonts);

    loadJson(soundJson)

    const [spineRes] = await Promise.all([
        Assets.loadBundle('spines', onProgress),
        Assets.loadBundle('textures', onProgress),
        Assets.loadBundle('fonts', onProgress)

    ])

    spineResources = spineRes

}

const onProgress = () => {
    currentlyLoaded++;
    sender.send(events.ON_LOAD_PROGRESS, {totalToLoad, currentlyLoaded});
}

