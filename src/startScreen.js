class StartScreen {
  constructor(ctx, page, canvasWidth, canvasHeight, game) {
    this.ctx = ctx;
    this.page = page;
    this.canvasWidth = canvasWidth;
    this.canvasHeight = canvasHeight;
    this.game = game;

    this.y = 0

    this.clickToStart = this.clickToStart.bind(this);
  }

  show() {

    let y = 0
    const timer = setInterval(() => {
      if(y < 250) {        
        this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        this.ctx.font = '30px serif';
        this.ctx.fillText("Typing Game", this.canvasWidth/2 - 80, y);
        y++;
      } else {
        clearInterval(timer);
        this.clickToStart();
      }
    }, 10)
  }

  clickToStart() {
    this.ctx.fillText("Press enter or space to start", this.canvasWidth/2 - 153 , 350);
    this.page.addEventListener('keydown', this.game.start);
  }

  // blink() {
  //   setInterval(() => {
  //     this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
  //     this.ctx.fillText("Typing Game", this.canvasWidth / 2 - 100, y);
  //   }, 500)
  // }
}

module.exports = StartScreen;