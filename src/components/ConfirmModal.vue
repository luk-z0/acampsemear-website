<template>
  <div v-if="modelValue" tabindex="-1"
    class="flex fixed inset-0 bg-black bg-opacity-50 z-50 justify-center items-center w-full md:inset-0 h-full max-h-full max-w-full">
    <div class="relative p-4 w-full max-w-md max-h-full">
      <div class="relative bg-mossgreen rounded-lg shadow-sm dark:bg-olive-black">
        <button type="button" @click="$emit('update:modelValue', false)"
          class="absolute top-3 end-2.5 text-olive-black dark:text-light-khaki bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          data-modal-hide="popup-modal">
          <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
          </svg>
          <span class="sr-only">Close modal</span>
        </button>
        <div class="p-4 md:p-5 text-center">
          <svg class="mx-auto mb-4 text-light-khaki w-12 h-12" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
          <h3 class="mb-5 text-lg font-medium text-olive-black dark:text-halloween-orange">
            {{ message }}
          </h3>
          <button @click="confirm" data-modal-hide="popup-modal" type="button"
            class="text-white bg-halloween-orange hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-100 dark:focus:ring-orange-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center">
            {{ confirmText }}
          </button>
          <button @click="$emit('update:modelValue', false)" data-modal-hide="popup-modal" type="button"
            class="py-2.5 px-5 ms-3 text-light-khaki text-sm font-medium focus:outline-none bg-olive-black rounded-lg border border-mossgreen hover:bg-[#2a371c] hover:text-white focus:z-10 focus:ring-4 focus:ring-light-khaki dark:focus:ring-[#4a5c33] dark:bg-[#1b2112] dark:text-light-khaki dark:border-[#4f6533] dark:hover:text-white dark:hover:bg-[#3c4f26]">
            {{ cancelText }}
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const emit = defineEmits(["confirm", "update:modelValue"]);

defineProps({
  modelValue: Boolean,
  cancelText: {
    type: String,
    required: true,
  },
  confirmText: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

function confirm() {
  emit("confirm");
  emit("update:modelValue", false);
}
</script>
