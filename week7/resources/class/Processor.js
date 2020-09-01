import RequestBall from './RequestBall.js';
import DelayBall from './DelayBall.js';
import ResponseBall from './ResponseBall.js';

export default class Processor {
    constructor() {
        this.svgNS = 'http://www.w3.org/2000/svg';
        this.requestList = [];
        this.delayList = {
            'normal' : {},
            'warning' : {},
            'danger' : {}
        }
        this.delayCount = {
            'normal' : 0,
            'warning' : 0,
            'danger' : 0
        }
        this.responseList = [];
        this.responseData = [];
        this.id = 0;        
        this.radius = 5;

        this.requestArea = document.querySelector('.request-area');
        this.delayArea = document.querySelector('.delay-area');
        this.responseArea = document.querySelector('.response-area');

        this.requestArea.setAttributeNS(null, 'viewbox', `0 0 ${this.requestArea.clientWidth} ${this.requestArea.clientHeight}`);
        this.delayArea.setAttributeNS(null, 'viewbox', `0 0 ${this.delayArea.clientWidth} ${this.delayArea.clientHeight}`);
        this.responseArea.setAttributeNS(null, 'viewbox', `0 0 ${this.responseArea.clientWidth} ${this.responseArea.clientHeight}`);
    }        
    
    createRequestBall(dataCreator) {
        setInterval(() => {
            if(!dataCreator.dataList.length) {
                return;
            }
            const requestBall = new RequestBall(this, dataCreator.getData());
            
            this.requestList.push(requestBall);
        }, 200);
    }  
    
    createDelayBall() {
        this.requestList[0].data.forEach((data) => {
            const delayBall = new DelayBall(this, data);

            this.delayCount[delayBall.level]++;
            this.id++;
            this.delayList[delayBall.level][delayBall.id] = delayBall;
        });
    }
    
    toDelayArea() {
        this.createDelayBall();
        this.requestList.shift();
    }
    
    toResponseArea(originLevel, id) {
        this.responseData.push(originLevel);
        this.delayCount[originLevel]--;
        delete this.delayList[originLevel][id];
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

    checkResponseData() {         
        if(this.responseData.length) {
            const responseBall = new ResponseBall(this);
            
            this.responseList.push(responseBall);
            this.responseData = [];
        }
    }

    updateDelayArea(curTime) {
        for(const key in this.delayList) {
            for(const id in this.delayList[key]) {
                 this.delayList[key][id].update(curTime);
            }            
        }        
    }

    update(curTime) {
        this.updateDelayArea(curTime);
        this.checkResponseData();
    }
}