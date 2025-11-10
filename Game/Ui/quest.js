import { questList } from "../objectlists";

export class Quest {
    constructor(questTitle, description, completed = false, reward) {
        this.questTitle = questTitle
        this.description = description;
        this.completed = completed;
        this.rewrd = reward
    }

    drawQuestBox() {
        if () {
            // Rita bubblan
            const bubbleWidth = 600;
            const bubbleHeight = 300;
            const bubbleX = ctx.canvas.width - bubbleWidth;
            const bubbleY = ctx.canvas.height - bubbleHeight;

            ctx.drawImage(TalkBubble, bubbleX, bubbleY, bubbleWidth, bubbleHeight);
            
            // Rita(skriv) ut texten aka sentence
            ctx.font = "24px 'Copperplate gotich bold', regular";
            ctx.fillStyle = "White";
            ctx.textBaseline = "top";
            
            const lines = this.sentence.split("\n");
            const lineHeight = 40;
            const textX =  bubbleX + 50;
            const textY = bubbleY + 50;

            // Rad för rad
            lines.forEach((line, i) => {
                ctx.fillText(line, textX, textY + i * lineHeight);
            });
        }
    }
}