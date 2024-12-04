<template>
  <UContainer
    class="flex flex-col items-center justify-center gap-6 pb-20 pt-10 text-center text-white"
  >
    <h1 class="text-lg font-semibold lg:text-xl">Why Choose Us?</h1>
    <h1 class="text-3xl font-bold lg:text-[40px]">Why Choose Greep POS</h1>
    <p class="text-sm lg:w-3/5 lg:text-xl">
      In just few easy step, you are all set to manage your business finances.
      Manage all expenses with Greep in one place.
    </p>
    <div class="mx-auto mt-10 flex w-[100%] overflow-x-auto p-4 lg:w-[80%]">
      <div
        class="relative mx-auto flex flex-col items-center justify-center gap-6"
        v-for="(item, index) in whyChooseGreep"
      >
        <div class="relative">
          <UCard
            color="primary"
            :ui="{
              body: {
                padding: 'px-0 py-0 sm:p-0',
              },
            }"
            class="relative h-[200px] w-[200px] overflow-hidden bg-gray-300 pl-10 pt-10"
          >
            <img :src="item.image" alt="" :class="item.imageClass" class="" />
          </UCard>
          <UButton
            :label="item.index"
            :ui="{ rounded: 'rounded-full' }"
            class="absolute -left-4 -top-4 flex h-10 w-10 items-center justify-center border-4 border-black text-lg"
          />
        </div>
        <h2
          class="w-[240px] text-center text-sm font-medium text-white lg:w-[280px] lg:text-base"
          v-html="item.text"
        ></h2>
      </div>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
const whyChooseGreep = ref([
  {
    index: "1",
    imageClass: "h-[168px] w-full",
    image: "/images/why-choose-greep/fast.png",
    text: "Fast and Reliable Payments: <br/> Instant transactions, no waiting.",
  },
  {
    index: "2",
    imageClass: "h-[168px] pr-5",
    image: "/images/why-choose-greep/expenses.png",
    text: "Low Fees: Affordable for both customers and merchants.",
  },
  {
    index: "3",
    imageClass: "h-[168px]  w-full",
    image: "/images/why-choose-greep/access.png",
    text: "Inclusive Access: Works with <br/> mobile wallets—no banks required.",
  },
]);
</script>

<style scoped></style>
