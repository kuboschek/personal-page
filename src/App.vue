<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import { useItemsStore } from "./stores/items";

const itemStore = useItemsStore();
const year = new Date().getFullYear();

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
      <div class="button box" @click="itemStore.setCategory(category.label, !category.active)" :class="{active: category.active}" v-for="category in itemStore.categories">{{  category.label }}</div>
    </nav>

    <RouterView />

    <footer>&copy; {{ year }} Leo Kuboschek &bull; CC-BY-SA 4.0 &bull; <a href="https://github.com/kuboschek/personal-page">Copy this page</a></footer>
  </div>
</template>

<style scoped lang="scss">
  footer {
    text-align: center;
    font-size: 0.8rem;
    margin: 1rem;
    color: grey;

    a {
      color: grey;
      text-decoration: initial;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
