class Player{
    constructor(ctx) {
        this.ctx = ctx;
        this.x = 100;
        this.y = 400;
        this.w = 20;
        this.h = 20;
        this.color = 'red';
    
    }
    draw() {
        this.ctx.beginPath();
        this.ctx.fillStyle = this.color
        this.ctx.fillRect(this.x, this.y, this.w, this.h)
        this.ctx.closePath();
    }
    
    }