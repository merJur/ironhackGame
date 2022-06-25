class Bear{
    constructor(ctx){
        this.ctx = ctx;
        this.x = 650;
        this.y =(400 -200);
        this.w = 150;
        this.h = 200;
        this.color='grey';
        this.img = new Image();
        this.img.src = '/images/bear.png';

        this.vx = +2;
    }

    move(){
        this.x += this.vx


        if (this.x === 890){
            this.vx -= 2
        } 

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
           )
         }
  }





