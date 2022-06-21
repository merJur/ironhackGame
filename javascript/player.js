class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 700;
    this.y = 150;
    this.w = 20;
    this.h = 20;
    this.color = "red";
    this.vx = 0;
    this.vy = 0;

    this.actions = {
      left: false,
      right: false,
      jump: false,
    };

    this.g = 1;
    this.setListener();
  }

  move() {//(canMove) {
    // if (canMove === true) {
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
      this.vx += -1;
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

  draw() {
    this.ctx.beginPath();
    this.ctx.fillStyle = this.color;
    this.ctx.fillRect(this.x, this.y, this.w, this.h);
    this.ctx.closePath();
  }
}
