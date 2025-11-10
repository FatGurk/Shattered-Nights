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
    gras1: new Tile("gras1", "./Game/Pictures/Tiles/gras.png", false),
    Kullersten1: new Tile("Kullersten1", "./Game/Pictures/Tiles/Kullersten1.png", false),
    Water1: new Tile("Water1", "./Game/Pictures/Tiles/Water.png", true),

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

    // Morot
    MorotMed1: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/fullplottupp.png", true),
    MorotMed2: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/fullcenterplott.png", true),
    MorotMed3: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/fullplottbotten.png", true),

    MorotUtan1: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/tomplottupp.png", true),
    MorotUtan2: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/tomcenterplott.png", true),
    MorotUtan3: new Tile("DirtWithMoon1", "./Game/Pictures/Interact/tomplottbotten.png", true),

    // Blommor
    RodBlomma:  new Tile("DirtWithMoon1", "./Game/Pictures/Interact/Rodblomma.png", false),
    BlaBlomma:  new Tile("DirtWithMoon1", "./Game/Pictures/Interact/Blablomma.png", false),
    VitBlomma:   new Tile("DirtWithMoon1", "./Game/Pictures/Interact/Vitblomma.png", false),

    // puzzel2
    redcolorless: new Tile("redcolorlessbase", "./Game/Pictures/Puzzle/NoColor/31f.png", true),
    bluecolorless: new Tile("bluecolorlessbase", "./Game/Pictures/Puzzle/NoColor/32f.png", true),
    yellowcolorless: new Tile("yellowcolorlessbase", "./Game/Pictures/Puzzle/NoColor/33f.png", true),
    colorless1: new Tile("colorless1", "./Game/Pictures/Puzzle/NoColor/2f.png", false),
    colorless2: new Tile("colorless2", "./Game/Pictures/Puzzle/NoColor/1f.png", false),

}

export const MorotFaltMed = [
    [InteractableSprites.MorotMed1],
    [InteractableSprites.MorotMed2],
    [InteractableSprites.MorotMed3]
];
export const MorotFaltUtan = [
    [InteractableSprites.MorotUtan1],
    [InteractableSprites.MorotUtan2],
    [InteractableSprites.MorotUtan3]
];

export const CarrotFields = [
    { startRow: 26, startCol: 17, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 16, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 14, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 13, planted: false, growthTimer: 0, fullyGrown: false },
];

export const RedPillar1 = [
    [InteractableSprites.colorless2],
    [InteractableSprites.colorless1],
    [InteractableSprites.redcolorless]
]
export const BluePillar2 = [
    [InteractableSprites.colorless2],
    [InteractableSprites.colorless1],
    [InteractableSprites.bluecolorless]
]
export const YellowPillar3 = [
    [InteractableSprites.colorless2],
    [InteractableSprites.colorless1],
    [InteractableSprites.yellowcolorless]
]

export const MAP_WIDTH = 40;
export const MAP_HEIGHT = 40;
export const TILE_SIZE = 128;


const Map1 = [];

// Gräs över hela mappen
for (let row = 0; row < MAP_HEIGHT; row++) {
    Map1[row] = [];
    for (let col = 0; col < MAP_WIDTH; col++) {
        Map1[row][col] = {
            ground: SpriteList.gras1,
            behind: null,
            infront: null,
        };
    }
}

// Kullersten vägar -
for (let row = 18; row < 22; row++) {
    for (let col = 2; col < 38; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
for (let row = 35; row < 37; row++) {
    for (let col = 6; col < 18; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
for (let row = 2; row < 5; row++) {
    for (let col = 3; col < 22; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
// Kullersten väg |
for (let row = 2; row < 37; row++) {
    for (let col = 18; col < 22; col++) {
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
        
    //Prefab för morot
    export function PlacePlot(map, StartRow, StartCol, tileBehind) {
        for (let row = 0; row < tileBehind.length; row++) {
            for (let col = 0; col < tileBehind[row].length; col++) {
                const tile = tileBehind[row][col];
                if (!tile) continue; // skip empty tiles
                
                // Ritar tile baserat på lager
                map[StartRow + row][StartCol + col].behind = tile;
            } 
        };
    }
// Hus
PlaceStandardHouse(Map1, 7, 13, Houses.StandardHouse)
PlaceStandardHouse(Map1, 13, 25, Houses.StandardHouse)
PlaceStandardHouse(Map1, 21, 13, Houses.StandardHouse)
PlaceStandardHouse(Map1, 30, 5, Houses.StandardHouse)

//Morot
for (const falt of CarrotFields) {
    PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltUtan);
}

// Water
for (let row = 35; row < 40; row++) {
    for (let col = 0; col < 5; col++) {
        Map1[row][col].ground = SpriteList.Water1;
    } 
}

// Quest interactable thingys
Map1[5][16].behind = InteractableSprites.DirtWithMoon;
Map1[14][13].behind = InteractableSprites.BlaBlomma;
Map1[13][8].behind = InteractableSprites.RodBlomma;
Map1[11][2].behind = InteractableSprites.VitBlomma;


// Andra pyssel
PlaceStandardHouse(Map1, 10, 30, RedPillar1);
PlaceStandardHouse(Map1, 20, 30, BluePillar2);
PlaceStandardHouse(Map1, 30, 30, YellowPillar3);

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
