<template>
    <div class="md:w-1/2 mt-2 md:mt-0 flex">
        <input type="search" 
            id="default-search" 
            v-model="search"
            class="block w-full p-2 text-gray-900 border rounded border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Search content" required
        >
        <button @click="onIsSearch" class="md:hidden ml-1 px-1 h-1/5 m-auto text-white border rounded-lg border-gray-300">
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
        isSearch.value = true
        const data = await searchContent(search.value)
        searchResult.value = [...data.value]
    } else {
        isSearch.value = false
    }
})
</script>