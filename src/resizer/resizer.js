import * as sender from "../sender/event-sender";
import * as events from "../constants/events";
import * as baseEvents from "../constants/base-events";
import screenfull from "screenfull";
import NoSleep from "nosleep.js";

export class Resizer {
    constructor(renderer, gameContainer, fullScreenMode = true, noSleepMode = true) {

        this.fullScreenMode = fullScreenMode
        this.noSleepMode = noSleepMode

        this.gameContainer = gameContainer
        this.renderer = renderer

        this.width = null
        this.height = null
        this.ratio = null
        this.changeOrientationFlag = null

        addEventListener(baseEvents.RESIZE, this.update.bind(this));
        addEventListener(baseEvents.BEFORE_UNLOAD, this.onBeforeUnLoad.bind(this));

        this.init()

    }

    init(){

        if(this.fullScreenMode) document.body.addEventListener(baseEvents.TOUCH_END, this.onScreenFull.bind(this));
        if(this.noSleepMode) this.noSleepEnable();
        this.update()

    }

    update() {

        this.onUpdateOrientation()
        this.onScale()
    }

    onUpdateOrientation(){

        const isLandOrientation = innerWidth > innerHeight

        if(this.changeOrientationFlag !== isLandOrientation){

            this.changeOrientationFlag = isLandOrientation;

            [this.width, this.height] = isLandOrientation ? [1280 , 720] : [720 , 1280];

            this.ratio = this.width / this.height;

            this.gameContainer.style.width = `${this.width}px`
            this.gameContainer.style.height = `${this.height}px`
            this.renderer.resize(this.width, this.height)

            sender.send(events.CHANGE_ORIENTATION)

        }
    }

    onScale(){
        const scale = innerWidth / innerHeight < this.ratio ? innerWidth / this.width : innerHeight / this.height;
        this.gameContainer.style.transform = `scale(${scale})`
        this.gameContainer.style.left = `${(innerWidth - this.width) / 2}px`
        this.gameContainer.style.top = `${(innerHeight - this.height) / 2}px`
    }

    onBeforeUnLoad(){
        document.body.removeChild(this.gameContainer)
    }

    onScreenFull(){
        if (screenfull.isEnabled && !screenfull.isFullscreen) {
            screenfull.request(document.body).then(this.update.bind(this))
        }
    }

    noSleepEnable(){
        const noSleep = new NoSleep()
        document.addEventListener(baseEvents.POINTER_UP, function enableNoSleep() {
            document.removeEventListener(baseEvents.POINTER_UP, enableNoSleep, false);
            noSleep.enable();
        }, false);
    }

}
