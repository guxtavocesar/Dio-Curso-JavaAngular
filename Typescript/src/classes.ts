// Classes

/*
    Data Modifiers
    Public
    Private
    Protected
*/

class Personagem {

    // Atributos
    public name: string;
    private strenght: number;
    protected skill: number;

    constructor(name: string, strenght: number, skill: number) {
        this.name = name;
        this.strenght = strenght;
        this.skill = skill;
    }

    public attack(): void {
        console.log(` ${this.name} Attack with ${this.strenght} points`);
    }

}

// Personagem = Superclass
// Magician = Subclass
class Magician extends Personagem {
    magicPoints: number;
    // Criando um construtor da subclasse, recebendo parametros, e passando esses parâmetros através do método super
    // para a Superclass.
    constructor(
        name: string,
        strenght: number,
        skill: number,
        magicPoints: number) {

        super(name, strenght, skill);
        this.magicPoints = magicPoints;

    }
}

const persona1 = new Personagem("Kamen Rider", 197, 50);
persona1.attack();

const persona2 = new Magician("Mago", 10, 30, 100);
persona2.attack();
