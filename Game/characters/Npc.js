import { Character } from "./SuperClass.js";
import { ctx } from "../GameLoop.js";
export class Npc extends Character {
    constructor(x, y, width, height, name, imgSrc) {
        super(x, y, width, height, name, imgSrc);
    }
}
