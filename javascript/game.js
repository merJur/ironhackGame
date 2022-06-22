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
    //sí player está más de 120px, se puede mover, y si no se puede mover, está en la posicion px 120 + su width.
    if (this.player.x > 120 + this.player.w) {
      this.player.move();
    } else {
      this.player.vx = 0;
      this.background.vx = 0;
      this.player.x = 120 + this.player.w;
    }

    // sí player está a menos de 870px, se puede mover, y si no, no se puede mover, y está en la posición, 870 - this.w
    if (this.player.x < 870) {
      this.player.move();
    } else {
      this.player.vx = 0;
      this.background.vx = 0;
      this.player.x = 870 - this.player.w;
    }

    //movimiento del canvas sobre el fondo
    //margen izq
    if (this.player.x === 120 + this.player.w) {
      console.log("quiero ir a la izq");
      this.background.x += this.background.vx + 2;
      this.player.move(false);
    } else if (this.background.x === 100) {
      // quiero hacer un stop en el background sí backgrpund.x q se ve en canvas es 100
      this.background.x += this.background.vx = 0;
    }

    //margen der
    if (this.player.x === 870 - this.player.w) {
      console.log("quiero ir a la der");
      this.background.x += this.background.vx - 2; //this.x += this.vx;
    } // stop en el background al final del mismo... background.x === 13.200
  }

  checkCollisions() {
    if (this.platform.collide(this.player)) {
      console.log("me choco");
      this.player.y = this.platform.y + this.platform.h;
    }
  }



  draw() {
    this.background.draw();
    this.player.draw();
    this.platform.draw();
  }
}
