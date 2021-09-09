const Isotope = require("isotope-layout");

export default class Grid {
  constructor() {
    this.resized = true;
    this.timeout = null;
    this.$filters = document.querySelectorAll(".js-filter");

    this.setupIsotope();
  }

  setupIsotope() {
    const $isotope = document.querySelector(".js-grid");

    if (!$isotope) return;

    // window.addEventListener('resize', () => this.resized = true);
    this.setEqualHeight();

    this.isotope = new Isotope($isotope, {
      layoutMode: "fitRows",
    });

    // document.querySelector('.js-filter').addEventListener('change', (e) => {
    //   this.filter(e.target.value);
    //   this.filter();
    // });

    this.$filters.forEach((select) => {
      select.addEventListener("change", () => {
        this.filter();
      });
    });
  }

  // refresh() {
  //   console.log('refr');
  //   if(this.resized) {
  //     requestAnimationFrame(this.setEqualHeight);
  //   }
  //   clearTimeout(this.timeout);
  //   this.timeout = setTimeout(this.refresh, 100);
  //   this.resized = false;
  // }

  setEqualHeight() {
    const cards = document.querySelectorAll(".js-grid .fr-card");
    var elems = [].slice.call(cards);

    var tallest = Math.max.apply(
      Math,
      elems.map(function(elem, index) {
        elem.style.minHeight = ""; // clean first
        return elem.offsetHeight;
      })
    );

    elems.forEach(function(elem, index, arr) {
      elem.style.minHeight = tallest + "px";
    });
  }

  filter() {
    const filters = [];
    this.$filters.forEach((select) => {
      if (select.value !== "*") {
        filters.push("." + select.value);
      }
    });

    this.isotope.arrange({
      filter: filters.length > 0 ? filters.join("") : "*",
    });
  }
}

new Grid();
