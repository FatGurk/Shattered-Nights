export class Tile {
    constructor(type, imgSrc, solid = false) {
        this.type = type;
        this.img = new Image();
        this.img.src = imgSrc;
        this.solid = solid;
    }

    draw(ctx, x, y, tilesize, camera) {
        ctx.drawImage(this.img, x * tilesize - camera.x, y * tilesize - camera.y, tilesize, tilesize);
    }
}

export const SpriteList = {

    // Ground tiles
    gras1: new Tile("gras1", "./game/pictures/tiles/gras.png", false),
    Kullersten1: new Tile("Kullersten1", "./game/pictures/tiles/Kullersten1.png", false),
    Water1: new Tile("Water1", "./game/pictures/tiles/Water.png", true),

    //house tiles
    Standardhouse1: new Tile("Standardhouse1", "./game/pictures/house/standard1.png", false),
    Standardhouse2: new Tile("Standardhouse2", "./game/pictures/house/standard2.png", false),
    Standardhouse3: new Tile("Standardhouse3", "./game/pictures/house/standard3.png", false),
    Standardhouse4: new Tile("Standardhouse4", "./game/pictures/house/standard4.png", false),
    Standardhouse5: new Tile("Standardhouse5", "./game/pictures/house/standard5.png", false),
    Standardhouse6: new Tile("Standardhouse6", "./game/pictures/house/standard6.png", true),
    Standardhouse7: new Tile("Standardhouse7", "./game/pictures/house/standard7.png", true),
    Standardhouse8: new Tile("Standardhouse8", "./game/pictures/house/standard8.png", true),
    Standardhouse9: new Tile("Standardhouse9", "./game/pictures/house/standard9.png", true),
    Standardhouse10: new Tile("Standardhouse10", "./game/pictures/house/standard10.png", true),
    Standardhouse11: new Tile("Standardhouse11", "./game/pictures/house/standard11.png", true),
    Standardhouse12: new Tile("Standardhouse12", "./game/pictures/house/standard12.png", true),
    Standardhouse13: new Tile("Standardhouse13", "./game/pictures/house/standard13.png", true),
    Standardhouse14: new Tile("Standardhouse14", "./game/pictures/house/standard14.png", true),
    Standardhouse15: new Tile("Standardhouse15", "./game/pictures/house/standard15.png", true),
    Standardhouse16: new Tile("Standardhouse16", "./game/pictures/house/standard16.png", true),
    Standardhouse17: new Tile("Standardhouse17", "./game/pictures/house/standard17.png", true),
    Standardhouse18: new Tile("Standardhouse18", "./game/pictures/house/standard18.png", true),
    Standardhouse19: new Tile("Standardhouse19", "./game/pictures/house/standard19.png", true),
    Standardhouse20: new Tile("Standardhouse20", "./game/pictures/house/standard20.png", true),
    Standardhouse21: new Tile("Standardhouse21", "./game/pictures/house/standard21.png", false),
    Standardhouse22: new Tile("Standardhouse22", "./game/pictures/house/standard22.png", false),
    Standardhouse23: new Tile("Standardhouse23", "./game/pictures/house/standard23.png", false),
    Standardhouse24: new Tile("Standardhouse24", "./game/pictures/house/standard24.png", false),
    Standardhouse25: new Tile("Standardhouse25", "./game/pictures/house/standard25.png", false),
}

export const houses = {
    Standardhouse: [
        [SpriteList.Standardhouse21, SpriteList.Standardhouse22, SpriteList.Standardhouse23, SpriteList.Standardhouse24, SpriteList.Standardhouse25],
        [SpriteList.Standardhouse16, SpriteList.Standardhouse17, SpriteList.Standardhouse18, SpriteList.Standardhouse19, SpriteList.Standardhouse20],
        [SpriteList.Standardhouse11, SpriteList.Standardhouse12, SpriteList.Standardhouse13, SpriteList.Standardhouse14, SpriteList.Standardhouse15],
        [SpriteList.Standardhouse6,  SpriteList.Standardhouse7,  SpriteList.Standardhouse8,  SpriteList.Standardhouse9,  SpriteList.Standardhouse10],
        [SpriteList.Standardhouse1,  SpriteList.Standardhouse2,  SpriteList.Standardhouse3,  SpriteList.Standardhouse4,  SpriteList.Standardhouse5]
    ]
}

