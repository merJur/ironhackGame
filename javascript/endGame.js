class EndGame {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 8700;
      this.y = 400 - 200;
      this.w = 250;
      this.h = 200;
      this.color = "yellow";
      this.img = new Image();
      this.img.src = "/images/banderas.png";
 
  
      this.vx = -1.66;
    }
  
    move() {
      this.x += this.vx;
    }
  
    collide(player) {
      const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
      const collideY = player.y < this.y + this.h && player.y + player.h > this.y;
  
      return collideX && collideY;
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
