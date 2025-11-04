import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
export class Character {
    constructor(x, y, name, imgSrc) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.width = 0;
        this.height = 0;
        this.img = new Image();
        this.img.src = imgSrc;

        this.img.onload = () => {
            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };
    }

    draw() {
        ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
    }
}