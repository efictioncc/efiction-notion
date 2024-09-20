const slides = document.querySelectorAll('.oopy-slide');

function setSlideVisibility(visibilityMap) {
    visibilityMap.forEach((isVisible, index) => {
        slides[index].style.display = isVisible ? 'block' : 'none';
    });
}

function toggleSlides() {
    const desktopVisibility = [true, false, true, true, true, false];
    const mobileVisibility = [false, true, true, true, false, true];
    setSlideVisibility(window.innerWidth >= 768 ? desktopVisibility : mobileVisibility);
}

window.addEventListener('load', toggleSlides);
window.addEventListener('resize', toggleSlides);
