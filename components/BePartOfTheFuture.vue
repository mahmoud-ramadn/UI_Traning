<template>
  <div class="container relative flex justify-center items-center min-h-[80vh] py-20 overflow-hidden">
    <!-- Background elements -->
    <div class="absolute inset-0 overflow-hidden -z-10">
      <div class="absolute inset-0 bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 opacity-90"></div>
      <div class="absolute inset-0 bg-[url('@/assets/images/dot-grid.png')] opacity-10"></div>
    </div>

    <!-- Content -->
    <div class="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-y-6 justify-center items-center text-center z-10 px-4 w-full max-w-4xl">
      <h1 class="font-bold text-4xl sm:text-5xl md:text-6xl text-center text-white leading-tight">
        Be part of the future of <span class="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">IdentityHub</span>
      </h1>
      <p class="text-white/80 text-lg md:text-xl text-center max-w-2xl">
        Unleash the power of AI within IdentityHub. Upgrade your digital identity management with our cutting-edge platform.
      </p>
      <button class="group relative bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] text-white rounded-full px-8 py-4 mt-6 cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/30">
        <span class="relative z-10 flex items-center gap-2">
          Get Started
          <svg class="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>
        </span>
        <span class="absolute inset-0 bg-gradient-to-br from-[#8D1EA2] to-[#090EDB] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
      </button>
    </div>

    <!-- Animated gradient circles -->
    <div class="py-10 relative w-full max-w-2xl aspect-square">
      <!-- Pulsing rings -->
      <div v-for="(ring, index) in rings" :key="index"
        class="absolute rounded-full border"
        :class="ring.border"
        :style="{
          inset: `${ring.inset}%`,
          animation: `pulse 6s infinite ${index * 0.5}s cubic-bezier(0.4, 0, 0.6, 1)`
        }"
      ></div>
      
      <!-- Core glow -->
      <div class="absolute inset-[40%] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[60px] opacity-80 animate-soft-pulse"></div>
      
      <!-- Floating particles -->
      <div v-for="(particle, index) in particles" :key="'particle-'+index"
        class="absolute rounded-full bg-white"
        :style="{
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          left: `${particle.left}%`,
          top: `${particle.top}%`,
          opacity: particle.opacity,
          animation: `float ${particle.duration}s infinite ${particle.delay}s ease-in-out alternate`
        }"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const rings = [
  { inset: 0, border: 'border-indigo-300/20' },
  { inset: 10, border: 'border-blue-400/30' },
  { inset: 20, border: 'border-purple-500/40' },
  { inset: 30, border: 'border-pink-500/50' }
]

const particles = Array.from({ length: 15 }, () => ({
  size: Math.random() * 5 + 2,
  left: Math.random() * 100,
  top: Math.random() * 100,
  opacity: Math.random() * 0.3 + 0.1,
  duration: Math.random() * 10 + 5,
  delay: Math.random() * 5
}))
</script>

<style scoped>
@keyframes pulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.05); opacity: 0.3; }
}

@keyframes soft-pulse {
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 0.9; transform: scale(1.05); }
}

@keyframes float {
  0% { transform: translateY(0) translateX(0); }
  100% { transform: translateY(-20px) translateX(10px); }
}

.animate-soft-pulse {
  animation: soft-pulse 8s infinite ease-in-out;
}
</style>