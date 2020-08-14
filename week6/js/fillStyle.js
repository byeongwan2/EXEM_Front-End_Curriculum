const canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const draw = () => {
    const ctx = canvas.getContext('2d');
    const offset = 255 / 6;
    for(let i = 0; i < 6; i++){
        for(let j = 0; j < 6; j++){
            ctx.fillStyle = `rgb(${Math.floor(255 - offset * i)},
                                 ${Math.floor(255 - offset * j)},
                                 0)`
            ctx.fillRect(j * offset, i * offset, offset, offset);
        }
    }
}
draw();