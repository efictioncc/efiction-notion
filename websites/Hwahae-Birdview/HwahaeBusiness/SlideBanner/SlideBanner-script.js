function toggleSlides() {
    var slides = document.querySelectorAll('.oopy-slide');
    if (window.innerWidth >= 768) {
        slides[0].style.display = 'block';
        slides[1].style.display = 'none';
        slides[2].style.display = 'block';
        slides[3].style.display = 'block';
        slides[4].style.display = 'block';
        slides[5].style.display = 'none';
    } else {
        slides[0].style.display = 'none';
        slides[1].style.display = 'block';
        slides[2].style.display = 'block';
        slides[3].style.display = 'block';
        slides[4].style.display = 'none';
        slides[5].style.display = 'block';
    }
}
window.addEventListener('load', toggleSlides);
window.addEventListener('resize', toggleSlides);
