<template>
  <header class="header">
    <nav class="header__nav">
      <div class="header__logo">
        <NuxtImg
          src="/images/brandLogo.png"
          alt="brandLogo"
          class="header__logo-image"
        />
      </div>
      <div class="header__menu">
        <LiMenu variant="header">
          <LiText
            tag="li"
            color="gray"
            size="sm"
            weight="semibold"
            class="list-none"
          >
            <NuxtLink to="/">Home</NuxtLink>
          </LiText>

          <LiText
            tag="li"
            color="gray"
            size="sm"
            weight="semibold"
            class="list-none"
          >
            <NuxtLink to="about">About Me</NuxtLink>
          </LiText>
          <LiText
            tag="li"
            color="gray"
            size="sm"
            weight="semibold"
            class="list-none"
          >
            <NuxtLink to="process">Process</NuxtLink>
          </LiText>
          <LiText
            tag="li"
            color="gray"
            size="sm"
            weight="semibold"
            class="list-none"
          >
            <NuxtLink to="work">My Work</NuxtLink>
          </LiText>
        </LiMenu>
      </div>
      <div class="header__cta">
        <LiButton variant="header">
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
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { IconPointFilled } from "@tabler/icons-vue";
</script>

<style scoped>
.header {
  @apply max-w-[1296px] mx-auto  mt-6;
}

.header__nav {
  @apply flex flex-row justify-between;
}
.header__logo {
  @apply w-52  h-10;
}
.router-link-exact-active {
  @apply text-primary bg-darkGray rounded-full;
}
</style>
