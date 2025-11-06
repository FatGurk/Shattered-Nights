import { Character } from "./SuperClass.js";
export class Npc extends Character {
    constructor(x, y, name, imgSrc) {
        super(x, y, name, imgSrc);
    }

    hitbox() {
        return {
            x: this.x + 20,
            y: this.y + 190,
            width: 88,
            height: 48, 
        }
    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y);
    }
}
