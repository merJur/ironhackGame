class Carrots2 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1000;
    this.y = 375;
    this.w = 20;
    this.h = 20;
    this.color = "pink";
    this.img = new Image();
    this.img.src = "./images/carrot.png";
    this.tick = 0;
    this.vx = 1.5;
  }
  move() {
    this.x -= this.vx;
  }

  draw() {
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + 10, this.y, this.w, this.h);
    this.ctx.drawImage(this.img, this.x + 20, this.y, this.w, this.h);
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY;
  }
}
