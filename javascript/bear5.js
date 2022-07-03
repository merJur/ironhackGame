class Bear5 {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 8700;
    this.y = 400 - 200;
    this.w = 100;
    this.h = 200;
    this.color = "grey";
    this.img = new Image();
    this.img.src = "./images/bearHoneySprite.png";
    this.img.frames = 4;
    this.img.frameIndex = 0;
    this.tick = 0;
    this.vx = -1.8;

    this.honeyball = [];
    this.tickHoneyball = 0;
  }

  move() {
    this.x += this.vx;
    this.honeyball.forEach((honeyball) => honeyball.move());
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;

    return collideX && collideY;
  }

  shoot() {
    this.tickHoneyball = 0;
    this.honeyball.push(new Honeyball(this.ctx, this.x, this.y));
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
    this.tickHoneyball++;
    if (this.tickHoneyball % 215 === 0) {
      this.shoot();
    }
    this.honeyball.forEach((ball) => ball.draw());
    this.animate();
  }

  animate() {
    this.tick++;

    if (this.tick > 8) {
      this.tick = 0;

      this.img.frameIndex++;
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
  }
}
