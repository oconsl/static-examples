window.addEventListener('DOMContentLoaded', () => {
  const navLinks = document.querySelectorAll('.nav-link')
  const allH1 = document.querySelectorAll('h1')
  const allH2 = document.querySelectorAll('h2')
  const allH3 = document.querySelectorAll('h3')
  const allH4 = document.querySelectorAll('h4')
  const allH5 = document.querySelectorAll('h5')
  const allH6 = document.querySelectorAll('h6')
  const allAnchors = document.querySelectorAll('a')
  const allButtons = document.querySelectorAll('button')
  const cancelTranslationElements = [
    ...allH1,
    ...allH2,
    ...allH3,
    ...allH4,
    ...allH5,
    ...allH6,
    ...allAnchors,
    ...allButtons
  ]

  console.log('cancelTranslationElements', cancelTranslationElements)

  cancelTranslationElements.forEach((element) => {
    element.setAttribute('translate', 'no')
  })

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.forEach((otherLink) => {
        otherLink.classList.remove('active')
      })
      link.classList.add('active')
    })
  })
})
