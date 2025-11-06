// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// World
import { drawMap } from "./Map/Map.js";
import { MAP_HEIGHT } from "./Map/Map.js";
import { MAP_WIDTH } from "./Map/Map.js";
import { TILE_SIZE } from "./Map/Map.js";
// Menu Buttons
import { MenuButtonsList } from "./ObjectLists.js";
// Characters
import { CharacterList } from "./ObjectLists.js";
// Camera
import { CameraMan } from "./ObjectLists.js";
// Title screen
import { DrawMenuScreen } from "./MenuToGame/Screen.js";

export const canvas = document.getElementById("GameCanvas");
export const ctx = canvas.getContext("2d");

export function canvasResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    CameraMan.width = canvas.width;
    CameraMan.height = canvas.height;
}

canvasResize();

function MenuScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    DrawMenuScreen();

    MenuButtonsList.forEach(e => {
        e.draw(ctx);
        e.update();
    });
}

function GameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const player = CharacterList[0];
    CameraMan.follow(player);

    const WORLD_HEIGHT = MAP_HEIGHT * TILE_SIZE
    const WORLD_WIDTH = MAP_WIDTH * TILE_SIZE
    
    //Base tiles
    drawMap(ctx, CameraMan, "base");

    // Gubbar
    CharacterList.forEach(e => {
        e.draw(ctx, CameraMan);
        e.detectCollision(CharacterList);
        e.update();
    });

    //Overlay tiles
    drawMap(ctx, CameraMan, "overlay");
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