<template>
  <div class="my-experience">
    <div class="my-experience__about">
      <div class="my-experience__text">
        <LiText
          tag="h1"
          color="primary"
          size="4xl"
          class="my-experience__heading"
        >
          My Experience
        </LiText>
        <LiText tag="p" color="gray" size="base" class="my-experience__para">
          I have gained valuable insights and expertise in Product Development.
          I have had the opportunity to work on a wide range of projects.
        </LiText>
      </div>
      <div class="my-experience__tags">
        <div class="my-experience__row1">
          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">Figma</LiText>
            </LiTag>
          </div>

          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">Framer</LiText>
            </LiTag>
          </div>

          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">InVision</LiText>
            </LiTag>
          </div>
        </div>

        <div class="my-experience__row2">
          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">Photoshop</LiText>
            </LiTag>
          </div>
          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">Illustrator</LiText>
            </LiTag>
          </div>

          <div class="my-experience__tag">
            <LiTag variant="md">
              <LiText tag="p" color="primary" size="base">Webflow</LiText>
            </LiTag>
          </div>
        </div>
      </div>
    </div>
    <div class="my-experience__timeline">
      <!-- Timeline Line 1 -->
      <div class="my-experience__line">
        <div class="my-experience__year">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            2021 - Present
          </LiText>
        </div>
        <div class="my-experience__expertise">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            Data Analysis
          </LiText>
        </div>
        <div class="my-experience__company">
          <LiText
            tag="h1"
            color="gray"
            size="base"
            class="my-experience__heading"
          >
            Oracle
          </LiText>
        </div>
      </div>
      <!-- Timeline Line 2 -->

      <div class="my-experience__line">
        <div class="my-experience__year">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            2016 - 2021
          </LiText>
        </div>
        <div class="my-experience__expertise">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
            >User Researcher</LiText
          >
        </div>
        <div class="my-experience__company">
          <LiText
            tag="h1"
            color="gray"
            size="base"
            class="my-experience__heading"
          >
            Microsoft
          </LiText>
        </div>
      </div>
      <!-- Timeline Line 3 -->

      <div class="my-experience__line">
        <div class="my-experience__year">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            2013 - 2016
          </LiText>
        </div>
        <div class="my-experience__expertise">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            UI/UX Design
          </LiText>
        </div>
        <div class="my-experience__company">
          <LiText
            tag="h1"
            color="gray"
            size="base"
            class="my-experience__heading"
          >
            SAP AG
          </LiText>
        </div>
      </div>

      <!-- Timeline Line 4 -->

      <div class="my-experience__line">
        <div class="my-experience__year">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            2011 - 2013
          </LiText>
        </div>
        <div class="my-experience__expertise">
          <LiText
            tag="h1"
            color="primary"
            size="lg"
            class="my-experience__heading"
          >
            Product Designer
          </LiText>
        </div>
        <div class="my-experience__company">
          <LiText
            tag="h1"
            color="gray"
            size="base"
            class="my-experience__heading"
          >
            Alibaba Group
          </LiText>
        </div>
      </div>
      <!-- Add more timeline lines as needed -->
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.my-experience {
  @apply flex flex-row  max-w-[1296px] mx-auto justify-between items-center pt-20 pb-20;
}

.my-experience__about {
  @apply flex flex-col gap-32 max-w-[35%];
}

.my-experience__text {
  @apply flex flex-col gap-8;
}

.my-experience__tags {
  @apply flex flex-col gap-4;
}

.my-experience__row1 {
  @apply flex flex-row gap-2;
}
.my-experience__row2 {
  @apply flex flex-row gap-2;
}

.my-experience__timeline {
  @apply flex flex-col gap-8 w-1/2;
}

.my-experience__line {
  @apply flex flex-row justify-between border-b  border-gray pb-4; /* Add bottom border */
}
</style>
