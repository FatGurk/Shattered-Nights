import { canvas } from "../GameLoop.js";
import { ctx } from "../GameLoop.js";
import { CharacterList } from "../ObjectLists.js";
import { CameraMan } from "../ObjectLists.js";
export class Character {
    constructor(x, y, name, imgSrc) {
        this.x = x;
        this.y = y;
        this.name = name;
        this.width = 0;
        this.height = 0;
        this.img = new Image();
        this.img.src = imgSrc;

        this.img.onload = () => {
            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };
    }

    draw(ctx, CameraMan) {
        ctx.drawImage(this.img, this.x - CameraMan.x, this.y - CameraMan.y , this.width, this.height);
    }

    detectCollision(CharacterList) {
        let t = this;
            CharacterList.forEach((e) => {
                if (!e.collision) return;
                    if (e === t) return false;
                        const Colliding = 
                            t.x < e.x + e.width &&
                            t.x + t.width > e.x &&
                            t.y < e.y + e.height &&
                            t.y + t.height > e.y;

                        if (Colliding) {
                            let overlapX = Math.min(t.x + t.width - e.x, e.x + e.width - t.x);
                            let overlapY = Math.min(t.y + t.height - e.y, e.y + e.height - t.y);

                            if (overlapX < overlapY) {
                                if (t.x < e.x) {
                                    t.x -= overlapX;
                                } else {
                                    t.x += overlapX;
                                }
                            } else {
                                if (t.y < e.y) {
                                    t.y -= overlapY;
                                } else {
                                    t.y += overlapY;
                                }
                            }
                        }
            });
    }
}   