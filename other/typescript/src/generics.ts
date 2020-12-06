function identity(arg: number): number {
    return arg;
}

function identity2(arg: any): number {
    return arg;
}

function identity3 <T>(value: T): T {
    return value;
}

console.log(identity3<Number>(5))

// class

interface GenericInterface<U> {
    value: U
    getIdentity: () => U
  }
  
class IdentityClass<T> implements GenericInterface<T> {
    value: T
  
    constructor(value: T) {
      this.value = value
    }
  
    getIdentity () : T {
      return this.value
    }
  
}
  
const myNumberClass = new IdentityClass<Number>(1)
console.log(myNumberClass.getIdentity()) // 1

