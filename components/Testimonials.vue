<template>
  <div class="py-24">
    <div class="flex justify-center">
      <button class="group relative inline-flex items-center z-30 rounded-full justify-center p-0.5 mb-6 overflow-hidden font-medium text-white bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300 shadow-lg">
        <span class="relative px-5 py-2 rounded-full bg-primary-500/90 hover:bg-primary-600/90 transition-all duration-300">
          Testimonials
        </span>
      </button>
    </div>
            
    <h1 class="text-white font-bold text-4xl md:text-6xl bg-clip-text text-transparent leading-tight md:leading-normal mx-auto max-w-2xl text-center mb-4">
      What's our user <span class="bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] bg-clip-text text-transparent">Sayings</span> about us
    </h1>
    
    <div class="container relative">
      <ClientOnly>
        <swiper-container 
          ref="containerRef" 
          :pagination="{
            clickable: true,
            dynamicBullets: true
          }" 
          :loop="true"
          class="custom-pagination"
        >
          <swiper-slide
            v-for="(slide, idx) in [1,2,3]"
            :key="idx"
            class="bg-gradient-to-br from-primary-600 to-[#53546C] text-center p-10 rounded-xl"
          >
            <div class="bg-[#CAD1E9]/10 p-6 rounded-xl">
              <div class="w-fit flex items-center gap-4 text-white">
                <img src="/assets/images/imgIcons/phone.png" alt="" class="size-11 rounded-full">
                <div class="text-start w-fit">
                  <h2>David J. Karem</h2>
                  <p>Businessmen 1 day ago</p>
                </div>
              </div>
              <p class="mt-5 text-white">Forget about spam, advertising mailings, hacking and attacking robots. Keep your real mailbox clean and secure. Temp Mail provides temporary, secure, anonymous, free, disposable email address. Stalkers and disgruntled acquaintances use the Internet to find addresses, phone numbers and other personal details about their targets. Identity thieves use personal information numbers and other personal details.</p>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
      
      <button @click="swiper.prev()" aria-label="Previous Slide" class="absolute top-1/2 left-0 transform -translate-y-1/2 z-10 bg-gradient-to-br from-[#090EDB] to-[#E73DC4] rounded-full p-2 md:block hidden">
        <img src="@/assets/images/imgIcons/arrow-right-01.png" alt="Previous Slide" class="rotate-180">
      </button>
      <button @click="swiper.next()" aria-label="Next Slide" class="absolute top-1/2 right-0 transform -translate-y-1/2 z-10 bg-gradient-to-br from-[#090EDB] to-[#E73DC4] rounded-full p-2 md:block hidden">
        <img src="@/assets/images/imgIcons/arrow-right-01.png" alt="Next Slide">
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
const containerRef = ref(null)
const swiper = useSwiper(containerRef)
</script>

<style scoped>
/* Custom pagination styles */
.custom-pagination::part(pagination) {
  position: relative;
  margin-top: 2rem;
}

.custom-pagination::part(bullet) {
  width: 12px;
  height: 12px;
  background:white; /* Purple base color */
  opacity: 0.5;
  transition: all 0.3s ease;
}

.custom-pagination::part(bullet-active) {
  width: 30px;
  border-radius: 6px;
  background: linear-gradient(to right, #090EDB, #E73DC4); /* Your gradient colors */
  opacity: 1;
}

/* Optional: hover effects */
.custom-pagination::part(bullet):hover {
  opacity: 0.8;
}

/* Navigation button hover effects */
button:hover {
  transform: translateY(-50%) scale(1.1);
  transition: transform 0.3s ease;
}
</style>