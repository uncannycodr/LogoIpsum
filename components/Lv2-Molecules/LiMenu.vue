<script setup lang="ts">
interface Props {
  variant?: "header" | "footer"; // Different variants for header and footer
  vertical?: boolean; // Whether the menu should be vertical
}

const props = defineProps<Props>();

const menuClasses = computed(() => [
  "menu", // Block class
  props.variant ? `menu--${props.variant}` : "", // Modifier for variant
  props.vertical ? "menu--vertical" : "", // Modifier for vertical layout
]);
</script>
<template>
  <ul :class="menuClasses">
    <slot />
  </ul>
</template>
<style scoped>
.menu {
  @apply flex gap-4; /* Apply some common flex styles */
}

.menu--header {
  @apply flex-row gap-14 px-10 py-4 justify-center bg-transparent text-primary rounded-full outline outline-2 outline-darkGray inline-flex items-center cursor-pointer transition-colors duration-300;
}

.menu--footer {
  @apply flex flex-col gap-4;
}

.menu--vertical {
  @apply flex-col; /* Additional styles for vertical layout if needed */
}
</style>
