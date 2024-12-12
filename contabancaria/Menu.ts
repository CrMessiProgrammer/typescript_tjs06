import readlinesync = require('readline-sync')
import { Conta } from './model/Conta';

// função main = principal (inicializar o programa sempre por aqui) 
export function main() {

    let opcao: number;

    // Crias novas Instâncias (Objetos) da Classe 'Conta'
    const conta: Conta = new Conta(1, 123, 1, "João da Silva", 1000.00);
    // Outra forma de Instanciar um Objeto:
    // const conta = new Conta(1, 123, 1, "Carlos", 100000);
    conta.visualizar();
    
    // Saque
    conta.sacar(500.00);
    conta.visualizar();
    
    // Depósito
    conta.depositar(1000.00);
    conta.visualizar();

}

export function about(): void {
    console.log("\n***************************************************");
    console.log("Projeto Desenvolvido por: ");
    console.log("Carlos Henrique Nunes - teste@gmail.com");
    console.log("https://github.com/CrMessiProgrammer");
    console.log("***************************************************\n");
}

// Chamada para a Função 'main()', no qual ela será executada automaticamente quando executar o código
main();