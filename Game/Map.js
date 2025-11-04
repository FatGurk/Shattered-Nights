class Tile {
    constructor(type, sourceX, sourceY) {
        this.type = type;
        this.sourceX = sourceX;
        this.sourceY = sourceY;
    }

    draw(ctx, tileset, x, y, tileSize, srcSize) {
        ctx.drawImage(
            tileset,
            this.sourceX, this.sourceY, srcSize, srcSize, x * tileSize, y * tileSize, tileSize, tileSize
        );
    }
}

class TileMap {
    constructor(width, height, tiles, tileset, tileSize = 128, srcSize = 16) {
        this.width = width;
        this.height = height;
        this.tiles = tiles;
        this.tileset = tileset;
        this.tileSize = tileSize;
        this.srcSize = srcSize;
    }
}