<template>
  <div class="flex">
    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-olive-black">
      <div class="h-screen px-20 py-16">
        <h3 class="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-left font-medium text-light-khaki">{{ title }}</h3>
        <hr class="my-6 border-halloween-orange">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup>

const props = defineProps({
  title: String
})


</script>