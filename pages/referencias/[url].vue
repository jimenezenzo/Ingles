<template class="leading-normal tracking-normal">
    <div v-if="pending" class="grid h-screen place-items-center">
		<svg class="animate-spin m-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M18.364 5.636L16.95 7.05A7 7 0 1 0 19 12h2a9 9 0 1 1-2.636-6.364Z"/></svg>
	</div>
    <div v-if="!pending && !error && referencia">
        <h1 class="text-center pt-16 md:pt-32 font-bold break-normal text-3xl md:text-5xl mb-4">{{ referencia.titulo }}</h1>
    
        <div class="container max-w-5xl mx-auto pb-4">
            <div class="mx-0 sm:mx-6">
                <div class="w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal">
                    <RichText v-if="referencia" :block="referencia"></RichText>
                </div>
                <button @click="goBack" class="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold ml-8 py-2 px-4 rounded inline-flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                    </svg>
                    <span>Volver</span>
                </button>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import { Referencia } from '~/types';

    const route = useRoute()
    const referencia = ref<Referencia>()
    const { find } = useStrapi()

	const { data, pending, refresh, error } = await useAsyncData(
		'referencias',
		() => find<Referencia>('referencias', {filters: {url: route.params.url}})
	)
    if(data.value?.data.length === 0) throw createError({ statusCode: 404, statusMessage: 'Page Not Found' })
    if(data.value?.data !== undefined && data.value?.data.length > 0) referencia.value = {...data.value?.data[0].attributes}

    const goBack = () => {
        const router = useRouter()
        router.back()
    }

    useHead({
        title: referencia.value?.titulo
    })
</script>