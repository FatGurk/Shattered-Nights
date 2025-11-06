import { Canvas, ctx } from "../CanvasCtx.js";

const Title = new Image();
Title.src = "./Game/Pictures/Menu/MenuScreen.png";

let loaded = false;

Title.onload = () => {
    loaded = true;
};

export function DrawMenuScreen() {
    if (loaded) {
        ctx.drawImage(Title, 0, 0, Canvas.width, Canvas.height);
    }
}