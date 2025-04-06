<template >
  <div class=" px-4">

    <div
      class="container p-3   rounded-xl border border-white/10 bg-primary-100 flex justify-between items-center"
    >
      <h1 class="font-bold text-2xl text-white flex items-center gap-2">
        <img src="@/assets/images/logo.webp" alt="" />
        IdentityHub
      </h1>
  
      <ul class="md:flex hidden gap-x-6 ">
        <li
          v-for="(item, index) in ['Services', 'Features', 'Pricing', 'Partners']"
          :key="index"
          class="text-gray-100 hover:text-gray-100/50 transition-colors duration-75"
        >
          <nuxt-link to="/">{{ item }}</nuxt-link>
        </li>
      </ul>
  
      <button
        class="group relative hidden md:inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] dark:text-white"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 shadow-inner bg-primary-500 backdrop:blur-lg rounded-md"
        >
          Start Free Trial &gt;
        </span>
      </button>
      <div @click="toggeleMenu" class=" md:hidden  flex justify-center flex-col items-center  gap-1 cursor-pointer   ">
       <span class=" h-1 bg-white w-8 rounded-md"></span>
       <span class=" h-1 bg-white w-8  rounded-md"></span>
       <span class=" h-1 bg-white w-8 rounded-md"></span>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">

const opeToggle=ref(false);
const toggeleMenu=()=>{
    opeToggle.value=!opeToggle.value
    console.log(opeToggle.value);
    
}


</script>

<style scoped></style>
