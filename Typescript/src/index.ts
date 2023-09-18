console.log("Hello Word");

// Tipos primitivos: boolean, number, string
let ligado: boolean = true;
let nome: string = `Gustavo César`;
let idade: number = 18;

/* Tipos Especiais de variáveis */
//Null
//Undefined
let nulo:null = null;
let indefinido:undefined = undefined;

//Tipos abrangentes: Any, Void
let retorno:void;
function executaQuery():void {
    //...
}

// Aceita qualquer tipo
let retornoView:any = ["Gustavo César", 18, null, true, ""]

/*________________________________________________________*/

//Objeto - Sem previsibilidade
let produto:object = {
    name: "Pepsi cola",
    preco: 15.00,
    fabrica: "Pepsico",
    pais: "United States of America"
};


// Objeto tipado - Com previsibilidade
type produtoLoja = {
    name:string,
    preco:number,
    fabrica: string,
    pais:string
}

let meuProduto:produtoLoja = {
    name: "Coca cola",
    preco: 20.00,
    fabrica: "Coke",
    pais: "United States of America"
}

/*________________________________________________________*/

// Arrays
let dados: string[] = ["Gustavo", "Cesar", "Luzi", "Pereira"];
let dados2: Array<string> = ["Gustavo", "Cesar", "Luzi", "Pereira"];

/*________________________________________________________*/

//
