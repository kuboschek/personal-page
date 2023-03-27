import { defineStore } from "pinia";
import { ref } from "vue";

export interface Buzzword {
  label: string;
  link?: string;
}

const allBuzzwords = [
  {
    label: "Vue",
    link: "https://vuejs.org/",
  },
  {
    label: "TypeScript",
    link: "https://www.typescriptlang.org/",
  },
  {
    label: "Angular",
    link: "https://angular.io/",
  },
  {
    label: "CI/CD",
    link: "https://en.wikipedia.org/wiki/CI/CD",
  },
  {
    label: "TDD",
    link: "https://en.wikipedia.org/wiki/Test-driven_development",
  },
  {
    label: "OpenAPI",
    link: "https://swagger.io/specification/",
  },
  {
    label: "Django",
    link: "https://www.djangoproject.com/",
  }
]

export const useBuzzwordStore = defineStore("buzzwords", () => {
  const buzzwords = ref<Buzzword[]>(allBuzzwords);

  return { buzzwords };
});