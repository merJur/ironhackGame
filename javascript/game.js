class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.platform = new Platform(this.ctx);
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();
    }, 1000 / 60);
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
  }

  move() {
    this.background.move();
    this.player.move();
  }

  checkCollisions() {
    if (this.platform.collide(this.player)) {
      console.log("me choco");
      if (this.platform.collideTop(this.player)) {
        console.log("me choco arriba");
        this.player.y = this.platform.y + this.player.h;
      } else if (this.platform.collideBottom(this.player)) {
        console.log("me choco abajo");
        this.player.y = this.platform.y + this.platform.h;
      }
    }
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.platform.draw();
  }
}
