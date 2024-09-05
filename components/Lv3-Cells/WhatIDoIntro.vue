<template>
  <div class="what-i-do">
    <div class="what-i-do__heading">
      <LiText tag="h1" color="primary" size="4xl" class="client-review__text">
        What I do
      </LiText>
    </div>
    <div class="what-i-do__content">
      <LiText tag="p" color="gray" size="base" class="what-i-do__text">
        I specialize in crafting custom solutions that seamlessly blend
        innovation with functionality.
      </LiText>
      <LiButton variant="white">
        <LiText tag="p" color="secondary" size="sm"> Work with me </LiText>
      </LiButton>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.what-i-do {
  @apply flex flex-col gap-52 w-[30%];
}

.what-i-do__text {
  @apply mb-8;
}
</style>
