<template>
  <div class="card">
    <span class="card__icon">
      <!-- Utilize the icon prop for flexibility instead of hardcoding IconSearch -->
      <component :is="icon" class="w-10 h-10 text-primary" />
    </span>
    <LiText
      tag="h2"
      color="primary"
      size="xl"
      weight="base"
      class="card__title"
    >
      {{ title }}
    </LiText>
    <LiText tag="p" color="gray" size="base" class="card__description">
      {{ description }}
    </LiText>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  icon: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>
.card {
  @apply bg-card-bg border border-darkGray rounded-lg px-6 py-8 w-[306px] flex flex-col;
}

.card__icon {
  @apply mb-12;
}

.card__title {
  @apply mb-4;
}

.card__description {
  @apply mb-4;
}
</style>
