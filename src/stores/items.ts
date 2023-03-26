import { defineStore } from "pinia";
import type { onTestFailed } from "vitest";
import { ref, computed } from "vue";
import { micromark } from "micromark";

export enum ItemCategory {
  Jobs = "Jobs",
  Education = "Education",
  Projects = "Projects",
  Fun = "Fun",
  Anecdotes = "Anecdotes",
  Other = "Other",
}

export interface Item {
  title: string;
  description: string;
  category: ItemCategory;

  start?: Date;
  end?: Date;
}

const allItems: Item[] = [
  {
    title: "Hello!",
    description: "I'm a digital architect and software engineer based in Zurich. Filter through with the bubbles above or just scroll around :) I'm open to new opportunities, so if you have a project or job, reach out to me. You'll find my contact details on the right.",
    category: ItemCategory.Other,
  },
  {
    title: "legartis.ai",
    description: "* Implementing user-defined fine-grained checks for contract texts using a combination of ML, rule-based, and regular expression-based text processing\n* Raising productivity while lowering cost by streamlining CI / CD",
    category: ItemCategory.Jobs,
  }
];

export const useItemsStore = defineStore("items", () => {
  const items = ref<Item[]>(allItems);
  const filter = ref<Set<ItemCategory>>(new Set());
  
  const categories = computed(() => {
    return Object.values(ItemCategory).map((category) => {
      return {
        label: category,
        active: filter.value.has(category),
      };
    });
  });

  const filteredItems = computed(() => {
    if (filter.value.size === 0) return items.value;

    return items.value.filter((item) => {
      return filter.value.has(item.category);
    });
  });

  const setCategory = (category: ItemCategory, value: boolean) => {
    if (value) {
      filter.value.add(category);
    } else {
      filter.value.delete(category);
    }
  };

  return { filteredItems, categories, setCategory };
});