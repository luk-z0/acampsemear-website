<template>
  <div class="flex">
    <SideBar />
    <div class="flex-1 flex flex-col">
      <router-view/>
    </div>
  </div>
</template>

<script setup>
import SideBar from "../../components/SideBar.vue";
</script>