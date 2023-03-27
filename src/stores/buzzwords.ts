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
    label: "Nest.js",
    link: "https://nestjs.com/",
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
  },
  {
    label: "Python",
    link: "https://www.python.org/",
  },
  {
    label: "Go",
    link: "https://golang.org/",
  },
  {
    label: "Kubernetes",
    link: "https://kubernetes.io/",
  },
  {
    label: "Terraform CDK",
    link: "https://www.terraform.io/docs/cdktf/index.html",
  },
  {
    label: "React Native",
    link: "https://reactnative.dev/",
  },
  {
    label: "HTML",
    link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    label: "CSS",
    link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    label: "JavaScript",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Java",
    link: "https://www.java.com/",
  },
  {
    label: "German",
    link: "https://en.wikipedia.org/wiki/German_language",
  },
  {
    label: "English",
    link: "https://en.wikipedia.org/wiki/English_language",
  },
]

export const useBuzzwordStore = defineStore("buzzwords", () => {
  const buzzwords = ref<Buzzword[]>(allBuzzwords);

  return { buzzwords };
});