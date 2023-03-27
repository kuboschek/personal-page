<script setup lang="ts">
import { ref } from "vue";
import LifeItemVue from "@/components/LifeItem.vue";
import { useItemsStore } from "@/stores/items";
import { storeToRefs } from "pinia";
import { useBuzzwordStore } from "@/stores/buzzwords";

const itemStore = useItemsStore();
const buzzwordStore = useBuzzwordStore();
</script>

<template>
  <main>
    <div>
      <div class="space-sm">
        <h3>Things I Know</h3>
      </div>
      <div class="buzzwords">
        <a class="button box space-sm" v-for="buzzword in buzzwordStore.buzzwords" :key="buzzword.label" :href="buzzword.link" target="_blank" rel="noopener noreferrer">{{ buzzword.label }}</a>
      </div>
    </div>
    <div class="items">
      <div class="space-sm">
        <h3>Things I Do</h3>
      </div>
      <nav class="no-print">
        <div class="button box space-sm" @click="itemStore.setCategory(category.label, !category.active)" :class="{active: category.active}" v-for="category in itemStore.categories">{{  category.label }}</div>
      </nav>
      <LifeItemVue :item-data="item" v-for="item in itemStore.filteredItems" :key="item.title"/>
    </div>
  </main>
</template>

<style scoped lang="scss">
@import "@/assets/variables.scss";

main {
  margin: 1em;
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 1em;

  @media screen and (max-width: $medium) {
    grid-template-columns: 1fr;
  }

  @media print {
    grid-template-columns: 1fr;
  }

  > .box {
    margin: 0;
  }

  nav {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-wrap: wrap;

    &::-webkit-scrollbar {
      display: none;
    }

    .box {
      box-shadow: none;
    }
  }

  .buzzwords {
    display: flex;
    flex-wrap: wrap;
    align-items: stretch;
    margin-left: 0;
    padding-left: 0;

    a {
      text-decoration: none;
      color: initial;
    }
    .box {
      flex-grow: 1;
      text-align: center;
    }
  }

  .items {

    > .box {
      margin-left: 0;
      margin-right: 0;
    }

    > .box:first-child {
      margin-top: 0;
    }
  }
}
</style>