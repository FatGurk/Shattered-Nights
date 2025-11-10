export let activeQuest = null; 

export function acceptQuest(quest) {
    activeQuest = quest;
}

export class Quest {
    constructor(questTitle, description, completed = false, reward) {
        this.questTitle = questTitle
        this.description = description;
        this.completed = completed;
        this.reward = reward
    }

    drawQuestBox(ctx) {
        if (!activeQuest) return;
        // Ritaboxen
        const boxWidth = 400;
        const boxHeight = 200;
        const boxX = ctx.canvas.width - boxWidth - 10;
        const boxY = 10;

         // Draw box background
        ctx.fillStyle = "rgba(159, 17, 142, 0.7)";
        ctx.fillRect(boxX, boxY, boxWidth, boxHeight);

        // Draw border
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;
        ctx.strokeRect(boxX, boxY, boxWidth, boxHeight);
        
        // Rita(skriv) ut texten aka sentence
        ctx.font = "24px 'Copperplate Gothic', sans-serif";
        ctx.fillStyle = "white";
        ctx.textBaseline = "top";
        // Titel
        const titleX = boxX + 16;
        const titleY = boxY + 12;
        ctx.fillText(this.questTitle, titleX, titleY);
            
        const lines = this.description.split("\n");
        const lineHeight = 40;
        const textX =  boxX + 16;
        const textY = boxY + 48;

        // Rad för rad
        lines.forEach((line, i) => {
            ctx.fillText(line, textX, textY + i * lineHeight);
        });
    }
}