<template>
  <div class="work-gallery">
    <h2 class="work-gallery__heading">
      <LiText tag="p" color="primary" size="4xl"> My Creations </LiText>
    </h2>
    <div class="work-gallery__items">
      <!-- Loop over each work item and render a MySelectedWork component -->
      <MySelectedWork
        v-for="(work, index) in works"
        :key="index"
        :imageSrc="work.imageSrc"
        :title="work.title"
        :cms="work.cms"
        :app="work.app"
        :year="work.year"
      />
    </div>
    <div class="work-gallery__button">
      <LiButton variant="black">
        <template #icon>
          <IconCircleArrowUpRight class="w-6 h-6 text-primary" />
        </template>
        <LiText
          tag="li"
          color="primary"
          size="sm"
          weight="medium"
          class="list-none ml-2"
        >
          Show more
        </LiText>
      </LiButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconCircleArrowUpRight } from "@tabler/icons-vue";
// Define the type for work items
interface WorkItem {
  imageSrc: string;
  title: string;
  cms: string;
  app: string;
  year: string;
}

// Array of work items
const works: WorkItem[] = [
  {
    imageSrc: "/images/colity.png",
    title: "Colity",
    cms: "CMS",
    app: "App",
    year: "2024",
  },
  {
    imageSrc: "/images/valora.png",
    title: "Valora",
    cms: "Branding",
    app: "Website",
    year: "2023",
  },
  {
    imageSrc: "/images/alite.png",
    title: "Alite",
    cms: "SaaS",
    app: "Website",
    year: "2023",
  },
  {
    imageSrc: "/images/conex.png",
    title: "Conex",
    cms: "CMS",
    app: "App",
    year: "2023",
  },
  {
    imageSrc: "/images/alite.png",
    title: "Alite",
    cms: "SaaS",
    app: "Website",
    year: "2023",
  },
  {
    imageSrc: "/images/conex.png",
    title: "Conex",
    cms: "CMS",
    app: "App",
    year: "2023",
  },
  // Add more work items as needed
];
</script>

<style scoped>
.work-gallery {
  @apply w-[70%] mx-auto flex flex-col gap-8 mt-10 mb-8;
}

.work-gallery__heading {
  @apply mb-4;
}

.work-gallery__items {
  @apply flex flex-wrap gap-8 mb-8;
}

.work-gallery__button {
  @apply flex justify-end;
}
</style>
