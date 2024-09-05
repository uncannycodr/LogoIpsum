<template>
  <div class="footer__container">
    <footer class="footer">
      <div class="footer__logo">
        <NuxtImg
          src="/images/brandLogo.png"
          alt="brandLogo"
          class="footer__logo-image"
        />
      </div>

      <div class="footer__upper">
        <div class="footer__info">
          <div class="footer__address">
            <LiText tag="p" color="primary" size="base" weight="semibold"
              >Address:</LiText
            >
            <LiText tag="p" color="gray" size="base"
              >Level 1, 12 Sample St, Sydney NSW 2000</LiText
            >
          </div>
          <div class="footer__contact">
            <LiText tag="p" color="primary" size="base" weight="semibold"
              >Contact:</LiText
            >
            <div class="footer__contact-info">
              <LiText
                tag="a"
                color="gray"
                size="base"
                class="underline decoration-gray decoration-1 underline-offset-4"
                >1800 123 4567
              </LiText>
              <LiText
                tag="a"
                color="gray"
                size="base"
                class="underline decoration-gray decoration-1 underline-offset-4"
              >
                info@example.io</LiText
              >
            </div>
          </div>
        </div>

        <div class="footer__links">
          <div class="footer__menu">
            <LiMenu variant="footer">
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">About Me</NuxtLink>
              </LiText>
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">My Works</NuxtLink>
              </LiText>
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">Reviews</NuxtLink>
              </LiText>
            </LiMenu>
            <LiMenu variant="footer">
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">Blogs</NuxtLink>
              </LiText>
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">Experience</NuxtLink>
              </LiText>
              <LiText tag="li" color="primary" size="base" class="list-none">
                <NuxtLink to="/about">Contact</NuxtLink>
              </LiText>
            </LiMenu>
          </div>
          <div class="footer__social">
            <IconBrandFacebookFilled class="w-6 h-6 text-primary" />
            <IconBrandInstagram class="w-6 h-6 text-primary" />
            <IconBrandTwitterFilled class="w-6 h-6 text-primary" />
            <IconBrandLinkedin class="w-6 h-6 text-primary" />
          </div>
        </div>
      </div>

      <div class="footer__lower">
        <div class="footer__copyright">
          <LiText tag="p" color="gray" size="xs">
            © 2023 LOGOIPSUM. All rights reserved.
          </LiText>
        </div>
        <div class="footer__terms">
          <div class="footer__terms-info">
            <IconSparkles class="w-4 h-4 text-blue-500" />
            <LiText tag="p" color="gray" size="xs"> Privacy Policy </LiText>
          </div>
          <div class="footer__terms-info">
            <IconSparkles class="w-4 h-4 text-blue-500" />
            <LiText tag="p" color="gray" size="xs"> Terms of Service </LiText>
          </div>
          <div class="footer__terms-info">
            <IconSparkles class="w-4 h-4 text-blue-500" />
            <LiText tag="p" color="gray" size="xs"> Cookies Settings </LiText>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
  IconSparkles,
} from "@tabler/icons-vue";
</script>

<style scoped>
.footer__container {
  @apply bg-card-bg pb-8 pt-14;
}
.footer {
  @apply max-w-[1296px] mx-auto;
}

.footer__logo {
  @apply w-52  h-10;
}
.footer__upper {
  @apply flex  flex-row justify-between mt-10 border-b-2 border-gray pb-14;
}
.footer__info {
  @apply flex flex-col gap-8;
}
.footer__address {
  @apply flex flex-col gap-2.5;
}
.footer__contact {
  @apply flex flex-col gap-2;
}
.footer__contact-info {
  @apply flex flex-col gap-0.5;
}
.footer__links {
  @apply flex flex-col gap-8;
}
.footer__menu {
  @apply flex flex-row gap-12;
}
.footer__social {
  @apply flex flex-row gap-4;
}
.footer__lower {
  @apply flex flex-row justify-between mt-10;
}
.footer__terms {
  @apply flex flex-row gap-4;
}
.footer__terms-info {
  @apply flex flex-row gap-1;
}
</style>
