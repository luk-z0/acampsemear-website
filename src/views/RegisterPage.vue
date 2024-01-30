<template>
    <FormComponent>
      <div class="flex h-auto w-auto flex-col justify-center lg:px-8">
        <div class="flex flex-col justify-center items-center w-auto h-auto sm:mx-auto sm:max-w-smsm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-32 w-auto size-20" alt="" :src="acampicon" />
          <h1 class="text-olive-black font-bold text-3xl font-pathway leading-tight">Crie sua Conta</h1>
          <h5 class="text-olive-black font-semibold text-center font-pathway hyphens-auto leading-tight text-lg">
            Seja bem-vindo! Complete o formulário abaixo para começar.
          </h5>
        </div>
        <div class="w-auto h-auto mt-2">
          <form class="max-w-md mx-auto">
            
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="text"
                name="user"
                id="user"
                class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required
              />
              <label
                for="user"
                class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Usuário</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="password"
                id="password"
                class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required
              />
              <label
                for="password"
                class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Senha</label
              >
            </div>
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="password"
                name="repeat_password"
                id="repeat_password"
                class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required
              />
              <label
                for="repeat_password"
                class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Confirmar senha</label
              >
            </div>
            <div class="relative z-0 w-full h-auto mb-5 group">
              <input
                type="email"
                name="email"
                id="email"
                class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                placeholder=" "
                required
              />
              <label
                for="email"
                class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                >Email
              </label>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="first_name"
                  id="first_name"
                  class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="first_name"
                  class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Nome</label
                >
              </div>
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="last_name"
                  id="last_name"
                  class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="last_name"
                  class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Sobrenome</label
                >
              </div>
            </div>
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                  pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                  name="phone"
                  id="phone"
                  class="block py-2.5 px-6 w-full text-lg text-white bg-transparent border-0 border-b-2 border-black appearance-none dark:text-white dark:border-black dark:focus:border-orange-700 focus:outline-none focus:ring-0 focus:border-orange-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="phone"
                  class="absolute text-lg text-black dark:text-black duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-orange-600 peer-focus:dark:text-orange-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
                  >Celular</label
                >
              </div>
              
            </div>
            <button
              type="submit"
              class="flex w-full justify-center rounded-md bg-olive-black px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-yellow-500"
            >
              Criar Conta
            </button>
          </form>
        </div>
      </div>
    </FormComponent>
</template>

<script setup>
import acampicon from "./../assets/image/acamp-icon.png";
import FormComponent from "../components/FormComponent.vue";
</script>

<style></style>