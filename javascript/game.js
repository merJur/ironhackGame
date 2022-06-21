class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.intervalId = null;
    this.background = new Background(this.ctx);
    this.player = new Player(this.ctx);
    this.stoper = new Stoper(this.ctx);
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
    /*sí player está más de 120px, se puede mover, y si no se puede mover, está en la posicion px 121.
    if( this.player.x >= 120) {
      this.player.move(true)
    } else {
      this.player.move(false)
      this.background.vx = 0;
      this.player.x = 121  }*/
      
  this.player.move()

    if (this.player.x >= this.ctx.canvas.width - 120) {
      this.background.move('der');
    } else if (this.player.x <= 120) {
      this.background.move('izq');
    }
  }

  checkCollisions() {
    if (this.stoper.collide(this.player)){
      console.log('me choco')
      this.player.x =205;
    }

    }

  draw() {
    this.background.draw();
    this.player.draw();
    this.stoper.draw();
  }
}
