class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.newForest = new NewForest(this.ctx);
    this.player = new Player(this.ctx);
    this.points = 0;
    this.bear = new Bear(this.ctx);
    this.bear2 = new Bear2(this.ctx);
    this.bear3 = new Bear3(this.ctx);
    this.bear4 = new Bear4(this.ctx);
    this.bear5 = new Bear5(this.ctx);
    this.endGame = new EndGame(this.ctx);
    this.platformbonus = new Platformbonus(this.ctx);
    this.platformbonus2 = new  Platformbonus2 (this.ctx);
    this.platformbonus3 = new  PlatformBonus3 (this.ctx);
    this.platform = [new Platform(this.ctx)];
    this.tickPlatform = 0;
    this.fire = [];
    this.tickFire = 0;
    this.medium = [new Medium(this.ctx)];
    this.tickMedium = 0;
    this.carrots = [];
    this.tickCarrots = 0;
    this.carrots2 = [];
    this.tickCarrots2 = 0;
    this.carrots3 = [];
    this.tickCarrots3 = 0;
    this.sound = new Audio();
    this.bear5.shoot();
    this.gameOverSection = document.getElementById("game-over-section");
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
      this.tickCarrots2++;
      this.tickCarrots3++;
      this.points;
      this.score();

      if (this.tickFire % 198 === 0) {
        this.addFire();
      }
      if (this.tickPlatform % 600 === 0) {
        this.addPlatform();
      }
      if (this.tickMedium % 210 === 0) {
        this.addMedium();
      }
      if (this.tickCarrots % 180 === 0) {
        this.addCarrots();
      }
      if (this.tickCarrots2 % 300 === 0) {
        this.addCarrots2();
      }
      if (this.tickCarrots3 % 800 === 0) {
        this.addCarrots3();
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
  addCarrots2() {
    this.carrots2.push(new Carrots2(this.ctx));
  }
  addCarrots3() {
    this.carrots3.push(new Carrots3(this.ctx));
  }
  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
  }

  move() {
    this.background.move();
    this.newForest.move();
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
    this.carrots2.forEach((carrot) => carrot.move());
    this.carrots3.forEach((carrot) => carrot.move());
    this.endGame.move();
    this.platformbonus.move();
    this.platformbonus2.move();
    this.platformbonus3.move();
  }

  checkCollisions() {
    // PLATFORM COLLISION
    const platforms = this.platform.concat(this.medium);
    platforms.push(this.platformbonus);
    platforms.push(this.platformbonus2);
    platforms.push(this.platformbonus3);
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

    // HONEYBALL COLLISIONS
    const playerVsHoney = this.bear5.honeyball.find((honeyball) => {
      return honeyball.collide(this.player);
    });
    if (playerVsHoney) {
      this.gameOver();
    }

    //FIRE COLLISIONS
    const playerVsFire = this.fire.find((fire) => {
      return fire.collide(this.player);
    });
    if (playerVsFire) {
      this.gameOver();
    }

    //BEAR COLLISIONS
    if (this.bear.collide(this.player)) {
      this.sound.src = "./sounds/bearRoar.mp3";
      this.sound.play();
      this.gameOver();
    }

    //BEAR2 COLLISIONS
    if (this.bear2.collide(this.player)) {
      this.sound.src = "./sounds/bearRoar.mp3";
      this.sound.play();
      this.gameOver();
    }
    //BEAR3 COLLISIONS
    if (this.bear3.collide(this.player)) {
      this.sound.src = "./sounds/bearRoar.mp3";
      this.sound.play();
      this.gameOver();
    }

    //BEAR4 COLLISIONS
    if (this.bear4.collide(this.player)) {
      this.sound.src = "./sounds/bearRoar.mp3";
      this.sound.play();
      this.gameOver();
    }

    //BEARBOSS BEAR5 COLLISIONS
    if (this.bear5.collide(this.player)) {
      this.sound.src = "./sounds/bearRoar.mp3";
      this.sound.play();
      this.gameOver();
    }
    //CARROTS COLLISIONS
    const collideCarrots = this.carrots.find((carrots) => {
      return carrots.collide(this.player);
    });

    if (collideCarrots) {
      this.sound.src = "./sounds/coin.mp3";
      this.sound.play();
      this.carrots = this.carrots.filter((carrot) => carrot !== collideCarrots);
      this.points += 25;
    }

    //CARROTS2 COLLISIONS
    const collideCarrots2 = this.carrots2.find((carrots2) => {
      return carrots2.collide(this.player);
    });

    if (collideCarrots2) {
      this.sound.src = "./sounds/coin.mp3";
      this.sound.play();
      this.carrots2 = this.carrots2.filter(
        (carrot) => carrot !== collideCarrots2
      );
      this.points += 15;
    }
    //CARROT3 COLLISIONS
    const collideCarrots3 = this.carrots3.find((carrots3) => {
      return carrots3.collide(this.player);
    });

    if (collideCarrots3) {
      this.sound.src = "./sounds/coin.mp3";
      this.sound.play();
      this.carrots3 = this.carrots3.filter(
        (carrot) => carrot !== collideCarrots3
      );
      this.points += 50;
    }

    //ENDGAME YOU WIN COLLISIONS
    if (this.endGame.collide(this.player)) {
      this.youWin();
      this.endGame.sound.play();
    }
  }

  youWin() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.ctx.font = " bold 100px Verdana";
    this.ctx.strokeStyle = " bold black";
    this.ctx.fillStyle = "white";
    this.ctx.textAlign = "center";
    this.ctx.fillText("You win!!!!", 500, 250);
    this.ctx.strokeText("You win!!!!", 500, 250);
    this.gameOverSection.style.display = "block";
  }

  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;
    this.ctx.font = " bold 100px Verdana ";
    this.ctx.strokeStyle = " bold black";
    this.ctx.fillStyle = "red";
    this.ctx.textAlign = "center";
    this.ctx.fillText("Ohhh, you lose!", 500, 250);
    this.ctx.strokeText("Ohhh, you lose!", 500, 250);
    this.sound.src = "./sounds/rabbitdie.mp3";
    this.sound.play();
    this.gameOverSection.style.display = "block";
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
   
    this.bear.draw();
    this.bear2.draw();
    this.bear3.draw();
    this.bear4.draw();
    this.bear5.draw();
    this.medium.forEach((obs) => obs.draw());
    this.carrots.forEach((carrot) => carrot.draw());
    this.carrots2.forEach((carrot) => carrot.draw());
    this.carrots3.forEach((carrot) => carrot.draw());
    this.fire.forEach((obs) => obs.draw());
    this.newForest.draw();
    this.endGame.draw();
    this.platformbonus.draw();
    this.platformbonus2.draw();
    this.platformbonus3.draw();
  }
  }

