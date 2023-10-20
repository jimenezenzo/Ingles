<template>
    <div class="leading-normal tracking-normal">
        <div class="max-w-6xl mx-auto fondo-image" :style="`background-image:url('${data.image.src}');`"></div>
        <div class="container max-w-8xl mx-auto md:-mt-32">
            <div class="mx-0 mb-8 sm:mx-6">
                <div class="bg-slate-100 dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl rounded-lg">
                    <ContentDoc class="prose prose-headings:no-underline md:prose-lg lg:prose-x max-w-none dark:prose-invert" />
                </div>
            </div>
            <Posts :url="url"></Posts>
        </div>
    </div>
</template>

<script setup>
    const url = useRoute().path
    const data = usePosts().value.find(p => p._path === url)
</script>

<style scoped>
    .fondo-image { 
        height: 30vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;
    }

    @media only screen and (min-width: 768px) {
        .fondo-image {
            height: 75vh;
        }
    }
</style>