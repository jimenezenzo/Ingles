<template>
    <p class="text-xl md:text-2xl text-gray pt-10 uppercase text-center">Lessons</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="post in posts" :key="post._path" class="col-auto py-3 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 rounded overflow-hidden bg-slate-100 dark:bg-slate-800 shadow hover:shadow-lg hover:bg-slate-200  dark:hover:bg-slate-600">
                <NuxtLink :to="post._path" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="post.image.src" class="h-64 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl px-6">{{ post.title }}</div>
                    <p class="text-base px-6 mb-5">{{ post.description }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    const props = defineProps<{
        url?: string
    }>()

    const posts = props.url ? usePosts().value.filter(p => p._path !== props.url) : usePosts().value
</script>