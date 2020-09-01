export default class TextCount{
    constructor(svgNS, x, y, text, area) {
        this.element = document.createElementNS(svgNS, 'text');
        this.element.setAttribute('x', `${x}`);
        this.element.setAttribute('y', `${y}`);
        this.element.textContent = text;
        area.append(this.element);
    }
    
}