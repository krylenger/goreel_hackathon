import UI from "./UI";

export class Game {
    constructor(stage, descriptor) {
        this.stage = stage
        this.descriptor = descriptor





        UI.init(this.stage, this.descriptor['ui'])
    }

}
