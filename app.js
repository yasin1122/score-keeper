const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const playingTo = document.querySelector('#playingTo');

let winningScore = parseInt(playingTo.value);

playingTo.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
});

p1Button.addEventListener('click', function () {
    if (p1Score.innerText < winningScore && p2Score.innerText < winningScore) {
        p1Score.innerText = parseInt(p1Score.innerText) + 1;
        scorePainter();
    }
    
});
p2Button.addEventListener('click', function () {
    if (p1Score.innerText < winningScore && p2Score.innerText < winningScore) {
        p2Score.innerText = parseInt(p2Score.innerText) + 1;
        scorePainter();
    }
    
});
resetButton.addEventListener('click', function () {
    reset();
});

const reset = () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    scorePainter();
}

const scorePainter = () => {
    if (p1Score.innerText === p2Score.innerText) {
        p1Score.style.color = 'black';
        p2Score.style.color = 'black';
    } else if (p1Score.innerText > p2Score.innerText) {
        p1Score.style.color = 'green';
        p2Score.style.color = 'red';
    } else {
        p1Score.style.color = 'red';
        p2Score.style.color = 'green';
    }
}

