/*----- constants -----*/
const words = ['CAT', 'DOG', 'HUMAN', 'BUG', 'BEAR'];

/*----- app's state (variables) -----*/
let board;
let winner;
  
/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#ltr > button');
const msgEl = document.querySelector('h2');
const replayEl = document.getElementById('#replay');
const astroPic = document.getElementById('#astro');

/*----- event listeners -----*/
document.querySelector('#ltr')
  .addEventListener('click', letterClick);
  
/*----- functions -----*/
init();

function init() {
    
board = [
    ['_', '_', '_'],                     // cat
    ['_', '_', '_'],                     // dog
    ['_', '_', '_', '_', '_'],         // human
    ['_', '_', '_'],                     // bug
    ['_', '_', '_', '_'],               // bear
];
winner = null;
render();
}

function letterClick(evt)   {
    const buttonText = evt.target.innerText;
    console.log(buttonText);

    const wordIndex = randomWordIndex();

}

function render() {
    // replayEl.style.visibility = winner ? 'visible' : 'hidden';
    console.log(board[findWordsIndex]);
    renderWord(findWordsIndex);
  }

function renderWord(wordIndex) {

  let wordMsg = board[wordIndex].toString();
  for (let i = 0; i < wordMsg.length; i++) {
      wordMsg = wordMsg.replace(',', ' ');
  }
  msgEl.innerHTML = wordMsg;
}

function randomWordIndex() {
  const chosenWord = words[Math.floor(Math.random() * words.length)];
  // console.log(chosenWord);
  const findWordsIndex = words.findIndex(word => word === chosenWord);
  // console.log(findWordsIndex);
  return findWordsIndex;
}

function boardChange (buttonText, wordIndex) {
  const chosenWord = word[wordIndex];
  if (chosenWord.includes(buttonText)) {
    // board[wordIndex][0] = ;
  }
  board[wordIndex];
}