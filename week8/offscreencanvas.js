import BallProcessor from './class/BallProcessor.js';
import DataCreator from './class/DataCreator.js';
import Renderer from './class/Renderer.js';

self.onmessage = (evt => {
    const offscreenCanvas = [];
    evt.data.forEach((canvas) => {
        offscreenCanvas.push(canvas);
    });

    const dataCreator = new DataCreator();
    const ballProcessor = new BallProcessor();
    const renderer = new Renderer(offscreenCanvas);

    dataCreator.createData(offscreenCanvas[1], 5)
    ballProcessor.createRequestBall(offscreenCanvas[0], 5, dataCreator);

    const update = (curTime) => {
        ballProcessor.update(offscreenCanvas, curTime);
        renderer.update(offscreenCanvas, ballProcessor.requestList, ballProcessor.delayList, ballProcessor.responseList);
        requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
});