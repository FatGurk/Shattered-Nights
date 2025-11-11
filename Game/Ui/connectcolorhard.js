import { ctx } from "../canvasctx.js";
const blafarg = new Image();
blafarg.src = "./game/pictures/puzzle/color/blablock.png";
const gulfarg = new Image();
gulfarg.src = "./game/pictures/puzzle/color/gulblock.png";
const rodfarg = new Image();
rodfarg.src = "./game/pictures/puzzle/color/rodblock.png";

export const minigame3 = {
    gridSize: 4,
    cellSize: 80,
    offsetX: 300,
    offsetY: 150,

    pairs: {
        red:  [
            {row:2, col:2},
            {row:3, col:3}
        ],
        gul: [
            {row:0, col:3},
            {row:3, col:0}
        ],
        blue: [
            {row:3, col:1},
            {row:2, col:3}
        ]
    },

    paths: {
        red: [],
        gul: [],
        blue: []
    },

    activeColor: null,
    onComplete: null,

    getCell(mx, my) {
        const x = mx - this.offsetX
        const y = my - this.offsetY
        if (x < 0 || y < 0) return null
        const col = Math.floor(x / this.cellSize)
        const row = Math.floor(y / this.cellSize)
        if (row < 0 || row >= this.gridSize || col < 0 || col >= this.gridSize) return null
        return {row, col}
    },

    startDrag(cell) {
        for (const color in this.pairs) {
            if (this.pairs[color].some(p => p.row === cell.row && p.col === cell.col)) {
                this.activeColor = color
                this.paths[color] = [cell]
            }
        }
    },

    drag(cell) {
        if (!this.activeColor) return
        const path = this.paths[this.activeColor]
        const last = path[path.length - 1]

        const dist = Math.abs(cell.col - last.col) + Math.abs(cell.row - last.row)
        if (dist !== 1) return

        for (const color in this.paths) {
            if (this.paths[color].some(p => p.row === cell.row && p.col === cell.col)) return
        }

        path.push(cell)
    },

    endDrag() {
        this.activeColor = null
        if (this.checkWin() == true) {
            console.log("PUZZLE COMPLETE!")
            if (this.onComplete) {
                this.onComplete();
            }
        }
    },

    checkWin() {
    for (const color in this.pairs) {
        const path = this.paths[color];
        const [start, end] = this.pairs[color]

        if (!path || path.length === 0) return false

        const first = path[0]
        const last = path[path.length - 1]

        const connects =
            (first.row === start.row && first.col === start.col &&
            last.row === end.row && last.col === end.col) ||
            (first.row === end.row && first.col === end.col &&
            last.row === start.row && last.col === start.col)

        if (!connects) return false
    }

    console.log("PUZZLE COMPLETE!")
    return true
    },

    draw(ctx) {
    ctx.fillStyle = "rgba(0,0,0,0.85)"
    ctx.fillRect(this.offsetX-40, this.offsetY-40, this.gridSize*this.cellSize+80, this.gridSize*this.cellSize+80)

    ctx.strokeStyle = "white";
    for (let i = 0; i <= this.gridSize; i++) {
        ctx.beginPath()
        ctx.moveTo(this.offsetX, this.offsetY + i*this.cellSize)
        ctx.lineTo(this.offsetX + this.gridSize*this.cellSize, this.offsetY + i*this.cellSize)
        ctx.stroke()

        ctx.beginPath()
        ctx.moveTo(this.offsetX + i*this.cellSize, this.offsetY)
        ctx.lineTo(this.offsetX + i*this.cellSize, this.offsetY + this.gridSize*this.cellSize)
        ctx.stroke()
    }

    ctx.drawImage(rodfarg, 
        this.offsetX + 2*this.cellSize + 10, 
        this.offsetY + 2*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20),
    ctx.drawImage(rodfarg, 
        this.offsetX + 3*this.cellSize + 10, 
        this.offsetY + 3*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20)

    ctx.drawImage(gulfarg, 
        this.offsetX + 3*this.cellSize + 10, 
        this.offsetY + 0*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20),
    ctx.drawImage(gulfarg, 
        this.offsetX + 0*this.cellSize + 10, 
        this.offsetY + 3*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20)

    ctx.drawImage(blafarg, 
        this.offsetX + 1*this.cellSize + 10, 
        this.offsetY + 3*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20),
    ctx.drawImage(blafarg, 
        this.offsetX + 3*this.cellSize + 10, 
        this.offsetY + 2*this.cellSize +10, 
        this.cellSize -20, 
        this.cellSize -20)

    const blockImg = {
        red: rodfarg,
        gul: gulfarg,
        blue: blafarg
    }

    for (const color in this.paths) {
        for (const cell of this.paths[color]) {
            ctx.drawImage(
                blockImg[color],
                this.offsetX + cell.col * this.cellSize + 10,
                this.offsetY + cell.row * this.cellSize + 10,
                this.cellSize - 20,
                this.cellSize - 20
            )
        }

    }
    }
};
