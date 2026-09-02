<template>
  <q-layout>
    <NavBar />
    <q-page-container>
      <router-view />
    </q-page-container>
    <fooTer />
  </q-layout>
</template>

<script setup lang="ts">
import NavBar from '../components/NavBar.vue';
import fooTer from '../components/fooTerbox.vue';
</script>
