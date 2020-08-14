let canvas = document.querySelector('.canvas');
const draw = (x, y) => {
    if(canvas.getContext) {
        const ctx = canvas.getContext('2d');
        const grd = ctx.createRadialGradient(x, y, 3, x, y, 10);
        grd.addColorStop(0, "black");        
        grd.addColorStop(0.8, "#FF4500");
        ctx.fillStyle = grd;
        ctx.arc(x, y, 15, 0, Math.PI * 2);
        ctx.fill();
        
    }
}

draw(100, 100);