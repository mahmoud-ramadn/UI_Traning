<template>
  <div class="px-4 relative">
    <div class="container p-3 rounded-xl border border-white/10 bg-primary-100 flex justify-between items-center">
      <h1 class="font-bold text-2xl text-white flex items-center gap-2">
        <img src="@/assets/images/logo.webp" alt="IdentityHub Logo" />
        IdentityHub
      </h1>
  
      <ul class="md:flex hidden gap-x-6">
        <li
          v-for="(item, index) in ['Services', 'Features', 'Pricing', 'Partners']"
          :key="index"
          class="text-gray-100 hover:text-gray-100/50 transition-colors duration-75"
        >
          <nuxt-link to="/">{{ item }}</nuxt-link>
        </li>
      </ul>
  
      <button
        class="group relative hidden md:inline-flex items-center justify-center p-0.5 mb-2 mr-2 text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#090EDB] to-[#8D1EA2]"
      >
        <span
          class="relative px-5 py-2.5 transition-all ease-in duration-75 shadow-inner bg-primary-500 backdrop:blur-lg rounded-md text-white"
        >
          Start Free Trial &gt;
        </span>
      </button>
      
      <!-- Burger Icon -->
      <div 
        @click="toggleMenu" 
        class="md:hidden flex justify-center flex-col items-center gap-1 cursor-pointer z-50"
        :class="{ 'fixed right-6 top-6': opeToggle }"
      >
        <span 
          class="h-1 bg-white w-8 rounded-md transition-all duration-300"
          :class="{ 'rotate-45 translate-y-2': opeToggle }"
        ></span>
        <span 
          class="h-1 bg-white w-8 rounded-md transition-all duration-300"
          :class="{ 'opacity-0': opeToggle }"
        ></span>
        <span 
          class="h-1 bg-white w-8 rounded-md transition-all duration-300"
          :class="{ '-rotate-45 -translate-y-2': opeToggle }"
        ></span>
      </div>
    </div>

    <!-- Mobile Menu Slide-in from Right -->
    <div 
      class="fixed inset-0 z-40 overflow-hidden"
      v-show="opeToggle"
    >
      <div 
        class="absolute inset-0 bg-black/50 backdrop-blur-sm"
        @click="toggleMenu"
      ></div>
      
      <div 
        class="absolute top-0 right-0 h-full w-3/4 max-w-sm bg-primary-100 shadow-xl transform transition-transform duration-300 ease-in-out"
        :class="{ 'translate-x-0': opeToggle, 'translate-x-full': !opeToggle }"
      >
        <div class="p-6 h-full flex flex-col">
          <!-- Close Button -->
          <div class="flex justify-end mb-8">
            <button @click="toggleMenu" class=" text-2xl text-transparent">
              &times;
            </button>
          </div>
          
          <!-- Menu Items -->
          <ul class="flex flex-col gap-6">
            <li
              v-for="(item, index) in ['Services', 'Features', 'Pricing', 'Partners']"
              :key="index"
              class="text-gray-100 hover:text-gray-100/50 transition-colors duration-75 text-xl"
              @click="toggleMenu"
            >
              <nuxt-link to="/">{{ item }}</nuxt-link>
            </li>
          </ul>
          
          <!-- Mobile CTA Button -->
          <button
            class="mt-auto group relative inline-flex items-center justify-center p-0.5 text-sm font-medium text-gray-900 rounded-lg bg-gradient-to-br from-[#090EDB] to-[#8D1EA2]"
          >
            <span
              class="relative px-5 py-2.5 transition-all ease-in duration-75 shadow-inner bg-primary-500 backdrop:blur-lg rounded-md text-white w-full"
            >
              Start Free Trial &gt;
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const opeToggle = ref(false);

const toggleMenu = () => {
  if (process.client) {
    document.body.style.overflow = opeToggle.value ? '' : 'hidden';
  }
  opeToggle.value = !opeToggle.value;
};
</script>

<style scoped>
/* Custom transition for smoother menu appearance */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>