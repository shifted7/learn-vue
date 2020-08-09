'use strict';

var app = new Vue({
  el: '#app',
  data: {
    product: 'Boots',
    brand: 'Adventurer\'s Guild',
    selectedVariant: 0,
    description: 'Some normal boots',
    link: 'https://vuejs.org/v2/guide/installation.html',
    inventory: 0,
    onSale: false,
    details: ['Strong', 'Sturdy', 'Capable'],
    variants: [
      {
        variantId: 1,
        variantSize: 'S',
        variantColor: 'green',
        variantImage: './assets/Plains.jpg',
        variantQuantity: 10
      },
      {
        variantId: 2,
        variantSize: 'M',
        variantColor: 'blue',
        variantImage: './assets/Feydark.jpg',
        variantQuantity: 20
      },
      {
        variantId: 3,
        variantSize: 'L',
        variantColor: 'red',
        variantQuantity: 0
      }
    ],
    cart: 0
  },
  methods: {
    addToCart(){
      this.cart += 1;
    },
    updateProduct(index){
      this.selectedVariant = index;
    },
    removeFromCart(){
      this.cart -= 1;
    }
  },
  computed: {
    title() {
      return `${this.brand} ${this.product}`;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      if(this.onSale){
        return 'On sale now!';
      } else {
        return 'Not on sale at this time.'
      }
    }
  }
})
