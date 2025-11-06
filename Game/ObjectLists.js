import { playbutton, Creditsbutton, Settingsbutton } from "./MenuToGame/MenuButtons.js";
import { Player } from "./Characters/Player.js";
import { Npc } from "./Characters/Npc.js";

import { Camera } from "./Camera.js";

import { Canvas } from "./CanvasCtx.js";

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new playbutton(Canvas.width / 2, Canvas.height / 2, "./Game/Pictures/Menu/NewGame.png")
    /*
    new Creditsbutton(Canvas.width / 2, Canvas.height / 1.4, "./Game/Pictures/Menu/Credits.png"),
    new Settingsbutton(Canvas.width / 1.05, Canvas.height / 1.1, "./Game/Pictures/Menu/Settings.png")
    */
]

export const CharacterList = [
    new Player(2000, 2000, "Simon", {
        up: "./Game/Pictures/Characters/PojkUp.png",
        down: "./Game/Pictures/Characters/PojkDown.png",
        left: "./Game/Pictures/Characters/PojkLeft.png",
        right: "./Game/Pictures/Characters/PojkRight.png"
    }),
    new Npc(2600,1800, "Mad scientist GW", "./Game/Pictures/Characters/GW.png")
]