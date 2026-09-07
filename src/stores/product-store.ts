import { defineStore } from 'pinia';
import axios from 'axios';
import type { Product } from '../model/ProductModel';

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [] as Product[],
    loading: false,
    error: null as string | null,
  }),

  actions: {
    async fetchProducts() {
      this.loading = true;
      this.error = null;
      try {
        const response = await axios.get<Product[]>('https://api.escuelajs.co/api/v1/products');
        this.products = response.data;
      } catch (err) {
        this.error = 'حدث خطأ أثناء جلب المنتجات';
        console.error(err);
      } finally {
        this.loading = false;
      }
    },
  },
});
