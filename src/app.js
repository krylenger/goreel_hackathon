import '../css/style.css';
import '../css/rotation-preloader.css';
import '../css/fonts.css'
import "./waiter/waiter";
import { PixiPlugin } from 'gsap/PixiPlugin';
import {Application} from "pixi.js";
import {Preloader} from "./loader/preloader";
import {Resizer} from "./resizer/resizer";
import {Game} from "./game/game";
import {loadAssetsToCache} from "./loader/resource-loader";
import {settings} from "../settings/settings";
import {gsap} from "gsap";
import * as PIXI from 'pixi.js';
import * as keys from "./constants/keys";

gsap.registerPlugin(PixiPlugin);
PixiPlugin.registerPIXI(PIXI);

const gameContainer = document.querySelector('#game')

const app = new Application({backgroundColor: settings[keys.BACKGROUND_COLOR], antialias: true});

new Resizer(app.renderer, gameContainer, true, true)
const preloader = new Preloader(gameContainer)

const onAssetsReady = () => {

    gameContainer.style.opacity = 0

    gsap.to(gameContainer.style, {opacity: 1, duration: 1, delay: 0.3,
        onStart:() => {
            preloader.hide()
            gameContainer.appendChild(app.view)
            onAssetsReady.resolving()
        }
    })
}

(async () => {
    await loadAssetsToCache(settings['loader']).catch(e => console.log('error loading settings', e))
    await onAssetsReady.wait()
    try {
        new Game(app.stage, settings['game'])
    } catch (e) {
        console.log('Game error', e)
    }
})()

