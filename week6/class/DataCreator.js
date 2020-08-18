import DelayBall from './DelayBall.js';

export default class DataCreator {
    constructor() {
        this.dataList = [];
    }

    /**
     * Create data every 1 sec
     * 
     * @param {canvas} canvas 
     * @param {number} radius 
     */
    createData(canvas, radius) {        
        setInterval(() => {
            for (let i = 0; i < 100; i++) {
                this.setData(canvas, radius);
            }
        }, 1000);
    }

    /**
     * Set random data
     * 
     * @param {canvas} canvas 
     * @param {number} radius 
     */
    setData(canvas, radius) {
        const maxX = Math.floor(Math.random() * canvas.width - radius);
        const maxY = Math.floor(Math.random() * canvas.height - radius);
        const minY = Math.floor(Math.random() * canvas.height * 0.8 - radius + canvas.height * 0.3)
        const vel = Math.random() * 3;
        const delayTime = Math.random() * 15;
        const level = this.setLevel(delayTime);

        this.dataList.push(new DelayBall(
            Math.max(radius, maxX),
            Math.max(minY, maxY),
            vel,
            vel,
            radius,
            level,
            delayTime
        ));
    }

    /**
     * @return {number[]}
     */
    getData() {
        return this.dataList.splice(-20, 20);
    }

    /**
     * Set level from delayTime
     * 
     * @param {number} delayTime
     * @return {number}
     */
    setLevel(delayTime) {
        if (delayTime < 5) {
            return 1;
        } else if (delayTime < 10) {
            return 2;
        } else {
            return 3;
        }
    }
}