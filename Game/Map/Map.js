export class Tile {
    constructor(type, imgSrc) {
        this.type = type;
        this.img = new Image();
        this.img.src = imgSrc;
    }

    draw(ctx, x, y, tileSize, camera) {
        ctx.drawImage(this.img, x * tileSize - camera.x, y * tileSize - camera.y, tileSize, tileSize);
    }
}

export const SpriteList = {
    Sand1: new Tile("Sand1", "../Pictures/Tiles/Sand1.png"),
    Dottgras1: new Tile("Dottgras1", "../Pictures/Tiles/Dottgras1.png"),
    Kullersten1: new Tile("Kullersten1", "../Pictures/Tiles/Kullersten1.png")
}

export const MAP_WIDTH = 320;
export const MAP_HEIGHT = 240;
export const TILE_SIZE = 128;


const Map1 = [];

// Sand över hela mappen
for (let row = 0; row < MAP_HEIGHT; row++) {
    Map1[row] = [];
    for (let col = 0; col < MAP_WIDTH; col++) {
        Map1[row][col] = SpriteList.Sand1;
    }
}

// Gräs övre delen
for (let row = 0; row < 90; row++) {
    for (let col = 0; col < MAP_WIDTH; col++) {
        Map1[row][col] = SpriteList.Dottgras1;
    }
}

// Kullersten vägar
for (let row = 15; row < 18; row++) {
    for (let col = 15; col < 100; col++) {
        Map1[row][col] = SpriteList.Kullersten1;
    }
}

for (let row = 18; row < 100; row++) {
    for (let col = 50; col < 53; col++) {
        Map1[row][col] = SpriteList.Kullersten1;
    }
    for (let col = 70; col < 73; col++) {
        Map1[row][col] = SpriteList.Kullersten1;
    }
}
for (let row = 59; row < 62; row++) {
    for (let col = 4; col < 100; col++) {
        Map1[row][col] = SpriteList.Kullersten1;
    }
}

console.log(Map1);

function drawMap(ctx, camera) {

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

            tile.draw(ctx, col, row, TILE_SIZE, camera);
        }
    }
}

export { Map1, drawMap };