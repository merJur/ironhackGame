class Fire {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1100;
    this.y = 360;
    this.h = 45;
    this.w = 45;
    this.color = "orange";
    this.img = new Image();
    this.img.src = "/images/hoguera.png";
    //  this.img.frame = 4;
    //  this.img.frameIndex = 0;
    this.tick = 0;
    this.vx = 2.5;
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
    this.ctx.drawImage(this.img, this.x, this.y, this.w, this.h);
  }
}

/*  animate() {
    this.tick++;

    if (this.tick > 10) {
      this.tick = 0;
    }

    if (this.vx++) {
      this.img.frameIndex = 0;
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }*/
