import { Terrestre } from "./Terrestre";

// Pode herdar somente uma única Classe
export class Automovel extends Terrestre{

    private _cor: string;
    private _numeroPortas: number;
    private _placa: string;
    private _marcha: number;

    // Fazer à mão, parâmetro/atributo da Classe herdada Transporte
	constructor(capacidade: number, numeroRodas: number, velocidade: number, cor: string, numeroPortas: number, placa: string, marcha: number) {
        super(capacidade, numeroRodas, velocidade);
		this._cor = cor;
		this._numeroPortas = numeroPortas;
		this._placa = placa;
		this._marcha = marcha;
	}

	public get cor(): string {
		return this._cor;
	}

	public get numeroPortas(): number {
		return this._numeroPortas;
	}

	public get placa(): string {
		return this._placa;
	}

	public get marcha(): number {
		return this._marcha;
	}

	public set cor(value: string) {
		this._cor = value;
	}

	public set numeroPortas(value: number) {
		this._numeroPortas = value;
	}

	public set placa(value: string) {
		this._placa = value;
	}

	public set marcha(value: number) {
		this._marcha = value;
	}

    // Sobrescrevendo o método (também conhecido como Override) -> ele vai pegar todas os dados de dentro do método 'Visualizar(') da classe "Terrestre", e adicionar (somar) + as informações que passei abaixo
    public visualizar(){
        // Chama o método 'visualizar()' da Classe que herdei ('Terrestre')
        super.visualizar();
        console.log(`Cor: ${this._cor}`);
        console.log(`Número de Portas: ${this.numeroPortas}`);
        console.log(`Placa: ${this._placa}`);
        console.log(`Número de Marchas: ${this._marcha}`);
	}

}