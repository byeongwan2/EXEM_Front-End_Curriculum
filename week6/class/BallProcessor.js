class BallProcessor {
    constructor() {
        this.dataList = [];
        this.requestList = [];        
        this.levelList = [[],[],[]]
        this.responseData = [];
        this.responseList = [];
    }
    createRequestBall(canvas, radius, ballCreator) {
        setInterval(() => {
            if(!ballCreator.dataList.length) {
                return;
            }
            this.requestList.push(new RequestBall(
                radius, canvas.height / 2,
                10, 0,
                radius,
                1,
                ballCreator.getData()
            ));
        }, 200);
    }    
    classifyRequest() {
        this.requestList[0].data.forEach((data) => {
                this.levelList[data.level - 1].push(data);            
        });
    }
    toDelayArea() {        
        this.classifyRequest();
        this.requestList.shift();
    }    
    findZeroBall(idx) {
        const zeroBalls = [];
        this.levelList[idx].forEach((delayBall, idx) => {
            if(delayBall.remainTime < 0) {
                zeroBalls.push(idx);
            }
        });
        return zeroBalls;
    }
    releaseBall(zeroBalls, idx) {
        if(!zeroBalls.length) {
            return;
        }
        for(let i = zeroBalls.length - 1; i >= 0; i--){
            this.responseData.push(this.levelList[idx][zeroBalls[i]].originLevel);
            this.levelList[idx].splice(zeroBalls[i], 1);
        }
    }
    toResponseArea(list, idx) {
        const zeroBalls = this.findZeroBall(idx)
        this.releaseBall(zeroBalls,idx);
    }
    checkResponse(canvas, radius) {
        if(!this.responseData.length) {
            return;
        }
        this.responseList.push(new ResponseBall(
            radius, canvas.height / 2,
            10, 0,
            radius, Math.max(...this.responseData)
        ));
        this.responseData = []
    }
    update(canvasList, ctxList, colorList, curTime) {
        // Request Area
        this.requestList.forEach((requestBall) => {
            requestBall.update(ctxList[0], colorList);
        });   
        if (this.requestList.length && this.requestList[0].onCollision(canvasList[0])) {            
            this.toDelayArea();
        }
        // Delay Area
        this.levelList.forEach((list) => {
            list.forEach((ball) => {
                ball.update(canvasList[1], ctxList[1], colorList, curTime);
            });
        });
        this.levelList.forEach((list, idx) => {
            this.toResponseArea(list, idx);
        });
        // this.toResponseArea();
        // // Response Area
        this.checkResponse(canvasList[2], radius);
        this.responseList.forEach((responseBall) => {
            responseBall.update(ctxList[2], colorList);
        });
        if(this.responseList.length && this.responseList[0].onCollision(canvasList[2])) {
            this.responseList.shift();
        }
    }
}