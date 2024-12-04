<template>
  <div
    class="grid items-center justify-between gap-4 p-4 pb-0 text-white lg:flex lg:p-10"
  >
    <h1 class="text-xs text-gray-200 lg:text-base">
      &copy; &nbsp;{{ new Date().getFullYear() }} &nbsp; Greep. All rights
      reserved.
    </h1>

    <div class="flex gap-x-2">
      <UIcon v-for="link in socialLinks" v-bind="link" class="text-gray-200" />
    </div>
  </div>
</template>

<script setup lang="ts">
const socialLinks = ref([
  { link: "", name: "i-mdi-facebook" },
  { link: "", name: "i-hugeicons-instagram" },
  { link: "", name: "i-line-md-twitter-x-alt" },
  { link: "", name: "i-devicon-plain-linkedin" },
  { link: "", name: "i-ion-logo-youtube" },
]);
</script>

<style scoped></style>
