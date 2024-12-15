import { Conta } from "../model/Conta";

// Interface ContaRepository contém as assinaturas dos métodos de manipulação de contas (conhecido como, CRUD - Create, Read, Update e Delete), além dos métodos bancários 'sacar()', 'depositar()' e 'transferir()'
export interface ContaRepository{

    // Assinatura dos métodos (o CRUD - Create, Read, Update e Delete)
    procurarPorNumero(numero: number): void;
    listarTodas(): void;
    cadastrar(conta: Conta): void;  // foi passado como argumento do método um Objeto da classe Conta
    atualizar(conta: Conta): void;  // foi passado como argumento do método um Objeto da classe Conta
    deletar(numero: number): void;

    // Parâmetro: é a variável 'conta' que o método espera na declaração.
    // Argumento: é o valor ou objeto real (nesse caso, uma instância da classe Conta) que você passa na chamada.

    sacar(numero: number, valor: number): void;
    depositar(numero: number, valor: number): void;
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void;

}