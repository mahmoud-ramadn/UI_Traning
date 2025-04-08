<template>
    <div class="pt-10 pb-16">
        <div class="max-w-[950px] mx-auto md:px-24 space-y-5 text-center">
            <h2 class="text-brown-100">Why teams love homerun’s Hiring Software</h2>
            <h1 class="font-extrabold text-brown-100 text-4xl">Join the club</h1>
            <p class="text-brown-100">Homerun customers share a passion for nurturing company culture.
                We all agree hiring can be more meaningful and personal.</p>
        </div>
        <div class="py-10">
            <ClientOnly>
                <Vue3Marquee
                    :duration="15"
                    :clone="true"
                    :loop="0"
                    :pause-on-hover="true"
                    class="mt-12 mb-8 vue3-marquee w-full flex justify-center items-center overflow-hidden"
                >
                    <div class="flex gap-x-10 mx-3 w-full h-fit  items-center justify-between">
                        <div
                            v-for="(item, index) in marqueeData"
                            :key="index"
                            class="bg-white md:px-14 px-7 max-w-[400px] rounded-xl h-fit space-y-4"
                            :class="item.paddingy"
                        >
                            <h1 class="">{{ item.title }}</h1>
                            <div class="flex items-center gap-x-5">
                                <img :src="item.img" alt="user" class="size-16 rounded-full">
                                <div>
                                    <h3>{{ item.name }}</h3>
                                    <p>{{ item.jobTitle }}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Vue3Marquee>
            </ClientOnly>
        </div>
    </div>
</template>

<script setup lang="ts">
import one from '@/assets/images/Sections/one.png'
import two from '@/assets/images/Sections/one.png'
const marqueeData = [
    {
        id: 1,
        title: "Homerun is super easy to use, even if you're technically challenged like me. ;-)",
        name: 'Molly LaBrode',
        jobTitle: 'HR Manager, Scribbr',
        img: one,
        paddingy: 'py-20' // Large padding
    },
    {
        id: 2,
        title: `The career page we've built in Homerun gives candidates a good first impression of the company.`,
        name: 'Molly LaBrode',
        jobTitle: 'HR Manager, Scribbr',
        img: two,
        paddingy: 'py-10' // Medium padding
    },
    {
        id: 3,
        title: "Homerun makes our hiring process so much more efficient and candidate-friendly!",
        name: 'John Smith',
        jobTitle: 'Talent Acquisition, TechCorp',
        img: two,
        paddingy: 'py-16' // Medium-large padding
    },
    {
        id: 4,
        title: "The customizable templates save us hours of work every week.",
        name: 'Sarah Johnson',
        jobTitle: 'Recruiter, DesignCo',
        img: two,
        paddingy: 'py-8' // Small-medium padding
    },
    {
        id: 5,
        title: "Our candidates love the personalized touch Homerun allows us to add.",
        name: 'David Wilson',
        jobTitle: 'HR Director, StartupX',
        img: two,
        paddingy: 'py-12' // Medium padding
    },
    {
        id: 6,
        title: "Best hiring software we've used - intuitive and powerful.",
        name: 'Emma Thompson',
        jobTitle: 'Head of People, GrowthLabs',
        img: two,
        paddingy: 'py-14' // Medium padding
    },
    {
        id: 7,
        title: "Homerun transformed how we approach candidate experience.",
        name: 'Michael Brown',
        jobTitle: 'CTO, DevHouse',
        img: two,
        paddingy: 'py-18' // Large padding
    },
    {
        id: 8,
        title: "Simple yet effective - exactly what we needed for our hiring process.",
        name: 'Lisa Chen',
        jobTitle: 'Recruiting Lead, MarketPro',
        img: two,
        paddingy: 'py-6' // Small padding
    }
]
</script>

<style scoped>
</style>