class NewForest {
    constructor(ctx){
        this.ctx = ctx;
        this.x = 8699;
        this.y = 0;
        this.w = 600;
        this.h = 450;
        this.color = "yellow";
        this.img = new Image();
        this.img = new Image();
        this.img.src = "./images/final.png";
   
        this.vx = -1.66;
    }
  
    move() {
      this.x += this.vx;
    }
    draw() {
    this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )
}
}