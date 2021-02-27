; window.addEventListener("DOMContentLoaded", function (event) {
  var forms = document.querySelectorAll('form[data-validation=true]')

  forms.forEach(function (form) {

    var inputs = form.querySelectorAll('input:not([type="submit"])')

    form.addEventListener('submit', function (e) {
      e.preventDefault()

      var isValid = true

      inputs.forEach(function (el) {

        var error = document.getElementById(el.id + '-error')

        if (!error) return


        if (!el.validity.valid) {
          el.classList.add('has-error')
          el.setAttribute('aria-describedby', el.id + '-error')
          el.setAttribute('aria-invalid', true)

          if (el.validity.valueMissing) {
            error.innerHTML = "Oops! Please add your email"
          }
          else if (el.type === "email" && (el.validity.patternMismatch || el.validity.typeMismatch)) {
            error.innerHTML = "Oops! Please check your email."
          }

          isValid = false
        }
        else {
          error.innerHTML = ""
          error.classList.remove('has-error')
          el.removeAttribute('aria-describedby')
          el.removeAttribute('aria-invalid')
        }
      })

      if (isValid) {
        alert("Thanks for requesting access !")
      }
    })
  })
});