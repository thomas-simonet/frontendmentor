window.addEventListener('DOMContentLoaded', () => {
  const faq = document.getElementById('faq');
  const faqButtons = faq.querySelectorAll('button');

  faqButtons.forEach((el) => {
    el.addEventListener('click', (e) => {
      e.preventDefault();

      const { target } = e;
      const def = document.getElementById(target.getAttribute('aria-controls'));
      const isOpen = (target.getAttribute('aria-expanded') === 'true');

      if (!isOpen) {
        target.setAttribute('aria-expanded', true);
        def.style.display = 'block';
      } else {
        target.setAttribute('aria-expanded', false);
        def.style.display = 'none';
      }
    });
  });
});
