class Tile {
    constructor(type, sourceX, sourceY) {
        this.type = type;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
    }

    draw(ctx, tileset, x, y, tileSize, camera) {
        ctx.drawImage(tileset, this.sourceX, this.sourceY, tileSize, tileSize, x * tileSize - camera.x, y * tileSize - camera.y, tileSize, tileSize
        );
    }
}

const tileset = new Image();
tileset.src = "../.Pictures/Dottgras1.png";

const MAP_WIDTH = 320;
const MAP_HEIGHT = 240;
const TILE_SIZE = 128;

const Map1 = [];

for (let row = 0; row < MAP_WIDTH; row++) {
    Map1[row] = [];
    for (let col = 0; col < MAP_HEIGHT; col++) {
        Map1[row][col] = new Tile("Dottgras", 0, 0);
    }
}

function drawMap(ctx, camera) {
    if (!tileset.complete) return;

    // Vad kameran visar aka vilka tiles som ska ritas
    const startCol = Math.floor(camera.x / TILE_SIZE);
    const endCol = Math.ceil((camera.x + ctx.canvas.width) / TILE_SIZE);
    const startRow = Math.floor(camera.y / TILE_SIZE);
    const endRow = Math.ceil((camera.y + ctx.canvas.height) / TILE_SIZE);

    for (let row = startRow; row < endRow; row++) {
        for (let col = startCol; col < endCol; col++) {
            if (row < 0 || col < 0 || row >= MAP_HEIGHT || col >= MAP_WIDTH) continue;
            const tile = Map1[row][col];
            if (!tile) continue;

            tile.draw(ctx, tileset, col, row, TILE_SIZE, camera);
        }
    }
}

export { Map1, drawMap };