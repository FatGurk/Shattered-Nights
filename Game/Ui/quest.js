// Quest Lista
export let activeQuest = []; 
// Kunna "stacka" quests
export function acceptQuest(quest) {
    if (!activeQuest.includes(quest)) {
        activeQuest.push(quest);
    }
}

export class Quest {
    constructor(questTitle, description, completed = false, reward) {
        this.questTitle = questTitle
        this.description = description;
        this.completed = completed;
        this.reward = reward
    }

    drawQuestBox(ctx) {
        if (activeQuest.length === 0) return;
        // Ritaboxen
        const boxWidth = 400;
        const boxHeight = 20 + activeQuest.length * 40;
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

        // Rad för rad
        activeQuest.forEach((quest, i) => {
            ctx.fillText(`${i + 1}. ${quest.questTitle}`, boxX + 12, boxY + 12 + i * 40);
        });
    }
}