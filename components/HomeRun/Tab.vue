<script setup lang="ts">
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface CardItem {
  id: string;
  title: string;
  des: string;
  img: string;
  color: string;
}

// Dynamic import for better performance
const imageModules = import.meta.glob("@/assets/images/Blogs_img/*.png", {
  eager: true,
});

// Import static images as fallback
import one from "@/assets/images/Blogs_img/div.card-aowhome-image-container-1.png";
import two from "@/assets/images/Blogs_img/div.card-aowhome-image-container-2.png";
import three from "@/assets/images/Blogs_img/div.card-aowhome-image-container.png";

const CardsText: CardItem[] = [
  {
    id: "1",
    title: "Homerun's Guide to Hiring Process",
    des: "Helps save you from the chaos of an unstructured hiring process.",
    img: one,
    color: "bg-[#07A2BB]",
  },
  {
    id: "2",
    title: "Homerun's Guide to Hiring Process",
    des: "Helps save you from the chaos of an unstructured hiring process.",
    img: two,
    color: "bg-[#E7D472]",
  },
  {
    id: "3",
    title: "Homerun's Guide to Hiring Process",
    des: "Helps save you from the chaos of an unstructured hiring process.",
    img: three,
    color: "bg-[#EDCBCC]",
  },
  {
    id: "4", // Fixed duplicate ID
    title: "Homerun's Guide to Hiring Process",
    des: "Helps save you from the chaos of an unstructured hiring process.",
    img: one,
    color: "bg-[#07A2BB]",
  },
];

const breakpoints = {
  0: {
    slidesPerView: 1.1,
    spaceBetween: 10,
  },
  320: {
    slidesPerView: 1.1,
    spaceBetween: 15,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 2.5,
    spaceBetween: 15,
  },
  1024: {
    slidesPerView: 3,
    spaceBetween: 20,
  },
  1280: {
    slidesPerView: 3.2,
    spaceBetween: 20,
  },
};

const swiperOptions = {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  loop: true,
  grabCursor: true,
  centeredSlides: false,
  slideToClickedSlide: true,
  pagination: false,
  navigation: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
};

const isLoading = ref(true);
const error = ref<string | null>(null);

onMounted(() => {
  // Simulate loading state
  setTimeout(() => {
    isLoading.value = false;
  }, 1000);
});
</script>

<template>
  <ClientOnly>
    <Tabs default-value="guides" class="w-full max-w-7xl mx-auto ">
      <TabsList
        class="grid grid-cols-2 bg-gray-300 w-[280px] mx-auto rounded-lg shadow-sm border border-gray-200 overflow-hidden"
        aria-label="Content categories"
      >
        <TabsTrigger
          value="guides"
          class="py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"
              />
            </svg>
            Guides
          </span>
        </TabsTrigger>
        <TabsTrigger
          value="articles"
          class="py-3 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        >
          <span class="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fill-rule="evenodd"
                d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z"
                clip-rule="evenodd"
              />
            </svg>
            Articles
          </span>
        </TabsTrigger>
      </TabsList>

      <TabsContent value="guides" class="mt-8">
        <ClientOnly>
          <div
            v-if="isLoading"
            class="flex justify-center items-center min-h-[300px]"
          >
            <div
              class="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"
            ></div>
          </div>

          <div v-else-if="error" class="text-center text-red-500 p-4">
            {{ error }}
          </div>

          <swiper-container
            v-else
            v-bind="swiperOptions"
            :breakpoints="breakpoints"
            :spaceBetween="0"
            class="partner-swiper md:p-4"
          >
            <swiper-slide
              v-for="slide in CardsText"
              :key="slide.id"
              class="md:p-5 p-1.5"
            >
              <div
                class="w-full rounded-xl shadow-md   overflow-hidden pt-3 grayscale md:p-2 hover:grayscale-0 transition-all duration-300 hover:rounded-xl hover:shadow-lg md:hover:scale-[1.05] hover:scale-[1.02] group"
                :class="slide.color"
              >
                <div class="relative aspect-video">
                  <img
                    :src="slide.img"
                    :alt="`${slide.title} image`"
                    class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div class="py-5 px-6 text-center">
                  <h2 class="text-white font-bold text-lg mb-2">
                    {{ slide.title }}
                  </h2>
                  <p class="text-white text-sm opacity-90">{{ slide.des }}</p>
                </div>
              </div>
            </swiper-slide>
          </swiper-container>
        </ClientOnly>
      </TabsContent>

      <TabsContent value="articles" class="mt-8">
        <div class="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 text-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-16 w-16 mx-auto text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="1"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 class="mt-4 text-xl font-medium text-gray-700 dark:text-gray-300">
            Coming Soon
          </h3>
          <p class="mt-2 text-gray-500 dark:text-gray-400">
            Our articles section is currently under development.
          </p>
        </div>
      </TabsContent>
    </Tabs>
  </ClientOnly>
</template>

<style>
.partner-swiper {
  --swiper-navigation-color: theme("colors.primary.100");
  --swiper-navigation-size: 24px;
  --swiper-pagination-bullet-size: 8px;
  --swiper-pagination-bullet-horizontal-gap: 4px;
  --swiper-pagination-color: theme("colors.primary.100");
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

/* Custom scrollbar for better UX */
.partner-swiper::-webkit-scrollbar {
  height: 6px;
}

.partner-swiper::-webkit-scrollbar-track {
  background: #f1f1f1;
  border-radius: 3px;
}

.partner-swiper::-webkit-scrollbar-thumb {
  background: theme("colors.primary.100");
  border-radius: 3px;
}

.partner-swiper::-webkit-scrollbar-thumb:hover {
  background: theme("colors.primary.100");
  opacity: 0.8;
}
</style>
