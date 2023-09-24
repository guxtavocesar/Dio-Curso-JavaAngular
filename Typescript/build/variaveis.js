"use strict";
console.log("Hello Word");
// Tipos primitivos: boolean, number, string
let ligado = true;
let nome = `Gustavo César`;
let idade = 18;
/* Tipos Especiais de variáveis */
//Null
//Undefined
let nulo = null;
let indefinido = undefined;
//Tipos abrangentes: Any, Void
let retorno;
function executaQuery() {
    //...
}
// Aceita qualquer tipo
let retornoView = ["Gustavo César", 18, null, true, ""];
/*________________________________________________________*/
//Objeto - Sem previsibilidade
let produto = {
    name: "Pepsi cola",
    preco: 15.00,
    fabrica: "Pepsico",
    pais: "United States of America"
};
let meuProduto = {
    name: "Coca cola",
    preco: 20.00,
    fabrica: "Coke",
    pais: "United States of America"
};
/*________________________________________________________*/
// Arrays
let dados = ["Gustavo", "Cesar", "Luzi", "Pereira"];
let dados2 = ["Gustavo", "Cesar", "Luzi", "Pereira"];
let infos = ["Gustavo", 18, "Cesar", 2004];
/*________________________________________________________*/
// Tuplas - Vetor com vários tipos com ordem obrigatorio e padrão de informações
let boleto = ["Agua conta", 150.00, 74116500];
// Datas
let aniversario = new Date("2004-12-03 13:00");
console.log(aniversario.toString());
