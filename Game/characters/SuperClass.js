import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
import { CharacterList } from "../ObjectLists.js";
import { CameraMan } from "../ObjectLists.js";
export class Character {
    constructor(x, y, name, imgSrc) {
        this.x = x;
        this.y = y;
        this.name = name;

        this.img = new Image();
        this.img.src = imgSrc;

        this.img.onload = () => {

            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };

    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y , this.width, this.height);
    }

    update() {

    }
    
    detectCollision() {

    }
}   