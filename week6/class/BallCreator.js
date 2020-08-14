class BallCreator {
    constructor() {
        this.dataList = [];
    }
    createData(canvas, radius) {
        for(let i = 0; i < 100; i++) {
            this.setData(canvas, radius)
        }
        // setInterval(() => {
        //     for (let i = 0; i < 100; i++) {
        //         this.setData(canvas, radius);
        //     }
        // }, 1000);
    }
    setData(canvas, radius) {
        const maxX = Math.floor(Math.random() * (canvas.width - radius));
        const maxY = Math.floor(Math.random() * (canvas.height - radius));
        const vel = Math.random() * 3;
        const delayTime = Math.random() * 15;
        const level = this.setLevel(delayTime);

        this.dataList.push(new DelayBall(
            Math.max(radius, maxX),
            Math.max(radius, maxY),
            vel,
            vel,
            radius,
            level,
            delayTime
        ));
    }
    getData() {
        return this.dataList.splice(-20, 20);
    }
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