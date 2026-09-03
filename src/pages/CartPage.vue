<template>
  <q-page class="q-pa-md">
    <div>
      <h4 class="title">{{ $t('cart') }} : {{ cartStore.cartCount }}</h4>

      <q-list v-if="cartStore.cartItems.length">
        <q-item class="item" v-for="item in cartStore.cartItems" :key="item.id">
          <q-item-section avatar class="images">
            <q-img :src="item.image" style="width: 100px" />
          </q-item-section>
          <q-item-section class="name">
            <q-item-label>{{ item.name }}</q-item-label>
          </q-item-section>
          <q-item-section>
            <div class="text-h6">${{ item.price }}</div>
          </q-item-section>
        </q-item>
      </q-list>

      <div v-else class="text-center q-mt-md">
        <p>{{ $t('cart_empty') }}</p>
      </div>
    </div>
    <div class="total">{{ $t('total') }}: ${{ cartStore.totalPrice }}</div>
  </q-page>
</template>
<script setup lang="ts">
import { useCartStore } from '../stores/cart';
const cartStore = useCartStore();
</script>
<style scoped>
.total {
  font-size: 50px;
  font-weight: 400;
  margin-top: 50px;
}
.title {
  font-size: 50px;
  font-weight: 400;
  margin-bottom: 40px;
}
.item {
  margin-bottom: 20px;
  width: 500px;
  display: flex;
  align-items: center;
  flex-direction: space-between;
}
.name {
  margin-left: 20px;
  font-size: 25px;
}
</style>
