export default defineNuxtPlugin(nuxtApp => {
    nuxtApp.hook('app:created', async () => {
        const posts = usePosts()
        const data = await queryContent('posts').only(['title', 'description', 'image', '_path']).find()
        posts.value = [...data]
    })
})