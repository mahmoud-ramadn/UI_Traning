<template>
    <div class=" bg-dark-200 rounded-3xl pt-24  pb-5 text-center ">
        <div class=" max-w-[900px] mx-auto md:px-24 px-4">
            <h3 class=" text-yellow-100 text-2xl">Templates</h3>
            <h1 class=" text-white font-extrabold  text-5xl">Start hiring in minutes with helpful
    hiring templates</h1>

    <button class=" bg-white py-4 px-6 rounded-full  md:w-fit w-full text-lg mt-11">Explore all templates</button>
        </div>
         <div class=" w-full   p-5  grid lg:grid-cols-3 mt-6 grid-cols-1 justify-center md:grid-cols-2 gap-5">
      <div v-for="(itme,index) in templatesData" :key="index" class=" bg-brown-300  text-start  rounded-2xl">
        <div class=" px-9 pt-7 text-white relative">
            <img src="/assets/images/arrow-up.png" alt="arrow_up" class=" absolute  right-3 top-5">
            <p class="  text-xl">{{ itme.tiltle }}</p>
           <p class="  text-xl">{{ itme.paragrph }}</p>
        </div>
      <img :src="itme.img" alt="icon_img" class=" mt-10 shrink-0 object-cover" >
      </div>
     
    </div>
    </div>
</template>

<script setup lang="ts">
import one from '@/assets/images/tempelts/01.png';
import two from '@/assets/images/tempelts/02.png';
import three from '@/assets/images/tempelts/03.png';
const templatesData=[
    {
        id:'1',
        tiltle:'15 interview',
        paragrph:'question templates',
        img:one
    },
    {
        id:'2',
        tiltle:'15 interview',
        paragrph:'question templates',
        img:two
    },
    {
        id:'3',
        tiltle:'15 interview',
        paragrph:'question templates',
        img:three
    },
]

</script>

<style scoped>

</style>