const Game = require("./game.js")

document.addEventListener('DOMContentLoaded', (e) => {
  const currentWord = document.getElementById("current-word");
  const wordInput = document.getElementById("word-input");
  const scoreShow = document.getElementById("score");

  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const canvasWidth = window.innerWidth;
  const canvasHeight = window.innerHeight;
  // const startScreen = new startScreen(ctx, canvasWidth, canvasHeight);
  const game = new Game(ctx, currentWord, wordInput, scoreShow, canvasWidth, canvasHeight);
  // console.log(game);


  game.start();
})