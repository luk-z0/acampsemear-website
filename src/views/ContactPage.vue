<template>
  <MainBar />
  <div class="min-h-screen flex items-center justify-center">
    <img :src="bglogin" alt="" class="object-cover w-full h-full" />
    <!-- <div class="absolute inset-0 bg-black opacity-50"></div> -->
    <div
      class="flex w-1/2 min-h-full justify-center absolute bg-gray-100 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border border-gray-100 shadow-lg">
      <div class="flex justify-center">
        <div class="flex absolute min-h-full flex-1 flex-col justify-center  items-center lg:px-8">
          <div class="flex flex-col w-auto h-auto">
            <h2 class="text-center text-2xl font-bold leading-9 tracking-tight text-olive-black font-pathway">
              Fale Conosco
            </h2>
            <h5 class="text-olive-black font-semibold text-center font-pathway hyphens-auto leading-tight text-lg">Estamos
              Aqui para Ajudar!</h5>
          </div>
          <div class="flex justify-center items-center w-1/2 mt-10">
              <div class="mb-10">
                <span class="flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                    <svg class="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                    </svg>
                </span>
                <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-white">Flowbite Application UI v2.0.0 <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300 ms-3">Latest</span></h3>
                <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 13th, 2022</time>
                <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
              </div>        
          </div>
      </div>
    </div>
  </div>
</div>
<Footer /></template>

<script setup>
import MainBar from "./../components/MainBar.vue";
import Footer from "./../components/Footer.vue";
import bglogin from "./../assets/image/bglogin.jpg";
</script>

<style></style>
