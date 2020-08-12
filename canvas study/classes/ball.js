class Ball {
    constructor(x, y, vx, vy, delayTime, radius, level) {
        this.x = x;   // 생성 위치
        this.y = y;   
        this.vx =vx;
        this.vy =vy;        
        this.delayTime = delayTime; // 딜레이 시간
        this.remainTime = delayTime;
        this.radius = radius;
        this.startTime = 0;
        this.level = level
    }
    physics(canvas) {
        this.x += this.vx;
        this.y += this.vy;
        const maxX = this.x + this.vx + this.radius;
        const maxY = this.y + this.vy + this.radius;

        if(maxX > canvas.width || maxX < 0) {
            this.vx *= -1;
        }
        if(maxY > canvas.height || maxY < 0) {
            this.vy *= -1;
        }
    }
    draw(ctx, colors) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = colors[this.level];
        ctx.fill();
    }
    decTime(curTime) {
        if(!this.startTime) {
            this.startTime = curTime;
        }
        const elapsedTime = curTime - this.startTime;
        this.remainTime = this.delayTime - elapsedTime;
    }
    changeList() {
        // 담겨진 List 이동
    }
    changeColor() {
        if(this.remainTime < 5000) {
            this.level = 0;
        } else if (this.remainTime < 10000) {
            this.level = 1;
        } else {
            this.level = 2;
        }
    }
    update(canvas, ctx, curTime, colors) {
        this.decTime(curTime);
        this.physics(canvas);
        this.changeColor();
        this.draw(ctx, colors);
    }
    
}

