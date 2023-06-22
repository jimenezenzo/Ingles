<template class="bg-white font-sans leading-normal tracking-normal">
    <!--Title-->
    <div class="text-center pt-16 md:pt-32">
        <p class="text-sm md:text-base text-green-500 font-bold">08 APRIL 2019 <span class="text-gray-900">/</span> GETTING STARTED</p>
        <h1 class="font-bold break-normal text-3xl md:text-5xl">{{ post?.title }}</h1>
    </div>
    
    <!--image-->
    <div class="container w-full max-w-6xl mx-auto bg-white bg-cover mt-8 rounded" style="background-image:url('https://source.unsplash.com/collection/1118905/'); height: 75vh;"></div>
    
    <!--Container-->
    <div class="container max-w-5xl mx-auto -mt-32">
        <div class="mx-0 sm:mx-6">
            <div class="bg-white w-full p-8 md:p-24 text-xl md:text-2xl text-gray-800 leading-normal" style="font-family:Georgia,serif;">
                <p class="text-2xl md:text-3xl mb-5">
                    {{ post?.subtitle }}
                </p>
    
                <section class="py-6" v-html="post?.body"></section>				
            </div>
        </div>
    </div>
</template>
    
<script setup lang="ts">
    import { isArray } from 'util';
import { Post } from '~/types';
    const route = useRoute()
    const url = route.params.url

    const post = ref<Post>()
    post.value = usePostByUrl(url)

    useHead({
        title: post.value?.title
    })
</script>