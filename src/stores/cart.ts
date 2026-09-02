import type { Product } from '../model/ProductModel';
import { defineStore } from 'pinia';

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as Product[],
  }),
  getters: {
    cartCount: (state) => state.cartItems.length,
  },
  actions: {
    addToCart(product: Product) {
      this.cartItems.push(product);
    },
  },
});
