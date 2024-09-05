<script setup lang="ts">
import { computed } from "vue";

interface Props {
  variant?: "header" | "white" | "black" | "text";
}

const props = defineProps<Props>();

const buttonClasses = computed(() => [
  "btn", // Block
  props.variant ? `btn--${props.variant}` : "", // Modifier
]);
</script>
<template>
  <button :class="buttonClasses">
    <slot name="icon" />
    <!-- Slot for the icon -->
    <slot />
    <!-- Slot for the button text -->
  </button>
</template>
<style scoped>
/* Block */
.btn {
  @apply inline-flex items-center justify-center px-4 py-2 border-none cursor-pointer transition-colors duration-300;
}

/* Modifiers */
.btn--header {
  @apply bg-darkGray text-primary rounded-lg px-8 py-4;
}

.btn--white {
  @apply bg-white text-secondary rounded-full px-8 py-4;
}

.btn--black {
  @apply bg-transparent text-primary rounded-full outline outline-2 outline-darkGray px-8 py-4;
}

.btn--text {
  @apply bg-transparent text-blue-600 border-none;
}

/* Element */
.btn__icon {
  @apply mr-2;
}
</style>
