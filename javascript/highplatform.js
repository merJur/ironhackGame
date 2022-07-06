class Highplatform {
    constructor(ctx) {
      this.ctx = ctx;
      this.x = 980;
      this.y = Math.random() * (230-170) + 170;
      this.w = this.w
      this.h = 25;
      this.color = "black";
      this.vx = -(Math.random() * (2.8 - 1.6) + 1.6) ;
      this.img = new Image();
       this.img.src= "./images/plataformas2.png"

       this.w = Math.random() * (280 - 125) +125;
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
  