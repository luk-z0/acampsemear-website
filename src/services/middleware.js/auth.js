import { useAuthStore } from '@/store/auth/auth.js';

export default async function auth({ next }) {
    const auth = useAuthStore();
    
    if (auth.access_token) {
        const isAuth = await auth.checkToken();
        if (isAuth) {
            return next();
        }
    } else {
        return next({ name: 'LoginPage' });
    }
    return next();
}