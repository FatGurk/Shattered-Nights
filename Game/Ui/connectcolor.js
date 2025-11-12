const rodblock = new Image();
rodblock.src = "./game/pictures/puzzle/color/rodblock.png";
const gulblock = new Image();
gulblock.src = "./game/pictures/puzzle/color/gulblock.png";
const blablock = new Image();
blablock.src = "./game/pictures/puzzle/color/blablock.png";
const rosblock = new Image();
rosblock.src = "./game/pictures/puzzle/color/rosblock.png";
const greblock = new Image();
greblock.src = "./game/pictures/puzzle/color/greblock.png";

export class connection {
    constructor({ gridSize, cellSize, offsetX, offsetY, pairs }) {
        this.gridSize = gridSize;
        this.cellSize = cellSize;
        this.offsetX = offsetX;
        this.offsetY = offsetY;
        this.pairs = structuredClone(pairs);
        this.paths = {};
        this.activeColor = null;
        this.onComplete = null;

        this.completed = {};

        for (const color in pairs) {
            this.paths[color] = [];
            this.completed[color] = false;
        }
    }

    getCell(mx, my) {
        const x = mx - this.offsetX;
        const y = my - this.offsetY;
        if (x < 0 || y < 0) return null;
        const col = Math.floor(x / this.cellSize);
        const row = Math.floor(y / this.cellSize);
        if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) return null;
        return { row, col };
    }

    startDrag(cell) {
        for (const color in this.pairs) {
            if (this.completed[color]) continue;
            if (this.pairs[color].some(p => p.row === cell.row && p.col === cell.col)) {
                this.activeColor = color;
                this.paths[color] = [cell];
            }
        }
    }

    isEndpoint(cell) {
        for (const color in this.pairs) {
            if (this.pairs[color].some(p => p.row === cell.row && p.col === cell.col)) return color;
        }
        return null;
    }

    drag(cell) {
        if (!this.activeColor) return;
        if (this.completed[this.activeColor]) {
            this.activeColor = null;
            return;
        }

        const path = this.paths[this.activeColor];
        const last = path[path.length - 1];

        const dist = Math.abs(cell.col - last.col) + Math.abs(cell.row - last.row);
        if (dist !== 1) return;

        const epColor = this.isEndpoint(cell);
        if (epColor) {
            if (epColor !== this.activeColor) return;

            const [a, b] = this.pairs[this.activeColor];
            const startedAtA = (path[0].row === a.row && path[0].col === a.col);
            const otherEndpoint = startedAtA ? b : a;
            if (!(cell.row === otherEndpoint.row && cell.col === otherEndpoint.col)) return;
        }

        for (const c in this.paths) {
            if (this.paths[c].some(p => p.row === cell.row && p.col === cell.col)) return;
        }

        path.push(cell);

        if (epColor === this.activeColor) {
            this.completed[this.activeColor] = true;
            this.activeColor = null;
            if (this.checkWin() && typeof this.onComplete === "function") {
                this.onComplete();
            }
        }
    }

    endDrag() {
        this.activeColor = null;
        if (this.checkWin() && typeof this.onComplete === "function") {
            this.onComplete();
        }
    }

    checkWin() {
        for (const color in this.pairs) {
            const path = this.paths[color];
            const [start, end] = this.pairs[color];
            if (!path || path.length === 0) return false;
            const first = path[0], last = path[path.length - 1];
            const connects =
                (first.row === start.row && first.col === start.col &&
                 last.row === end.row && last.col === end.col) ||
                (first.row === end.row && first.col === end.col &&
                 last.row === start.row && last.col === start.col);
            if (!connects) return false;
        }
        return true;
    }

    draw(ctx) {
        const blockImg = {
            red: rodblock,
            gul: gulblock,
            blue: blablock,
            ros: rosblock,
            gre: greblock
        };

        ctx.fillStyle = "rgba(0,0,0,0.85)";
        ctx.fillRect(
            this.offsetX - 30,
            this.offsetY - 30,
            this.gridSize * this.cellSize + 60,
            this.gridSize * this.cellSize + 60
        );

        ctx.strokeStyle = "white";
        for (let i = 0; i <= this.gridSize; i++) {
            ctx.beginPath();
            ctx.moveTo(this.offsetX, this.offsetY + i * this.cellSize);
            ctx.lineTo(this.offsetX + this.gridSize * this.cellSize, this.offsetY + i * this.cellSize);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(this.offsetX + i * this.cellSize, this.offsetY);
            ctx.lineTo(this.offsetX + i * this.cellSize, this.offsetY + this.gridSize * this.cellSize);
            ctx.stroke();
        }

        for (const color in this.pairs) {
            const [a, b] = this.pairs[color];
            const img = blockImg[color];
            ctx.drawImage(img, 
                this.offsetX + a.col * this.cellSize + 10, 
                this.offsetY + a.row * this.cellSize + 10, 
                this.cellSize - 20, 
                this.cellSize - 20);
            ctx.drawImage(img, 
                this.offsetX + b.col * this.cellSize + 10, 
                this.offsetY + b.row * this.cellSize + 10, 
                this.cellSize - 20, 
                this.cellSize - 20);
        }

        for (const color in this.paths) {
            const img = blockImg[color];
            for (const cell of this.paths[color]) {
                ctx.drawImage(
                    img,
                    this.offsetX + cell.col * this.cellSize + 10,
                    this.offsetY + cell.row * this.cellSize + 10,
                    this.cellSize - 20,
                    this.cellSize - 20
                );
            }
        }
    }
}