import TextCount from './TextCount.js';

export default class TextRenderer {
    constructor(processor) {
        this.requestCount = new TextCount(processor.svgNS, processor.requestArea.clientWidth * 0.1, processor.requestArea.clientHeight * 0.2, '0', processor.requestArea);
        this.normalCount = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.1, processor.delayArea.clientHeight * 0.2, '0', processor.delayArea);
        this.warningCount = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.4, processor.delayArea.clientHeight * 0.2, '0', processor.delayArea);
        this.dangerCount = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.7, processor.delayArea.clientHeight * 0.2, '0', processor.delayArea);
        this.responseCount = new TextCount(processor.svgNS, processor.responseArea.clientWidth * 0.7, processor.responseArea.clientHeight * 0.2, '0', processor.responseArea);

        this.requestText = new TextCount(processor.svgNS, processor.requestArea.clientWidth * 0.2, processor.requestArea.clientHeight * 0.2, '요청', processor.requestArea);
        this.normalText = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.2, processor.delayArea.clientHeight * 0.2, '정상', processor.delayArea);
        this.warningText = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.5, processor.delayArea.clientHeight * 0.2, '경고', processor.delayArea);
        this.dangerText = new TextCount(processor.svgNS, processor.delayArea.clientWidth * 0.8, processor.delayArea.clientHeight * 0.2, '심각', processor.delayArea);
        this.responseText = new TextCount(processor.svgNS, processor.responseArea.clientWidth * 0.8, processor.responseArea.clientHeight * 0.2, '응답', processor.responseArea);

        this.requestCount.element.classList.add('count');
        this.normalCount.element.classList.add('count', 'normal');
        this.warningCount.element.classList.add('count', 'warning');
        this.dangerCount.element.classList.add('count', 'danger');
        this.responseCount.element.classList.add('count');
    }
    
    update(processor) {
        this.requestCount.element.textContent = processor.requestList.length;
        this.normalCount.element.textContent = processor.delayCount.normal;
        this.warningCount.element.textContent = processor.delayCount.warning;
        this.dangerCount.element.textContent = processor.delayCount.danger;
        this.responseCount.element.textContent = processor.responseList.length;
    }
}