import { Character } from "./superclass.js";
import { Npc } from "./npc.js";
import { CharacterList } from "../objectlists.js";
import { ctx, Canvas } from "../canvasctx.js";
import { MAP_HEIGHT, MAP_WIDTH, TILE_SIZE, Map1, Tile, InteractableSprites, CarrotFields, MorotFaltMed, PlacePlot, SpriteList, triggerFirstStage} from "../map/map.js";
import { Camera } from "../camera.js";
import { sounds } from "../sounds.js";

const keys = {};

export const inventory = {
    equippedItem1: "",
    equippedItem2: "",
    equippedItem3: "",
}
export let canInteract = true;
export let livingState = false;

const TalkBubble = new Image();
TalkBubble.src = "./game/pictures/interact/ebutton.png"

export class Player extends Character {
    constructor(x, y, name, imgscr) {
        super(x, y, name, imgscr.down);
        this.pojk = {};
        for (const dir in imgscr) {
            const img = new Image();
            img.src = imgscr[dir];
            this.pojk[dir] = img;
        }
        this.facing = "down";
        this.showBubble = false;
        this.minigameOpen = false;
        this.moonPices = 0;
        this.countBlomma = 0;
        this.CorrectGuesses = 0;
        this.stefanNumber = null;
        this.stefanMinigame = false;
        this.numberInput = null;
        this.animationFrame = 0;
        this.animationSpeed = 0.15
        this.moving = false;
        this.framesNoShowel = {
            up: [this.pojk.up1, this.pojk.up2],
            down: [this.pojk.down1, this.pojk.down2],
            left: [this.pojk.left1, this.pojk.left2],
            right: [this.pojk.right1, this.pojk.right2]
        };

        this.idleNoShowel = {
            up: this.pojk.up,
            down: this.pojk.down,
            left: this.pojk.left,
            right: this.pojk.right
        };
    }

    moveHitbox() {
        return {
            x: this.x + 23,
            y: this.y,
            width: 75,
            height: 128
        };
    }

    intHitbox() {
        return {
            x: this.x - 30,
            y: this.y - 30,
            width: 158,
            height: 188
        }
    }

    // Collision för Map items
    Collision(x, y, width, height) {
        let topRow = Math.floor(y / TILE_SIZE)
        let botRow = Math.floor((y + height) / TILE_SIZE)
        let leftCol = Math.floor(x / TILE_SIZE)
        let rightCol = Math.floor((x + width) / TILE_SIZE)

        for ( let row = topRow; row <= botRow; row++) {
            for ( let col = leftCol; col <= rightCol; col++) {
                if (row < 0|| col < 0 || row >= MAP_HEIGHT || col >= MAP_WIDTH) {
                    return true;
                }
                const tile = Map1[row][col];
                if (tile.ground?.solid || tile.behind?.solid || tile.infront?.solid) {
                    return true;
                } 
            }
        }
        return false;
    }

    // Collision
    NpcCollision(other) {
        if (!other) return false;

        const playerCenter = {
            x: this.x + 64,
            y: this.y + 64
        };

        const npcBox = other.hitbox(); // npc hitbox

        // Kolla player i npc
        return (
            playerCenter.x >= npcBox.x &&
            playerCenter.x <= npcBox.x + npcBox.width &&
            playerCenter.y >= npcBox.y &&
            playerCenter.y <= npcBox.y + npcBox.height
        );
    }

