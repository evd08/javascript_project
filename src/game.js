
const Dictionary = require("./dictionary.js");
const _ = require('lodash');
const StartScreen = require("./startScreen");
// const BackgroundImg = require("./background_img");

const IMAGES = [
              "./public/images/nature1.jpg", 
              "./public/images/nature2.jpg", 
              "./public/images/nature3.jpg",
              "./public/images/nature4.jpg", 
              "./public/images/nature5.jpg",
              "./public/images/nature6.jpg",
              "./public/images/nature7.jpg",
              "./public/images/nature8.jpg",
              "./public/images/nature9.jpg",
              "./public/images/nature10.jpg"
            ];

class Game {
  constructor(ctx, page, currentWord, wordInput, scoreText, scoreShow, livesText, lives, canvasWidth, canvasHeight) {
    this.ctx = ctx;
    this.page = page;
    this.currentWord = currentWord;
    this.wordInput = wordInput;
    this.scoreText = scoreText;
    this.scoreShow = scoreShow;
    this.livesText = livesText;
    this.lives = lives;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.startScreen = new StartScreen(ctx, page, canvasWidth, canvasHeight, this);

    this.bgHeight = 1100;
    this.index = 0;
    this.imgIdx = 0;
    this.speed = 2000;
    this.newWord = "";
    this.wordsPosArr = [];
    this.numLives = 5;
    this.score = 0;
    this.startInterval;
    this.drawInterval;
    this.img = new Image();
    this.img.src = "./public/images/nature2.jpg";

    this.dictionary = new Dictionary();

    
    this.start = this.start.bind(this);
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
        this.numLives--;
        // debugger
        console.log(this.numLives)
        this.lives.innerHTML = this.numLives;
        el.yAxis = 5000;
        if (this.numLives === 0){
          this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
          this.gameOver();
        }
      }
    }
  }

  start(e) {
    if(e.keyCode === 13){
      if(e.keyCode === 13){console.log("enter")}
      
      this.page.removeEventListener('keydown', this.start);
      this.wordInput.addEventListener('input', this.match);
      this.wordInput.hidden = false;
      this.wordInput.focus();
      this.scoreShow.hidden = false;
      this.scoreText.hidden = false;
      this.lives.hidden = false;
      this.livesText.hidden = false;
      

      this.startInterval = setInterval(() => {
        this.addWord();
        console.log(this.speed);
      }, this.speed)
  
  
      this.drawInterval = setInterval(() => {
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
        this.ctx.drawImage(this.img, 0, this.bgHeight, 1920, 1080, 0, 0, 1040, 640);
        this.match();
        this.draw();
      }, 50)
  
      this.lives.innerHTML = this.numLives;
      this.scoreShow.innerHTML = 0;

    }
  }


  match() {
    let word = this.wordInput.value.toUpperCase();
    let wordsArr = _.map(this.wordsPosArr, 'word')
    
    if (wordsArr.includes(word)){
      this.index = wordsArr.indexOf(word);
      this.wordsPosArr.splice(this.index, 1);

      if (this.bgHeight - 20 < 0) {
        this.randomImg();
      } else {
        this.bgHeight = this.bgHeight - 100;
      }
      
      this.wordInput.value = '';
      this.score++;
      this.scoreShow.innerHTML = this.score;
    }
  }

  gameOver() {
    this.scoreShow.hidden = true;
    this.scoreText.hidden = true;
    this.livesText.hidden = true;
    this.lives.hidden = true;
    this.wordInput.hidden = true;
    clearInterval(this.startInterval);
    clearInterval(this.drawInterval);
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.numLives = 5;
    this.wordsPosArr = [];
    this.score = 0;
    this.randomImg();
    this.speed = 2000;

    this.ctx.font = '30px serif';
    this.ctx.fillText("Game Over!", this.canvasWidth / 2 - 70, 250);
    this.ctx.fillText("Press enter to start", this.canvasWidth / 2 - 110, 350);
    this.page.addEventListener('keydown', this.start);
  }

  randomImg() {
    if (this.speed > 500) {
      this.speed = this.speed - 500;
    } else if (this.speed <= 500 && this.speed  > 100) {
      this.speed = this.speed - 100;
    } else if (this.speed <=100 && this.speed > 10) {
      this.speed = this.speed - 10;
    } else if (this.speed <= 10 && this.speed > 1) {
      this.speed = this.speed - 1;
    }

    this.bgHeight = 1100;
    this.imgIdx = Math.floor(Math.random() * 4);
    this.img.src = IMAGES[this.imgIdx];
  }
  
}

module.exports = Game;