<template>
  <q-page class="q-pa-md">
    <div class="title">Products</div>

    <div class="row q-col-gutter-xl">
      <div
        v-for="product in productStore.featuredProducts"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card flat bordered class="card">
          <q-img class="card-image" :src="product.image" :alt="product.name" x />

          <q-card-section>
            <div class="card-name">{{ product.name }}</div>
            <div class="card-price">$ {{ product.price }}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn class="card-button" label="Add to cart" @click="addProductToCart(product)" />
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useCartStore } from '../stores/cart';
import { useProductStore } from '../stores/product-store';

const productStore = useProductStore();
const cartStore = useCartStore();

const addProductToCart = (product: (typeof productStore.products)[number]) => {
  cartStore.addToCart({
    ...product,
    description: `${product.name} - premium quality`,
    image: product.image,
  });
};
</script>
<style scoped>
.title {
  font-size: 80px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.card {
  background-color: #2a1f46;
  color: #fff;
  border-radius: 8px;
  font-size: 22px;
  border: 1px solid #9f94b3;
  text-align: center;
}
.card-button {
  background-color: #17152b;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #9f94b3;
}
card-image {
  border-radius: 8px;
  object-position: center;
}
</style>
