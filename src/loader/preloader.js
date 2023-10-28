import * as sender from "../sender/event-sender";
import * as events from "../constants/events";

export class Preloader {
    constructor(stage) {
        this.stage = stage

        this.img = document.createElement('img')
        this.img.setAttribute('src', './res/common/preloader.png')

        this.textContainer = document.createElement('div')

        this.textContainer.textContent = '0.00%'
        sender.subscribe(events.ON_LOAD_PROGRESS, ({detail}) => this.onProgress(detail));

        this.stage.appendChild(this.img)
        this.stage.appendChild(this.textContainer)
    }
    onProgress(detail){
        const {totalToLoad, currentlyLoaded} = detail
        this.textContainer.textContent = (currentlyLoaded/totalToLoad * 100).toFixed(2) + '%'
    }

    hide(){
        this.stage.removeChild(this.img)
        this.stage.removeChild(this.textContainer)
    }
}
