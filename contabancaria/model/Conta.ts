// Declarando uma classe. O 'export' indica que esta Classe poderá ser instanciada por qualquer outra Classe dentro do projeto
export class Conta {
    // À partir de uma Classe podemos construir inúmeros Objetos

    // Um Objeto é uma entidade caracterizada por um conjunto de Métodos e Atributos, podendo ainda ser compostos por outros Objetos

    // Métodos e Atributos 'públicos' podem ser acessados de qualquer classe (sem restrições), enquantos os Métodos e Atributos 'privados' estão inacessíveis à partir de outras classes. No caso dos Atributos se existirem os Métodos Get e Set, eles poderão ser acessados, no caso dos Métodos só estarão acessíveis dentro da própria classe

    // Modelo de dados (Características - Atributos / Comportamentos)
    private _numero: number;    // por boas práticas colocar o "_" antes do nome p/ identificar que é algo privado
    private _agencia: number;   // os atributos foram definidos como 'private' p/ manter os dados encapsulados
    private _tipo: number;
    private _titular: string;
    private _saldo: number;

    // Gerar o Método Construtor (responsável por criar novos Objetos baseados no modelo definido da Classe, o termo utilizado é, Instanciar um Novo Objeto)
//  constructor(argumento1: tipo, ...) {..., adicionado todos os atributos da classe (identificados pela palavra reservada 'this'. Os mesmos atributos também serão adicionados como 'argumentos' do método construtor para receber os valores que serão atribuídos à cada atributo, *note: os argumentos do método construtor são variáveis que possuem os mesmos nomes dos atributos, e obrigatoriamente, devem possuir o mesmo tipo de dado dos atributos)}
    constructor(numero: number, agencia: number, tipo: number, titular: string, saldo: number) {
    //  this.atributo1 = argumento1;
        this._numero = numero;
        this._agencia = agencia;
        this._tipo = tipo;
        this._titular = titular;
        this._saldo = saldo;
    }
    
    // Gerar os Métodos Getter's (obter) e Setter's (modificar)
    // Métodos Get (usados para obter o valor atual de um atributo de um objeto, de forma indireta)
    // nome do método é o mesmo nome do atributo
    public get numero() {
        return this._numero;
    }
    
    // Métodos Set (usados para definir/configurar um novo valor para um atributo de um objeto (alterá-los), de forma indireta)
    // nome do método é o mesmo nome do atributo
    public set numero(numero: number) {
        this._numero = numero;
    }
    
    public get agencia() {
        return this._agencia;
    }
    
    public set agencia(agencia: number) {
        this._agencia = agencia;
    }

    public get tipo() {
        return this._tipo;
    }
    
    public set tipo(tipo: number) {
        this._tipo = tipo;
    }

    public get titular() {
        return this._titular;
    }
    
    public set titular(titular: string) {
        this._titular = titular;
    }

    public get saldo() {
        return this._saldo;
    }
    
    public set saldo(saldo: number) {
        this._saldo = saldo;
    }

    // Método Auxiliar (ação)
    public sacar(valor: number): boolean{
        if (this._saldo < valor) {
            console.log("Saldo Insuficiente!");
            return false;            
        }
        this._saldo = this._saldo - valor;
        return true;
    }

    public depositar(valor: number): void {
        this._saldo = this._saldo + valor;
    }

    // Para ver todos os dados da conta na tela
    public visualizar(): void {

        let tipo: string = "";

        switch (this._tipo) {
            case 1:
                tipo = "Conta Corrente";
                break;
            case 2:
                tipo = "Conta Poupança";
                break;
            default:
                tipo = "Tipo Inválido";
                break;
        }

        console.log("\n\n*****************************************************");
        console.log("Dados da Conta");
        console.log("*****************************************************");
        console.log("Número da Conta: " + this._numero);
        console.log("Agência: " + this._agencia);
        console.log("Tipo da Conta: " + tipo);
        console.log("Titular: " + this._titular);
        console.log("Saldo: " + this._saldo);
    }

}