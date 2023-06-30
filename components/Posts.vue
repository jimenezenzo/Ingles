<template>
    <p class="text-xl md:text-2xl text-gray pt-10 uppercase text-center">Clases</p>
    <div class="flex flex-wrap justify-between">
        <div v-for="post in posts" class="w-full md:w-1/3 py-6 flex flex-col flex-grow flex-shrink">
            <div class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow-lg">
                <NuxtLink :to="`/posts/${post.attributes.url}`" class="flex flex-wrap no-underline hover:no-underline">
                    <img :src="post.attributes.imgdestacada.data[0].attributes.url" class="h-64 w-full rounded-t pb-6">
                    <div class="w-full font-bold text-xl text-gray-900 px-6">{{ post.attributes.titulo }}</div>
                    <p class="text-gray-800 text-base px-6 mb-5">{{ post.attributes.resumen }}</p>
                </NuxtLink>
            </div>
            <!-- <div class="flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow-lg p-6">
                <div class="flex items-center justify-between">
                    <img class="w-8 h-8 rounded-full mr-4 avatar" data-tippy-content="Author Name" src="http://i.pravatar.cc/300" alt="Avatar of Author">
                    <p class="text-gray-600 text-xs md:text-sm">1 MIN READ</p>
                </div>
            </div> -->
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