<template>
  <SideBar/>
</template>

<script setup>
import { useUserStore } from "@/store/user/user.js";
import SideBar from "../../components/SideBar.vue";

const userStore = useUserStore();
</script>