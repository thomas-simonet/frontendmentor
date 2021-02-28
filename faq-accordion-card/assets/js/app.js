; window.addEventListener("DOMContentLoaded", function (event) {

  var faq = document.getElementById('faq')
  var faqButtons = faq.querySelectorAll('button')

  faqButtons.forEach(function (el) {

    el.addEventListener('click', function (e) {
      e.preventDefault()

      var target = e.target
      var def = document.getElementById(target.getAttribute('aria-controls'))
      var isOpen = (target.getAttribute('aria-expanded') === 'true')

      if (!isOpen) {
        target.setAttribute('aria-expanded', true)
        def.style.display = "block"
      }
      else {
        target.setAttribute('aria-expanded', false)
        def.style.display = "none"
      }
    })
  })
});