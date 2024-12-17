let numerosOrdenados: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 
let numerosRepetidos: Array<number> = [1, 2, 3, 1, 4, 5, 6, 2, 7, 8, 9, 3, 4, 10, 7];
 
let numerosDesordenados: Array<number> = [6, 7, 8, 1, 4, 5, 9, 10, 2, 3];
 
let estados: Array<string> = [
    "São Paulo",
    "Rio de Janeiro",
    "Minas Gerais",
    "Espirito Santo",
    "Rio Grande do Sul",
    "Santa Catarina",
    "Paraná"
];
 
let estadosRepetidos: Array<string> = [
    'São Paulo',
    'Rio de Janeiro',
    'Minas Gerais',
    'Espirito Santo',
    'São Paulo',
    'Rio de Janeiro',
    'São Paulo',
    'Rio de Janeiro',
];
 
let estadosCentroOeste: Array<string> = [
    'Goiás',
    'Mato Grosso',
    'Mato Grosso do Sul',
    'Brasília'
];

console.log("\nListar Estados que iniciam com a palavra Rio (filter()): ");

// 'filter()' filtra o Array, nesse caso abaixo procurando a palavra "Rio"
let estadosContemRio = estados.filter(e => e.includes("Rio"));
// O '(e => e.includes("Rio")', esse 'e' representa mesma coisa que abaixo, ele declara um novo nome
// let estadosContemRio = estados.filter(estado => estado.includes("Rio"));

// Faz uma listagem de dados
console.dir(estadosContemRio);

console.log("\nListar todos os números multiplicados por 3 (map()): ");

// 'map()' gera um novo Array
let numerosMultiplicadosPorTres = numerosOrdenados.map( n => n * 3 );

console.dir(numerosMultiplicadosPorTres);

console.log("\nListar todos os estados sem repetições (reduce()): ");

// Quando 'indexOf()' é falso (não encontra nada), ele retorna "-1"

// 'reduce()' 
let estadosSemRepeticoes = estadosRepetidos.reduce((acumulador: string[], estado) => {
    if (acumulador.indexOf(estado) === -1)
        acumulador.push(estado);
    return acumulador;
}, []);
// O array vazio "[]" diz que começará vazio (e passa que não terá valor inicial)

console.dir(estadosSemRepeticoes);

console.log("\nCombinação de Arrays (Spread Operator): ");

// Os "..." significa que está pegando todos os elementos de 'numerosOrdenados' e juntando com todos elementos de 'numerosDesordenados' (está jogando dois arrays dentro de um só)
const arrayCombinado: number[] = [...numerosOrdenados, ...numerosDesordenados];

console.dir(arrayCombinado);