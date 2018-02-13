var turnEle = document.querySelector('body')
var squares = document.querySelectorAll('td');
var continueButton = document.querySelectorAll('button');

var winSetup = ['one', 'two', 'three','four', 'five', 'six','seven', 'eight', 'nine']

var one = document.querySelector('.one')
var two = document.querySelector('.two')
var three = document.querySelector('.three')
var four = document.querySelector('.four')
var five = document.querySelector('.five')
var six = document.querySelector('.six')
var seven = document.querySelector('.seven')
var eight = document.querySelector('.eight')
var nine = document.querySelector('.nine')

var winConditions = [
[one, two, three],
[four, five, six],
[seven, eight, nine],
[one, four, seven],
[two, five, eight],
[three, six, nine],
[one, five, nine],
[three, five, seven]]

squares.forEach(function(square){
    square.addEventListener('click', ele);
});

function isAWin() {
  winConditions.forEach(function(condition) {
    if (condition[0].innerText === 'X' && condition[1].innerText === 'X' && condition[2].innerText === 'X') {
      condition[0].classList.add('win');
      condition[1].classList.add('win');
      condition[2].classList.add('win');
      createContinue();
    } else if (condition[0].innerText === 'O' && condition[1].innerText === 'O' && condition[2].innerText === 'O') {
      condition[0].classList.add('win');
      condition[1].classList.add('win');
      condition[2].classList.add('win');
      createContinue();
    }
  });
}

function createContinue() {
  var continueButton = document.createElement('BUTTON');
  continueButton.classList.add('button');
  continueButton.innerText = 'Another One'
  turnEle.appendChild(continueButton);
  continueButton.addEventListener('click', resetGame);
  squares.forEach(function(square){
      square.removeEventListener('click', ele);
  });
}

function resetGame() {
  var continueButton = document.querySelector('.button');
  continueButton.remove();
  squares.forEach(function(square){
      square.addEventListener('click', ele);
      square.classList.remove('win');
      square.classList.remove('mark');
      square.innerText = '';
  });
}

function ele(e) {
  turnChange(e);
  if (turnEle.classList.contains('o')) {
    e.target.innerText = 'X';
    e.target.classList = 'mark';
    isAWin();
  } else {
    e.target.innerText = 'O';
    e.target.classList = 'mark';
    isAWin();
  }
}

function turnChange(e) {
  if (e.target.classList.contains('mark')) {
    false
  } else {
    turnEle.classList.toggle('x');
    turnEle.classList.toggle('o');
  }
}
