// Funções

function addNumber (x: number, y: number): number{
    return x + y;
}

function addToHello(name: string): string {
    return `Hello ${name}`;
}

function CallToPhone(phone: number | string) {
    return phone;
}

let soma: number = addNumber(4, 7);
let helloWord: string = addToHello("Gustavo");

console.log(soma);
console.log(helloWord);

console.log(CallToPhone(18998266408));

// Funções Assíncronas
async function getDatabase(id: number): Promise<number | string> {
    return "Gustavo";
}