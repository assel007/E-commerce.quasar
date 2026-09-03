<template>
  <q-page class="q-pa-xl">
    <div class="row justify-center">
      <div class="col-12 col-md-8 text-center">
        <div class="title">
          {{ $t('title') }}
        </div>
        <p class="description">{{ $t('welcome') }}</p>

        <div class="q-gutter-xl q-mt-md">
          <q-btn class="buttons" to="/products" :label="t('products')" />
          <q-btn class="buttons" to="/cart" :label="t('cart')" />
        </div>
      </div>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { t } = useI18n();
</script>
<style scoped>
.title {
  font-size: 80px;
  font-weight: 400;
  color: #fff;
  letter-spacing: 1px;
  text-transform: uppercase;
}
.description {
  font-size: 20px;
  color: #fff;
  margin-top: 20px;
}
.buttons {
  background-color: #2a1f46;
  color: #fff;
  font-size: 21px;
  text-transform: uppercase;
  border-radius: 8px;
  width: 250px;
  height: 100px;
}
.buttons:hover {
  transform: translateY(-2px);
  border: #fff 1px solid;
  box-shadow: 0px 4px 4px white;
}
</style>
