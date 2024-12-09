/*
    Exercício 3: Escreva um programa para criar uma Collection Set do tipo
    number. O programa deverá solicitar ao usuário, que ele digite via teclado
    10 valores inteiros não repetidos e adicione-os individualmente na
    Collection Set. Em seguida, faça o que se pede:
    Mostre na tela todos os elementos da Collection Set.
*/

import readlinesync = require('readline-sync')

const numeros: Set<number> = new Set<number>();
//let contador = 1;

console.log("\n-Informe abaixo 10 números inteiros (não repetir)-");
console.log("---------------------------------------------------");

for (let contador = 1; contador <= 10; contador++) {
    const numInteiros = readlinesync.questionInt(`Digite o ${contador} Numero Inteiro: `);
    numeros.add(numInteiros);
}

// verificação, garante que o programa só termine quando o tamanho do Set atingir 10, mesmo que o usuário insira números repetidos
//while (contador <= 10) {
//    const numInteiros = readlinesync.questionInt(`Digite o ${contador} Numero Inteiro: `);
//
//    if (numeros.has(numInteiros)) {
//        console.log("Número repetido! Tente outro.\n");
//    } else {
//        numeros.add(numInteiros);
//        console.log("Número adicionado!\n");
//        contador++;
//    }
//}

console.log("-------------------------------------\n");
console.log(" Dados do Set 'numeros': ");

let numerosOrdenado: Array<number> = Array.from(numeros).sort((a,b) => a - b);

for (const numero of numerosOrdenado) {
    console.log(numero);
}

//console.log("Todos os números foram inseridos com sucesso!");