<template>
    <FormComponent>
        <div class="flex flex-col items-center justify-center px-6 mx-auto md:h-screen lg:py-0 dim:w-full dim:py-10">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <img class="mx-auto h-32 w-auto size-20" alt="" :src="acampicon" />
            </div>
            <div class="w-full rounded-lg md:mt-0 sm:max-w-md sm:p-8">
                <h1 class="mb-1 text-xl font-bold leading-tight tracking-tight text-orange-700 md:text-2xl">
                    Esqueceu a conta?
                </h1>
                <p class="font-light text-olive-black text-justify">Não se preocupe! Basta digitar seu e-mail e nós
                    lhe enviaremos um código para redefinir sua senha!</p>
                <form class="mt-1 space-y-4 lg:mt-2 md:space-y-5" action="#">
                    <div>
                        <div class="relative z-0">
                            <input name="email" id="email"
                                class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                                placeholder=" " required />
                            <label for="user"
                                class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Email</label>
                        </div>
                    </div>
                    <button type="submit"
                        class="flex w-full justify-center rounded-md bg-olive-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-mossgreen focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mossgreen">
                        Enviar</button>
                </form>
            </div>
        </div>
    </FormComponent>
</template>

<script setup>
import acampicon from "@/assets/image/acamp-icon.png";
import FormComponent from "@/components/FormComponent.vue";



</script>