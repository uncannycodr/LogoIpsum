<template>
  <div class="cta">
    <LiText tag="p" color="primary" size="2xl">
      Whether it's a stunning website, a custom software solution, or a seamless
      mobile app, I'm here to help.
    </LiText>
    <LiText tag="h1" color="primary" size="4xl" class="cta__heading">
      Ready?
      <!-- Underlined text button -->
      <button class="cta__button">Let's get started</button>
    </LiText>
  </div>
</template>
<style scoped>
.cta {
  @apply flex flex-col max-w-[746px] ml-[300px] gap-6 pt-24 pb-24;
}
.cta__heading {
  @apply inline;
}

.cta__button {
  @apply text-primary underline cursor-pointer ml-1 bg-none border-none p-0; /* Adjust styles as needed */
}
</style>
