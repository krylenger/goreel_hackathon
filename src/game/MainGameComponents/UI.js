import {TextBase} from "../../components/base/text-base";
import {ContainerBase} from "../../components/base-oriented/container";
import {ScalingButton} from "../../components/ScalingButton";
import {SpriteBase} from "../../components/base/sprite-base";
import {SoundButton} from "./SoundButton";
import {ON_EVENT_WIN, ON_PLAY_BTN} from "../../constants/events";
import {send} from "../../sender/event-sender";
import {playSound} from "../../sound-engine/sound-engine";

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

        this.soundButtonContainer = new ContainerBase(this.stage, this.descriptor['soundBtn'])
        this.sounButton = new SoundButton(this.soundButtonContainer, this.descriptor['soundBtn'])
        this.sounButton.visible = false


        this.init = null
    }

    onTutorialClick(){
        this.sounButton.visible = true
        this.winTextContainer.visible = true
    }

    setPlayBtnEnabled(bool){
        this.playBtn.eventMode = bool ? 'static' : 'none';
        if(!bool) this.playBtn.onPointerLeave()
    }

    setPlayBtnAction(fn){
        this.playBtn.setAction(() => {
            fn();
            playSound('click')
            send(ON_PLAY_BTN)
        })
    }

    setVisiblePlayBtn(visible){
        this.playBtn.setVisible(visible)
        this.betTextContainer.setVisible(visible)
    }

    createBalance(){
        const balanceTextContainer = new ContainerBase(this.stage, this.descriptor['balance'])
        this.balanceStaticText = new TextBase(balanceTextContainer, this.descriptor['balance']['staticText'])
        this.balanceDynamicText = new TextBase(balanceTextContainer, this.descriptor['balance']['dynamicText'])

        window.setBalance = this.setBalance.bind(this) // for cheating
    }

    createWin(){
        this.winTextContainer = new ContainerBase(this.stage, this.descriptor['win'])
        this.winStaticText = new SpriteBase(this.winTextContainer, this.descriptor['win']['staticText'])
        this.winDynamicText = new TextBase(this.winTextContainer, this.descriptor['win']['dynamicText'])
        this.winTextContainer.visible = false
    }
    createBet(){
        this.betTextContainer = new ContainerBase(this.stage, this.descriptor['bet'])

        this.betRectangle = new SpriteBase(this.betTextContainer,  this.descriptor['bet']['rectangle'])
        this.betStaticText = new SpriteBase(this.betTextContainer, this.descriptor['bet']['staticText'])
        this.betDynamicText = new TextBase(this.betTextContainer, this.descriptor['bet']['dynamicText'])
        this.upClickArea = new ScalingButton(this.betTextContainer, this.descriptor['bet']['upClickArea'], this.onUpClickArea.bind(this))
        this.downClickArea = new ScalingButton(this.betTextContainer, this.descriptor['bet']['downClickArea'], this.onDownClickArea.bind(this))
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
        this.balanceDynamicText.setText(balance.toFixed(2))
    }
    getBalance(){
        return +this.balanceDynamicText.getText()
    }

    setWin(win, hasJackpot = false){
        send(ON_EVENT_WIN, {win, bigWin: hasJackpot})
        this.winDynamicText.setText(win.toFixed(2))
    }
    getWin(){
        return this.winDynamicText.getText()
    }

    updateBet(){
        playSound('click')
        this.betDynamicText.setText(this.betValues[this.betValueIndex])
    }

    getBet(){
       return +this.betDynamicText.getText()
    }

}

export default new UI();
