import readlinesync = require('readline-sync')

let numero1: number;
let numero2: number;

numero1 = readlinesync.questionFloat('\nDigite o primeiro numero: ');
numero2 = readlinesync.questionFloat('Digite o segundo numero: ');

console.log(`\nA soma entre: ${numero1} + ${numero2} = ${numero1+numero2}`);
console.log(`A subtração entre: ${numero1} - ${numero2} = ${numero1-numero2}`);
console.log(`A multiplicação entre: ${numero1} * ${numero2} = ${numero1*numero2}`);
console.log(`A divisão entre: ${numero1} / ${numero2} = ${numero1/numero2}`);