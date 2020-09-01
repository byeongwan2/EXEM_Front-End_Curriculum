import DataCreator from './resources/class/DataCreator.js';
import Processor from './resources/class/Processor.js';
import TextRenderer from './resources/class/TextRenderer.js';

const dataCreator = new DataCreator();
const processor = new Processor();
const textRenderer = new TextRenderer(processor);

dataCreator.createData(processor.delayArea, processor.radius);
processor.createRequestBall(dataCreator, processor);

const update = (curTime) => {
    processor.update(curTime);
    textRenderer.update(processor);

    requestAnimationFrame(update);
}

requestAnimationFrame(update);