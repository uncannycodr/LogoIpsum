<template>
  <div class="contact-form__container">
    <div class="contact-form">
      <!-- Image Section -->
      <div class="contact-form__image">
        <NuxtImg
          src="/images/journey.png"
          alt="hero"
          class="hero-section__img"
        />
      </div>

      <!-- Content and Form Section -->
      <div class="contact-form__content">
        <!-- Contact Text -->
        <div class="contact-form__text">
          <LiText tag="p" color="primary" size="4xl" class="mb-4"
            >Contact With Me</LiText
          >
          <LiText tag="p" color="gray" size="base">
            Have a question or a project in mind? Feel free to reach out! I'm
            here to help turn your ideas into reality.
          </LiText>
        </div>

        <!-- Form Section -->
        <div class="contact-form__form">
          <!-- Input Fields in a Row -->
          <div class="contact-form__inputs">
            <input type="text" placeholder="Name" class="contact-form__input" />
            <input
              type="email"
              placeholder="Email"
              class="contact-form__input"
            />
          </div>

          <!-- Text Area -->
          <textarea
            placeholder="Message"
            class="contact-form__textarea"
          ></textarea>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.contact-form__container {
  @apply bg-card-bg pt-20 pb-20;
}

.contact-form {
  @apply flex items-center max-w-[1296px] mx-auto gap-10;
}

.contact-form__image {
  @apply w-[525px]; /* Set image width */
}

.contact-form__content {
  @apply w-[715px] flex flex-col gap-4; /* Set content width and use consistent gap */
}

.contact-form__text {
  @apply mb-6; /* Set margin bottom for text */
}

.contact-form__form {
  @apply flex flex-col gap-4; /* Use consistent gap */
}

.contact-form__inputs {
  @apply flex gap-4; /* Use consistent gap */
}

.contact-form__input,
.contact-form__textarea {
  @apply w-full p-2 bg-card-bg border-b-2 border-darkGray rounded-none outline-none;
  /* Use consistent styling */
}

.contact-form__input::placeholder,
.contact-form__textarea::placeholder {
  @apply text-gray; /* Placeholder color */
}

.contact-form__textarea {
  @apply h-[128px]; /* Fix height for textarea */
  resize: none; /* Prevent resizing */
}

/* Adjust placeholder vertical alignment */
.contact-form__input,
.contact-form__textarea {
  padding: 0.5rem; /* Adjust padding */
}
</style>
