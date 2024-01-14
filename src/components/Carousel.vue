<template>
    <swiper
        :modules="modules"
        :loop="true"
        :autoplay="{
            delay: 3000,
            disableOnInteraction: true,
            pauseOnMouseEnter: false
        }"
        class="w-full h-screen"
        >
        <swiper-slide v-for="(image,value) in images" :key="value" class="flex items-center justify-center">
            <img :src="image" class="w-full h-auto object-contain"/>
        </swiper-slide>
    </swiper>
</template>

<script>
import { ref, onMounted } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import {Autoplay, Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
   components: {Swiper, SwiperSlide},
  setup() {
    const images = ref([]);

    const importImages = () => {
      const imageContext = import.meta.globEager('@/assets/image/carouselpics/*.jpg');
      images.value = Object.values(imageContext).map((module) => module.default || module);
    };
        
    onMounted(() => {
      importImages();
    });

    return {
      modules: [Autoplay, Pagination],
      images,
    };
  },
};

</script>

<style>

</style>