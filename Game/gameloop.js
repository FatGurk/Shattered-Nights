// Scene
import { Scene } from "./menutogame/menubuttons.js";
// World
import { CarrotFields, drawMap, MorotFaltMed, PlaceStandardHouse, Map1, PlacePlot } from "./map/map.js";
// Skit från ObjectLists
import { CharacterList, MenuButtonList, CameraMan } from "./objectlists.js";
// Title screen
import { DrawMenuScreen } from "./menutogame/screen.js";

import { Canvas, ctx } from "./canvasctx.js";
// mini game
import { minigame1 } from "./ui/connectalla.js";
// Quest box
import { activeQuest } from "./ui/quest.js";
// Inventory box
import { drawInventoryBox } from "./ui/inventory.js";

import { Pillars } from "./ui/pillars.js";

import { Player } from "./characters/player.js";

import { introVideoPlayer } from "./video.js"
import { drawCredits, startCredits } from "./ui/credits.js";


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

let mouseDown = false;
let player = CharacterList.find(c => c instanceof Player);

function MenuScene() {
    introStarted = false;
    endStarted = false;
    creditsStarted = false;

    DrawMenuScreen();

    MenuButtonList.forEach(Button => {
        Button.draw(ctx);
    });
}

let introStarted = false;

function IntroScene() {
    if (!introStarted) {
        introStarted = true;

        introVideoPlayer("./game/vid/shatterednightanimation.mp4", () => {
            Scene.value = "Game";
        });
    }
}

function GameScene() {
    player = CharacterList[0];
    CameraMan.follow(player);

    // Check moonPices end scene
    if (player.moonPices >= 4) {
        Scene.value = "End";
        return;
    }

    // Timer/growthchecker för morot
    for (const falt of CarrotFields) {
        if (!falt.planted) continue;
        falt.growthTimer += 1/60;
        if (falt.growthTimer >= 0 && !falt.fullyGrown) {
            PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed[1])
            falt.fullyGrown = false;
        }
        if (falt.growthTimer >= 30 && !falt.fullyGrown) {
            PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed[2])
            falt.fullyGrown = false;
        }
        if (falt.growthTimer >= 60 && !falt.fullyGrown) {
            PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltMed[3])
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

    if (player.minigameOpen && player.activeMinigame) {
        player.activeMinigame.draw(ctx);
    }


    //Visa quests
    if (activeQuest.length > 0) {
        activeQuest[0].drawQuestBox(ctx);
    }
    //Visa inventory
    drawInventoryBox();

    // Pussel minigame
    if (player.minigameOpen && player.activeMinigame) {
        player.activeMinigame.draw(ctx);
    }
}


let endStarted = false;
let creditsStarted = false;

function endScene() {
    if (!endStarted) {
        endStarted = true;

        introVideoPlayer("./game/vid/shatterednightsendanimation.mp4", () => {
            Scene.value = "Credits";
            player.moonPices = 0;
        });
    }
}

function creditScene() {
    DrawMenuScreen();
    if (!creditsStarted) {
        creditsStarted = true;
        startCredits();
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, Canvas.width, Canvas.height);
    if (Scene.value === "Menu") MenuScene();
    else if (Scene.value === "Intro") IntroScene();
    else if (Scene.value === "Game") GameScene();
    else if (Scene.value === "End") endScene(); 
    else if (Scene.value === "Credits") creditScene();

    requestAnimationFrame(gameLoop);
}

gameLoop();

window.addEventListener("resize", canvasResize);

// Update mouse event listeners to work with player's active minigame
Canvas.addEventListener("mousedown", (e)=>{
    if (player && player.minigameOpen && player.activeMinigame) {
        const cell = player.activeMinigame.getCell(e.offsetX, e.offsetY);
        if (cell) player.activeMinigame.startDrag(cell);
    }
});

Canvas.addEventListener("mousemove", (e)=>{
    if (player && player.minigameOpen && player.activeMinigame) {
        const cell = player.activeMinigame.getCell(e.offsetX, e.offsetY);
        if (cell) player.activeMinigame.drag(cell);
    }
});

Canvas.addEventListener("mouseup", ()=>{
    if (player && player.minigameOpen && player.activeMinigame) {
        player.activeMinigame.endDrag();
    }
});