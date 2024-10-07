// Seleccionar el cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

// Crear estrellas
const stars = [];
for (let i = 0; i < 20; i++) { // Cambia el número según cuántas estrellas quieras
    const star = document.createElement('div');
    star.classList.add('star');
    document.body.appendChild(star);
    stars.push(star);
}

// Variables para el movimiento de las estrellas
let isMoving = false;
let mouseX = 0;
let mouseY = 0;

// Mover el cursor y las estrellas al movimiento del mouse
document.addEventListener('mousemove', (e) => {
    isMoving = true;
    mouseX = e.pageX;
    mouseY = e.pageY;

    cursor.style.left = `${mouseX}px`;
    cursor.style.top = `${mouseY}px`;

    // Hacer que las estrellas sigan el cursor
    stars.forEach((star, index) => {
        const angle = (index * (360 / stars.length)) + (Date.now() / 400); // Ajusta la velocidad
        const x = mouseX + Math.cos(angle * Math.PI / 50) * (index * 4); // Distancia
        const y = mouseY + Math.sin(angle * Math.PI / 40) * (index * 2); // Distancia
        star.style.left = `${x}px`;
        star.style.top = `${y}px`;
        star.style.opacity = 1; // Mostrar estrella
    });
});

// Mantener las estrellas girando cuando se deja de mover el mouse
function animateStars() {
    if (!isMoving) {
        stars.forEach((star, index) => {
            const angle = (index * (360 / stars.length)) + (Date.now() / 400); // Ajusta la velocidad
            const x = mouseX + Math.cos(angle * Math.PI / 20) * (index * 3); // Distancia
            const y = mouseY + Math.sin(angle * Math.PI / 20) * (index * 3); // Distancia
            star.style.left = `${x}px`;
            star.style.top = `${y}px`;
            star.style.opacity = 1; // Mostrar estrella
        });
    }
    requestAnimationFrame(animateStars);
}

animateStars();

// Detectar cuando se deja de mover el mouse
document.addEventListener('mouseleave', () => {
    isMoving = false; // Cuando el mouse sale del documento
});

// Añadir clase activa al cursor al hacer clic
document.addEventListener('click', () => {
    cursor.classList.add('active');
    setTimeout(() => {
        cursor.classList.remove('active');
    }, 150); // Duración de la animación
});
