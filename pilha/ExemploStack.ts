import { Stack } from "./Stack";

const pilha = new Stack<string>();

// adiciona dados na pilha
pilha.push("Prato azul");
pilha.push("Prato amarelo");
pilha.push("Prato preto");
pilha.push("Prato branco");
pilha.push("Prato vermelho");

// imprimi a pilha
pilha.printStack();

// verifica se existe ou não o elemento na pilha
console.log(pilha.contains("Prato branco"));

// retira um elemento da pilha (nesse caso o primeiro elemento, por ser um LIFO - Last In - First Out "o último elemento inserido na pilha é o primeiro elemento que será retirado da pilha.")
pilha.pop();

pilha.printStack();

// checa o elemento que está no topo da pilha
console.log("\nO elemento no topo da pilha é: " + pilha.peek());

// checa o tamanho da pilha
console.log("\nO número de elementos na pilha é: " + pilha.count());