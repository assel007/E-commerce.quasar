import { defineStore } from 'pinia';

export interface CartItem {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

export const useCartStore = defineStore('cart', {
  state: () => ({
    cartItems: [] as CartItem[],
  }),
  getters: {
    cartCount: (state) => state.cartItems.length,
  },
  actions: {
    addToCart(product: CartItem) {
      this.cartItems.push(product);
    },
  },
});
