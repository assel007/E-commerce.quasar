<template>
  <q-header class="my-header">
    <q-toolbar class="toolbar">
      <q-toolbar-title class="t-title">dragon store</q-toolbar-title>

      <q-space />

      <q-btn flat class="buttons" to="/" label="Home" />
      <q-btn flat class="buttons" to="/products" label="Products" />
      <q-btn flat class="buttons" to="/cart" label="Cart" />
    </q-toolbar>
  </q-header>
</template>

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
