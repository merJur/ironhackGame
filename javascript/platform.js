class Platform {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 2000;
    this.y = Math.random() * (340 - 300)+ 300;
    this.w = this.w;
    this.h = 25;
    this.color = "black";
    this.vx = -3;
    this.img = new Image();
    this.img.src= "./images/plataformas2.png"



    this.w = Math.random() * (250 - 80) + 80;
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
