import { Transporte } from "./Transporte";

// 'extends' aplicando a herança (Terrestre recebe os dados de Transporte)
export class Terrestre extends Transporte{

    private _numeroRodas: number;
    private _velocidade: number;

    // Tem que escrever 'capacidade' à mão, parâmetro/atributo da Classe herdada Transporte
	constructor(capacidade: number, numeroRodas: number, velocidade: number) {
        // 'super' chama o construtor da super classe (nesse caso 'Transporte') recebido pela herança
        super(capacidade);
		this._numeroRodas = numeroRodas;
		this._velocidade = velocidade;
	}

    // O Get e Set do parâmetro não precisa
	public get numeroRodas(): number {
		return this._numeroRodas;
	}

	public get velocidade(): number {
		return this._velocidade;
	}

	public set numeroRodas(value: number) {
		this._numeroRodas = value;
	}

	public set velocidade(value: number) {
		this._velocidade = value;
	}

    // Sobrescrevendo o método (também conhecido como Override) -> ele vai pegar todas os dados de dentro do método 'Visualizar(') da classe "Transporte", e adicionar (somar) + as informações que passei abaixo
    public visualizar(){
        // Chama o método 'visualizar()' da Classe que herdei ('Transporte')
        super.visualizar();
        console.log(`Número de Rodas: ${this._numeroRodas}`);
        console.log(`Velocidade: ${this._velocidade}`);
	}

}