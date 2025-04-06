<template>
    <div class="relative w-full py-24 overflow-hidden">
        <img src="@/assets/images/imgIcons/circel.png" alt="Decoration circle" class="absolute top-0 right-0 z-10 opacity-70">
        <div class="container mx-auto px-4 relative z-20">
            <!-- Pricing Badge -->
            <div class="flex justify-center">
                <button class="group relative inline-flex items-center z-30 rounded-full justify-center p-0.5 mb-6 overflow-hidden font-medium text-white bg-gradient-to-br from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300 shadow-lg">
                    <span class="relative px-5 py-2 rounded-full bg-primary-500/90 hover:bg-primary-600/90 transition-all duration-300">
                        Pricing
                    </span>
                </button>
            </div>
            
            <!-- Heading -->
            <h1 class="text-white font-bold text-4xl md:text-6xl bg-clip-text text-transparent leading-tight md:leading-normal mx-auto max-w-2xl text-center mb-4">
                Our <span class="bg-identity-gradient bg-clip-text text-transparent">Pricing</span> Packages
            </h1>
            <p class="text-gray-300 text-lg text-center max-w-2xl mx-auto mb-12">
                Choose the perfect plan for your business needs
            </p>
            
            <!-- Pricing Cards -->
            <div class="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 mt-10">
                <!-- Basic Plan -->
                <div class="relative   backdrop:blur-2xl bg-white/5  p-8 border border-gray-700 rounded-3xl hover:border-[#8D1EA2] transition-all duration-300 hover:shadow-lg hover:shadow-[#8D1EA2]/20">
                    <h2 class="text-white font-semibold text-3xl mb-2">Basic</h2>
                    <p class="text-gray-300 text-lg mb-6">Essential features to get started</p>
                    <div class="mb-8">
                        <span class="text-white text-2xl align-top">$</span>
                        <span class="text-white text-6xl font-bold">19</span>
                        <span class="text-gray-400 text-xl">/month</span>
                    </div>
                    <button class="w-full p-[2px] mb-8 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300">
                        <div class="bg-gray-800/80 py-3 rounded-xl w-full text-white font-medium hover:bg-transparent transition-all duration-300">
                            Get Started
                        </div>
                    </button>
                    <ul class="space-y-4">
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Type of threat analysis
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Online presence monitoring
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Basic modules access
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Notability tracking
                        </li>
                    </ul>
                </div>

                <!-- Popular Plan -->
                <div class="relative   backdrop:blur-2xl bg-white/5   p-10 border-2 border-[#8D1EA2] rounded-3xl transform md:scale-105 z-10 shadow-xl shadow-[#8D1EA2]/30">
                    <div class="absolute top-0 right-6 -mt-4 bg-[#8D1EA2] text-white text-sm font-bold px-4 py-1 rounded-full">
                        MOST POPULAR
                    </div>
                    <h2 class="text-white font-semibold text-3xl mb-2">Professional</h2>
                    <p class="text-gray-300 text-lg mb-6">Advanced features for growing businesses</p>
                    <div class="mb-8">
                        <span class="text-white text-2xl align-top">$</span>
                        <span class="text-white text-6xl font-bold">49</span>
                        <span class="text-gray-400 text-xl">/month</span>
                    </div>
                    <button class="w-full p-[2px] mb-8 rounded-xl bg-gradient-to-r from-[#090EDB] to-[#8D1EA2] hover:from-[#8D1EA2] hover:to-[#090EDB] transition-all duration-300 shadow-lg">
                        <div class="bg-transparent py-3 rounded-xl w-full text-white font-medium hover:bg-gray-900/30 transition-all duration-300">
                            Get Started
                        </div>
                    </button>
                    <ul class="space-y-4">
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Comprehensive threat analysis
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Full online presence monitoring
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Access to all modules
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Advanced notability tracking
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Website optimization tools
                        </li>
                    </ul>
                </div>

                <!-- Enterprise Plan -->
                <div class="relative   backdrop:blur-2xl bg-white/5  p-8 border border-gray-700 rounded-3xl hover:border-[#090EDB] transition-all duration-300 hover:shadow-lg hover:shadow-[#090EDB]/20">
                    <h2 class="text-white font-semibold text-3xl mb-2">Enterprise</h2>
                    <p class="text-gray-300 text-lg mb-6">Custom solutions for large organizations</p>
                    <div class="mb-8">
                        <span class="text-white text-2xl align-top">$</span>
                        <span class="text-white text-6xl font-bold">99</span>
                        <span class="text-gray-400 text-xl">/month</span>
                    </div>
                    <button class="w-full p-[2px] mb-8 rounded-xl bg-gradient-to-r from-gray-600 to-gray-700 hover:from-[#090EDB] hover:to-[#8D1EA2] transition-all duration-300">
                        <div class="bg-gray-800/80 py-3 rounded-xl w-full text-white font-medium hover:bg-transparent transition-all duration-300">
                            Contact Sales
                        </div>
                    </button>
                    <ul class="space-y-4">
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Enterprise-grade threat analysis
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Complete online presence monitoring
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3 border-b border-gray-700">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Premium modules access
                        </li>
                        <li class="text-white text-lg flex items-center gap-3 py-3">
                            <img src="@/assets/images/imgIcons/checkd.png" alt="Included" class="w-5 h-5">
                            Enterprise notability tracking
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>