

// Animal 建構式（父物件）
class Animal {
    constructor(name) {
        this.name = name;
    }

    talk() {
        console.log(`Hi, my nmae is ${this.name}`);
    }
}

// Rabit 建構式（子物件）
class Rabit extends Animal {
    constructor(name, color) {
        super(name);
        this.cololr = color;
    }
}

// 創建 Rabit 實例
const rabit = new Rabit('Liz', 'white');

console.log('rabit :>> ', rabit);
console.log('rabit.__proto__ === Rabit.prototype :>> ', rabit.__proto__ === Rabit.prototype); // true
console.log('rabit.__proto__.__proto__ === Animal.prototype :>> ', rabit.__proto__.__proto__ === Animal.prototype); // true