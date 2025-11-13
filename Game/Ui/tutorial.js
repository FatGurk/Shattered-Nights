import { Canvas, ctx } from "../canvasctx.js";

const TutorialImg = new Image();
TutorialImg.src = "./game/pictures/tutorial/wasd.png";

export let showTutorial = true;

// Intryckta?
const keysPressed = {
    w: false,
    a: false,
    s: false,
    d: false
};

export function markKeyPressed(key) {
    const lowerKey = key.toLowerCase();
    if (lowerKey === 'w' || lowerKey === 'a' || lowerKey === 's' || lowerKey === 'd') {
        keysPressed[lowerKey] = true;
        if (keysPressed.w && keysPressed.a && keysPressed.s && keysPressed.d) {
            showTutorial = false;
        }
    }
}

export function drawTutorial() {

    const imgW = Math.min(Canvas.width * 0.25, 300);
    const imgH = imgW * (TutorialImg.height / (TutorialImg.width || imgW));
    const x = 20;
    const y = Canvas.height - TutorialImg.height + 100;
    
    if (TutorialImg.complete && TutorialImg.naturalWidth !== 0) {
        ctx.drawImage(TutorialImg, x, y, imgW, imgH);
    }
}