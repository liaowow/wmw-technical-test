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

  // cartItemClicked() {
  //   const currentItem = document.querySelector('.product-card__add-to-cart');
  //   currentItem.addEventListener('click', () => window.console.log('clicked!'));
  // },

  // addToCart(id) {

    // const config = {
    //   method: 'POST',
    //   headers: {
    //     'content-type': 'application/json',
    //   },
    //   body: JSON.stringify(id),
    // };

    // fetch('/cart', config)
    //   .then(res => res.json())
    //   .then(data => window.console.log(data))
    //   .catch(err => window.console.log(`Oops, here's the error: ${err}`));
  // },
});
