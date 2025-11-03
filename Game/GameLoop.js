const canvas = document.getElementById("#GameCanvas");
const ctx = canvas.getContext("2d");

function Drawscene() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    CharacterList.forEach(e => {
        e.draw();
    });
}

function gameLoop() {
    drawScene();
    requestAnimationFrame(gameLoop);
}