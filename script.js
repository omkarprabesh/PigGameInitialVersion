'use strict';

const rollDice = document.querySelector('.btn--roll');
const player1ScoreSign = document.querySelector('#score--0');
const player1CurrentSign = document.querySelector('#current--0');
const player2ScoreSign = document.querySelector('#score--1');
const player2CurrentSign = document.querySelector('#current--1');
const image = document.querySelector('.dice');
const holdButton = document.querySelector('.btn--hold');
const resetButton = document.querySelector('.btn--new');
const player1Effect = document.querySelector('.player--0');
const player2Effect = document.querySelector('.player--1');

let diceNumber;
//let player1Score = 0;
let player1CurrentScore = 0;

//let player2Score = 0;
let player2CurrentScore = 0;

let currentPlayer = 0;

const switchPlayer = function () {
  if (currentPlayer === 0) {
    currentPlayer = 1;
    player1Effect.classList.remove('player--active');
    player2Effect.classList.add('player--active');
  } else {
    currentPlayer = 0;
    player2Effect.classList.remove('player--active');
    player1Effect.classList.add('player--active');
  }
};
holdButton.addEventListener('click', function () {
  if (currentPlayer === 0 && player1CurrentScore >= 100) {
    player1ScoreSign.textContent = 'Player 1 Won!';
  } else if (currentPlayer === 1 && player2CurrentScore >= 100) {
    player2ScoreSign.textContent = 'Player 2 Won!';
  } else switchPlayer();
});
// if (holdButton.classList.contains('switch')) {
//   if (player1CurrentScore >= 100) {
//     player1ScoreSign.textContent = 'Player 1 Won!';
//   } else holdButton.classList.remove('switch');
// } else {
//   if (player2CurrentScore >= 100) {
//     player2ScoreSign.textContent = 'Player 2 Won!';
//   } else holdButton.classList.add('switch');
// }

resetButton.addEventListener('click', function () {
  //player1Score = 0;
  player1CurrentScore = 0;

  //player2Score = 0;
  player2CurrentScore = 0;
  player1CurrentSign.textContent = 0;
  player1ScoreSign.textContent = player1CurrentScore;
  player2CurrentSign.textContent = 0;
  player2ScoreSign.textContent = player2CurrentScore;
  if (currentPlayer === 1) {
    currentPlayer = 0;
    player2Effect.classList.remove('player--active');
    player1Effect.classList.add('player--active');
  }

  // currentPlayer = 0;
  // player2Effect.classList.remove('player--active');
  // player1Effect.classList.add('player--active');
  // if (holdButton.classList.contains('switch'))
  //   holdButton.classList.remove('switch');
});

const rollDiceResult = function () {
  diceNumber = Math.trunc(Math.random() * 6) + 1;
  // if (!holdButton.classList.contains('switch'))
  if (currentPlayer === 0) {
    if (diceNumber === 1) {
      //player1Score = 0;
      player1CurrentScore = 0;
      player1CurrentSign.textContent = diceNumber;
      player1ScoreSign.textContent = player1CurrentScore;
      image.src = `dice-1.png`;
      switchPlayer();
      // holdButton.classList.add('switch');
    } else {
      player1CurrentScore += diceNumber;
      player1ScoreSign.textContent = player1CurrentScore;
      image.src = `dice-${diceNumber}.png`;
      player1CurrentSign.textContent = diceNumber;
    }
  } else {
    if (diceNumber === 1) {
      //player1Score = 0;
      player2CurrentScore = 0;
      player2CurrentSign.textContent = diceNumber;
      player2ScoreSign.textContent = player2CurrentScore;
      image.src = `dice-1.png`;
      switchPlayer();
      // holdButton.classList.remove('switch');
    } else {
      player2CurrentScore += diceNumber;
      player2ScoreSign.textContent = player2CurrentScore;
      image.src = `dice-${diceNumber}.png`;
      player2CurrentSign.textContent = diceNumber;
    }
  }
};

rollDice.addEventListener('click', rollDiceResult);
