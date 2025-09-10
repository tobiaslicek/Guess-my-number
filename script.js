'use strict';

const secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log(secretNumber);
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent =
      'Number has to be bigger than 0';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Congratulations!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'Too high';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too low';
  }
});
