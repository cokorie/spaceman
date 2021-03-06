# Spaceman

### __Welcome to Chijioke's Spaceman!__
The objective of winning Spaceman is to be able to identify the secret word, displayed in underscore spaces in the website window, before the 6 alotted chances to do so have been used.

The player will be able to click on the letter buttons at the bottom of the page to begin guessing any given letter in the word. As each letter guess is either correct or incorrect, the corresponding button will update its background color from gray to green (correct guess) or red (incorrect guess). After the player has guessed a given letter, the letter will not be able to be re-selected and the game will play a mouse click sound.

Also, as each incorrect guess is given, an image of a "Spaceman" will slowly be unveiled in 6 parts, for each incorrect guess. When the entire "Spaceman" is visible, the player has lost the game and will have the option to replay by clicking the "Replay?" button at the bottom of the page.

As each incorrect guess is given by the player, a message will also display at the top of the page to let them know how many guesses are still available to them. After the given guesses have finished, a message to try again will display, along with a siren sound and the replay button at the bottom of the screen.

If the player successfully guesses the word before their 6 chances are finished, a message congratulating the player on winning will display at the top of the page, along with a laser blast sound and the replay button.

When the game has finished, whether the player has won or lost, the secret word will be fully unveiled for them to observe as well.

### __Screenshots__
![Spaceman Starting Screen](/imgs/spaceman-starting-screen.png)
###### This is the starting page for Spaceman

![Spaceman Correct Letter](/imgs/spaceman_correct_letter.png)
##### Correct letter, hightlighted in green

![Spaceman Incorrect Letter](/imgs/spaceman_wrong_letter.png)
##### Incorrect letter, hightlighted in red

![Spaceman Replay Button](/imgs/spaceman_replay_button.png)
##### The replay button, displayed after you win or lose

![Spaceman Correct Answer Screen](/imgs/spaceman_correct_answer_screen.png)
##### This is the appearance of the screen with a correct answer

![Spaceman Winning Screen](/imgs/spaceman_winning_screen.png)
##### Winning Screen & "CONGRATULATIONS! YOU'VE WON!" message are displayed

![Spaceman First Incorrect Guess](/imgs/spaceman_first_wrong_answer.png)
##### First Incorrect Guess & "5 guesses left" message are displayed

![Spaceman Second Incorrect Guess](/imgs/spaceman_second_wrong_answer.png)
##### Second Incorrect Guess & "4 guesses left" message are displayed

![Spaceman Third Incorrect Guess](/imgs/spaceman_third_wrong_answer.png)
##### Third Incorrect Guess & "3 guesses left" message are displayed

![Spaceman Fourth Incorrect Guess](/imgs/spaceman_fourth_wrong_answer.png)
##### Fourth Incorrect Guess & "2 guesses left" message are displayed

![Spaceman Fifth Incorrect Guess](/imgs/spaceman_fifth_wrong_answer.png)
##### Fifth Incorrect Guess & "1 guess left" message are displayed

![Spaceman Losing Screen](/imgs/spaceman_game_over_wrong_answer.png)
##### Losing Screen & "GAME OVER! TRY AGAIN!" message are displayed

### __Technologies Used__
##### _HTML_
  The HTML code is used to house the: 
  * Game title
  * Game tagline 
  * Area for amount of guesses left 
  * Spaces for letters of the alphabet 
  * Replay button

###### _CSS_ 
  The CSS code is used to house the styling of the:
  * Font for the title 
  * Game tagline
  * Amount of guesses messages 
  * Guessing characters
  * Letter buttons 
  * Replay button 
  * Sizing & grid base for the "Spaceman" images for letter characters on the game page 
  * The different shapes of the buttons on the page
  * Background image of the game page

###### _JavaScript_ 
  The JaveScript code is used to house the functions & logic of the:
  * Rendering of the "Spaceman" image
  * Letters of the secret word
  * Random process of choosing the current secret word for the player to guess
  * Clicking of the letter buttons to fill in the guessing spaces if the letter is located in the secret guessing word
  * Mouse click sounds for clicking on the letters
  * Laser blast sound for the winning message, and siren sound for the losing message
  * Game's replay button when it is finished
  * Color change of the letters for both correct & incorrect guessed letters in the given secret word
  * Messages displayed for how many guesses the player has left, the winning & losing messages
  * The secret guessing word being unveiled at the conclusion of the game


### __Getting Started__
Please click into the following website link to check out my Spaceman game: 
* [Chijioke's Spaceman](https://cokorie.github.io/spaceman/)


### __Further Enhancements (Icebox)__
* Adding audio, for when the replay button is clicked
* Creating variables and a function to ensure there is no chance of repeating a random word in the "words" array
* Adding animation to the "Spaceman" shown on screen
* Adding a media query for the reformatting of the game window on phones & tablets