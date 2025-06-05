import { useAuthStore } from "@/store/auth/auth.js";

export default async function authMiddleware(to, from, next) {
	const isAuth = useAuthStore();

	if (to.meta.requiresAuth && !isAuth.access_token) {
		return next({ name: "LoginPage" });
	} else return next();
}
