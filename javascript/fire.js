class Fire {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.random() 
    this.y = 360;
    this.h = 45;
    this.w = 45;
    this.color = "orange";
    this.vx = 3;
  }
  move() {
    this.x -= this.vx;
  }

  

collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY
}
  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }

}






