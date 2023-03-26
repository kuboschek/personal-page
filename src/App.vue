<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useItemsStore } from "./stores/items";

const itemStore = useItemsStore();

</script>

<template>
  <div class="container">
    <header class="box rainbow space">
      <div>
        <h1>Leo Kuboschek</h1>
        <h2>Digital Architect</h2>
      </div>

      <div class="contact">
        leo@kuboschek.me<br />
        Zürich<br />
        Switzerland
      </div>
    </header>

    <nav class="space-sm">
      <div class="box" @click="itemStore.setCategory(category.label, !category.active)" :class="{active: category.active}" v-for="category in itemStore.categories">{{  category.label }}</div>
    </nav>

    <RouterView />
  </div>
</template>

<style scoped>
</style>