    //==========
    // Interact
    //==========
    interact() {

        let TalkingTo = false;

        // Interact med npcs
        for (const npc of CharacterList) {
            if (npc === this) continue;

            const playerBox = this.intHitbox();
            const npcBox = npc.intHitbox();

            if (rectOverlap(playerBox, npcBox)) {

                npc.talking = true;
                TalkingTo = true;

                console.log(`Du pratar med ${npc.name}`);
                if (typeof npc.onInteract === "function") npc.onInteract();
            } else {
                // Remove bubble om utanför intArea
                npc.talking = false;
            }
        }

        //============================
        // Interact med Dirt With Moon
        //============================
        for (let row = 0; row < MAP_HEIGHT; row++) {
            for (let col = 0; col < MAP_WIDTH; col++) {
                const tile = Map1[row][col].behind;
                if (!tile) continue;

                if (tile === InteractableSprites.DirtWithMoon) {
                    const tileRectangle = {
                        x: col * TILE_SIZE,
                        y: row * TILE_SIZE,
                        width: TILE_SIZE,
                        height: TILE_SIZE
                    };

                    if (rectOverlap(this.intHitbox(), tileRectangle)) {
                        console.log("Player interacts with tile:", tile.type);
                        if (inventory.equippedItem1 === "Spade") {
                            console.log("You dug the dirt!");
                            this.moonPices += 1;
                            Map1[row][col].behind = null;
                            console.log(this.moonPices)

                            // Spela upp ljudet
                            sounds.aquieredMoonPice.play()

                            // Trigger world event aka byta state
                            livingState = true;
                            setTimeout(() => {
                                triggerFirstStage(() =>{
                                    console.log("Du kan nu farma jorden")
                                })
                            }, 2000);
                        }
                    }
                }
            }
        }

        //=====================
        // Interact med blommor
        //=====================
        for (let row = 0; row < MAP_HEIGHT; row++) {
            for (let col = 0; col < MAP_WIDTH; col++) {
                const tile = Map1[row][col].behind;
                if (!tile) continue;

                const is = InteractableSprites;

                if (tile === is.RodBlomma ||  tile === is.VitBlomma || tile === is.BlaBlomma) {
                    const tileRectangle = {
                        x: col * TILE_SIZE,
                        y: row * TILE_SIZE,
                        width: TILE_SIZE,
                        height: TILE_SIZE
                    };

                    if (rectOverlap(this.intHitbox(), tileRectangle)) {
                        console.log("Player interacts with tile:", tile.type);
                        if (inventory.equippedItem1 === "Spade") {
                            console.log("You dug up blomma!");
                            this.countBlomma += 1;
                            Map1[row][col].behind = null;
                            console.log(this.countBlomma)
                        }
                    }
                }
            }
        }

        //=======================
        // Interact med morofält
        //=======================
        for (const falt of CarrotFields) {
            if (!livingState) continue

            const tileRectangle = {
                x: falt.startCol * TILE_SIZE,
                y: falt.startRow * TILE_SIZE,
                width: TILE_SIZE,
                height: TILE_SIZE
            };

            if (rectOverlap(this.intHitbox(), tileRectangle)) {
                // Plantera
                if (!falt.planted && inventory.equippedItem1 === "Spade") {
                    falt.planted = true;
                    falt.growthTimer = 0;
                    falt.fullyGrown = false;
                    console.log("Planterat morot");
                    PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed[0])
                }
                // Harvesta
                if (falt.planted && falt.fullyGrown && inventory.equippedItem1 === "Spade") {
                    falt.planted = false;
                    falt.growthTimer = 0;
                    falt.fullyGrown = false;
                    console.log("Tog morot");
                    PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed[0])

                    const farmadMorot = "Carrot";
                    
                    if (!inventory.equippedItem1) {
                        inventory.equippedItem1 = farmadMorot;
                        console.log(inventory.equippedItem1)
                    } else if (!inventory.equippedItem2) {
                        inventory.equippedItem2 = farmadMorot;
                        console.log(inventory.equippedItem2)
                    } else if (!inventory.equippedItem3) {
                        inventory.equippedItem3 = farmadMorot;
                    } else {
                        console.log("No space for carrot");
                    }
                }
            }
        }

        for (let row = 0; row < MAP_HEIGHT; row++) {
            for (let col = 0; col < MAP_WIDTH; col++) {
                const tile = Map1[row][col].behind;
                if (!tile) continue;

                if (tile === InteractableSprites.redcolorless) {
                    const tileRectangle = {
                    x: col * TILE_SIZE,
                    y: row * TILE_SIZE,
                    width: TILE_SIZE,
                    height: TILE_SIZE
                    };

                if (rectOverlap(this.intHitbox(), tileRectangle)) {
                    this.minigameOpen = true;
                    return;
                }
            }
        }
    }

        function rectOverlap(a, b) {
            return (
                a.x < b.x + b.width &&
                a.x + a.width > b.x &&
                a.y < b.y + b.height &&
                a.y + a.height > b.y
            );
        }
    }

    update() {
        if (this.minigameOpen) 
            return;
    
        const speed = 20;
        let dx = 0
        let dy = 0

        // Movement
        if (keys["ArrowUp"] || keys["w"]|| keys["W"]) { 
            dy -= speed; 
            this.facing = "up"; 
        }
        if (keys["ArrowDown"] || keys["s"] || keys["S"]) { 
            dy += speed; 
            this.facing = "down"; 
        }
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) { 
            dx -= speed; 
            this.facing = "left"; 
        }
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) { 
            dx += speed; 
            this.facing = "right"; 
        }

        // Moving = true if dx eller dy har hastighet annat än 0
        this.moving = dx !== 0 || dy !== 0;

        //Colition för tiles
        const willHitTileX = this.Collision(this.x + dx, this.y, this.moveHitbox().width, this.moveHitbox().height);
        const willHitTileY = this.Collision(this.x, this.y + dy, this.moveHitbox().width, this.moveHitbox().height);

        // Colition för npc
        let willHitNpcX = false, willHitNpcY = false;


        for (const npc of CharacterList) {
            if (npc === this) continue;

            const npcBox = npc.moveHitbox();
            const nextXHitbox = { ...this.moveHitbox(), x: this.x + dx };
            const nextYHitbox = { ...this.moveHitbox(), y: this.y + dy };

            if (rectOverlap(nextXHitbox, npcBox)) willHitNpcX = true;
            if (rectOverlap(nextYHitbox, npcBox)) willHitNpcY = true;
        }

        if (!willHitTileX && !willHitNpcX) this.x += dx;
        if (!willHitTileY && !willHitNpcY) this.y += dy;

        // Kör animation om this.moving = true
        if (this.moving) {
            this.animationFrame += this.animationSpeed;
            const framesArray = this.framesNoShowel[this.facing];
            if (this.animFrame >= framesArray.length) {
                this.animationFrame = 0;
            }
        } else {
            this.animationFrame = 0;
        }

        function rectOverlap(a, b) {
            return (
                a.x < b.x + b.width &&
                a.x + a.width > b.x &&
                a.y < b.y + b.height &&
                a.y + a.height > b.y
            );
        }

        // Kollar ifall om spelare är brevid npc eller om talkbubble ska försvinna 
        for (const npc of CharacterList) {
            if (npc === this) continue;

            const playerBox = this.intHitbox();
            const npcBox = npc.intHitbox();

            if (!rectOverlap(playerBox, npcBox)) {
                npc.talking = false;
            }
        }

        // Visa E runt ett object
        this.showBubble = false;
        for (let row = 0; row < MAP_HEIGHT; row++) {
            for (let col = 0; col < MAP_WIDTH; col++) {
                const tile = Map1[row][col].behind;
                if (!tile) continue;

                if (tile === InteractableSprites.redcolorless || 
                    tile === InteractableSprites.bluecolorless || 
                    tile === InteractableSprites.yellowcolorless ||
                    tile === InteractableSprites.MorotUtan1 ||
                    tile === InteractableSprites.MorotUtan2 ||
                    tile === InteractableSprites.MorotUtan3 ||
                    tile === InteractableSprites.MorotMed1 ||
                    tile === InteractableSprites.MorotMed2 ||
                    tile === InteractableSprites.MorotMed3 ||
                    tile === InteractableSprites.DirtWithMoon ||
                    tile === InteractableSprites.BlaBlomma ||
                    tile === InteractableSprites.RodBlomma ||
                    tile === InteractableSprites.VitBlomma
                ) {
                    const tileRectangle = {
                        x: col * TILE_SIZE,
                        y: row * TILE_SIZE,
                        width: TILE_SIZE,
                        height: TILE_SIZE
                    };

                if (rectOverlap(this.intHitbox(), tileRectangle)) {
                    this.showBubble = true
                    break
                }
                }
            }
            if (this.showBubble) break;
            
        }

        // Visa E vid Npcs
        if (!this.showBubble) {
            for (const npc of CharacterList) {
                if (npc === this) continue;
                if (rectOverlap((this.intHitbox()), npc.intHitbox())) {
                    this.showBubble = true;
                    break;
                }
            }
        }
    } 

    draw(ctx, CameraMan) {
    let img;
    if (this.moving) {
        const framesArray = this.framesNoShowel[this.facing];
        const frameIndex = Math.floor(this.animationFrame) % framesArray.length;
        img = framesArray[frameIndex]
    } else {
        img = this.idleNoShowel[this.facing];
    }

    ctx.drawImage(img, this.x - CameraMan.x, this.y - CameraMan.y);

    if (this.showBubble) {
        const bubbleX = (this.x - CameraMan.x) - 50;
        const bubbleY = (this.y - CameraMan.y) - 100;
        ctx.drawImage(TalkBubble, bubbleX + 40, bubbleY);
    }

    }
}

