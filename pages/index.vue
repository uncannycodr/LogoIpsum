<script setup lang="ts">
// import { IconArrowBarToDown, IconPointFilled } from "@tabler/icons-vue";

// const accordionItemsWithoutIcons = [
//   {
//     title: "Which teams & businesses can use it?",
//     content: "This is the sixth item accordion body 6",
//   },
//   {
//     title:
//       "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
//     content: "This is the seventh item accordion body 7",
//   },
//   {
//     title:
//       "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
//     content: "This is the sixth item accordion body 6",
//   },
//   {
//     title: "Is my personal info safe with Tendrs?",
//     content: "This is the seventh item accordion body 7",
//   },
//   {
//     title: "Which teams & businesses can use it?",
//     content: "This is the sixth item accordion body 6",
//   },
// ];
</script>

<template>
  <div class="container">
    <HeroSection />
    <ContentSection />

    <WhatIDoSection />
    <ClientNCompanies />
    <ClientReviews />
    <CTA />

    <!-- <LiButton variant="header">
      <template #icon>
        <IconPointFilled class="w-4 h-4 text-dot" />
      </template>
      <LiText
        tag="li"
        color="primary"
        size="sm"
        weight="medium"
        class="list-none ml-1"
      >
        Contact me
      </LiText>
    </LiButton>

    <LiButton variant="black">
      <template #icon>
        <IconArrowBarToDown class="w-6 h-6 text-primary" />
      </template>
      <LiText
        tag="li"
        color="primary"
        size="sm"
        weight="medium"
        class="list-none ml-2"
      >
        Download Resume
      </LiText>
    </LiButton>

    <LiButton variant="white">
      <LiText tag="p" color="secondary" size="sm"> Work with me </LiText>
    </LiButton>

    <LiTag variant="lg">
      <LiText tag="p" color="primary" size="base">Interaction Design </LiText>
    </LiTag>
    <LiTag variant="md">
      <LiText tag="p" color="primary" size="base">Photoshop</LiText>
    </LiTag>
    <LiTag variant="sm">
      <LiText tag="p" color="primary" size="base">2024</LiText>
    </LiTag> -->

    <!-- <Accordion :items="accordionItemsWithoutIcons" variant="chevron" /> -->
  </div>
</template>

<style scoped>
.container {
  @apply max-w-[1920px] mx-auto;
}
</style>
