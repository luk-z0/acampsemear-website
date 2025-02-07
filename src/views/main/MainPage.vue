<template>
  <MainBar />
  <div class="h-full">
    <div class="relative">
      <div class="absolute z-10 inset-1 flex flex-col justify-center items-center">
        <h3 class="sm:text-4xl md:text-3xl lg:text-6xl dim:text-xl font-normal text-[#AADE76] font-pathway">
          MARCANDO MOMENTOS,
          VIVENDO AVENTURAS.
        </h3>
        <p
          class="dim:text-[8px] sm:text-xs sm:text-left text-[#D0E3BD] lg:text-2xl md:text-lg dim:text-sm text-justify font-pathway hyphens-auto">
          O acampamento da Igreja Batista Semear com Cristo está cada dia mais aprimorado,<br
            class="sm:hidden dim:hidden"> buscando trazer a cada temporada momentos
          inesqueciveis.
        </p>
      </div>
      <Carousel class="relative" />
    </div>
    <div class="relative min-h-full py-32 my-32">
      <div class="flex items-center justify-center h-full xl:h-screen bg-olive-black dim:bg-olive-black pb-5">
        <div class="flex items-center justify-center w-3/4 h-3/4 xl:w-full dim:w-full dim:h-full dim:bg-none">
          <iframe class="sm:h-80 xl:h-3/4 xl:w-3/4 sm:w-full aspect-video xl:p-20 xl:m-10 bg-orange-300 rounded-lg"
            src="https://www.youtube.com/embed/nf4aaFNcLHQ?si=Fm_zv5-W1ElIJy1Y" title="Video Acamp 2023"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
      </div>
    </div>

  </div>
  <Footer />
</template>

<script setup>
import MainBar from "@/components/MainBar.vue";
import Footer from "@/components/Footer.vue";
import Carousel from "@/components/Carousel.vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookBible } from '@fortawesome/free-solid-svg-icons';

library.add(faBookBible);
</script>


<style scoped>
* {
  margin: 0;
  padding: 0;
}
</style>