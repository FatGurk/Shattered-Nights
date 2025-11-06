export let Scene = { value: "Menu" };
import { Canvas } from "../CanvasCtx.js";
class Button {
    constructor(x, y, imgSrc) {
        this.x = x;
        this.y = y;

        this.img = new Image();
        this.img.src = imgSrc;

        this.width = 0;
        this.height = 0;

        this.img.onload = () => {
            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;

            this.x -= this.width / 2;
            this.y -= this.height / 2;
        };

        window.addEventListener("click", (event) => {
            const rect = Canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            if (
                mouseX >= this.x + 20 &&
                mouseX <= this.x + this.width - 20 &&
                mouseY >= this.y + 20 &&
                mouseY <= this.y + this.height - 20
            ) {
                this.onClick();
            }
        });
    }

    draw(ctx) {
        if (this.width && this.height) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}

export class playbutton extends Button {
    constructor(x, y, imgSrc) {
        super(x, y, imgSrc);
    }
    onClick() {
        document.documentElement.requestFullscreen()
            .then(() => {
                Scene.value = "Game";
                console.log("Starting Game...");
            })
            .catch(() => {
                console.warn("Fullscreen failed");
            });
    }
}

export class Creditsbutton extends Button {
    constructor(x, y, imgSrc) {
        super(x, y, imgSrc);
    }
    onClick() {
        Scene.value = "Credits";
        console.log("Showing Credits...");
    }
}

export class Settingsbutton extends Button {
    constructor(x, y, imgSrc) {
        super(x, y, imgSrc);
    }
    onClick() {
        Scene.value = "Settings";
        console.log("Showing Settings...");
    }
}