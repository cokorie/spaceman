/*----- constants -----*/
const words = ['THE BIRD IS THE WORD', 'TOP OF THE MORNING', 'I AM ONLY HUMAN', 'HAVE A GREAT DAY', 
'LOVE IS THE ANSWER', 'THE MONSTER MASH', 'THE SOLAR SYSTEM', 'THE MILKY WAY', 'ANDROMEDA', 
'EYE OF SAURON', 'ROCKETMAN', 'TRIANGULUM GALAXY', 'SCORPIUS', 'MERCURY', 'APOLLO THIRTEEN', 
'MAE JEMISON', 'YVONNE CAGLE', 'NEIL ARMSTRONG', 'STRAIGHT TO THE MOON', 'IF YOU ARE READING THIS GREAT JOB', 
'SHOOT FOR THE STARS', 'AIM FOR THE MOON', 'EXTRA TERRESTRIAL', 'WE ARE NOT ALONE', 'STAY UP AND STAY POSITIVE', 
'YOU ARE DOING GREAT'];
const MAX_WRONG_GUESSES = 6;
const SPRITE_WIDTH = 504;
// const sounds = {
//   laser: 'https://freesound.org/s/376694/',
//   asteroid: 'https://freesound.org/s/565846/',
// };

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
// const player = new Audio();

/*----- event listeners -----*/
document.querySelector('#ltr')
  .addEventListener('click', letterClick);
replayEl.addEventListener('click', init);
// document.querySelector('button').addEventListener('click', buttonSounds);


/*----- functions -----*/

// function buttonSounds(evt) {
//   const button = evt.target.textContent
//   if (

//   )
// }

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
    // rebuild guessWord so that it includes the letter, possibly in multiple positions
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
  render();
  renderMsg();
}

function render() {
  replayEl.style.visibility = winOrLoss ? 'visible' : 'hidden';
  guessEl.textContent = guessWord;
  letterEls.forEach((btn) => {
    if (guessWord.includes(btn.innerText)) {
      btn.style.backgroundColor = 'green';
    } else if (wrongLetters.includes(btn.innerText)) {
      btn.style.backgroundColor = 'red';
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
  } else if (wrongLetters.length === 1) {
    msgEl.innerHTML = '5 guesses left!';
  } else if (wrongLetters.length === 2) {
    msgEl.innerHTML = '4 guesses left!';
  } else if (wrongLetters.length === 3) {
    msgEl.innerHTML = '3 guesses left!';
  } else if (wrongLetters.length === 4) {
    msgEl.innerHTML = '2 guesses left!';
  } else if (wrongLetters.length === 5) {
    msgEl.innerHTML = '1 guess left!';
  } else if (winOrLoss === 'L') {
      msgEl.innerHTML = 'GAME OVER! TRY AGAIN!';
  } else {
    msgEl.innerHTML = '';
  }
}