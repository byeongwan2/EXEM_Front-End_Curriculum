const canvas = document.querySelector('.canvas');
const ctx = canvas.getContext('2d');
const ball = new Ball(100, 100, 3, 3, 15000, 20, 2);
const colors = ['blue', 'yellow', 'red'];
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


const draw = (curTime) => {
    ball.update(canvas, ctx, curTime, colors);
    window.requestAnimationFrame(draw);
}
window.requestAnimationFrame(draw);