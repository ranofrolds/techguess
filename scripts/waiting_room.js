
document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('active');
});

window.addEventListener('keydown', function(event) {
    var modal = document.getElementById('modal');
    
    // Verifica se a tecla pressionada é ESC (código 27)
    if (event.key === 'Escape' || event.key === 'Esc' || event.keyCode === 27) {
        
        modal.classList.add('active');
    }
});


window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});
