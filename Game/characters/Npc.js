import { Character } from "./SuperClass.js";
export class Npc extends Character {
    constructor(x, y, name, imgSrc) {
        super(x, y, name, imgSrc);
    }

    
    moveHitbox() {
        return {
            x: this.x + 23,
            y: this.y, 
            width: 75,
            height: 256      
        }
    }

    intHitbox() {
        return {
            x: this.x - 30,
            y: this.y -50, 
            width: 188,
            height: 336
        }
    }

    onInteract() {

    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y);
    }
}
