export class ScrollTop {
    constructor() {
      this.button = document.querySelector('.scroll-top');
      if (!this.button) return;
      
      this.init();
    }
  
    init() {
      window.addEventListener('scroll', () => this.toggleButton());
      this.button.addEventListener('click', () => this.scrollToTop());
    }
  
    toggleButton() {
      if (window.scrollY > 200) {
        this.button.classList.add('show');
      } else {
        this.button.classList.remove('show');
      }
    }
  
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    }
  }