<template>
    <div class="sticky top-0 z-50 bg-teal-600">
        <nav class="flex items-center justify-between flex-wrap p-6">
            <div class="flex items-center flex-shrink-0 text-white mr-6">
                <img src="/favicon.ico" alt="iconn" class="rounded w-10">
                <span class="font-semibold text-xl tracking-tight">Literatura</span>
            </div>
            <div class="block lg:hidden">
                <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-white hover:text-white hover:border-white" @click="changeActive">
                    <svg class="fill-current h-3 w-3 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <title>Menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                    </svg>
                </button>
            </div>
            <div :class="['w-full flex-grow lg:flex lg:items-center lg:w-auto', classObject]">
                <div class="text-sm lg:flex-grow">
                    <NuxtLink to="/" class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4">Home</NuxtLink>
                </div>
                <div>
                    <button class="inline-block text-sm px-3 py-1 leading-none border rounded text-white border-white dark:border-transparent dark:text-teal-500 dark:bg-white mt-4 lg:mt-0" @click="changeColor">
                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6.934L13 4a1.055 1.055 0 1 0-2 0l1 2.934zM4 11a1.055 1.055 0 1 0 0 2l2.934-1L4 11zm8 6.066L11 20a1.055 1.055 0 1 0 2 0l-1-2.934zm9.341-5.409A1.055 1.055 0 0 0 20 10.998l-2.934 1l2.934 1a1.057 1.057 0 0 0 1.341-1.341zM5.636 7.05l2.781 1.367L7.05 5.636A1.057 1.057 0 1 0 5.636 7.05zm-.483 10.382a1.057 1.057 0 0 0 1.896.932l1.367-2.781l-2.781 1.367a1.056 1.056 0 0 0-.482.482zm13.21-.483l-2.781-1.367l1.367 2.781a1.056 1.056 0 1 0 1.414-1.414zm.481-10.383a1.057 1.057 0 0 0-1.895-.933L15.58 8.416l2.782-1.368c.202-.1.375-.264.482-.482zM12 7.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z"/></svg>
                    </button>
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

    onMounted(() => colorMode.preference = localStorage.getItem('theme') ?? 'light')

    const changeColor = () => {
        if(colorMode.preference === 'light') {
            colorMode.preference = 'dark'
            localStorage.theme = 'dark'
        } else {
            colorMode.preference = 'light'
            localStorage.theme = 'light'
        }
    }
</script>