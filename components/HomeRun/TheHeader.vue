<template>
  <div class="max-w-[985px]  bg-white py-4 px-5 mx-auto z-30 relative rounded-full flex justify-between items-center shadow-md">
    <img src="@/assets/images/homeRunlogo.png" alt="home_run">
    
    <!-- Desktop Navigation -->
    <ul class="hidden md:flex items-center">
      <li v-for="(item,index) in navItems" :key="index" class="py-2 px-4 text-brown-100 text-lg font-medium">
        <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
      </li>
    </ul>
    
    <div class="md:flex hidden">
      <button class="bg-blue-200 text-lg text-white rounded-full py-4 px-6 font-medium">
        Start for free
      </button>
    </div>
    
    <!-- Mobile Menu Toggle -->
    <div @click="openMenuToggle" class="md:hidden flex flex-col gap-2 cursor-pointer">
      <span :class="{'rotate-45 translate-y-1.5': !menuOpen}" class="h-1 bg-brown-100 w-8 rounded-md transition-all duration-300"></span>
      <span :class="{'opacity-0': !menuOpen}" class="h-1 bg-brown-100 w-8 rounded-md transition-all duration-300"></span>
      <span :class="{'-rotate-45 -translate-y-1.5': !menuOpen}" class="h-1 bg-brown-100 w-8 rounded-md transition-all duration-300"></span>
    </div>
    
    <!-- Mobile Menu -->
    <div v-if="!menuOpen" class="absolute top-full left-0 right-0 bg-white mt-2 rounded-2xl shadow-lg md:hidden p-5">
      <ul class="flex flex-col items-center space-y-4">
        <li v-for="(item,index) in navItems" :key="index" class="py-2 px-4 text-brown-100 text-lg font-medium">
          <nuxt-link :to="item.path">{{ item.name }}</nuxt-link>
        </li>
        <li>
          <button class="bg-blue-200 text-lg text-white rounded-full py-3 px-5 font-medium">
            Start for free
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
const menuOpen = ref(true)

const navItems = [
  { name: 'Product', path: '/' },
  { name: 'Pricing', path: '/' },
  { name: 'Use cases', path: '/' },
  { name: 'Learn', path: '/' },
]

const openMenuToggle = () => {
  menuOpen.value = !menuOpen.value
}
</script>

<style scoped>
/* Add any custom styles here */
</style>