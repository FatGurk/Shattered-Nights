export let Scene = { value: "Menu" };
export class Button {
    constructor(x, y) {
        this.x = x;
        this.y = y;

        this.img = new Image();
        this.img.src = "./Game/Pictures/Menu/NewGame.png";

        this.width = 0;
        this.height = 0;

        this.img.onload = () => {
            this.width = this.img.naturalWidth;
            this.height = this.img.naturalHeight;
        };
    }

    onClick() {
        Scene.value = "Game";
    }

    draw(ctx) {
        if (this.width && this.height) {
            ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
        }
    }
}