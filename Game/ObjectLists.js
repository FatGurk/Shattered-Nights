import { playbutton, Creditsbutton } from "./MenuToGame/MenuButtons.js";
import { Player } from "./Characters/Player.js";
import { Npc } from "./Characters/Npc.js";
import { TILE_SIZE } from "./Map/Map.js";
import { Camera } from "./Camera.js";

import { Canvas } from "./CanvasCtx.js";

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new playbutton(Canvas.width / 2, Canvas.height / 2, "./Game/Pictures/Menu/NewGame.png")
]

export const CharacterList = [
    new Player(5 * TILE_SIZE, 3 * TILE_SIZE, "Simon", {
        up: "./Game/Pictures/Characters/PojkUp.png",
        down: "./Game/Pictures/Characters/PojkDown.png",
        left: "./Game/Pictures/Characters/PojkLeft.png",
        right: "./Game/Pictures/Characters/PojkRight.png",
    }),
    new Npc(3000,1800, "Mad scientist GW", "./Game/Pictures/Characters/GW.png", "Jag heta GW"),
    new Npc (9 * TILE_SIZE, 0.5 * TILE_SIZE, "Sten Med Spade","./Game/Pictures/Characters/StenSpade.png", "Jag heta Sten"),
    new Npc(6 * TILE_SIZE, 33.5 * TILE_SIZE, "Stefan", "./Game/Pictures/Characters/Stefan.png", "Jag heta Stefan"),
    new Npc(15 * TILE_SIZE, 24.5 * TILE_SIZE, "Anton", "./Game/Pictures/Characters/Anton.png", "Jag heta Anton"),

]