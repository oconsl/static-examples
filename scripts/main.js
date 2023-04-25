window.addEventListener('DOMContentLoaded', () => {
  const cancelTranslationElements = document.querySelectorAll('.no-translate')

  cancelTranslationElements.forEach((element) => {
    element.setAttribute('translate', 'no')
  })
})
