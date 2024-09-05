<template>
  <div class="client-review">
    <NuxtImg :src="imageSrc" alt="luminous" class="client-review__image" />
    <LiText tag="p" color="primary" size="base" class="client-review__text">
      {{ text }}
    </LiText>

    <!-- Author Container -->
    <div class="client-review__author">
      <NuxtImg
        :src="authorImageSrc"
        alt="author"
        class="client-review__author-image"
      />
      <div class="client-review__author-info">
        <LiText
          tag="span"
          color="primary"
          size="xl"
          class="client-review__author-name"
        >
          {{ authorName }}
        </LiText>
        <LiText
          tag="span"
          color="gray"
          size="base"
          weight="semibold"
          class="client-review__author-position"
        >
          {{ authorPosition }}
        </LiText>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrc: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  authorImageSrc: {
    type: String,
    required: true,
  },
  authorName: {
    type: String,
    required: true,
  },
  authorPosition: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.client-review {
  @apply pt-4 max-w-[416px] flex flex-col gap-6;
  /* Example height, adjust as needed */
}

.client-review__image {
  @apply w-[137px] h-[39px] object-cover;
  filter: grayscale(100%);
}

.client-review__author {
  @apply flex items-center mt-5;
}

.client-review__author-image {
  @apply w-14 h-14 rounded-full mr-4;
}

.client-review__author-info {
  @apply flex flex-col;
}

.client-review__author-name {
  @apply font-bold mb-1;
}

.client-review__author-position {
  @apply text-gray;
}

.client-review__text {
  @apply h-[96px];
}
</style>
