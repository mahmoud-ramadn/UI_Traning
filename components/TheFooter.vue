<template>
  <footer class=" py-12 px-4 sm:px-6 lg:px-8">
    <div class="container mx-auto">
      <!-- Top Section -->
      <div class="flex flex-col md:flex-row justify-between items-center border-b border-gray-700 pb-8 gap-6">
        <!-- Logo -->
        <div class="flex items-center gap-3">
          <img 
            src="@/assets/images/logo.webp" 
            alt="IdentityHub Logo" 
            class="h-10 w-auto transition-transform hover:scale-105 duration-300"
          >
          <h1 class="font-bold text-2xl text-white bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            IdentityHub
          </h1>
        </div>
        
        <!-- Navigation -->
        <nav class="flex flex-wrap justify-center gap-6 md:gap-8">
          <NuxtLink 
            v-for="(item, index) in ['Services', 'Features', 'Pricing', 'Partners']"
            :key="index"
            to="/"
            class="text-gray-300 hover:text-white transition-colors duration-300 relative group"
          >
            {{ item }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </NuxtLink>
        </nav>
      </div>

      <!-- Bottom Section -->
      <div class="flex flex-col-reverse md:flex-row justify-between items-center pt-8 gap-6">
        <!-- Copyright -->
        <small class="text-gray-400 text-sm md:text-base">
          © IdentityHub 2024. All rights reserved
        </small>

        <!-- Social Icons -->
        <div class="flex items-center gap-4 sm:gap-6">
          <a 
            v-for="(icon, index) in socialIcons"
            :key="index"
            href="#"
            class="text-gray-400 hover:text-white transition-colors duration-300 relative group"
            :aria-label="`Follow us on ${icon.name}`"
          >
            <img 
              :src="icon.src" 
              :alt="icon.name" 
              class="h-6 w-6 transition-all duration-300 group-hover:scale-110 group-hover:brightness-125"
            >
            <span class="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {{ icon.name }}
            </span>
          </a>
        </div>

        <!-- Back to Top Button -->
        <button 
          @click="scrollToTop"
          class="md:ml-auto flex items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300 group"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <svg 
            class="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
          </svg>
        </button>
      </div>

      <!-- Additional Links (optional) -->
      <div class="flex flex-wrap justify-center gap-4 pt-8 text-sm text-gray-500">
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
        <span>•</span>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
        <span>•</span>
        <a href="#" class="hover:text-gray-300 transition-colors duration-300">Cookie Policy</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import one from  '@/assets/images/imgIcons/Community icon-1.png'
import two from  '@/assets/images/imgIcons/Community icon-2.png'
import three from  '@/assets/images/imgIcons/Community icon-3.png'
import four from  '@/assets/images/imgIcons/Community icon.png'
const socialIcons = [
  { src:one , name: 'Twitter' },
  { src: two, name: 'Facebook' },
  { src: three, name: 'LinkedIn' },
  { src: four, name: 'Discord' }
]

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<style scoped>
/* Custom underline animation for nav links */
.router-link-active {
  @apply text-white;
}

.router-link-active span {
  @apply w-full;
}
</style>