// Instruções que podem causar uma Exception
try {

    const resultado = converte(123);

    console.log(resultado);

// Executa caso ocorra uma Exception
} catch (error) {
    // Checa se o erro foi do tipo 'TypeError' através da instrução 'instanceof', que identifica o tipo do erro disparado, mas com a vantagem de nos permitir selecionar qual ou quais propriedades do Objeto 'error' nós queremos exibir na tela
    if (error instanceof TypeError) {
        console.error("TypeError: " + error.message);        
    } else {
        console.error("Erro: " + error);        
    }

// (opcional) Ele sempre será executado, independente da Exception acontecer ou não
} finally {
    console.log("A Estrutura try-Catch capturou o erro!");
}

export function converte(conteudo: any) {
    conteudo.toUpperCase();
}

// A estrutura 'Try' tenta executar o código, caso ocorra um erro, a estrutura 'Catch' entra em ação para identificar e tratar o erro 