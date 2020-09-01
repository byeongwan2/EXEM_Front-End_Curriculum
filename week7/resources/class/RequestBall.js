import Ball from './Ball.js';

export default class RequestBall extends Ball {
    constructor(processor, data) {
        super(processor.svgNS, processor.radius, processor.requestArea.clientHeight * 0.5, processor.radius, 'normal', processor.requestArea);
        this.data = data;
        this.element.setAttribute('fill', 'url(#normal)');
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
            processor.toDelayArea();
        });
    }  
}