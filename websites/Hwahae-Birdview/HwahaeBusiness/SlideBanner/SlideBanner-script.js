function setSlideVisibility(slides, visibilityMap) {
    slides.forEach((slide, index) => {
        slide.style.display = visibilityMap[index] ? 'block' : 'none';
    });
}

function toggleSlides() {
    const slides = document.querySelectorAll('.oopy-slide');
    const desktopVisibility = [true, false, true, true, true, false];
    const mobileVisibility = [false, true, true, true, false, true];

    if (window.innerWidth >= 768) {
        setSlideVisibility(slides, desktopVisibility);
    } else {
        setSlideVisibility(slides, mobileVisibility);
    }
}

window.addEventListener('load', toggleSlides);
window.addEventListener('resize', toggleSlides);
