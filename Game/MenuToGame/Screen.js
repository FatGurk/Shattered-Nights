import { ctx, canvas } from "../GameLoop.js";

const Title = new Image();
Title.src = "./Game/Pictures/Menu/MenuScreen.png";

let loaded = false;

Title.onload = () => {
    loaded = true;
};

export function DrawMenuScreen() {
    if (loaded) {
        ctx.drawImage(Title, 0, 0, canvas.width, canvas.height);
    }
}