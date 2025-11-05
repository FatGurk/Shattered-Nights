export class Camera {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    }

    follow(Player) {
        this.x = Player.x - this.width / 2 + Player.width / 2;
        this.y = Player.y - this.height / 2 + Player.height / 2;

        // Camera Clamp Match.max(0 aka inte mindre än 0 och Math.min( this.x or y, tile antal * pixel per tile - camera bredd/ höjd))
        this.x = Math.max(0, Math.min(this.x, 320 * 128 - this.width));
        this.y = Math.max(0, Math.min(this.y, 240 * 128 - this.height));
    }
}