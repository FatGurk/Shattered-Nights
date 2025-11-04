// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// World
import { drawMap } from "./Map/Map.js";
// Menu Buttons
import { MenuButtonsList } from "./ObjectLists.js";
// Characters
import { CharacterList } from "./ObjectLists.js";
// Camera
import { CameraMan } from "./ObjectLists.js";

export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

export function canvasResize() {
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
    const player = CharacterList[0];
    CameraMan.follow(player);

    drawMap(ctx, CameraMan);

    CharacterList.forEach(e => {
        e.draw(ctx, CameraMan);
        e.update();
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