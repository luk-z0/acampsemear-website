<template>
    <swiper :modules="modules" :pagination="{clickable: true}">
        <swiper-slide>
            <slot name="card1" />
            <slot />
            <slot />
            <slot name="card2"/>

        </swiper-slide>
    </swiper>
</template>

<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import { FreeMode, Pagination } from 'swiper/modules';
import 'swiper/css'
import 'swiper/css/pagination'

export default {
    components: { Swiper, SwiperSlide },
    setup() {

        return {
            modules: [FreeMode, Pagination], Swiper, SwiperSlide
        }
    }
}
</script>

<style></style>