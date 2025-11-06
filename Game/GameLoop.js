// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// World
import { drawMap, MAP_HEIGHT, MAP_WIDTH, TILE_SIZE } from "./Map/Map.js";
// Skit från ObjectLists
import { CharacterList, MenuButtonList, CameraMan, canvas } from "./ObjectLists.js";
// Title screen
import { DrawMenuScreen } from "./MenuToGame/Screen.js";

export const ctx = canvas.getContext("2d");

export function canvasResize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    CameraMan.width = canvas.width;
    CameraMan.height = canvas.height;
}

canvasResize();

function MenuScene() {
    DrawMenuScreen();

    window.addEventListener("click", () => {
        document.documentElement.requestFullscreen()
        .catch(() => {
            console.warn("Fullscreen failed");
        });
    }, { once: true });

    MenuButtonList.forEach(button => {
        button.draw(ctx);
        button.onClick();
    });
}


function GameScene() {
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (Scene.value === "Menu") MenuScene();
    else if (Scene.value === "Game") GameScene();

    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", canvasResize);