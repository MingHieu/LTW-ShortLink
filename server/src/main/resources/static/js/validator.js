const Validator = (formSelector, options) => {
  const formRules = {}
  const getParent = (element, selector) => {
    while (element.parentElement) {
      if (element.parentElement.matches(selector)) {
        return element.parentElement
      }
      element = element.parentElement
    }
  }

  if (!options) {
    options = {}
  }

  // Rules:
  // - Error => message error
  // - Success => undefined
  const validatorRules = {
    required: (value) => {
      return value ? undefined : "Please fill in the required field"
    },
    email: (value) => {
      const regex = /^[a-z][a-z0-9_.]{5,32}@[a-z0-9]{2,}(.[a-z0-9]{2,4}){1,2}$/
      return regex.test(value) ? undefined : "Please enter a email address"
    },
    min: (minLength) => {
      return (value) => {
        return value.length >= minLength
          ? undefined
          : `Please enter min ${minLength} characters`
      }
    },
    max: (maxLength) => {
      return (value) => {
        return value.length <= maxLength
          ? undefined
          : `Please enter max ${maxLength} characters`
      }
    },
  }

  // Get form element form DOM by selector
  const formElement = document.querySelector(formSelector)

  // Handle when have element
  if (formElement) {
    const inputs = formElement.querySelectorAll("[name][rules]")

    function handleValidate(e) {
      const rules = formRules[e.target.name]
      let errorMessage

      for (const rule of rules) {
        errorMessage = rule(e.target.value)
        if (errorMessage) break
      }

      // If have error => render message for UI
      if (errorMessage) {
        const formGroup = getParent(e.target, ".form-group")

        if (formGroup) {
          formGroup.classList.add("invalid")
          const formMessage = formGroup.querySelector(".form-message")
          if (formMessage) {
            formMessage.innerText = errorMessage
          }
        }
      }
      return !errorMessage
    }

    function handleClearError(e) {
      const formGroup = getParent(e.target, ".form-group")
      if (formGroup.classList.contains("invalid")) {
        formGroup.classList.remove("invalid")
        const formMessage = formGroup.querySelector(".form-message")

        if (formMessage) formMessage.innerText = ""
      }
    }

    for (const input of inputs) {
      const rules = input.getAttribute("rules").split("|")
      for (let rule of rules) {
        const isRuleHasValue = rule.includes(":")
        let ruleInfo

        if (isRuleHasValue) {
          ruleInfo = rule.split(":")
          rule = ruleInfo[0]
        }

        let ruleFunc = validatorRules[rule]

        if (isRuleHasValue) {
          ruleFunc = ruleFunc(ruleInfo[1])
        }
        if (Array.isArray(formRules[input.name])) {
          formRules[input.name].push(ruleFunc)
        } else {
          formRules[input.name] = [ruleFunc]
        }
      }

      // Listen action validator
      input.onblur = handleValidate
      input.oninput = handleClearError
    }
  }

  // Handle action submit form
  formElement.onsubmit = (e) => {
    e.preventDefault()

    const inputs = formElement.querySelectorAll("[name][rules]")
    let isValid = true

    for (const input of inputs) {
      if (
        !handleValidate({
          target: input,
        })
      )
        isValid = false
    }

    // If not error => submit form
    if (isValid) {
      if (typeof options.onSubmit === "function") {
        const enableInputs = formElement.querySelectorAll(
          "[name]:not([disabled])"
        )
        const formValues = Array.from(enableInputs).reduce((values, input) => {
          switch (input.type) {
            case "radio":
              values[input.name] = formElement.querySelector(
                `input[name="${input.name}"]:checked`
              ).value
              break

            case "checkbox":
              if (!input.matches(":checked")) {
                values[input.name] = ""
                return values
              }
              if (!Array.isArray(values[input.name])) values[input.name] = []
              values[input.name].push(input.value)
              break

            case "file":
              values[input.name] = input.files
              break

            default:
              values[input.name] = input.value
              break
          }
          return values
        }, {})
        options.onSubmit(formValues)
      } else {
        formElement.submit()
      }
    }
  }
}
