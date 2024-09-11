<template>
    <div class="text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <ul v-for="post in resultSearch">
            <NuxtLink @click="clearSearch" :to="post.id" class="flex py-2 hover:bg-gray-300 dark:hover:bg-gray-400">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <span>{{ post.title }} - {{ post.titles.join(' - ') }}</span>
            </NuxtLink>
        </ul>
    </div>
</template>

<script setup>
    const resultSearch = useSearchResult()
    const isSearch = useIsSearch()
    
    const clearSearch = () => {
        resultSearch.value = []
        isSearch.value = false
    }
</script>