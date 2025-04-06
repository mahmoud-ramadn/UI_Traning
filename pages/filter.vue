<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">المشاريع</h1>
        <div class="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 class="text-xl font-semibold mb-4">تصفية المشاريع</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">الفئة</label>
          <select 
            v-model="filters.category"
            @change="applyFilters"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">كل الفئات</option>
            <option v-for="cat in categories" :key="cat.id" :value="cat.id">
              {{ cat.name }}
            </option>
          </select>
        </div>
        
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">الحالة</label>
          <select 
            v-model="filters.status"
            @change="applyFilters"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="">كل الحالات</option>
            <option value="active">نشط</option>
            <option value="completed">مكتمل</option>
            <option value="pending">قيد الانتظار</option>
          </select>
        </div>
        
        <!-- فلتر حسب التاريخ -->
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-1">ترتيب حسب</label>
          <select 
            v-model="filters.sort"
            @change="applyFilters"
            class="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            <option value="newest">الأحدث</option>
            <option value="oldest">الأقدم</option>
            <option value="name">بالاسم (أ-ي)</option>
          </select>
        </div>
      </div>
    </div>
    
    <!-- عرض حالة التحميل -->
    <div v-if="pending" class="text-center py-8">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto"></div>
      <p class="mt-2 text-gray-600">جاري تحميل البيانات...</p>
    </div>
    
    <!-- عرض المشاريع -->
    <div v-else>
      <div v-if="projects.length === 0" class="text-center py-8 text-gray-500">
        لا توجد مشاريع متطابقة مع معايير البحث
      </div>
      
      <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div 
          v-for="project in projects" 
          :key="project.id"
          class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
        >
          <div class="p-6">
            <div class="flex justify-between items-start mb-2">
              <h3 class="text-xl font-bold text-gray-800">{{ project.title }}</h3>
              <span 
                class="px-2 py-1 text-xs rounded-full"
                :class="{
                  'bg-green-100 text-green-800': project.status === 'active',
                  'bg-blue-100 text-blue-800': project.status === 'completed',
                  'bg-yellow-100 text-yellow-800': project.status === 'pending'
                }"
              >
                {{ getStatusText(project.status) }}
              </span>
            </div>
            <p class="text-gray-600 mb-4">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span 
                v-for="tag in project.tags" 
                :key="tag"
                class="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full"
              >
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div v-if="totalPages > 1" class="flex justify-center mt-8">
        <nav class="flex items-center gap-1">
          <button
            v-for="page in totalPages"
            :key="page"
            @click="goToPage(page)"
            class="px-4 py-2 rounded-md"
            :class="{
              'bg-blue-500 text-white': currentPage === page,
              'bg-white text-gray-700 hover:bg-gray-100': currentPage !== page
            }"
          >
            {{ page }}
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const router = useRouter()

console.log(route.path,route.query);
console.log(router.currentRoute.value);


const filters = reactive({
  category: route.query.category || '',
  status: route.query.status || '',
  sort: route.query.sort || 'newest',
  page: route.query.page || 1
})
console.log(new URLSearchParams(filters).toString());


const categories = ref([
  { id: 'web', name: 'تطوير الويب' },
  { id: 'mobile', name: 'تطبيقات الجوال' },
  { id: 'design', name: 'التصميم' },
  { id: 'marketing', name: 'التسويق' }
])

const { data: projectsData, pending, refresh } = await useFetch(() => `/api/projects?${new URLSearchParams(filters).toString()}`)
 
const projects = computed(() => projectsData.value?.data || [])
const totalPages = computed(() => projectsData.value?.totalPages || 1)
const currentPage = computed(() => parseInt(filters.page));



const applyFilters = () => {
  filters.page = 1 // العودة للصفحة الأولى عند تغيير الفلاتر
  router.push({ query: filters })
  console.log((filters));

  refresh()
}

const goToPage = (page) => {
  filters.page = page
  router.push({ query: filters })
    console.log(currentPage.value);

  refresh()
}

const getStatusText = (status) => {
  const statusMap = {
    active: 'نشط',
    completed: 'مكتمل',
    pending: 'قيد الانتظار'
  }
  return statusMap[status] || status
}
</script>