// boolean

let isLoading: boolean = true;
const isWaiting: boolean = false;


// number

const num: number = 10;
const float: number = 3.5;

// string

const str: string = 'I am str';
const word: string = "TypeScript";

// Array

const arr: number[] = [1, 2, 3];
const arrayOfWords: Array<string> = ['TS', 'JS'];

// Tuple

const x: [string, number] = ['str', 10];

// Enum

enum Citrus {
    Lemon = 0,
    Orange = 10,
    Lime = 11
}

enum Words {
    A = 'adadad',
    B = 'sfsfsf'
}

const obj = {}

let value: number = Citrus.Lemon;
let identificator: string = Citrus[10];  // identificator = Orange

// Unknown

let notSure: unknown = 4;
// let num: number = notSure

notSure = 'str';

// Any

let valueAny: any;
valueAny = 5;
valueAny = 'new string';
valueAny.fixed()

let myNum: number = valueAny;
console.log(`My num - ${myNum}`);

// Void

function sayHello(): void {
    console.log('hello');
}

// Null and Undefined

let u: undefined = undefined;
let n: null = null;

// never 

function infiniteLoop(): never {
    while (true) {

    }
}

function getError(): never {
    throw new Error('error');
}

// Object 

declare function create(o: object | null): void;

// OK
create({ prop: 0 });
create(null);

// Type assertions

let someValue: unknown = "this is a string";

let strLength: number = (someValue as string).length;
// let strLength: number = (<string>someValue).length;






