const MenuScreen = new Image();
MenuScreen.scr = "../.Pictures/TitleScreen/MenuScreen.png";
import { ctx, canvas } from "../GameLoop.js";

export function DrawMenuScreen() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MenuScreen.onload = () => {
        ctx.drawImage(MenuScreen, 0, 0, canvas.width, canvas.height);
    };
}