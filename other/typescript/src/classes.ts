// class Users {
//     id: number;
//     name: string;
    
//     constructor(userId: number, userName: string) {
//         this.id = userId;
//         this.name = userName
//     }

//     getInfo(): string {
//         return `id - ${this.id},  name - ${this.name}`;
//     }
// }

// let Tom: Users = new Users(12345, 'Tom');
// console.log(Tom);


class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

// class Car {
//     readonly numberOfWheels: number = 4;
//     constructor(readonly model: string) {}
// }

// модификаторы

class Animal {
    protected voice: string = '';
    public color: string = 'black';

    private Go(): void {
        console.log('Go')
    }
}

class Cat extends Animal {
    public setVoice(voice: string): void {
        this.voice = voice;
    }
}

const cat = new Cat();
// cat.voice
cat.color

// абстрактные классы

abstract class Component {
    abstract render(): void
}

class headerComponent extends Component {
    render(): void {
        console.log('render');
    }
}








