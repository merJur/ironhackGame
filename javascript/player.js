class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 500;
    this.y = 150;
    this.maxY = 320;

    this.prevY = this.y;

    this.w = 50;
    this.h = 60;
    this.color = "red";
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "/images/rabbit.png";

    this.actions = {
      left: false,
      right: false,
      jump: false,
    };

    this.g = 1;
    this.setListener();
  }

  move() {
    this.applyActions();
    this.vy += this.g;
    this.y += this.vy;
    this.x += this.vx;

 
  }

  setListener() {
    document.onkeydown = (e) => this.switchAction(e.keyCode, true);
    document.onkeyup = (e) => this.switchAction(e.keyCode, false);
  }

  applyActions() {
    if (this.actions.right) {
      this.vx += 1;
    } else if (this.actions.left) {
      this.vx -= 1;
    } else {
      this.vx = 0;
    }

    if (this.y + this.h >= FLOOR) {
      this.vy = 0;
      this.y = Math.round(FLOOR - this.h);
    }

    if (this.actions.jump && !this.isJumping()) {
      this.vy -= 15;
    }
    
    if (this.y >= this.maxY) {
      this.y = this.maxY;
      this.jumping = 0;

  }
  }

  isJumping() {
    return this.y < Math.round(FLOOR - this.h);
  }

  switchAction(key, apply) {
    switch (key) {
      case LEFT:
        this.actions.left = apply;
        break;
      case RIGHT:
        this.actions.right = apply;
        break;
      case SPACE:
        this.actions.jump = apply;
    }
  }
  collidesWithPlatform(platform) {
    const xPadding = 10;
    const yPadding = 20;

    if(this.vy >= 0 &&
    this.x + this.w / 2 + xPadding < platform.x + platform.w &&
    this.x + this.w - this.w / 2 > platform.x &&
    this.y + this.h >= platform.y + yPadding &&
    this.prevY + this.h <= platform.y + yPadding ||
    this.maxY === platform.y - this.h + yPadding &&
    this.x + this.w / 2 + xPadding < platform.x + platform.w &&
    this.x + this.w - this.w / 2 > platform.x) {

    return true;
    }
  }

  getOnPlatform(platformY){
  this.maxY = platformY - this.h}

  getOnFloor(){
    if (this-maxY !== 320){
      this.vy = 0;
      this.maxY = 320
    }
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
