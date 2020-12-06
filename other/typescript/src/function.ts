function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function(x: number, y: number): number {
    return x + y;
}

// let newAdd: (x: number, y: number) => number = function (x: number, y: number):number {
//     return x + y;
// }

let newAdd: (x: number, y: number) => number = (x, y) => x + y;

// параметры

function buildName(firstName: string, lastName?: string) {
    return lastName 
        ? `${firstName} ${lastName}`
        : firstName 
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

















