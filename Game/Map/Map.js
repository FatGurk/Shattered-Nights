class Map {
    constructor(width, height, tiles, tileset, tileSize = 128, srcSize = 16) {
        this.width = width;
        this.height = height;
        this.tiles = tiles;
        this.tileset = tileset;
        this.tileSize = tileSize;
        this.srcSize = srcSize;
    }
}