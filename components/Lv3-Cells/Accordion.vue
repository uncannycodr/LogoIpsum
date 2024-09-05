<template>
  <div :style="{ width: width }">
    <div class="divide-y divide-darkGray">
      <div v-for="(item, index) in items" :key="index" class="group">
        <div :class="headerClasses" @click="toggleAccordion(index)">
          <!-- Conditionally render Start Icon based on variant -->
          <div v-if="hasStartIcon">
            <component :is="item.icon" class="h-12 w-12 text-primary mr-10" />
          </div>

          <!-- Title -->
          <LiText tag="h1" color="primary" size="lg" class="flex-1">
            {{ item.title }}
          </LiText>

          <!-- Conditional rendering for Plus/Minus or Chevron Icon based on variant -->
          <div v-if="variant === 'icon'" class="text-primary">
            <component
              :is="isOpen(index) ? iconMinus : iconPlus"
              class="block h-6 w-6 transition-all duration-300"
            />
          </div>
          <div
            v-else-if="variant === 'chevron'"
            class="text-primary transition-transform duration-300"
          >
            <component
              :is="isOpen(index) ? iconChevUp : iconChevron"
              class="h-6 w-6 ml-6"
            />
          </div>
        </div>

        <!-- Content with transition effect -->
        <transition name="accordion">
          <LiText
            tag="p"
            color="gray"
            size="base"
            class="pb-4"
            v-if="isOpen(index)"
          >
            {{ item.content }}</LiText
          >
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconChevronDown,
  IconChevronUp,
  IconMinus,
  IconPlus,
} from "@tabler/icons-vue";
import { computed, defineProps, ref } from "vue";

// Define props for the component
interface Props {
  items: Array<{ title: string; content: string; icon?: any }>;
  variant?: "icon" | "chevron" | "simple"; // Different variants
  width?: string; // New width prop
}

const props = defineProps<Props>();

const openIndex = ref(-1);

// Determine if the accordion item is open
const isOpen = (index: number) => openIndex.value === index;

// Toggle the accordion item
const toggleAccordion = (index: number) => {
  openIndex.value = isOpen(index) ? -1 : index;
};

// Determine if start icon should be displayed based on the variant
const hasStartIcon = computed(() => props.variant !== "simple");

// Dynamically compute header classes based on variant prop
const headerClasses = computed(() => [
  "flex cursor-pointer list-none items-center justify-between py-4 text-lg font-medium text-primary", // Base classes
  props.variant === "icon" ? "with-icons" : "", // Add class for icon variant
  props.variant === "chevron" ? "with-chevron" : "", // Add class for chevron variant
]);

// Default icons
const iconPlus = IconPlus;
const iconMinus = IconMinus;
const iconChevron = IconChevronDown;
const iconChevUp = IconChevronUp;
</script>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
  overflow: hidden;
}
.accordion-enter-to,
.accordion-leave-from {
  max-height: 1000px; /* A large enough max-height to accommodate content */
  overflow: hidden;
}

.rotate-180 {
  transform: rotate(180deg);
}

/* Additional styles for variants */
</style>
