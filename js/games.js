/* =====================================
   EMOJI TIC TAC TOE GAME
===================================== */

const cells = document.querySelectorAll('.cell');
let currentPlayer = '❤️';
let board = Array(9).fill(null);
let gameOver = false;

const winningCombos = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if (board[index] || gameOver) return;

        board[index] = currentPlayer;
        cell.textContent = currentPlayer;

        if (checkWin()) {
            gameOver = true;
            showDogSurprise();
            return;
        }

        currentPlayer = currentPlayer === '❤️' ? '🥰' : '❤️';
    });
});

function checkWin() {
    return winningCombos.some(combo => {
        return combo.every(index => board[index] === currentPlayer);
    });
}

/* =====================================
   DOG SURPRISE AFTER WIN
===================================== */

function showDogSurprise() {
    const dogs = [
        'assets/dogpics/dog1.jpg',
        'assets/dogpics/dog2.jpg',
        'assets/dogpics/dog3.jpg'
    ];

    const randomDog = dogs[Math.floor(Math.random() * dogs.length)];

    setTimeout(() => {
        alert("You won! 🐶💕\nEven this dog thinks you're special!");
        const img = document.createElement('img');
        img.src = randomDog;
        img.style.width = '150px';
        img.style.borderRadius = '15px';
        document.getElementById('screen-games').appendChild(img);
    }, 300);
}

/* =====================================
   CANDLE BLOW INTERACTION
===================================== */

function blowCandle() {
    const candle = document.getElementById('candle');

    candle.style.background = '#ccc';
    candle.style.boxShadow = 'none';
    candle.style.opacity = '0.6';

    // Play soft chime
    const blowSound = new Audio('assets/soundeffects/chime.wav');
    blowSound.volume = 0.4;
    blowSound.play();
}
