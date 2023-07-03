import { Post, Presentacion } from "~/types"

export default defineNuxtPlugin((nuxtApp) => {
    nuxtApp.hook('app:created', async () => {
        const posts = usePosts()
        const presentacion = usePresentacion()
        const [dataPosts, dataPresentacion] = await Promise.all([cargarPosts(), cargarPresentacion()])
        posts.value = [...dataPosts]
        presentacion.value = {...dataPresentacion}
    })
})

const cargarPosts = async () => {
    const { find } = useStrapi()
    const { data } = await find<Post>('posts', {populate: '*'})
    return data
}

const cargarPresentacion = async () => {
	const { findOne } = useStrapi()
	const { data } = await findOne<Presentacion>('presentacion')
    return data
}
