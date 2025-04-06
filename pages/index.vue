<template>
  <div class="container mx-auto px-4">
    <button 
      @click="showModule = !showModule"
      class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition mb-4"
    >
      {{ showModule ? 'إخفاء المكون' : 'إظهار المكون' }}
    </button>

    <LazyShowModule v-if="showModule" />

    <h1 class="text-2xl font-bold mb-6">hello world this is my home page</h1>
    <nuxt-link to="about" class="text-blue-600 hover:underline mb-8 inline-block">about</nuxt-link>
    
    <div v-if="!pending" class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      <div 
        v-for="(item, index) in data" 
        :key="index" 
        class="border-2 border-blue-700 h-[400px] p-8 text-center flex flex-col justify-center items-center gap-3 rounded-3xl hover:shadow-lg transition-shadow"
      >
        <h1 class="font-semibold text-lg">{{ item?.title }}</h1>
        <h1 class="text-gray-600">ID: {{ item?.id }}</h1>
        <span class="text-green-600 font-bold">{{ item?.price }} $</span>
        <img 
          :src="item?.image" 
          :alt="`${index}`" 
          loading="lazy"
          class="shrink-0 size-52 aspect-square rounded-full border-2 border-yellow-700 object-cover"
        >
      </div>
    </div>
    
    <div v-else class="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4">
      <div 
        v-for="(item, index) in 8" 
        :key="index" 
        class="h-[400px] p-8 rounded-3xl bg-gray-100/50 animate-pulse"
      >
        <div class="h-6 bg-gradients-one/50 rounded mb-4 w-3/4 mx-auto"></div>
        <div class="h-4 bg-gradients-one/50 rounded mb-4 w-1/2 mx-auto"></div>
        <div class="h-5 bg-gradients-one/50 rounded mb-6 w-1/4 mx-auto"></div>
        <div class="size-52 bg-gray-300 rounded-full mx-auto border-2 border-gray-400"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
}

const showModule = ref(false); 

const { data, pending } = await useFetch<Product[]>('https://fakestoreapi.com/products', {
  transform: (data: Product[]) => {
    return data.map((item) => ({
      id: item.id,
      title: item.title,
      price: item.price,
      image: item.image,
    }));
  },
  server: false,
  lazy: true,
  immediate: true
});
</script>