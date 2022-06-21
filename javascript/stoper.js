class Stoper {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 0;
    this.y = 150;
    this.w = 200;
    this.h = 450;
    this.color = "transparent";
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY;
  }

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }
}
