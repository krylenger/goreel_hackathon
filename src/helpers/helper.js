import {Texture} from "pixi.js";
import {spineResources} from "../loader/resource-loader";

export const createTexture = textureName => Texture.from(textureName)

export const createSpineData = spineName => spineResources[spineName].spineData

export const isLand = () => innerWidth > innerHeight;

export const isExist = value => value !== null && value !== undefined

export const isFunction = func => func instanceof Function

export const randomMinMax = (min, max) => Math.random() * (max - min) + min

export const randomFromArr = arr => Math.floor(Math.random() * arr.length)



