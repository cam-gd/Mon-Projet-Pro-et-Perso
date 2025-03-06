// Fonction pour basculer l'affichage des sections
function toggleSection(id) {
    const section = document.getElementById(id);
    section.classList.toggle('visible');
}

// Script pour le carrousel (défilement automatique)
let carousel = document.getElementById('carousel');
let scrollAmount = 0;
const scrollStep = 300; // Largeur d'une image + gap

setInterval(() => {
    scrollAmount += scrollStep;
    if (scrollAmount >= carousel.scrollWidth) {
        scrollAmount = 0;
    }
    carousel.scrollTo({
        left: scrollAmount,
        behavior