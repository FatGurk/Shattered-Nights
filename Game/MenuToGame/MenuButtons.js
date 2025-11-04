export let Scene = "Menu";
export class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }

    onClick() {
        console.log("Button clicked:", this.text);
    }
}
export class NewGame extends Button {
    constructor(x, y, width, height, text) {
        super(width, height, text);
        this.x = x;
        this.y = y;
    }

    draw(ctx) {
        ctx.fillStyle = "#000000";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    onClick() {
        document.addEventListener("click", () => {
            document.documentElement.requestFullscreen().catch(() => {});
            Scene = "Game";
        })
    }
    onEsc() {
        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") {
                document.exitFullscreen().catch(() => {});
                Scene = "Menu";
            }
        })
    }
    update() {
        this.onClick();
        this.onEsc();
    }
}