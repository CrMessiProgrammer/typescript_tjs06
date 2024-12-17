// Executa o 'try' e finaliza o código se for verdadeiro, se for falso, ele executa o 'catch', o 'finally' executa sempre (independente do resultado)
// O código normal (que deseja testar) fica no 'try'
try {
    const resultado = converte("abc");

    console.log(resultado);

// O que vai retornar caso dê erro fica no 'catch'
} catch (error: any) {
    if (error instanceof TypeError) {
        console.error("\n Você digitou um valor que não é do tipo string!");

    } else {
        console.error("\n Erro Inesperado!", error.message);
    }

// ação que executará independente do resultado final (opcional o uso do 'finally')
} finally {
    console.log("\n Programa Finalizado!");
}

// Converte o 'resultado' para letras maiúsculas
export function converte(conteudo: any): string {
    return conteudo.toUpperCase();
}