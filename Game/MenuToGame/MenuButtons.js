export let Scene = { value: "Menu" };
export class Button {
    constructor(width, height, img) {
        this.width = width;
        this.height = height;
        this.img = img;
    }

    onClick() {
        console.log("Button clicked:", this.text);
    }
}

export class NewGame extends Button {
    constructor(x, y, width, height, text) {
        const img = new Image();
        img.src = "./Game/Pictures/Menu/NewGameButton.png";
        super(width, height, img);
        this.x = x;
        this.y = y;
        this.text = text;
    }
    onClick() {
        Scene = "Game";
        console.log("Starting New Game...");
    }
}