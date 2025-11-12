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
    DottGras1: new Tile("gras1", "./game/pictures/tiles/dottgras.png", false),
    gras1: new Tile("gras1", "./game/pictures/tiles/gras.png", false),
    Kullersten1: new Tile("Kullersten1", "./game/pictures/tiles/kullersten1.png", false),
    Water1: new Tile("Water1", "./game/pictures/tiles/water.png", true),

    //House Tiles
    StandardHouse1: new Tile("StandardHouse1", "./game/pictures/House/standard1.png", false),
    StandardHouse2: new Tile("StandardHouse2", "./game/pictures/House/standard2.png", false),
    StandardHouse3: new Tile("StandardHouse3", "./game/pictures/House/standard3.png", false),
    StandardHouse4: new Tile("StandardHouse4", "./game/pictures/House/standard4.png", false),
    StandardHouse5: new Tile("StandardHouse5", "./game/pictures/House/standard5.png", false),
    StandardHouse6: new Tile("StandardHouse6", "./game/pictures/House/standard6.png", true),
    StandardHouse7: new Tile("StandardHouse7", "./game/pictures/House/standard7.png", true),
    StandardHouse8: new Tile("StandardHouse8", "./game/pictures/House/standard8.png", true),
    StandardHouse9: new Tile("StandardHouse9", "./game/pictures/House/standard9.png", true),
    StandardHouse10: new Tile("StandardHouse10", "./game/pictures/House/standard10.png", true),
    StandardHouse11: new Tile("StandardHouse11", "./game/pictures/House/standard11.png", true),
    StandardHouse12: new Tile("StandardHouse12", "./game/pictures/House/standard12.png", true),
    StandardHouse13: new Tile("StandardHouse13", "./game/pictures/House/standard13.png", true),
    StandardHouse14: new Tile("StandardHouse14", "./game/pictures/House/standard14.png", true),
    StandardHouse15: new Tile("StandardHouse15", "./game/pictures/House/standard15.png", true),
    StandardHouse16: new Tile("StandardHouse16", "./game/pictures/House/standard16.png", true),
    StandardHouse17: new Tile("StandardHouse17", "./game/pictures/House/standard17.png", true),
    StandardHouse18: new Tile("StandardHouse18", "./game/pictures/House/standard18.png", true),
    StandardHouse19: new Tile("StandardHouse19", "./game/pictures/House/standard19.png", true),
    StandardHouse20: new Tile("StandardHouse20", "./game/pictures/House/standard20.png", true),
    StandardHouse21: new Tile("StandardHouse21", "./game/pictures/House/standard21.png", false),
    StandardHouse22: new Tile("StandardHouse22", "./game/pictures/House/standard22.png", false),
    StandardHouse23: new Tile("StandardHouse23", "./game/pictures/House/standard23.png", false),
    StandardHouse24: new Tile("StandardHouse24", "./game/pictures/House/standard24.png", false),
    StandardHouse25: new Tile("StandardHouse25", "./game/pictures/House/standard25.png", false),
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
    // Dirt W moon
    DirtWithMoon: new Tile("DirtWithMoon1", "./game/pictures/interact/manbitar/manbitmarkdottgras.png", true),

    // Morot
    MorotMed1: new Tile("MorotMed1", "./game/pictures/interact/fullplottupp.png", true),
    MorotMed2: new Tile("MorotMed2", "./game/pictures/interact/fullcenterplott.png", true),
    MorotMed3: new Tile("MorotMed3", "./game/pictures/interact/fullplottbotten.png", true),

    MorotUtan1: new Tile("MorotUtan1", "./game/pictures/interact/tomplottupp.png", true),
    MorotUtan2: new Tile("MorotUtan2", "./game/pictures/interact/tomcenterplott.png", true),
    MorotUtan3: new Tile("MorotUtan3", "./game/pictures/interact/tomplottbotten.png", true),

    DottMorotUtan1: new Tile("DottMorotUtan1", "./game/pictures/interact/dottmorotplatstopp.png", true),
    DottMorotUtan2: new Tile("DottMorotUtan2", "./game/pictures/interact/dottmorotplatscentrum.png", true),
    DottMorotUtan3: new Tile("DottMorotUtan3", "./game/pictures/interact/dottmorotplatsbotten.png", true),

    // Blommor
    RodBlomma:  new Tile("RodBlomma", "./game/pictures/interact/rodblomma.png", false),
    BlaBlomma:  new Tile("BlaBlomma", "./game/pictures/interact/blablomma.png", false),
    VitBlomma:   new Tile("VitBlomma", "./game/pictures/interact/vitblomma.png", false),

    // puzzel2
    bot: new Tile("bot", "./game/pictures/puzzle/nocolor/bot.png", true),
    mid: new Tile("mid", "./game/pictures/puzzle/nocolor/mid.png", false),
    top: new Tile("top", "./game/pictures/puzzle/nocolor/top.png", false),
    botclear: new Tile("klar", "./game/pictures/puzzle/clear/botclear.png", true),
    midclear: new Tile("klar1", "./game/pictures/puzzle/clear/midclear.png", false),
    topclear: new Tile("klar2", "./game/pictures/puzzle/clear/topclear.png", false),

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
export const DottMorotFaltUtan = [
    [InteractableSprites.DottMorotUtan1],
    [InteractableSprites.DottMorotUtan2],
    [InteractableSprites.DottMorotUtan3]
];

