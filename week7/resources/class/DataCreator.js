import Data from './Data.js';

export default class DataCreator {
    constructor() {
        this.dataList = [];
    }

    createData(delayArea, radius) {
        setInterval(() => {
            for (let i = 0; i < 100; i++) {
                this.setData(delayArea, radius);
            }            
        }, 1000);
    }
    
    setData(delayArea, radius) {
        const maxX = Math.floor(Math.random() * delayArea.clientWidth - radius);
        const maxY = Math.floor(Math.random() * delayArea.clientHeight - radius);
        const minY = Math.floor(Math.random() * delayArea.clientHeight * 0.7 + delayArea.clientHeight * 0.3 - radius);
        const delayTime = Math.ceil(Math.random() * 15);
        const level = this.setLevel(delayTime);
        const data = new Data(Math.max(radius, maxX), Math.max(minY, maxY), radius, level, delayTime);

        this.dataList.push(data);
    }

    getData() {
        return this.dataList.splice(-20, 20);
    }

    setLevel(delayTime) {
        if (delayTime < 5) {
            return 'normal';
        } else if (delayTime < 10) {
            return 'warning';
        } else {
            return 'danger';
        }
    }
}