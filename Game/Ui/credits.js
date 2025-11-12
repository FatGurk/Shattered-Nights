import {ctx, Canvas} from "../canvasctx.js"
import { Scene } from "../menutogame/menubuttons.js"

const credits = [
    "Developed By",
    "Gustav Jakobsson",
    "Kim Björnbergsson",
    "",
    "Art & Design",
    "Jesper Milesäter",
    "",
    "Music",
    "Composer Names",
    "",
    "Special Thanks",
    "All the players!",
    "Stefan, GW, Anton, Sten!",
    "",
    "Thank you for playing"
];

let yPosition = window.innerHeight;
const yspeed = 1;

export function drawCredits() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.fillStyle = "white";
    ctx.font = "40px , 'Copperplate Gothic', sans-serif";
    ctx.textAlign = "center";

    for (let i = 0; i < credits.length; i++) {
        ctx.fillText(credits[i], window.innerWidth / 2, yPosition + i * 50);
    }
    // "Scrolla" texten uppåt
    yPosition -= yspeed;

    if (yPosition + credits.length * 50 > 0) {
        requestAnimationFrame(drawCredits);
    } else {
        Scene.value = "Menu";
    }
}

// Start the credits from the bottom again
export function startCredits() {
    yPosition = window.innerHeight;
    drawCredits();
}