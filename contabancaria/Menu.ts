import readlinesync = require('readline-sync')
import { Conta } from './model/Conta';
import { ContaCorrente } from './model/ContaCorrente';
import { ContaPoupanca } from './model/ContaPoupanca';

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
    
    // Ao criar o objeto da classe ContaCorrente, é preciso preencher todos os atributos da classe Conta + o atributo da classe ContaCorrente
    const contaCorrente: ContaCorrente = new ContaCorrente(2, 456, 1, "Maria Silva", 1000.00, 500.00);
    contaCorrente.visualizar();
    
    // Saque da Conta Corrente 
    contaCorrente.sacar(1000.00);
    contaCorrente.visualizar();
    
    // Depósito da Conta Corrente
    contaCorrente.depositar(2000.00);
    contaCorrente.visualizar();
    
    const contaPoupanca: ContaPoupanca = new ContaPoupanca(3, 789, 2, "Mariana Souza", 1000.00, 10);
    contaPoupanca.visualizar();
    
    // Saque da Conta Poupança 
    contaPoupanca.sacar(100.00);
    contaPoupanca.visualizar();

    // Como os métodos 'sacar()' e 'depositar()' não foram sobrescritos, os objetos da classe ContaPoupanca utilizaram os respectivos métodos herdados da classe Conta
    
    // Depósito da Conta Poupança
    contaPoupanca.depositar(1000.00);
    contaPoupanca.visualizar();

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