const gameContainer = document.getElementById('game-container');

// 创建气泡
for (let i = 0; i < 36; i++) {
    const bubble = document.createElement('div');
    bubble.classList.add('bubble');
    // 点击事件
    bubble.addEventListener('click', () => {
        if (!bubble.classList.contains('popped')) {
            bubble.classList.add('popped');
            playPopSound(); // 播放声音
        }
    });
    gameContainer.appendChild(bubble);
}

// 播放气泡破裂声音
function playPopSound() {
    const audio = new Audio('https://www.soundjay.com/button/beep-07.mp3');
    audio.play();
}