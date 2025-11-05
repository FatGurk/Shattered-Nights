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
    Sand1: new Tile("Sand1", "../.Pictures/Tiles/Sand1.png"),
    Dottgras1: new Tile("Dottgras1", "../.Pictures/Tiles/Dottgras1.png"),
    Kullersten1: new Tile("Kullersten1", "../.Pictures/Tiles/Kullersten1.png"),

    //HouseTiles
    StandardHouse1: new Tile("StandardHouse1", "../.Pictures/House/standard1.png"),
    StandardHouse2: new Tile("StandardHouse2", "../.Pictures/House/standard2.png"),
    StandardHouse3: new Tile("StandardHouse3", "../.Pictures/House/standard3.png"),
    StandardHouse4: new Tile("StandardHouse4", "../.Pictures/House/standard4.png"),
    StandardHouse5: new Tile("StandardHouse5", "../.Pictures/House/standard5.png"),
    StandardHouse6: new Tile("StandardHouse6", "../.Pictures/House/standard6.png"),
    StandardHouse7: new Tile("StandardHouse7", "../.Pictures/House/standard7.png"),
    StandardHouse8: new Tile("StandardHouse8", "../.Pictures/House/standard8.png"),
    StandardHouse9: new Tile("StandardHouse9", "../.Pictures/House/standard9.png"),
    StandardHouse10: new Tile("StandardHouse10", "../.Pictures/House/standard10.png"),
    StandardHouse11: new Tile("StandardHouse11", "../.Pictures/House/standard11.png"),
    StandardHouse12: new Tile("StandardHouse12", "../.Pictures/House/standard12.png"),
    StandardHouse13: new Tile("StandardHouse13", "../.Pictures/House/standard13.png"),
    StandardHouse14: new Tile("StandardHouse14", "../.Pictures/House/standard14.png"),
    StandardHouse15: new Tile("StandardHouse15", "../.Pictures/House/standard15.png"),
    StandardHouse16: new Tile("StandardHouse16", "../.Pictures/House/standard16.png"),
    StandardHouse17: new Tile("StandardHouse17", "../.Pictures/House/standard17.png"),
    StandardHouse18: new Tile("StandardHouse18", "../.Pictures/House/standard18.png"),
    StandardHouse19: new Tile("StandardHouse19", "../.Pictures/House/standard19.png"),
    StandardHouse20: new Tile("StandardHouse20", "../.Pictures/House/standard20.png"),
    StandardHouse21: new Tile("StandardHouse21", "../.Pictures/House/standard21.png"),
    StandardHouse22: new Tile("StandardHouse22", "../.Pictures/House/standard22.png"),
    StandardHouse23: new Tile("StandardHouse23", "../.Pictures/House/standard23.png"),
    StandardHouse24: new Tile("StandardHouse24", "../.Pictures/House/standard24.png"),
    StandardHouse25: new Tile("StandardHouse25", "../.Pictures/House/standard25.png"),
}

export const Houses = {
    StandardHouse: [
        [SpriteList.StandardHouse1, SpriteList.StandardHouse2, SpriteList.StandardHouse3, SpriteList.StandardHouse4, SpriteList.StandardHouse5],
        [SpriteList.StandardHouse6, SpriteList.StandardHouse7, SpriteList.StandardHouse8, SpriteList.StandardHouse9, SpriteList.StandardHouse10],
        [SpriteList.StandardHouse11, SpriteList.StandardHouse12, SpriteList.StandardHouse13, SpriteList.StandardHouse14, SpriteList.StandardHouse15],
        [SpriteList.StandardHouse16, SpriteList.StandardHouse17, SpriteList.StandardHouse18, SpriteList.StandardHouse19, SpriteList.StandardHouse20],
        [SpriteList.StandardHouse21, SpriteList.StandardHouse22, SpriteList.StandardHouse23, SpriteList.StandardHouse24, SpriteList.StandardHouse25]
    ]
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

// Hus
    //Standard Hus
    export function PlaceStandardHouse(map, StartRow, StartCol, House) {
        for (let row = 0; row < House.length; row++) {
            for (let col = 0; col < 5; col++) {
                const tile = House[row][col];
                map[StartRow + row][StartCol + col] = tile;
            } 
        };
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