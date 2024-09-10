<template>
    <div class="md:w-1/2 flex flex-col mt-2 md:mt-0">
        <div class="container">
            <input type="search" id="default-search" v-model="search"
                class="block w-full p-2 text-gray-900 border rounded border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search content" required>
        </div>
    </div>
</template>

<script lang="ts" setup>
const search = ref('')
const loading = ref(false)
const errorResponse = ref('')
const searchResult = useSearchResult()
const isSearch = useIsSearch()

watch(search, async () => {
    if (search.value.length > 2 && loading.value == false) {
        isSearch.value = true
        loading.value = true
        try {
            const data = await searchContent(search.value)
            searchResult.value = [...data.value]
        } catch (error) {
            errorResponse.value = 'Error! Could not reach the API. ' + error
            console.error(errorResponse)
        } finally {
            loading.value = false
        }
    } else {
        isSearch.value = false
    }
})
</script>