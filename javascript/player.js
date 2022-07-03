class Player {
  constructor(ctx) {
    this.ctx = ctx;
    this.x = 300;
    this.y = 150;
    this.maxY = 400;
    this.maxX = 900;
    this.minX = 35;
    this.w = 50;
    this.h = 50;
    this.color = "red";
    this.vx = 0;
    this.vy = 0;
    this.img = new Image();
    this.img.src = "./images/spriteconejo.png";
    this.img.frames = 10;
    this.img.frameIndex = 0;
    this.tick = 0;
    this.sound = new Audio();

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

    if (this.x <= LEFTLIMIT) {
      this.x = this.minX;
    }

    if (this.x >= RIGHTLIMIT) {
      this.x = this.maxX;
    }
  }

  setListener() {
    document.onkeydown = (e) => this.switchAction(e.keyCode, true);
    document.onkeyup = (e) => this.switchAction(e.keyCode, false);
  }

  applyActions() {
    if (this.actions.right) {
      this.vx = 7;
    } else if (this.actions.left) {
      this.vx = -7;
    } else {
      this.vx = 0;
    }

    if (this.y + this.h >= this.maxY) {
      this.vy = 0;
      this.y = Math.round(this.maxY - this.h);
    }

    if (this.actions.jump && !this.isJumping()) {
      this.vy = -18;
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
      case UP:
        this.actions.jump = apply;
        this.sound.src = "./sounds/salto2.mp3";
        this.sound.play();
    }
  }

  draw() {
    this.ctx.drawImage(
      this.img,
      (this.img.frameIndex * this.img.width) / this.img.frames,
      0,
      this.img.width / this.img.frames,
      this.img.height,
      this.x,
      this.y,
      this.w,
      this.h
    );
    this.animate();
  }

  animate() {
    this.tick++;
    if (this.tick >10) {
    this.tick = 0;
    
    if (this.actions.right) {
      this.img.src = "./images/spriteconejo.png";
      this.img.frameIndex++;
    }
    if (this.actions.left) {
      this.img.src = "./images/spriteconejoizq.png";
      this.img.frameIndex++;
    } else {
      this.img.src = "./images/spriteconejo.png";
      this.img.frameIndex++;
    }

    if (this.img.frameIndex >= this.img.frames) {
      this.img.frameIndex = 0;
    }
    }
  }
}
