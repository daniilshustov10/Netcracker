interface IRect {
    readonly id: string;
    size : {
        width: number;
        height: number;
    };
    color?: string;
}

const rect1: IRect = {
    id: '1233456564',
    size: {
        width: 10,
        height: 10
    },
    color: '#ccc'
}

interface IRectWithArea extends IRect {
    getArea: () => number;
}

const rect2: IRectWithArea = {
    id: '12447477',
    size: {
        width: 30,
        height: 5
    },
    getArea() {
        return this.width * this.height;
    }
}




// class and interface

interface IAnimal {
    nickname: string;

    execute(command: string): void;
}

class Bird implements IAnimal {
    nickname: string;
    execute(command: string): void {};
}

interface ClockInterface {
    currentTime: Date;
    setTime(d: Date): void;
  }
  
  class Clock implements ClockInterface {
    currentTime: Date = new Date();
    setTime(d: Date = new Date()) {
        this.currentTime = d;
    }
    constructor(h: number, m: number) {}
  }





