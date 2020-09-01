const canvasList = document.querySelectorAll('canvas');
const offScreenList = [];
canvasList.forEach((canvas) => {
    offScreenList.push(canvas.transferControlToOffscreen());
});
const worker = new Worker('offscreencanvas.js', {type: 'module'});

worker.postMessage(offScreenList, offScreenList);