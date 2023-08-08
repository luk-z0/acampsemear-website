<template>
  <MainBar/>
  <div class="relative">
    <div class="relative">
      <div class="min-h-full w-full absolute opacity-50 bg-olive-black"></div>
      <!-- <div class="opacity-25 absolute translate-x-full w-full min-h-full bg-mossgreen"></div> -->
      <div class="absolute mx-32 h-full w-2/4">
        <div class="dim:-ml-20 dim:mt-10 transition hover:scale-125 animate-slide-down cursor-pointer">
          <div class="sm:my-16 sm:mx-8 xl:my-64 lx:mx-32 lg:my-32">
            <h3 class="sm:text-4xl md:text-7xl lg:text-6xl  font-normal text-left  text-[#AADE76] font-pathway">
              MARCANDO MOMENTOS,
              <br>
              VIVENDO AVENTURAS.
            </h3>
            <p class="dim:text-[8px] sm:text-xs sm:text-left text-[#D0E3BD] lg:text-2xl md:text-lg my-2 text-justify font-pathway">
              O acampamento da Igreja Batista Semear com Cristo está cada dia mais aprimorado, <br>
              buscando trazer a cada temporada momentos inesqueciveis.
            </p>
          </div>
        </div>
      </div>
      <img :src="acampbackground" class="w-full h-auto "/>
    </div>
  </div>
  <div class="flex flex-nowrap ">
    <div class="relative w-2/4 min-h-full">
      <div class="absolute z-20">
        <p class="text-[#ffff] items-center m-10 font-semibold font-pathway">TEXTO</p>
      </div>
      <div>
        <div>
          <div class="opacity-25 absolute w-2/4 min-h-full bg-halloween-orange"></div>
          <div class="opacity-25 absolute translate-x-full w-2/4 min-h-full bg-palatinate-blue"></div>
        </div>
          <img :src="teamimage" alt="Imagem Reativa" class="w-full h-auto -z-10" />
      </div>
    </div>
    <div class="relative w-2/4 min-h-full">
       <div class="bg-olive-black min-h-full">

       </div>
    </div>
  </div>
  <div class="bg-white min-h-full w-full">
    <p>a</p>
  </div>
  <div class="h-[1000px]">a</div>
</template>

<script setup>
import acampbackground from "./../assets/image/img-background-header-acamp.png";
import teamimage from "./../assets/image/mvp-image.jpg";
import MainBar from "./../components/MainBar.vue"
</script>


<style></style>