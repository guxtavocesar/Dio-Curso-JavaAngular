"use strict";
//Interfaces (Type x Interface)
const bot = {
    id: 1,
    name: "Megamen",
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `Hello ${this.name}`;
    }
}
const p = new Pessoa(1, "Gustman");
console.log(p.sayHello());
