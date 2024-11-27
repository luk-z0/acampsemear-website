<template>
  <MainBar />
  <div class="flex flex-col items-center justify-center backgroundImage min-h-screen">
      <div
        class="m-10 p-4 justify-center bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg">
        <slot />
      </div>
      <!-- <img :src="bglogin" alt="" class="object-cover relative top-0 bottom-0 min-h-screen -z-50" /> -->
    </div>
    <Footer />
</template>


<script setup>
import MainBar from "./../components/MainBar.vue";
import Footer from "./../components/Footer.vue";
</script>

<style scoped>
.backgroundImage{
  background: url("@/assets/image/bglogin.jpg") no-repeat center center
    fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

</style>