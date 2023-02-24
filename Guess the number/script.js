'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;
const guesMessage = document.querySelector('.guess-message');
const question = document.querySelector('.question');
const body = document.querySelector('body');
const highscore = document.querySelector('.highscore');
const setScore = document.querySelector('.score');
const setInputNumber = document.querySelector('.number-input');

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  //No imput
  if (!guessingNumber) {
    guesMessage.textContent = 'Imput some number';
    //Player won!
  } else if (guessingNumber === secretNumber) {
    guesMessage.textContent = 'You are Right!';
    question.textContent = secretNumber;
    body.style.backgroundColor = 'rgb(97,196,150)';
    question.style.width = '50rem';

    if (score > hightscore) {
      hightscore = score;
      highscore.textContent = hightscore;
    }

    //If the entered number is greater than the secret
  } else if (guessingNumber !== secretNumber) {
    if (score > 1) {
      guesMessage.textContent =
        guessingNumber > secretNumber ? 'Too much ((' : 'Too few';
      score--;
      setScore.textContent = score;
    } else {
      guesMessage.textContent = 'You Lose';
      setScore.textContent = 0;
      body.style.backgroundColor = 'rgb(236,28,35)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  question.textContent = '???';
  question.style.width = '25rem';
  body.style.backgroundColor = 'rgb(0, 0, 0)';
  guesMessage.textContent = 'Start guessing!';
  setScore.textContent = score = 20;
  document.querySelector('.number-input').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
