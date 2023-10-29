import UI from "../../MainGameComponents/UI";
import gsap from 'gsap/all';
import {Container} from "pixi.js";
import {SpriteBaseOriented} from '../../../components/base-oriented/sprite-base-oriented';
import {ContainerBase} from '../../../components/base-oriented/container';
import {SpineBase} from "../../../components/base/spine-base";
import {SpriteBase} from '../../../components/base/sprite-base';
import {TextBase} from '../../../components/base/text-base';
import {ScalingButton} from '../../../components/ScalingButton';
import {randomFromArr} from '../../../helpers/helper';


export class HeadAndTail extends Container{
    constructor(stage, descriptor) {
        super();
        this.stage = stage;
        this.descriptor = descriptor;

        this.currentBet = null;
        this.restartGame = null;

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

    open(restartGame){
        this.visible = true;
        this.alpha = 0
        gsap.to(this, {pixi: {alpha: 1}, duration: 2, onComplete:() =>{
                UI.setVisiblePlayBtn(true);
                UI.setPlayBtnAction(this.startGame.bind(this));
                this.startGame();
                this.restartGame = restartGame;
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
        this.chosenDiamond.setVisible(true);
        this.chosenCrown.setVisible(true);
        this.coinSpine.setVisible(false);
        this.exitButton.setVisible(false);
    }


    flipCoin(side) {
        if (!side) return;

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
        side === 'diamond' && this.chosenCrown.setVisible(false);
        side === 'crown' && this.chosenDiamond.setVisible(false);
    }

    calculateWin(side, flipResult) {
        if (side === 'diamond' && flipResult === 0 || side === 'crown' && flipResult === 1) return this.currentBet * 2;
        if (side === 'diamond' && flipResult === 1 || side === 'crown' && flipResult === 0) return 0;
    }

    setWin(win) {
        console.log('WIN', win);
        UI.setWin(win)
        const balance = UI.getBalance()
        UI.setBalance(balance + win)
        UI.setVisiblePlayBtn(true);
        this.exitButton.setVisible(true);
    }

    close(){
        UI.setPlayBtnEnabled(false);

        gsap.to(this, {pixi: {alpha: 0}, duration: 0, onComplete: () =>{
                UI.setVisiblePlayBtn(false)
                UI.setPlayBtnEnabled(true)
                UI.setPlayBtnAction(null)
                this.alpha = 1
                this.visible = false
                this.restartGame()
            }})
    }
}
