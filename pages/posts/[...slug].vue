<template>
    <div class="mx-auto fondo-image" :style="`background-image:url('${data.image.src}');`"></div>
    <div class="container max-w-8xl mx-auto md:-mt-32">
        <div class="bg-slate-100 md:bg-white dark:bg-gray-800 p-4 md:p-24 rounded-lg">
            <ContentDoc class="max-w-none prose prose-headings:no-underline md:prose-lg lg:prose-x dark:prose-invert" />
        </div>
        <div class="px-4 md:px-0">
            <Posts :path="path"></Posts>
        </div>
    </div>
</template>

<script setup>
const path = useRoute().path
const data = usePosts().value.find(p => p._path === path)
</script>

<style scoped>
.fondo-image {
    height: 30dvh;
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
}

@media only screen and (min-width: 768px) {
    .fondo-image {
        height: 75dvh;
    }
}
</style>