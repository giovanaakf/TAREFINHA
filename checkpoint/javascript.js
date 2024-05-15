const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: 50,
    width: 20,
    height: 20,
    speed: 5,
    lives: 3,
    checkpoint: { x: 50, y: 50 } // coordenadas do checkpoint inicial
};

function drawPlayer() {
    ctx.fillStyle = 'red';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function update() {
    // lógica de atualização do jogo aqui
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
}

function gameLoop() {
    update();
    render();
    requestAnimationFrame(gameLoop);
}

gameLoop();

// Função para definir um novo checkpoint
function setCheckpoint(x, y) {
    player.checkpoint.x = x;
    player.checkpoint.y = y;
}

// Exemplo de uso: definindo um novo checkpoint quando o jogador alcança um determinado ponto
// Coloque isso onde o jogador alcança um checkpoint específico
// setCheckpoint(300, 200);

// Função para fazer o jogador renascer no último checkpoint
function respawn() {
    player.x = player.checkpoint.x;
    player.y = player.checkpoint.y;
    player.lives--; // Reduzir uma vida ao renascer
    console.log("Player respawned at checkpoint. Lives remaining:", player.lives);
    // Adicione aqui lógica adicional, como atualizar a exibição das vidas do jogador ou recarregar inimigos.
}

// Exemplo de uso: quando o jogador morre
// respawn();

// Exemplo de detecção de colisão (usando retângulos simples para este exemplo)
function checkCollisions() {
    // Aqui você colocaria a lógica para verificar se o jogador colidiu com algum obstáculo
    // Se houver uma colisão, chame a função respawn()
}

// Exemplo de uso: chamando a função de detecção de colisões periodicamente
// setInterval(checkCollisions, 1000); // Isso verifica a colisão a cada segundo
