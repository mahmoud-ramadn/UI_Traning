<template>
  <div class="container">
    <div class="container mt-10 pt-20 pb-16 rounded-2xl bg-brown-100">
      <div class="max-w-[500px] mx-auto text-center flex flex-col items-center">
        <img src="/assets/images/Img_margin.png" alt="imgs" class="shrink-0">
        <h1 class="md:text-6xl text-3xl font-extrabold text-white pb-7">
          Start your free Homerun trial today
        </h1>
        <button class="rounded-full md:w-fit w-full bg-blue-200 text-white py-4 px-6 font-thin">
          Start hiring for free
        </button>
      </div>
    </div>

    <footer class=" py-16">
      <div class="container mx-auto px-4">
        <!-- Main Footer Content -->
        <div class="grid md:grid-cols-4 grid-cols-2 gap-10 mb-16">
          <!-- Column 1 -->
          <div class="md:col-span-1 col-span-2">
            <img src="@/assets/images/homeRunlogo.png" alt="Homerun Logo" class="mb-6 w-40">
            <p class="text-brown-100 mb-4">The radically easy-to-use hiring tool.</p>
            <div class="flex space-x-4">
              <a href="#" class="text-brown-100 hover:text-blue-200">
                <span class="sr-only">Twitter</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" class="text-brown-100 hover:text-blue-200">
                <span class="sr-only">LinkedIn</span>
                <svg class="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <!-- Column 2 -->
          <div>
            <h3 class="text-lg font-bold text-brown-100 mb-4">Product</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Features</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Pricing</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Integrations</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Updates</a></li>
            </ul>
          </div>

          <!-- Column 3 -->
          <div>
            <h3 class="text-lg font-bold text-brown-100 mb-4">Resources</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Blog</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Help Center</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Templates</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Community</a></li>
            </ul>
          </div>

          <!-- Column 4 -->
          <div>
            <h3 class="text-lg font-bold text-brown-100 mb-4">Company</h3>
            <ul class="space-y-2">
              <li><a href="#" class="text-brown-100 hover:text-blue-200">About</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Careers</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Contact</a></li>
              <li><a href="#" class="text-brown-100 hover:text-blue-200">Legal</a></li>
            </ul>
          </div>
        </div>

        <!-- Bottom Footer -->
        <div class="border-t border-brown-200 pt-8 flex md:flex-row flex-col justify-between items-center">
          <p class="text-brown-100 mb-4 md:mb-0">
            © 2023 Homerun. All rights reserved.
          </p>
          <div class="flex space-x-6">
            <a href="#" class="text-brown-100 hover:text-blue-200">Privacy Policy</a>
            <a href="#" class="text-brown-100 hover:text-blue-200">Terms of Service</a>
            <a href="#" class="text-brown-100 hover:text-blue-200">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
// Footer specific logic can be added here if needed
</script>

<style scoped>
/* Custom styles can be added here */
</style>