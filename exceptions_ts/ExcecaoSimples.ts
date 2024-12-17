// Exceção personalizada
export class ExcecaoSimples extends Error{

    // Toda vez que 
    constructor(message: string){
        super();
        this.name = "Excecao Simples";
        this.message = message;
    }

}