<template>
  <div class=" md:px-10">
    <div class="grid lg:grid-cols-3 grid-cols-1 gap-10">
      <div class="lg:col-span-2 bg-brown-100 rounded-2xl overflow-hidden">
        <div class="p-10">
          <h2 class="text-2xl font-extrabold text-white">
            Integrations with your favorite apps
          </h2>
          <p class="text-white text-sm">
            Combine your favorite tools to build a personal workflow.
          </p>
        </div>
        <img
          src="/assets/images/grid-l (1).png"
          alt="img"
          class="shrink-0 object-cover  w-full"
        />
      </div>
      <div class="lg:col-span-1 bg-blue-200 rounded-2xl">
        <div class="p-10">
          <h2 class="text-2xl font-extrabold text-white">Showcase</h2>
          <p class="text-white text-sm">
            Get inspired by the creative ways our customers attract talent with
            Homerun.
          </p>
        </div>
        <img src="/assets/images/gird-r.png" alt="" />
      </div>
    </div>
    
    <div class="flex md:flex-row flex-col mt-10 gap-10">
      <div class="basis-1/2 bg-white rounded-2xl md:py-10 py-5 md:px-16 px-8 space-y-3">
        <img src="/assets/images/capterra.png" alt="logo">
        <h1 class="font-extrabold text-brown-100 text-8xl">4,7</h1>
        <img src="/assets/images/stars.png" alt="stars">
        <p>Average review on Capterra, independent review site</p>
      </div>
      
      <div class="basis-1/2 bg-white rounded-2xl md:py-10 py-5 md:px-16 px-8 space-y-3">
        <img src="/assets/images/intercom.png" alt="logo">
        <h1 class="font-extrabold text-brown-100 text-8xl">98,9%</h1>
        <img src="/assets/images/emoje.png" alt="stars">
        <p>Average review on Capterra, independent review site</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped></style>