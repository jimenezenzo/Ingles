<template class="leading-normal tracking-normal">
    <h1 class="text-center pt-16 md:pt-32 font-bold break-normal text-3xl md:text-5xl mb-4">{{ referencia.attributes.titulo }}</h1>
    
    <div class="container max-w-5xl mx-auto pb-4">
        <div class="mx-0 sm:mx-6">
            <div class="w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                <RichText :block="referencia.attributes"></RichText>
            </div>
            <button @click="goBack" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold ml-8 py-2 px-4 rounded inline-flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                </svg>
                <span>Volver</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { useFindRerenciaByUrl } from '~/composables/post';

    const route = useRoute()
    const url = Array.isArray(route.params.url) ? route.params.url[0] : route.params.url

    const referencia = useFindRerenciaByUrl(url)
    if(referencia === undefined) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })

    const goBack = () => {
        const router = useRouter()
        router.back()
    }

    useHead({
        title: referencia.attributes.titulo
    })
</script>