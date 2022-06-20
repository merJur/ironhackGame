class Background {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 0;
      this.y = 0;
      this.img = new Image();
      this.img.src = "/images/bosqueFondoDe.png";
      this.h = this.ctx.canvas.height;
      this.w = this.h * 7.78;
      
      this.vx = -1.5;
    }
  
    draw() {
      this.ctx.drawImage(this.img, this.x , this.y, this.w, this.h);
      this.ctx.drawImage(
        this.img,
        this.x + this.ctx.canvas.width,
        this.y,
        this.w,
        this.h
      );
    }
    move() {
      this.x += this.vx;
      if (this.x + this.w < 0) {
        this.x = 0;
      }
    }
  }
  