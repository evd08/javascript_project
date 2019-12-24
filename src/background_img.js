const IMAGES = ["./public/images/nature8.png", "nature9.png", "nature10.png", "nature11.png"];

class BackgroundImg {
  constructor(ctx, h) {
    this.ctx = ctx;
    this.h = h;
    this.imgIdx = 0;
    this.img = new Image();
  }

  draw() {
    // this.h--;
    // if (this.h < 0) {
    //   this.imgIdx = Math.floor(Math.random() * 4);
    //   this.img.src = IMAGES[this.imgIdx];
    //   this.h = 640;
    // } else {
    //   this.img.src = IMAGES[this.imgIdx];
    // }

    this.img.src = IMAGES[this.imgIdx];
    // this.img.onload = function() {
      // debugger
      this.ctx.drawImage(this.img, 0, this.h, 1040, 640, 0, 0, 3850, 2290);
    // }

  }

}

module.exports = BackgroundImg;