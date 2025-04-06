<template>
  <ClientOnly>

    <div class="px-4 flex justify-center    md:min-h-screen min-h-[68vh]    md:items-center py-12">
      <div
        class="galaxy lg:size-[1200px] md:size-[800px]   sm:size-[722px] size-[398px] shrink-0 rounded-full relative"
      >
        <!-- Planetary Orbit System -->
        <div class="absolute inset-0 overflow-visible">
          <!-- Inner Orbit Planets -->
          <div 
            v-for="(planet, index) in innerPlanets" 
            :key="'inner-'+index"
            class="planet absolute rounded-full"
            :style="{
              width: planet.size + 'px',
              height: planet.size + 'px',
              background: planet.color,
              boxShadow: planet.glow,
              animation: `orbit ${planet.orbitDuration}s linear infinite`,
              top: '50%',
              left: '50%',
              marginTop: `-${planet.size/2}px`,
              marginLeft: `-${planet.size/2}px`,
              transformOrigin: `${planet.orbitRadius}px center`
            }"
          >
            <div 
              v-if="planet.ring" 
              class="absolute inset-0 rounded-full border"
              :style="{
                borderColor: planet.ringColor,
                top: '-30%',
                left: '-30%',
                right: '-30%',
                bottom: '-30%',
                transform: 'rotate(45deg)'
              }"
            ></div>
          </div>
  
          <!-- Outer Orbit Planets -->
          <div 
            v-for="(planet, index) in outerPlanets" 
            :key="'outer-'+index"
            class="planet absolute rounded-full"
            :style="{
              width: planet.size + 'px',
              height: planet.size + 'px',
              background: planet.color,
              boxShadow: planet.glow,
              animation: `orbit ${planet.orbitDuration}s linear infinite`,
              top: '50%',
              left: '50%',
              marginTop: `-${planet.size/2}px`,
              marginLeft: `-${planet.size/2}px`,
              transformOrigin: `${planet.orbitRadius}px center`
            }"
          ></div>
        </div>
  
        <div
          class="absolute left-1/2 -translate-x-1/2 md:top-[107px] h-full container text-center top-20 lg:px-7 z-30"
        >
          <!-- Your existing content remains the same -->
          <button
            class="group relative hidden md:inline-flex items-center rounded-full justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300"
          >
            <span
              class="relative  px-5 py-1 rounded-full transition-all ease-in  duration-300 bg-primary-500/90 hover:bg-primary-600/90 text-white"
            >
              Secure your data
            </span>
          </button>
          
          <h1
            class="bg-identity-gradient font-bold md:text-6xl text-4xl bg-clip-text text-transparent leading-tight md:leading-normal"
          >
            Identity-hub: Next-gen Privacy Protection
          </h1>
          
          <p class="md:text-xl text-gray-100 md:my-9 my-6 max-w-2xl mx-auto">
            Make your data invisible by generating unlimited identities. The ultimate solution for privacy protection in your online activities and travel.
          </p>
          
          <div>
            <button
              class="group relative  rounded-2xl px-0.5    py-3.5  text-sm font-medium bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300"
            >
              <span
                class="relative px-5   py-3  rounded-full transition-all ease-in  duration-300 bg-primary-500/90 hover:bg-primary-600/90 text-white font-medium"
              >
                Get Started
              </span>
            </button>
            <button
              class="group   rounded-2xl mx-5  py-3 p-0.5   text-sm font-medium bg-gradient-to-br from-transparent to-transparent border border-indigo-400 hover:from-[#090EDB]/20 hover:to-[#8D1EA2]/20 transition-all duration-300"
            >
              <span
                class="relative px-5 py-2.5 transition-all ease-in duration-300 text-white font-medium"
              >
                Learn More
              </span>
            </button>
          </div>
          
          <div class="relative flex justify-between md:flex-row md:mt-[5rem] mt-[2rem] gap-3 items-center lg:px-[97px] sm:px-10">
            <img
              src="@/assets/images/hero.webp"
              alt="Privacy protection illustration"
              class="mx-auto absolute left-1/2 -translate-x-1/2 hidden md:block object-contain z-20 hover:scale-105 transition-transform duration-500"
            />
  
            <div class="flex flex-col items-center md:gap-y-[270px] gap-5 z-30">
              <div 
                v-for="(item, index) in contactCards.slice(0, 2)" 
                :key="index"
                class="p-3 gap-3 bg-gradient-to-t from-gray-100/10 border border-gray-600/30 rounded-xl hover:border-indigo-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center to-white/10 w-full max-w-xs backdrop-blur-sm"
              >
                <img :src="item.icon" :alt="item.type" class="w-8 h-8">
                <div class="text-start">
                  <p class="font-medium text-gray-300 text-sm">{{ item.type }}</p>
                  <p class="font-medium text-white md:text-base text-sm">{{ item.value }}</p>
                </div>
              </div>
            </div>
            
            <div class="flex flex-col items-center md:gap-y-[270px] gap-5 z-30">
              <div 
                v-for="(item, index) in contactCards.slice(2, 4)" 
                :key="index"
                class="p-3 gap-3 bg-gradient-to-t from-gray-100/10 border border-gray-600/30 rounded-xl hover:border-indigo-400/50 hover:shadow-lg hover:shadow-purple-500/20 transition-all duration-300 flex items-center to-white/10 w-full max-w-xs backdrop-blur-sm"
              >
                <img :src="item.icon" :alt="item.type" class="w-8 h-8">
                <div class="text-start">
                  <p class="font-medium text-gray-300 text-sm">{{ item.type }}</p>
                  <p class="font-medium text-white md:text-base text-sm">{{ item.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- Animated galaxy rings -->
        <div
          class="absolute inset-0 rounded-full border border-indigo-300/20 animate-pulse"
        ></div>
        <div
          class="absolute inset-[10%] rounded-full border border-blue-400/30 animate-pulse"
          style="animation-delay: 0.5s"
        ></div>
        <div
          class="absolute inset-[20%] rounded-full border border-purple-500/40 animate-pulse"
          style="animation-delay: 1s"
        ></div>
        <div
          class="absolute inset-[30%] rounded-full border border-pink-500/50 animate-pulse"
          style="animation-delay: 1.5s"
        ></div>
  
        <!-- Galaxy core glow -->
        <div
          class="absolute inset-[40%] rounded-full bg-gradient-to-br from-purple-600 to-pink-500 blur-[20px] opacity-70 animate-soft-pulse"
        ></div>
  
        <div
          v-for="i in 100"
          :key="i"
          class="star absolute rounded-full bg-white"
          :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            opacity: Math.random(),
            animation: `twinkle ${Math.random() * 3 + 2}s infinite alternate`,
          }"
        ></div>
  
        <!-- Bigger stars -->
        <div
          v-for="i in 20"
          :key="'big-' + i"
          class="star absolute rounded-full bg-white"
          :style="{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${Math.random() * 5 + 3}px`,
            height: `${Math.random() * 5 + 3}px`,
            opacity: Math.random() * 0.8 + 0.2,
            animation: `twinkle ${Math.random() * 5 + 3}s infinite alternate`,
          }"
        ></div>
        
        <!-- Shooting stars -->
        <div
          v-for="i in 3"
          :key="'shooting-' + i"
          class="shooting-star absolute bg-white rounded-full"
          :style="{
            top: `${Math.random() * 20}%`,
            left: `${Math.random() * 20}%`,
            width: '4px',
            height: '4px',
            animation: `shooting-star ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 10}s`
          }"
        ></div>
      </div>
    </div>

  </ClientOnly>
