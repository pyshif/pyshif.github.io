
// 編寫一個函式，給 childA 和 childB 兩物件共用
function hi(arg1 = 1, arg2 = 2, arg3 = 3) {
    console.log('this.name :>> ', this.name);
    console.log('arg1 :>> ', arg1);
    console.log('arg2 :>> ', arg2);
    console.log('arg3 :>> ', arg3);
}

// childA 物件
const childA = {
    name: 'Chris',

    say: hi,
};

// childB 物件
const childB = {
    name: 'Liz',

    say: hi,
};

// 開始各種呼叫
childA.say(); // Chris, 1, 2, 3

childA.say.call(childB); // Liz, 1, 2, 3

childA.say.call(childB, 4, 5, 6); // Liz, 4, 5, 6

childA.say.apply(childB, [4, 5, 6]); // Liz, 4, 5, 6

const aliasChildB = childA.say.bind(childB);

aliasChildB(); // Liz, 4, 5, 6

aliasChildB(7, 8, 9); // Liz, 7, 8, 9

const aliasChildB2 = childA.say.bind(childB, 10, 11, 12);

aliasChildB2(); // Liz, 10, 11, 12

aliasChildB2(13, 14, 15); // Liz, 10, 11, 12
