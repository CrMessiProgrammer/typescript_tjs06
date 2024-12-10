import readlinesync = require('readline-sync');
import { Queue } from './Queue';

const fila = new Queue<string>();

// adiciona dados na fila
fila.enqueue("Beatriz");
fila.enqueue("Gustavo");
fila.enqueue("Alana");

fila.enqueue(readlinesync.question("\nDigite o seu nome: "));

// imprimi a fila
fila.printQueue();

// verifica se existe ou não o elemento na fila
console.log(fila.contains("Alana"));

// checa o tamanho da fila
console.log(fila.count());

// retira um elemento da fila (nesse caso o primeiro elemento, por ser um FIFO - first in, first out "o primeiro elemento que entra é o primeiro elemento que sai")
fila.dequeue();
console.log("\nPessoa removida: ", fila.dequeue());

fila.printQueue();

// não remove, apenas mostra o primeiro da fila (o próximo)
console.log(fila.peek());