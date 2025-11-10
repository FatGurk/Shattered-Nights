import { Character } from "./superclass.js"

import { ctx } from "../canvasctx.js"
import { acceptQuest, activeQuest } from "../ui/quest.js";

const TalkBubble = new Image()
TalkBubble.src = "./game/pictures/interact/talkbubble.png"

export class Npc extends Character {
    constructor(x, y, name, imgSrc, sentence, quest) {
        super(x, y, name, imgSrc);
        this.sentence = sentence;
        this.talking = false;
        const img = new Image();
        img.src = imgSrc;
        this.quest = quest
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

        // Debug: log when onInteract is invoked and current quest state
        console.log("Npc.onInteract() ->", this.name, "quest:", this.quest, "activeQuest:", activeQuest);

        if (this.quest || !this.quest.completed || activeQuest !== this.quest) {
            acceptQuest(this.quest);
            console.log(`Quest accepted: ${this.quest.questTitle}`)
        }
    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y);
    }

    drawBubble() {
        if (this.talking && this.sentence) {
            // Rita bubblan
            const bubbleWidth = 600;
            const bubbleHeight = 300;
            const bubbleX = ctx.canvas.width - bubbleWidth;
            const bubbleY = ctx.canvas.height - bubbleHeight;

            ctx.drawImage(TalkBubble, bubbleX, bubbleY, bubbleWidth, bubbleHeight);
            
            // Rita(skriv) ut texten aka sentence
            ctx.font = "24px 'Copperplate gotich bold', regular";
            ctx.fillStyle = "White";
            ctx.textBaseline = "top";
            
            const lines = this.sentence.split("\n");
            const lineHeight = 40;
            const textX =  bubbleX + 50;
            const textY = bubbleY + 50;

            // Rad för rad
            lines.forEach((line, i) => {
                ctx.fillText(line, textX, textY + i * lineHeight);
            });
        }
    }
}
