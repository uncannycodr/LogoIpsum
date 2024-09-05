<template>
  <div class="contact-me">
    <div class="contact-me__content">
      <div class="contact-me__header">
        <LiText tag="p" color="primary" size="6xl">Contact me</LiText>
        <div class="contact-me__socials">
          <div class="contact-me__social">
            <IconBrandX class="contact-me__icon" />
          </div>
          <div class="contact-me__social">
            <IconBrandFacebookFilled class="contact-me__icon" />
          </div>
          <div class="contact-me__social">
            <IconBrandYoutubeFilled class="contact-me__icon" />
          </div>
          <div class="contact-me__social">
            <IconBrandInstagram class="contact-me__icon" />
          </div>
        </div>
      </div>

      <div class="contact-me__info">
        <div class="contact-me__address">
          <LiText tag="p" color="primary" size="base">Address:</LiText>
          <LiText tag="p" color="gray" size="base"
            >Level 1, 12 Sample St, Sydney NSW 2000</LiText
          >
        </div>
        <div class="contact-me__email">
          <LiText tag="p" color="primary" size="base">Email:</LiText>
          <LiText
            tag="p"
            color="gray"
            size="base"
            class="underline decoration-gray decoration-1 underline-offset-4"
            >info@example.io</LiText
          >
        </div>
        <div class="contact-me__phone">
          <LiText tag="p" color="primary" size="base">Phone number:</LiText>
          <LiText
            tag="p"
            color="gray"
            size="base"
            class="underline decoration-gray decoration-1 underline-offset-4"
            >1800 123 4567</LiText
          >
        </div>
      </div>
    </div>

    <div class="contact-me__image">
      <NuxtImg src="/images/contact.png" alt="hero" class="hero-section__img" />
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandX,
  IconBrandYoutubeFilled,
} from "@tabler/icons-vue";
</script>

<style scoped>
.contact-me {
  @apply flex flex-row items-center max-w-[1296px] mx-auto mt-12;
}

.contact-me__content {
  @apply flex flex-col gap-12 w-[744px] mb-8;
}

.contact-me__header {
  @apply flex flex-row justify-between  border-b-2 border-darkGray pb-6;
}

.contact-me__socials {
  @apply flex flex-row gap-2 items-end;
}
.contact-me__social {
  @apply border-2 border-darkGray rounded-full p-2;
}
.contact-me__icon {
  @apply w-5 h-5 text-primary;
}

.contact-me__info {
  @apply flex flex-col gap-8;
}

.contact-me__address {
  @apply flex flex-col gap-2;
}

.contact-me__email {
  @apply flex flex-col gap-2;
}

.contact-me__phone {
  @apply flex flex-col gap-2;
}

.contact-me__image {
  @apply w-[424px];
}
</style>
