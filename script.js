let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let hightscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guessingNumber = Number(document.querySelector('.number-input').value);

  console.log(guessingNumber);
  //No imput
  if (!guessingNumber) {
    document.querySelector('.guess-message').textContent = 'Imput some number';
    //Player won!
  } else if (guessingNumber === secretNumber) {
    document.querySelector('.guess-message').textContent = 'You are Right!';
    document.querySelector('.question').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = 'rgb(97,196,150)';
    document.querySelector('.question').style.width = '50rem';

    if (score > hightscore) {
      hightscore = score;
      document.querySelector('.highscore').textContent = hightscore;
    }

    //If the entered number is greater than the secret
  } else if (guessingNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too much ((';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(236,28,35)';
    }
    //If the entered number is less than the secret
  } else if (guessingNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.guess-message').textContent = 'Too few ((';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.guess-message').textContent = 'You Lose';
      document.querySelector('.score').textContent = 0;
      document.querySelector('body').style.backgroundColor = 'rgb(236,28,35)';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.question').textContent = '???';
  document.querySelector('.question').style.width = '25rem';
  document.querySelector('body').style.backgroundColor = 'rgb(0, 0, 0)';
  document.querySelector('.guess-message').textContent = 'Start guessing!';
  document.querySelector('.score').textContent = score = 20;
  document.querySelector('.number-input').value = '';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
});
