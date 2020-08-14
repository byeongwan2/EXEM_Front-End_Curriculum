const ballCreator = new BallCreator();
const ballProcessor = new BallProcessor();
const UI = new UI_Renderer();

// ballCreator.createData(canvasList[1], radius)
ballCreator.createData(UI.canvasList[1], UI.radius)
ballProcessor.createRequestBall(UI.canvasList[0], UI.radius, ballCreator);

const update = (curTime) => {
    UI.update();
    ballProcessor.update(UI.canvasList, UI.ctxList, UI.colorList, curTime);
    window.requestAnimationFrame(update);
}
// window.requestAnimationFrame(update);
update();