import { playbutton, Creditsbutton } from "./menutogame/menubuttons.js";
import { Player } from "./characters/player.js";
import { Npc } from "./characters/npc.js";
import { TILE_SIZE } from "./map/map.js";
import { Camera } from "./camera.js";
import { Quest } from "./ui/quest.js"

import { Canvas } from "./canvasctx.js";

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new playbutton(Canvas.width / 2, Canvas.height / 2, "./game/pictures/menu/newgame.png")
]

export const questList = [
    new Quest("Get all the moon pices", "Mabye the villagers could help you find some of them.", null),
    new Quest("Help Anton with carrots", "Grow carrots for Anton to \nget his key.", "MoonPice1"),
    new Quest("Get Flowers", "Help Sten with finding \nflowers and give them to \nMad Scientist Gw.", "MoonPice2"),
    new Quest("Fishing bait for Stefan", "Help Stefan with getting some fishing bait.", "MoonPice3"),
]

export const CharacterList = [
    new Player(5 * TILE_SIZE, 3 * TILE_SIZE, "Simon", {
        up: "./game/pictures/characters/player/pojkup.png",
        down: "./game/pictures/characters/player/pojkdown.png",
        left: "./game/pictures/characters/player/pojkleft.png",
        right: "./game/pictures/characters/player/pojkright.png",
    }),
    new Npc(3000,1800, "Mad scientist GW", "./game/pictures/characters/gw.png", "Jag heta GW", null, "MoonPice", "3flowers"),
    new Npc (9 * TILE_SIZE, 0.5 * TILE_SIZE, "Sten Med Spade","./game/pictures/characters/stenspade.png", "Jag heta Sten", questList[2], "Spade"),
    new Npc(6 * TILE_SIZE, 33.5 * TILE_SIZE, "Stefan", "./game/pictures/characters/stefan.png", "Jag heta Stefan", questList[3]),
    new Npc(14 * TILE_SIZE, 28.5 * TILE_SIZE, "Anton", "./game/pictures/characters/anton.png", "Hello, my rabbit have eaten the key to my house. \nI need to give him carrots so he can shit the key out. \nCan you grow some carrots for me? I lost my spade.", questList[1], null, "Carrot"),

]