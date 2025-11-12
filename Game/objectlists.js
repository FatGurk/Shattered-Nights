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
    new Quest("Get 3 Flowers For GW", "Help Sten with finding \nflowers and give them to \nMad Scientist Gw.", "MoonPice2"),
]

export const CharacterList = [
    new Player(5 * TILE_SIZE, 3 * TILE_SIZE, "Simon", {
        up: "./game/pictures/characters/player/pojkup.png",
        down: "./game/pictures/characters/player/pojkdown.png",
        left: "./game/pictures/characters/player/pojkleft.png",
        right: "./game/pictures/characters/player/pojkright.png",
    }),
    new Npc(3000,1800, "Mad scientist GW", "./game/pictures/characters/gw.png", "Who sent you here and do you have anything for me?", "Ohh are those flowers for me? \nThank you! \nHere, take this as a thank you for saving me." , questList[2], "MoonPice", (player) => player.countBlomma >= 3),
    new Npc (9 * TILE_SIZE, 0.5 * TILE_SIZE, "Sten Med Spade","./game/pictures/characters/stenspade.png", "I was going to get some flowers for my friend Gw, \nbut then the moon exploded and all flowers died. \nI hate this stupid sun, ugh here take this stupid showel, \nI dont have a need for it anylonger.", null , questList[2], "Spade"),
    new Npc(37 * TILE_SIZE, 29.5 * TILE_SIZE, "Stefan", "./game/pictures/characters/stefan.png", "Hello, you want to play a game?", "Imposible!!! You are the only one who have beaten me. Well this is yours now." , null, null, null),
    new Npc(14 * TILE_SIZE, 28.5 * TILE_SIZE, "Anton", "./game/pictures/characters/anton.png", "Hello, my rabbit have eaten the key to my house. \nI need to give him a carrot so he can shit the key out. \nCan you grow some carrots for me? I lost my spade.", "Thank you for giving me the carrot, \nhere take this as a thanks for the trubble.", questList[1], null, "Carrot"),
]