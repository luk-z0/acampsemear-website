<template>
  <swiper :modules="modules" :loop="true" :autoplay="{
    delay: 9000,
    disableOnInteraction: false,
    pauseOnMouseEnter: false,
  }" :class="className" class=" bg-olive-black">
    <swiper-slide v-for="(image, value) in images" :key="value">
        <img :src="image" alt="acamp_best_moments" class="w-full h-auto max-h-min object-cover md:h-56 lg:h-72 xl:h-96 opacity-50" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export default {
  props:{
    className: {
      type: String,
      required: false
    }
  },
  components: { Swiper, SwiperSlide },
  setup() {
    const images = ref([]);
    const route = useRoute();

    const allImages = {
      MainPage: import.meta.globEager('@/assets/image/carouselpics/*.jpg'),
      UserPage: import.meta.globEager('@/assets/image/dashboardpics/*.jpg'),
    };

    const selectedImages = computed(() => {
      return Object.values(allImages[route.name] || {}).map((module) => module.default || module);
    });

    images.value = selectedImages.value;

    return {
      modules: [Autoplay, Pagination],
      images,
    };
  },
};

</script>