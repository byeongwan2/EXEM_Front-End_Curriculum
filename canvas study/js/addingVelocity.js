const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
let raf;
const ball = {
    x: 100,
    y: 100,
    vx: 5,
    vy: 2,
    radius: 25,
    color: 'blue',
    draw: function() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};

const draw = () => {
    ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);    
    ball.draw();
    ball.x += ball.vx;
    ball.y += ball.vy;
    if(ball.y + ball.vy > canvas.height || ball.y + ball.vy < 0) {
        ball.vy *= -1;
    }
    if(ball.x + ball.vx > canvas.width || ball.x + ball.vx < 0) {
        ball.vx *= -1;
    }


    raf = window.requestAnimationFrame(draw);
}
canvas.addEventListener('mouseover', () =>{
    raf = window.requestAnimationFrame(draw);
});
canvas.addEventListener('mouseout', () => {
    window.cancelAnimationFrame(raf);
});
ball.draw();