'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;

const displayMessage = function(message) {
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

 //Quando não há entrada
  if (!guess) {
    displayMessage('⛔️ Sem Numero!');

  //Quando o jogador vence
  } else if(guess === secretNumber) {
    displayMessage('🎉 Numero Correto!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }

  //Quando o palpite está errado
  } else if(guess !== secretNumber){
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Muito Alto!' : '📉 Muito Baixo!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 Você perdeu o jogo!');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Comece a adivinhar...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//FIM!!