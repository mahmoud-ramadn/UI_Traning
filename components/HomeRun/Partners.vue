<template>
  <div class="py-11">
    <h1 class="text-2xl text-brown-200 font-medium text-center">join 1000+ SMBs hiring with homerun</h1>
    <ClientOnly>
      <swiper-container 
        ref="containerRef" 
        :pagination="{
          clickable: true,
          dynamicBullets: true
        }" 
        :loop="true"
        :autoplay="true"
        :breakpoints="breakpoints"
        class="custom-pagination  "
      >
        <swiper-slide
          v-for="(slide, idx) in SwiperContetent"
          :key="idx"
          class=" flex items-start justify-center "
        >
          <div :key="idx">
            <img :src="slide.img" alt="img-parntenrs" class=" rounded-full">
          </div>
        </swiper-slide>
      </swiper-container>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import one  from  '../../assets/images/partners/64a68659254f51aa74fabd27_denham-logo.png.png'
import two  from  '../../assets/images/partners/64a68659fe444433d7ffc312_gehl-logo.png.png'
import three  from  '../../assets/images/partners/64a6865a39b7be36f1fdb863_mrmarvis-logo.png.png'
import four  from  '../../assets/images/partners/64a6865a3d1c004d94ced853_opensocial-logo.png.png'
import  five  from  '../../assets/images/partners/64a6865b4faf9d755362c5d2_tbwa-logo.png.png'
import six  from  '../../assets/images/partners/64a6865b6cb644441b03a681_volkshotel-logo.png.png'
import seven  from  '../../assets/images/partners/64a6865bf740ca4969e6e735_patta-logo.png.png'
const SwiperContetent=[
    {
        id:'1',
        img:one
    },
    {
        id:'2',
        img:two
    },
    {
      id:'3',
      img:three
    },{
      id:'4',
      img:four
    },
    {
      id:'5',
      img:five
    },
    {
      id:6,
      img:six
    },
    {
      id:7,
      img:seven
    }
]

const breakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // When window width is >= 640px
  640: {
    slidesPerView: 2,
    spaceBetween: 20
  },
  // When window width is >= 768px
  768: {
    slidesPerView: 3,
    spaceBetween: 30
  },
  // When window width is >= 1024px
  1024: {
    slidesPerView: 5,
    spaceBetween: 40
  }
}
</script>

<style scoped>
/* Your custom styles */
</style>