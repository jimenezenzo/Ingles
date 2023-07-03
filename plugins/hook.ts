import { Post, Presentacion } from "~/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', () => {
        const posts = usePosts()
        const presentacion = usePresentacion()
        const loadPosts = useLoadPosts()
        const { find, findOne } = useStrapi()

        Promise.all([find<Post>('posts', {populate: '*'}), findOne<Presentacion>('presentacion')])
            .then((response) => {
                const [dataPosts, dataPresentacion] = response
                posts.value = [...dataPosts.data]
                presentacion.value = {...dataPresentacion.data}
                loadPosts.value = false
            })
    })
})