import { defineStore } from 'pinia';
import Connection from '@/services/axios.js';
import { ref } from 'vue';


export const useAuthStore = defineStore('useAuthStore', () => {
    const access_token = ref(localStorage.getItem('access_token'));

    async function login(payload) {
        try {
            const { data } = await Connection.post('/login', payload);
            setToken(data.access_token);
            return data;
        } catch (error) {
            console.log(error.response);
        }
    }

    function setToken(tokenValue) {
        localStorage.setItem('access_token', tokenValue)
        access_token.value = tokenValue;
    }

    async function checkToken(){
        try {
            const {data} = await Connection.get('/verify');
            return data;
        } catch (error) {
            console.log(error.response);
        }
    }

    return {
        access_token,
        checkToken,
        setToken,
        login
    }
})
