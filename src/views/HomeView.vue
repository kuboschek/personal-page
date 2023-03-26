<script setup lang="ts">
import LifeItemVue from "@/components/LifeItem.vue";
import { useItemsStore } from "@/stores/items";

const { filteredItems } = useItemsStore();
</script>

<template>
  <main>
    <div class="timeline box space">
      timeline
    </div>
    <div class="items">
      <LifeItemVue :item-data="item" v-for="item in filteredItems"/>
    </div>
  </main>
</template>

<style scoped lang="scss">

main {
  margin: 1em;
  display: flex;
  gap: 1em;

  > .box {
    margin: 0;
  }

  .timeline {
    flex: 1;
  }

  .items {
    flex: 3;

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