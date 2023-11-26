let btnIdGlobal
let isClicked=''


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

            $("[id$='-state']").css('background-color', 'red');

            // Verifique se btnIdGlobal está definido e seletor #state correspondente ao botão pressionado
            $("#"+btnIdGlobal+"-state").css('background-color', 'greenyellow');
            
        
            // Exibir as palavras-chave formatadas
            $("#keywords-area").children().remove();
            
            // Exibir as palavras-chave formatadas
            $("#keywords-area").children().remove();

            listaFormatada.forEach((element, index) => {
                const newDiv = $(`<div class="word" id="word-${index + 1}">${element}</div>`);
                newDiv.hover(
                    function() {
                        // Função executada quando o mouse entra no elemento
                        $(this).css({
                            'background-color': '#45e714',
                            'color': 'black'
                        });
                    },
                    function() {
                        // Função executada quando o mouse deixa o elemento
                        if ($(this).attr('id') !== isClicked) {
                            $(this).css({
                                'background-color': '', // Coloque a cor original ou deixe vazio para usar a folha de estilo
                                'color': '#45e714'
                            });
                        }
                        
                    }
                );

                newDiv.click(function(){

                    isClicked=$(this).attr('id')
                    $(".word").css({
                        'background-color': '', // Coloque a cor original ou deixe vazio para usar a folha de estilo
                        'color': '#45e714'
                    });

                    $(this).css({
                        'background-color': '#45e714',
                        'color': 'black'
                    });
                    
                    mostrarSignificado(btnIdGlobal, $(this).attr('id'));
                })
            
                $("#keywords-area").append(newDiv);
            });
            
            
        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao obter o arquivo.');
        });
}

function mostrarSignificado(btnId, wordId){
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

            let objetoPalavras = [];
            // Construir e exibir a lista formatada
            const listaFormatada = linhas.map(linha => {
                const partes = linha.split('|');
                const palavra_ptBR = partes[1].trim();
                const palavra_enUS = partes[2].trim();
                const significado = partes[3].trim();
                objetoPalavras.push({ palavra_ptBR: palavra_ptBR, palavra_enUS:palavra_enUS, significado: significado });
                return `${significado}`;
            });
            
            const id = parseInt(wordId.split('-')[1]);
            console.log(id);
            
            $("#querytextarea").val("========================================\nPalavra-chave (pt-BR): " + objetoPalavras[id - 1].palavra_ptBR +"\nPalavra-chave (en-US): " + objetoPalavras[id - 1].palavra_enUS +  "\n========================================\nSignificado: " + objetoPalavras[id - 1].significado + "\n========================================");
            

        })
        .catch(error => {
            console.error('Erro:', error);
            alert('Ocorreu um erro ao obter o arquivo.');
        });
}