import { Character } from "./superclass.js"

import { ctx } from "../canvasctx.js"
import { acceptQuest, activeQuest } from "../ui/quest.js";
import { inventory, Player } from "./player.js";
import { CharacterList } from "../objectlists.js";

const TalkBubble = new Image()
TalkBubble.src = "./game/pictures/interact/talkbubble.png"

export class Npc extends Character {
    constructor(x, y, name, imgSrc, sentence, quest = null, itemtogive = null, itemrequired = null) {
        super(x, y, name, imgSrc);
        this.sentence = sentence;
        this.talking = false;
        const img = new Image();
        img.src = imgSrc;
        this.quest = quest
        this.itemtogive = itemtogive
        this.itemrequired = itemrequired
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

        // Ta quest
        if (this.quest && !this.quest.completed) {
            const added = acceptQuest(this.quest);
            if (added) {
                console.log(`Quest accepted: ${this.quest.questTitle}`);
            } else {
                console.log(`Quest already active: ${this.quest.questTitle}`);
            }
        }

        // Give item
        if (this.itemtogive) {
            if (!inventory.equippedItem1) {
                inventory.equippedItem1 = this.itemtogive;
                console.log(inventory.equippedItem1);
            } else if (!inventory.equippedItem2) {
                inventory.equippedItem2 = this.itemtogive;
            } else if (!inventory.equippedItem3) {
                inventory.equippedItem3 = this.itemtogive;
            }

            console.log(`${this.name} gave you a ${this.itemtogive}`);
            this.itemtogive = null;
        }

        // Complete quests
        if (this.quest && this.itemrequired) {
            // inv check
            const slot = ["equippedItem1", "equippedItem2", "equippedItem3"].find(s => inventory[s] === this.itemrequired);

            if (slot) {
                // tabort ifrån inv
                inventory[slot] = "";
                this.quest.completed = true;
                console.log(`Quest completed: ${this.quest.questTitle}`);

                // Ge moonPice för quest
                if (this.quest.reward) {
                    const player = CharacterList.find(p => p instanceof Player);
                    player.moonPices += 1;
                    console.log(player.moonPices)
                }

                // tabort quest ifrån activeQuest
                const index = activeQuest.indexOf(this.quest);
                // Splice kan ändra i arrays, man lär sig något med GameOn, jippi(index, hur många saker som ska bort)
                if (index >- 1) activeQuest.splice(index, 1);
            }
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
