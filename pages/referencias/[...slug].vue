<template>
    <div class="leading-normal tracking-normal">
        <div class="container max-w-5xl mx-auto pb-4">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl leading-normal">
                    <ContentDoc class="prose max-w-none dark:prose-invert" />

                    <button @click="goBack" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold ml-8 py-2 px-4 rounded inline-flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                        </svg>
                        <span>Volver</span>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const goBack = () => {
        const router = useRouter()
        router.back()
    }
</script>