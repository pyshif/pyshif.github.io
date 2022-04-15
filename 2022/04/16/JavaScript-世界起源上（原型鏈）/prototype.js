
// 1
console.log('Object instanceof Function :>> ', Object instanceof Function); // true
console.log('Function instanceof Object :>> ', Function instanceof Object); // true


// 2
// 作為一個 Object() 建構式，繼承了『物件原型』和『函式原型』
console.log('Object instanceof Object :>> ', Object instanceof Object); // true
console.log('Object instanceof Function :>> ', Object instanceof Function); // true
// 作為一個 Function() 建構式，繼承了『物件原型』和『函式原型』
console.log('Function instanceof Object :>> ', Function instanceof Object); // true
console.log('Function instanceof Function :>> ', Function instanceof Function); // true