import { defineStore } from "pinia";
import { computed, ref } from "vue";
export enum ItemCategory {
  Jobs = "Jobs",
  Projects = "Projects",
  Education = "Education",
  Leisure = "Leisure",
  Trivia = "Trivia",
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
    title: "about:me",
    description: "I built my own electric vehicle when I was 13, learned two new sports in 2022, and organised multiple events.\n\nFilter through my life with the bubbles above or just scroll around :) I'm open to new opportunities, so if you have a project or job, reach out to me. You'll find my contact details at the top.",
    category: ItemCategory.Other,
  },
  {
    title: "legartis.ai",
    subtitle: "Software Engineer",
    start: new Date("2022-07-01"),
    end: new Date("2023-04-30"),
    description: "* Implementing user-defined fine-grained checks for contract texts using a combination of ML, rule-based, and regular expression-based text processing\n* Raising productivity while lowering cost by streamlining CI / CD",
    category: ItemCategory.Jobs,
  },
  {
    title: "Skiing",
    description: "When you move to Switzerland...\n(and you're not a snowboarder), you just have to learn how to ski. I'm one season in, but it's already a lot of fun!",
    start: new Date("2022-12-19"),
    category: ItemCategory.Leisure,
  },
  {
    title: "Renaming a University",
    description: "I originally graduated from Jacobs University Bremen, now it's called Constructor University Bremen. The university was renamed in 2022. Previously it had yet another name, which was International University Bremen.",
    category: ItemCategory.Trivia,
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
    title: "Inline Skating",
    subtitle: "Eight Wheel Drive",
    description: "Roll roll roll your skates gently down the road 😊 Another cool way of getting around (in summer).",
    start: new Date("2021-06-01"),
    category: ItemCategory.Leisure,
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
    title: "Cycling",
    subtitle: "Ride the road bike 🚴‍♂️",
    description: "Sometime in 2019 I picked up my first road bike. I've been on two wheels since I was three years old. This was a great progression.\nLittle did I know that a year later, a pandemic would hit and cycling would become my main pastime.",
    start: new Date("2001-01-01"),
    category: ItemCategory.Leisure,
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
  },
  {
    title: "jacobsHack! (4th edition)",
    subtitle: "Organizational Director",
    start: new Date("2015-12-01"),
    end: new Date("2016-10-01"),
    description: "* Led Team Building, Fundraising and Event Logistics\n* Event attended by 160 participants from 50 countries\n* Managed a team of 20+ volunteers\n* Raised over 10k€ for the event",
    category: ItemCategory.Projects,
  },
  {
    title: "B.Sc. Computer Science",
    subtitle: "Jacobs University Bremen",
    start: new Date("2014-08-01"),
    end: new Date("2017-06-01"),
    description: "* Specialisation in Computer Networks, Databases and Web Services, Image Processing, Autonomous Systems, Advanced Visualisation",
    category: ItemCategory.Education,
  },
  {
    title: "eVan CarGo",
    subtitle: "My First Eletric Vehicle",
    description: "Before anybody knew what Type 2 Chargers were, or where to find one, before anybody cared about heat pumps vs PTC, a friend and I built an electric vehicle from scratch. We learned a lot about the difficult decisions of integrating vehicle electronics while managing passive battery drain. As a bonus, we added remote control capabilities to the vehicle.",
    start: new Date("2010-12-01"),
    end: new Date("2012-06-01"),
    category: ItemCategory.Projects,
  }
];

export const useItemsStore = defineStore("items", () => {
  const filter = ref<Set<ItemCategory>>(new Set([]));

  const categories = computed(() => {
    return Object.values(ItemCategory).map((category) => {
      return {
        label: category,
        active: filter.value.has(category),
      };
    });
  });

  const filteredItems = computed(() => {
    if (filter.value.size === 0) return allItems;

    return allItems.filter((item) => {
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