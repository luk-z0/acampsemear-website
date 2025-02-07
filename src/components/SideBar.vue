<template>
    <div class="flex min-h-screen ">
        <aside class="flex flex-col items-center justify-center h-screen shadow-lg bg-mossgreen">
            <div class="flex flex-col justify-center items-center max-h-min m-2">
                <img class="mx-auto h-12 w-auto" :src="acampicon" alt="AcampSemear" />
            </div>
            <hr class="border border-olive-black w-full ">
            <nav class="flex flex-1 flex-col pt-10">
                <div>
                    <span v-for="item in menu" :key="item.name" class="flex flex-col mb-4">
                        <router-link :to="item.path" class="flex flex-col items-center justify-center ">
                            <font-awesome-icon :icon="item.icon"
                                class="h-4 w-4 text-light-khaki hover:rounded-full hover:shadow-lg hover:bg-orange-700 active:bg-orange-300 p-2 hover:animate-jump hover:animate-once hover:animate-ease-linear" />
                        </router-link>
                    </span>
                </div>
            </nav>
            <div class="flex flex-col items-center justify-center m-4">
                <button @click="logout">
                    <font-awesome-icon :icon="[`${faRightFromBracket.prefix}`, `${faRightFromBracket.iconName}`]"
                        class="h-4 w-4 text-light-khaki hover:rounded-full hover:shadow-lg hover:bg-orange-700 active:bg-orange-300 p-2 hover:animate-jump hover:animate-once hover:animate-ease-linear" />
                </button>
            </div>
        </aside>
    </div>
</template>

<script setup>
import acampicon from "@/assets/image/acamp-icon.png";
import { useAuthStore } from "@/store/auth/auth.js";
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHouse, faGear, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const authUser = useAuthStore();

const menu = [
  { name: "Home", icon: faHouse, path: '/' },
  { name: "Settings", icon: faGear, path: "/settings" },
]

function logout() {
  authUser.logout();
}

library.add(faHouse, faGear, faRightFromBracket);
</script>