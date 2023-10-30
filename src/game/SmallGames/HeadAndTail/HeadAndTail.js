import UI from "../../MainGameComponents/UI";
import gsap from 'gsap/all';
import {ON_BONUS_GAME_CLOSE} from "../../../constants/events";
import {Container} from "pixi.js";
import {SpriteBaseOriented} from '../../../components/base-oriented/sprite-base-oriented';
import {ContainerBase} from '../../../components/base-oriented/container';
import {SpineBase} from "../../../components/base/spine-base";
import {SpriteBase} from '../../../components/base/sprite-base';
import {TextBase} from '../../../components/base/text-base';
import {ScalingButton} from '../../../components/ScalingButton';
import {randomFromArr} from '../../../helpers/helper';
import {send} from "../../../sender/event-sender";
import {playSound, stopSound} from "../../../sound-engine/sound-engine";

export class HeadAndTail extends Container{
    constructor(stage, descriptor) {
        super();
        this.stage = stage;
        this.descriptor = descriptor;

        this.currentBet = null;

        this.bg = new SpriteBaseOriented(this, descriptor['bg']);
        this.bg.addToStage();

        this.headAndTailContainer = new ContainerBase(this, this.descriptor['mainContainer']);

        this.diamondCoin = new ScalingButton(this.headAndTailContainer, this.descriptor['mainContainer'].diamondCoin, () => this.flipCoin('diamond'));
        this.diamondCoin.setVisible(false);
        this.crownCoin = new ScalingButton(this.headAndTailContainer, this.descriptor['mainContainer'].crownCoin, () => this.flipCoin('crown'));
        this.crownCoin.setVisible(false);

        this.chooseHeader = new TextBase(this.headAndTailContainer, this.descriptor['mainContainer'].chooseHeader);
        this.chooseHeader.setVisible(false);

        this.coinSpineCont = new ContainerBase(this.headAndTailContainer, this.descriptor['mainContainer'].coinSpine)
        this.coinSpine = new SpineBase(this.coinSpineCont, this.descriptor['mainContainer'].coinSpine);
        this.coinSpine.setVisible(false);

        this.chosenSideCont = new ContainerBase(this.headAndTailContainer, this.descriptor['mainContainer'].chosenSideCont)
        this.chosenDiamond = new SpriteBase(this.chosenSideCont, this.descriptor['mainContainer'].chosenDiamond);
        this.chosenDiamond.setVisible(false);
        this.chosenCrown = new SpriteBase(this.chosenSideCont, this.descriptor['mainContainer'].chosenCrown);
        this.chosenCrown.setVisible(false);

        this.exitButtonCont = new ContainerBase(this.headAndTailContainer, this.descriptor['mainContainer'].exitButtonCont);
        this.exitButton = new ScalingButton(this.exitButtonCont, this.descriptor['mainContainer'].exitButton, () => this.close());
        this.exitButton.setVisible(false);

        this.stage.addChild(this);
    }

    open(){
        this.visible = true;
        this.alpha = 0
        gsap.to(this, {pixi: {alpha: 1}, duration: 1, onComplete:() =>{
                UI.setVisiblePlayBtn(true);
                UI.setPlayBtnAction(this.startGame.bind(this));
            }})
    }

    startGame() {
        UI.setVisiblePlayBtn(false);
        const balance = UI.getBalance();
        this.currentBet = UI.getBet();
        UI.setWin(0)
        UI.setBalance(balance - this.currentBet);

        this.diamondCoin.setVisible(true);
        this.crownCoin.setVisible(true);
        this.chooseHeader.setVisible(true);
        this.chosenDiamond.setVisible(false);
        this.chosenCrown.setVisible(false);
        this.coinSpine.setVisible(false);
        this.exitButton.setVisible(false);
    }

    flipCoin(side) {
        if (!side) return;
        playSound('click')
        playSound('sack_mix')
        gsap.delayedCall(2.3, ()=> stopSound('sack_mix'))
        const flipResult = randomFromArr([0, 1]);
        const win = this.calculateWin(side, flipResult);

        this.diamondCoin.setVisible(false);
        this.crownCoin.setVisible(false);
        this.chooseHeader.setVisible(false);
        this.coinSpine.setVisible(true);
        this.highlightChosenSide(side);

        this.coinSpine.setAnimation(0, this.getAnimationName(side, flipResult), false);
        gsap.delayedCall(2.2, () => this.setWin(win));

    };

    getAnimationName(side, flipResult) {
        if (side === 'diamond') {
            if (flipResult === 0) return 'diamond_to_diamond';
            if (flipResult === 1) return 'diamond_in_crown';
        } else {
            if (flipResult === 0) return 'crown_in_diamond';
            if (flipResult === 1) return 'crown_to_crown';
        }
    };

    highlightChosenSide(side) {
        side === 'diamond' && this.chosenDiamond.setVisible(true);
        side === 'crown' && this.chosenCrown.setVisible(true);
    }

    calculateWin(side, flipResult) {
        if (side === 'diamond' && flipResult === 0 || side === 'crown' && flipResult === 1) return this.currentBet * 2;
        if (side === 'diamond' && flipResult === 1 || side === 'crown' && flipResult === 0) return 0;
    }

    setWin(win) {
        UI.setWin(win)
        const balance = UI.getBalance()
        UI.setBalance(balance + win)
        UI.setVisiblePlayBtn(true);
        this.exitButton.setVisible(true);
    }

    close(){
        this.exitButton.setVisible(false);
        gsap.to(this, {pixi: {alpha: 0}, duration: 1, onComplete: () =>{
                this.alpha = 1
                this.visible = false
                this.coinSpine.setVisible(false);
                this.chosenDiamond.setVisible(false);
                this.chosenCrown.setVisible(false);
            }})
        send(ON_BONUS_GAME_CLOSE)

    }
}
