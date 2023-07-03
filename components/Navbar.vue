<template>
    <div class="sticky top-0 bg-teal-600">
        <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/favicon.ico" alt="iconn" class="rounded w-10">
                <span class="font-semibold text-xl tracking-tight">Literatura</span>
            </div>
            <div>
                <button class="text-white border rounded text-teal-200 border-white p-1" @click="changeColor">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
                    </svg>
                </button>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-white hover:text-white hover:border-white" @click="changeActive">
                    <svg class="fill-current h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div :class="['w-full lg:block lg:flex flex-grow lg:items-center lg:w-auto', classObject]">
                <div class="text-sm lg:flex-grow">
                    <NuxtLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">Home</NuxtLink>
                </div>
            </div>
        </nav>
    </div>
</template>

<script setup lang="ts">
    const isActive  = ref(false)

    const classObject = computed(() => isActive.value ? 'block' : 'hidden')
    const changeActive = () => isActive.value = !isActive.value

    const colorMode = useColorMode()
    colorMode.preference = 'light'

    const changeColor = () => colorMode.preference === 'light' ? colorMode.preference = 'dark' : colorMode.preference = 'light'
</script>