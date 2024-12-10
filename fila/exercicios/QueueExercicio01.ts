/*
    Exercício 1: Escreva um programa contendo uma Collection Queue (Fila) de
    Objetos do tipo string, para organizar uma fila por ordem de chegada dos
    Clientes de um Banco. O programa deverá ter um Menu que aceitará as opções
    0, 1, 2 e 3:
    1: Adicionar um novo Cliente na fila. Deve solicitar o nome do Cliente.
    2: Listar todos os Clientes na fila
    3: Chamar (retirar) uma pessoa da fila
    0: O programa deve ser finalizado.
    Caso a fila esteja vazia, o programa deverá informar que a fila está vazia
    ao tentar retirar (chamar) um cliente da fila.
*/

import readlinesync = require('readline-sync');
import { Queue } from '../Queue';

const fila = new Queue<string>();

console.log("\n*****************Menu*****************");
console.log(" 1 - Adicionar Cliente na Fila ");
console.log(" 2 - Listar Todos os Clientes  ");
console.log(" 3 - Retirar Cliente da Fila   ");
console.log(" 0 - Sair                      ");
console.log("**************************************");

let menu: number;
let cliente: string;

do {
    menu = readlinesync.questionInt("\nEntre com a opcao desejada (0 a 3): ");
    switch (menu) {
        case 1:
            cliente = readlinesync.question("\n-> Digite o Nome do Cliente: ");
            fila.enqueue(cliente);
            console.log("Cliente adicionado com sucesso!");
            console.log("\nFila Atualizada: ");
            fila.printQueue();
            console.log("\n**************************************");
            break;
        case 2:
            if (fila.count() <= 0) {
                console.log("A Fila está vazia!");
                console.log("\n**************************************");
                break;
            } else {
                console.log("\nLista de Clientes na Fila: ");
                fila.printQueue();
                console.log("\n**************************************");
                break;
            }
        case 3:
            if (fila.count() <= 0) {
                console.log("A Fila está vazia!");
                console.log("\n**************************************");
                break;
            } else {
                console.log("\nCliente Chamado -> ", fila.dequeue());
                console.log("\nFila Atualizada: ");
                fila.printQueue();
                console.log("\n**************************************");
                break;
            }
        case 0:
            console.log("Saída com Êxito! Programa Finalizado!");
            console.log("\n**************************************");
            break;
        default:
            console.log("ERRO! Informe Novamente!");
            console.log("\n**************************************");
            break;
    }
} while (menu !== 0);