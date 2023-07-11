<template>
  <div class="relative">
    <div class="relative">
      <div class="opacity-25 absolute transkate-x-full w-full min-h-full bg-mossgreen"></div>
      <div class="absolute bg-light-khaki rounded-r-[380px] md:w-2/5 h-full drop-shadow-md hover:drop-shadow-2xl duration-200">
          <div class="my-8 mx-4 md:my-16 md:mx-8">
            <h3 class="text-7xl font-normal	text-left font-pathway">
                MARCANDO MOMENTOS,<br>VIVENDO AVENTURAS.</h3>
            <p class="font-normal my-2 text-left font-pathway text-lg">
                O acampamento da Igreja Batista Semear com Cristo está cada dia mais aprimorado,<br>
                buscando trazer a cada temporada momentos inesqueciveis.
              </p>
          </div>
      </div>
      <img :src="acampbackground" class="filter saturate-120 w-full h-auto"/>
    </div>
  </div>
  <div class="relative w-2/4 min-h-full">
    <div class="">
      <div class="opacity-25 absolute w-2/4 min-h-full bg-halloween-orange"></div></div>
    <img :src="teamimage" alt="Imagem Reativa" class="w-full h-auto -z-10" />
  </div>
</template>

<script setup>
import acampbackground from "./../assets/image/img-background-header-acamp.png";
import teamimage from "./../assets/image/mvp-image.jpg";
</script>


<style></style>