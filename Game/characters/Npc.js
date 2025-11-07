import { Character } from "./SuperClass.js";
export class Npc extends Character {
    constructor(x, y, name, imgSrc, sentence, talking) {
        super(x, y, name, imgSrc);
        this.sentence = sentence;
        this.talking = false;
        const img = new Image();
        img.src = imgSrc
    }

    
    moveHitbox() {
        return {
            x: this.x + 23,
            y: this.y + 200, 
            width: 75,
            height: 56      
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
        this.talking = true;


    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y);

        if (this.talking && this.sentence) {
            
        }
    }
}
