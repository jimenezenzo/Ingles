<template>
    <div class="sticky top-0 z-50 bg-teal-600">
        <nav class="flex items-start justify-between flex-wrap p-6">
            <div class="text-white md:mr-6">
                <NuxtLink class="flex items-center" to="/">
                    <img src="/favicon.ico" alt="iconn" class="rounded w-10 mr-2">
                    <span class="font-semibold text-xl tracking-tight">English</span>
                </NuxtLink>
            </div>
            <button
                class="md:order-last flex items-center px-3 py-2 border rounded border-white dark:border-transparent dark:bg-white"
                @click="changeColor">
                <svg class="fill-current h-5 w-5 m-auto text-white dark:text-teal-500" viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path v-if="colorMode.preference === 'light'"
                        d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    <path v-else
                        d="M12 6.934L13 4a1.055 1.055 0 1 0-2 0l1 2.934zM4 11a1.055 1.055 0 1 0 0 2l2.934-1L4 11zm8 6.066L11 20a1.055 1.055 0 1 0 2 0l-1-2.934zm9.341-5.409A1.055 1.055 0 0 0 20 10.998l-2.934 1l2.934 1a1.057 1.057 0 0 0 1.341-1.341zM5.636 7.05l2.781 1.367L7.05 5.636A1.057 1.057 0 1 0 5.636 7.05zm-.483 10.382a1.057 1.057 0 0 0 1.896.932l1.367-2.781l-2.781 1.367a1.056 1.056 0 0 0-.482.482zm13.21-.483l-2.781-1.367l1.367 2.781a1.056 1.056 0 1 0 1.414-1.414zm.481-10.383a1.057 1.057 0 0 0-1.895-.933L15.58 8.416l2.782-1.368c.202-.1.375-.264.482-.482zM12 7.5c-2.481 0-4.5 2.019-4.5 4.5s2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5s-2.019-4.5-4.5-4.5z" />
                </svg>
            </button>
            <button class="lg:hidden flex items-center px-3 py-2 border rounded border-white"
                @click="isActive = !isActive">
                <svg aria-hidden="true" class="w-5 h-5 text-white " fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </button>
            <div :class="['w-full flex-grow lg:flex lg:items-center lg:w-auto', classObject]">
                <Search/>
            </div>
        </nav>
    </div>
</template>

<script setup>
const isActive = ref(false)
const { colorMode, changeColor } = useColor()
const classObject = computed(() => isActive.value ? 'block' : 'hidden')

onMounted(() => colorMode.preference = localStorage.getItem('theme') ?? 'light')
</script>