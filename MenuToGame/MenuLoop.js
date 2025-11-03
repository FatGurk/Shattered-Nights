import { Scene } from "../SceneManager.js";
import { NewGame } from "./MenuButtons.js";
const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

const NewGameButton = new NewGame(800, 400, 200, 100, "New Game");

function MenuLoop() {
    if (Scene.Current !== "Menu"){
        console.log("Menu Loop ERROR");
        return;
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    NewGameButton.draw(ctx);

    NewGameButton.upDate();
    requestAnimationFrame(MenuLoop);
}
if (Scene.Current === "Menu") {
    MenuLoop();
}
