export default class Renderer {
    constructor() {
        this.canList = document.querySelectorAll('canvas');
        this.ctxList = [];
        this.canList.forEach((canvas) => {
            this.ctxList.push(canvas.getContext('2d'));
        });        
    }
    
    drawReqText(reqList) {
        const canWidth = this.canList[0].width;
        const canHeight = this.canList[0].height;
                
        this.ctxList[0].fillStyle = '#FFFFFF';        
        this.ctxList[0].font = '18px Calibri';
        this.ctxList[0].fillText(`${reqList.length}` , canWidth * 0.1, canHeight * 0.2);
        this.ctxList[0].font = '10px Calibri';
        this.ctxList[0].fillText('요청/초', canWidth * 0.17, canHeight * 0.2);
    }
    
    drawReqBalls(reqList) {
        reqList.forEach((reqBall) => {
            reqBall.draw(this.ctxList[0]);
        });
    }

    drawReqArea(reqList) {
        this.drawReqText(reqList);
        this.drawReqBalls(reqList);
    }

    drawDelText(levList) {
        const canWidth = this.canList[1].width;
        const canHeight = this.canList[1].height;

        this.ctxList[1].textAlign = 'right';
        this.ctxList[1].font = '18px Calibri';
        this.ctxList[1].fillStyle = '#4691FF';
        this.ctxList[1].fillText(`${levList[0].length}`, canWidth * 0.1,  canHeight * 0.2);
        this.ctxList[1].fillStyle = '#F7FF48';
        this.ctxList[1].fillText(`${levList[1].length}`, canWidth * 0.5, canHeight * 0.2);
        this.ctxList[1].fillStyle = '#FF4848';
        this.ctxList[1].fillText(`${levList[2].length}`, canWidth * 0.8, canHeight * 0.2);
        
        this.ctxList[1].font = '10px Calibri';
        this.ctxList[1].fillStyle = '#FFFFFF';
        this.ctxList[1].fillText('정상', canWidth * 0.2, canHeight * 0.2);
        this.ctxList[1].fillText('경고', canWidth * 0.6, canHeight * 0.2);
        this.ctxList[1].fillText('심각', canWidth * 0.9, canHeight * 0.2);
    }

    drawDelBalls(levList) {
        levList.forEach((list) => {
            list.forEach((delayBall) => {
                delayBall.draw(this.ctxList[1]);
            });
        });
    }
    
    drawDelArea(levList) {
        this.drawDelText(levList);
        this.drawDelBalls(levList);
    }

    drawResText(resList) {
        const canWidth = this.canList[2].width;
        const canHeight = this.canList[2].height;

        this.ctxList[2].fillStyle = '#FFFFFF';
        this.ctxList[2].font = '18px Calibri';
        this.ctxList[2].fillText(`${resList.length}` , canWidth * 0.9, canHeight * 0.2);
        this.ctxList[2].font = '10px Calibri';        
        this.ctxList[2].fillText('응답/초', canWidth * 0.5, canHeight * 0.2);
    }

    drawResBalls(resList) {
        resList.forEach( (resBall) => {
            resBall.draw(this.ctxList[2]);
        });
    }
    drawResArea(resList) {
        this.drawResText(resList);
        this.drawResBalls(resList);
    }

    clearArea() {
        this.ctxList.forEach((ctx, idx) => {
            const canWidth = this.canList[idx].width;
            const canHeight = this.canList[idx].height;
                        
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
     * @param {RequestBall[]} reqList
     * @param {DelayBall[]} levList
     * @param {ResponseBall[]} resList
     */
    update(reqList, levList, resList) {
        this.clearArea();
        this.drawReqArea(reqList);
        this.drawDelArea(levList);
        this.drawResArea(resList);
    }
}
