<template>
  <div class="skills">
    <div class="skills__heading">
      <LiText tag="p" color="primary" size="lg" class="client-review__text">
        Hire me for
      </LiText>
    </div>

    <div class="skills__content">
      <div class="skills__list">
        <LiText tag="p" color="primary" size="2rem">Web Development</LiText>
        <LiText tag="p" color="primary" size="2rem">UI/UX Design</LiText>
        <LiText tag="p" color="primary" size="2rem"
          >Wireframing & Prototyping</LiText
        >
        <LiText tag="p" color="primary" size="2rem"
          >Information Architecture</LiText
        >
        <LiText tag="p" color="primary" size="2rem"
          >Accessibility Design</LiText
        >
        <LiText tag="p" color="primary" size="2rem">User Research</LiText>
      </div>

      <div class="skills__image">
        <NuxtImg src="/images/skills.png" alt="skills" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.skills {
  @apply max-w-[1300px] mx-auto flex flex-col mt-20 gap-8;
}

.skills__content {
  @apply flex flex-row justify-between;
}

.skills__image {
  @apply max-w-[50%];
}

.skills__list {
  @apply flex flex-col gap-8;
}
</style>
