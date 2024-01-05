<template>
  <MainBar />
  <div class="relative">
    <div class="relative">
      <div class="min-h-full w-full absolute opacity-50 bg-olive-black"></div>
      <div class="absolute mx-32 h-full w-2/4 hover:">
        <div class="dim:-ml-20 dim:mt-10">
          <div class="sm:my-16 sm:mx-8 xl:my-64 lx:mx-32 lg:my-32">
            <h3 class="sm:text-4xl md:text-3xl lg:text-6xl  font-normal text-left  text-[#AADE76] font-pathway">
              MARCANDO MOMENTOS,
              <br class="dim:hidden">
              VIVENDO AVENTURAS.
            </h3>
            <p
              class="dim:text-[8px] sm:text-xs sm:text-left text-[#D0E3BD] lg:text-2xl md:text-lg my-2 text-justify font-pathway hyphens-auto w-4/5">
              O acampamento da Igreja Batista Semear com Cristo está cada dia mais aprimorado,<br
                class="2xl:block md:hidden sm:hidden dim:hidden"> buscando trazer a cada temporada momentos inesqueciveis.
            </p>
          </div>
        </div>
      </div>
      <img :src="acampbackground" class="w-full h-auto " />
    </div>
  </div>
  <div class="flex flex-nowrap ">
    <div class="w-full">
      <div class="relative justify-center items-center">
        <div>
          <div class="flex">
            <div class="absolute w-2/4 h-full">
              <h2
                class="absolute text-center font-signika font-bold leading-tight 2xl:tracking-8 xl:tracking-8 lg:tracking-8 sm:tracking-8 dim:tracking-[0.6em] xl:text-6xl 2xl:text-7xl lg:text-5xl sm:text-4xl dim:text-2xl  text-halloween-orange w-full dim:mt-5 mt-10 xl:mt-40 lg:mt-20 md:mt-20 pl-2">
                TIGER</h2>
              <div class="absolute opacity-25 bg-halloween-orange w-full h-full"></div>
            </div>
            <div class="absolute translate-x-full w-2/4 h-full">
              <h2
                class="absolute text-center font-outfit font-bold leading-tight 2xl:tracking-8 xl:tracking-8 lg:tracking-8 sm:tracking-8 dim:tracking-[0.6em] xl:text-6xl 2xl:text-7xl lg:text-5xl sm:text-4xl dim:text-2xl text-palatinate-blue min-w-full dim:mt-5 mt-10 xl:mt-40 lg:mt-20 md:mt-20 pl-2">
                SHARK</h2>
              <div class="absolute opacity-25 bg-palatinate-blue min-w-full min-h-full"></div>
            </div>
            <div class="absolute w-auto h-auto md:p-10 sm:p-10 lg:p-10 xl:p-10 dim:m-10 dim:p-1 bottom-0 md:bottom-12 lg:bottom-24 inset-x-0">
              <p
                class="text-[#ffff] text-center font-bold text-white font-outfit sm:leading-5 md:leading-5 lg:leading-5 xl:leading-2 lg:tracking-6 md:tracking-6 sm:tracking-6 dim:tracking-6 justify-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-lg dim:text-[6px]">
                União, força e disciplina, pilares para a vitória , alcance o mais alto pódio durante a competição, não
                desista e persevere, não importa o time,azul ou laranja , o nosso lider sempre será cristo.
              </p>
            </div>
          </div>
          <img :src="teamimage" alt="Imagem Reativa" class="w-full h-auto -z-5" />
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row">
    <div class="flex bg-light-khaki w-1/2 min-h-full px-44 py-4">
      <div class="flex flex-wrap flex-col">
        <div class="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-shadow-black duration-200 bg-halloween-orange rounded-lg m-5 px-32 py-40 shadow-lg"></div>
        <div class="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-shadow-black duration-200 bg-palatinate-blue rounded-lg m-5 px-32 py-40 shadow-lg"></div>
      </div>   
      <div class="flex flex-wrap flex-col">
        <div class="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-shadow-black duration-200 bg-olive-black rounded-lg m-5 px-32 py-40 shadow-lg"></div>
        <div class="transition ease-in-out delay-80 hover:-translate-y-1 hover:scale-110 hover:bg-shadow-black duration-200 bg-mossgreen rounded-lg m-5 px-32 py-40 shadow-lg"></div>
      </div>       
    </div>
    <div class="w-1/2 max-h-full">
      <div class="flex items-center justify-center h-full bg-light-khaki">
        <div class="rounded-md w-3/4 h-3/4 bg-mossgreen">
         <div class="flex items-center justify-center w-full h-full">
            <iframe  class="w-3/4 h-3/4 aspect-video" src="https://www.youtube.com/embed/q1pBwQl6zZ0?si=3Q5_KldJpdQTfGFZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div> 
        </div>
      </div>
    </div> 
  </div>
</template>

<script setup>
import acampbackground from "./../assets/image/img-background-header-acamp.png";
import teamimage from "./../assets/image/mvp-image.jpg";
import MainBar from "./../components/MainBar.vue";
</script>


<style>

</style>