class GameOver {
  constructor(ctx, page, scoreShow, scoreText, wordInput, startInterval, drawInterval) {
    this.ctx = ctx;
    this.page = page;
    this.wordInput = wordInput;
    this.scoreText = scoreText;
    this.scoreShow = scoreShow;
    this.startInterval = startInterval;
    this.drawInterval = drawInterval;
  }
  
  gameOver() {
    this.scoreShow.hidden = true;
    this.scoreText.hidden = true;
    this.wordInput.hidden = true;
    clearInterval(this.startInterval);
    clearInterval(this.drawInterval);
    this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight)
  
    this.ctx.font = '30px serif';
    this.ctx.fillText("Game Over!", this.canvasWidth / 2 - 80, 250);
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
