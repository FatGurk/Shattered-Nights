import { Character } from "./SuperClass.js";
import { ctx } from "../GameLoop.js";
let keys = {};
export class Player extends Character {
    constructor(x, y, name, imgSrc) {
        super(x, y, name, imgSrc);
    }

    update() {
        const speed = 10;
        if (keys["ArrowUp"] || keys["w"]|| keys["W"]) this.y -= speed;
        if (keys["ArrowDown"] || keys["s"] || keys["S"]) this.y += speed;
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) this.x -= speed;
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) this.x += speed;
    }
}

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);