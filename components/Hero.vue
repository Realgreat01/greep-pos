<template>
  <div class="hero">
    <Header />
    <UContainer class="flex flex-col justify-between lg:min-h-[600px]">
      <div
        class="mx-auto mt-16 flex w-fit flex-col items-center justify-center text-white lg:mt-[120px]"
      >
        <h1 class="text-center font-jakarta text-4xl font-bold lg:text-7xl">
          Spend Smarter <br />
          With Stablecoins
        </h1>

        <h2 class="mb-8 mt-5 text-center text-sm lg:text-base">
          Empowering the African diaspora and local merchants <br />
          with seamless, affordable stablecoin payments.
        </h2>

        <UButton label="Get Started" class="px-8" />
      </div>
      <div
        class="mb-auto flex w-full flex-col items-center justify-center lg:flex-row lg:items-end lg:justify-between"
      >
        <img
          src="/images/hero/hero-left.png"
          alt=""
          class="z-10 hidden h-fit w-[373px] lg:block"
        />
        <img
          src="/images/hero/hero-center.png"
          alt=""
          class="z-0 mx-auto h-fit w-[640px] transform lg:absolute lg:left-1/2 lg:right-1/2 lg:-translate-x-1/2"
        />
        <img
          src="/images/hero/hero-right.png"
          alt=""
          class="z-10 hidden h-fit w-[373px] lg:block"
        />
      </div>
    </UContainer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.hero {
  background-image: url("/hero-bg.png");
  background-color: #012d16;
  background-position: center;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
