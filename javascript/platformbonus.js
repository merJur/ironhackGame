class Platformbonus {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 4650;
      this.y = 275;
      this.w = 300;
      this.h = 25;
      this.color = "black";
      this.vx = -2.2;
      this.img = new Image();
      this.img.src= "images/plataformas2.png"
    }
  
    collide(player) { //esto funciona bien
      const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
      const collideY = player.y < this.y + this.h && player.y + player.h > this.y;
  
      return collideX && collideY;
    }
    collideTop(player){
      return player.y + player.h >= this.y && player.y + player.h < this.y + this.h
    }
    collideBottom(player) {
      return player.y < this.y + this.h && player.y > this.y
    }
  move (){ 
    this.x += this.vx
  }
  
    draw() {
      this.ctx.drawImage(
        this.img,
        this.x,
        this.y,
        this.w,
        this.h
      )
    }
  }
  