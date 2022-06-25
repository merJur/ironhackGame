class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = 150;
    this.maxY = 400;
    this.w = 50;
    this.h = 50;
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

    if (this.y + this.h >= this.maxY) {
      this.vy = 0;
      this.y = Math.round(this.maxY - this.h);
    }

    if (this.actions.jump && !this.isJumping()) {
      this.vy -= 17;
    }
  }

  isJumping() {
    return this.y < Math.round(this.maxY - this.h);
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
