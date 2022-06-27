class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.points = 0;
    this.bear = new Bear(this.ctx);
    this.bear2 = new Bear2(this.ctx);
    this.bear3 = new Bear3(this.ctx);
    this.bear4 = new Bear4(this.ctx);
    this.bear5 = new Bear5(this.ctx);
    this.endGame = new EndGame(this.ctx);
    this.platformbonus = new Platformbonus(this.ctx);

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
      this.currenTime;
      this.clear();
      this.draw();
      this.checkCollisions();
      this.move();
      this.tickFire++;
      this.tickPlatform++;
      this.tickMedium++;
      this.tickCarrots++;
      this.points;
      this.score();
     
      this.printTime();

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
    this.carrots.push(new Carrots(this.ctx, true));
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
    this.bear3.move();
    this.bear4.move();
    this.bear5.move();
    this.medium.forEach((plat) => plat.move());
    this.carrots.forEach((carrot) => carrot.move());
    this.endGame.move();
    this.platformbonus.move();
  }
  checkCollisions() {
    // platform collisions
    const platforms = this.platform.concat(this.medium);
    platforms.push(this.platformbonus);
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
    //bear3 collision
    if (this.bear3.collide(this.player)) {
      this.gameOver();
    }

    //bear4 collision
    if (this.bear4.collide(this.player)) {
      this.gameOver();
    }

    //bear5 collision
    if (this.bear5.collide(this.player)) {
      this.gameOver();
    }
    //carrots collision
    const collideCarrots = this.carrots.find((carrots) => {
      return carrots.collide(this.player);
    });
    
    if (collideCarrots) {
      this.carrots = this.carrots.filter(carrot => carrot !== collideCarrots)
      console.log("zanahorias");
      console.log(this.points);
      this.points += 5;
    }

    //endGame collision
    if (this.endGame.collide(this.player)) {
      this.youWin();
    }
  }


  printTime() {
    this.ctx.font = "20px Verdana";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText(
      "Time:" + " " + "this.printMinutes()" + ":" + "this.printSeconds()",
      250,
      70
    );
  }

  youWin() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.ctx.font = "100px Verdana";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("You win!!!!", 500, 250);
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.ctx.font = "  100px Verdana ";
    this.ctx.strokeStyle = "black";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Ohhh, you die!", 500, 250);
    this.ctx.strokeText("Ohhh, you die!", 500, 250);
  }
  score() {
    this.ctx.font = "20px Verdana";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Score:" + " " + this.points, 510, 70);
  }

  draw() {
    this.background.draw();
    this.player.draw();
    this.platform.forEach((obs) => obs.draw());
    this.fire.forEach((obs) => obs.draw());
    this.bear.draw();
    this.bear2.draw();
    this.bear3.draw();
    this.bear4.draw();
    this.bear5.draw();
    this.medium.forEach((obs) => obs.draw());
    this.carrots.forEach((carrot) => carrot.draw());
    this.endGame.draw();
    this.platformbonus.draw();
  }
}
