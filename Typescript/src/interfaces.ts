//Interfaces (Type x Interface)

// Usado para tipagem de variáveis

// Basicamente um Struct
type robot = {
    id: number;
    name: string;
};

// Trabalhar com classes - Uma espécie de padrão, um contrato
interface robot2 {
    readonly id: number; // Apenas leitura, não é possivel, externamente, alterá-la
    name: string;
    sayHello(): string;
}

const bot: robot = {
    id: 1,
    name: "Megamen",
};

class Pessoa implements robot2 {
    id: number;
    name: string;
    
    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    sayHello(): string {
        return `Hello ${this.name}`;
    }
}

const p = new Pessoa(1, "Gustman");
console.log(p.sayHello());