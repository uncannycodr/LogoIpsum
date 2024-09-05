<script setup lang="ts">
import {
  IconBox,
  IconDevices,
  IconFileCode2,
  IconPalette,
  IconWorld,
} from "@tabler/icons-vue";

const accordionItemsWithIcons = [
  {
    icon: IconFileCode2,
    title: "Full-Stack Development",
    content:
      "The artistry and precision of Full-Stack Development. From crafting interactive front-end experiences that captivate users to architecting robust back-end systems.",
  },
  {
    icon: IconBox,
    title: "UI/UX Design Excellence",
    content:
      "The artistry and precision of Full-Stack Development. From crafting interactive front-end experiences that captivate users to architecting robust back-end systems.",
  },
  {
    icon: IconDevices,
    title: "Product Design",
    content:
      "The artistry and precision of Full-Stack Development. From crafting interactive front-end experiences that captivate users to architecting robust back-end systems.",
  },
  {
    icon: IconWorld,
    title: "Web Design",
    content:
      "The artistry and precision of Full-Stack Development. From crafting interactive front-end experiences that captivate users to architecting robust back-end systems.",
  },
  {
    icon: IconPalette,
    title: "Art Direction",
    content:
      "The artistry and precision of Full-Stack Development. From crafting interactive front-end experiences that captivate users to architecting robust back-end systems.",
  },
];
</script>

<template>
  <div class="what-i-do-section">
    <div class="what-i-do-section__content">
      <WhatIDoIntro />
      <Accordion :items="accordionItemsWithIcons" width="40%" variant="icon" />
    </div>
  </div>
</template>

<style scoped>
.what-i-do-section {
  @apply bg-card-bg h-full pt-16 mt-20 mb-10;
}
.what-i-do-section__content {
  @apply flex flex-row justify-center gap-20 items-center  pt-20 pb-20 max-w-[94%] mx-auto;
}
</style>
