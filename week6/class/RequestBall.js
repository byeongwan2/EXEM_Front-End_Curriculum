class RequestBall extends Ball {
    /**     
     * @param {number} x            Position X
     * @param {number} y            Position Y
     * @param {number} vx           Velocity X
     * @param {number} vy           Velocity Y     
     * @param {number} radius       Ball's radius
     * @param {number} level        Level set Ball's color 1: blue, 2: yellow, 3: red          
     * @param {Ball[]} data 
     */
    constructor(x, y, vx, vy, radius, level, data) {
        super(x, y, vx, vy, radius, level);        
        this.data = data;
    }
    onCollision (canvas) {        
        const posX = this.x + this.vx + this.radius;
        const maxX = canvas.width;
        if(posX >= maxX) {
            return true;
        }
    }
    update(ctx, colorList) {
        super.physics();
        super.draw(ctx, colorList);        
    }
}