// Fungsi untuk memunculkan elemen dengan menambahkan kelas 'visible'
function revealElementsOnScroll() {
    // Dapatkan semua elemen yang ingin dianimasikan
    const elementsToReveal = document.querySelectorAll('.home-text h1, .home-text .lorem-text, .home-image, .read-button');

    elementsToReveal.forEach(element => {
        // Cek apakah elemen sudah terlihat di viewport
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition < screenPosition) {
            element.classList.add('visible');
        }
    });
}

// Tambahkan kelas 'visible' saat halaman di-refresh
window.addEventListener('load', () => {
    revealElementsOnScroll();
});

// Tambahkan kelas 'visible' saat halaman di-scroll
window.addEventListener('scroll', revealElementsOnScroll);
