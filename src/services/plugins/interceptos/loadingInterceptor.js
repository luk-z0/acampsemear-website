import { useLoadingStore } from "@/store/loading/loading";

export function loadingInterceptor(axios) {
	axios.interceptors.request.use((config) => {
		const loading = useLoadingStore();
		loading.start();
		return config;
	});

	axios.interceptors.response.use(
		(response) => {
			const loading = useLoadingStore();
			loading.stop();
			return response;
		},
		(error) => {
			const loading = useLoadingStore();
			loading.stop();
			return Promise.reject(error);
		}
	);
}
