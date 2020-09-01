import Ball from './Ball.js';

export default class DelayBall extends Ball{    
    constructor(processor, data) {
        super(processor.svgNS, data.x, data.y, processor.radius, data.level, processor.delayArea);
        this.delayTime = data.delayTime;
        this.remainTime = data.delayTime;
        this.startTime = 0;   
        this.originLevel = data.level;
        this.id = processor.id;
        this.setAnim(processor)
    }

    setAnim(processor) {
        this.setAnimX();
        this.setAnimY(processor);
    }

    setAnimX() {
        const animX = document.createElementNS(this.svgNS, 'animate');
        const maxX = this.area.clientWidth - this.radius;

        animX.setAttributeNS(null, 'attributeName', 'cx');
        animX.setAttributeNS(null, 'dur', `${this.delayTime}s`);
        animX.setAttributeNS(null, 'values', `${this.x} ;
                                              ${maxX} ;
                                              ${Math.random() * maxX} ;
                                              ${maxX} ;
                                              ${this.x}`);
        animX.setAttributeNS(null, 'keyTimes', '0 ; 0.25 ; 0.5 ; 0.75 ; 1');
        this.element.appendChild(animX);
    }

    setAnimY(processor) {
        const animY = document.createElementNS(this.svgNS, 'animate');
        const maxY = this.area.clientHeight - this.radius;
        const minY = Math.floor(Math.random() * this.area.clientHeight * 0.7 + this.area.clientHeight * 0.3 - this.radius);
        
        animY.setAttributeNS(null, 'attributeName', 'cy');
        animY.setAttributeNS(null, 'dur', `${this.delayTime}s`);        
        animY.setAttributeNS(null, 'values', `${this.y} ;
                                      ${maxY} ;
                                      ${minY} ;
                                      ${maxY} ;
                                      ${this.y}`);
        animY.setAttributeNS(null, 'keyTimes', '0 ; 0.25 ; 0.5 ; 0.75 ; 1');
        this.element.appendChild(animY);

        animY.addEventListener('endEvent', () => {            
            this.svg.remove();
            processor.toResponseArea(this.originLevel, this.id);
        });
    }

    setRemainTime(curTime) {
        if(!this.startTime) { // startTimeMs 접미사로 ms, sec
            this.startTime = curTime * 0.001; // / 1000
        }
        const elapsedTime = (curTime * 0.001) - this.startTime;
        this.remainTime = this.delayTime - elapsedTime;        
    }

    changeLevel() {
        if(this.remainTime < 5) {
            this.level = 'normal';
        } else if (this.remainTime < 10) {
            this.level = 'warning';
        } else {
            this.level = 'danger';
        }
    }
    
    setColor() {
        this.element.setAttribute('fill', `url(#${this.level}`);
    }
    
    update(curTime) {
        this.setRemainTime(curTime);
        this.changeLevel();        
        this.setColor();        
    }
}