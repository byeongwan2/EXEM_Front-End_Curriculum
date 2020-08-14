class ResponseBall extends Ball{
    constructor(x, y, vx, vy, radius, level) {
        super(x, y, vx, vy, radius, level);
    }
    onCollision(canvas) {
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