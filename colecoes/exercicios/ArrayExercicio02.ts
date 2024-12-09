/*
    Exercício 2: Escreva um programa para criar uma Collection Array do tipo
    number, inicializada com 10 valores inteiros. O programa deverá solicitar ao
    usuário, que ele digite via teclado 1 número inteiro e caso ele seja
    encontrado no Array, exiba na tela a posição deste número na Collection.
    Caso o número não seja encontrado, o programa deverá exibir na tela a
    mensagem: O número NN não foi encontrado!
*/

import readlinesync = require('readline-sync')

const numeros: Array<number> = new Array<number>();

let numIniciais: number;
let numDigitados: number;

console.log("\n-Informe abaixo 10 números inteiros-");
console.log("-------------------------------------");

for (let contador = 1; contador <= 10; contador++) {
    numIniciais = readlinesync.questionInt(`Digite o ${contador} Numero Inteiro: `);
    numeros.push(numIniciais);
}

console.log("\n-------------------------------------\n");
console.log(" Array 'numeros': ");

console.table(numeros);
console.log(numeros);

console.log("\n-------------------------------------\n");


numDigitados = readlinesync.questionInt(`Digite o numero inteiro que deseja encontrar: `);

const posicao = numeros.indexOf(numDigitados);

if (posicao !== -1) {
    console.log(`-> O número ${numDigitados} está localizado na posição: ${posicao}`);
} else {
    console.log(`-> O número ${numDigitados} não foi encontrado!`);
}