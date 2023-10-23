<template>
     <div class="container max-w-8xl mx-auto py-4 md:py-8">
        <div class="bg-slate-100 md:bg-white dark:bg-gray-800 p-4 md:p-24 rounded-lg">
            <ContentDoc class="max-w-none prose prose-headings:no-underline md:prose-lg lg:prose-x dark:prose-invert" />
            <button @click="goBack" class="mt-4 bg-gray-400 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
            </button>
        </div>
    </div>
</template>

<script setup>
    const goBack = () => {
        const router = useRouter()
        router.back()
    }
</script>