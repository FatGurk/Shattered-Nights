import { Character } from "./SuperClass.js";
import { Npc } from "./Npc.js";
import { CharacterList } from "../ObjectLists.js";
import { ctx } from "../CanvasCtx.js";
import { MAP_HEIGHT, MAP_WIDTH, TILE_SIZE, Map1, Tile, InteractableSprites, CarrotFields, MorotFaltMed, MorotFaltUtan, PlaceStandardHouse} from "../Map/Map.js";
import { Camera } from "../Camera.js";
const keys = {};

export let equippedItem1 = "Spade";
export let equippedItem2 = "";
export let equippedItem3 = ""
export let canInteract = true;

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

        // Interact med Dirt With Moon
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
                        if (equippedItem1 === "Spade") {
                            console.log("You dug the dirt!");
                        }
                    }
                }
            }
        }
        // Interact med morofält
        for (const falt of CarrotFields) {
            const tileRectangle = {
                x: falt.startCol * TILE_SIZE,
                y: falt.startRow * TILE_SIZE,
                width: TILE_SIZE,
                height: TILE_SIZE
            };

            if (rectOverlap(this.intHitbox(), tileRectangle)) {
                // Plantera
                if (!falt.planted && equippedItem1 === "Spade") {
                    falt.planted = true;
                    falt.growthTimer = 0;
                    falt.fullyGrown = false;
                    console.log("Planterat morot");
                    PlaceStandardHouse(Map1, falt.startRow, falt.startCol, MorotFaltUtan)
                }
                // Harvesta
                if (falt.planted && falt.fullyGrown && equippedItem1 === "Spade") {
                    falt.planted = false;
                    falt.growthTimer = 0;
                    falt.fullyGrown = false;
                    console.log("Tog morot");
                    PlaceStandardHouse(Map1, falt.startRow, falt.startCol, MorotFaltUtan)
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
    } 

    draw(ctx, CameraMan) {
        const img = this.pojk[this.facing];
        if (!img.complete) return;
        ctx.drawImage(img, this.x - CameraMan.x, this.y - CameraMan.y);
    }
}
document.addEventListener("keydown", e => {
    keys[e.key] = true;

    if (e.key === "e" || e.key === "E") {
        for(const p in CharacterList) {
            if (CharacterList[p] instanceof Player && canInteract){
                CharacterList[p].interact();
                canInteract = false;
            }
        }
    }
});
document.addEventListener("keyup", e => {
    keys[e.key] = false;

    if (e.key === "e" || e.key === "E") {
        canInteract = true;
    }
});