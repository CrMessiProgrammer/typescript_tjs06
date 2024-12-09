import readlinesync = require('readline-sync')

// Criamos a Coleção Array vazia
const numeros: Array<number> = new Array<number>();

// Adicionamos os valores na Coleção
numeros.push(7);
numeros.push(2);
numeros.push(5);
numeros.push(10);
numeros.push(7, 10);

// Listamos os dados que foram adicionados
// ele lê o array 'numeros' e armazena na variável 'numero'
for (let numero of numeros) {
    console.log(numero);
}

// 'push' adiciona elementos na Coleção, mas no final da fila
numeros.push(readlinesync.questionFloat("Digite um numero: "));

// 'unshift' adiciona elementos na Coleção, mas no começo da fila
numeros.unshift(2, 4.5, 8, 9);

console.table(numeros);

// 'includes' verifica se o numero '5' existe dentro do array (coleção)
console.log("\nExiste o numero 5 no array? ", numeros.includes(5));

// 'indexOf' retorna o índice do elemento '3' no array (se não for encontrado, retorna -1)
console.log("\nQual o indice do numero 3 no array? ", numeros.indexOf(3));

// remove apenas o numero '10', o valor depois da vírgula representa se apagá mais algum numero além do '10'. Se não por nada depois da vírgula, apaga todos os valores à partir daquele numero
numeros.splice(numeros.indexOf(10), 1);

console.table(numeros);