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
    constructor(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
}
// class Car {
//     readonly numberOfWheels: number = 4;
//     constructor(readonly model: string) {}
// }
// модификаторы
class Animal {
    constructor() {
        this.voice = '';
        this.color = 'black';
    }
    Go() {
        console.log('Go');
    }
}
class Cat extends Animal {
    setVoice(voice) {
        this.voice = voice;
    }
}
const cat = new Cat();
// cat.voice
cat.color;
// абстрактные классы
class Component {
}
class headerComponent extends Component {
    render() {
        console.log('render');
    }
}
function add(x, y) {
    return x + y;
}
let myAdd = function (x, y) {
    return x + y;
};
// let newAdd: (x: number, y: number) => number = function (x: number, y: number):number {
//     return x + y;
// }
let newAdd = (x, y) => x + y;
// параметры
function buildName(firstName, lastName) {
    return lastName
        ? `${firstName} ${lastName}`
        : firstName;
}
// function buildName(firstName = "Will", lastName: string): string {
//     return firstName + '' + lastName;
// }
// function buildName(firstName: string, ...restOfName: string[]): string {
//     return firstName + ' ' + restOfName.join(' '); 
// }
// interface Animal {
//     name: string;
//     getName: () => () => string;
// }
// const bird: Animal = {
//     name: 'sparrow',
//     getName() {
//         return () => {
//             return this.name
//         }
//     }
// }
function identity(arg) {
    return arg;
}
function identity2(arg) {
    return arg;
}
function identity3(value) {
    return value;
}
console.log(identity3(5));
class IdentityClass {
    constructor(value) {
        this.value = value;
    }
    getIdentity() {
        return this.value;
    }
}
const myNumberClass = new IdentityClass(1);
console.log(myNumberClass.getIdentity()); // 1
const rect1 = {
    id: '1233456564',
    size: {
        width: 10,
        height: 10
    },
    color: '#ccc'
};
const rect2 = {
    id: '12447477',
    size: {
        width: 30,
        height: 5
    },
    getArea() {
        return this.width * this.height;
    }
};
class Bird {
    execute(command) { }
    ;
}
class Clock {
    constructor(h, m) {
        this.currentTime = new Date();
    }
    setTime(d = new Date()) {
        this.currentTime = d;
    }
}
// boolean
let isLoading = true;
const isWaiting = false;
// number
const num = 10;
const float = 3.5;
// string
const str = 'I am str';
const word = "TypeScript";
// Array
const arr = [1, 2, 3];
const arrayOfWords = ['TS', 'JS'];
// Tuple
const x = ['str', 10];
// Enum
var Citrus;
(function (Citrus) {
    Citrus[Citrus["Lemon"] = 0] = "Lemon";
    Citrus[Citrus["Orange"] = 10] = "Orange";
    Citrus[Citrus["Lime"] = 11] = "Lime";
})(Citrus || (Citrus = {}));
var Words;
(function (Words) {
    Words["A"] = "adadad";
    Words["B"] = "sfsfsf";
})(Words || (Words = {}));
const obj = {};
let value = Citrus.Lemon;
let identificator = Citrus[10]; // identificator = Orange
// Unknown
let notSure = 4;
// let num: number = notSure
notSure = 'str';
// Any
let valueAny;
valueAny = 5;
valueAny = 'new string';
valueAny.fixed();
let myNum = valueAny;
console.log(`My num - ${myNum}`);
// Void
function sayHello() {
    console.log('hello');
}
// Null and Undefined
let u = undefined;
let n = null;
// never 
function infiniteLoop() {
    while (true) {
    }
}
function getError() {
    throw new Error('error');
}
// OK
create({ prop: 0 });
create(null);
// Type assertions
let someValue = "this is a string";
let strLength = someValue.length;
// let strLength: number = (<string>someValue).length;
// union
let myArr = ['srt', 5];
function padLeft(property, value) {
    if (typeof value === 'string') {
        return {
            property: parseInt(value)
        };
    }
    if (typeof value === 'number') {
        return {
            property: value + 'px'
        };
    }
}
//# sourceMappingURL=index.js.map