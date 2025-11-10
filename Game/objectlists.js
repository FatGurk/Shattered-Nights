import { playbutton, Creditsbutton } from "./menutogame/menubuttons.js";
import { Player } from "./characters/player.js";
import { Npc } from "./characters/npc.js";
import { TILE_SIZE } from "./map/map.js";
import { Camera } from "./camera.js";
import { Canvas } from "./canvasctx.js";

Canvas.width = window.innerWidth;
Canvas.height = window.innerHeight;

export const CameraMan = new Camera(0, 0, 800, 600);

export const MenuButtonList = [
    new playbutton(Canvas.width / 2, Canvas.height / 2, "./game/pictures/menu/newgame.png")
]

export const CharacterList = [
    new Player(5 * TILE_SIZE, 3 * TILE_SIZE, "Simon", {
        up: "./game/pictures/characters/pojkUp.png",
        down: "./game/pictures/characters/pojkDown.png",
        left: "./fame/pictures/characters/pojkLeft.png",
        right: "./game/pictures/characters/pojkRight.png",
    }),
    new Npc(3000,1800, "Mad scientist GW", "./game/pictures/characters/gw.png", "Jag heta GW"),
    new Npc (9 * TILE_SIZE, 0.5 * TILE_SIZE, "Sten Med Spade","./game/pictures/xharacters/stenspade.png", "Jag heta Sten"),
    new Npc(6 * TILE_SIZE, 33.5 * TILE_SIZE, "Stefan", "./game/pictures/characters/stefan.png", "Jag heta Stefan"),
    new Npc(14 * TILE_SIZE, 28.5 * TILE_SIZE, "Anton", "./game/pictures/characters/anton.png", "Hello, my rabbit have eaten the key to my house. \nI need to give him carrots so he can shit the key out. \nCan you grow some carrots for me. I lost my spade?"),

]

export const questList = {
    AntonQuest: false,
    StefanQuest: false,
    StenGw: false,
}
