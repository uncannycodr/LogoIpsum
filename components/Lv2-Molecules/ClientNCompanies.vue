<template>
  <div class="client-n-companies">
    <div class="client-n-companies__header">
      <IconPointFilled class="client-n-companies__icon" />
      <LiText
        tag="h2"
        color="primary"
        size="xl"
        class="client-n-companies__heading"
      >
        Companies and industries I’ve worked with
      </LiText>
    </div>

    <!-- Images grid with BEM class names -->
    <div class="client-n-companies__images-grid">
      <NuxtImg
        src="/images/luminous.png"
        alt="luminous"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/hourglass.png"
        alt="hourglass"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/capsule.png"
        alt="capsule"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/webflow.png"
        alt="webflow"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/lightbox.png"
        alt="lightbox"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/spherule.png"
        alt="spherule"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/command.png"
        alt="command"
        class="client-n-companies__image"
      />
      <NuxtImg
        src="/images/segment.png"
        alt="segment"
        class="client-n-companies__image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconPointFilled } from "@tabler/icons-vue";
</script>
<style scoped>
.client-n-companies {
  @apply p-4 max-w-[972px]  ml-[258px] pt-20 pb-28;
}

.client-n-companies__header {
  @apply flex flex-row gap-2 mb-4;
}

.client-n-companies__icon {
  @apply w-6 h-6 text-dot;
}

.client-n-companies__heading {
  @apply mb-6;
}

.client-n-companies__images-grid {
  @apply grid grid-cols-4 gap-10;
}

.client-n-companies__image {
  @apply w-[137px] h-[39px] object-cover;
  filter: grayscale(100%);
}
</style>