</template>

<script setup lang="ts">
import one from "@/assets/images/imgIcons/mail.png";
import two from "@/assets/images/imgIcons/phone.png";
import three from "@/assets/images/imgIcons/verify.png";
import four from "@/assets/images/imgIcons/creaditCard.png";

const contactCards = [
  { type: 'Email address', value: 'davidjx@gmail.com', icon: one },
  { type: 'Phone number', value: '+1 (555) 123-4567', icon:two },
  { type: 'Location', value: 'San Francisco', icon: three},
  { type: 'Social media', value: '@davidjx', icon:four }
];

// Planetary system data
const innerPlanets = [
  {
    size: 12,
    color: 'linear-gradient(135deg, #ff9a9e 0%, #fad0c4 100%)',
    orbitRadius: 120,
    orbitDuration: 20,
    glow: '0 0 10px #ff9a9e, 0 0 20px #fad0c4'
  },
  {
    size: 16,
    color: 'linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)',
    orbitRadius: 180,
    orbitDuration: 30,
    glow: '0 0 10px #a1c4fd, 0 0 20px #c2e9fb',
    ring: true,
    ringColor: 'rgba(200, 200, 255, 0.5)'
  }
];

const outerPlanets = [
  {
    size: 20,
    color: 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)',
    orbitRadius: 280,
    orbitDuration: 50,
    glow: '0 0 15px #f6d365, 0 0 25px #fda085'
  },
  {
    size: 14,
    color: 'linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)',
    orbitRadius: 350,
    orbitDuration: 70,
    glow: '0 0 10px #84fab0, 0 0 20px #8fd3f4'
  },
  {
    size: 18,
    color: 'linear-gradient(135deg, #a6c1ee 0%, #fbc2eb 100%)',
    orbitRadius: 420,
    orbitDuration: 90,
    glow: '0 0 12px #a6c1ee, 0 0 22px #fbc2eb'
  }
];
</script>

