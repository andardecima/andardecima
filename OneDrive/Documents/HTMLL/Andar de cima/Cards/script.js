let slideIndices = [0, 0, 0, 0, 0, 0, 0, 0]; // Inicializando índices para cada card

function showSlides(n, cardIndex) {
    let slides = document.querySelectorAll(`.property-card:nth-child(${cardIndex + 1}) .mySlides`);
    
    if (slides.length === 0) {
        return; // Não há slides para este card
    }
    
    if (n >= slides.length) {
        slideIndices[cardIndex] = 0;
    } else if (n < 0) {
        slideIndices[cardIndex] = slides.length - 1;
    } else {
        slideIndices[cardIndex] = n;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndices[cardIndex]].style.display = "block";
}

function plusSlides(n, cardIndex) {
    showSlides(slideIndices[cardIndex] + n, cardIndex);
}

// Inicializar slides
document.addEventListener("DOMContentLoaded", () => {
    let cards = document.querySelectorAll('.property-card');
    cards.forEach((card, index) => {
        showSlides(0, index); // Mostrar o primeiro slide de cada card
    });
});
