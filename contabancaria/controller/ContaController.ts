import { Conta } from "../model/Conta";
import { ContaRepository } from "../repository/ContaRepository";

// Classe ContaController implementará todos os métodos da Interface ContaRepository (será solicitado que todos os métodos da Interface ContaRepository sejam implementados dentro da Classe ContaController - ao posicionar o cursor do mouse sobre o nome da Classe ContaController, o VSCode oferecerá a opção de implementar todos os métodos da Interface ContaRepository na própria Classe automaticamente)
export class ContaController implements ContaRepository{

    procurarPorNumero(numero: number): void {
        throw new Error("Method not implemented.");
    }

    listarTodas(): void {
        throw new Error("Method not implemented.");
    }

    cadastrar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    atualizar(conta: Conta): void {
        throw new Error("Method not implemented.");
    }

    deletar(numero: number): void {
        throw new Error("Method not implemented.");
    }

    sacar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

    depositar(numero: number, valor: number): void {
        throw new Error("Method not implemented.");
    }
    
    transferir(numeroOrigem: number, numeroDestino: number, valor: number): void {
        throw new Error("Method not implemented.");
    }

}