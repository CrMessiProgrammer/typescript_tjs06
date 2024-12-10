/*
    Exercício 2: Escreva um programa contendo uma Collection Stack (Pilha) de
    Objetos string, para organizar a retirada de livros de uma pilha. O programa
    deverá ter um Menu que aceitará as opções 0, 1, 2 e 3:
    1: Adicionar um novo livro na pilha. Deve solicitar o nome do livro.
    2: Listar todos os livros da Pilha
    3: Retirar um livro da pilha
    0: O programa deve ser finalizado.
    Caso a pilha esteja vazia, ao tentar retirar um livro da pilha, o programa deverá informar
    que a pilha está vazia.
*/

import readlinesync = require('readline-sync');
import { Stack } from '../Stack';

const pilha = new Stack<string>();

console.log("\n***********************Menu***********************");
console.log(" 1 - Adicionar Livro na Pilha ");
console.log(" 2 - Listar Todos os Livros  ");
console.log(" 3 - Retirar Livro da Pilha   ");
console.log(" 0 - Sair                      ");
console.log("**************************************************");

let menu: number;
let livro: string;

do {
    menu = readlinesync.questionInt("\nEntre com a opcao desejada (0 a 3): ");
    switch (menu) {
        case 1:
            livro = readlinesync.question("\n-> Digite o Nome do Livro: ");
            pilha.push(livro);
            console.log("Livro adicionado com sucesso!");
            console.log("\nPilha Atualizada: ");
            pilha.printStack();
            console.log("\n**************************************************");
            break;
        case 2:
            if (pilha.count() <= 0) {
                console.log("A Pilha está vazia!");
                console.log("\n**************************************************");
                break;
            } else {
                console.log("\nLista de Livros na Pilha: ");
                pilha.printStack();
                console.log("\n**************************************************");
                break;
            }
        case 3:
            if (pilha.count() <= 0) {
                console.log("A Pilha está vazia!");
                console.log("\n**************************************************");
                break;
            } else {
                console.log("\nLivro Retirado -> ", pilha.pop());
                console.log("\nPilha Atualizada: ");
                pilha.printStack();
                console.log("\n**************************************************");
                break;
            }
        case 0:
            console.log("Saída com Êxito! Programa Finalizado!");
            console.log("\n**************************************************");
            break;
        default:
            console.log("ERRO! Informe Novamente!");
            console.log("\n**************************************************");
            break;
    }
} while (menu !== 0);