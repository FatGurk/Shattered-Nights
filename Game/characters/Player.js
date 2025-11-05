import { Character } from "./SuperClass.js";
import { ctx } from "../GameLoop.js";
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

    update() {
        const speed = 20;
        if (keys["ArrowUp"] || keys["w"]|| keys["W"]) { 
            this.y -= speed; 
            this.facing = "up"; 
        }
        if (keys["ArrowDown"] || keys["s"] || keys["S"]) { 
            this.y += speed; 
            this.facing = "down"; 
        }
        if (keys["ArrowLeft"] || keys["a"] || keys["A"]) { 
            this.x -= speed; 
            this.facing = "left"; 
        }
        if (keys["ArrowRight"] || keys["d"] || keys["D"]) { 
            this.x += speed; 
            this.facing = "right"; 
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
