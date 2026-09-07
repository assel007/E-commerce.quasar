<template>
  <q-page class="q-pa-sm">
    <div class="title">{{ $t('products') }}</div>
    <div v-if="productStore.loading" class="text-center q-pa-xl">
      <q-spinner-dots color="primary" size="60px" />
    </div>
    <div v-else id="product-grid">
      <div
        v-for="product in productStore.products"
        :key="product.id"
        class="col-12 col-sm-6 col-md-4"
      >
        <q-card flat bordered class="card">
          <q-img
            class="card-image"
            :src="
              product.images && product.images.length > 0
                ? product.images[0]
                : 'https://via.placeholder.com/300'
            "
            :alt="product.title"
          />
          <q-card-section class="card-name">
            <div class="card-name">{{ product.title }}</div>
            <div class="card-price">$ {{ product.price }}</div>
          </q-card-section>

          <q-card-actions align="right">
            <q-btn
              class="card-button"
              :label="t('add_to_cart')"
              @click="addProductToCart(product)"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <q-btn class="cart-button" :label="t('view_cart')" @click="viewCart" />
  </q-page>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useCartStore } from '../stores/cart-store';
import { useProductStore } from '../stores/product-store';
import { useI18n } from 'vue-i18n';

const productStore = useProductStore();
const cartStore = useCartStore();
const router = useRouter();
const { t } = useI18n();

onMounted(() => {
  void productStore.fetchProducts();
});

const viewCart = () => {
  void router.push('/cart');
};

const addProductToCart = (product: (typeof productStore.products)[number]) => {
  cartStore.addToCart({
    ...product,
    title: product.title,
    images: product.images,
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
  width: 500px;
}
.card-button {
  background-color: #17152b;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #9f94b3;
  height: 60px;
  width: 200px;
}
.card-image {
  border-radius: 8px;
  object-position: center;
  height: 300px; /* تم إضافة ارتفاع ثابت لترتيب الصور */
}
.card-name {
  font-size: 30px;
}
#product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 50px;
}
.cart-button {
  display: block;
  margin-left: auto;
  margin-bottom: 30px;
  background-color: #17152b;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 8px;
  border: 1px solid #9f94b3;
  height: 80px;
  width: 250px;
}
</style>
