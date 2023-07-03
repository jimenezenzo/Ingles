<template>
    <p class="text-xl md:text-2xl text-gray pt-10 uppercase text-center">Clases</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="post in posts" class="col-auto py-3 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 rounded overflow-hidden bg-white dark:bg-gray-800 shadow-lg border-solid border-2 border-gray-600">
                <NuxtLink :to="`/posts/${post.attributes.url}`" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="post.attributes.imgdestacada.data[0].attributes.url" class="h-64 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl px-6">{{ post.attributes.titulo }}</div>
                    <p class="text-base px-6 mb-5">{{ post.attributes.resumen }}</p>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { usePosts } from '~/composables/post';
    const props = defineProps<{
        url?: string
    }>()
    const data = usePosts()
    const posts = props.url ? data.value.filter(p => p.attributes.url !== props.url) : data.value
</script>