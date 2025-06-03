import { createRouter, createWebHistory } from "vue-router";
import auth from "../services/middleware/auth";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "MainPage",
			component: () => import("@/views/main/MainPage.vue"),
		},
		{
			path: "/login",
			name: "LoginPage",
			component: () => import("@/views/login/LoginPage.vue"),
		},
		{
			path: "/register",
			name: "RegisterPage",
			component: () => import("@/views/register/RegisterPage.vue"),
		},
		{
			path: "/contact",
			name: "ContactPage",
			component: () => import("@/views/contact/ContactPage.vue"),
		},
		{
			path: "/user/:id",
			name: "UserPage",
			meta: {
				auth: true,
			},
			children: [
                {
                    path: "home",
					name: "HomeDashboard",
					component: () =>
						import("@/views/user/dashboard/HomeDashboard.vue"),
                },
                {
                    path: "settings",
					name: "UserSettings",
					component: () =>
						import("@/views/user/settings/UserSettings.vue"),
                },
				{
					path: "registration",
					name: "RegistrationForm",
					component: () =>
						import("@/views/user/dashboard/RegistrationForm.vue"),
				},
			],
			component: () => import("@/views/user/UserPage.vue"),
		},
		{
			path: "/reset_password",
			name: "PasswordResetPage",
			component: () => import("@/views/password_reset/PasswordResetPage.vue"),
		},
	],
});

router.beforeEach(async (to, from, next) => {
	if (to.meta.auth) {
		await auth({ to, from, next });
	} else {
		next();
	}
});

export default router;
