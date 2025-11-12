import { Character } from "./superclass.js"

import { ctx } from "../canvasctx.js"
import { acceptQuest, activeQuest } from "../ui/quest.js";
import { inventory, Player } from "./player.js";
import { CharacterList } from "../objectlists.js";
import { sounds } from "../sounds.js";

const TalkBubble = new Image()
TalkBubble.src = "./game/pictures/interact/talkbubble.png"

export class Npc extends Character {
    constructor(x, y, name, imgSrc, sentenceBefore, sentenceAfter = null, quest = null, itemtogive = null, itemrequired = null) {
        super(x, y, name, imgSrc);
        this.talking = false;
        const img = new Image();
        img.src = imgSrc;
        this.sentenceBefore = sentenceBefore;
        this.sentenceAfter = sentenceAfter;
        this.quest = quest;
        this.itemtogive = itemtogive;
        this.itemrequired = itemrequired;
    }

    // Konvo beronde på quest gjord eller inte
    getKonvo() {
        if (this.quest) {
            let hasRequired = false;
            if (typeof this.itemrequired === "function") {
                const player = CharacterList.find(p => p instanceof Player);
                hasRequired = this.itemrequired(player);
            } else if (this.itemrequired) {
                const slot = ["equippedItem1","equippedItem2","equippedItem3"].find(s => inventory[s] === this.itemrequired);
                hasRequired = !!slot;
            }

            if (this.quest.completed || hasRequired) {
                return this.sentenceAfter || this.sentenceBefore;
            }
        }
        return this.sentenceBefore;
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
            x: this.x - 70,
            y: this.y - 100, 
            width: 338,
            height: 486
        }
    }

    onInteract() {
        this.talking = true;
        const player = CharacterList.find(p => p instanceof Player)

        // La speciale el Stefano guessing game
        if (this.name === "Stefan") {
            // För att starta
            if (!player.stefanMinigame) {
                player.stefanMinigame = true;
                player.CorrectGuesses = 0;
                player.stefanNumber = Math.floor(Math.random() * 3) + 1;
                this.sentence = "I fished up something of interest in the sea. \nGuess the number I'm thinking of (1-3). \nGuess right three times in a row to win.";
                return;
            } else {
                // Om spelare int när man redan spelar
                this.sentence = "You're already playing, press 1-3 to guess a number.";
                return;
            }
        }
        

        // Kolla efter requierments
        if (this.quest && this.itemrequired) {
            let hasRequired = false;

            if (typeof this.itemrequired === "function") {
                hasRequired = this.itemrequired(player);
            } else {
                // inv check
                const slot = ["equippedItem1", "equippedItem2", "equippedItem3"].find(s => inventory[s] === this.itemrequired);
                hasRequired = !!slot;
                if (hasRequired) {
                    //töm inv slot
                    inventory[slot] = "";
                }
            }

            if (hasRequired) {
                this.quest.completed = true;
                console.log(`Quest completed: ${this.quest.questTitle}`);

                if (this.quest.reward) {
                    player.moonPices += 1;
                    sounds.aquieredMoonPice.play();
                    console.log(player.moonPices);
                }

                const index = activeQuest.indexOf(this.quest);
                if (index > -1) activeQuest.splice(index, 1);
            }
        }

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

        // Få efter complition text om quest var klar
        this.sentence = this.getKonvo()
    }

    stefanGuessGameUpdate() {
        const player = CharacterList.find(p => p instanceof Player)
        if (this.name !== "Stefan" || !player.stefanMinigame) return;

            //input ifrån e.keys i player.js
            const guessedNumber = player.numberInput;

            // Skippa if ingen input vald
            if (guessedNumber === null) return;

            // Kolla if input === med stefans nummer
            if (player.stefanNumber === guessedNumber) {
                player.CorrectGuesses += 1;
                this.sentence = "You were correct";
                if (player.CorrectGuesses >= 2) {
                    // Reward the player
                    player.moonPices += 1;
                    console.log(player.moonPices)
                    sounds.aquieredMoonPice.play();
                    player.CorrectGuesses = 0;
                    player.stefanMinigame = false;
                    this.sentence = "Impossible!!! Only one person has done this before \nand that's the Mad Scientist!!! \nWell, a promise is a promise, here you go.";
                } else {
                    // Continue the game with a new number
                    player.stefanNumber = Math.floor(Math.random() * 3) + 1;
                    this.sentence = `You have ${player.CorrectGuesses} in a row`;
                }
            } else {
                // Wrong guess — reset and exit minigame
                player.CorrectGuesses = 0;
                player.stefanMinigame = false;
                this.sentence = "You were wrong! Press E to restart.";
            }

        player.numberInput = null;
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
