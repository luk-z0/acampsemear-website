<template>
	<div class="flex min-h-screen">
		<aside
			class="flex flex-col items-center justify-center h-screen shadow-lg bg-mossgreen"
		>
			<div class="flex flex-col justify-center items-center max-h-min m-2">
				<router-link to="/" class="-m-1.5 p-1.5">
					<img class="mx-auto h-12 w-auto" :src="acampicon" alt="AcampSemear" />
				</router-link>
			</div>
			<hr class="border border-olive-black w-full" />
			<nav class="flex flex-1 flex-col pt-10">
				<div>
					<span
						v-for="item in menu"
						:key="item.name"
						class="flex flex-col mb-4"
					>
						<router-link
							:to="item.path"
							class="flex flex-col items-center justify-center"
						>
							<font-awesome-icon
								:icon="item.icon"
								class="h-4 w-4 text-light-khaki hover:rounded-full hover:shadow-lg hover:bg-orange-700 active:bg-orange-300 p-2 hover:animate-jump hover:animate-once hover:animate-ease-linear"
							/>
						</router-link>
					</span>
				</div>
			</nav>
			<div class="flex flex-col items-center justify-center m-4">
				<button @click="showModal = true">
					<font-awesome-icon
						:icon="[
							`${faRightFromBracket.prefix}`,
							`${faRightFromBracket.iconName}`,
						]"
						class="h-4 w-4 text-light-khaki hover:rounded-full hover:shadow-lg hover:bg-orange-700 active:bg-orange-300 p-2 hover:animate-jump hover:animate-once hover:animate-ease-linear"
					/>
				</button>
			</div>
		</aside>
	</div>
	<ConfirmModal
		v-model="showModal"
		confirm-text="Sim"
		cancel-text="Não"
        message="Deseja sair?"
		@confirm="handleConfirmLogout"
	/>
</template>

<script setup>
	import acampicon from "@/assets/image/acamp-icon.png";
	import ConfirmModal from "./ConfirmModal.vue";
	import { useAuthStore } from "@/store/auth/auth.js";
	import { library } from "@fortawesome/fontawesome-svg-core";
	import {
		faClipboard,
		faGear,
		faHouse,
		faRightFromBracket,
	} from "@fortawesome/free-solid-svg-icons";
	import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
	import { computed, ref } from "vue";
	import { useRoute } from "vue-router";

	const authUser = useAuthStore();
	const route = useRoute();
	const showModal = ref(false);

	const menu = computed(() => [
		{
			name: "Home",
			icon: faHouse,
			component: "HomeDashboard",
			path: `/user/${route.params.id}/home`,
		},
		{
			name: "Settings",
			icon: faGear,
			component: "UserSettings",
			path: `/user/${route.params.id}/settings`,
		},
		{
			name: "Registration",
			icon: faClipboard,
			component: "RegistrationForm",
			path: `/user/${route.params.id}/registration`,
		},
	]);

	const handleConfirmLogout = () => {
		authUser.logout();
	};

	library.add(faHouse, faGear, faRightFromBracket, faClipboard);
</script>
