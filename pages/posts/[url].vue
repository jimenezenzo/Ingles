<template>
    <div v-if="pending" class="grid h-screen place-items-center">
		<svg class="animate-spin m-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364Z"/></svg>
	</div>
    <div v-if="!pending && !error && post" class="leading-normal tracking-normal">
        <div class="text-center pt-16 md:pt-32">
            <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.titulo }}</h1>
        </div>

        <div class="max-w-6xl mx-auto mt-8 rounded fondo-image" :style="`background-image:url('${post.imgdestacada.data[0].attributes.url}');`"></div>
        
        <div class="container max-w-5xl mx-auto md:-mt-32">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl leading-normal">
                    <p class="text-2xl md:text-3xl mb-5">{{ post.resumen }}</p>
                    <RichText :block="post"></RichText>
                    <div v-if="post.referencias.data.length > 0">
                        <h2 class="font-bold break-normal text-2xl md:text-3xl pt-5">Referencias</h2>
                        <ul class="p-2">
                            <li v-for="referencia in post.referencias.data" class="list-disc">
                                <NuxtLink :to="`/referencias/${referencia.attributes.url}`" class="text-blue-500">
                                    {{ referencia.attributes.titulo }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div v-if="post.padlet" class="mt-4">
                        <h3 class="text-2xl md:text-3xl pt-5 text-center mb-5">Recursos</h3>
                        <div v-html="post.padlet" class="recursos"></div>
                    </div>
                </div>
            </div>
            <Posts :url="url"></Posts>
        </div>
    </div>
</template>
    
<script setup lang="ts">
    import { Post } from '~/types';

    const route = useRoute()
    const url = Array.isArray(route.params.url) ? route.params.url[0] : route.params.url

    const post = ref<Post>()
    const { find } = useStrapi()
	const { data, pending, refresh, error } = await useAsyncData(
		'posts',
		() => find<Post>('posts', {filters: {url}, populate: '*'})
	)
    
    if(data.value?.data.length === 0) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    if(data.value?.data !== undefined && data.value?.data.length > 0) post.value = {...data.value?.data[0].attributes}

    useHead({
        title: post.value?.titulo
    })
</script>

<style scoped>
    .fondo-image { 
        height: 30vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .recursos :deep(*) {
        margin-bottom: 25px;
    }

    @media only screen and (min-width: 768px) {
        .fondo-image {
            height: 75vh;
        }

        .recursos :deep(*) {
            margin-bottom: 40px;
        }
    }
</style>