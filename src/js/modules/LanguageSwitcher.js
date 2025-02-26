import { translations } from '../translations';

export class LanguageSwitcher {
  constructor() {
    this.currentLang = localStorage.getItem('language') || 'uk';
    this.init();
  }

  init() {
    this.applyLanguage(this.currentLang);
    this.addEventListeners();
    
    // Set initial active state
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === this.currentLang);
    });
  }

  addEventListeners() {
    const langSwitcher = document.querySelector('.lang-switcher');
    if (!langSwitcher) return;

    langSwitcher.addEventListener('click', (e) => {
      if (e.target.classList.contains('lang-switcher__btn')) {
        const lang = e.target.dataset.lang;
        this.switchLanguage(lang);
      }
    });
  }

  switchLanguage(lang) {
    if (lang === this.currentLang) return;
    this.currentLang = lang;
    localStorage.setItem('language', lang);
    this.applyLanguage(lang);

    // Update active state of buttons
    document.querySelectorAll('.lang-switcher__btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  }

  applyLanguage(lang) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
      const key = element.dataset.translate;
      if (translations[lang] && translations[lang][key]) {
        if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
          element.placeholder = translations[lang][key];
        } else {
          element.textContent = translations[lang][key];
        }
      }
    });
  }
}