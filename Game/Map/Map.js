export class Tile {
    constructor(type, imgSrc, solid = false) {
        this.type = type;
        this.img = new Image();
        this.img.src = imgSrc;
        this.solid = solid;
    }

    draw(ctx, x, y, tileSize, camera) {
        ctx.drawImage(this.img, x * tileSize - camera.x, y * tileSize - camera.y, tileSize, tileSize);
    }
}

export const SpriteList = {

    // Ground Tiles
    Sand1: new Tile("Sand1", "./Game/Pictures/Tiles/Sand1.png", false),
    Dottgras1: new Tile("Dottgras1", "./Game/Pictures/Tiles/Dottgras1.png", false),
    Kullersten1: new Tile("Kullersten1", "./Game/Pictures/Tiles/Kullersten1.png", false),

    //House Tiles
    StandardHouse1: new Tile("StandardHouse1", "./Game/Pictures/House/standard1.png", false),
    StandardHouse2: new Tile("StandardHouse2", "./Game/Pictures/House/standard2.png", false),
    StandardHouse3: new Tile("StandardHouse3", "./Game/Pictures/House/standard3.png", false),
    StandardHouse4: new Tile("StandardHouse4", "./Game/Pictures/House/standard4.png", false),
    StandardHouse5: new Tile("StandardHouse5", "./Game/Pictures/House/standard5.png", false),
    StandardHouse6: new Tile("StandardHouse6", "./Game/Pictures/House/standard6.png", true),
    StandardHouse7: new Tile("StandardHouse7", "./Game/Pictures/House/standard7.png", true),
    StandardHouse8: new Tile("StandardHouse8", "./Game/Pictures/House/standard8.png", true),
    StandardHouse9: new Tile("StandardHouse9", "./Game/Pictures/House/standard9.png", true),
    StandardHouse10: new Tile("StandardHouse10", "./Game/Pictures/House/standard10.png", true),
    StandardHouse11: new Tile("StandardHouse11", "./Game/Pictures/House/standard11.png", true),
    StandardHouse12: new Tile("StandardHouse12", "./Game/Pictures/House/standard12.png", true),
    StandardHouse13: new Tile("StandardHouse13", "./Game/Pictures/House/standard13.png", true),
    StandardHouse14: new Tile("StandardHouse14", "./Game/Pictures/House/standard14.png", true),
    StandardHouse15: new Tile("StandardHouse15", "./Game/Pictures/House/standard15.png", true),
    StandardHouse16: new Tile("StandardHouse16", "./Game/Pictures/House/standard16.png", true),
    StandardHouse17: new Tile("StandardHouse17", "./Game/Pictures/House/standard17.png", true),
    StandardHouse18: new Tile("StandardHouse18", "./Game/Pictures/House/standard18.png", true),
    StandardHouse19: new Tile("StandardHouse19", "./Game/Pictures/House/standard19.png", true),
    StandardHouse20: new Tile("StandardHouse20", "./Game/Pictures/House/standard20.png", true),
    StandardHouse21: new Tile("StandardHouse21", "./Game/Pictures/House/standard21.png", false),
    StandardHouse22: new Tile("StandardHouse22", "./Game/Pictures/House/standard22.png", false),
    StandardHouse23: new Tile("StandardHouse23", "./Game/Pictures/House/standard23.png", false),
    StandardHouse24: new Tile("StandardHouse24", "./Game/Pictures/House/standard24.png", false),
    StandardHouse25: new Tile("StandardHouse25", "./Game/Pictures/House/standard25.png", false),
}

export const Houses = {
    StandardHouse: [
        [SpriteList.StandardHouse21, SpriteList.StandardHouse22, SpriteList.StandardHouse23, SpriteList.StandardHouse24, SpriteList.StandardHouse25],
        [SpriteList.StandardHouse16, SpriteList.StandardHouse17, SpriteList.StandardHouse18, SpriteList.StandardHouse19, SpriteList.StandardHouse20],
        [SpriteList.StandardHouse11, SpriteList.StandardHouse12, SpriteList.StandardHouse13, SpriteList.StandardHouse14, SpriteList.StandardHouse15],
        [SpriteList.StandardHouse6,  SpriteList.StandardHouse7,  SpriteList.StandardHouse8,  SpriteList.StandardHouse9,  SpriteList.StandardHouse10],
        [SpriteList.StandardHouse1,  SpriteList.StandardHouse2,  SpriteList.StandardHouse3,  SpriteList.StandardHouse4,  SpriteList.StandardHouse5]
    ]
}

export const InteractableSprites = {
    // Dirt Tile
    DirtWithMoon: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/Dirtwithmoon.png", true),
}

export const MAP_WIDTH = 160;
export const MAP_HEIGHT = 120;
export const TILE_SIZE = 128;


const Map1 = [];

// Sand över hela mappen
for (let row = 0; row < MAP_HEIGHT; row++) {
    Map1[row] = [];
    for (let col = 0; col < MAP_WIDTH; col++) {
        Map1[row][col] = {
            ground: SpriteList.Sand1,
            behind: null,
            infront: null,
        };
    }
}

// Gräs övre delen
for (let row = 0; row < 90; row++) {
    for (let col = 0; col < MAP_WIDTH; col++) {
        Map1[row][col].ground = SpriteList.Dottgras1;
    }
}

// Kullersten vägar
for (let row = 15; row < 18; row++) {
    for (let col = 15; col < 100; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
    
for (let row = 18; row < 100; row++) {
    // Första | vägen
    for (let col = 50; col < 53; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
    // Andra | vägen
    for (let col = 65; col < 68; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
    // Nedre vägen ----
for (let row = 59; row < 62; row++) {
    for (let col = 4; col < 100; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}

// Hus
    //Prefab hus funktion
    export function PlaceStandardHouse(map, StartRow, StartCol, House) {
        for (let row = 0; row < House.length; row++) {
            for (let col = 0; col < House[row].length; col++) {
                const tile = House[row][col];
                if (!tile) continue; // skip empty tiles
                
                // Ritar tile baserat på lager
                if (row < 2) {
                    map[StartRow + row][StartCol + col].infront = tile;
                } else {
                    map[StartRow + row][StartCol + col].behind = tile;
                }
            } 
        };
    }

const houseWidth = 5;
const houseHeight = 5;
const spacing = 0;

// Hus på rad/column
for (let col = 25; col < 50; col += houseWidth + spacing) {
    for (let row = 10; row < 15; row += houseHeight + spacing) {
        PlaceStandardHouse(Map1, row, col, Houses.StandardHouse);
    }
    for (let row = 54; row < 59; row += houseHeight + spacing) {
        PlaceStandardHouse(Map1, row, col, Houses.StandardHouse);
    }
}

// Dirt med månbit
Map1[19][25].behind = InteractableSprites.DirtWithMoon;


console.log(Map1);

function drawMap(ctx, camera, layer = "base") {

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

            // Ground layer
            if (layer === "ground" && tile.ground) {
                tile.ground.draw(ctx, col, row, TILE_SIZE, camera);
            }
            // Behind layer
            if (layer === "behind" && tile.behind) {
                tile.behind.draw(ctx, col, row, TILE_SIZE, camera);
            }
            // Infront layer
            if (layer === "infront" && tile.infront) {
                tile.infront.draw(ctx, col, row, TILE_SIZE, camera);
            }

        }
    }
}

export { Map1, drawMap };