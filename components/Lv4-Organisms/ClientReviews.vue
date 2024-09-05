<template>
  <div class="client-reviews__container">
    <div class="client-reviews">
      <LiText
        tag="h1"
        color="primary"
        size="4xl"
        class="client-review__heading"
      >
        What My Clients Say!!</LiText
      >

      <!-- Client Reviews -->
      <div class="client-review__container">
        <ClientReview
          v-for="(review, index) in reviews"
          :key="index"
          :imageSrc="review.imageSrc"
          :text="review.text"
          :authorImageSrc="review.authorImageSrc"
          :authorName="review.authorName"
          :authorPosition="review.authorPosition"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Define the type for review items
interface ReviewItem {
  imageSrc: string;
  text: string;
  authorImageSrc: string;
  authorName: string;
  authorPosition: string;
}

// Array of review items
const reviews: ReviewItem[] = [
  {
    imageSrc: "/images/luminous.png",
    text: "Transformed our mobile app with incredible UI/UX design, making it user-friendly and loved by customers. Exceptional collaboration and timely delivery.",
    authorImageSrc: "/images/devone-lane.png",
    authorName: "Devone Lane",
    authorPosition: "Delivery Head",
  },
  {
    imageSrc: "/images/segment.png",
    text: "Impressed by the efficient website redesign improving navigation and user engagement. Positive user feedback on ease of use and modern look.",
    authorImageSrc: "/images/kathryn.png",
    authorName: "Kathryn Murphy",
    authorPosition: "Product Manager",
  },
  {
    imageSrc: "/images/command.png",
    text: "Provided innovative UI/UX solutions for our e-commerce platform, enhancing user experience and boosting conversion rates. Remarkable listening and translation of our needs.",
    authorImageSrc: "/images/leslie.png",
    authorName: "Leslie ALexander",
    authorPosition: "Chief Legal Officer",
  },
  // Add more review items as needed
];
</script>

<style scoped>
.client-reviews__container {
  @apply bg-card-bg pt-20 pb-20;
}
.client-reviews {
  @apply flex flex-col justify-center max-w-[1296px] mx-auto self-stretch;
}

.client-review__heading {
  @apply mb-6;
}
.client-review__container {
  @apply flex flex-row justify-center gap-8 self-stretch;
}
</style>
