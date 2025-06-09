<template>
 <div v-show="loading.isLoading" class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
  <div class="w-16 h-16 border-4 bg-halloween-orange border-olive-black rounded-full animate-spin animate-infinite animate-duration-[1500ms] animate-delay-100">
   <img :src="acampicon"/>
  </div>
 </div>
</template>

<script setup>
import { useLoadingStore } from '../store/loading/loading'
import acampicon from "@/assets/image/acamp-icon.png";
const loading = useLoadingStore();
</script>