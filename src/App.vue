<template>
    <Loading />
    <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router';
import Loading from './components/Loading.vue';
</script>

<style scoped>
html {
    scroll-behavior: smooth;
}
</style>
