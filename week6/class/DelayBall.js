class DelayBall extends Ball{
    /**     
     * @param {number} x            Position X
     * @param {number} y            Position Y
     * @param {number} vx           Velocity X
     * @param {number} vy           Velocity Y
     * @param {number} radius       Ball's radius
     * @param {number} level        Level set Ball's color (1: blue, 2: yellow, 3: red)
     * @param {number} delayTime    Ramaining time in delay area    
     */
    constructor(x, y, vx, vy, radius, level, delayTime) {
        super(x, y, vx, vy, radius, level);
        this.delayTime = delayTime;
        this.remainTime = delayTime;
        this.startTime = 0;
        this.originLevel = level;
    }
    /**
     * Check position, collision
     * @param {canvas} canvas
     */
    onCollision(canvas) {
        const maxX = this.x + this.vx + this.radius;
        const maxY = this.y + this.vy + this.radius;

        if(maxX > canvas.width || maxX < 0) {
            this.vx *= -1;
        }
        if(maxY > canvas.height || maxY < 0) {
            this.vy *= -1;
        }
    }
    /**
     * Set remaining time
     * @param {number} curTime
     */
    setRemainTime(curTime) {
        if(!this.startTime) {
            this.startTime = curTime * 0.001;
        }
        const elapsedTime = (curTime * 0.001) - this.startTime;
        this.remainTime = this.delayTime - elapsedTime;
    }
    changeLevel() {
        if(this.remainTime < 5) {
            this.level = 1;
        } else if (this.remainTime < 10) {
            this.level = 2;
        } else {
            this.level = 3;
        }
    }
    /**
     * Manage Ball's Animation
     * @param {canvas} canvas
     * @param {CanvasRenderingContext2D} ctx 
     * @param {number} curTime
     * @param {number[]} colorList 
     */
    update(canvas, ctx, colorList, curTime) {
        this.setRemainTime(curTime);
        this.changeLevel();
        this.physics();
        this.onCollision(canvas);
        this.draw(ctx, colorList);
    }
}