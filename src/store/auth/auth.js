import { defineStore } from "pinia";
import Connection from "@/services/axios.js";
import { useUserStore } from "@/store/user/user";
import { ref } from "vue";
import router from "../../router";

export const useAuthStore = defineStore("authentication", () => {
	const access_token = ref(localStorage.getItem("access_token"));
	const userStore = useUserStore();

	async function login(payload) {
		await Connection.post("/login", payload)
			.then((response) => {
				setToken(response.data.access_token);
				me();
			})
			.catch((error) => {
				console.error(error);
			});
	}

	async function setToken(tokenValue) {
		localStorage.setItem("access_token", tokenValue);
		access_token.value = tokenValue;
	}

	function removeToken() {
		localStorage.removeItem("access_token", access_token);
		access_token.value = null;
	}

	async function checkToken() {
		try {
			const { data } = await Connection.get("/verify");
			return data;
		} catch (error) {
			if (error.response?.status === 401) {
				router.push("/login");
			} else {
				console.error(error);
			}
		}
	}

	async function me() {
		await Connection.post("/me")
			.then((response) => {
				userStore.setUser(response.data);
				return response.data;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	function logout() {
		Connection.post("/logout", { token: access_token.value })
			.then((response) => {
				removeToken();
				router.push("/login");
				return response.message;
			})
			.catch((error) => {
				console.log(error);
			});
	}

	return {
		access_token,
		userStore,
		checkToken,
		setToken,
		removeToken,
		login,
		logout,
		me,
	};
});
