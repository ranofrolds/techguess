document.getElementById('openModalJoinBtn').addEventListener('click', function() {
    document.getElementById('modalJoin').classList.add('active');
});

document.getElementById('leave-join-room').addEventListener('click', function() {
    document.getElementById('modalJoin').classList.remove('active');
});

document.getElementById('join-room').addEventListener('click', function() {
    //pega o código e acessa a sala
    //muda o modal para waiting room (bem simples so falando que esta aguardando o adm startar o game, deixar só uma opção de sair)
});
