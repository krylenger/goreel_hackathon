import {Assets} from "pixi.js";
import * as sender from "../sender/event-sender";
import * as events from "../constants/events";

export let spineResources;

let [totalToLoad, currentlyLoaded] = [0, 0];

export const loadAssetsToCache = async descriptor => {

    const {textures, spines, fonts} = descriptor;

    totalToLoad = textures.length + spines.length + fonts.length

    Assets.addBundle('textures', textures);
    Assets.addBundle('spines', spines);
    Assets.addBundle('fonts', fonts);

    await Assets.loadBundle('textures', onProgress)
    await Assets.loadBundle('fonts', onProgress)

    spineResources = await Assets.loadBundle('spines', onProgress)


}

const onProgress = () => {
    currentlyLoaded++;
    sender.send(events.ON_LOAD_PROGRESS, {totalToLoad, currentlyLoaded});
}

