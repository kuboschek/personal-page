import { defineStore } from "pinia";
import type { onTestFailed } from "vitest";
import { ref, computed } from "vue";
import { micromark } from "micromark";
export enum ItemCategory {
  Jobs = "Jobs",
  Projects = "Projects",
  Education = "Education",
  Fun = "Fun",
  Anecdotes = "Anecdotes",
  Other = "Other",
}

export interface Item {
  title: string;
  subtitle?: string;

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
    subtitle: "Software Engineer",
    start: new Date("2022-07-01"),
    description: "* Implementing user-defined fine-grained checks for contract texts using a combination of ML, rule-based, and regular expression-based text processing\n* Raising productivity while lowering cost by streamlining CI / CD",
    category: ItemCategory.Jobs,
  },
  {
    title: "Renaming A University",
    description: "I originally graduated from Jacobs University Bremen, but now it's called Constructor University Bremen. The university was renamed in 2022. Previously it had yet another name, which was International University Bremen.",
    category: ItemCategory.Anecdotes,
  },
  {
    title: "DXC Technology",
    subtitle: "Senior Consultant Technical",
    start: new Date("2021-04-01"),
    end: new Date("2022-07-01"),
    description: "* Enabled cloud cost savings by implementing discovery of Cloud Resources via ServiceNow for Migros-Genossenschafts-Bund (MGB)\n* Improved customer service by integrating third-party data sources into ServiceNow at a large transport company",
    category: ItemCategory.Jobs,
  },
  {
    title: "Sopra Steria SE",
    subtitle: "Software Consultant",
    start: new Date("2018-05-01"),
    end: new Date("2021-04-01"),
    description: "* Implemented usability improvements in account transfer procedures for 350+ banks serving 100m customers\n* Streamlined a core purchasing process using the ServiceNow platform",
    category: ItemCategory.Jobs,
  },
  {
    title: "Things move China GmbH",
    subtitle: "Software Engineer",
    start: new Date("2017-10-01"),
    end: new Date("2018-05-01"),
    description: "* Development on React Native app and React-based web application\n* Split backend monolith into multiple services with single responsibility in mind\n* Automated container building and deployment\n* Implemented monitoring on critical services",
    category: ItemCategory.Jobs,
  },
  {
    title: "Dolby Laboratories",
    subtitle: "Software Engineering Intern",
    start: new Date("2016-06-01"),
    end: new Date("2016-09-01"),
    description: "* Development on a data-heavy visualisation web application\n* Optimised the database schema while maintaining API compatibility\n* Allows engineers and project managers worldwide to compare product performance on every commit",
    category: ItemCategory.Jobs,
  },
  {
    title: "Computer Networks and Distributed Systems Research Group",
    subtitle: "Constructor University Bremen",
    start: new Date("2016-10-01"),
    end: new Date("2017-06-01"),
    description: "* Guided Research on IPv6 adoption\n* Analysed the ~23TB DNS Big Dataset to establish links in measured IPv6 adoption and CDN deployments",
    category: ItemCategory.Education,
  }
];

export const useItemsStore = defineStore("items", () => {
  const items = ref<Item[]>(allItems);
  const filter = ref<Set<ItemCategory>>(new Set([ItemCategory.Other, ItemCategory.Jobs, ItemCategory.Projects, ItemCategory.Education]));
  
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