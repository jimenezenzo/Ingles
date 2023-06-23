import { Post } from "~/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        const posts = usePosts()
        const { data, error } = await useFetch<Post[]>('/api/data')
        if(!error.value && data.value !== null) posts.value = data.value 
    })
})