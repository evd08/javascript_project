
const Dictionary = require("./dictionary.js");
const _ = require('lodash');
const StartScreen = require("./startScreen");

class Game {
  constructor(ctx, page, currentWord, wordInput, scoreText, scoreShow, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.page = page;
    this.currentWord = currentWord;
    this.wordInput = wordInput;
    this.scoreText = scoreText;
    this.scoreShow = scoreShow;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.startScreen = new StartScreen(ctx, page, canvasWidth, canvasHeight, this);

    this.index = 0;
    this.newWord = "";
    this.wordsPosArr = [];
    this.lives = 5;
    this.score = 0;
    this.startInterval;
    this.drawInterval;

    this.dictionary = new Dictionary();

    this.start = this.start.bind(this);
    this.match = this.match.bind(this);
  }

  addWord() {
    let newWord = this.dictionary.returnWord();
    console.log(this.wordsPosArr);
    let x = Math.floor(Math.random() * 900);
    let y = 0;

    this.wordsPosArr.push({ word: newWord, xAxis: x, yAxis: y });
  }

  draw() {
    for (let i = 0; i < this.wordsPosArr.length; i++) {
      let el = this.wordsPosArr[i];
      if (el.yAxis < 640){ 

        this.ctx.beginPath();
        this.ctx.rect(el.xAxis, el.yAxis - 15, el.word.length*11, 20, 'grey');
        this.ctx.fillStyle = "#47a4cf";
        this.ctx.fill();
        this.ctx.closePath();
        

        this.ctx.font = '15px serif';
        this.ctx.fillStyle = "#000";
        this.ctx.fillText(el.word, el.xAxis, el.yAxis)
        el.yAxis++
      } else if (el.yAxis === 640) {
        this.lives--;
        el.yAxis = 5000;
        console.log(this.lives)
        if (this.lives === 0){
          this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.gameOver();
        }
      }
    }
  }

  start(e) {
    if(e.keyCode === 32 || e.keyCode === 13){
      if(e.keyCode === 32){console.log("space")}
      if(e.keyCode === 13){console.log("enter")}

      this.page.removeEventListener('keydown', this.start);
      this.wordInput.hidden = false;
      this.wordInput.focus();
      this.scoreShow.hidden = false;
      this.scoreText.hidden = false;
      this.wordInput.hidden = false;

      this.startInterval = setInterval(() => {
        this.addWord();
      }, 5000)
  
  
      this.drawInterval = setInterval(() => {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.match();
        this.draw();
      }, 50)
  
      this.wordInput.addEventListener('input', this.match);
      this.scoreText.hidden = false;
      this.scoreShow.innerHTML = 0;
    }

  }


  match() {
    let word = this.wordInput.value
    let wordsArr = _.map(this.wordsPosArr, 'word')
    
    if (wordsArr.includes(word)){
      this.index = wordsArr.indexOf(word);
      this.wordsPosArr.splice(this.index, 1);
      
      this.wordInput.value = '';
      this.score++;
      this.scoreShow.innerHTML = this.score;
    }
  }

  gameOver() {
    this.scoreShow.hidden = true;
    this.scoreText.hidden = true;
    this.wordInput.hidden = true;
    clearInterval(this.startInterval);
    clearInterval(this.drawInterval);
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.lives = 5;
    this.wordsPosArr = [];
    this.score = 0;

    this.ctx.font = '30px serif';
    this.ctx.fillText("Game Over!", this.canvasWidth / 2 - 70, 250);
    this.ctx.fillText("Press enter or space to start", this.canvasWidth / 2 - 153, 350);
    this.page.addEventListener('keydown', this.start);
    
    // let y = 0
    // const timer = setInterval(() => {
    //   if (y < 250) {
    //     this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    //     this.ctx.font = '30px serif';
    //     this.ctx.fillText("Game Over!", this.canvasWidth / 2 - 80, y);
    //     y++;
    //   } else {
    //     clearInterval(timer);
    //     this.ctx.fillText("Press enter or space to start", this.canvasWidth / 2 - 153, 350);
    //     this.page.addEventListener('keydown', this.start);
    //   }
    // }, 10)

  }
  
}

module.exports = Game;