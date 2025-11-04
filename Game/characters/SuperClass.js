import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
export class Character {
    constructor(x, y, width, height, name, imgSrc) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }

}