// Decorators

function ExibirNome(target: any) {
    console.log(target);
}

@ExibirNome
class Funcionario { }

// *________________________________*

function apiVersion(version: string) {
    return (target: any) => {
        Object.assign(target.prototype, { __version: version });
    }
}

@apiVersion("4.10")
class Api { }

const api = new Api;
console.log(api);

// Atributo Decorator

function minLenght(lenght: number) {
    return (target: any, key: string) => {
        let __value = target[key]; // Alvo para o decorator

        const getter = () => __value;
        const setter = (value: string) => {
            if (value.length < lenght) {
                throw new Error(`Tamanho menor do que ${lenght}`);
            } else {
                __value = value;
            }

            Object.defineProperty(target, key, {
                get: getter,
                set: setter,
            });
        }
    }
}

class Api2 {
    @minLenght(3)
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

const api2 = new Api2("Produtos");
console.log(api2.name);

