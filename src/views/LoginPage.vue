<template>
    <FormComponent>
        <div
            class="flex absolute min-h-full flex-1 flex-col justify-center lg:px-8"
            >
            <div class="flex flex-col w-auto h-auto">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img
                    class="mx-auto h-32 w-auto size-20"
                    alt=""
                    :src="acampicon"
                />
                <h2
                    class="text-center text-2xl font-bold leading-9 tracking-tight font-pathway text-olive-black"
                >
                    Entrar
                </h2>
                </div>

                <div
                class="flex flex-col mt-10 sm:mx-auto sm:w-full sm:max-w-sm sm:max-h-max"
                >
                <form class="space-y-6 w-auto h-auto" @submit.prevent="getHome">
                    <div class="relative z-0">
                    <input
                        type="text"
                        id="user"
                        class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="user"
                        class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >Usuário</label
                    >
                    </div>
                    <div class="relative z-0">
                    <input
                        type="password"
                        id="password"
                        class="block py-2.5 px-0 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                        placeholder=" "
                    />
                    <label
                        for="password"
                        class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                        >Senha</label
                    >
                    </div>
                    <div class="relative z-0">
                    <button
                        type="submit"
                        class="flex w-full justify-center rounded-md bg-olive-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mossgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mossgreen"
                    >
                        Entrar
                    </button>
                    </div>
                </form>

                <p class="relative mt-10 text-center text-sm text-white">
                    Não possui conta?
                    {{ " " }}
                    <router-link
                    to="/register"
                    class="font-semibold leading-6 text-orange-600 hover:text-orange-900"
                    >
                    Registre-se
                    </router-link>
                </p>
                </div>
            </div>
        </div>
    </FormComponent>
</template>

<script setup>
import acampicon from "./../assets/image/acamp-icon.png";
import FormComponent from "../components/FormComponent.vue";
import router from "../router";

function getHome() {
  router.push({ path: "/" });
}
</script>