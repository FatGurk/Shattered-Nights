import { ctx, canvas } from "../GameLoop.js";

const MenuScreen = new Image();
MenuScreen.src = "./Game/Pictures/Menu/MenuScreen.png";

export function DrawMenuScreen() {
    window.onload = function() {
        ctx.drawImage(MenuScreen, 0, 0, canvas.width, canvas.height);
        console.log("Menu Screen drawn");
    };
}
