class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.platform = new Platform(this.ctx);
    this.points = 0;

    /*this.platform = [];
    this.tickPlatform = 0;*/

    this.fire = [];
    this.tickFire = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickFire++;
      this.score();
      if (this.tickFire % 130 === 0) {
        this.addFire();
      }

      /* if (this.tickPlatform % 1500 === 0){
        this.addPlatform();
      }*/
    }, 1000 / 60);
  }

  addFire() {
    this.fire.push(new Fire(this.ctx));
  }

  /* addPlatform(){
    this.platform.push(new Platform(this.ctx))
  }*/

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
  }

  move() {
    this.background.move();
    this.player.move();
    this.fire.forEach((fire) => fire.move());
    this.platform.move();
  }

  checkCollisions() {
    // platform collisions
    if (this.platform.collide(this.player)) {
      if (this.platform.collideTop(this.player)) {
        this.player.vy = 0;
        this.player.y = Math.round(PLATFLOOR - this.player.h);
      } else if (this.platform.collideBottom(this.player)) {
        this.player.y = this.platform.y + this.platform.h;
      } 
    }
    // fire collisions
    const playerVsFire = this.fire.find((fire) => {
      return fire.collide(this.player);
    });
    if (playerVsFire) {
      this.gameOver();
      this.stop();
    } else {
      this.points ++;
    }
  }
  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.ctx.font = "25 px Arial";
    this.ctx.fillStyle = "green";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Ohhh, you die!",
      this.ctx.canvas.width / 2,
      this.ctx.canvas.heigth / 2
    );
  }

  stop(){
    if (this.gameOver()){
      this.intervalId === null
    }
  }
  draw() {
    this.background.draw();
    this.player.draw();
    this.platform.draw();
    this.fire.forEach((obs) => obs.draw());
  }

 score() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.filltext("Score: ${this.points}", 500, 100);
  }
}
