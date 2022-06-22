class Background {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 0;
    this.img = new Image();
    this.img.src = "/images/superBosque.png";
    this.h = this.ctx.canvas.height;
    this.w = this.h * 17;

    this.vx = -2;
    this.setListener();
  }


move() {
  if (this.switchAction(RIGHT)){
    this.x += this.vx
    if(this.x + this.w <= 0) {
      this.x = 0
    }
  }
}


  setListener() {
    document.onkeydown = (e) => this.switchAction(e.keyCode, true);
    document.onkeyup = (e) => this.switchAction(e.keyCode, false);
  }

  switchAction(key, apply){
    switch ( key) {
      case RIGHT:
        this.vx = apply;
        break;
    }

  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(
      this.img,
      this.x + this.ctx.canvas.width,
      this.y,
      this.w,
      this.h
    );
  }
 
}
