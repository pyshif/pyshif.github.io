
// Animal 建構式（父物件）
function Animal(name) {
    this.name = name;
}

// Animal 原型
Animal.prototype.talk = function () {
    console.log(`Hi, my name is ${this.name}`);
}

// Rabit 建構式（子物件）
function Rabit(name, color) {
    Animal.call(this, name);
    this.color = color;
}

// 將 Rabit 原型 連結 Animal 原型
// Rabit.prototype.__proto__ = Animal.prototype;
// OR
Object.setPrototypeOf(Rabit.prototype, Animal.prototype);

// 創建 Rabit 實例
const rabit = new Rabit('Liz', 'white');

console.log('rabit :>> ', rabit);
console.log('rabit.__proto__ === Rabit.prototype :>> ', rabit.__proto__ === Rabit.prototype); // true
console.log('rabit.__proto__.__proto__ === Animal.prototype :>> ', rabit.__proto__.__proto__ === Animal.prototype); // true