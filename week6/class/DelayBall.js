import Ball from './Ball.js';

export default class DelayBall extends Ball{
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
     * Check collision
     * 
     * @param {canvas} canvas
     */
    onCollision(canvas) {
        const maxX = this.x + this.vx + this.radius;
        const minX = this.x + this.vx - this.radius;
        const maxY = this.y + this.vy + this.radius;
        const minY = this.y + this.vy - this.radius;

        if(maxX > canvas.width || minX < 0) {
            this.vx *= -1;
        }
        if(maxY > canvas.height || minY < canvas.height * 0.2) {
            this.vy *= -1;
        }
    }

    /**
     * Set remaining time
     * 
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
     * Update every frame
     * 
     * @param {canvas} canvas     
     * @param {number} curTime     
     */
    update(canvas, curTime) {
        this.setRemainTime(curTime);
        this.changeLevel();
        super.update();
        this.onCollision(canvas);        
    }
}