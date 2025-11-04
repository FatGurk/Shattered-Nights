// Map.js

export class Tile {
    constructor(type, sourceX, sourceY) {
        this.type = type;       // e.g., 0 = grass, 1 = dirt
        this.sourceX = sourceX; // position in tileset
        this.sourceY = sourceY;
    }

    draw(ctx, tileset, x, y, tileSize, srcSize) {
        ctx.drawImage(
            tileset,
            this.sourceX, this.sourceY, srcSize, srcSize, 
            x * tileSize, y * tileSize, tileSize, tileSize
        );
    }
}

export class TileMap {
    constructor(width, height, tileset, tileSize = 128, srcSize = 16) {
        this.width = width;       // in tiles
        this.height = height;
        this.tileSize = tileSize; // draw size on canvas
        this.srcSize = srcSize;   // source size in tileset
        this.tileset = tileset;
        this.tiles = new Array(width * height).fill(null); // empty initially
    }

    // Set a tile at (x, y) with a Tile instance
    setTile(x, y, tile) {
        this.tiles[y * this.width + x] = tile;
    }

    // Draw visible portion (or whole map for now)
    draw(ctx) {
        for (let y = 0; y < this.height; y++) {
            for (let x = 0; x < this.width; x++) {
                const tile = this.tiles[y * this.width + x];
                if (!tile) continue;
                tile.draw(ctx, this.tileset, x, y, this.tileSize, this.srcSize);
            }
        }
    }
}

// Example: create a map instance
export const tilesetImage = new Image();
tilesetImage.src = "../.Pictures/Kullersten1.png"; // your tileset image

export const Map1 = new TileMap(20, 15, tilesetImage); // 20x15 tiles on screen

// Fill with tiles (simple example: alternating grass and dirt)
tilesetImage.onload = () => {
    const kullersten1 = new Tile(0, 0, 0);
    const dirt = new Tile(1, 16, 0);

    for (let y = 0; y < Map1.height; y++) {
        for (let x = 0; x < Map1.width; x++) {
            const tile = (x + y) % 2 === 0 ? kullersten1 : kullersten1;
            Map1.setTile(x, y, tile);
        }
    }
};
