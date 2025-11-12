import { minigame1, minigame2, minigame3 } from "./connectcolor.js";

export const MinigameManager = {
    puzzles: [minigame1, minigame2, minigame3],
    current: null,
    index: 0,
    ctx: null,
    blockImg: null,

    init(ctx, blockImg) {
        this.ctx = ctx;
        this.blockImg = blockImg;
        this.start(0);
    },

    start(index) {
        this.index = index;
        this.current = this.puzzles[index];
        this.current.init();
        this.current.onComplete = () => this.next();
    },

    next() {
        if (this.index < this.puzzles.length - 1) {
            this.start(this.index + 1);
        } else {
            console.log("🎉 All puzzles done!");
        }
    },

    draw() {
        if (this.current) this.current.draw(this.ctx, this.blockImg);
    },

    mouseDown(mx,my) {
        const cell = this.current.getCell(mx,my);
        if (cell) this.current.startDrag(cell);
    },

    mouseMove(mx,my) {
        const cell = this.current.getCell(mx,my);
        if (cell) this.current.drag(cell);
    },

    mouseUp() {
        this.current.endDrag();
    }
};
