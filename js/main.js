/*----- constants -----*/
const words = ['THE BIRD IS THE WORD', 'TOP OF THE MORNING', 'I AM ONLY HUMAN', 'HAVE A GREAT DAY', 
'LOVE IS THE ANSWER', 'THE MONSTER MASH', 'THE SOLAR SYSTEM', 'THE MILKY WAY', 'ANDROMEDA', 
'EYE OF SAURON', 'ROCKETMAN', 'TRIANGULUM GALAXY', 'SCORPIUS', 'MERCURY', 'APOLLO THIRTEEN', 
'MAE JEMISON', 'YVONNE CAGLE', 'NEIL ARMSTRONG', 'STRAIGHT TO THE MOON', 'IF YOU ARE READING THIS GREAT JOB', 
'SHOOT FOR THE STARS', 'AIM FOR THE MOON', 'EXTRA TERRESTRIAL', 'WE ARE NOT ALONE', 'STAY UP AND STAY POSITIVE', 
'YOU ARE DOING GREAT', 'GUARDIANS OF THE GALAXY', 'AVENGERS ASSEMBLE'];
const MAX_WRONG_GUESSES = 6;
const SPRITE_WIDTH = 504;

/*----- app's state (variables) -----*/
let secretWord;
let guessWord;
let winOrLoss;
let wrongLetters;

/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#ltr > button');
const msgEl = document.querySelector('h2');
const replayEl = document.getElementById('replay');
let astroPic = document.getElementById('astro');
const guessEl = document.getElementById('guess');
const laserPlayer = new Audio('http://www.freesound.org/data/previews/42/42106_70164-lq.mp3');
const sirenPlayer = new Audio('http://www.freesound.org/data/previews/336/336899_4939433-lq.mp3');
const clickPlayer = new Audio('https://www.fesliyanstudios.com/play-mp3/387');

/*----- event listeners -----*/
document.querySelector('#ltr').addEventListener('click', letterClick);
replayEl.addEventListener('click', init);


/*----- functions -----*/
init();

function init() {
  secretWord = words[Math.floor(Math.random() * words.length)];
  winOrLoss = null;
  wrongLetters = '';
  guessWord = '';
  for (let letter of secretWord) {
    guessWord += letter === ' ' ? ' ' : '_';

  }
  render();
}

function letterClick(evt) {
  const letter = evt.target.innerText;
  if (
    evt.target.tagName !== 'BUTTON' ||
    winOrLoss ||
    wrongLetters.includes(letter) ||
    guessWord.includes(letter)
  ) return;
  if (secretWord.includes(letter)) {
    let newGuessWord = '';
    for (let i = 0; i < secretWord.length; i++) {
      if (secretWord.charAt(i) === letter) {
        newGuessWord += letter;
      } else {
        newGuessWord += guessWord.charAt(i);
      }
    }
    guessWord = newGuessWord;
  } else {
    wrongLetters += letter;
  }
  winOrLoss = getWinOrLoss();
  if(winOrLoss === 'L') {
    guessWord = secretWord;
  }
  render();
  renderMsg();
}

function render() {
  replayEl.style.visibility = winOrLoss ? 'visible' : 'hidden';
  guessEl.textContent = guessWord;
  letterEls.forEach((btn) => {
    if (guessWord.includes(btn.innerText)) {
      btn.style.backgroundColor = 'green';
      clickPlayer.play();
    } else if (wrongLetters.includes(btn.innerText)) {
      btn.style.backgroundColor = 'red';
      clickPlayer.play();
    } else {
      btn.style.backgroundColor = 'gray';
    }
  });
  astroPic.style.backgroundPositionX = `${-SPRITE_WIDTH * wrongLetters.length}px`;
  renderMsg();
}

function getWinOrLoss() {
  if (secretWord === guessWord) {
    return 'W';
  } else if (wrongLetters.length === MAX_WRONG_GUESSES) {
    return 'L';
  } else {
    return null;
  }
}

function renderMsg () {
  if (winOrLoss === 'W') {
    msgEl.innerHTML = `CONGRATULATIONS! YOU'VE WON!`;
    laserPlayer.play();
  } else if (winOrLoss === 'L') {
    msgEl.innerHTML = 'GAME OVER! TRY AGAIN!';
    sirenPlayer.play();
  } else {
    msgEl.innerHTML = `${6 - wrongLetters.length} guesses left!`;
  }
}