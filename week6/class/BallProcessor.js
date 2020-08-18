import RequestBall from './RequestBall.js';
import ResponseBall from './ResponseBall.js';

export default class BallProcessor {
    /**
     * Store request, level, response data
     */
    constructor() {
        this.reqList = [];
        this.levList = [[],[],[]];
        this.resData = [];
        this.resList = [];
    }

    /**
     *  Create RequestBall every 0.2 sec
     * 
     * @param {canvas} canvas
     * @param {number} radius
     * @param {DataCreator} dataCreator
     */
    createReqBall(canvas, radius, dataCreator) {
        setInterval(() => {
            if(!dataCreator.dataList.length) {
                return;
            }
            this.reqList.push(new RequestBall(
                radius, canvas.height / 2,
                10, 0,
                radius,
                1,
                dataCreator.getData()
            ));
        }, 200);
    }

    /**
     * Classify by level
     */
    classifyReqBall() {
        this.reqList[0].data.forEach((data) => {
                this.levList[data.level - 1].push(data);            
        });
    }

    /**
     * If RequestBall collide, Transfer to delay area
     * 
     * @param {canvas} canvas 
     */
    toDelArea(canvas) {
        if (this.reqList.length && this.reqList[0].isCollision(canvas)) {
            this.classifyReqBall();
            this.reqList.shift();
        }
    }

    /**
     * Find remained time 0
     * 
     * @param {number} idx
     * @return {number[]}
     */
    findZeroBall(idx) {
        const zeroBalls = [];

        this.levList[idx].forEach((delBall, idx) => {
            if(delBall.remainTime < 0) {
                zeroBalls.push(idx);
            }
        });

        return zeroBalls;
    }

    /**
     * If DelayBall's remained time is 0, Transfer to response data  
     */    
    toResArea() {
        this.levList.forEach((list, idx) => {
            const zeroBalls = this.findZeroBall(idx);

            if(zeroBalls.length) {
                for(let i = zeroBalls.length - 1; i >= 0; i--){
                    this.resData.push(this.levList[idx][zeroBalls[i]].originLevel);
                    this.levList[idx].splice(zeroBalls[i], 1);
                }
            }
        })
    }

    /**
     * ResData create max level's ResponseBall 
     * @param {canvas} canvas 
     */
    checkResData(canvas) {
        if(this.resData.length) {
            this.resList.push(new ResponseBall(
                5, canvas.height / 2,
                10, 0,
                5, Math.max(...this.resData)
            ));
            this.resData = [];
        }        
    }

    updateReq(canvas) {
        this.reqList.forEach((reqBall) => {
            reqBall.update();
        });
        this.toDelArea(canvas);
    }

    updateDel(canvas, curTime) {        
        this.levList.forEach((list) => {
            list.forEach((delBall) => {
                delBall.update(canvas, curTime);
            });
        });
        this.toResArea();        
    }

    updateRes(canvas) {
        this.checkResData(canvas);
        this.resList.forEach((resBall) => {
            resBall.update();
        });
        if(this.resList.length && this.resList[0].isCollision(canvas)) {
            this.resList.shift();
        }
    }
    /**
     * Update every frame
     * 
     * @param {canvas[]} canvasList 
     * @param {number} curTime
     */
    update(canvasList, curTime) {
        this.updateReq(canvasList[0]);
        this.updateDel(canvasList[1], curTime);
        this.updateRes(canvasList[2]);
    }
}