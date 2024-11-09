document.addEventListener("DOMContentLoaded", function() {
    const elementsToReveal = document.querySelectorAll('.home-text h1, .home-text .lorem-text, .home-image, .read-button');

    const observerOptions = {
        threshold: 0.1 // Menyesuaikan persentase elemen yang terlihat sebelum animasi berjalan
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Hentikan pengamatan setelah animasi terjadi
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(element => {
        observer.observe(element); // Mulai mengamati setiap elemen
    });
});
