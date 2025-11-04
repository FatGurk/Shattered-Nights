// Menu Buttons
import { NewGame } from "./MenuToGame/MenuButtons.js";

import {Player} from "./Characters/Player.js";
import {Npc} from "./Characters/Npc.js";

import { Camera } from "./Camera.js";

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonsList = [
    new NewGame(150, 200, 200, 50, "New Game")
]

export const CharacterList = [
    new Player(5000, 5000, "Pöjk", "../.Pictures/Pojk.png"),
    new Npc(100,100, "Mad scientist GW", "../.Pictures/GW.png")
    /*
    new Npc(200, 200, 50, 50, "Stefan", StefanImage),
    new Npc(300, 300, 50, 50, "Anton", AntonImage),
    new Npc(500, 500, 50, 50, "Sten", StenImage)
    */
]

export const SpriteList = [
    new Image
]