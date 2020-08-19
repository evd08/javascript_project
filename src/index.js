const Game = require("./game.js")
const StartScreen = require("./startScreen")

document.addEventListener('DOMContentLoaded', (e) => {
  const currentWord = document.getElementById("current-word");
  const wordInput = document.getElementById("word-input");
  const scoreShow = document.getElementById("score");
  const scoreText = document.getElementById("score-text");
  const livesText = document.getElementById("lives-text");
  const lives = document.getElementById("lives");
  const page = document.getElementById("page");

  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  // canvas.width = window.innerWidth;
  // canvas.height = window.innerHeight;
  const canvasWidth = 1040;
  const canvasHeight = 640;
  const game = new Game(ctx, page, currentWord, wordInput, scoreText, scoreShow, livesText, lives, canvasWidth, canvasHeight);
  const start = new StartScreen(ctx, page, canvasWidth, canvasHeight, game);

  start.show();
})