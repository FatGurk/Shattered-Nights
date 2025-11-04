// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// Menu Buttons
import { MenuButtonsList } from "./ObjectLists.js";
// Characters
import { CharacterList } from "./ObjectLists.js";

export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

function MenuScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MenuButtonsList.forEach(e => {
        e.draw(ctx);
        e.upDate();
    });
}
function GameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CharacterList.forEach(e => {
        e.draw();
    });
}

function gameLoop() {
    if (Scene === "Menu") {
        MenuScene();
    } else if (Scene === "Game") {
        GameScene();
    }
    
    requestAnimationFrame(gameLoop);
}
    
gameLoop();