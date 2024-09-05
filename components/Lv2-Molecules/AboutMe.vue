<template>
  <div class="about-me">
    <div class="about-me__content">
      <div class="about-me__heading">
        <LiText tag="h1" color="primary" size="6xl" class="client-review__text">
          About me
        </LiText>
      </div>
      <div class="about-me__paragraph">
        <LiText tag="p" color="gray" size="base" class="about-me__text">
          My journey in the world of technology is fueled by a relentless
          curiosity and a commitment to pushing the boundaries of what's
          possible. I see each project as a narrative waiting to be told.
        </LiText>
        <div class="about-me__btn">
          <LiText
            tag="a"
            color="gray"
            size="base"
            class="underline decoration-gray decoration-1"
          >
            Let's Collaborate
          </LiText>
          <IconArrowUpRight class="w-6 h-6 text-gray" />
        </div>
      </div>
    </div>

    <div class="about-me__image">
      <NuxtImg src="/images/aboutMe.png" alt="hero" class="about-me__img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowUpRight } from "@tabler/icons-vue";
</script>

<style scoped>
.about-me {
  @apply max-w-[1300px] mx-auto flex flex-col gap-10 mt-20;
}

.about-me__content {
  @apply flex flex-row justify-between;
}

.about-me__paragraph {
  @apply max-w-[50%] flex flex-col gap-6;
}
.about-me__btn {
  @apply flex flex-row items-center;
}
</style>
