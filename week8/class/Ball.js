export default class Ball {
    /**
     * @param {object} ball            ball data
     */
    constructor(ball) {
        for(const key in ball) {
            this[key] = ball[key];
        }
    }

    /**
     * Computate position
     */
    update() {
        this.x += this.vx;
        this.y += this.vy;
    }

    /**
     * Set color from level
     * 
     * @param {CanvasRenderingContext2D} ctx     
     */
    setStyle(ctx) {
        const radgrad = ctx.createRadialGradient(this.x,this.y,1, this.x + 5, this.y + 5, 15);

        if(this.level === 'normal') {            
            radgrad.addColorStop(0, '#4691FF');
            radgrad.addColorStop(0.5, '#1F3E6D');
        } else if(this.level === 'warning') {
            radgrad.addColorStop(0, '#F7FF48');
            radgrad.addColorStop(0.5, '#757920');
        } else {
            radgrad.addColorStop(0, '#FF4848');
            radgrad.addColorStop(0.5, '#792020');
        }

        return radgrad;
    }

    /**
     * @param {CanvasRenderingContext2D} ctx
     */
    draw(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.setStyle(ctx, this.level);
        ctx.fill();
    }
}