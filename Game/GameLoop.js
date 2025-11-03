import { Scene } from "../SceneManager.js";
import { CharacterList } from "./ObjectLists.js";
export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

function DrawGameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CharacterList.forEach(e => {
        e.draw();
    });
}

function gameLoop() {
    if (Scene.Current !== "Game") return;

    DrawGameScene();
    requestAnimationFrame(gameLoop);
}
if (Scene.Current === "Game") {
    gameLoop();
};