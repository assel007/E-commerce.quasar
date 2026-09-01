<template>
  <q-page class="q-pa-md">
    <div>
      <h4>Shopping Cart : {{ cartStore.cartCount }}</h4>
      <q-list v-if="cartStore.cartItems.length">
        <q-item v-for="item in cartStore.cartItems" :key="item.id">
          <q-item-section avatar>
            <q-img :src="item.image" style="width: 100px" />
          </q-item-section>
          <q-item-section>
            <q-item-label>{{ item.name }}</q-item-label>
            <q-item-label caption>{{ item.description }}</q-item-label>
          </q-item-section>
          <q-item-section side>
            <div class="text-h6">${{ item.price }}</div>
          </q-item-section>
        </q-item>
      </q-list>
      <div v-else class="text-center q-mt-md">
        <p>Cart is empty</p>
      </div>
    </div>
  </q-page>
</template>
<script setup lang="ts">
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
</script>
