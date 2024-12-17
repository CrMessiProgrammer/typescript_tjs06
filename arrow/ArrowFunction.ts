let numeros: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Listar com o For
console.log("\nListar Números");

for (let numero of numeros) {
    console.log(numero);
}

// Listar com o forEach e Arrow Functions
console.log("\nListar Números com forEach()");

// Arrow Function
numeros.forEach(numero => console.log(numero));

// Número elevado ao quadrado
console.log("\nListar Números e multiplicar por ele emsmo");

numeros.forEach(numero => console.log(numero * numero));

// Listar somente os numeros pares
console.log("\nListar somente os Números Pares");

// Dentro do 'forEach' está sendo passado uma ArrowFunction
numeros.forEach(numero => {
    if (numero % 2 === 0) {
        console.log(numero);
    }
});

// Com um parâmetro não precisamos de parenteses, à partir de dois sim