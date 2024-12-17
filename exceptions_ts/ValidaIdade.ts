import readline = require("readline-sync");

let loop: boolean = true;

// Sai do loop quando o 'try' for verdadeiro, quando for falso, ele executa o 'catch' e pergunta a idade novamente
do {
        try {
                let idade: number = readline.questionInt("Digite a idade: ");
                validarIdade(idade);
                loop = false;

        } catch (error: any) {
                console.error(error.name);
                console.error(error.message);
                console.error("\nVocê digitou uma idade menor do que 18 anos.");
        }

} while (loop);

function validarIdade(idade: number): void {
        if (idade >= 18) {
                console.log("A pessoa é maior de idade!");
        } else {
                // Usado para lançar exceções, interrompendo o fluxo normal de execução do programaele "lança" um valor (geralmente um objeto de erro)
                throw new Error("A pessoa é menor de idade!");
        }
}