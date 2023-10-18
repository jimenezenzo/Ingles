<template>
    <div class="leading-normal tracking-normal">
        <!-- <div class="max-w-6xl mx-auto mt-8 rounded fondo-image" :style="`background-image:url('${post.imgdestacada.data[0].attributes.url}');`"></div> -->
        
        <div class="container max-w-5xl mx-auto">
            <div class="mx-0 sm:mx-6">
                <div class="bg-white dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl leading-normal">
                    <ContentDoc class="prose max-w-none dark:prose-invert" />
                </div>
            </div>
            <Posts :url="url"></Posts>
        </div>
    </div>
</template>
    
<script setup>
    const url = useRoute().path
</script>
