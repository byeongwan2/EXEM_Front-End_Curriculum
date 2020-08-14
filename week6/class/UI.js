class UI_Renderer {
    constructor() {
        this.canvasList = document.querySelectorAll('canvas');
        this.ctxList = [];
        this.canvasList.forEach((canvas) => {
            this.ctxList.push(canvas.getContext('2d'));
        });
        this.colorList = ['blue', 'yellow', 'red'];
        this.radius = 5;
        this.request = document.querySelector('.request');
        this.delay = document.querySelector('.delay');
        this.response = document.querySelector('.reponse');
    }
    update() {
        this.draw()
    }
    draw() {
        this.request.textContent = `요청: ${ballManager.requestList.length}`;
        this.delay.textContent = `
                정상: ${ballManager.levelList[0].length}
                경고: ${ballManager.levelList[1].length}
                위험: ${ballManager.levelList[2].length}
            `;
        this.response.textContent = `응답: ${ballManager.responseList.length}`;
        this.ctxList.forEach((ctx, idx) => {
            ctx.clearRect(0, 0, this.canvasList[idx].width, this.canvasList[idx].height);
        })
        // this.ctxList[0].clearRect(0, 0, canvasList[0].width, canvasList[0].height);
        // this.ctxList[1].clearRect(0, 0, canvasList[1].width, canvasList[1].height);
        // this.ctxList[2].clearRect(0, 0, canvasList[2].width, canvasList[2].height);
    }
}