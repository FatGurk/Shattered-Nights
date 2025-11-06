// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// World
import { drawMap, MAP_HEIGHT, MAP_WIDTH, TILE_SIZE } from "./Map/Map.js";
// Skit från ObjectLists
import { CharacterList, MenuButtonList, CameraMan } from "./ObjectLists.js";
// Title screen
import { DrawMenuScreen } from "./MenuToGame/Screen.js";

import { Canvas, ctx } from "./CanvasCtx.js";

export function canvasResize() {
    Canvas.width = window.innerWidth;
    Canvas.height = window.innerHeight;
    CameraMan.width = Canvas.width;
    CameraMan.height = Canvas.height;
}

canvasResize();

function MenuScene() {
    DrawMenuScreen();

    MenuButtonList.forEach(Button => {
        Button.draw(ctx);
    });
}


function GameScene() {
    const player = CharacterList[0];
    CameraMan.follow(player);

    const WORLD_HEIGHT = MAP_HEIGHT * TILE_SIZE
    const WORLD_WIDTH = MAP_WIDTH * TILE_SIZE
    
    //Ground och behind tiles
    drawMap(ctx, CameraMan, "ground");
    drawMap(ctx, CameraMan, "behind");

    // Gubbar
    CharacterList.forEach(e => {
        e.draw(ctx, CameraMan);
        e.detectCollision(CharacterList);
        e.update();
    });

    //Infront tiles
    drawMap(ctx, CameraMan, "infront");
}

function gameLoop() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    if (Scene.value === "Menu") MenuScene();
    else if (Scene.value === "Game") GameScene();

    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", canvasResize);