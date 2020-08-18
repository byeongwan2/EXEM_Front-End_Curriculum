import BallProcessor from './class/BallProcessor.js';
import DataCreator from './class/DataCreator.js';
import Renderer from './class/Renderer.js';

const dataCreator = new DataCreator();
const ballProcessor = new BallProcessor();
const renderer = new Renderer();

dataCreator.createData(renderer.canList[1], 5)
ballProcessor.createReqBall(renderer.canList[0], 5, dataCreator);

const update = (curTime) => {
    ballProcessor.update(renderer.canList, curTime);
    renderer.update(ballProcessor.reqList, ballProcessor.levList, ballProcessor.resList);
    window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);