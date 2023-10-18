import { Post } from "~/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        const posts = usePosts()
        const data = await queryContent('posts').find()
        posts.value = [...data]
    })
})