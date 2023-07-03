<template>
    <div class="leading-normal tracking-normal">
        <div class="text-center pt-16 md:pt-32">
            <!-- <p class="text-sm md:text-base text-green-500 font-bold">{{ formatearFecha(post.attributes.createdAt) }}</p> -->
            <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post.attributes.titulo }}</h1>
        </div>

        <div class="max-w-6xl mx-auto mt-8 rounded fondo-image" :style="`background-image:url('${post.attributes.imgdestacada.data[0].attributes.url}');`"></div>
        
        <div class="container max-w-5xl mx-auto md:-mt-32">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl leading-normal">
                    <p class="text-2xl md:text-3xl mb-5">{{ post.attributes.resumen }}</p>
                    <RichText :block="post.attributes"></RichText>
                    <div v-if="post.attributes.referencias.data.length > 0">
                        <h2 class="font-bold break-normal text-2xl md:text-3xl pt-5">Referencias</h2>
                        <ul class="p-2">
                            <li v-for="referencia in post.attributes.referencias.data" class="list-disc">
                                <NuxtLink :to="`/referencias/${referencia.attributes.url}`" class="text-blue-500">
                                    {{ referencia.attributes.titulo }}
                                </NuxtLink>
                            </li>
                        </ul>
                    </div>
                    <div v-if="post.attributes.padlet" class="mt-4">
                        <h3 class="text-2xl md:text-3xl pt-5 text-center mb-5">Recursos</h3>
                        <div class="recursos" v-html="post.attributes.padlet"></div>
                    </div>
                </div>
            </div>
            <Posts :url="url"></Posts>
        </div>
    </div>
</template>
    
<script setup lang="ts">
    import { useFindPostByUrl } from '~/composables/post';

    const route = useRoute()
    const url = Array.isArray(route.params.url) ? route.params.url[0] : route.params.url
    const post = useFindPostByUrl(url)
    if(post === undefined) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

    const formatearFecha = (fecha: string) => {
        const event = new Date(fecha);
        const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric' };
        return event.toLocaleDateString('es-AR', options)
    }

    useHead({
        title: post.attributes.titulo
    })
</script>

<style scoped>
    .fondo-image { 
        height: 30vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    .recursos > div {
        margin-bottom: 25px;
    }

    @media only screen and (min-width: 768px) {
        .fondo-image {
            height: 75vh;
        }
    }
</style>