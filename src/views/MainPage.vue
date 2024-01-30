<template>
  <MainBar />
  <div class="relative">
    <div class="relative">
      <div class="min-h-full w-full absolute opacity-50 bg-olive-black"></div>
      <div class="absolute mx-32 h-full w-2/4">
        <div class="dim:-ml-20 dim:mt-10 m-10">
          <div class="sm:my-16 sm:mx-8 xl:my-64 lx:mx-32 lg:my-32 dim:">
            <h3
              class="sm:text-4xl md:text-3xl lg:text-6xl dim:text-md font-normal text-left text-[#AADE76] font-pathway">
              MARCANDO MOMENTOS,
              <br class="dim:hidden">
              VIVENDO AVENTURAS.
            </h3>
            <p
              class="dim:text-[8px] sm:text-xs sm:text-left text-[#D0E3BD] lg:text-2xl md:text-lg my-2 dim:my-0 dim:text-sm text-justify font-pathway hyphens-auto w-4/5 lg:w-full">
              O acampamento da Igreja Batista Semear com Cristo está cada dia mais aprimorado,<br
                class="2xl:block md:hidden sm:hidden dim:hidden"> buscando trazer a cada temporada momentos inesqueciveis.
            </p>
          </div>
        </div>
      </div>
      <Carousel class="-z-10" />
      <!-- <img :src="acampbackground" class="w-full h-auto " /> -->
    </div>
  </div>
  <div class="flex flex-nowrap ">
    <div class="w-full">
      <div class="relative justify-center items-center">
        <div>
          <div class="flex">
            <div class="absolute w-2/4 h-full">
              <h2
                class="absolute text-center font-signika font-bold leading-tight 2xl:tracking-8 xl:tracking-8 lg:tracking-8 sm:tracking-8 dim:tracking-[0.6em] xl:text-6xl 2xl:text-7xl lg:text-5xl sm:text-4xl dim:text-xl  text-halloween-orange w-full dim:mt-5 mt-10 xl:mt-40 lg:mt-20 md:mt-20 pl-2">
                TIGER</h2>
              <div class="absolute opacity-25 bg-halloween-orange w-full h-full"></div>
            </div>
            <div class="absolute translate-x-full w-2/4 h-full">
              <h2
                class="absolute text-center font-outfit font-bold leading-tight 2xl:tracking-8 xl:tracking-8 lg:tracking-8 sm:tracking-8 dim:tracking-[0.6em] xl:text-6xl 2xl:text-7xl lg:text-5xl sm:text-4xl dim:text-xl text-palatinate-blue min-w-full dim:mt-5 mt-10 xl:mt-40 lg:mt-20 md:mt-20 pl-2">
                SHARK</h2>
              <div class="absolute opacity-25 bg-palatinate-blue min-w-full min-h-full"></div>
            </div>
            <div
              class="absolute w-auto h-auto md:p-10 sm:p-10 lg:p-10 xl:p-10 dim:m-10 dim:p-1 bottom-0 md:bottom-12 lg:bottom-24 inset-x-0">
              <p
                class="text-center font-bold text-light-khaki drop-shadow-lg font-outfit sm:leading-5 md:leading-5 lg:leading-5 xl:leading-2 lg:tracking-6 md:tracking-6 sm:tracking-6 dim:tracking-6 justify-center 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-lg dim:text-[6px]">
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
  <div class="flex flex-row dim:flex-col sm:flex-col xl:flex-row">
    <div
      class="dim:overflow-x-auto flex xl:flex-wrap bg-olive-black w-1/2 dim:w-full sm:w-full xl:max-h-screen justify-center sm:items-center min-h-full xl:py-24 xl:px-12 dim:py-2 py-5">
      <CardComponent class="bg-mossgreen"> 

      </CardComponent>
      <CardComponent class="bg-mossgreen"> 

      </CardComponent>
      <CardComponent class="bg-mossgreen"> 

      </CardComponent>
      <CardComponent class="bg-mossgreen"> 

      </CardComponent>
    </div>
    <div class="w-1/2 dim:w-full dim:h-full max-h-full xl:max-h-screen sm:h-3/4 sm:w-full">
      <div class="flex items-center justify-center h-full xl:h-screen bg-olive-black dim:bg-olive-black pb-5">
        <div class="flex items-center justify-center w-3/4 h-3/4 xl:w-full dim:w-full dim:h-full dim:bg-none">
          <iframe
            class="sm:h-80 xl:h-full xl:w-full sm:w-full w-3/4 h-3/4 aspect-video xl:p-20 xl:m-10 bg-orange-300 rounded-lg"
            src="https://www.youtube.com/embed/nf4aaFNcLHQ?si=Fm_zv5-W1ElIJy1Y" title="Video Acamp 2023" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>
  </div>
  <!-- <div class="w-full h-full">
    <div class="mx-20 px-40">
      <div class="flex justify-center w-auto h-auto">
          <h3 class="m-20 font-outfit text-mossgreen text-6xl">Propósito</h3>
      </div>
      <div class="flex w-auto h-auto bottom-6 inset-x-0">
        <p class="text-light-khaki text-center justify-center font-bold text-white font-outfit 2xl:text-4xl xl:text-3xl lg:text-2xl md:text-lg sm:text-lg dim:text-[6px]">
          Texto falando do principal propósito dos acampamentos e a sua importância para a cooperação do reino, onde todo esforço e dedicação são destinadas para a glória de Deus, onde temos como o alvo o autor da nossa salvação, Jesus Cristo, nosso salvador.
        </p>
      </div>
    </div>
 </div>
 <div>
    <div class="bg-olive-black w-full h-full">

    </div>
 </div> -->



  <!-- <Carousel/> -->
  <Footer />
</template>

<script setup>
import teamimage from "./../assets/image/mvp-image.jpg";
import MainBar from "./../components/MainBar.vue";
import Footer from "./../components/Footer.vue";
import Carousel from "./../components/Carousel.vue";
import CardComponent from "../components/CardComponent.vue";



</script>


<style></style>