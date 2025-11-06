import { Character } from "./SuperClass.js";

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
            x: this.x,
            y:this.y + this.nHeight,
            width: this.nWidth,
            height: this.nHeight,
        }
    }

    Collision(x, y, width, height) {
        let topRow = Math.floor(y / TILE_SIZE)
        let botRow = Math.floor((y + height) / TILE_SIZE)
        let leftCol = Math.floor(x / TILE_SIZE)
        let rightCol = Math.floor((x + width) / TILE_SIZE)

        for ( let row = topRow; row <= botRow; row++) {
            for ( let col = leftCol; col <= rightCol; col++) {
                const tile = Map1[row][col];
                if (tile.ground?.solid || tile.behind?.solid || tile.infront?.solid) {
                    return true;
                } 
            }
        }
        return false;
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

        if (!this.Collision(this.x + dx, this.y, this.hitbox().width, this.hitbox().height)) {
            this.x += dx;
        }
        if (!this.Collision(this.x, this.y + dy, this.hitbox().width, this.hitbox().height)) {
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