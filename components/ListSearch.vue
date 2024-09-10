<template>
    <div class="text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white">
        <ul v-for="post in resultSearch">
            <NuxtLink @click="clearSearch" :to="post.id" class="block p-2 hover:bg-gray-300 dark:hover:bg-gray-400">
                {{ post.title }} - {{ post.titles.join(' - ') }}
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