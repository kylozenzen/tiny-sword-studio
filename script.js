// --- Set current year in footer ---
document.getElementById('yr').textContent = new Date().getFullYear();

// --- Animations ---
document.addEventListener('DOMContentLoaded', () => {
    // --- Scroll-Reveal Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1
    });
    const elementsToAnimate = document.querySelectorAll('.animate-in');
    elementsToAnimate.forEach(el => observer.observe(el));

    // --- Navigation Underline Effect ---
    const navLinks = document.querySelectorAll('nav a');
    const navUnderline = document.querySelector('.nav-underline');

    if (navLinks.length > 0 && navUnderline) {
        // Set initial position for the first link
        navUnderline.style.left = `${navLinks[0].offsetLeft}px`;
        navUnderline.style.width = `${navLinks[0].offsetWidth}px`;

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                const target = e.currentTarget;
                navUnderline.style.left = `${target.offsetLeft}px`;
                navUnderline.style.width = `${target.offsetWidth}px`;
            });
        });
    }
});
