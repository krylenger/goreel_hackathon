import {TextBase} from "../../components/base/text-base";
import {ContainerBase} from "../../components/base-oriented/container";
import {ScalingButton} from "../../components/ScalingButton";
import {SpriteBase} from "../../components/base/sprite-base";

class UI {
    init(stage, descriptor){
        this.stage = stage
        this.descriptor = descriptor

        this.betValues = this.descriptor.bet.values
        this.betValueIndex = this.descriptor.bet.defaultValuesIndex

        this.createBalance()
        this.createWin()
        this.createBet()
        this.updateBet()


        const playBtnContainer = new ContainerBase(this.stage, this.descriptor['playBtn'])
        this.playBtn = new ScalingButton(playBtnContainer, this.descriptor['playBtn']['btn'])

        this.init = null
    }

    setPlayBtnEnabled(bool){
        this.playBtn.eventMode = bool ? 'static' : 'none';
        if(!bool) this.playBtn.onPointerLeave()
    }

    setPlayBtnAction(fn){
        this.playBtn.setAction(fn)
    }

    setVisiblePlayBtn(visible){
        this.playBtn.setVisible(visible)
    }

    createBalance(){
        const balanceTextContainer = new ContainerBase(this.stage, this.descriptor['balance'])
        this.balanceStaticText = new TextBase(balanceTextContainer, this.descriptor['balance']['staticText'])
        this.balanceDynamicText = new TextBase(balanceTextContainer, this.descriptor['balance']['dynamicText'])
    }

    createWin(){
        const winTextContainer = new ContainerBase(this.stage, this.descriptor['win'])
        this.winStaticText = new SpriteBase(winTextContainer, this.descriptor['win']['staticText'])
        this.winDynamicText = new TextBase(winTextContainer, this.descriptor['win']['dynamicText'])
    }
    createBet(){
        const betTextContainer = new ContainerBase(this.stage, this.descriptor['bet'])

        this.betRectangle = new SpriteBase(betTextContainer,  this.descriptor['bet']['rectangle'])
        this.betStaticText = new SpriteBase(betTextContainer, this.descriptor['bet']['staticText'])
        this.betDynamicText = new TextBase(betTextContainer, this.descriptor['bet']['dynamicText'])
        this.upClickArea = new ScalingButton(betTextContainer, this.descriptor['bet']['upClickArea'], this.onUpClickArea.bind(this))
        this.downClickArea = new ScalingButton(betTextContainer, this.descriptor['bet']['downClickArea'], this.onDownClickArea.bind(this))
    }

    onUpClickArea(){

        this.betValueIndex < this.betValues.length - 1
            ? ++this.betValueIndex : this.betValueIndex = 0;

        this.updateBet()

    }
    onDownClickArea(){
        this.betValueIndex > 0
            ? --this.betValueIndex : this.betValueIndex = this.betValues.length - 1;

        this.updateBet()
    }

    setBalance(balance){
        this.balanceDynamicText.setText(balance)
    }
    getBalance(){
        return +this.balanceDynamicText.getText()
    }

    setWin(win){
        this.winDynamicText.setText(win)
    }
    getWin(){
        return this.winDynamicText.getText()
    }

    updateBet(){
        this.betDynamicText.setText(this.betValues[this.betValueIndex])
    }
    getBet(){
       return +this.betDynamicText.getText()
    }

}

export default new UI();