<style scoped>
.galaxy {
  background: radial-gradient(
    ellipse at center,
    rgba(59, 7, 100, 0.2) 0%,
    rgba(0, 0, 0, 0) 70%
  );
  box-shadow: 0 0 100px rgba(138, 43, 226, 0.3);
}

/* Planet animations */
@keyframes orbit {
  from {
    transform: rotate(0deg) translateX(var(--orbit-radius)) rotate(0deg);
  }
  to {
    transform: rotate(360deg) translateX(var(--orbit-radius)) rotate(-360deg);
  }
}

.planet {
  --orbit-radius: 100px;
  will-change: transform;
  z-index: 5;
}

@keyframes twinkle {
  0% {
    opacity: 0.2;
  }
  100% {
    opacity: 1;
  }
}

@keyframes soft-pulse {
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 0.8;
  }
}

@keyframes shooting-star {
  0% {
    transform: translateX(0) translateY(0);
    opacity: 0;
  }
  10% {
    opacity: 1;
  }
  70% {
    opacity: 1;
  }
  100% {
    transform: translateX(500px) translateY(300px);
    opacity: 0;
  }
}

.star {
  will-change: opacity;
}

.shooting-star {
  will-change: transform, opacity;
}

.animate-soft-pulse {
  animation: soft-pulse 4s ease-in-out infinite;
}

.galaxy::before {
  content: "";
  position: absolute;
  top: -50%;
  left: -50%;
  right: -50%;
  bottom: -50%;
  background: radial-gradient(
      ellipse at 30% 30%,
      rgba(138, 43, 226, 0.1) 0%,
      transparent 50%
    ),
    radial-gradient(
      ellipse at 70% 70%,
      rgba(75, 0, 130, 0.1) 0%,
      transparent 50%
    );
  animation: rotate 120s linear infinite;
  z-index: -1;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

@media (max-width: 768px) {
  .galaxy {
    box-shadow: 0 0 50px rgba(138, 43, 226, 0.3);
  }
  
  .planet {
    transform: scale(0.7);
    --orbit-radius: calc(var(--orbit-radius) * 0.7);
  }
}
</style>