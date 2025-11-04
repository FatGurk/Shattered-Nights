// Menu Buttons
import { NewGame } from "./MenuToGame/MenuButtons.js";
<<<<<<< HEAD

// World
import { TileMap, tilesetImage } from "./Map.js";

=======
>>>>>>> 1ca7f6eb7279a47a4418f39c4578916d96699362
import {Player} from "./Characters/Player.js";
import {Npc} from "./Characters/Npc.js";

export const MenuButtonsList = [
    new NewGame(150, 200, 200, 50, "New Game")
]

export const CharacterList = [
<<<<<<< HEAD
    new Player(50, 50, 104, 128, "Pöjk", "../.Pictures/Pojk.png"),
=======
    new Player(50, 50, "Pöjk", "../.Pictures/Pojk.png"),
    new Npc(150, 150, "Mad scientist GW", "../.Pictures/GW.png"),
>>>>>>> 1ca7f6eb7279a47a4418f39c4578916d96699362
    /*
    new Npc(200, 200, 50, 50, "Stefan", StefanImage),
    new Npc(300, 300, 50, 50, "Anton", AntonImage),
    new Npc(500, 500, 50, 50, "Sten", StenImage)
    */
]

export const Map1 = new TileMap(20, 15, tilesetImage, 128, 16);
