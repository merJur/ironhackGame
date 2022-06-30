class Bear3 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 5000;
    this.y = 400-150;
    this.w = 85;
    this.h = 150;
    this.color = "grey";
    this.img = new Image();
    this.img.src = "/images/bear.png";

    this.vx = -2.2;
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