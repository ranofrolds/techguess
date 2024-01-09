document.getElementById('openModalCreateBtn').addEventListener('click', function() {
    //criar a sala no servidor e pegar o código dela
        //conectar o player 1

    //altera os valores referente ao nome do usuario e codigo da sala
    $('#player1-name').text()
    $('#code').text()

    document.getElementById('modalCreate').classList.add('active');
});

document.getElementById('leave').addEventListener('click', function() {
    document.getElementById('modalCreate').classList.remove('active');
});

document.getElementById('create-room').addEventListener('click', function() {
    //redirecionar para o game e startar o jogo
});