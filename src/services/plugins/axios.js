import axios from "axios";
import { loadingInterceptor } from "./interceptos/loadingInterceptor";
import { authInterceptor } from "./interceptos/authInterceptor";

const axiosInstance = axios.create({
	baseURL: import.meta.env.VITE_API_URL,
	headers: {
		"Content-Type": "application/json",
		Access: "application/json",
	},
	timeout: 5000,
	// transformRequest: [
	//   (data, headers) => {
	//     const encryptedString = encryptPayload(JSON.stringify(data));

	//     data = {
	//       SecretStuff: encryptedString,
	//     };

	//     return JSON.stringify(data);
	//   },
	// ],
});

loadingInterceptor(axiosInstance);
authInterceptor(axiosInstance);

export default axiosInstance;
