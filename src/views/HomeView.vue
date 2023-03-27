<script setup lang="ts">
import { ref } from "vue";
import LifeItemVue from "@/components/LifeItem.vue";
import { useItemsStore } from "@/stores/items";
import { storeToRefs } from "pinia";

const itemStore = useItemsStore();
const buzzwords = new Set(["Vue", "TypeScript", "Angular", "CI/CD", "TDD", "OpenAPI", "Django", "Vue"]);
</script>

<template>
  <main>
    <div>
      <div class="space-sm">
        <h3>Things I Know</h3>
      </div>
      <div class="buzzwords">
        <span class="box space-sm" v-for="buzzword in buzzwords" :key="buzzword">
          {{ buzzword }}
        </span>
      </div>
    </div>
    <div class="items">
      <div class="space-sm">
        <h3>Things I Do</h3>
      </div>
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

  > .box {
    margin: 0;
  }

  .buzzwords {
    display: flex;
    align-items: stretch;
    margin-left: 0;
    padding-left: 0;

    .box {
      display: block
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