export const CarrotFields = [
    { startRow: 26, startCol: 17, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 16, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 14, planted: false, growthTimer: 0, fullyGrown: false },
    { startRow: 26, startCol: 13, planted: false, growthTimer: 0, fullyGrown: false },
];

export const Pillar = [
    [InteractableSprites.top],
    [InteractableSprites.mid],
    [InteractableSprites.bot]
]

export const pillarcleared = [
    [InteractableSprites.topclear],
    [InteractableSprites.midclear],
    [InteractableSprites.botclear]
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
            ground: SpriteList.DottGras1,
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
for (let row = 31; row < 33; row++) {
    for (let col = 22; col < 39; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
for (let row = 2; row < 5; row++) {
    for (let col = 3; col < 22; col++) {
        Map1[row][col].ground = SpriteList.Kullersten1;
    }
}
// Kullersten väg |
for (let row = 2; row < 33; row++) {
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
                if (!tile) continue;
                
                // Ritar tile baserat på lager
                map[StartRow + row][StartCol + col].behind = tile;
            } 
        };
    }
// Hus
PlaceStandardHouse(Map1, 7, 13, Houses.StandardHouse)
PlaceStandardHouse(Map1, 13, 25, Houses.StandardHouse)
PlaceStandardHouse(Map1, 21, 13, Houses.StandardHouse)
PlaceStandardHouse(Map1, 26, 34, Houses.StandardHouse)

//Morot
for (const falt of CarrotFields) {
    PlacePlot(Map1, falt.startRow, falt.startCol, DottMorotFaltUtan);
}

// Water
for (let row = 37; row < 40; row++) {
    for (let col = 0; col < 40; col++) {
        Map1[row][col].ground = SpriteList.Water1;
    } 
}

// Quest interactable thingys
Map1[5][16].behind = InteractableSprites.DirtWithMoon;


// Andra pussel
PlaceStandardHouse(Map1, 5, 5, Pillar);

// ==========================
// Fade logic för FirstStage
// ==========================

let fadeAlpha = 0;
let fading = false;
let fadeCallback = null;

export function triggerFirstStage(callback) {
    if (fading) return;

    fading = true;
    fadeAlpha = 0;
    fadeCallback = callback;

    const fadeDuration = 1000;
    const fadeSteps = 16 / fadeDuration;

    const fadeInterval = setInterval(() => {
        fadeAlpha += fadeSteps;

        if (fadeAlpha >= 1) {
            fadeAlpha = 1;

            // Ändra gräset
            for (let row = 0; row < MAP_HEIGHT; row++) {
                for (let col = 0; col < MAP_WIDTH; col++) {
                    if (Map1[row][col].ground === SpriteList.DottGras1) {
                        Map1[row][col].ground = SpriteList.gras1;
                    }
                }
            }

            // Ändra MorotFällt
            for (const falt of CarrotFields) {
                PlacePlot(Map1, falt.startRow, falt.startCol, MorotFaltUtan);
            }

            // Blommorna
            Map1[14][13].behind = InteractableSprites.BlaBlomma;
            Map1[13][8].behind = InteractableSprites.RodBlomma;
            Map1[11][2].behind = InteractableSprites.VitBlomma;

            //Fade tbaks
            const fadeBackInterval = setInterval(() => {
                fadeAlpha -= fadeSteps;
                if (fadeAlpha <= 0) {
                    fadeAlpha = 0;
                    fading = false;
                    clearInterval(fadeBackInterval);
                }
            }, 16);
            clearInterval(fadeInterval);
        }
    }, 16);
}

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

            // Rita Fading
            if (fading) {
                ctx.fillStyle = `rgba(0,0,0,${fadeAlpha})`;
                ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
            }
        }
    }
}

export { Map1, drawMap };