<template>
  <UContainer class="bg-white px-4 py-10 lg:px-[72px] lg:py-[120px]">
    <h1 class="text-xl font-semibold text-[#009260]">How It Works</h1>
    <div class="mb-[80px] grid items-center justify-between lg:flex">
      <h2 class="w-80 text-[40px] font-bold">
        Secure, Ease, <br />
        Transform
      </h2>
      <p class="font-jakarta text-neutral lg:max-w-[40%]">
        Our POS system helps your business in managing expenses. These are some
        of the reasons why you should use Greep POS in your business finances.
      </p>
    </div>

    <div
      class="grid overflow-hidden rounded-2xl border-y border-gray-800 lg:grid-cols-3 lg:border"
    >
      <div
        class="grid h-80 overflow-hidden rounded-none border-x ring-0 lg:col-span-2 lg:flex lg:grid-cols-2"
      >
        <div class="p-6 lg:w-[420px] lg:pl-8 lg:pt-[52px]">
          <h2 class="font-semibold lg:text-xl">Do a lot with Greep POS</h2>
          <p class="text-sm text-neutral lg:text-base">
            Easily make payments in any of our outlets with just a simple tap
            using our POS system.
          </p>
        </div>
        <img
          src="/images/how/middle-grid.png"
          alt=""
          class="relative bottom-0 mx-auto mb-0 mt-10 flex h-[85%] w-[50%] self-end lg:w-max"
        />
      </div>

      <div
        class="flex h-80 flex-col items-center justify-center rounded-none text-center ring-0 lg:ring-1 lg:ring-gray-800"
        :class="[feature.class]"
        v-for="feature in features"
      >
        <img :src="feature.image" alt="" class="w-[80px] lg:w-[133px]" />
        <h2 class="mb-4 mt-6 text-xl font-semibold text-[#040815] lg:text-2xl">
          {{ feature.title }}
        </h2>
        <p class="w-4/5 text-sm text-neutral lg:text-base">
          {{ feature.description }}
        </p>
      </div>
      <div
        class="flex h-80 items-center justify-center border-x lg:border-l lg:border-t lg:border-gray-800"
      >
        <img src="/images/how/greep-pos.svg" alt="" class="w-[80%]" />
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const features = ref([
  {
    image: "/images/how/secure-transactions.svg",
    title: "Secure Transactions",
    class: "border lg:border-l lg:border-gray-800",
    divide: "divide-y divide-gray-800 dark:divide-gray-800",
    description:
      "Enjoy a fast, low-cost, and secure payments system with just a click.",
  },
  {
    image: "/images/how/pay.svg",
    title: "Pay with Ease",
    class: "border-x lg:border-t lg:border-gray-800",
    description:
      "Use stablecoins like USDT or USDC at local stores via our POS system.",
  },
  {
    image: "/images/how/business.svg",
    class: "border lg:border-t  lg:border-l  lg:border-gray-800",
    title: "Boost Local Business",
    description: "Help build stronger communities with modern payment options.",
  },
]);
</script>

<style scoped></style>
