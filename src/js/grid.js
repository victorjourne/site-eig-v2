const Isotope = require('isotope-layout');

export default class Grid {
  constructor() {
     this.setupIsotope();
  }
 
  setupIsotope() {
    this.isotope = new Isotope(document.querySelector('.js-isotope'));

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
