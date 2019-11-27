
const Dictionary = require("./dictionary.js");

class Game {
  constructor(ctx, currentWord, wordInput, scoreShow){
    this.ctx = ctx;
    this.currentWord = currentWord;
    this.wordInput = wordInput;
    this.scoreShow = scoreShow;

    this.score = 0;

    this.dictionary = new Dictionary();

    this.start = this.start.bind(this);
    this.match = this.match.bind(this);
  }

  start() {
    this.currentWord.innerHTML = this.dictionary.showWord();
    this.wordInput.addEventListener('input', this.match);
    this.scoreShow.innerHTML = 0;
  }

  match() {
    if (this.wordInput.value === this.currentWord.innerHTML) {
      this.currentWord.innerHTML = this.dictionary.showWord();
      this.wordInput.value = '';
      this.score++;
      this.scoreShow.innerHTML = this.score;
    }
  }
}

module.exports = Game;