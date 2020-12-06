// class Users {
//     id: number;
//     name: string;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Car = /** @class */ (function () {
    function Car(theModel) {
        this.numberOfWheels = 4;
        this.model = theModel;
    }
    return Car;
}());
// class Car {
//     readonly numberOfWheels: number = 4;
//     constructor(readonly model: string) {}
// }
// модификаторы
var Animal = /** @class */ (function () {
    function Animal() {
        this.voice = '';
        this.color = 'black';
    }
    Animal.prototype.Go = function () {
        console.log('Go');
    };
    return Animal;
}());
var Cat = /** @class */ (function (_super) {
    __extends(Cat, _super);
    function Cat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cat.prototype.setVoice = function (voice) {
        this.voice = voice;
    };
    return Cat;
}(Animal));
var cat = new Cat();
// cat.voice
cat.color;
// абстрактные классы
var Component = /** @class */ (function () {
    function Component() {
    }
    return Component;
}());
var headerComponent = /** @class */ (function (_super) {
    __extends(headerComponent, _super);
    function headerComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    headerComponent.prototype.render = function () {
        console.log('render');
    };
    return headerComponent;
}(Component));
