import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
import { CharacterList } from "../ObjectLists.js";
import { CameraMan } from "../ObjectLists.js";
export class Character {
    constructor(x, y, name, imgsrc) {
        this.x = x;
        this.y = y;
        this.name = name;

        this.img = new Image();
        this.img.src = imgsrc;

        this.img.onload = () => {

            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };

        this.nWidth = this.img.naturalWidth;
        this.nHeight = this.img.naturalHeight;

    }

    update() {

    }
    
    detectCollision() {

    }
}   