export const interactableSprites = {
    // Dirt Tile
    DirtWithMoon: new Tile("DirtWithMoon1", "./game/pictures/interact/Dirtwithmoon.png", true),

    // Morot
    MorotMed1: new Tile("DirtWithMoon1", "./game/pictures/interact/fullplottupp.png", true),
    MorotMed2: new Tile("DirtWithMoon1", "./game/pictures/interact/fullcenterplott.png", true),
    MorotMed3: new Tile("DirtWithMoon1", "./game/pictures/interact/fullplottbotten.png", true),

    MorotUtan1: new Tile("DirtWithMoon1", "./game/pictures/interact/tomplottupp.png", true),
    MorotUtan2: new Tile("DirtWithMoon1", "./game/pictures/interact/tomcenterplott.png", true),
    MorotUtan3: new Tile("DirtWithMoon1", "./game/pictures/interact/tomplottbotten.png", true),

    // Blommor
    RodBlomma:  new Tile("DirtWithMoon1", "./game/pictures/interact/rodblomma.png", false),
    BlaBlomma:  new Tile("DirtWithMoon1", "./game/pictures/interact/blablomma.png", false),
    VitBlomma:   new Tile("DirtWithMoon1", "./game/pictures/interact/vitblomma.png", false),

    // puzzel2
    redcolorless: new Tile("redcolorlessbase", "./game/pictures/puzzle/nocolor/31f.png", true),
    bluecolorless: new Tile("bluecolorlessbase", "./game/pictures/puzzle/nocolor/32f.png", true),
    yellowcolorless: new Tile("yellowcolorlessbase", "./game/pictures/puzzle/nocolor/33f.png", true),
    colorless1: new Tile("colorless1", "./game/pictures/puzzle/nocolor/2f.png", false),
    colorless2: new Tile("colorless2", "./game/pictures/puzzle/nocolor/1f.png", false),

}

export const MorotFaltMed = [
    [interactableSprites.MorotMed1],
    [interactableSprites.MorotMed2],
    [interactableSprites.MorotMed3]
];
export const MorotFaltUtan = [
    [interactableSprites.MorotUtan1],
    [interactableSprites.MorotUtan2],
    [interactableSprites.MorotUtan3]
];

export const CarrotFields = [
    { startRow: 26, startCol: 17, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 16, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 14, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 13, planted: false, growthTimer: 0, fullyGrown: false },
];

export const RedPillar1 = [
    [interactableSprites.colorless2],
    [interactableSprites.colorless1],
    [interactableSprites.redcolorless]
]
export const BluePillar2 = [
    [interactableSprites.colorless2],
    [interactableSprites.colorless1],
    [interactableSprites.bluecolorless]
]
export const YellowPillar3 = [
    [interactableSprites.colorless2],
    [interactableSprites.colorless1],
    [interactableSprites.yellowcolorless]
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
    export function PlaceStandardhouse(map, StartRow, StartCol, house) {
        for (let row = 0; row < house.length; row++) {
            for (let col = 0; col < house[row].length; col++) {
                const tile = house[row][col];
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
PlaceStandardhouse(Map1, 7, 13, houses.Standardhouse)
PlaceStandardhouse(Map1, 13, 25, houses.Standardhouse)
PlaceStandardhouse(Map1, 21, 13, houses.Standardhouse)
PlaceStandardhouse(Map1, 30, 5, houses.Standardhouse)

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
Map1[5][16].behind = interactableSprites.DirtWithMoon;
Map1[14][13].behind = interactableSprites.BlaBlomma;
Map1[13][8].behind = interactableSprites.RodBlomma;
Map1[11][2].behind = interactableSprites.VitBlomma;


// Andra pyssel
PlaceStandardhouse(Map1, 10, 30, RedPillar1);
PlaceStandardhouse(Map1, 20, 30, BluePillar2);
PlaceStandardhouse(Map1, 30, 30, YellowPillar3);

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
