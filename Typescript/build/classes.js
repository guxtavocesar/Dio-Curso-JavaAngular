"use strict";
// Classes
/*
    Data Modifiers
    Public
    Private
    Protected
*/
class Personagem {
    constructor(name, strenght, skill) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }
    attack() {
        console.log(` ${this.name} Attack with ${this.strenght} points`);
    }
}
// Personagem = Superclass
// Magician = Subclass
class Magician extends Personagem {
    // Criando um construtor da subclasse, recebendo parametros, e passando esses parâmetros através do método super
    // para a Superclass.
    constructor(name, strenght, skill, magicPoints) {
        super(name, strenght, skill);
        this.magicPoints = magicPoints;
    }
}
const persona1 = new Personagem("Kamen Rider", 197, 50);
persona1.attack();
const persona2 = new Magician("Mago", 10, 30, 100);
persona2.attack();
