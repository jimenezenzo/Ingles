<template>
    <div class="md:w-1/2 flex flex-col mt-2 md:mt-0">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
            </div>
            <input type="search" id="default-search" v-model="search"
                class="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                placeholder="Search content" required>
            <div class="block absolute w-full text-sm text-gray-900 border border-gray-300 rounded-b-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
                v-if="postsSearch.length > 0">
                <ul v-for="post in postsSearch">
                    <NuxtLink @click="clearSearch" :to="post.id"
                        class="block p-2 hover:bg-gray-300 dark:hover:bg-gray-400">
                        {{ post.title }} - {{ post.titles.join(' - ') }}
                    </NuxtLink>
                </ul>
            </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
const search = ref('')
const loading = ref(false)
const postsSearch = ref([])
const errorResponse = ref('')

watch(search, async () => {
    if (search.value.length > 2 && loading.value == false) {
        loading.value = true
        try {
            const data = await searchContent(search.value)
            postsSearch.value = data.value
        } catch (error) {
            errorResponse.value = 'Error! Could not reach the API. ' + error
            console.error(errorResponse)
        } finally {
            loading.value = false
        }
    } else {
        postsSearch.value = []
    }
})

const clearSearch = () => search.value = ''
</script>