<template>
    <div
        class="flex flex-col inset-0 hover-invisible items-center justify-center transition ease-in-out delay-200 hover:-translate-y-0.5 hover:bg-shadow-black hover:animate__fadeIn duration-300 bg-light-khaki rounded-lg 2xl:m-5 2xl:px-28 2xl:py-32 dim:py-10 dim:m-4 sm:m-2 dim:px-4 sm:px-10 sm:py-16 shadow-lg" @mouseover="handleMouseOver" @mouseout="handleMouseOut">
        <span class="icon text-5xl dim:text-4xl lg:text-6xl"
        >
            <slot name="icon"/>
        </span>
        <span class="text-xl font-outfit mt-2"
        :class="{'text-mossgreen': isMouseOver}"
        >
            <slot name="title"/>
        </span>
        <span :class="{
            'animate-fade animate-once animate-duration-200 animate-delay-300 animate-ease-linear animate-normal': isMouseOver,
            'animate-fade animate-once animate-duration-200 animate-delay-300 animate-ease-linear animate-alternate-reverse': !isMouseOver
          }" 
          class="text-sm text-justify font-outfit text-black"
          v-show="isMouseOver">
            <slot name="text"/>
         </span>
    </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    // Utilizando a Composition API para criar o estado reativo
    const isMouseOver = ref(false);

    // Função para manipular o evento mouseover
    const handleMouseOver = () => {
      isMouseOver.value = true;
    };

    // Função para manipular o evento mouseout
    const handleMouseOut = () => {
      isMouseOver.value = false;
    };

    // Retorna os dados e métodos necessários para o componente
    return {
      isMouseOver,
      handleMouseOver,
      handleMouseOut,
    };
  },
};

</script>