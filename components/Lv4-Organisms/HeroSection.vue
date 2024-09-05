<template>
  <div class="hero-section__container">
    <div class="hero-section">
      <div class="hero-section__content">
        <div class="hero-section__tags">
          <LiTag variant="lg">
            <LiText tag="p" color="primary" size="xs"
              >Interaction Design
            </LiText>
          </LiTag>
          <LiTag variant="lg">
            <LiText tag="p" color="primary" size="xs">
              Branding & Identity
            </LiText>
          </LiTag>
          <LiTag variant="lg">
            <LiText tag="p" color="primary" size="xs"> User Research </LiText>
          </LiTag>
        </div>
        <LiText tag="h1" color="primary" size="6xl">
          Creating Delightful & Engaging Experiences
        </LiText>
        <LiText tag="p" color="gray" size="base">
          With over 10 years of experience in UI/UX design, I specialize in
          creating intuitive, user-friendly digital experiences for a wide range
          of clients and industries.✌
        </LiText>
        <div>
          <LiButton variant="white">
            <LiText tag="p" color="secondary" size="sm"> Work with me </LiText>
          </LiButton>
        </div>
      </div>

      <div class="hero-section__image">
        <NuxtImg src="/images/hero.png" alt="hero" class="hero-section__img" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero-section__container {
  @apply bg-card-bg max-w-[1880px] mx-auto  mt-6;
}
.hero-section {
  @apply flex flex-row justify-center gap-20 items-center max-w-[1296px] mx-auto pt-36 pb-20;
}

.hero-section__content {
  @apply flex flex-col gap-8 w-[753px];
}

.hero-section__image {
  @apply max-w-[526px];
}

.hero-section__tags {
  @apply flex flex-row gap-4 max-w-[80%];
}
</style>
