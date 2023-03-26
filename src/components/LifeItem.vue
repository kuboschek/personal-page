<template>
  <div class="box space">
    <div class="head">
      <h3>{{ itemData.title }}</h3>
      <span>{{ durationString }}</span>
    </div>
    <p v-html="micromark(itemData.description)"></p>
  </div>
</template>

<script setup lang="ts">
import { computed, defineProps, type PropType } from "vue";
import { micromark } from "micromark";
import type { Item } from "@/stores/items";

const props = defineProps({
  itemData: {
    type: Object as PropType<Item>,
    required: true,
  },
});

const durationString = computed(() => {
  const { start, end } = props.itemData;
  if (start && end) {
    return `${start} - ${end}`;
  } else if (start) {
    return `${start} - present`;
  } else {
    return "";
  }
});
</script>