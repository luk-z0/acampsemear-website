<template>
    <DashboardLayout title="Página Inicial"/>
</template>

<script setup>
import DashboardLayout from '../../../components/DashboardLayout.vue';
import { useAuthStore } from "@/store/auth/auth.js";

const auth = useAuthStore();


</script>