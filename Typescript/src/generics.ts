// Generics

// npm install ts-node-dev -D
//"start:dev": "ts-node-dev --respawn --transpile-only src/index.ts",
//npm run start:dev

function concatArray<T>(...itens: T[]): T[] {
    return new Array().concat(...itens);
}

const numArray = concatArray<number[]>([1, 5], [3]);
const stgArray = concatArray<string[]>(["Gustavo", "Cesar"], ["Luzi", "Pereira"]);

console.log(numArray);
console.log(stgArray);