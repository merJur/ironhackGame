class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
   this.platform = new Platform(this.ctx);
   
    this.fire = [];
    this.tickFire = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      this.clear();
      this.draw();
      this.move();
      this.checkCollisions();
      this.tickFire++;
      if ( this.tickFire % 80 === 0) {
        this.addFire();
      }
    }, 1000 / 60);
  }

  addFire() {
    this.fire.push(new Fire(this.ctx));
  }

  clear() {
    this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.heigth);
  }

  move() {
    this.background.move();
    this.player.move();
    this.fire.forEach((fire) => fire.draw());
  }

   checkCollisions() {
   if (this.platform.collide(this.player)) {
      console.log("me choco");
      if (this.platform.collideTop(this.player)) {
        console.log("me choco arriba");
        this.player.y; // = ??????????? // no funciona esta línea, atraviesa la platform, en lugar de quedarse sobre ella
      
      
      } else if (this.platform.collideBottom(this.player)) { //collideBottom funciona bien, no tocar!!!!!!!
        console.log("me choco abajo");
        this.player.y = this.platform.y + this.platform.h;
      }
    }
    const playerVsFire = this.fire.find((fire) =>{
      return fire.collide(this.player)
    })
    if (playerVsFire) {
      console.log("me quemo");
      this.gameOver();
    }
  }
  gameOver() {
    clearInterval(this.intervalId);
    this.intervalId = null;

    this.ctx.font = "25 px Arial";
    this.ctx.fillStyle = "purple";
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
    this.platform.draw();
    this.fire.forEach((obs) =>obs.draw());
  }
}
