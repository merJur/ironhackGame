class Bear2 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 3600;
    this.y = 300;
    this.w = 120;
    this.h = 100;
    this.color = "grey";
  //  this.img = new Image();
  //  this.img.src = "/images/bear.png";

    this.vx = -3;
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
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color
    this.ctx.fillRect(this.x, this.y, this.w, this.h)
    this.ctx.closePath();
  }
}
