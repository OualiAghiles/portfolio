class Collapssing {
  static slideUp (element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.style.height = element.offsetHeight + "px"
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = "none"
      
    }, duration)
  }
  static slideDown (element, duration = 500) {
    //Stuff to do *after* the animation takes place
    element.removeAttribute('style')
    let elementDisplay = window.getComputedStyle(element).display
    if (elementDisplay === 'none') {
      elementDisplay = 'block'
    }
    element.style.display = elementDisplay
    let elementHeight = element.offsetHeight
    element.style.overflow = 'hidden'
    element.style.height = 0
    element.style.paddingTop = 0
    element.style.paddingBottom = 0
    element.style.marginTop = 0
    element.style.marginBottom = 0
    element.offsetHeight
    element.removeAttribute('style')
    element.style.overflow = 'hidden'
    element.style.display = elementDisplay
    console.log(elementDisplay)
    element.style.transitionProprety = `height, margin, padding`
    element.style.transitionDuration = duration + "ms"
    element.style.height = elementHeight + 'px'
    window.setTimeout(function () {
      element.removeAttribute('style')
      element.style.display = elementDisplay

    }, duration)

  }
  static slideToggle(element, duration = 500) {
    let elementDisplay = window.getComputedStyle(element).display
    if (elementDisplay === 'none') {
      this.slideDown(element, duration)
    } else {
      this.slideUp(element, duration)
    }

  }
}
document.querySelector(".btn").addEventListener('click', function (e) {
  console.log("this")
  e.preventDefault() 
  Collapssing.slideToggle(document.querySelector('#collapse'))
})
