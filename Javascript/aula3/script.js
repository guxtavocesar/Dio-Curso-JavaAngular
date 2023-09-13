// Vetores e arrays

// Como declarar Arrays

let array = ['string', 1, true];
// console.log(array);

// Vários tipos de dados
let array2 = ['string', 1, true, ['array1'], ['array2'], ['array3']];
// console.log(array2);

// Foreach
array.forEach(
    function(item, index) {
        console.log(item, index)
    }
)

//Push
array.push(['Novo Array']);
console.log(array);

//Pop
array.pop();
console.log(array);

//Shift
array.shift();
console.log(array);

//Unshift
array.unshift(['Novo Item no inicio']);
console.log(array);

//IndexOf
console.log(array.indexOf(true));

//Splice
array.slice(0, 3);
console.log(array);

//Slice
let novoArray = array.slice(0, 2);
console.log(novoArray);

let object = {
    string: 'string',
    number: 1,
    boolean: true,
    array: ['array'],
    objectInterno: {
        objectInterno: 'Objeto Interno'
    }
}

console.log(object.objectInterno.objectInterno);

var string = object.string;
console.log(string);

var arrayObject = object.array;
console.log(arrayObject);

var {string, boolean, objectInterno } = object;
console.log(string, boolean, objectInterno)

for(i in array) {
    console.log(i);
}

for(i of array) {
    console.log(i);
}