import { Character } from "./SuperClass.js";
import { ctx } from "../GameLoop.js";
export class Player extends Character {
    constructor(x, y, width, height, name, imgSrc) {
        super(x, y, width, height, name, imgSrc);
    }

    update() {
        const speed = 5;
        if (keys["ArrowUp"] || keys["w"]|| keys["W"]) {
            this.y -= speed;
        }
        if (keys["ArrowDown"] || keys["s"] || keys["S"]) {
            this.y += speed;
        }
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) {
            this.x -= speed;
        }
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) {
            this.x += speed;
        }
    }
}
