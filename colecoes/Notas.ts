const notas: Array<number> = new Array<number>(7.0, 5.0, 4.0, 10.0);

console.log("\nExibir o Array 'notas': ");

// utilizando o laço 'for(of)' para exibir os dados armazenados na collection 'notas'
for (const nota of notas) {
    console.log(nota.toFixed(1));
}

console.log("\n-----------------------------------");

// adicionando uma nova nota (dado)
notas.push(4.0);

// adicionando várias notas (dados) de uma única vez
notas.unshift(2.5, 9.0);

console.log("\nExibir as Novas Notas Cadastradas: ");

for (const nota of notas) {
    console.log(nota.toFixed(1));
}

// checando o índice de uma nota (dado) no array
console.log("\nO índice da nota 2.5 é: " + notas.indexOf(2.5));

// checando se a nota (dado) '2.5' existe no array (tipo boolean)
console.log("\nA nota 2.5 está cadastrada no Array 'notas'? " + notas.includes(2.5));

console.log("\n-----------------------------------");

// alterando o valor de uma nota (dado), atribuindo o novo valor através do índice da nota que deseja alterar (o 'indexOf()')
notas[notas.indexOf(7.0)] = 6.0;

console.log("\nExibir a Nota Alterada: ");

for (const nota of notas) {
    console.log(nota.toFixed(1));
}

console.log("\n-----------------------------------");

// apagando uma nota (dado) através do 'splice()', no qual possui dois parâmetros (1º o índice da nota que deseja apagar, por meio do 'indexOf()'; 2º o número de notas que deseja apagar à partir da posição do índice informado, informando '1' igual abaixo, apagará apenas uma nota)
notas.splice(notas.indexOf(2.5), 1);

console.log("\nExibir o Array 'notas', atualizada (sem a nota apagada): ");

for (const nota of notas) {
    console.log(nota.toFixed(1));
}