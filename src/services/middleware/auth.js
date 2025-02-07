import { useAuthStore } from '@/store/auth/auth.js';

export default async function auth({to, from, next }) {
    const auth = useAuthStore();

    if (auth.access_token) {
        const isAuth = await auth.checkToken();

        if (isAuth) {
            next();
        }
    }
}