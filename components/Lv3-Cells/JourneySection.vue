<template>
  <div class="journey-section__container">
    <div class="journey-section">
      <div class="journey-section__image">
        <NuxtImg
          src="/images/journey.png"
          alt="hero"
          class="journey-section__img"
        />
      </div>

      <div class="journey-section__content">
        <LiText tag="p" color="gray" size="base"
          >From the early days of tinkering with code to becoming a seasoned web
          developer. Every step has a testament to the power of persistence and
          learning. The digital world has evolved into a lifelong
          passion.</LiText
        >
        <div class="journey-section__info">
          <div class="journey-section__info-item">
            <LiText tag="p" color="primary" size="xl"
              >Fusion of Design & Functionality</LiText
            >
            <LiText tag="p" color="gray" size="base"
              >Highlighting the synergy between aesthetics and usability in your
              work.</LiText
            >
          </div>
          <div class="journey-section__info-item">
            <LiText tag="p" color="primary" size="xl"
              >Specialization or Area of Interest</LiText
            >
            <LiText tag="p" color="gray" size="base"
              >Mentioning a specific aspect of technology that fascinates you.
            </LiText>
          </div>
          <div class="journey-section__info-item">
            <LiText tag="p" color="primary" size="xl"
              >Passion for Web Development</LiText
            >
            <LiText tag="p" color="gray" size="base"
              >Discussing your enthusiasm for creating digital experiences.
            </LiText>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.journey-section__container {
  @apply bg-card-bg pt-20 pb-20;
}
.journey-section {
  @apply flex flex-row justify-between  items-center  gap-20   max-w-[1296px] mx-auto;
}

.journey-section__content {
  @apply flex flex-col gap-8 max-w-[50%];
}

.journey-section__info {
  @apply flex flex-col gap-6;
}

.journey-section__info-item {
  @apply flex flex-col gap-4 border-b-2 border-darkGray pb-6;
}
.journey-section__info-item:nth-child(3) {
  border-bottom: none; /* No border for the third item */
}
</style>
