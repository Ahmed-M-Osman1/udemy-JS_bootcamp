// andrew solution:
class Hangman {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split("");
    this.remainingGuesses = remainingGuesses;
    this.guessedLetters = [" "]; // if there is a space will count correct - this will make the game work perfectly.
    this.status = "playing";
  }

  calculateStatus() {
    //very hard to understand.
    const finished = this.word.every((letter) =>
      this.guessedLetters.includes(letter)
    );
    if (this.remainingGuesses === 0) {
      this.status = "failed";
    } else if (finished) {
      this.status = "finished";
    } else {
      this.status = "playing";
    }
  }

  get statusMessage() {
    if (this.status === "playing") {
      return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "failed") {
      return `Nice try! The word was "${this.word.join("")}".`;
    } else {
      return "Great work! You guessed the word.";
    }
  }

  get puzzle() {
    let puzzle = "";
    this.word.forEach((letter) => {
      if (this.guessedLetters.includes(letter) || letter === " ") {
        puzzle += letter;
      } else {
        puzzle += "*";
      }
    });
    return puzzle;
  }
  makeGuess(guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetters.includes(guess);
    const isBadGuess = !this.word.includes(guess);
    if (this.status !== "playing") {
      return;
    }
    if (isUnique) {
      this.guessedLetters.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}

/*              // my solution // 
const HangmanGame = function(word, numberOfGussies){
    this.word = word.toLowerCase().split('')
    this.numberOfGussies = numberOfGussies

}

HangmanGame.prototype.Guessed = function (theLetter){
    let staredLatter = '*'
    // put the * and if there is space put the space.
    this.word.forEach((latter)=>{
        if (latter === ' ') {
            staredLatter += ' '
        } else if (latter === theLetter){
            staredLatter += theLetter
        }else {
        staredLatter += '*'
        }
    })
    console.log(staredLatter)
}
const HangmanGame1 = new HangmanGame('Try me',2)
HangmanGame1.Guessed('m')
HangmanGame1.Guessed('e')
console.log(HangmanGame1) */
