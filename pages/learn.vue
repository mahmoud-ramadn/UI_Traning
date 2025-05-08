<!-- components/HeroSection.vue -->
<template>
  <div class="w-full relative">
    <!-- Hero Section with Background Image -->
    <div class="relative h-96 bg-cover bg-center" style="background-image: url('/refrigeration-store.jpg')">
      <div class="absolute inset-0 bg-black bg-opacity-50"></div>
      <div class="container mx-auto px-4 h-full relative z-10 flex flex-col items-center justify-center">
        <!-- Logo -->
        <div class="absolute top-4 right-4">
          <!-- <img src="/almaseya-logo.svg" alt="Almaseya" class="h-12" /> -->
        </div>
        
        <!-- Search Bar -->
        <div class="w-full max-w-md mx-auto mb-12">
          <div class="relative">
            <input type="text" placeholder="بحث" class="w-full rounded-full py-2 px-4 text-right" />
            <button class="absolute left-2 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white p-2 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-4 w-4">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Arabic Heading -->
        <h1 class="text-4xl font-bold text-white text-center mb-4 rtl">
          ريادة في صناعة التبريد والتكييف بخبرة عالمية
        </h1>
        
        <!-- Arabic Subheading -->
        <p class="text-lg text-white text-center mb-8 rtl">
          جودة عالمية بخبرة 30 عاماً في تصنيع الثلاجات، غرف التبريد، والتكييف
        </p>
        
        <!-- Contact Button -->
        <button class="bg-white text-blue-800 py-2 px-6 rounded-md hover:bg-blue-100 transition duration-300 rtl">
          تواصل معنا الآن
        </button>
      </div>
    </div>
    
    <!-- About Us Section -->
    <div class="bg-gray-100 py-16">
      <div class="container mx-auto px-4">
        <div class="flex flex-col lg:flex-row items-center">
          <!-- Right side: Images -->
          <div class="w-full lg:w-1/2 mb-8 lg:mb-0 flex flex-col gap-4">
            <div class="relative h-64 overflow-hidden rounded-lg">
              <!-- <img src="/refrigerator.jpg" alt="Refrigerator" class="w-full h-full object-cover" /> -->
            </div>
            <div class="relative h-64 overflow-hidden rounded-lg">
              <!-- <img src="/factory.jpg" alt="Factory" class="w-full h-full object-cover" /> -->
            </div>
          </div>
          
          <!-- Left side: Text Content -->
          <div class="w-full lg:w-1/2 bg-blue-700 text-white p-8 rounded-lg rtl">
            <h2 class="text-2xl font-bold mb-6 text-right">من نحن</h2>
            <p class="text-right leading-relaxed mb-4">
              نحن مصنع متخصص لانواع الثلاجات من مبردات وثلاجات عرض السوبرماركت وغرف التبريد والتجميد والتبريد والتخزين المبردة وأجهزة تنقية الهواء وأعمال التكييف والتلطيف. يقع المصنع في هيئة المدن الصناعية بخميس مشيط على مساحة 11000 م احدى عشر الف متر. ويوجد لنا تنافس المنتجات الاوربية والأمريكية وخبرة تفوق موظفينا تتجاوز الثلاثين سنة.
            </p>
            
            <h3 class="text-xl font-bold mb-4 text-right">رؤيتنا</h3>
            <p class="text-right leading-relaxed">
              أن نكون المصنع الأول في العالم العربي في التبريد وأجهزة تنقية الهواء بأعلى معايير الجودة والتميز
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.rtl {
  direction: rtl;
}
</style>