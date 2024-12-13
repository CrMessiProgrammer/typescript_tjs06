export abstract class Pessoa {

    private _nome: string;


	constructor(nome: string) {
		this._nome = nome;
	}

	public get nome(): string {
		return this._nome;
	}

	public set nome(value: string) {
		this._nome = value;
	}

    public abstract cansou(): void;

    public visualizar(): void {
        console.log("\n\n*****************************************************");
        console.log("Dados da Atleta");
        console.log("*****************************************************");
        console.log("Nome do Atleta: " + this._nome);
    }

    
}