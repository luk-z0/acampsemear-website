<template>
  <div class="flex">
    <SideBar/>
    <div class="flex-1">
      <MainDashboard/>
    </div>
  </div>
</template>

<script setup>
import { useUserStore } from "@/store/user/user.js";
import SideBar from "../../components/SideBar.vue";
import MainDashboard from "../user/dashboard/HomeDashboard.vue";

const userStore = useUserStore();
</script>