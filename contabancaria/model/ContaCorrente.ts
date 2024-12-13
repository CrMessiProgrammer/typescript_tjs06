import { Conta } from "./Conta";

export class ContaCorrente extends Conta{

    // Definido como 'private' para manter os dados encapsulados
    private _limite: number;

    // Método Construtor
	constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number, limite: number) {
        super(numero, agencia, tipo, titular, saldo);
		this._limite = limite;
	}

	public get limite() {
		return this._limite;
	}

    // Métodos Get e Set
	public set limite(limite: number) {
		this._limite = limite;
	}

    // Método Auxiliar
    public sacar(valor: number): boolean{
        // Validação Particular da Conta Corrente
        // Para atributos de dentro da própria classe usar com o '_', para os de fora usar sem
        if ((this.saldo + this._limite) < valor ) {
            console.log("Saldo Insuficiente!");
            return false;            
        }
        this.saldo = this.saldo - valor;
        return true;
    }

    // Método Auxiliar
    public visualizar(): void {
        // O 'super' serve para acessar o método 'visualizar()' da Superclasse, e na sequência complementamos a implementação original adicionando novo atributo da classe ContaCorrente
        super.visualizar();
        console.log(`Limite da Conta: ${this._limite}`);
    }
    // Ambos os Métodos Auxiliares foram implementados através do polimorfismo de Sobrescrita, ou seja, são dois métodos herdados da classe ('Superclasse') Conta que foram reescritos com uma nova lógica dentro da classe ('Subclasse') ContaCorrente, porém manterão as mesmas assinaturas e argumentos
}