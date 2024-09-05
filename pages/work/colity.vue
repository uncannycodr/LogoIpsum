<template>
  <div class="colity">
    <div class="colity__image">
      <NuxtImg
        src="/images/colity-det.png"
        alt="hero"
        class="hero-section__img"
      />
      <NuxtImg
        src="/images/colity-cont.png"
        alt="hero"
        class="hero-section__img"
      />
    </div>
    <div class="work-gallery">
      <h2 class="work-gallery__heading">
        <LiText tag="p" color="primary" size="4xl">Similiar Works </LiText>
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
    </div>
  </div>
</template>

<script setup lang="ts">
const { id } = useRoute().params;
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

  // Add more work items as needed
];
</script>

<style scoped>
.colity {
  @apply max-w-[1296px] mx-auto mt-14;
}

.colity__image {
  @apply flex flex-col gap-10;
}
.work-gallery {
  @apply mx-auto flex flex-col gap-8 mt-48 mb-20;
}

.work-gallery__heading {
  @apply mb-4;
}

.work-gallery__items {
  @apply flex flex-wrap gap-8 mb-8;
}
</style>
