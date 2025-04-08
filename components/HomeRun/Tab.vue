<script setup lang="ts">
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs'

// Dynamic import for better performance (optional)
const imageModules = import.meta.glob('@/assets/images/Blogs_img/*.png')
// const SwiperContent = await Promise.all(
//   Object.entries(imageModules).map(async ([path], index) => {
//     const module = await imageModules[path]()
//     return {
//       id: String(index + 1),
//       img: module.default,
//       name: path.split('/').pop()?.replace('.png.png', '') || `partner-${index+1}`,
//     }
//   })
// )
import one from '@/assets/images/Blogs_img/div.card-aowhome-image-container-1.png'
import two from '@/assets/images/Blogs_img/div.card-aowhome-image-container-2.png'
import  three from '@/assets/images/Blogs_img/div.card-aowhome-image-container.png'
const CardsText=[
    {
    id:'1',
    title:"Homerun's Guide to Hiring Process",
    des:'Helps save you from the chaos of an unstructured hiring process.',
    img:one,
    color:'bg-[#07A2BB]'
    },
    {
    id:'2',
    title:"Homerun's Guide to Hiring Process",
        des:'Helps save you from the chaos of an unstructured hiring process.',

    img:two,
    color:'bg-[#E7D472]'
    },
    {
    id:'3',
    title:"Homerun's Guide to Hiring Process",
        des:'Helps save you from the chaos of an unstructured hiring process.',

    img:three,
    color:'bg-[#EDCBCC]'
    },
     {
    id:'1',
    title:"Homerun's Guide to Hiring Process",
        des:'Helps save you from the chaos of an unstructured hiring process.',

    img:one,
    color:'bg-[#07A2BB]'
    },
]

const breakpoints = {
  0: {
    slidesPerView: 1.1,
    spaceBetween: 10
  },
  320: {
    slidesPerView: 1.1,
    spaceBetween: 15
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 15
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20
  },
  1280: {
    slidesPerView: 3.2,
    spaceBetween: 20
  }
}

const swiperOptions = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  slideToClickedSlide: true
}
</script>

<template>
  <Tabs default-value="guides" class="w-full max-w-7xl mx-auto px-4">
    <TabsList class="grid grid-cols-2  bg-gray-300  w-[280px] mx-auto rounded-lg shadow-sm border border-gray-200  overflow-hidden">
      <TabsTrigger 
        value="guides"
        class="py-3 data-[state=active]:bg-white  data-[state=active]:text-primary data-[state=active]:font-medium transition-all duration-300 "
      >
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z" />
          </svg>
          Guides
        </span>
      </TabsTrigger>
      <TabsTrigger 
        value="articles"
        class="py-3 data-[state=active]:bg-white  data-[state=active]:text-primary data-[state=active]:font-medium transition-all duration-300 "
      >
        <span class="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clip-rule="evenodd" />
          </svg>
          Articles
        </span>
      </TabsTrigger>
    </TabsList>
    
    <TabsContent value="guides" class="mt-8">
      <ClientOnly>
        <swiper-container 
          v-bind="swiperOptions"
          :breakpoints="breakpoints"
          class="partner-swiper"
        >
          <swiper-slide
            v-for="(slide, idx) in CardsText"
            :key="idx"
          >
            <div  class="w-full rounded-xl shadow-md overflow-hidden   grayscale hover:grayscale-0 transition-all duration-200   hover:shadow-lg hover:scale-[1.02]" :class=" slide.color">
              <img 
                :src="slide.img" 
                :alt="`${slide.id} logo`"
                class="  shrink-0  object-cover  transition-all duration-500"
                loading="lazy"
              >
              <div class=" py-5 px-10 text-center">
                  <h1 class=" text-white font-bold ">{{ slide.title }}</h1>
                  <p class=" text-white ">{{ slide.des }}</p>
              </div>
            </div>
          </swiper-slide>
        </swiper-container>
      </ClientOnly>
    </TabsContent>
    
    <TabsContent value="articles" class="mt-8">
      <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 mx-auto text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        <h3 class="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">Coming Soon</h3>
        <p class="mt-2 text-gray-500 dark:text-gray-400">Our articles section is currently under development.</p>
      </div>
    </TabsContent>
  </Tabs>
</template>

<style>
.partner-swiper {
  /* --swiper-navigation-color: theme('colors.primary.DEFAULT'); */
  --swiper-navigation-size: 24px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  padding: 1rem 0 3rem !important;
}

.swiper-slide {
  transition: transform 0.3s ease;
}

.swiper-slide:hover {
  transform: translateY(-5px);
}

@media (max-width: 768px) {
  .partner-swiper {
    padding: 1rem 0 2.5rem !important;
  }
}
</style>