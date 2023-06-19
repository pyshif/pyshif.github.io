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

// 創建 Rabit 實例
const rabit = new Rabit('Liz', 'white');

console.log('rabit :>> ', rabit);