const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = () => {
    const ctx = canvas.getContext('2d');
    
    for(let i = 0; i < 10; i++) {
        ctx.lineWidth = 1 + i;
        ctx.beginPath();
        ctx.moveTo(5 + i * 14, 5);
        ctx.lineTo(5 + i * 14, 140);
        ctx.stroke();
    }
}
draw();