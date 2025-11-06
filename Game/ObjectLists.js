import { Button } from "./MenuToGame/MenuButtons.js";
import { Player } from "./Characters/Player.js";
import { Npc } from "./Characters/Npc.js";

import { Camera } from "./Camera.js";

import { Canvas } from "./CanvasCtx.js";

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new Button(Canvas.width / 2, Canvas.height / 2, "./Game/Pictures/Menu/NewGame.png")
]

export const CharacterList = [
    new Player(1000, 1000, "Simon", {
        up: "./Game/Pictures/Characters/PojkUp.png",
        down: "./Game/Pictures/Characters/PojkDown.png",
        left: "./Game/Pictures/Characters/PojkLeft.png",
        right: "./Game/Pictures/Characters/PojkRight.png"
    }),
    new Npc(800,800, "Mad scientist GW", "./Game/Pictures/Characters/GW.png")
]