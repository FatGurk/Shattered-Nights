import { PlaceStandardHouse, Map1, Pillar, Pillarcleared, Puzzle } from "../map/map.js";
import { minigame1, minigame2, minigame3 } from "./connectalla.js";
import { CharacterList } from "../objectlists.js";

export class PillarManager {
    constructor() {
        this.pillars = [
            { id: 1, row: 5, col: 5, cleared: false, minigame: minigame1 },
            { id: 2, row: 10, col: 28, cleared: false, minigame: minigame2 },
            { id: 3, row: 28, col: 8, cleared: false, minigame: minigame3 }
        ];

        this.pillars.forEach(pillar => {
            PlaceStandardHouse(Map1, pillar.row, pillar.col, Pillar);
            pillar.minigame.onComplete = () => {
                this.completePillar(pillar);
            };
        });

    }

    completePillar(pillar) {
        pillar.cleared = true;
        PlaceStandardHouse(Map1, pillar.row, pillar.col, Pillarcleared);

        CharacterList.forEach(char => {
            if (char && char.activeMinigame === pillar.minigame) {
                char.minigameOpen = false;
                char.activeMinigame = null;
            }
        });

        if (this.pillars.every(p => p.cleared)) {
            Puzzle === true;
            for (let row = 17; row < 22; row++) {
                for (let col = Map1[0].length - 5; col < Map1[0].length - 4; col++) {
                    Map1[row][col].behind = null;
                }
            }
        }
    }

    checkNearby(player) {
        for (const pillar of this.pillars) {
            const TILE_SIZE = 128;
            const playerCol = Math.floor(player.x / TILE_SIZE);
            const playerRow = Math.floor(player.y / TILE_SIZE);
            
            const dx = Math.abs(playerCol - pillar.col);
            const dy = Math.abs(playerRow - pillar.row);
            
            
            if (dx < 3 && dy < 3 && !pillar.cleared) {
                return pillar;
            }
        }
        return null;
    }

    interact(player) {
        const pillar = this.checkNearby(player);
        if (pillar) {
            player.minigameOpen = true;
            player.activeMinigame = pillar.minigame;
            return true;
        }
        return false;
    }
}

export const Pillars = new PillarManager();
