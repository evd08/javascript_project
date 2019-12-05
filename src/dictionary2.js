
const Dictionary = require("./dictionary.js");

class Game {
  constructor(ctx, currentWord, wordInput, scoreShow, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.currentWord = currentWord;
    this.wordInput = wordInput;
    this.scoreShow = scoreShow;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;

    this.index = 0;
    this.newWord = "";
    this.wordsArr = [];
    this.score = 0;
    this.oldY = 0;
    this.yAxis = 0
    this.xAxis = Math.floor(Math.random() * 1000);

    this.dictionary = new Dictionary();

    this.start = this.start.bind(this);
    this.match = this.match.bind(this);
  }

  /////////////////////////////////////////////////////////////////////////////

  addWord() {
    this.newWord = this.dictionary.returnWord();
    this.wordsArr.push(this.newWord);
    console.log(this.wordsArr);
    this.randomPos();
    this.moveWord(this.newWord, this.xAxis, this.yAxis);
  }

  randomPos() {
    console.log(this.canvasWidth);
    this.xAxis = Math.floor(Math.random() * this.canvasWidth);
    this.yAxis = 20;
  }


  moveWord(word, x, y) {
    setInterval(() => {
      if (this.match(word)) {
        clearInterval(this) //this will be where to check if the word matches the user's input
        y = -2;
      } else if ((this.wordsArr.includes(word)) && (y < 400)) {
        this.oldY = y;
        y++;
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 10px Arial";
        this.ctx.fillText(word, x, y);
      } else {
        clearInterval(this)
      }
    }, 50)
  }


  check() {

  }

  update() {

  }

  draw() {

  }

  move() {
    this.draw();
    this.update();
    this.check();
  }

  timer() {
    setInterval(() => { this.move() }, 50);
  }


  start() {

    this.timer();

    setInterval(() => {
      this.addWord();
      // requestAnimationFrame(this.start());
    }, 5000)

    this.wordInput.addEventListener('input', this.match);
    this.scoreShow.innerHTML = 0;
  }


  match(word) {

    if (this.wordInput.value === word && this.wordsArr.includes(word)) {

      this.index = this.wordsArr.indexOf(word);
      this.wordsArr.splice(this.index, 1);
      console.log(this.wordsArr);

      this.wordInput.value = '';
      this.score++;
      this.scoreShow.innerHTML = this.score;

      // this.ctx.font = '50px serif';
      return true
    } else {
      return false
    }
  }














}

module.exports = Game;