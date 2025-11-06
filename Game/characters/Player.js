import { Character } from "./SuperClass.js";
import { CharacterList } from "../ObjectLists.js";
import { ctx } from "../CanvasCtx.js";
import { MAP_HEIGHT, MAP_WIDTH, TILE_SIZE, Map1, Tile} from "../Map/Map.js";
import { Camera } from "../Camera.js";
const keys = {};

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

    hitbox() {
        return {
            x: this.x + 20,
            y: this.y + 100,
            width: 70,
            height: 68  
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
    NpcCollision(other, nextX, nextY) {
        const a = this.hitbox();
        const b = other.hitbox();

        a.x = nextX;
        a.y = nextY;

        return (
            a.x < b.x + b.width &&
            a.x + a.width > b.x &&
            a.y < b.y + b.height &&
            a.y + a.height > b.y
        );
    }

    update() {
        const speed = 20;
        let dx = 0
        let dy = 0

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

        const willHitTileX = this.Collision(this.x + dx, this.y, this.hitbox().width, this.hitbox().height);
        const willHitTileY = this.Collision(this.x, this.y + dy, this.hitbox().width, this.hitbox().height);
        let willHitNpcX = false;
        let willHitNpcY = false;

        for (const npc of CharacterList) {
            if (npc === this) continue;
            if (this.NpcCollision(npc, this.x + dx, this.y)) willHitNpcX = true;
            if (this.NpcCollision(npc, this.x, this.y + dy)) willHitNpcY = true;
        }

        if (!willHitNpcX && !willHitTileX) {
            this.x += dx;
        } 
        if (!willHitNpcY && !willHitTileY) {
            this.y += dy;
        }
    }

    draw(ctx, CameraMan) {
        const img = this.pojk[this.facing];
        if (!img.complete) return;
        ctx.drawImage(img, this.x - CameraMan.x, this.y - CameraMan.y);
    }
}

document.addEventListener("keydown", e => keys[e.key] = true);
document.addEventListener("keyup", e => keys[e.key] = false);