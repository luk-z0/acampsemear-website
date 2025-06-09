import { useAuthStore } from "@/store/auth/auth.js";

export function authInterceptor(axios) {
	axios.interceptors.request.use((config) => {
		const { access_token } = useAuthStore();

		if (access_token) {
			config.headers.Authorization = `Bearer ${access_token}`;
		}
		return config;
	}),
		(erro) => {
			return Promise.reject(erro);
		};
}
