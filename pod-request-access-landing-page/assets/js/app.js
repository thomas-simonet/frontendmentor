; window.addEventListener("DOMContentLoaded", function (event) {
  var forms = document.querySelectorAll('form[data-validation=true]')

  forms.forEach(function (form) {

    var inputs = form.querySelectorAll('input:not([type="submit"])')

    form.addEventListener('submit', function (e) {
      e.preventDefault()

      var formState = [],
        isFormValid = ''

      inputs.forEach(function (el) {

        var label = el.attributes['aria-label'].value,
          error = document.getElementById(el.attributes['aria-describedby'].value)

        if (el.validity.valueMissing) {
          error.innerHTML = "Oops! Please add your email"
          el.parentElement.classList.add('has-error')
          formState.push(0)
        }
        else {
          console.log(el.validity)
          if (el.type === "email" && (el.validity.patternMismatch || el.validity.typeMismatch)) {
            error.innerHTML = "Oops! Please check your email."
            el.parentElement.classList.add('has-error')
            formState.push(0)
          }
        }

        if (el.validity.valid) {
          error.innerHTML = ""
          error.classList.remove('has-error')
          formState.push(1)
        }
      })

      isFormValid = formState.reduce(function (previousValue, currentValue) {
        return previousValue + currentValue
      })

      if (isFormValid === inputs.length)
        alert("Thanks for requesting access !")
    })
  })
});