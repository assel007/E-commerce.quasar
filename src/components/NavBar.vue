<template>
  <q-header class="my-header">
    <q-toolbar class="toolbar">
      <q-toolbar-title class="t-title">{{ $t('title') }}</q-toolbar-title>

      <q-space />

      <q-btn flat class="buttons" to="/" :label="t('home')" />
      <q-btn flat class="buttons" to="/products" :label="t('products')" />
      <q-btn flat class="buttons" to="/cart" :label="t('cart')" />
      <q-btn
        flat
        class="buttons"
        @click="ChangeLangrage"
        :label="locale === 'en-US' ? 'عربيه' : 'ENGLISH'"
      />
    </q-toolbar>
  </q-header>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const ChangeLangrage = () => {
  locale.value = locale.value === 'en-US' ? 'ar' : 'en-US';
};
const { t } = useI18n();
</script>

<style>
.t-title {
  color: white;
  font-size: 32px;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.my-header {
  min-height: 80px;
  width: 100%;
  background-color: #2a1f46;
}

.toolbar {
  min-height: 80px;
}
.buttons {
  color: white;
  font-size: 18px;
  text-transform: uppercase;
}
.buttons:hover {
  transform: translateY(-2px);
}
</style>
