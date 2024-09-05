<template>
  <div class="resume-cta">
    <div class="resume-cta__images">
      <NuxtImg
        src="/images/resume1.png"
        alt="hero"
        class="w-[309px] h-[380px]"
      />
      <NuxtImg
        src="/images/resume2.png"
        alt="hero"
        class="w-[309px] h-[380px]"
      />
      <NuxtImg
        src="/images/resume3.png"
        alt="hero"
        class="w-[309px] h-[380px]"
      />
      <NuxtImg
        src="/images/resume4.png"
        alt="hero"
        class="w-[309px] h-[380px]"
      />
    </div>

    <div class="resume-cta__content">
      <div class="resume-cta__heading">
        <LiText tag="p" color="primary" size="2xl">
          A Chronicle of Passion, Persistence, and Artistry
        </LiText>
      </div>

      <div class="resume-cta__sub-content">
        <LiText
          tag="p"
          color="gray"
          size="base"
          class="resume-cta__text leading-7"
        >
          A seasoned technology enthusiast with a passion for crafting seamless
          digital experiences. As a versatile web developer and software
          engineer, I specialize in bringing ideas to life through code and
          creativity.
        </LiText>
        <div class="resume-cta__btn">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { IconArrowBarToDown } from "@tabler/icons-vue";
</script>

<style scoped>
.resume-cta {
  @apply max-w-[70%] mx-auto flex flex-col gap-8;
}
.resume-cta__images {
  @apply flex flex-row gap-7 mt-8;
}

.resume-cta__content {
  @apply flex flex-col gap-5 max-w-[80%];
}

.resume-cta__sub-content {
  @apply flex flex-row gap-32;
}

.resume-cta__text {
  @apply max-w-[67%];
}

.resume-cta__btn {
  @apply max-w-[30%];
}
</style>
