import { defineStore } from 'pinia';
export interface products {
  id: number;
  name: string;
  price: number;
  image: string;
}
export const useProductStore = defineStore('product', {
  state: () => ({
    products: [
      {
        id: 1,
        name: 'Nike Air Max',
        price: 120,
        image: '../public/product1.jpg',
      },
      {
        id: 2,
        name: 'Adidas Casual',
        price: 95,
        image: '../public/product2.jpg',
      },
      {
        id: 3,
        name: 'Nike Sport',
        price: 150,
        image: '../public/product3.jpg',
      },
    ],
  }),

  getters: {
    featuredProducts: (state) => state.products.slice(0, 3),
  },
});
