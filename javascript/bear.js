class Bear {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 1250;
    this.y = 200;
    this.w = 100;
    this.h = 200;
    this.color = "grey";
     this.img = new Image();
     this.img.src = '/images/bear.png';
     this.sound = new Audio();
     this.sound.src ="/sounds/bearRoar.mp3"

    this.vx = -2;
  }

  move() {
    this.x += this.vx;
   
   

    
  }

  collide(player) {
    const collideX = player.x + player.w > this.x && player.x < this.x + this.w;
    const collideY = player.y < this.y + this.h && player.y + player.h > this.y;
   
        return collideX && collideY;
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      this.x,
      this.y,
      this.w,
      this.h
    
    );
  }
}
