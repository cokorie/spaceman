/*----- constants -----*/
const words = ['CAT', 'DOG', 'HUMAN', 'BUG', 'BEAR', 'THE MONSTER MASH'];
const MAX_WRONG_NUMBERS = 6;

/*----- app's state (variables) -----*/
let secretWord;
let guessWord;
let winOrLoss;
let wrongLetters;
  
/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#ltr > button');
const msgEl = document.querySelector('h2');
const replayEl = document.getElementById('replay');
const astroPic = document.getElementById('astro');

/*----- event listeners -----*/
document.querySelector('#ltr')
  .addEventListener('click', letterClick);
  
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
    // render();
}

function letterClick(evt)   {
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
    for(let i = 0; i < secretWord.length; i++) {
      
    }
    guessWord = newGuessWord;
  } else {
    wrongLetters += letter;
  }
}

function render() {
    // replayEl.style.visibility = winner ? 'visible' : 'hidden';
    console.log(secretWord[findWordsIndex]);
    renderWord(findWordsIndex);
  }

function renderWord(wordIndex) {

  let wordMsg = secretWord[wordIndex].toString();
  for (let i = 0; i < wordMsg.length; i++) {
      wordMsg = wordMsg.replace(',', ' ');
  }
  msgEl.innerHTML = wordMsg;
}

function randomWordIndex() {
  const findWordsIndex = words.findIndex(word => word === chosenWord);
  // console.log(findWordsIndex);
  return findWordsIndex;
}

function sWordChange (buttonText, wordIndex) {
  const chosenWord = word[wordIndex];
  if (chosenWord.includes(buttonText)) {
    // secretWord[wordIndex][0] = ;
  }
  secretWord[wordIndex];
}

function getWinOrLoss () {

}