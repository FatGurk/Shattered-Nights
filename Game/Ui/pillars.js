import { PlaceStandardHouse, Map1, Pillar, Pillarcleared } from "../map/map.js";
import { minigame1, minigame2, minigame3 } from "./connectalla.js";

export class PillarManager {
    constructor() {
        this.pillars = [
            { id: 1, row: 5, col: 5, cleared: false, minigame: minigame1 },
            { id: 2, row: 10, col: 28, cleared: false, minigame: minigame2 },
            { id: 3, row: 28, col: 8, cleared: false, minigame: minigame3 }
        ];

        this.pillars.forEach(pillar => {
            PlaceStandardHouse(Map1, pillar.row, pillar.col, Pillar);
            pillar.minigame.onComplete = () => this.completePillar(pillar);
        });
    }

    completePillar(pillar) {
        pillar.cleared = true;
        PlaceStandardHouse(Map1, pillar.row, pillar.col, Pillarcleared);
        console.log(`✅ Pillar ${pillar.id} completed!`);
    }

    interact(player) {
        for (const pillar of this.pillars) {
            const dx = Math.abs(player.col - pillar.col);
            const dy = Math.abs(player.row - pillar.row);
            if (dx < 2 && dy < 2 && !pillar.cleared) {
                player.minigameOpen = true;
                player.activeMinigame = pillar.minigame;
                break;
            }
        }
    }
}

export const Pillars = new PillarManager();
