import readlinesync = require('readline-sync')
import { colors } from '../util/Cores';

let numero1: number;
let numero2: number;
let opcao: number;

do {
    menu();

    opcao = readlinesync.questionInt();

    if (opcao === 0) {
        about();
        process.exit(0);
    }

    switch (opcao) {
        case 1:
            // Desestruturação do Objeto 
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} + ${numero2} = ${somar(numero1, numero2)}`);
            break;
        case 2:
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} - ${numero2} = ${subtrair(numero1, numero2)}`);
            break;
        case 3:
            [numero1, numero2] = obterNumeros();
            console.log(`${numero1} * ${numero2} = ${multiplicar(numero1, numero2)}`);
            break;
        case 4:
            [numero1, numero2] = obterNumeros();

            let resultado = dividir(numero1, numero2);

            if (resultado !== null) {
                console.log(`${numero1} / ${numero2} = ${resultado}`);
                break;
            } else {
                console.log("Não existe divisão por zero!");
                break;
            }
        default:
            console.log("Opção Inválida!");
            break;
    }

} while (true);

function menu(): void {
    console.log(colors.bg.black, colors.fg.green);
    console.log('***************************************************');
    console.log('                   Calculadora                     ');
    console.log('***************************************************');
    console.log('           1 - Somar                               ');
    console.log('           2 - Subtrair                            ');
    console.log('           3 - Multiplicar                         ');
    console.log('           4 - Dividir                             ');
    console.log('           0 - Sair                                ');
    console.log('***************************************************');
    console.log('Digite a opção desejada: ', colors.reset);  // reset para de exibir a cor
}

function obterNumeros(): [number, number] {
    const numero1 = readlinesync.questionFloat('Digite o primeiro numero: ');
    const numero2 = readlinesync.questionFloat('Digite o segundo numero: ');
    return [numero1, numero2]
}

function somar(numero1: number, numero2: number): number {
    return numero1 + numero2;
}

function subtrair(numero1: number, numero2: number): number {
    return numero1 - numero2;
}

function multiplicar(numero1: number, numero2: number): number {
    return numero1 * numero2;
}

function dividir(numero1: number, numero2: number): number | null {
    let divisao = numero1 / numero2;
    return (divisao !== Infinity ? divisao : null)
    // 'infinity' -> a pessoa passou numero não divisivel
}

function about() {
    console.log("Criado por Carlos.");
}