
const Dictionary = require("./dictionary.js");

class Game {
  constructor(ctx, currentWord, wordInput, scoreShow){
    this.ctx = ctx;
    this.currentWord = currentWord;
    this.wordInput = wordInput;
    this.scoreShow = scoreShow;

    this.wordsArr = [];
    this.score = 0;
    this.yAxis = Math.floor(Math.random() * 700); //should be 0 initially
    this.xAxis = Math.floor(Math.random() * 1000);

    this.dictionary = new Dictionary();

    this.start = this.start.bind(this);
    this.match = this.match.bind(this);
  }

  start() {
    this.currentWord.innerHTML = this.dictionary.returnWord();
    // this.moveWord();
    this.wordInput.addEventListener('input', this.match);
    this.scoreShow.innerHTML = 0;
  }

  

  match() {
    if (this.wordInput.value === this.currentWord.innerHTML) {
      this.currentWord.innerHTML = this.dictionary.returnWord();
      this.wordInput.value = '';
      this.score++;
      this.scoreShow.innerHTML = this.score;

      // this.ctx.font = '50px serif';
      this.ctx.fillText(this.dictionary.returnWord(), 100, 0);
    }
  }

  // addWord() {
  //   this.wordsArr.push(this.dictionary.returnWord());
  //   for (let i = 0; i < this.wordsArr.length; i++) {
  //     this.showWord(this.wordsArr[i]);
  //   }
  // }

  // showWord(word) {
  //   for(let i=0; i<this.wordsArr.length; i++){

  //   }
  // }


  // moveWord() {
  //   setInterval(() => {
  //     this.yAxis++;
  //   }, 10)

  // }

}

module.exports = Game;