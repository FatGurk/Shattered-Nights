// Menu Buttons
import { NewGame } from "./MenuToGame/MenuButtons.js";

// World
import { TileMap, tilesetImage } from "./Map.js";

import {Player} from "./Characters/Player.js";
import {Npc} from "./Characters/Npc.js";

export const MenuButtonsList = [
    new NewGame(150, 200, 200, 50, "New Game")
]

export const CharacterList = [
    new Player(50, 50, 104, 128, "Pöjk", "../.Pictures/Pojk.png"),
    /*
    new Npc(200, 200, 50, 50, "Stefan", StefanImage),
    new Npc(300, 300, 50, 50, "Anton", AntonImage),
    new Npc(500, 500, 50, 50, "Sten", StenImage)
    */
]

export const Map1 = new TileMap(20, 15, tilesetImage, 128, 16);
