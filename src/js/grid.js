const Isotope = require('isotope-layout');

export default class Grid {
  constructor() {
     this.setupIsotope();
  }
 
  setupIsotope() {
    const $isotope = document.querySelector('.js-isotope');

    if(!$isotope) return;

    this.isotope = new Isotope($isotope);

    document.querySelector('.js-filter').addEventListener('change', (e) => {
      this.filter(e.target.value);
    });
  }

  filter(filter) {
    if(filter != '*') {
      filter = '.is-cat-' + filter;
    }

    this.isotope.arrange({
      filter
    });
  }
}

new Grid();
