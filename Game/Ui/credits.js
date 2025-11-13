import {ctx, Canvas} from "../canvasctx.js"
import { Scene } from "../menutogame/menubuttons.js"
import { currentCutsceneMusic } from "../video.js"

const credits = [
    "Developed By",
    "Gustav Jakobsson",
    "Kim Gustafsson Björnberg",
    "",
    "Art & Design",
    "Jesper Milesäter",
    "",
    "Music/Soundeffects",
    "Finder of Music",
    "Kevin Nygaard",
    "Jesper Milesäter",
    "Composer Names",
    "Alexander Nakarada",
    "wobesound",
    "leohpaz",
    "",
    "Special Thanks",
    "All the players!",
    "Stefan, GW, Anton, Sten!",
    "",
    "Thank you for playing"
];

let yPosition = window.innerHeight;
const yspeed = 1;

const Title = new Image();
Title.src = "./game/pictures/menu/bakgrundcredit.png";

export function DrawCreditsScreen() {
    ctx.drawImage(Title, 0, 0, Canvas.width, Canvas.height);
}


export function drawCredits() {
    ctx.fillStyle = "white";
    ctx.font = "200px , 'Copperplate Gothic', sans-serif";
    ctx.textAlign = "center";

    for (let i = 0; i < credits.length; i++) {
        ctx.fillText(credits[i], window.innerWidth / 2, yPosition + i * 50);
    }
    // "Scrolla" texten uppåt
    yPosition -= yspeed;

    if (yPosition + credits.length * 50 <= 0) {
        // Stop the cutscene music when credits finish
        if (currentCutsceneMusic) {
            currentCutsceneMusic.pause();
        }
        Scene.value = "Menu";
    }
}

// Credits från botten
export function startCredits() {
    yPosition = window.innerHeight;
}