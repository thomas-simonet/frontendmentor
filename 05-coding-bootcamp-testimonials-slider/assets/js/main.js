import '../scss/style.scss';

window.addEventListener('DOMContentLoaded', () => {
  const prev = document.getElementById('prev');
  const next = document.getElementById('next');

  function nextSlide() {
    const current = document.querySelector('.slideshow--current');
    const nextItem = document.querySelector('.slideshow-item:not(.slideshow--current)');

    current.classList.remove('slideshow--current');
    nextItem.classList.add('slideshow--current');
  }

  prev.addEventListener('click', nextSlide);
  next.addEventListener('click', nextSlide);
});
