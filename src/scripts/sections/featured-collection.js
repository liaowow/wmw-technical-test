/**
 * Section: Featured collection
 * ------------------------------------------------------------------------------
 * Featured collection configuration for complete theme support
 * - https://github.com/Shopify/theme-scripts/tree/master/packages/theme-sections
 *
 * @namespace featuredCollection
 */
import {register} from '@shopify/theme-sections';

/**
 * Featured collection constructor
 * Executes on page load as well as Theme Editor `section:load` events.
 *
 * @param {string} container - selector for the section container DOM element
 */
register('featured-collection', {
  init() {
    this.publicMethod();
  },

  publicMethod() {
    window.console.log('Initialising featured collection section');
  },

  onLoad() {
    const cartBtns = document.querySelectorAll('.product-card__add-to-cart');
    cartBtns.forEach((btn) => btn.addEventListener('click', (event) => {
      event.preventDefault();

      const config = {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          'quantity': 1,
          'id': btn.dataset.variantId
        })
      };
  
      window.fetch('./cart/add.js', config)
        .then((response) => {
          if (response.status === 200) {
            updateCount();
          }
          return true;
        })
        .catch((err) => window.console.error(err));
  
    }));

    function updateCount() {
      const cartItemCount = document.querySelector('.site-header__item-count')

      window.fetch('./cart.js')
        .then(r => r.json())
        .then(data => cartItemCount.innerHTML = `(${data.item_count})`)
        .catch(err => console.error(err))
      
    }
  },
});
