<template>
  <div :class="tagClasses">
    <slot />
  </div>
</template>
<script setup lang="ts">
interface Props {
  variant?: "sm" | "md" | "lg";
}

const props = defineProps<Props>();

const tagClasses = computed(() => [
  "tag", // Block
  props.variant ? `tag--${props.variant}` : "", // Modifier
]);
</script>
<style scoped>
.tag {
  @apply bg-transparent text-primary rounded-full outline outline-2 outline-darkGray inline-flex items-center justify-center cursor-pointer transition-colors duration-300;
}

.tag--lg {
  @apply px-6 py-2;
}

.tag--md {
  @apply px-8 py-2.5;
}

.tag--sm {
  @apply px-8 py-3.5;
}
</style>
