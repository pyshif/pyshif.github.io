// 1
function User(name, age) {
    this.name = name;
    this.age = age;
}

// 為原型添加屬性
User.prototype.lang = 'en';

// 為原型添加方法
User.prototype.hi = function () {
    console.log(`My name is ${this.name}`);
}

// 靜態屬性、方法
User.location = 'USA';
User.displayLocation = function () {
    console.log('this.location :>> ', this.location);
}


// 2
class CUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // 為原型添加方法
    hi() {
        console.log(`My name is ${this.name}`);
    }

    // 靜態屬性、方法
    static location = 'USA';
    static displayLocation() {
        console.log('this.location :>> ', this.location);
    }
}

// 為原型添加屬性
CUser.prototype.lang = 'zh';



const user = new User('Liz', 6);
const cUser = new CUser('CLiz', 6);


console.log('user :>> ', user);
console.log('cUser :>> ', cUser);