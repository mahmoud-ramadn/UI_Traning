<template>
  <div
    class="text-center flex flex-col items-center justify-center  py-24"
  >
    <button
      class="group relative hidden md:inline-flex items-center  z-30 rounded-full justify-center p-0.5 mb-4 mr-2 overflow-hidden text-sm font-medium text-gray-900 group bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300"
    >
      <span
        class="relative px-4 py-2 rounded-full transition-all ease-in duration-300 bg-primary-500/90 hover:bg-primary-600/90 text-white"
        >Services
      </span>
    </button>
    <h1
      class="text-white font-bold md:text-6xl text-4xl bg-clip-text text-transparent leading-tight md:leading-normal mx-auto max-w-2xl text-center"
    >
      See our services for secure your
      <span
        class="bg-identity-gradient font-bold md:text-6xl text-4xl bg-clip-text text-transparent leading-tight md:leading-normal"
      >
        Data</span
      >
    </h1>
    <p
      class="md:text-xl text-gray-100 md:my-9 my-6 max-w-2xl text-center mx-auto"
    >
      Make your data invisible by generating unlimited identities. The
      next-level in privacy protection for online and travel.
    </p>

    <div
      class="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-10 overflow-hidden"
    >
      <div
        v-for="(itme, index) in CardsData"
        :key="index"
        class="clip rounded-xl  bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] p-0.5  text-white"
      >
        <div
          class="bg-primary-500/90 w-full h-full rounded-xl relative p-8 flex justify-between flex-col"
        >
          <div
            class="size-80 bg-gradient-to-br from-[#090EDB]/30 absolute top-4 to-[#8D1EA2]/20 shadow-2xl blur-3xl backdrop:blur-md rounded-full"
          ></div>
          <img :src="itme.img" alt="icon" class="size-14" />
          <h3 class="text-3xl font-medium">{{ itme.title }}</h3>
          <p class="text-xl">{{ itme.description }}</p>
          <button class="flex items-center text-xl">
            Explore More
            <img
              src="@/assets/images/imgIcons/arrow-right-01.png"
              alt="Icon_img"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import one from "@/assets/images/imgIcons/01.png";
import two from "@/assets/images/imgIcons/two.png";
import three from "@/assets/images/imgIcons/three.png";

const CardsData = [
  {
    id: "1",
    title: "Personal Information removal",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    img: one,
  },
  {
    id: "2",
    title: "Cloaking Alias Profiles",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    img: two,
  },
  {
    id: "3",
    title: "Virtual identities Security",
    description:
      "Lets users quickly find answers to their questions without having to search through multiple sources.",
    img: three,
  },
];
</script>

<style scoped>
.clip {
  clip-path: polygon(79% 0, 100% 23%, 100% 108%, 0 359%, 0 0);
  overflow: hidden;
  position: relative;
  z-index: 1;
}



</style>
