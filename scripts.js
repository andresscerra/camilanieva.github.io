document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('menu-toggle');
    const navList = document.getElementById('nav-list');

    menuToggle.addEventListener('click', () => {
        navList.classList.toggle('active');
    });
});

// Obtener elementos
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const closeBtn = document.querySelector('.close');

// Función para abrir el modal
function openModal() {
    modal.style.display = 'block';
}

// Función para cerrar el modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listener para las miniaturas
document.querySelectorAll('.thumbnail').forEach(img => {
    img.addEventListener('click', (event) => {
        modalImg.src = event.target.src;
        captionText.textContent = event.target.alt;
        openModal();
    });
});

// Event listener para el botón de cerrar
closeBtn.addEventListener('click', closeModal);

// Cerrar el modal al hacer clic fuera de la imagen
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});