
const Dictionary = require("./dictionary.js");

class Game {
  constructor(ctx, currentWord, wordInput, scoreShow, canvasWidth, canvasHeight){
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

  randomPos(){
    this.xAxis = Math.floor(Math.random() * 1000);
    this.yAxis = 0;
  }


  moveWord(word, x, y) {
    setInterval(() => {
      // this.ctx.clearRect(0, 0, 1000, 700)
      if (this.match(word)) {
        clearInterval(this) //this will be where to check if the word matches the user's input
        y = -2;
      } else if ((this.wordsArr.includes(word)) && (y < 400)) {
        this.oldY = y;
        y++;
        // console.log(y)
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.fillStyle = "black";
        this.ctx.font = "bold 30px Arial";
        this.ctx.fillText(word, x, y);
      } else {
        clearInterval(this)
      }
      
    }, 50)

  }


  start() {
    setInterval(() => {
      this.addWord();
      // requestAnimationFrame(this.start());
    }, 5000)

    this.wordInput.addEventListener('input', this.match);
    this.scoreShow.innerHTML = 0;
  }



  match(word) {

    if (this.wordInput.value === word && this.wordsArr.includes(word)) {

      // for (let i=0; i < this.wordsArr.length; i++) {
      //   if (word === this.wordsArr[i]) {
      //     this.wordsArr.splice(i, 1);
      //     break;
      //   }
      // }

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