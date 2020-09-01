export default class Ball {    
    constructor(svgNS, x, y, radius, level, area) {
        this.svgNS = svgNS
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.level = level;
        this.area = area;
        this.svg = document.createElementNS(svgNS, 'svg');
        this.element = document.createElementNS(svgNS, 'circle');
        this.element.setAttribute('r', `${this.radius}`);
        this.element.setAttribute('cx', `${this.x}`);
        this.element.setAttribute('cy', `${this.y}`);
        this.svg.append(this.element);
        this.area.append(this.svg);
    }
}