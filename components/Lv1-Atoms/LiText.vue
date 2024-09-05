<script setup lang="ts">
import type { colors } from "~/assets/colors";

type TextColor = keyof typeof colors;
type TextLeading = "sm" | "md" | "lg" | "xl";
type Size =
  | "xs"
  | "sm"
  | "base"
  | "lg"
  | "xl"
  | "2xl"
  | "2rem"
  | "1.75rem"
  | "3xl"
  | "4xl"
  | "6xl"; // 14, 16, 18, 20, 24, 28, 2rem
type FluidSize = "xs" | "sm" | "base" | "lg" | "xl";

interface Props {
  tag:
    | "p"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "span"
    | "sup"
    | "sub"
    | "a"
    | "li";
  color: TextColor;
  leading?: TextLeading; // line height 18, 20, 28, 40
  size?: Size;
  weight?: keyof typeof fontWeightVariants;
  textClass?: HTMLElement["className"] | string;
  fluid?: FluidSize;
}

const props = defineProps<Props>();
const sizeVariants: Record<Size, string> = {
  xs: "text-xs", // 12px
  sm: "text-sm", // 14px
  base: "text-base", // 16px
  lg: "text-lg", // 18px
  xl: "text-xl", // 20px
  "2xl": "text-2xl", // 24px
  "3xl": "text-3xl", // 30px
  "1.75rem": "text-[1.75rem]", // 28px
  "2rem": "text-[2rem]", // 32px
  "4xl": "text-4xl", // 40px
  "6xl": "text-6xl", // 60px
};
const fluidVariants: Record<FluidSize, string> = {
  xs: "font-xs", // 16px - 18px
  sm: "font-sm", // 16px - 28px
  base: "font-base", // 18px - 28px
  lg: "font-lg", // 18px - 58px
  xl: "font-xl", // 16px - 20px
};
const colorVariants: Record<TextColor, string> = {
  primary: "text-primary",
  secondary: "text-secondary",
  gray: "text-gray",
};

const leadVariants: Record<TextLeading, string> = {
  sm: "leading-[1.125rem]",
  md: "leading-5",
  lg: "leading-7",
  xl: "leading-10",
};

const fontWeightVariants: Record<string, string> = {
  thin: "font-thin",
  extralight: "font-extralight",
  light: "font-light",
  normal: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
  extrabold: "font-extrabold",
  black: "font-black",
};

const classes = computed(() => [
  sizeVariants[props.size as Size],
  fluidVariants[props.fluid as FluidSize],
  colorVariants[props.color as TextColor],
  props.leading ? leadVariants[props.leading as TextLeading] : "",
  props.weight ? fontWeightVariants[props.weight] : "",
]);

// console.log(classes);
</script>

<template>
  <component :is="tag" :class="classes">
    <slot />
  </component>
</template>

<style scoped></style>
