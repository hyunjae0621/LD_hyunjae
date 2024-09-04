let canvas, ctx;
let gameInterval;
let blocks = [];
let speed = 2; // 기본 속도
let energy = 100; // 에너지 초기값
let score = 0;
let difficulty;

function startGame(selectedDifficulty) {
    difficulty = selectedDifficulty;
    setDifficulty(difficulty);
    document.getElementById('difficulty-selection').style.display = 'none';
    document.getElementById('game').style.display = 'block';
    canvas = document.getElementById('game-canvas');
    ctx = canvas.getContext('2d');
    gameInterval = setInterval(updateGame, 20); // 20ms 간격으로 게임 업데이트
    createBlock();
}

function setDifficulty(difficulty) {
    if (difficulty === 'easy') {
        speed = 2;
    } else if (difficulty === 'normal') {
        speed = 4;
    } else if (difficulty === 'hard') {
        speed = 6;
    }
}

function createBlock() {
    const positions = [50, 150, 250, 350, 450, 550]; // 6개의 고정된 열 좌표
    const randomX = positions[Math.floor(Math.random() * positions.length)];
    let color = (randomX === 150 || randomX === 450) ? 'blue' : 'white'; // D, K 열은 파란색, 나머지는 흰색
    blocks.push({ x: randomX, y: 0, color: color });
}

function updateGame() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawLanes(); // 열 구분선을 그립니다.
    drawBlocks();
    drawEnergyBar();

    if (Math.random() < 0.02) { // 확률적으로 블록 생성
        createBlock();
    }
    
    blocks.forEach(block => {
        block.y += speed;
        if (block.y > canvas.height) {
            blocks.splice(blocks.indexOf(block), 1);
            miss();
        }
    });
}

function drawLanes() {
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 2;
    for (let i = 1; i < 6; i++) { // 6개의 열을 구분하는 선을 그립니다.
        ctx.beginPath();
        ctx.moveTo(i * 100, 0);
        ctx.lineTo(i * 100, canvas.height);
        ctx.stroke();
    }
}

function drawBlocks() {
    blocks.forEach(block => {
        ctx.fillStyle = block.color;  // 블록 색상을 설정
        ctx.fillRect(block.x, block.y, 40, 40);
    });
}

function drawEnergyBar() {
    const energyBar = document.getElementById('energy-bar');
    energyBar.style.height = energy + '%';
    if (energy > 50) {
        energyBar.style.backgroundColor = 'green';  // 에너지가 50% 이상일 때 녹색
    } else if (energy > 20) {
        energyBar.style.backgroundColor = 'yellow';  // 에너지가 20% 이상일 때 노란색
    } else {
        energyBar.style.backgroundColor = 'red';  // 에너지가 20% 이하일 때 빨간색
    }

    if (energy <= 0) {
        gameOver();
    }
}

function miss() {
    energy -= 10;  // 에너지를 10 감소
    document.getElementById('result').textContent = 'Miss';
    setTimeout(() => document.getElementById('result').textContent = '', 1000);
}

function keyPressed(event) {
    const keyMap = { 'S': 50, 'D': 150, 'F': 250, 'J': 350, 'K': 450, 'L': 550 };  // 각 키에 해당하는 x 위치 맵핑
    const key = event.key.toUpperCase();
    if (keyMap[key]) {
        let hit = false;
        blocks.forEach(block => {
            if (block.x === keyMap[key] && block.y > canvas.height - 100 && block.y < canvas.height - 60) {
                score++;
                energy = Math.min(100, energy + 5);  // 에너지를 최대 100까지 증가
                document.getElementById('result').textContent = 'Perfect';
                hit = true;
                blocks.splice(blocks.indexOf(block), 1);  // 블록을 제거
            } else if (block.x === keyMap[key] && block.y > canvas.height - 120 && block.y < canvas.height - 40) {
                score++;
                energy = Math.min(100, energy + 2);  // 에너지를 조금 증가
                document.getElementById('result').textContent = 'Good';
                hit = true;
                blocks.splice(blocks.indexOf(block), 1);  // 블록을 제거
            }
        });
        if (!hit) {
            miss();  // 적중하지 않으면 미스 처리
        }
        setTimeout(() => document.getElementById('result').textContent = '', 1000);
    }
}

// 게임 오버 시 호출되는 함수
function gameOver() {
    clearInterval(gameInterval);  // 게임 루프를 중지합니다
    document.getElementById('game').style.display = 'none';  // 게임 화면을 숨깁니다
    document.getElementById('game-over').style.display = 'block';  // 게임 오버 화면을 표시합니다
}

// 게임을 재시작하는 함수
function restartGame() {
    blocks = [];  // 블록 배열을 초기화
    energy = 100;  // 에너지를 100으로 초기화
    score = 0;  // 점수를 0으로 초기화
    document.getElementById('game-over').style.display = 'none';  // 게임 오버 화면을 숨깁니다
    document.getElementById('game').style.display = 'block';  // 게임 화면을 표시합니다
    gameInterval = setInterval(updateGame, 20);  // 게임 루프를 다시 시작합니다
    createBlock();  // 새로운 블록을 생성합니다
}

// 게임 종료 시 호출되는 함수
function endGame() {
    document.getElementById('game-container').innerHTML = '<h2>Thank you for playing!</h2>';  // 종료 메시지를 표시합니다
}

// 키 이벤트 리스너를 설정
window.addEventListener('keydown', keyPressed);
