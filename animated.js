document.addEventListener("DOMContentLoaded", function() {
    const fadeInElements = document.querySelectorAll('.home-text h1, .home-text .lorem-text, .home-image, .read-button');

    fadeInElements.forEach(element => {
        element.classList.add('visible');
    });
});
