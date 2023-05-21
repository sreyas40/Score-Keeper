const p1Score = document.querySelector('#pl_score');
const p2Score = document.querySelector('#p2_score');
const matchPointSelect = document.querySelector('#selectmp');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');
const reset = document.querySelector('.reset');


let player1Score = 0;
let player2Score = 0;

const player1Update = () => {
    if ((player1Score < matchPointSelect.value) && (player2Score < matchPointSelect.value)) {
        player1Score += 1;
        finalResult();
    }
    console.log(player1Score)
    p1Score.innerText = player1Score;

};
player1.addEventListener('click', player1Update);

const player2Update = () => {
    if ((player1Score < matchPointSelect.value) && (player2Score < matchPointSelect.value)) {
        player2Score += 1;
        finalResult();
    }
    p2Score.innerText = player2Score;

};
player2.addEventListener('click', player2Update);

reset.addEventListener('click', () => {
    p2Score.innerText = '0';
    p1Score.innerText = '0';
    player1Score = 0;
    player2Score = 0;
    p1Score.style.color = "black";
    p2Score.style.color = "black";
})

function finalResult() {
    if (player1Score == matchPointSelect.value || player2Score == matchPointSelect.value) {
        if (player1Score > player2Score) {
            p1Score.style.color = "green";
            p2Score.style.color = "red";
        }
        else {
            p1Score.style.color = "red";
            p2Score.style.color = "green";
        }
    }
}