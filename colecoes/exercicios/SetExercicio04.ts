/*
    Exercício 4: Escreva um programa para criar uma Collection Set do tipo
    number, inicializada com 10 valores inteiros. O programa deverá solicitar ao
    usuário, que ele digite via teclado 1 número inteiro e caso ele seja
    encontrado na Colection Set, exiba na tela a mensagem: O Número NN foi
    encontrado! Caso o número não seja encontrado, o programa deverá exibir na
    tela a mensagem: O número NN não foi encontrado!
*/

import readlinesync = require('readline-sync')

const numeros: Set<number> = new Set<number>;

console.log("\n-Informe abaixo 10 números inteiros (não repetir)-");
console.log("---------------------------------------------------");

for (let contador = 1; contador <= 10; contador++) {
    const numInteiros = readlinesync.questionInt(`Digite o ${contador} Numero Inteiro: `);
    numeros.add(numInteiros);
}