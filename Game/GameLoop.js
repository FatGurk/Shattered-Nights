// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";

// World
import { Map1 } from "./Map.js";

// Menu Buttons
import { MenuButtonsList } from "./ObjectLists.js";
// Characters
import { CharacterList } from "./ObjectLists.js";

export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth-20;
    canvas.height = window.innerHeight-20;
}

resizeCanvas();
function MenuScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    MenuButtonsList.forEach(e => {
        e.draw(ctx);
        e.update();
    });
}
function GameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw the map first
    Map1.draw(ctx);

    // then draw characters on top
    CharacterList.forEach(e => {
        e.draw();
        e.update();
        e.detectCollision(CharacterList);
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

window.addEventListener("resize", resizeCanvas);