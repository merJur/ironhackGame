class Honeyball {
  constructor(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = 235;
    this.w = 10;
    this.h = 10;
    this.color = "yellow";
    this.img = new Image();
    this.img.src = "/images/honeyshoot.png";
    this.vx = -5.8;
    this.tick = 0
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
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x +10, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x +20, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x +30, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x +40, this.y, this.w, this.h);    
  }

 
}
