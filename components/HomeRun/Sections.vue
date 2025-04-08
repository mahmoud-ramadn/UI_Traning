<template>
  <div class="py-10 md:py-20 space-y-20 md:space-y-32">
    <div 
      v-for="(item, index) in SectionsData" 
      :key="item.id"
      class="container mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div 
        class="flex flex-col items-center gap-10 md:gap-16 lg:gap-24"
        :class="{'md:flex-row-reverse': index % 2 !== 0, 'md:flex-row': index % 2 === 0}"
      >
        <!-- Content Section -->
        <div class="w-full md:w-1/2 space-y-4 md:space-y-6">
          <small class="text-lg md:text-xl text-brown-100 font-medium tracking-wider">
            {{ item.smailTitle }}
          </small>
          <h2 class="font-extrabold text-4xl sm:text-5xl lg:text-6xl text-dark-100 leading-tight">
            {{ item.title }}
          </h2>
          <p class="font-medium text-lg md:text-xl text-dark-100/90 mt-6 leading-relaxed">
            {{ item.des }}
          </p>
          <button class="text-white bg-brown-100 hover:bg-brown-200  rounded-full text-lg mt-10 py-3 px-8 md:py-4 md:px-10 shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
            Learn more
          </button>
        </div>

        <!-- Image Section -->
        <div class="w-full md:w-1/2 flex justify-center">
          <img 
            :src="item.img" 
            :alt="item.title" 
            class="max-w-full h-auto rounded-xl shadow-2xl object-cover transition-transform duration-500 hover:scale-105"
            :class="{'md:ml-auto': index % 2 === 0, 'md:mr-auto': index % 2 !== 0}"
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import one from '../../assets/images/Sections/one.png'
import two from '../../assets/images/Sections/two.png' // Example additional image
import three from '../../assets/images/Sections/three.png' // Example additional image

const SectionsData = [
  {
    id: '1',
    smailTitle: 'Career site & Job posts',
    title: 'The best-looking career site out there (built by you)',
    des: 'With an easy no-code builder you can create a custom career page and job posts that perfectly match your brand.',
    img: one
  },
  {
    id: '2',
    smailTitle: 'Hiring Pipeline',
    title: 'Streamline your hiring process',
    des: 'Our intuitive pipeline helps you track candidates from application to hire with customizable stages.',
    img: two
  },
  {
    id: '3',
    smailTitle: 'Team Collaboration',
    title: 'Work together seamlessly',
    des: 'Share feedback, rate candidates, and make decisions faster with built-in collaboration tools.',
    img: three
  }
]
</script>

<style scoped>
button, img {
  transition: all 0.3s ease;
}


/* Responsive typography adjustments */
@media (max-width: 640px) {
  h2 {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }
}
</style>