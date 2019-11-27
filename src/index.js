const Game = require("./game.js")

document.addEventListener('DOMContentLoaded', (e) => {
  const currentWord = document.getElementById("current-word");
  const wordInput = document.getElementById("word-input");
  const scoreShow = document.getElementById("score");

  const canvas = document.getElementById("game-canvas");
  const ctx = canvas.getContext("2d");
  const game = new Game(ctx, currentWord, wordInput, scoreShow);
  console.log(game);
  game.start();
})