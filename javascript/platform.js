class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = Math.random() * 500 + 200;
    this.y = 320;
    this.w = 70;
    this.h = 25;
    this.color = "black";
    this.vx = 0;
    this.img = new Image();
    this.img.src= "images/plataforma.png"
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY;
  }
  collideTop(player){
    return player.y + player.h > this.y && player.y + player.h < this.y + this.h
  }
  collideBottom(player) {
    return player.y < this.y + this.h && player.y > this.y
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
