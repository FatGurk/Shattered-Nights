import { connection } from "./connectcolor.js";

export const minigame1 = new connection({
    gridSize: 4,
    cellSize: 70,
    offsetX: 250,
    offsetY: 140,
    pairs: {
        red:  [{row:0,col:0},{row:3,col:3}],
        gul:  [{row:0,col:3},{row:3,col:0}],
        blue: [{row:1,col:2},{row:2,col:1}],
    }
});

export const minigame2 = new connection({
    gridSize: 5,
    cellSize: 60,
    offsetX: 220,
    offsetY: 120,
    pairs: {
        red:  [{row:0,col:0},{row:4,col:4}],
        gul:  [{row:0,col:4},{row:4,col:0}],
        blue: [{row:1,col:2},{row:3,col:2}],
        ros:  [{row:2,col:0},{row:2,col:4}]
    }
});

export const minigame3 = new connection({
    gridSize: 6,
    cellSize: 60,
    offsetX: 180,
    offsetY: 100,
    pairs: {
        red:  [{row:0,col:0},{row:5,col:5}],
        gul:  [{row:0,col:5},{row:5,col:0}],
        blue: [{row:1,col:3},{row:4,col:2}],
        ros:  [{row:2,col:0},{row:3,col:5}],
        gre:  [{row:5,col:2},{row:0,col:2}]
    }
});
