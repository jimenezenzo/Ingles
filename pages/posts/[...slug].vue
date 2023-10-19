<template>
    <div class="leading-normal tracking-normal">
        <div class="container max-w-5xl mx-auto">
            <div class="mx-0 sm:mx-6 rounded shadow min-h-screen">
                <div class="bg-gray-200 dark:bg-gray-800 w-full p-8 md:p-24 text-xl md:text-2xl leading-normal">
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
