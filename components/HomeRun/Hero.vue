<template>
  <div class=" md:px-24 pt-36">
    <div class="max-w-[900px] mx-auto md:py-10 py-3 md:px-32">
      <h1 class="font-extrabold md:text-8xl text-7xl text-brown-100 text-center relative">
        <span class="float-left">
          <img src="/assets/images/squer.png" alt="squer">
        </span>
        A radically
        <span class="float-right">
          <img src="/assets/images/6447ce2e31bbd22d4b546f51_homerun-avatar1.svg.png" alt="squer">
        </span>
        easy-to-use
        hiring tool
        <span class="float-end">
          <img src="/assets/images/6447ce2e31bbd2ec89546f52_homerun-avatar3.svg.png" alt="squer">
        </span>
      </h1>
    </div>
    
    <p class="text-brown-100 md:text-2xl text-xl text-center my-6">
      Don't let stellar talent fall through the cracks of a messy hiring process.
      Organize your hiring in minutes with Homerun.
    </p>
    
    <div class="flex items-center justify-center gap-x-2 my-12">
      <button class="py-4 md:px-5 px-3 w-fit rounded-full bg-gray-200 flex items-center gap-x-3 text-sm md:text-lg text-brown-200">
        <img src="/assets/images/play.png" alt="icon_img">
        Demo video
      </button>
      <button class="bg-blue-200  px-3 w-fit rounded-full py-4 text-white md:text-lg text-sm md:px-6">
        Start hiring for free
      </button>
    </div>
    
    <img src="@/assets/images/homrunHero.png" alt="hom_run" class="object-cover shrink-0">
    <HomeRunPartners/>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
</style>