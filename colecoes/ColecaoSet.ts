const frutas: Set<string> = new Set<string>();

frutas.add("Banana");
frutas.add("Maçã");
frutas.add("Caqui");
frutas.add("Banana");
frutas.add("Manga");

// o 'Set' não tem índice, o 'table' que criará para interatividade
console.table(frutas);

console.log("\nA fruta Morango existe? ", frutas.has("Morango"));

// apaga o elemento informado, nesse caso 'Caqui'
frutas.delete("Caqui");

console.table(frutas);

// converte 'Set' para 'Array' para ordenar os valores dali de dentro, pois no próprio 'Set' não possível
let serOrdenado: Array<string> = Array.from(frutas).sort();

console.log(serOrdenado);
console.table(serOrdenado);