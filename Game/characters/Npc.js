import { Character } from "SuperClass.js";
export class Npc extends Character {
    constructor(x, y, width, height, name, image) {
        super(x, y, width, height, name);
        this.image = image;
    }
}
