function listarPalavrasChave(btnId) {
    // Caminho para o arquivo keywords_1.txt
    btnIdGlobal=btnId
    const arquivoURL = '../static/keywords_'+btnId+'.txt';

    // Fetch para obter o conteúdo do arquivo
    fetch(arquivoURL)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erro ao obter o arquivo: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            // Dividir o conteúdo em linhas
            const linhas = data.split('\n');

            // Construir e exibir a lista formatada
            const listaFormatada = linhas.map(linha => {
                const partes = linha.split('|');
                const palavra = partes[1].trim();
                return `${palavra}`;
            });
            
            $("#state").css('background-color', 'red');
            
            $("#"+btnIdGlobal).closest('#state').css('background-color', 'greenyellow');
            // Exibir as palavras-chave formatadas
            listaFormatada.forEach((element, index) => {
                $("#keywords-area").append(`<div id="div-${index + 1}">${element}</div>`);
            });
            
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao obter o arquivo.');
        });
}