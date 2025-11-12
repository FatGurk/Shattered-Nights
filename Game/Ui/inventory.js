import { ctx } from "../canvasctx.js";
import { inventory } from "../characters/player.js";
import { CharacterList } from "../objectlists.js";

export function drawInventoryBox() {
    const slots = Object.values(inventory);
    const notEmptySlots = slots.filter(slot => slot);

    const player = (CharacterList || []).find(c => c && typeof c.moonPices === 'number');

    const lines = [];

    const MOON_PIECES_REQUIRED = 4;
    if (player) {
        lines.push(`Moon pieces: ${player.moonPices} / ${MOON_PIECES_REQUIRED}`);
        // Visa blomma om du har ngn
        if (player.countBlomma && player.countBlomma > 0) {
            lines.push(`Flowers: ${player.countBlomma}`);
        }
    }

    // Add inv items
    notEmptySlots.forEach(item => lines.push(item));

    if (lines.length === 0) return;

    // box
    const boxWidth = 400;
    const boxHeight = 20 + lines.length * 40;
    const boxX = 10;
    const boxY = 10;

    // Draw box background
    ctx.fillStyle = "rgba(159, 17, 142, 0.7)";
    ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

    // Draw border
    ctx.strokeStyle = "black";
    ctx.lineWidth = 2;
    ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);

    // Draw text
    ctx.font = "24px 'Copperplate Gothic', sans-serif";
    ctx.fillStyle = "white";
    ctx.textBaseline = "top";

    lines.forEach((text, i) => {
        ctx.fillText(`${i + 1}. ${text}`, boxX + 12, boxY + 12 + i * 40);
    });
}