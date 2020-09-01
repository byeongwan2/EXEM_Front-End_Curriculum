import Ball from './Ball.js';

export default class ResponseBall extends Ball {
    constructor(processor) {
        super(processor.svgNS, processor.radius, processor.responseArea.clientHeight * 0.5, processor.radius, processor.findMaxLevel(), processor.responseArea);
        this.element.setAttribute('fill', `url(#${this.level})`);
        this.setAnim(processor);
    }
    
    setAnim(processor) {
        const anim = document.createElementNS(this.svgNS, 'animate');
        anim.setAttributeNS(null, 'attributeName', 'cx');        
        anim.setAttributeNS(null, 'by', `${this.area.clientWidth}`);
        anim.setAttributeNS(null, 'dur', '1s');
        
        this.element.append(anim);
        
        anim.addEventListener('endEvent', () => {
            this.svg.remove();
            processor.responseList.shift();
        });
    }
}