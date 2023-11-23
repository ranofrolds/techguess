document.getElementById('openModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.add('active');
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    document.getElementById('modal').classList.remove('active');
});

window.addEventListener('click', function(event) {
    var modal = document.getElementById('modal');
    if (event.target === modal) {
        modal.classList.remove('active');
    }
});
