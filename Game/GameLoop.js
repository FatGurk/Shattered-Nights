const canvas = document.getElementById("GameCanvas");
const ctx = canvas.getContext("2d");

function DrawGameScene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CharacterList.forEach(e => {
        e.draw();
    });
}

function gameLoop() {
    DrawGameScene();
    requestAnimationFrame(gameLoop);
}