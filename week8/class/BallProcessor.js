import RequestBall from './RequestBall.js';
import ResponseBall from './ResponseBall.js';

export default class BallProcessor {
    /**
     * Store request, delay, response data
     */
    constructor() {
        this.requestList = [];
        this.delayList = {
            'normal':[],
            'warning':[],
            'danger':[]
        };
        this.responseData = [];
        this.responseList = [];
    }

    /**
     *  Create RequestBall every 0.2 sec
     * 
     * @param {canvas} canvas
     * @param {number} radius
     * @param {DataCreator} dataCreator
     */
    createRequestBall(canvas, radius, dataCreator) {
        setInterval(() => {
            if(!dataCreator.dataList.length) {
                return;
            }
            const ball = {
                'x': radius,
                'y': canvas.height / 2,
                'vx': 10,
                'vy': 0,
                'radius': radius,
                'level': 'normal'
            }
            this.requestList.push(new RequestBall(ball, dataCreator.getData()));
        }, 200);
    }

    /**
     * Classify by level
     */
    classifyReqBall() {
        this.requestList[0].data.forEach((data) => {
                this.delayList[data.level].push(data);            
        });
    }

    /**
     * If RequestBall collide, Transfer to delay area
     * 
     * @param {canvas} canvas 
     */
    toDelArea(canvas) {
        if (this.requestList.length && this.requestList[0].isCollision(canvas)) {
            this.classifyReqBall();
            this.requestList.shift();
        }
    }

    /**
     * Find remained time 0
     * 
     * @param {number} idx
     * @return {number[]}
     */
    findZeroBall(level) {
        const zeroBalls = [];

        this.delayList[level].forEach((delBall, idx) => {
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
        for(const level in this.delayList) {
            const zeroBalls = this.findZeroBall(level);
            if(zeroBalls.length) {
                for(let i = zeroBalls.length - 1; i >= 0; i--){
                    this.responseData.push(this.delayList[level][zeroBalls[i]].originLevel);
                    this.delayList[level].splice(zeroBalls[i], 1);
                }
            }
        }        
    }
    findMaxLevel() {
        if(this.responseData.includes('danger')) {
            return 'danger';
        } else if(this.responseData.includes('warning')) {
            return 'warning';
        } else {
            return 'normal';
        }
        
    }
    /**
     * responseData create max level's ResponseBall 
     * @param {canvas} canvas 
     */
    checkResponseData(canvas) {
        if(this.responseData.length) {
            const ball = {
                'x': 5,
                'y': canvas.height / 2,
                'vx': 10,
                'vy': 0,
                'radius': 5,
                'level': this.findMaxLevel()
            };
            this.responseList.push(new ResponseBall(ball));
            this.responseData = [];
        }        
    }

    updateReq(canvas) {
        this.requestList.forEach((reqBall) => {
            reqBall.update();
        });
        this.toDelArea(canvas);
    }

    updateDel(canvas, curTime) {
        for(const key in this.delayList) {
            this.delayList[key].forEach((delayBall) => {
                delayBall.update(canvas, curTime);
            });
        }        
        this.toResArea();        
    }

    updateRes(canvas) {
        this.checkResponseData(canvas);
        this.responseList.forEach((resBall) => {
            resBall.update();
        });
        if(this.responseList.length && this.responseList[0].isCollision(canvas)) {
            this.responseList.shift();
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