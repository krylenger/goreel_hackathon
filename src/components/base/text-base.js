import * as keys from '../../constants/keys.js';
import {Text} from "pixi.js";
import {isExist} from "../../helpers/helper";

export class TextBase extends Text{

    constructor(stage, descriptor) {

        super('', descriptor['style'] ?? null)

        this.stage = stage;

        if(isExist(descriptor[keys.ALPHA])) this.alpha = descriptor[keys.ALPHA];

        if(isExist(descriptor[keys.X])) this.x = descriptor[keys.X];

        if(isExist(descriptor[keys.Y])) this.y = descriptor[keys.Y];

        this.anchor.x = descriptor[keys.ANCHOR_X] ?? 0;
        this.anchor.y = descriptor[keys.ANCHOR_Y] ?? 0;

        this.prefix =  descriptor['prefix'] ?? '';
        this.postfix =  descriptor['postfix'] ?? '';

        this.textValue = 0

        this.setText(descriptor['text'] ?? '')

        this.addToStage()

    }

    removeFromStage() {

        this.stage.removeChild(this);

    }

    addToStage() {

        this.stage.addChild(this);

    }

    setAlpha(alpha) {

        this.alpha = alpha;

    }

    setVisible(visible) {

        this.visible = visible;
    }

    setText(text) {

        this.textValue = text

        this.text = this.prefix + text + this.postfix;
    }

    getText() {

        return this.textValue

    }

    setStyle(style){
        this.style = style
    }

}

