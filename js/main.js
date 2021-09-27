/*----- constants -----*/
const words = [];

/*----- app's state (variables) -----*/
let board;
let winner;
  
/*----- cached element references -----*/
const letterEls = document.querySelectorAll('#ltr' > section).textContent;
const msgEl = document.querySelector('h2');
const btnEl = document.querySelector('#replay' > section);
  
/*----- event listeners -----*/
document.getElementById('#ltr')
  .addEventListener('click', letterClick);
  
/*----- functions -----*/
init();

function init() {
    
board = [
    [null, null, null],                     // cat
    [null, null, null],                     // dog
    [null, null, null, null, null],         // human
    [null, null, null],                     // bug
    [null, null, null, null],               // bear
];
winner = null;
render();
}

function letterClick(evt)   {
    const letters = letterEls.indexOf(evt.target);

}

function render() {
    btnEl.style.visibility = winner ? 'visible' : 'hidden';
  }