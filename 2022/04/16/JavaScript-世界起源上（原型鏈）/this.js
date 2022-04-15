// 定義一個全域變數 name（觀察待會函式的呼叫會不會打印出這個變數）
const name = "Liz";

// 定義一個物件
const child = {
    // 定義一個區域變數 name（觀察待會函式的呼叫會不會打印出這個變數）
    name: 'Chris',
    hi: function () {
        console.log('my name is :>>', this.name);
    }
};

// 讓我們將 child 中 hi 函式賦值給 aliasHi 這個址參器，製造一個分身
const aliasHi = child.hi;

// 觀察 aliasHi 和 child.hi 兩個函式的輸出
child.hi(); // Chris
aliasHi(); // undefined