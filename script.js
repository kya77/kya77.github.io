const element = document.getElementById('element');

window.addEventListener('scroll', () => {
    const rect = element.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add('visible');
    }
});