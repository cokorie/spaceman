## Spaceman Pseudocode

_1) Define required constants_
  1.1) Create seperate <div> tags in the HTML for each letter of the alphabet, for the player to select from for the puzzle.
  1.2) Use a picture that will slowly unveil throughout the game, as the player gets the letter in a given word incorrect.

_2) Define required variables used to track the state of the game_
  2.1) Use an array (word) in the JavaScript code set to represent the word choices for the selected word in the game.
    2.1.1) Parse the elements of each word into letter, for being tied to their designated spots for the letter display on the browser.
  2.2) Create a variable for determining when the player has either won or lost the game.
  2.3) Create a variable for choosing from the words used in the game at random, for the player to guess from.

_3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant._
  3.1) Store the parsed out elements of the words the players will guess from, to be stored into the open spaces for letters on the screen. [refer to step 2.1.1]

_4) Upon loading the app should:_
	4.1) Initialize the state variables
        4.1.1) Initialize the word array for the game, that will be kept track of, for the player to choose letters to guess from.
            4.1.1.1) The letters for each word choice will be selected as the word is randomly selected between for the game each round.
        4.1.2) Initialize the winner variable for determing whether the player has won or lost the game.
        4.1.3) Initialize the variable for unveiling the picture of the Spaceman, as the player gets a letter choice incorrect.
	4.2) Render those values to the page
        4.2.1) Render the word choice:
            4.2.1.1) Select a random word from the word array, and create a function that will parse the given word into seperate letters.
                4.2.1.1.1) Assign the given letters to the empty letter spaces on the browser.
            4.2.1.2) The player will choose from the A-Z letter choices at the bottom of the browser page, to select which letters will make up the word needed to win the game.
        4.2.2) Render the end game message:
            4.2.2.1) If the winner variable returns that the player has not selected the correct letters, but their 8 chances have not expired yet, render no message
            4.2.2.2) If the winner returns that the player has not selected the correct letters in the 8 chances given, render a lose message with the replay button & randomly select another word from the word array
            4.2.2.3) If the winner variable returns that the player has won the game, render a winning message and unhide the replay button for another game.
	4.3) Wait for the user to click a letter choice for the given word


_5) Handle a player clicking a letter square_
    5.1) Check into the function dictating which letter is clicked upon for the game
        5.1.1) As the function is checked, check through the empty spaces on the browser page to see if the clicked upon letter matches any of the spaces on the screen.
    5.2) If the letter selected by the player matches one of the empty spaces in the game, add that letter to the space(s) and allow the player to select another letter.
    5.3) Allow for selection of letters by the players, if the given values of the function are not empty or the 8 chances to select a correct letter have not expired.
    5.4) If the player wins the game:
        5.4.1) Display a winning message, and reveal the replay button for trying another random word.
    5.5) If the player loses the game:
        5.5.1) Display a lose message, and reveal the replay button for trying another random word as well.
    5.6) Replay button will allow the browser game to generate another random word from the word array, and start the process all over again for a new game.

_6) Handle a player clicking the replay button_
    6.1) Refer to 4.1.2 (initialization) & 5.6 (render).