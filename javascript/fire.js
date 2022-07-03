class Fire {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1100;
    this.y = 360;
    this.h = 45;
    this.w = 45;
    this.color = "orange";
    this.img = new Image();
    this.img.src = "./images/hogueras.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.tick = 0;
    this.vx = 1.5;
  }
  move() {
    this.x -= this.vx;
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY;
  }



  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frameIndex * this.img.width) / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.animate();
  }

  animate() {
    this.tick++
    
    if (this.tick > 8) {
      this.tick = 0
      this.img.frameIndex ++
  
    

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0
    }
  }
}
}
