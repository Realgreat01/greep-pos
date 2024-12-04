<template>
  <div class="border-b border-[#FFFFFF29]">
    <UContainer class="flex h-[100px] items-center justify-between">
      <img src="/greep.svg" alt="" class="h-10" />

      <div class="hidden lg:block">
        <UButton
          v-for="tab in headerTabs"
          v-bind="tab"
          variant="link"
          class="w-32 justify-center text-white"
        />
      </div>

      <UButton label="Contact Us" class="hidden px-10 lg:block" />
      <UDropdown
        class="block lg:hidden"
        :items="items"
        :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }"
      >
        <UIcon
          name="i-heroicons-queue-list-16-solid"
          class="h-6 w-6 text-white"
        />

        <template #item="{ item }">
          <span class="truncate">{{ item.label }}</span>

          <UIcon
            :name="item.icon"
            class="ms-auto h-4 w-4 flex-shrink-0 text-gray-400 dark:text-gray-500"
          />
        </template>
      </UDropdown>
    </UContainer>
  </div>
</template>

<script setup lang="ts">
const headerTabs = ref([
  { label: "Home", to: "", icon: "" },
  { label: "Why Us", to: "", icon: "" },
  { label: "How It Works", to: "", icon: "" },
]);

const items = ref([
  [
    { label: "Home", to: "", icon: "" },
    { label: "Why Us", to: "", icon: "" },
    { label: "How It Works", to: "", icon: "" },
  ],
  [
    {
      label: "Contact Us",
      icon: "",
    },
  ],
]);
</script>

<style scoped></style>
