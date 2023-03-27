<template>
  <div class="box space">
    <div class="head">
      <div>
        <h3>{{ itemData.title }}</h3>
        <h4>{{ itemData.subtitle }}</h4>
      </div>
      <span>{{ durationString }}</span>
    </div>
    <div class="content" v-html="descriptionHtml"></div>
  </div>
</template>

<style scoped lang="scss">
h3 {
  margin-bottom: 0.25rem;
}

h4 {
  margin-bottom: 1rem;
}

span {
  white-space: nowrap;
}

small {
  font-size: 0.75em;
  padding-inline-start: 0.5em;
}
</style>

<script setup lang="ts">
import { computed, defineProps, type PropType } from "vue";
import { micromark } from "micromark";
import day from "dayjs";
import type { Item } from "@/stores/items";

const props = defineProps({
  itemData: {
    type: Object as PropType<Item>,
    required: true,
  },
});

const descriptionHtml = computed(() => {
  return micromark(props.itemData.description);
});

const durationString = computed(() => {
  const start = props.itemData.start
    ? day(props.itemData.start).format("MMM YYYY")
    : null;
  const end = props.itemData.end
    ? day(props.itemData.end).format("MMM YYYY")
    : null;

  if (start && end) {
    return `${start} - ${end}`;
  } else if (start) {
    return `${start} - present`;
  } else {
    return "";
  }
});
</script>