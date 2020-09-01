export default class Renderer {
    constructor(offscreenCanvas) {        
        this.ctxList = [];
        offscreenCanvas.forEach((canvas) => {
            this.ctxList.push(canvas.getContext('2d'));
        });
    }
    
    drawReqText(requestList, requestCanvas) {
        const canWidth = requestCanvas.width;
        const canHeight = requestCanvas.height;
                
        this.ctxList[0].fillStyle = '#FFFFFF';        
        this.ctxList[0].font = '18px Calibri';
        this.ctxList[0].fillText(`${requestList.length}` , canWidth * 0.1, canHeight * 0.2);
        this.ctxList[0].font = '10px Calibri';
        this.ctxList[0].fillText('요청', canWidth * 0.17, canHeight * 0.2);
    }
    
    drawReqBalls(requestList) {
        requestList.forEach((reqBall) => {
            reqBall.draw(this.ctxList[0]);
        });
    }

    drawReqArea(requestList, requestCanvas) {
        this.drawReqText(requestList, requestCanvas);
        this.drawReqBalls(requestList);
    }

    drawDelText(delayList, delayCanvas) {
        const canWidth = delayCanvas.width;
        const canHeight = delayCanvas.height;

        this.ctxList[1].textAlign = 'right';
        this.ctxList[1].font = '18px Calibri';
        this.ctxList[1].fillStyle = '#4691FF';
        this.ctxList[1].fillText(`${delayList['normal'].length}`, canWidth * 0.1,  canHeight * 0.2);
        this.ctxList[1].fillStyle = '#F7FF48';
        this.ctxList[1].fillText(`${delayList['warning'].length}`, canWidth * 0.5, canHeight * 0.2);
        this.ctxList[1].fillStyle = '#FF4848';
        this.ctxList[1].fillText(`${delayList['danger'].length}`, canWidth * 0.8, canHeight * 0.2);
        
        this.ctxList[1].font = '10px Calibri';
        this.ctxList[1].fillStyle = '#FFFFFF';
        this.ctxList[1].fillText('정상', canWidth * 0.2, canHeight * 0.2);
        this.ctxList[1].fillText('경고', canWidth * 0.6, canHeight * 0.2);
        this.ctxList[1].fillText('심각', canWidth * 0.9, canHeight * 0.2);
    }

    drawDelBalls(delayList) {
        for(const level in delayList) {
            delayList[level].forEach((delayBall) => {
                delayBall.draw(this.ctxList[1]);
            })
        }        
    }
    
    drawDelArea(delayList, delayCanvas) {
        this.drawDelText(delayList, delayCanvas);
        this.drawDelBalls(delayList);
    }

    drawResText(resList, responseCanvas) {
        const canWidth = responseCanvas.width;
        const canHeight = responseCanvas.height;

        this.ctxList[2].fillStyle = '#FFFFFF';
        this.ctxList[2].font = '18px Calibri';
        this.ctxList[2].fillText(`${resList.length}` , canWidth * 0.9, canHeight * 0.2);
        this.ctxList[2].font = '10px Calibri';        
        this.ctxList[2].fillText('응답', canWidth * 0.5, canHeight * 0.2);
    }

    drawResBalls(resList) {
        resList.forEach( (resBall) => {
            resBall.draw(this.ctxList[2]);
        });
    }
    drawResArea(resList, responseCanvas) {
        this.drawResText(resList, responseCanvas);
        this.drawResBalls(resList);
    }

    clearArea(canvas) {
        this.ctxList.forEach((ctx, idx) => {
            const canWidth = canvas[idx].width;
            const canHeight = canvas[idx].height;
                        
            if(idx === 0 || idx === 2) {
                ctx.fillStyle = 'rgba(76, 76, 76, 0.3)';
                ctx.fillRect(0, canHeight * 0.2, canWidth, canHeight);
                ctx.clearRect(0, 0, canWidth, canHeight * 0.2);
            } else {
                ctx.clearRect(0, 0, canWidth, canHeight);
            }            
        });
    }

    /**
     * Update Rendering every frame
     * 
     * @param {RequestBall[]} requestList
     * @param {DelayBall[]} delayList
     * @param {ResponseBall[]} resList
     */
    update(canvas, requestList, delayList, resList) {
        this.clearArea(canvas);
        this.drawReqArea(requestList, canvas[0]);
        this.drawDelArea(delayList, canvas[1]);
        this.drawResArea(resList, canvas[2]);
    }
}