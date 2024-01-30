<template>
  <MainBar class="w-full top-0 z-50" />
  <div class="min-h-screen flex items-center justify-center relative sm:static">
    <img
      :src="bglogin"
      alt=""
      class="object-cover w-full h-full dim:h-screen md:h-screen"
    />
    <div
      class="flex w-1/2 h-1/2 dim:h-4/5 dim:w-11/12 lg:h-4/5 justify-center absolute bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg"
    >
      <div class="flex justify-center">
        <slot/>
      </div>
    </div>
  </div>
  <Footer />
</template>


<script setup>
import router from "../router";
import MainBar from "./../components/MainBar.vue";
import Footer from "./../components/Footer.vue";
import bglogin from "./../assets/image/bglogin.jpg";
</script>