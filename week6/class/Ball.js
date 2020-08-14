class Ball {
    /**     
     * @param {number} x            Position X
     * @param {number} y            Position Y
     * @param {number} vx           Velocity X
     * @param {number} vy           Velocity Y     
     * @param {number} radius       Ball's radius     
     */
    constructor(x, y, vx, vy, radius, level) {
        this.x = x;
        this.y = y;   
        this.vx = vx;
        this.vy = vy;        
        this.radius = radius;
        this.level = level        
    }    
    physics() {
        this.x += this.vx;
        this.y += this.vy;        
    }
    /**
     * Render Ball
     * @param {CanvasRenderingContext2D} ctx     
     * @param {number[]} colorList
     */
    draw(ctx, colorList) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = colorList[this.level - 1];
        ctx.fill();
    }    
}