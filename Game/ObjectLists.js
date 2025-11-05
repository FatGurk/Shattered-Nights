import { NewGame } from "./MenuToGame/MenuButtons.js";
import { canvas } from "./GameLoop.js";
import { Tile } from "./Map/Map.js";
import {Player} from "./Characters/Player.js";
import {Npc} from "./Characters/Npc.js";

import { Camera } from "./Camera.js";

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonsList = [
    new NewGame(150, 200, 200, 50, "New Game")
]

export const CharacterList = [
    new Player(1000, 1000, "Pöjk", {
        up: "../Pictures/Characters/PojkUp.png",
        down: "../Pictures/Characters/PojkDown.png",
        left: "../Pictures/Characters/PojkLeft.png",
        right: "../Pictures/Characters/PojkRight.png"
    }),
    new Npc(800,800, "Mad scientist GW", "../Pictures/Characters/GW.png")
    /*
    new Npc(200, 200, 50, 50, "Stefan", StefanImage),
    new Npc(300, 300, 50, 50, "Anton", AntonImage),
    new Npc(500, 500, 50, 50, "Sten", StenImage)
    */
]