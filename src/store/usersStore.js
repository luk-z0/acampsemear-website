import { defineStore } from 'pinia'
import axiosInstance from '../services/axios';

export const createUserStore = defineStore('createUserd',{
    state: () => ({
        account:{
            user: '',
            password: '',
            email: '',
            first_name: '',
            last_name: '',
            phone: '',
        },
        created: false
    }),
    actions:{
        async createUser(newUser){
            const response = await axiosInstance.post('users', newUser)
            this.created = true;
            return response.data
        }
    },
    getters:{
        userCreate(){
            return this.created
        }
    }
})


export const useUsersStore = defineStore('users', {
    state: () => ({
        users: null,
    }),
    actions: {
        async findUser() {
            try {
                const response = await axiosInstance.get(`users`)
                this.users = response.data
            } catch (error) {
                console.error('Erro ao buscar usuário:', error)
            }
        }
    },
    getters: {
        getUsers(){
            return this.users || []
        }
    }
})

export { axiosInstance };
