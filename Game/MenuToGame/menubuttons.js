export let Scene = { value: "Menu" };
import { Canvas } from "../canvasctx.js";

class Button {
    constructor(centerX, centerY, imgSrc) {
        this.centerX = centerX;
        this.centerY = centerY;

        this.img = new Image();
        this.img.src = imgSrc;

        this.width = 0;
        this.height = 0;

        this.img.onload = () => {
            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };

        window.addEventListener("click", (event) => {
            // Only process clicks if we're on the menu scene
            if (Scene.value !== "Menu") return;
            
            const rect = Canvas.getBoundingClientRect();
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;

            const x = this.centerX - this.width / 2;
            const y = this.centerY - this.height / 2;

            if (
                mouseX >= x &&
                mouseX <= x + this.width &&
                mouseY >= y &&
                mouseY <= y + this.height
            ) {
                this.onClick();
            }
        });
    }

    draw(ctx) {
        if (!this.width || !this.height) return;

        const x = this.centerX - this.width / 2;
        const y = this.centerY - this.height / 2;

        ctx.drawImage(this.img, x, y, this.width, this.height);
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
            })
    }
}

export class Creditsbutton extends Button {
    constructor(x, y, imgSrc) {
        super(x, y, imgSrc);
    }
    onClick() {
        Scene.value = "Credits";
    }
}

export class Settingsbutton extends Button {
    constructor(x, y, imgSrc) {
        super(x, y, imgSrc);
    }
    onClick() {
        Scene.value = "Settings";
    }
}
