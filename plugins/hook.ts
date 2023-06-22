import { Post } from "~/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        const posts = usePosts()
        const { data } = await useFetch<Post[]>('/api/data')
        if(data.value != null) posts.value = data.value 
     })
})