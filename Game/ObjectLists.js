import { Button } from "./MenuToGame/MenuButtons.js";
import { Player } from "./Characters/Player.js";
import { Npc } from "./Characters/Npc.js";

import { Camera } from "./Camera.js";

export const canvas = document.getElementById("GameCanvas");

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new Button(canvas.width / 2, canvas.height / 2, "./Game/Pictures/Menu/NewGame.png")
]

export const CharacterList = [
    new Player(1000, 1000, "Simon", {
        up: "./Game/Pictures/Characters/PojkUp.png",
        down: "./Game/Pictures/Characters/PojkDown.png",
        left: "./Game/Pictures/Characters/PojkLeft.png",
        right: "./Game/Pictures/Characters/PojkRight.png"
    }),
    new Npc(800,800, "Mad scientist GW", "./Game/Pictures/Characters/GW.png")
    /*
    new Npc(200, 200, 50, 50, "Stefan", StefanImage),
    new Npc(300, 300, 50, 50, "Anton", AntonImage),
    new Npc(500, 500, 50, 50, "Sten", StenImage)
    */
]