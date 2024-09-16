<template>
    <div class="md:w-1/2 flex">
        <input type="search" 
            id="default-search" 
            v-model="search"
            class="block w-full p-2 text-sm text-gray-900 border rounded-lg border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search content" required
        >
        <button @click="onIsSearch" class="md:hidden ml-1 px-1 h-1/5 m-auto text-white text-lg">
            cancelar
        </button>
    </div>
</template>

<script lang="ts" setup>
const search = ref('')
const searchResult = useSearchResult()
const isSearch = useIsSearch()

const onIsSearch = () => isSearch.value = !isSearch.value

watch(search, async () => {
    if (search.value.length > 2) {
        const data = await searchContent(search.value)
        searchResult.value = [...data.value]
    }
})
</script>