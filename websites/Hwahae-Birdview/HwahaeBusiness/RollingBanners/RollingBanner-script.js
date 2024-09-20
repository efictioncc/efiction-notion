document.addEventListener('DOMContentLoaded', function() {
  const ctaWrappers = document.querySelectorAll('.cta-wrapper');
  let currentIndex = 0;

  function applyAnimation(element, animationName) {
    element.style.animation = 'none';
    void element.offsetWidth;
    element.style.animation = `${animationName} 0.5s ease forwards`;
  }

  function slide() {
    const currentElement = ctaWrappers[currentIndex];
    currentElement.classList.remove('active');
    currentIndex = (currentIndex + 1) % ctaWrappers.length;
    const nextElement = ctaWrappers[currentIndex];
    nextElement.classList.add('active');
    applyAnimation(nextElement, 'slideIn');
    setTimeout(() => {
      applyAnimation(nextElement, 'slideOut');
    }, 6500);
  }

  slide();
  setInterval(slide, 7000);
});
