let start = null;
let element = document.querySelector('.test');
element.style.position = 'absolute';
function step(timeStamp) {
    console.log(timeStamp);
    if(!start) {
        start = timeStamp;
    }
    let progress = timeStamp - start;
    element.style.left = Math.min(progress / 10, 200) + 'px';
    // if(progress < 2000) {
    //     window.requestAnimationFrame(step);
    // }
}
element.addEventListener('click', () => {
    window.requestAnimationFrame(step);
})