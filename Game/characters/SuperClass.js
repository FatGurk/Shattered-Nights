import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
import { CharacterList } from "../ObjectLists.js";
import { CameraMan } from "../ObjectLists.js";
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

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y , this.width, this.height);
    }

    detectCollision(CharacterList) {
        let t = this;
            CharacterList.forEach((e) => {
                if (!e.colliosion) return;
                if (e == t) return false;
                let right = t.x < e.x + e.width;
                let left  = t.x + t.width > e.x;
                let up = t.y < e.y + e.height;
                let down = t.y + t.height > e.y;
                if (right && left && up && down) {
                    console.log(`Collision with ${e.name}`);
                    return true;
                }
            });
    }
}   