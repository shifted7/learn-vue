'use strict';

var app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    description: 'Some normal boots',
    image: 'assets/Plains.jpg',
    link: 'https://vuejs.org/v2/guide/installation.html',
    inventory: 9,
    onSale: false,
    details: ['Strong', 'Sturdy', 'Capable'],
    variants: [
      {
        variantId: 1,
        variantSize: "S"
      },
      {
        variantId: 2,
        variantSize: "M"
      },
      {
        variantId: 3,
        variantSize: "L"
      }
    ]
  }
})
