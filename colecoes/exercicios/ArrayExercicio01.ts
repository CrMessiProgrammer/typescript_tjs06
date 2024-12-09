/*
    Exercício 1: Escreva um programa para criar uma Collection Array de Objetos
    do tipo string. O programa deverá solicitar ao usuário, que ele digite via
    teclado 5 cores e deverá adicioná-las individualmente no Array. Em seguida,
    faça o que se pede:
    Mostre na tela todas as cores adicionadas.
    Mostre na tela todas as cores adicionadas, ordenadas em ordem crescente.
*/

import readlinesync = require('readline-sync')

let cores: Array<string> = new Array<string>();
let cor: string;

for (let contador = 1; contador <= 5; contador++) {
    let cor = readlinesync.question(`\nDigite a ${contador} cor: `);
}