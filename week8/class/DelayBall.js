import Ball from './Ball.js';

export default class DelayBall extends Ball{
    /**     
     * @param {object} ball         ball data
     * @param {number} delayTime    Ramaining time in delay area    
     */
    constructor(ball, delayTime) {
        super(ball);
        this.delayTime = delayTime;
        this.remainTime = delayTime;
        this.startTime = 0;
        this.originLevel = this.level;
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
            this.startTime = curTime / 1000;
        }
        const elapsedTime = (curTime / 1000) - this.startTime;
        this.remainTime = this.delayTime - elapsedTime;
    }

    changeLevel() {
        if(this.remainTime < 5) {
            this.level = 'normal';
        } else if (this.remainTime < 10) {
            this.level = 'warning';
        } else {
            this.level = 'danger';
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