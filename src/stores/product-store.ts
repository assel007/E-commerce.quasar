import { defineStore } from 'pinia'; //import function from pinia to define a store

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Nike Air Max',
        price: 120,
        image: '/product1.jpg',
      },
      {
        id: 2,
        name: 'Adidas Casual',
        price: 95,
        image: '/product2.jpg',
      },
      {
        id: 3,
        name: 'Nike Sport',
        price: 150,
        image: '/product3.jpg',
      },
    ],
  }),

  getters: {
    featuredProducts: (state) => state.products.slice(0, 3),
  },
});
