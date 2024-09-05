<template>
  <div class="my-selected-work">
    <!-- Top Image -->
    <NuxtLink to="work/colity">
      <div class="my-selected-work__image">
        <NuxtImg :src="imageSrc" :alt="title" />
      </div>
    </NuxtLink>

    <!-- Content Section -->
    <div class="my-selected-work__content">
      <!-- Column with Title, CMS, and App -->
      <div class="my-selected-work__info">
        <LiText
          tag="p"
          color="primary"
          size="xl"
          class="my-selected-work__title"
        >
          {{ title }}
        </LiText>

        <!-- Row for CMS and App -->
        <div class="my-selected-work__details">
          <LiText
            tag="span"
            color="gray"
            size="sm"
            class="my-selected-work__text"
          >
            {{ cms }}
          </LiText>

          <LiText
            tag="span"
            color="gray"
            size="sm"
            class="my-selected-work__text"
          >
            {{ app }}
          </LiText>
        </div>
      </div>

      <!-- LiTag Section -->
      <LiTag variant="sm" class="my-selected-work__tag">
        <LiText tag="p" color="primary" size="base">{{ year }}</LiText>
      </LiTag>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  cms: {
    type: String,
    required: true,
  },
  app: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.my-selected-work {
  @apply flex flex-col gap-4 w-full  max-w-[48%];
}

.my-selected-work__image {
  @apply mb-4;
}

.my-selected-work__content {
  @apply flex justify-between;
}

.my-selected-work__info {
  @apply flex flex-col items-start;
}

.my-selected-work__title {
  @apply mb-2;
}

.my-selected-work__details {
  @apply flex items-center gap-6; /* Align CMS and App in a row */
}

.my-selected-work__text {
  @apply mb-0; /* Remove bottom margin for inline items */
}

.my-selected-work__tag {
  @apply flex items-center whitespace-nowrap; /* Ensure tag content does not wrap */
}
</style>
