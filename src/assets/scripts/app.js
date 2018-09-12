class Portfolio {
    /**
     * Creates an instance of Portfolio.
     * @param {string} selector
     * @memberof Portfolio
     */
    constructor (selector) {
      /**
       * Detecter lorsqu'on clique sur un element
       * supprimer l'element actif
       * clonner .js_body
       * inserer le clone apres .js_item
       */
      let activeContent = null;
      this.container = document.querySelector(selector);
      if (this.container === null) {
        throw new Error(`l'element ${selector} n'existe pas`)
      }
      this.children = Array.prototype.slice.call(this.container.querySelectorAll('.js_item'));
      this.children.forEach((child) => {
        child.addEventListener('click', (e) => {
          e.preventDefault();
          this.show(child)
        })
      })
    }
    /**
     * Affiche le block details du projet
     *
     * @param {HTMLelement} child
     * @memberof Portfolio
     */
    show (child) {
      let content = child.querySelector('.js_body').cloneNode(true);
      if (this.activeContent !== undefined) {
        this.slideUp(this.activeContent)
      }
      child.after(content);
      this.scrollTo(child);
      this.slideDown(content);
      this.activeContent = content
    }
    /**
     * Animation d'affichage du contenu d'un element
     *
     * @param {HTMLelement} element
     * @memberof Portfolio
     */
    slideDown (element) {
      let height = element.offsetHeight;
      element.style.height = 0;
      element.style.transitionDuration = '.5s';
      element.offsetHeight; // Force repaint
      element.style.height = height + 'px';
      window.setTimeout(function () {
        element.style.height = null
      }, 500)
    }
    /**
     * Animation pour masquer l'element
     *
     * @param {HTMLelement} element
     * @memberof Portfolio
     */
    slideUp (element) {
      let height = element.offsetHeight;
      element.style.height = height + 'px';
      element.offsetHeight; // Force repaint
      element.style.height = 0;
      window.setTimeout(function () {
        element.parentNode.removeChild(element)
      }, 500)
    }
    /**
     * Faire defilé la fenetre vers l'element selectioné
     *
     * @param {HTMLelement} element
     * @memberof Portfolio
     */
    scrollTo (element) {
      window.scrollTo({
        behavior: "smooth",
        top: element.offsetTop,
        left: 0
      })
    }
}

new Portfolio('#js-portfolio');
