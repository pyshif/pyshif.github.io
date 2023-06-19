

function User(name, age) {
    this.name = name;
    this.age = age;
}


class CUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}



const user = new User('Liz', 6);
const cUser = new CUser('CLiz', 6);


console.log('user :>> ', user);
console.log('cUser :>> ', cUser);
