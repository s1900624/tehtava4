window.onload = function() {
    const modalContainer = document.getElementById('modal-container');

    window.addEventListener('scroll', function() {
        console.log(pageYOffset);
        modalContainer.style.display = pageYOffset >= 200 ? 'flex' : 'none';
    });
};