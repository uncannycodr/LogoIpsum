<template>
  <div class="work-process">
    <LiText tag="h3" color="primary" size="4xl"> Work Process </LiText>
    <div class="work-process__cards">
      <WorkProcessCard
        v-for="card in cards"
        :key="card.title"
        :title="card.title"
        :description="card.description"
        :icon="card.icon"
        class="work-process__card"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconFileText, IconScan, IconSearch, IconUsb } from "@tabler/icons-vue"; // Import the icons you need

// Define the type for the cards array for better TypeScript integration
interface Card {
  title: string;
  description: string;
  icon: any;
}

const cards: Card[] = [
  {
    title: "Research",
    description:
      "Utilizing a combination of these tags can make your portfolio more navigable and allow viewers to filter projects that are of particular interest or relevance to them.",
    icon: IconSearch,
  },
  {
    title: "Define",
    description:
      "Utilizing a combination of these tags can make your portfolio more navigable and allow viewers to filter projects that are of particular interest or relevance to them.",
    icon: IconFileText,
  },
  {
    title: "Ideate",
    description:
      "Utilizing a combination of these tags can make your portfolio more navigable and allow viewers to filter projects that are of particular interest or relevance to them.",
    icon: IconScan,
  },
  {
    title: "Prototype",
    description:
      "Utilizing a combination of these tags can make your portfolio more navigable and allow viewers to filter projects that are of particular interest or relevance to them.",
    icon: IconUsb,
  },
];
</script>

<style scoped>
.work-process {
  @apply w-[70%] mx-auto;
}
.work-process__cards {
  @apply flex flex-row gap-8 mt-8;
}
</style>
