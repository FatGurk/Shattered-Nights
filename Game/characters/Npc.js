import { Character } from "./SuperClass.js";
import { ctx } from "../GameLoop.js";
export class Npc extends Character {
    constructor(x, y, name, imgSrc) {
        super(x, y, name, imgSrc);
    }

}
