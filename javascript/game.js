class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.points = 0;
    this.bear = new Bear(this.ctx);
    this.bear2 = new Bear2(this.ctx);

    this.platform = [new Platform(this.ctx)];
    this.tickPlatform = 0;

    this.fire = [];
    this.tickFire = 0;

    this.medium = [new Medium(this.ctx)];
    this.tickMedium = 0;

    this.carrots = [];
    this.tickCarrots = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickFire++;
      this.tickPlatform++;
      this.tickMedium++;
      this.tickCarrots ++;
      this.score();

      if (this.tickFire % 130 === 0) {
        this.addFire();
      }

      if (this.tickPlatform % 700 === 0) {
        this.addPlatform();
      }

      if (this.tickMedium % 230 === 0) {
        this.addMedium();
      }

      if (this.tickCarrots % 180 === 0) {
        this.addCarrots();
      }
    }, 1000 / 60);
  }

  addFire() {
    this.fire.push(new Fire(this.ctx));
  }

  addPlatform() {
    this.platform.push(new Platform(this.ctx));
  }
  addMedium() {
    this.medium.push(new Medium(this.ctx));
  }

  addCarrots() {
    this.carrots.push(new Carrots(this.ctx));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
  }

  move() {
    this.background.move();
    this.player.move();
    this.fire.forEach((fire) => fire.move());
    this.platform.forEach((plat) => plat.move());
    this.bear.move();
    this.bear2.move();
    this.medium.forEach((plat) => plat.move());
    this.carrots.forEach((carrot) => carrot.move());
  }

  checkCollisions() {
    // platform collisions
    const platforms = this.platform.concat(this.medium);
    if (!platforms.some((plat) => plat.collide(this.player))) {
      this.player.maxY = FLOOR;
    }
    platforms.forEach((plat) => {
      if (plat.collide(this.player)) {
        if (plat.collideTop(this.player)) {
          this.player.vy = 0;
          this.player.y = Math.round(plat.y - this.player.h);
          this.player.maxY = plat.y;
        } else if (plat.collideBottom(this.player)) {
          this.player.y = plat.y + plat.h;
        }
      }
    });

    // fire collisions
    const playerVsFire = this.fire.find((fire) => {
      return fire.collide(this.player);
    });
    if (playerVsFire) {
      this.gameOver();
   
    }

    //bear collisions
    if (this.bear.collide(this.player)) {
      this.gameOver();
   
    }

    //bear2 collision
    if (this.bear2.collide(this.player)) {
      this.gameOver();
     
    }

    //carrots collision
    const collideCarrots = this.carrots.find((carrots) => {
      return carrots.collide(this.player);
    });
    if (collideCarrots) {
      this.pints +5;
      console.log('zanahorias')
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

  draw() {
    this.background.draw();
    this.player.draw();
    this.platform.forEach((obs) => obs.draw());
    this.fire.forEach((obs) => obs.draw());
    this.bear.draw();
    this.bear2.draw();
    this.medium.forEach((obs) => obs.draw());
    this.carrots.forEach((carrot) => carrot.draw());
  }

  score() {
    this.ctx.font = "20px Arial";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText('Score: ${this.points}', 500, 70);
  }
}
