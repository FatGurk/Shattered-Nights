import { Character } from "./SuperClass.js"

import { ctx } from "../CanvasCtx.js"

const TalkBubble = new Image()
TalkBubble.src = "./Game/Pictures/Interact/TalkBubble.png"

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
    }

    drawBubble() {
        if (this.talking && this.sentence) {
            // Rita bubblan
            const bubbleWidth = 600;
            const bubbleHeight = 400;
            const bubbleX = ctx.canvas.width - bubbleWidth;
            const bubbleY = ctx.canvas.height - bubbleHeight;

            ctx.drawImage(TalkBubble, bubbleX, bubbleY, bubbleWidth, bubbleHeight);
            
            // Rita(skriv) ut texten aka sentence
            ctx.font = "20px Arial";
            ctx.fillStyle = "White";
            ctx.textBaseline = "middle";
            ctx.fillText(this.sentence, bubbleX + 50, bubbleY + bubbleHeight / 2);
        }
    }
}
