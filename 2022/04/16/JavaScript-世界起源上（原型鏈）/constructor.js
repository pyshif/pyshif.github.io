// 宣告一個建構式（constructor）
function Child(name, age) {
    this.name = name;
    this.age = age;
}

// 增加一個原型方法（所有使用 new 運算子和 Child 建構是創建的新物件都會繼承這個方法）
// 說是『繼承』，其實只是在原型鏈上方都會連結到這個方法
Child.prototype.selfIntro = function () {
    console.log('My name is :>>', this.name);
    console.log('My age is :>>', this.age);
}

// 創建一個繼承 Child 原型的物件
const childLiz = new Child('Liz', 18);

console.log('------------------------------');

// 檢查是否有繼承原型方法
childLiz.selfIntro();

// 用代號表示新物件，和沿著原型鏈往上方尋找
const A = childLiz;
const B = A.__proto__; // 等同 Object.getPrototypeOf(A);
const C = B.__proto__; // 等同 Object.getPrototypeOf(B);
const D = C.__proto__; // 等同 Object.getPrototypeOf(C);

console.log('------------------------------');

// 原型鏈的組成
console.log('A :>> ', A);
console.log('B :>> ', B);
console.log('C :>> ', C);
console.log('D :>> ', D);

console.log('------------------------------');

// 各個原型分別代表誰（object）
console.log('A === childLiz :>> ', A === childLiz);
console.log('B === Child.prototype :>> ', B === Child.prototype);
console.log('C === Object.prototype :>> ', C === Object.prototype);
console.log('D === null :>> ', D === null);