const canvas = document.querySelector('.canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = () => {
    const ctx = canvas.getContext('2d');
    const offset = 255 / 6;
    for(let i = 0; i < 6; i++) {
        for(let j = 0; j < 6; j++) {
            ctx.strokeStyle = `rgb(0, ${Math.floor(255 - offset * i)}, ${Math.floor(255 - offset * j)})`
            ctx.beginPath();
            ctx.arc(12.5 + j * 25, 12.5 + i * 25, 10, 0, Math.PI * 2);
            ctx.stroke();
        }
    }
}
draw();