<template>
  <div class="FAQ">
    <LiText tag="h1" color="primary" size="4xl" class="FAQ__text"
      >Most Asked Questions</LiText
    >

    <div class="FAQ__content">
      <Accordion
        :items="accordionItemsWithoutIcons"
        width="60%"
        variant="chevron"
      />
      <Accordion
        :items="accordionItemsWithoutIcons"
        width="60%"
        variant="chevron"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const accordionItemsWithoutIcons = [
  {
    title: "Which teams & businesses can use it?",
    content: "This is the sixth item accordion body 6",
  },
  {
    title:
      "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
    content: "This is the seventh item accordion body 7",
  },
  {
    title:
      "We are using LinkedIn Sales Navigator to find our clients, how is Tendrs different than that?",
    content: "This is the sixth item accordion body 6",
  },
  {
    title: "Is my personal info safe with Tendrs?",
    content: "This is the seventh item accordion body 7",
  },
  {
    title: "Which teams & businesses can use it?",
    content: "This is the sixth item accordion body 6",
  },
];
</script>

<style scoped>
.FAQ {
  @apply max-w-[1296px] mx-auto  mt-20 mb-14;
}

.FAQ__text {
  @apply mb-10;
}

.FAQ__content {
  @apply flex flex-row gap-20;
}
</style>
