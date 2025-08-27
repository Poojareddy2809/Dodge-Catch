const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = 400;
canvas.height = 600;

let player = {
  x: canvas.width / 2 - 20,
  y: canvas.height - 40,
  width: 40,
  height: 40,
  speed: 5
};

let keys = {};
let stars = [];
let score = 0;
let gameRunning = false;

document.addEventListener("keydown", (e) => keys[e.key] = true);
document.addEventListener("keyup", (e) => keys[e.key] = false);

function startGame() {
  score = 0;
  stars = [];
  gameRunning = true;
  gameLoop();
}

function drawPlayer() {
  ctx.fillStyle = "yellow";
  ctx.fillRect(player.x, player.y, player.width, player.height);
}

function drawStars() {
  ctx.fillStyle = "white";
  stars.forEach((star) => {
    ctx.beginPath();
    ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    ctx.fill();
  });
}

function updateStars() {
  if (Math.random() < 0.03) {
    stars.push({ x: Math.random() * canvas.width, y: 0, radius: 5 });
  }

  stars.forEach((star, index) => {
    star.y += 3;

    if (star.y > canvas.height) {
      stars.splice(index, 1);
    }

    if (
      star.x > player.x &&
      star.x < player.x + player.width &&
      star.y > player.y &&
      star.y < player.y + player.height
    ) {
      stars.splice(index, 1);
      score++;
    }
  });
}

function drawScore() {
  ctx.fillStyle = "white";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 10, 20);
}

function movePlayer() {
  if (keys["ArrowLeft"] && player.x > 0) {
    player.x -= player.speed;
  }
  if (keys["ArrowRight"] && player.x < canvas.width - player.width) {
    player.x += player.speed;
  }
}

function gameLoop() {
  if (!gameRunning) return;

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  movePlayer();
  drawPlayer();
  updateStars();
  drawStars();
  drawScore();

  requestAnimationFrame(gameLoop);
}