document.addEventListener("keydown", e => {
    keys[e.key] = true;
    const player = CharacterList.find(c => c instanceof Player);

    // E för interact
    if (e.key === "e" || e.key === "E") {
        if (player && player.minigameOpen) {
            player.minigameOpen = false;
            console.log("Minigame closed by player");
            return;
        }
        
        if (canInteract) {
            // Indentifierar player instance ifrån Player class
            for(const p in CharacterList) {
                if (CharacterList[p] instanceof Player && canInteract){
                    CharacterList[p].interact();
                    canInteract = false;
                }
            }
        }
    }

    // Input för stefan guessing game
        // If minigame = startat och if input är mellan knapp 1-5
    if (player.stefanMinigame && ["1","2","3"].includes(e.key)) {
        //Gör om strängen till ett nummer 
        player.numberInput = parseInt(e.key);

        // Hitta stefan namn property i characterlist för att kunna kalla på stefanGuessGameUpdate
    const stefan = CharacterList.find(c => c.name === "Stefan");
        //if stefan hittades
        if (stefan) {
            stefan.stefanGuessGameUpdate(player);
        }
    }
});

document.addEventListener("keyup", e => {
    keys[e.key] = false;

    if (e.key === "e" || e.key === "E") {
        canInteract = true;
    }
});
