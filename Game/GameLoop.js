// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// Menu Buttons
import { MenuButtonsList } from "./ObjectLists.js";
// Characters
import { CharacterList } from "./ObjectLists.js";

export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

function canvasResize() {
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-20;
}

canvasResize();

function MenuScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MenuButtonsList.forEach(e => {
        e.draw(ctx);
        e.update();
    });
}
function GameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CharacterList.forEach(e => {
        e.update();
        e.detectCollision(CharacterList);
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

window.addEventListener("resize", canvasResize);