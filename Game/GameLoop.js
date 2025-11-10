// Scene
import { Scene } from "./MenuToGame/MenuButtons.js";
// World
import { CarrotFields, drawMap, MorotFaltUtan, MorotFaltMed, PlaceStandardHouse, Map1, PlacePlot } from "./Map/Map.js";
// Skit från ObjectLists
import { CharacterList, MenuButtonList, CameraMan } from "./ObjectLists.js";
// Title screen
import { DrawMenuScreen } from "./MenuToGame/Screen.js";

import { Canvas, ctx } from "./CanvasCtx.js";

export let player;

export function canvasResize() {
    Canvas.width = window.innerWidth;
    Canvas.height = window.innerHeight;
    CameraMan.width = Canvas.width;
    CameraMan.height = Canvas.height;

    MenuButtonList.forEach(button => {
        button.centerX = Canvas.width / 2;
        button.centerY = Canvas.height / 2;
    });
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

    // Timer/growthchecker för morot
    for (const falt of CarrotFields) {
        if (!falt.planted) continue;

        let growTimer = falt.growthTimer += 1/2;

        if (falt.growthTimer >= growTimer && !falt.fullyGrown) {
            PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed)
            falt.fullyGrown = true;
        }
    }
    
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

    CharacterList.forEach(e => {
        if (e.talking && e.sentence) e.drawBubble(ctx);
    });
}

function gameLoop() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    if (Scene.value === "Menu") MenuScene();
    else if (Scene.value === "Game") GameScene();

    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", canvasResize);