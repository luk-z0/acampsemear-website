import { defineStore } from 'pinia';
import { ref } from 'vue';


export const useUserStore = defineStore('user', () => {
  const user = ref();

  function setUser(params) {
    user.value = params;
  }

  return {
    user,
    setUser
  };
});
