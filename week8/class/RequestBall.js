import Ball from './Ball.js';

export default class RequestBall extends Ball {
    /**     
     * @param {number} x            Position X
     * @param {number} y            Position Y
     * @param {number} vx           Velocity X
     * @param {number} vy           Velocity Y
     * @param {number} radius       Ball's radius
     * @param {number} level        Level set Ball's color (1: blue, 2: yellow, 3: red)
     * @param {DelayBall[]} data    Request data
     */
    constructor(ball, data) {
        super(ball);
        this.data = data;
    }

    /**
     * Check Collision
     * 
     * @param {canvas} canvas 
     */
    isCollision (canvas) {
        const posX = this.x + this.vx + this.radius;
        const maxX = canvas.width;
        if(posX >= maxX) {
            return true;
        }
    }
}