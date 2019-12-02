const Game = require("./game.js");

// class Move {
//   constructor(word, x, y, canvasWidth, canvasHeight){
//     this.word = word;
//     this.x = x;
//     this.y = y;
//     this.canvasWidth = canvasWidth;
//     this.canvasHeight = canvasHeight;

//     this.game = new Game();
//   }

  function moveWord(word, x, y, canvasWidth, canvasHeight, ctx) {
    setInterval(() => {
      if (this.game.match(word)) {
        clearInterval(this) //this will be where to check if the word matches the user's input
        y += canvasHeight;
      } else if (y < canvasHeight) {
        y++;
        ctx.clearRect(0, 0, canvasWidth, canvasHeight)
        ctx.fillStyle = "black";
        ctx.font = "bold 10px Arial";
        ctx.fillText(word, x, y);
      } else {
        clearInterval(this)
      }

    }, 50)

  }


  
// }

module.exports = { moveWord };